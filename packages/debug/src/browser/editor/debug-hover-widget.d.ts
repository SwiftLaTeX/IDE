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
/// <reference types="@typefox/monaco-editor-core/monaco" />
/// <reference types="lodash" />
import { Message } from '@phosphor/messaging';
import { Container, interfaces } from 'inversify';
import { SourceTreeWidget } from '@theia/core/lib/browser/source-tree';
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import { DebugSessionManager } from '../debug-session-manager';
import { DebugEditor } from './debug-editor';
import { DebugExpressionProvider } from './debug-expression-provider';
import { DebugHoverSource } from './debug-hover-source';
export interface ShowDebugHoverOptions {
    selection: monaco.Range;
    /** default: false */
    focus?: boolean;
    /** default: true */
    immediate?: boolean;
}
export interface HideDebugHoverOptions {
    /** default: true */
    immediate?: boolean;
}
export declare function createDebugHoverWidgetContainer(parent: interfaces.Container, editor: DebugEditor): Container;
export declare class DebugHoverWidget extends SourceTreeWidget implements monaco.editor.IContentWidget {
    protected readonly toDispose: DisposableCollection;
    protected readonly editor: DebugEditor;
    protected readonly sessions: DebugSessionManager;
    protected readonly hoverSource: DebugHoverSource;
    protected readonly expressionProvider: DebugExpressionProvider;
    allowEditorOverflow: boolean;
    static ID: string;
    getId(): string;
    protected readonly domNode: HTMLDivElement;
    protected readonly titleNode: HTMLDivElement;
    protected readonly contentNode: HTMLDivElement;
    getDomNode(): HTMLElement;
    protected init(): void;
    dispose(): void;
    show(options?: ShowDebugHoverOptions): void;
    hide(options?: HideDebugHoverOptions): void;
    protected schedule(fn: () => void, immediate?: boolean): void;
    protected readonly doSchedule: ((fn: () => void) => void) & import("lodash").Cancelable;
    protected options: ShowDebugHoverOptions | undefined;
    protected doHide(): void;
    protected doShow(options?: ShowDebugHoverOptions | undefined): Promise<void>;
    protected isEditorFrame(): boolean;
    getPosition(): monaco.editor.IContentWidgetPosition;
    protected onUpdateRequest(msg: Message): void;
    protected onAfterAttach(msg: Message): void;
}
//# sourceMappingURL=debug-hover-widget.d.ts.map