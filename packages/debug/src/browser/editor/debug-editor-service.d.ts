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
import URI from '@theia/core/lib/common/uri';
import { EditorManager, EditorWidget } from '@theia/editor/lib/browser';
import { ContextMenuRenderer } from '@theia/core/lib/browser';
import { DebugSessionManager } from '../debug-session-manager';
import { DebugEditorModel, DebugEditorModelFactory } from './debug-editor-model';
import { BreakpointManager, SourceBreakpointsChangeEvent } from '../breakpoint/breakpoint-manager';
import { DebugSourceBreakpoint } from '../model/debug-source-breakpoint';
import { DebugBreakpointWidget } from './debug-breakpoint-widget';
export declare class DebugEditorService {
    protected readonly editors: EditorManager;
    protected readonly breakpoints: BreakpointManager;
    protected readonly sessionManager: DebugSessionManager;
    protected readonly contextMenu: ContextMenuRenderer;
    protected readonly factory: DebugEditorModelFactory;
    protected readonly models: Map<string, DebugEditorModel>;
    protected init(): void;
    protected push(widget: EditorWidget): void;
    protected render(uri: URI): void;
    get model(): DebugEditorModel | undefined;
    getLogpoint(position: monaco.Position): DebugSourceBreakpoint | undefined;
    getLogpointEnabled(position: monaco.Position): boolean | undefined;
    getBreakpoint(position: monaco.Position): DebugSourceBreakpoint | undefined;
    getBreakpointEnabled(position: monaco.Position): boolean | undefined;
    anyBreakpoint(position?: monaco.Position): DebugSourceBreakpoint | undefined;
    getInlineBreakpoint(position?: monaco.Position): DebugSourceBreakpoint | undefined;
    toggleBreakpoint(position?: monaco.Position): void;
    setBreakpointEnabled(position: monaco.Position, enabled: boolean): void;
    addInlineBreakpoint(): void;
    showHover(): void;
    canShowHover(): boolean;
    addBreakpoint(context: DebugBreakpointWidget.Context, position?: monaco.Position): void;
    editBreakpoint(breakpointOrPosition?: DebugSourceBreakpoint | monaco.Position): Promise<void>;
    closeBreakpoint(): void;
    acceptBreakpoint(): void;
    protected closeBreakpointIfAffected({ uri, removed }: SourceBreakpointsChangeEvent): void;
}
//# sourceMappingURL=debug-editor-service.d.ts.map