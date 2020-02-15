/********************************************************************************
 * Copyright (C) 2019 Elliott Wen.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import { injectable, inject } from 'inversify';

import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { MAIN_MENU_BAR, DisposableCollection } from '@theia/core';
import { LaTeXEngine } from './latex-engine';
import { XDVExporter } from './xdv-exporter';
import { S3StorageSystem } from '@theia/filesystem/lib/browser/s3storagesystem';
import { getDocument } from 'pdfjs-dist';
import { MonacoWorkspace, MonacoDidChangeTextDocumentParams } from '@theia/monaco/lib/browser/monaco-workspace';
import { MonacoEditorModel } from '@theia/monaco/lib/browser/monaco-editor-model';
import { MonacoYJSBinding } from './monaco-yjs';

export namespace LaTeXMenus {
    export const LATEX = [...MAIN_MENU_BAR, '7_latex'];
    export const LATEX_QUICK_BUILD = [...LATEX, '1_latex'];
    export const LATEX_BUILD = [...LATEX, '1_latex'];
    export const LATEX_EXPORT = [...LATEX, '1_latex'];
    export const LATEX_CLEAN = [...LATEX, '2_latex'];
    export const ENGINE_RESTART = [...LATEX, '2_latex'];
}

export namespace LaTeXCommands {
    const LATEX_CATEGORY = 'LaTeX';
    export const BUILD_QUICK: Command = {
        id: 'latex:build',
        category: LATEX_CATEGORY,
        label: 'Swift Compile'
    };
    export const BUILD_LINK: Command = {
        id: 'latex:quickbuild',
        category: LATEX_CATEGORY,
        label: 'Full Compile'
    };
    export const PROJECT_EXPORT: Command = {
        id: 'latex:export',
        category: LATEX_CATEGORY,
        label: 'Export PDF'
    };
    export const PROJECT_CLEAN: Command = {
        id: 'latex:clean',
        category: LATEX_CATEGORY,
        label: 'Clean Project'
    };
    export const ENGINE_RESTART: Command = {
        id: 'latex:restart',
        category: LATEX_CATEGORY,
        label: 'Restart Engine'
    };
}

@injectable()
export class LaTeXMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerSubmenu(LaTeXMenus.LATEX, 'LaTeX');
        menus.registerMenuAction(LaTeXMenus.LATEX_QUICK_BUILD, {
            commandId: LaTeXCommands.BUILD_QUICK.id,
            order: '0'
        });
        menus.registerMenuAction(LaTeXMenus.LATEX_BUILD, {
            commandId: LaTeXCommands.BUILD_LINK.id,
            order: '1'
        });
        menus.registerMenuAction(LaTeXMenus.LATEX_EXPORT, {
            commandId: LaTeXCommands.PROJECT_EXPORT.id,
            order: '2'
        });
        menus.registerMenuAction(LaTeXMenus.LATEX_CLEAN, {
            commandId: LaTeXCommands.PROJECT_CLEAN.id,
            order: '3'
        });
        menus.registerMenuAction(LaTeXMenus.ENGINE_RESTART, {
            commandId: LaTeXCommands.ENGINE_RESTART.id,
            order: '4'
        });
    }
}

@injectable()
export class LaTeXCommandContribution implements CommandContribution {

    private cachedXDV: Uint8Array | undefined = undefined;
    private hasFileSyncedToEngine: boolean = false;
    protected readonly toDispose = new DisposableCollection();
    private readonly opened_handles: Map<string, number> = new Map<string, number>();
    private mainFile: string | undefined = undefined;

    constructor(
        @inject(S3StorageSystem) private readonly s3filesystem: S3StorageSystem,
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(LaTeXEngine) private readonly latexEngine: LaTeXEngine,
        @inject(XDVExporter) private readonly xdvExporter: XDVExporter,
        @inject(MonacoWorkspace) private readonly workspace: MonacoWorkspace,
    ) {
        this.toDispose.push(this.workspace.onDidOpenTextDocument(model => this.fireDidOpenDocument(model)));
        this.toDispose.push(this.workspace.onDidChangeTextDocument(param => this.fireDidChangeContents(param)));
        this.toDispose.push(this.workspace.onDidCloseTextDocument(model => this.fireDidCloseDocument(model)));
    }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(LaTeXCommands.BUILD_QUICK, {
            execute: () => this.quickBuild(),
            isEnabled: () => this.latexEngine.isReady()
        });
        registry.registerCommand(LaTeXCommands.BUILD_LINK, {
            execute: () => this.fullBuild(),
            isEnabled: () => this.latexEngine.isReady()
        });
        registry.registerCommand(LaTeXCommands.PROJECT_EXPORT, {
            execute: () => this.exportPDF(),
            isEnabled: () => this.latexEngine.isReady() && this.cachedXDV !== undefined
        });
        registry.registerCommand(LaTeXCommands.PROJECT_CLEAN, {
            execute: () => this.cleanProject(),
            isEnabled: () => this.latexEngine.isReady()
        });
        registry.registerCommand(LaTeXCommands.ENGINE_RESTART, {
            execute: () => this.restartEngine(),
            isEnabled: () => this.latexEngine.isReady(),
        });
    }

    protected async quickBuild(): Promise<void> {
        if (!this.latexEngine.isReady()) {
            return;
        }

        const mainTempFiles = await this.resolveMainFile();
        if (mainTempFiles.length === 0) {
            this.messageService.error('Cannot locate the main LaTeX entry file. Please create a main entry file before compilation', { timeout: 3000 });
            return;
        }

        if (mainTempFiles.length > 1) {
            this.messageService.error(`Compiler cannot tell which file is the main entry file, either ${mainTempFiles[0]} or ${mainTempFiles[1]}`, { timeout: 3000 });
            return;
        }

        if (!this.hasFileSyncedToEngine) {
            this.hasFileSyncedToEngine = true;
            await this._syncFileToEngine('/');
        }

        this.messageService.info('Building. If citation is important to you, please use Full Compile.', { timeout: 3000 });
        this.latexEngine.setEngineMainFile(mainTempFiles[0]);
        const compileResult = await this.latexEngine.compileLaTeX();
        if (compileResult.status === 1 || compileResult.status === 0) {
            /* Successful compilation */
            this.cachedXDV = compileResult.pdf;
            console.log('Compiled successfully');
        }
        /* Write log to output and parse log */

    }

    private async _syncFileToEngine(url: string): Promise<void> {
        const objs = await this.s3filesystem.readdir(url);
        for (let j = 0; j < objs.length; j++) {
            const obj = objs[j];
            if (obj.isDir) {
                if (obj.uri.includes('.swiftlatex') || obj.uri.includes('.theia')) {
                    continue;
                }
                this.latexEngine.makeMemFSFolder(obj.uri);
                await this._syncFileToEngine(obj.uri);
            } else {
                let content: Uint8Array | string = await this.s3filesystem.readFile(obj.uri);
                if (obj.uri.endsWith('.pdf') || obj.uri.endsWith('.jpg')
                    || obj.uri.endsWith('.png') || obj.uri.endsWith('.bmp')) {
                    content = await this.measureImageDim(content, obj.uri);
                }
                this.latexEngine.writeMemFSFile(content, obj.uri);
                console.log('Writing file to engine ' + obj.uri);
            }
        }
    }

    private async measureImageDim(content: Uint8Array, name: string): Promise<string> {
        if (name.endsWith('pdf')) {
            const tempPDFURL = URL.createObjectURL(new Blob([content], { type: 'application/octet-stream' }));
            try {
                const pdfDoc = await getDocument(tempPDFURL).promise;
                const page = await pdfDoc.getPage(1);
                const viewport = page.getViewport({ scale: 1 });
                const tmpWidth = viewport.width;
                const tmpHeight = viewport.height;
                pdfDoc.destroy();
                return `swiftlatex\n${tmpWidth}\n${tmpHeight}\n`;
            } catch {
                console.error(`Unable to measure the pdf document ${name}, return a dummy dimension `);
                return 'swiftlatex\n300\n400\n';
            } finally {
                URL.revokeObjectURL(tempPDFURL);
            }
        } else {
            return new Promise((resolve, reject) => {
                const tempImageURL = URL.createObjectURL(new Blob([content], { type: 'application/octet-stream' }));
                const tmpImgElement = new Image();
                tmpImgElement.onload = (_ => {
                    URL.revokeObjectURL(tempImageURL);
                    resolve(`swiftlatex\n${tmpImgElement.width}\n${tmpImgElement.height}\n`);
                });
                tmpImgElement.onerror = (_ => {
                    console.error(`Unable to measure the image document ${name}, return a dummy dimension `);
                    URL.revokeObjectURL(tempImageURL);
                    resolve('swiftlatex\n300\n400\n');
                });
                tmpImgElement.src = tempImageURL;
            });
        }
    }

    protected async fullBuild(): Promise<void> {
        if (!this.latexEngine.isReady()) {
            return;
        }
        /* Force a sync */
        this.hasFileSyncedToEngine = false;

        this.messageService.info('Building...', { timeout: 3000 });

        /* Reach the fix point in 3 times */
        const try_time = 3;
        for (let j = 0; j < try_time; j++) {
            await this.quickBuild();
        }
    }

    protected async cleanProject(): Promise<void> {
        this.messageService.info('Cleaning build cache...', { timeout: 3000 });
        if (!this.latexEngine.isReady()) {
            return;
        }
        this.hasFileSyncedToEngine = false;
        this.latexEngine.flushCache();
    }

    protected async exportPDF(): Promise<void> {
        if (!this.cachedXDV) {
            return;
        }
        this.messageService.info('Exporting PDF...', { timeout: 3000 });
        await this.xdvExporter.loadExporter();
        await this._syncFileToExporter('/');
        this.xdvExporter.writeMainXDVFile(this.cachedXDV);
        const res = await this.xdvExporter.exportPDF();
        if (res.status === 1 || res.status === 0) {
            console.log('Convert successfully');
        }
        this.xdvExporter.closeWorker();
    }

    protected async restartEngine(): Promise<void> {
        this.messageService.info('Restarting Engine...', { timeout: 3000 });
        this.latexEngine.closeWorker();
        this.hasFileSyncedToEngine = false;
        await this.latexEngine.loadEngine();
    }

    protected fireDidChangeContents(param: MonacoDidChangeTextDocumentParams): void {
        if (this.shouldIgnore(param.textDocument)) {
            return;
        }
        if (this.latexEngine.isReady()) {
            const save_uri = param.textDocument.uri.substr(7);
            this.latexEngine.writeMemFSFile(param.textDocument.getText(), save_uri);
            /* Please fire up a new compilation */
        }
    }

    protected fireDidOpenDocument(model: MonacoEditorModel): void {
        if (this.shouldIgnore(model)) {
            return;
        }
        /* Kick off YJS */
        if (this.opened_handles.has(model.uri)) {
            return;
        }
        new MonacoYJSBinding(model);
    }

    protected fireDidCloseDocument(model: MonacoEditorModel): void {
        if (this.shouldIgnore(model)) {
            return;
        }
        if (this.opened_handles.has(model.uri)) {
            this.opened_handles.delete(model.uri);
        }
    }

    private shouldIgnore(model: MonacoEditorModel): boolean {
        if (!model || !model.valid) {
            return true;
        }
        if (!model.uri.startsWith('file:///')) {
            return true;
        }
        if (model.uri.startsWith('file:///.theia') ||
            model.uri.startsWith('file:///.vscode') ||
            model.uri.startsWith('file:///.swiftlatex')) {
            return true;
        }
        return false;
    }

    private async resolveMainFile(): Promise<string[]> {
        /* has resolved before */
        if (this.mainFile) {
            return [this.mainFile];
        }

        const objs = await this.s3filesystem.readdir('/');

        /* Try previous saved mainfile */
        const saved_mainfile = window.localStorage.getItem(window.location.pathname + 'main_config');
        if (!saved_mainfile) {
            /* We should verify it */
            for (let j = 0; j < objs.length; j++) {
                if (!objs[j].isDir && objs[j].uri === saved_mainfile) {
                    /* Solved */
                    this.mainFile = saved_mainfile!;
                    return [this.mainFile];
                }
            }
        }

        const possibleCandicates: string[] = [];
        /* See whether there is only one .tex file */
        for (let k = 0; k < objs.length; k++) {
            if (!objs[k].isDir && objs[k].uri.endsWith('.tex')) {
                possibleCandicates.push(objs[k].uri);
            }
        }
        return possibleCandicates;
    }

    private async _syncFileToExporter(url: string): Promise<void> {
        const objs = await this.s3filesystem.readdir(url);
        for (let j = 0; j < objs.length; j++) {
            const obj = objs[j];
            if (obj.isDir) {
                if (obj.uri.includes('.swiftlatex') || obj.uri.includes('.theia')) {
                    continue;
                }
                this.latexEngine.makeMemFSFolder(obj.uri);
                await this._syncFileToExporter(obj.uri);
            } else {
                const content: Uint8Array = await this.s3filesystem.readFile(obj.uri);
                this.latexEngine.writeMemFSFile(content, obj.uri);
                console.log('Writing file to exporter ' + obj.uri);
            }
        }
    }
}
