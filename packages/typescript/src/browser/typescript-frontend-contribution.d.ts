/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import * as tsp from 'typescript/lib/protocol';
import { QuickPickService, KeybindingRegistry, KeybindingContribution, StorageService, LabelProvider, FrontendApplicationContribution, StatusBar } from '@theia/core/lib/browser';
import { FileSystemWatcher, FileMoveEvent } from '@theia/filesystem/lib/browser';
import { EditorManager, EditorWidget, TextEditor } from '@theia/editor/lib/browser';
import { CommandContribution, CommandRegistry, Command, MenuModelRegistry, MenuContribution, DisposableCollection } from '@theia/core/lib/common';
import { TypeScriptClientContribution } from './typescript-client-contribution';
export declare namespace TypeScriptCommands {
    const applyCompletionCodeAction: Command;
    const organizeImports: Command;
    const openServerLog: Command;
    const selectVersion: Command;
}
export declare class TypeScriptFrontendContribution implements FrontendApplicationContribution, CommandContribution, MenuContribution, KeybindingContribution {
    protected readonly statusBar: StatusBar;
    protected readonly editorManager: EditorManager;
    protected readonly quickPickService: QuickPickService;
    protected readonly clientContribution: TypeScriptClientContribution;
    protected readonly fileSystemWatcher: FileSystemWatcher;
    protected readonly labelProvider: LabelProvider;
    protected readonly storage: StorageService;
    protected init(): void;
    onStart(): void;
    onStop(): void;
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    openServerLog(): void;
    organizeImports(): void;
    get currentEditor(): EditorWidget | undefined;
    protected pickCodeAction(codeActions: tsp.CodeAction[]): Promise<tsp.CodeAction | undefined>;
    protected applyCodeAction(codeAction: tsp.CodeAction): Promise<any>;
    protected renameFile({ sourceUri, targetUri }: FileMoveEvent): Promise<void>;
    protected selectVersion(): Promise<void>;
    protected storageKey: string;
    protected restore(): Promise<void>;
    protected store(): Promise<void>;
    protected readonly toDisposeOnCurrentEditorChanged: DisposableCollection;
    protected updateStatusBar(): void;
    protected updateVersionStatus(editor: TextEditor | undefined): void;
}
//# sourceMappingURL=typescript-frontend-contribution.d.ts.map