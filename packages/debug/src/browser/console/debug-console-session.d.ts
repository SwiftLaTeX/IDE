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
/// <reference types="lodash" />
import { DebugProtocol } from 'vscode-debugprotocol/lib/debugProtocol';
import { ConsoleSession, ConsoleItem } from '@theia/console/lib/browser/console-session';
import { DebugSession } from '../debug-session';
import { DebugSessionManager } from '../debug-session-manager';
import { Languages, CompletionItem, CompletionItemKind, Position, Workspace, TextDocument, CompletionParams } from '@theia/languages/lib/browser';
import URI from '@theia/core/lib/common/uri';
export declare class DebugConsoleSession extends ConsoleSession {
    static uri: URI;
    readonly id = "debug";
    protected items: ConsoleItem[];
    protected uncompletedItemContent: string | undefined;
    protected readonly manager: DebugSessionManager;
    protected readonly languages: Languages;
    protected readonly workspace: Workspace;
    protected readonly completionKinds: Map<"function" | "file" | "text" | "enum" | "value" | "color" | "method" | "module" | "class" | "property" | "field" | "constructor" | "interface" | "variable" | "reference" | "unit" | "keyword" | "snippet" | "customcolor" | undefined, CompletionItemKind>;
    init(): void;
    getElements(): IterableIterator<ConsoleItem>;
    protected completions({ textDocument: { uri }, position }: CompletionParams): Promise<CompletionItem[]>;
    protected asCompletionItem(document: TextDocument, position: Position, prefixLength: number, item: DebugProtocol.CompletionItem): CompletionItem;
    execute(value: string): Promise<void>;
    clear(): void;
    append(value: string): void;
    appendLine(value: string): void;
    protected logOutput(session: DebugSession, event: DebugProtocol.OutputEvent): Promise<void>;
    protected fireDidChange: (() => void) & import("lodash").Cancelable;
}
//# sourceMappingURL=debug-console-session.d.ts.map