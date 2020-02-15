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
import { Message, ApplicationShell, Widget, BaseWidget, StatefulWidget, ViewContainer } from '@theia/core/lib/browser';
import { DebugThreadsWidget } from './debug-threads-widget';
import { DebugStackFramesWidget } from './debug-stack-frames-widget';
import { DebugBreakpointsWidget } from './debug-breakpoints-widget';
import { DebugVariablesWidget } from './debug-variables-widget';
import { DebugToolBar } from './debug-toolbar-widget';
import { DebugViewModel, DebugViewOptions } from './debug-view-model';
import { DebugWatchWidget } from './debug-watch-widget';
export declare const DebugSessionWidgetFactory: unique symbol;
export declare type DebugSessionWidgetFactory = (options: DebugViewOptions) => DebugSessionWidget;
export declare class DebugSessionWidget extends BaseWidget implements StatefulWidget, ApplicationShell.TrackableWidgetProvider {
    static createContainer(parent: interfaces.Container, options: DebugViewOptions): Container;
    static createWidget(parent: interfaces.Container, options: DebugViewOptions): DebugSessionWidget;
    protected viewContainer: ViewContainer;
    protected readonly viewContainerFactory: ViewContainer.Factory;
    readonly model: DebugViewModel;
    protected readonly toolbar: DebugToolBar;
    protected readonly threads: DebugThreadsWidget;
    protected readonly stackFrames: DebugStackFramesWidget;
    protected readonly variables: DebugVariablesWidget;
    protected readonly watch: DebugWatchWidget;
    protected readonly breakpoints: DebugBreakpointsWidget;
    protected init(): void;
    protected onActivateRequest(msg: Message): void;
    getTrackableWidgets(): Widget[];
    storeState(): object;
    restoreState(oldState: ViewContainer.State): void;
}
//# sourceMappingURL=debug-session-widget.d.ts.map