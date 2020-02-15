/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { PrefixQuickOpenService, QuickOpenModel, QuickOpenItem, OpenerService, KeybindingContribution, KeybindingRegistry, QuickOpenHandler, QuickOpenOptions, QuickOpenContribution, QuickOpenHandlerRegistry } from '@theia/core/lib/browser';
import { Languages, SymbolInformation, WorkspaceSymbolProvider, CancellationToken } from './language-client-services';
import { CommandRegistry, CommandHandler, SelectionService } from '@theia/core';
import { CommandContribution } from '@theia/core/lib/common';
export declare class WorkspaceSymbolCommand implements QuickOpenModel, CommandContribution, KeybindingContribution, CommandHandler, QuickOpenHandler, QuickOpenContribution {
    protected languages: Languages;
    protected readonly openerService: OpenerService;
    protected quickOpenService: PrefixQuickOpenService;
    protected selectionService: SelectionService;
    readonly prefix = "#";
    readonly description = "Go to Symbol in Workspace";
    private command;
    constructor(languages: Languages, openerService: OpenerService, quickOpenService: PrefixQuickOpenService, selectionService: SelectionService);
    isEnabled(): boolean;
    execute(): void;
    getModel(): QuickOpenModel;
    getOptions(): QuickOpenOptions;
    registerCommands(commands: CommandRegistry): void;
    private isElectron;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
    private cancellationSource;
    onType(lookFor: string, acceptor: (items: QuickOpenItem[]) => void): Promise<void>;
    protected createItem(sym: SymbolInformation, provider: WorkspaceSymbolProvider, token: CancellationToken): QuickOpenItem;
    private openURL;
}
//# sourceMappingURL=workspace-symbols.d.ts.map