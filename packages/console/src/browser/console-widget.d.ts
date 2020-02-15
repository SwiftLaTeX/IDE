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
import { interfaces, Container } from 'inversify';
import { ContextKey } from '@theia/core/lib/browser/context-key-service';
import { BaseWidget, Widget, Message, StatefulWidget } from '@theia/core/lib/browser';
import { MonacoEditor } from '@theia/monaco/lib/browser/monaco-editor';
import URI from '@theia/core/lib/common/uri';
import { MonacoEditorProvider } from '@theia/monaco/lib/browser/monaco-editor-provider';
import { ProtocolToMonacoConverter, MonacoToProtocolConverter } from 'monaco-languageclient/lib';
import { ConsoleHistory } from './console-history';
import { ConsoleContentWidget } from './console-content-widget';
import { ConsoleSession } from './console-session';
export declare const ConsoleOptions: unique symbol;
export interface ConsoleOptions {
    id: string;
    title?: {
        label?: string;
        iconClass?: string;
        caption?: string;
    };
    input: {
        uri: URI;
        options?: MonacoEditor.IOptions;
    };
    inputFocusContextKey?: ContextKey<boolean>;
}
export declare class ConsoleWidget extends BaseWidget implements StatefulWidget {
    static styles: {
        node: string;
        content: string;
        input: string;
    };
    static createContainer(parent: interfaces.Container, options: ConsoleOptions): Container;
    protected readonly options: ConsoleOptions;
    protected readonly m2p: MonacoToProtocolConverter;
    protected readonly p2m: ProtocolToMonacoConverter;
    readonly content: ConsoleContentWidget;
    protected readonly history: ConsoleHistory;
    protected readonly editorProvider: MonacoEditorProvider;
    protected _input: MonacoEditor;
    constructor();
    protected init(): Promise<void>;
    protected createInput(node: HTMLElement): Promise<MonacoEditor>;
    protected updateFont(): void;
    protected _session: ConsoleSession | undefined;
    set session(session: ConsoleSession | undefined);
    get session(): ConsoleSession | undefined;
    get input(): MonacoEditor;
    selectAll(): void;
    collapseAll(): void;
    clear(): void;
    execute(): Promise<void>;
    navigateBack(): void;
    navigateForward(): void;
    protected revealLastOutput(): void;
    protected onActivateRequest(msg: Message): void;
    protected totalHeight: number;
    protected totalWidth: number;
    protected onResize(msg: Widget.ResizeMessage): void;
    protected resizeContent(): void;
    protected computeHeight(): number;
    storeState(): object;
    restoreState(oldState: object): void;
    hasInputFocus(): boolean;
}
//# sourceMappingURL=console-widget.d.ts.map