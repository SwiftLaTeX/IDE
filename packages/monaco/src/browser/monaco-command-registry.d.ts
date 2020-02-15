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
import { Command, CommandHandler, CommandRegistry, SelectionService } from '@theia/core';
import { MonacoEditor } from './monaco-editor';
import { MonacoEditorProvider } from './monaco-editor-provider';
export interface MonacoEditorCommandHandler {
    execute(editor: MonacoEditor, ...args: any[]): any;
    isEnabled?(editor: MonacoEditor, ...args: any[]): boolean;
}
export declare class MonacoCommandRegistry {
    protected readonly monacoEditors: MonacoEditorProvider;
    protected readonly commands: CommandRegistry;
    protected readonly selectionService: SelectionService;
    validate(command: string): string | undefined;
    registerCommand(command: Command, handler: MonacoEditorCommandHandler): void;
    registerHandler(command: string, handler: MonacoEditorCommandHandler): void;
    protected newHandler(monacoHandler: MonacoEditorCommandHandler): CommandHandler;
    protected execute(monacoHandler: MonacoEditorCommandHandler, ...args: any[]): any;
    protected isEnabled(monacoHandler: MonacoEditorCommandHandler, ...args: any[]): boolean;
    protected isVisible(monacoHandler: MonacoEditorCommandHandler, ...args: any[]): boolean;
}
//# sourceMappingURL=monaco-command-registry.d.ts.map