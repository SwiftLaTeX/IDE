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
import { DocumentSelector, BaseLanguageClientContribution, Workspace, Languages, LanguageClientFactory } from '@theia/languages/lib/browser';
import { LATEX_LANGUAGE_ID, LATEX_LANGUAGE_NAME } from '../common';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { MAIN_MENU_BAR } from '@theia/core';
import { LaTeXEngine } from './latex-engine';
import { XDVExporter } from './xdv-exporter';

@injectable()
export class LaTeXClientContribution extends BaseLanguageClientContribution {

    readonly id = LATEX_LANGUAGE_ID;
    readonly name = LATEX_LANGUAGE_NAME;

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace,
        @inject(Languages) protected readonly languages: Languages,
        @inject(LanguageClientFactory) protected readonly languageClientFactory: LanguageClientFactory
    ) {
        super(workspace, languages, languageClientFactory);
    }

    protected get globPatterns(): string[] {
        return [
            '**/*.tex',
            '**/*.bib'
        ];
    }

    protected get documentSelector(): DocumentSelector | undefined {
        return [this.id, 'bibtex'];
    }
}

export namespace LaTeXMenus {
    export const LATEX = [...MAIN_MENU_BAR, '7_latex'];
    export const LATEX_QUICK_BUILD = [...LATEX, '1_latex'];
    export const LATEX_BUILD = [...LATEX, '1_latex'];
    export const LATEX_CLEAN = [...LATEX, '1_latex'];
    export const LATEX_EXPORT = [...LATEX, '1_latex'];
}

export namespace LaTeXCommands {
    const LATEX_CATEGORY = 'LaTeX';
    export const BUILD_QUICK: Command = {
        id: 'latex:build',
        category: LATEX_CATEGORY,
        label: 'Compile'
    };
    export const BUILD_LINK: Command = {
        id: 'latex:quickbuild',
        category: LATEX_CATEGORY,
        label: 'Compile Citation'
    };
    export const PROJECT_CLEAN: Command = {
        id: 'latex:clean',
        category: LATEX_CATEGORY,
        label: 'Clean Project'
    };
    export const PROJECT_EXPORT: Command = {
        id: 'latex:export',
        category: LATEX_CATEGORY,
        label: 'Export PDF'
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
        menus.registerMenuAction(LaTeXMenus.LATEX_CLEAN, {
            commandId: LaTeXCommands.PROJECT_CLEAN.id,
            order: '2'
        });
        menus.registerMenuAction(LaTeXMenus.LATEX_EXPORT, {
            commandId: LaTeXCommands.PROJECT_EXPORT.id,
            order: '3'
        });
    }
}

@injectable()
export class LaTeXCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(LaTeXEngine) private readonly latexEngine: LaTeXEngine,
        @inject(XDVExporter) private readonly xdvExporter: XDVExporter,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(LaTeXCommands.BUILD_QUICK, {
            execute: () => {
                this.messageService.info('Hello World!');
            },
            isEnabled: () => this.latexEngine.isReady(),
        });
        registry.registerCommand(LaTeXCommands.BUILD_LINK, {
            execute: () => this.messageService.info('Hello World!')
        });
        registry.registerCommand(LaTeXCommands.PROJECT_CLEAN, {
            execute: () => this.messageService.info('Hello World!')
        });
        registry.registerCommand(LaTeXCommands.PROJECT_EXPORT, {
            execute: () => {
                this.xdvExporter.loadEngine();
                this.xdvExporter.closeWorker();
            }
        });
    }
}
