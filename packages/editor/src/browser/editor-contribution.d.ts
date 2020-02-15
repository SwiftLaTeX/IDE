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
import { EditorManager } from './editor-manager';
import { TextEditor } from './editor';
import URI from '@theia/core/lib/common/uri';
import { StatusBar } from '@theia/core/lib/browser/status-bar/status-bar';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { Languages } from '@theia/languages/lib/browser';
import { ContextKeyService } from '@theia/core/lib/browser/context-key-service';
import { DisposableCollection } from '@theia/core';
import { EditorQuickOpenService } from './editor-quick-open-service';
import { CommandRegistry, CommandContribution } from '@theia/core/lib/common';
import { KeybindingRegistry, KeybindingContribution, QuickOpenContribution, QuickOpenHandlerRegistry } from '@theia/core/lib/browser';
export declare class EditorContribution implements FrontendApplicationContribution, CommandContribution, KeybindingContribution, QuickOpenContribution {
    protected readonly statusBar: StatusBar;
    protected readonly editorManager: EditorManager;
    protected readonly languages: Languages;
    protected readonly contextKeyService: ContextKeyService;
    protected readonly editorQuickOpenService: EditorQuickOpenService;
    onStart(): void;
    /** @deprecated since 0.5.0 - will be removed in farther releases */
    protected initResourceContextKeys(): void;
    /** @deprecated since 0.5.0 - will be removed in farther releases */
    protected getLanguageId(uri: URI | undefined): string | undefined;
    protected initEditorContextKeys(): void;
    protected readonly toDisposeOnCurrentEditorChanged: DisposableCollection;
    protected updateStatusBar(): void;
    protected updateLanguageStatus(editor: TextEditor | undefined): void;
    protected updateEncodingStatus(editor: TextEditor | undefined): void;
    protected setCursorPositionStatus(editor: TextEditor | undefined): void;
    registerCommands(commands: CommandRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
}
//# sourceMappingURL=editor-contribution.d.ts.map