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
import { AbstractViewContribution, ApplicationShell, KeybindingRegistry, LabelProvider } from '@theia/core/lib/browser';
import { MenuModelRegistry, CommandRegistry, Command } from '@theia/core/lib/common';
import { DebugViewLocation } from '../common/debug-configuration';
import { EditorManager } from '@theia/editor/lib/browser';
import { DebugSessionManager } from './debug-session-manager';
import { DebugWidget } from './view/debug-widget';
import { BreakpointManager } from './breakpoint/breakpoint-manager';
import { DebugConfigurationManager } from './debug-configuration-manager';
import { DebugSession } from './debug-session';
import { DebugBreakpointsWidget } from './view/debug-breakpoints-widget';
import { DebugSourceBreakpoint } from './model/debug-source-breakpoint';
import { DebugThreadsWidget } from './view/debug-threads-widget';
import { DebugThread } from './model/debug-thread';
import { DebugStackFramesWidget } from './view/debug-stack-frames-widget';
import { DebugStackFrame } from './model/debug-stack-frame';
import { DebugVariablesWidget } from './view/debug-variables-widget';
import { DebugVariable } from './console/debug-console-items';
import { DebugSessionWidget, DebugSessionWidgetFactory } from './view/debug-session-widget';
import { DebugEditorService } from './editor/debug-editor-service';
import { DebugConsoleContribution } from './console/debug-console-contribution';
import { DebugService } from '../common/debug-service';
import { DebugSchemaUpdater } from './debug-schema-updater';
import { DebugPreferences } from './debug-preferences';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { DebugWatchWidget } from './view/debug-watch-widget';
import { DebugWatchExpression } from './view/debug-watch-expression';
import { DebugWatchManager } from './debug-watch-manager';
import { DebugSessionOptions } from './debug-session-options';
import { ColorContribution } from '@theia/core/lib/browser/color-application-contribution';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
import { DebugFunctionBreakpoint } from './model/debug-function-breakpoint';
import { DebugBreakpoint } from './model/debug-breakpoint';
export declare namespace DebugMenus {
    const DEBUG: string[];
    const DEBUG_CONTROLS: string[];
    const DEBUG_CONFIGURATION: string[];
    const DEBUG_THREADS: string[];
    const DEBUG_SESSIONS: string[];
    const DEBUG_BREAKPOINT: string[];
    const DEBUG_NEW_BREAKPOINT: string[];
    const DEBUG_BREAKPOINTS: string[];
}
export declare namespace DebugCommands {
    const START: Command;
    const START_NO_DEBUG: Command;
    const STOP: Command;
    const RESTART: Command;
    const OPEN_CONFIGURATIONS: {
        id: string;
        label: string;
    };
    const ADD_CONFIGURATION: {
        id: string;
        label: string;
    };
    const STEP_OVER: Command;
    const STEP_INTO: Command;
    const STEP_OUT: Command;
    const CONTINUE: Command;
    const PAUSE: Command;
    const CONTINUE_ALL: Command;
    const PAUSE_ALL: Command;
    const TOGGLE_BREAKPOINT: Command;
    const INLINE_BREAKPOINT: Command;
    const ADD_CONDITIONAL_BREAKPOINT: Command;
    const ADD_LOGPOINT: Command;
    const ADD_FUNCTION_BREAKPOINT: Command;
    const ENABLE_ALL_BREAKPOINTS: Command;
    const DISABLE_ALL_BREAKPOINTS: Command;
    const EDIT_BREAKPOINT: Command;
    const EDIT_LOGPOINT: Command;
    const REMOVE_BREAKPOINT: Command;
    const REMOVE_LOGPOINT: Command;
    const REMOVE_ALL_BREAKPOINTS: Command;
    const TOGGLE_BREAKPOINTS_ENABLED: Command;
    const SHOW_HOVER: {
        id: string;
        label: string;
    };
    const RESTART_FRAME: Command;
    const COPY_CALL_STACK: Command;
    const SET_VARIABLE_VALUE: Command;
    const COPY_VARIABLE_VALUE: Command;
    const COPY_VARIABLE_AS_EXPRESSION: Command;
    const WATCH_VARIABLE: Command;
    const ADD_WATCH_EXPRESSION: Command;
    const EDIT_WATCH_EXPRESSION: Command;
    const COPY_WATCH_EXPRESSION_VALUE: Command;
    const REMOVE_WATCH_EXPRESSION: Command;
    const COLLAPSE_ALL_WATCH_EXPRESSIONS: Command;
    const REMOVE_ALL_WATCH_EXPRESSIONS: Command;
}
export declare namespace DebugThreadContextCommands {
    const STEP_OVER: {
        id: string;
    };
    const STEP_INTO: {
        id: string;
    };
    const STEP_OUT: {
        id: string;
    };
    const CONTINUE: {
        id: string;
    };
    const PAUSE: {
        id: string;
    };
    const TERMINATE: {
        id: string;
    };
}
export declare namespace DebugSessionContextCommands {
    const STOP: {
        id: string;
    };
    const RESTART: {
        id: string;
    };
    const PAUSE_ALL: {
        id: string;
    };
    const CONTINUE_ALL: {
        id: string;
    };
    const REVEAL: {
        id: string;
    };
    const OPEN_LEFT: {
        id: string;
    };
    const OPEN_RIGHT: {
        id: string;
    };
    const OPEN_BOTTOM: {
        id: string;
    };
}
export declare namespace DebugEditorContextCommands {
    const ADD_BREAKPOINT: {
        id: string;
    };
    const ADD_CONDITIONAL_BREAKPOINT: {
        id: string;
    };
    const ADD_LOGPOINT: {
        id: string;
    };
    const REMOVE_BREAKPOINT: {
        id: string;
    };
    const EDIT_BREAKPOINT: {
        id: string;
    };
    const ENABLE_BREAKPOINT: {
        id: string;
    };
    const DISABLE_BREAKPOINT: {
        id: string;
    };
    const REMOVE_LOGPOINT: {
        id: string;
    };
    const EDIT_LOGPOINT: {
        id: string;
    };
    const ENABLE_LOGPOINT: {
        id: string;
    };
    const DISABLE_LOGPOINT: {
        id: string;
    };
}
export declare namespace DebugBreakpointWidgetCommands {
    const ACCEPT: {
        id: string;
    };
    const CLOSE: {
        id: string;
    };
}
export declare class DebugFrontendApplicationContribution extends AbstractViewContribution<DebugWidget> implements TabBarToolbarContribution, ColorContribution {
    protected readonly debug: DebugService;
    protected readonly manager: DebugSessionManager;
    protected readonly configurations: DebugConfigurationManager;
    protected readonly breakpointManager: BreakpointManager;
    protected readonly shell: ApplicationShell;
    protected readonly sessionWidgetFactory: DebugSessionWidgetFactory;
    protected readonly editors: DebugEditorService;
    protected readonly console: DebugConsoleContribution;
    protected readonly schemaUpdater: DebugSchemaUpdater;
    protected readonly preference: DebugPreferences;
    protected readonly watchManager: DebugWatchManager;
    protected readonly labelProvider: LabelProvider;
    protected readonly editorManager: EditorManager;
    constructor();
    initializeLayout(): Promise<void>;
    protected firstSessionStart: boolean;
    onStart(): Promise<void>;
    onStop(): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerCommands(registry: CommandRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    registerToolbarItems(toolbar: TabBarToolbarRegistry): void;
    protected readonly sessionWidgets: Map<string, DebugSessionWidget>;
    get hasSessionWidget(): boolean;
    protected openSession(session: DebugSession, options?: {
        debugViewLocation?: DebugViewLocation;
        reveal?: boolean;
    }): Promise<DebugWidget | DebugSessionWidget>;
    protected revealSession(session: DebugSession): DebugSessionWidget | undefined;
    start(noDebug?: boolean, debugSessionOptions?: DebugSessionOptions): Promise<void>;
    get threads(): DebugThreadsWidget | undefined;
    get selectedSession(): DebugSession | undefined;
    get selectedThread(): DebugThread | undefined;
    get frames(): DebugStackFramesWidget | undefined;
    get selectedFrame(): DebugStackFrame | undefined;
    get breakpoints(): DebugBreakpointsWidget | undefined;
    get selectedAnyBreakpoint(): DebugBreakpoint | undefined;
    get selectedBreakpoint(): DebugSourceBreakpoint | undefined;
    get selectedLogpoint(): DebugSourceBreakpoint | undefined;
    get selectedFunctionBreakpoint(): DebugFunctionBreakpoint | undefined;
    get variables(): DebugVariablesWidget | undefined;
    get selectedVariable(): DebugVariable | undefined;
    get watch(): DebugWatchWidget | undefined;
    get watchExpression(): DebugWatchExpression | undefined;
    protected isPosition(position: monaco.Position): boolean;
    registerColors(colors: ColorRegistry): void;
    protected updateStatusBar(): void;
    protected get debuggingStaturBar(): boolean;
}
//# sourceMappingURL=debug-frontend-application-contribution.d.ts.map