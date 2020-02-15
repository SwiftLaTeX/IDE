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
import { ProtocolToMonacoConverter } from 'monaco-languageclient/lib';
import { Command, CommandContribution, CommandRegistry } from '@theia/core';
import { QuickOpenService } from '@theia/core/lib/browser/quick-open/quick-open-service';
import { MonacoEditor } from './monaco-editor';
import { MonacoCommandRegistry, MonacoEditorCommandHandler } from './monaco-command-registry';
export declare type MonacoCommand = Command & {
    delegate?: string;
};
export declare namespace MonacoCommands {
    const UNDO = "undo";
    const REDO = "redo";
    const COMMON_KEYBOARD_ACTIONS: Set<string>;
    const COMMON_ACTIONS: {
        [action: string]: string;
    };
    const SELECTION_SELECT_ALL = "editor.action.select.all";
    const SELECTION_EXPAND_SELECTION = "editor.action.smartSelect.grow";
    const SELECTION_SHRINK_SELECTION = "editor.action.smartSelect.shrink";
    const SELECTION_COPY_LINE_UP = "editor.action.copyLinesUpAction";
    const SELECTION_COPY_LINE_DOWN = "editor.action.copyLinesDownAction";
    const SELECTION_MOVE_LINE_UP = "editor.action.moveLinesUpAction";
    const SELECTION_MOVE_LINE_DOWN = "editor.action.moveLinesDownAction";
    const SELECTION_ADD_CURSOR_ABOVE = "editor.action.insertCursorAbove";
    const SELECTION_ADD_CURSOR_BELOW = "editor.action.insertCursorBelow";
    const SELECTION_ADD_CURSOR_TO_LINE_END = "editor.action.insertCursorAtEndOfEachLineSelected";
    const SELECTION_ADD_NEXT_OCCURRENCE = "editor.action.addSelectionToNextFindMatch";
    const SELECTION_ADD_PREVIOUS_OCCURRENCE = "editor.action.addSelectionToPreviousFindMatch";
    const SELECTION_SELECT_ALL_OCCURRENCES = "editor.action.selectHighlights";
    const GO_TO_DEFINITION = "editor.action.revealDefinition";
    const ACTIONS: Map<string, MonacoCommand>;
    const EXCLUDE_ACTIONS: Set<string>;
}
export declare class MonacoEditorCommandHandlers implements CommandContribution {
    protected readonly monacoCommandRegistry: MonacoCommandRegistry;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly p2m: ProtocolToMonacoConverter;
    protected readonly quickOpenService: QuickOpenService;
    registerCommands(): void;
    protected registerInternalLanguageServiceCommands(): void;
    protected registerCommonCommandHandlers(): void;
    protected newCommonActionHandler(action: string): MonacoEditorCommandHandler;
    protected isCommonKeyboardAction(action: string): boolean;
    protected registerEditorCommandHandlers(): void;
    protected newShowReferenceHandler(): MonacoEditorCommandHandler;
    protected newConfigIndentationHandler(): MonacoEditorCommandHandler;
    protected configureIndentation(editor: MonacoEditor): void;
    protected newConfigEolHandler(): MonacoEditorCommandHandler;
    protected configureEol(editor: MonacoEditor): void;
    protected setEol(editor: MonacoEditor, lineEnding: string): void;
    protected newConfigTabSizeHandler(useSpaces: boolean): MonacoEditorCommandHandler;
    protected configureTabSize(editor: MonacoEditor, useSpaces: boolean): void;
    protected registerMonacoActionCommands(): void;
    protected newMonacoActionHandler(action: MonacoCommand): MonacoEditorCommandHandler;
    protected newKeyboardHandler(action: string): MonacoEditorCommandHandler;
    protected newCommandHandler(action: string): MonacoEditorCommandHandler;
    protected newActionHandler(action: string): MonacoEditorCommandHandler;
    protected newDelegateHandler(action: string): MonacoEditorCommandHandler;
}
//# sourceMappingURL=monaco-command.d.ts.map