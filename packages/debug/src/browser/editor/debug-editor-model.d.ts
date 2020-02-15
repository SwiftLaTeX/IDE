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
import { interfaces, Container } from 'inversify';
import URI from '@theia/core/lib/common/uri';
import { Disposable, DisposableCollection, MenuPath } from '@theia/core';
import { ContextMenuRenderer } from '@theia/core/lib/browser';
import { BreakpointManager } from '../breakpoint/breakpoint-manager';
import { DebugSourceBreakpoint } from '../model/debug-source-breakpoint';
import { DebugSessionManager } from '../debug-session-manager';
import { SourceBreakpoint } from '../breakpoint/breakpoint-marker';
import { DebugEditor } from './debug-editor';
import { DebugHoverWidget } from './debug-hover-widget';
import { DebugBreakpointWidget } from './debug-breakpoint-widget';
import { DebugExceptionWidget } from './debug-exception-widget';
import { DebugProtocol } from 'vscode-debugprotocol';
export declare const DebugEditorModelFactory: unique symbol;
export declare type DebugEditorModelFactory = (editor: DebugEditor) => DebugEditorModel;
export declare class DebugEditorModel implements Disposable {
    static createContainer(parent: interfaces.Container, editor: DebugEditor): Container;
    static createModel(parent: interfaces.Container, editor: DebugEditor): DebugEditorModel;
    static CONTEXT_MENU: MenuPath;
    protected readonly toDispose: DisposableCollection;
    protected uri: URI;
    protected breakpointDecorations: string[];
    protected breakpointRanges: Map<string, monaco.Range>;
    protected currentBreakpointDecorations: string[];
    protected frameDecorations: string[];
    protected topFrameRange: monaco.Range | undefined;
    protected updatingDecorations: boolean;
    readonly hover: DebugHoverWidget;
    readonly editor: DebugEditor;
    readonly breakpoints: BreakpointManager;
    readonly sessions: DebugSessionManager;
    readonly contextMenu: ContextMenuRenderer;
    readonly breakpointWidget: DebugBreakpointWidget;
    readonly exceptionWidget: DebugExceptionWidget;
    protected init(): void;
    dispose(): void;
    protected readonly renderFrames: () => Promise<void>;
    protected createFrameDecorations(): monaco.editor.IModelDeltaDecoration[];
    protected toggleExceptionWidget(): Promise<void>;
    render(): void;
    protected renderBreakpoints(): void;
    protected createBreakpointDecorations(): monaco.editor.IModelDeltaDecoration[];
    protected createBreakpointDecoration(breakpoint: SourceBreakpoint): monaco.editor.IModelDeltaDecoration;
    protected updateBreakpointRanges(): void;
    protected renderCurrentBreakpoints(): void;
    protected createCurrentBreakpointDecorations(): monaco.editor.IModelDeltaDecoration[];
    protected createCurrentBreakpointDecoration(breakpoint: DebugSourceBreakpoint): monaco.editor.IModelDeltaDecoration;
    protected updateBreakpoints(): void;
    protected areBreakpointsAffected(): boolean;
    protected createBreakpoints(): SourceBreakpoint[];
    get position(): monaco.Position;
    getBreakpoint(position?: monaco.Position): DebugSourceBreakpoint | undefined;
    getInlineBreakpoint(position?: monaco.Position): DebugSourceBreakpoint | undefined;
    protected getLineBreakpoints(position?: monaco.Position): DebugSourceBreakpoint[];
    protected addBreakpoint(raw: DebugProtocol.SourceBreakpoint): void;
    toggleBreakpoint(position?: monaco.Position): void;
    addInlineBreakpoint(): void;
    acceptBreakpoint(): void;
    protected handleMouseDown(event: monaco.editor.IEditorMouseEvent): void;
    protected handleMouseMove(event: monaco.editor.IEditorMouseEvent): void;
    protected handleMouseLeave(event: monaco.editor.IPartialEditorMouseEvent): void;
    protected hintDecorations: string[];
    protected hintBreakpoint(event: monaco.editor.IEditorMouseEvent): void;
    protected deltaHintDecorations(hintDecorations: monaco.editor.IModelDeltaDecoration[]): void;
    protected createHintDecorations(event: monaco.editor.IEditorMouseEvent): monaco.editor.IModelDeltaDecoration[];
    protected showHover(mouseEvent: monaco.editor.IEditorMouseEvent): void;
    protected hideHover({ event }: monaco.editor.IPartialEditorMouseEvent): void;
    protected deltaDecorations(oldDecorations: string[], newDecorations: monaco.editor.IModelDeltaDecoration[]): string[];
    static STICKINESS: monaco.editor.TrackedRangeStickiness;
    static BREAKPOINT_HINT_DECORATION: monaco.editor.IModelDecorationOptions;
    static TOP_STACK_FRAME_MARGIN: monaco.editor.IModelDecorationOptions;
    static FOCUSED_STACK_FRAME_MARGIN: monaco.editor.IModelDecorationOptions;
    static TOP_STACK_FRAME_DECORATION: monaco.editor.IModelDecorationOptions;
    static TOP_STACK_FRAME_INLINE_DECORATION: monaco.editor.IModelDecorationOptions;
    static FOCUSED_STACK_FRAME_DECORATION: monaco.editor.IModelDecorationOptions;
}
//# sourceMappingURL=debug-editor-model.d.ts.map