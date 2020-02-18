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
import { OutputChannelManager, OutputChannel } from '@theia/output/lib/common/output-channel';
import { ProblemManager } from '@theia/markers/lib/browser/problem/problem-manager';
import { Diagnostic } from '@theia/languages/lib/browser';
import { LatexParserModule } from './latex-log-parser';
import { FileSystemWatcher, FileChangeEvent } from '@theia/filesystem/lib/browser/filesystem-watcher';
import URI from '@theia/core/lib/common/uri';
import { FrontendApplication } from '@theia/core/lib/browser';
import { LaTeXPreviewWidget } from './latex-preview-widget';
import { UriAwareCommandHandler } from '@theia/core/lib/common/uri-command-handler';
import { SelectionService } from '@theia/core/lib/common/selection-service';
import { NavigatorContextMenu } from '@theia/navigator/lib/browser/navigator-contribution';

const MAIN_ENTRY_TRICK: string = '/InP0t_SwIfTLoTEx_';

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
        id: 'latex:quickbuild',
        category: LATEX_CATEGORY,
        label: 'Preview'
    };
    export const BUILD_LINK: Command = {
        id: 'latex:build',
        category: LATEX_CATEGORY,
        label: 'Compile'
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
    export const ENGINE_SET_ENTRY: Command = {
        id: 'latex:setentry',
        category: LATEX_CATEGORY,
        label: 'Set Main Entry File'
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

        /* Navigator  */
        menus.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: LaTeXCommands.ENGINE_SET_ENTRY.id,
            order: 'z'
        });
    }
}

@injectable()
export class LaTeXCommandContribution implements CommandContribution {

    private cachedXDV: Uint8Array | undefined = undefined;
    private hasFileSyncedToEngine: boolean = false;
    protected readonly toDispose = new DisposableCollection();
    private readonly opened_handles: Map<string, number> = new Map<string, number>();
    private output_channel: OutputChannel;
    private preview_widget: LaTeXPreviewWidget;
    constructor(
        @inject(S3StorageSystem) private readonly s3filesystem: S3StorageSystem,
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(LaTeXEngine) private readonly latexEngine: LaTeXEngine,
        @inject(XDVExporter) private readonly xdvExporter: XDVExporter,
        @inject(MonacoWorkspace) private readonly workspace: MonacoWorkspace,
        @inject(OutputChannelManager) protected readonly outputChannelManager: OutputChannelManager,
        @inject(ProblemManager) protected readonly problemManager: ProblemManager,
        @inject(FileSystemWatcher) protected readonly fileSystemWatcher: FileSystemWatcher,
        @inject(FrontendApplication) protected readonly app: FrontendApplication,
        @inject(SelectionService) protected readonly selectionService: SelectionService,
    ) {
        this.toDispose.push(this.workspace.onDidOpenTextDocument(model => this.fireDidOpenDocument(model)));
        this.toDispose.push(this.workspace.onDidChangeTextDocument(param => this.fireDidChangeContents(param)));
        this.toDispose.push(this.workspace.onDidCloseTextDocument(model => this.fireDidCloseDocument(model)));
        this.listenOnDirChange();
        this.output_channel = this.outputChannelManager.getChannel('LaTeX');
        this.preview_widget = new LaTeXPreviewWidget();
        this.app.shell.addWidget(this.preview_widget, { area: 'right' });
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
        registry.registerCommand(
            LaTeXCommands.ENGINE_SET_ENTRY,
            new UriAwareCommandHandler<URI>(this.selectionService, {
                execute: uris => this.setMainFile(uris),
                isEnabled: uris => this.canSetAsMainFile(uris),
            }, { multi: false })
        );
    }

    protected async quickBuild(): Promise<void> {
        if (!this.latexEngine.isReady()) {
            return;
        }

        const mainTempFiles = await this.resolveMainFile();
        if (mainTempFiles.length === 0) {
            this.messageService.error('Cannot locate the main LaTeX entry file. Please create a main entry file in root directory before compilation.', { timeout: 15000 });
            return;
        }

        if (mainTempFiles.length > 1) {
            this.messageService.error(`Compiler cannot tell which file is the main entry file, either ${mainTempFiles[0]} or ${mainTempFiles[1]}.`, { timeout: 15000 });
            return;
        }

        if (!this.hasFileSyncedToEngine) {
            this.hasFileSyncedToEngine = true;
            await this._syncFileToEngine('/');
        }

        this.messageService.info('Building preview', { timeout: 3000 });
        this.latexEngine.setEngineMainFile(mainTempFiles[0]);
        const compileResult = await this.latexEngine.compileLaTeX();
        /* Write log to output and parse log */
        this.output_channel.clear();
        this.output_channel.append(compileResult.log);
        this.processCompileLog(compileResult.log);
        if (compileResult.status === 1 || compileResult.status === 0) {
            /* Successful compilation */
            this.cachedXDV = compileResult.pdf;
        } else {
            /* Failure */
            // const activate = true;
            // const reveal = true;
            // await this.outputContribution.openView({ activate, reveal });
        }
        this.preview_widget.showPage();
    }

    private async processCompileLog(log: string): Promise<void> {
        const parseRes = LatexParserModule.parse(log);
        const diags: Map<string, Diagnostic[]> = new Map<string, Diagnostic[]>();
        const allStuff = parseRes.errors.concat(parseRes.warnings);
        for (let j = 0; j < allStuff.length; j++) {
            const error = allStuff[j];
            let uri = error.file;
            if (uri.endsWith('.tex') || uri.endsWith('.bib')) {
                const diag: Diagnostic = {
                    range: {
                        start: {
                            line: error.line - 1,
                            character: 0
                        },
                        end: {
                            line: error.line - 1,
                            character: 0
                        }
                    },
                    message: error.message,
                    severity: error.level === 'error' ? 1 : 2
                };
                /* Log file has the format ./xxx/xxx.tex, convert to them to standard */
                uri = uri.substr(1);
                /* Main_entry_trick */
                if (uri === MAIN_ENTRY_TRICK + '.tex') {
                    const temps = await this.resolveMainFile();
                    uri = temps[0];
                }

                if (!diags.has(uri)) {
                    diags.set(uri, []);
                }
                diags.get(uri)!.push(diag);
            }
        }
        diags.forEach((diag, key) => {
            this.problemManager.setMarkers(new URI(key), 'SwiftLaTeX', diag);
        });
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
        this.xdvExporter.writeMemFSFile(this.cachedXDV, MAIN_ENTRY_TRICK + '.xdv');
        const res = await this.xdvExporter.exportPDF();
        this.xdvExporter.closeWorker();
        this.output_channel.clear();
        this.output_channel.append(res.log);
        if (res.status === 1 || res.status === 0) {
            const tempPDFURL = URL.createObjectURL(new Blob([res.pdf!], { type: 'application/octet-stream' }));
            let anchor: HTMLAnchorElement | undefined = document.createElement('a');
            try {
                anchor.href = tempPDFURL;
                anchor.style.display = 'none';
                anchor.download = 'export.pdf';
                document.body.appendChild(anchor);
                anchor.click();
            } finally {
                // make sure anchor is removed from parent
                if (anchor && anchor.parentNode) {
                    anchor.parentNode.removeChild(anchor);
                }
                URL.revokeObjectURL(tempPDFURL);
                anchor = undefined;
            }
        } else {
            /* Failed */
            this.messageService.error('Unexpected error detected when generating PDF.', { timeout: 3000 });
        }

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
        const saved_mainfile = window.localStorage.getItem(window.location.pathname + 'main_config');

        if (saved_mainfile) {
            return [saved_mainfile];
        }

        const objs = await this.s3filesystem.readdir('/');
        /* Try previous saved mainfile */

        const possibleCandicates: string[] = [];
        /* See whether there is only one .tex file */
        for (let k = 0; k < objs.length; k++) {
            if (!objs[k].isDir && objs[k].uri.endsWith('.tex')) {
                possibleCandicates.push(objs[k].uri);
            }
        }

        /* cache it so we dont have to do it again */
        if (possibleCandicates.length === 1) {
            window.localStorage.setItem(window.location.pathname + 'main_config', possibleCandicates[0]);
        }

        return possibleCandicates;
    }

    private setMainFile(uri: URI): void {
        if (!uri) {
            return;
        }

        const uri_str = uri.toString().substr(7);
        window.localStorage.setItem(window.location.pathname + 'main_config', uri_str);
        this.messageService.info(`Set ${uri_str} as the main entry.`, { timeout: 3000 });
    }

    private canSetAsMainFile(uri: URI): boolean {
        if (!uri) {
            return false;
        }

        const uri_string = uri.toString();

        if (!uri_string.endsWith('.tex')) {
            return false;
        }

        if (!uri_string.startsWith('file:///')) {
            return false;
        }

        return (uri_string.match(/\//g) || []).length === 3;
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

    protected async listenOnDirChange(): Promise<void> {
        const fileUri = new URI('file:///');
        const watcher = await this.fileSystemWatcher.watchFileChanges(fileUri);
        this.toDispose.push(watcher);
        const onFileChange = (events: FileChangeEvent) => {
            for (let k = 0; k < events.length; k++) {
                /* Todo Import a more clear symbol */
                /* We mean delete or add file */
                if (events[k].type === 1 || events[k].type === 2) {
                    console.log('Need to resync file');
                    this.hasFileSyncedToEngine = false;
                    break;
                }
            }
        };
        this.toDispose.push(this.fileSystemWatcher.onFilesChanged(onFileChange));
    }

}
