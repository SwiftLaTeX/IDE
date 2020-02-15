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
import * as React from 'react';
import { DebugProtocol } from 'vscode-debugprotocol';
import { Disposable, DisposableCollection } from '@theia/core';
import { MonacoEditorProvider } from '@theia/monaco/lib/browser/monaco-editor-provider';
import { MonacoEditorZoneWidget } from '@theia/monaco/lib/browser/monaco-editor-zone-widget';
import { MonacoEditor } from '@theia/monaco/lib/browser/monaco-editor';
import { DebugEditor } from './debug-editor';
import { DebugSourceBreakpoint } from '../model/debug-source-breakpoint';
export declare type ShowDebugBreakpointOptions = DebugSourceBreakpoint | {
    position: monaco.Position;
    context: DebugBreakpointWidget.Context;
} | {
    breakpoint: DebugSourceBreakpoint;
    context: DebugBreakpointWidget.Context;
};
export declare class DebugBreakpointWidget implements Disposable {
    readonly editor: DebugEditor;
    protected readonly editorProvider: MonacoEditorProvider;
    protected selectNode: HTMLDivElement;
    protected zone: MonacoEditorZoneWidget;
    protected readonly toDispose: DisposableCollection;
    protected context: DebugBreakpointWidget.Context;
    protected _values: {
        [context in DebugBreakpointWidget.Context]?: string;
    };
    get values(): {
        [context in DebugBreakpointWidget.Context]?: string;
    } | undefined;
    protected _input: MonacoEditor | undefined;
    get input(): MonacoEditor | undefined;
    protected init(): Promise<void>;
    dispose(): void;
    get position(): monaco.Position | undefined;
    show(options: ShowDebugBreakpointOptions): void;
    hide(): void;
    protected layout(dimension: monaco.editor.IDimension): void;
    protected createInput(node: HTMLElement): Promise<MonacoEditor>;
    protected render(): void;
    protected renderOption(context: DebugBreakpointWidget.Context, label: string): JSX.Element;
    protected readonly updateInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    static PLACEHOLDER_DECORATION: string;
    protected updatePlaceholder(): void;
    protected get placeholder(): string;
}
export declare namespace DebugBreakpointWidget {
    type Context = keyof Pick<DebugProtocol.SourceBreakpoint, 'condition' | 'hitCondition' | 'logMessage'>;
}
//# sourceMappingURL=debug-breakpoint-widget.d.ts.map