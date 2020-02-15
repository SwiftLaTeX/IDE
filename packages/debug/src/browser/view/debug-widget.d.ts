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
import { BaseWidget, Message, ApplicationShell, Widget, StatefulWidget, ViewContainer } from '@theia/core/lib/browser';
import { DebugSessionWidget } from './debug-session-widget';
import { DebugConfigurationWidget } from './debug-configuration-widget';
import { DebugViewModel } from './debug-view-model';
import { DebugSessionManager } from '../debug-session-manager';
import { ProgressLocationService } from '@theia/core/lib/browser/progress-location-service';
export declare class DebugWidget extends BaseWidget implements StatefulWidget, ApplicationShell.TrackableWidgetProvider {
    static createContainer(parent: interfaces.Container): Container;
    static createWidget(parent: interfaces.Container): DebugWidget;
    static ID: string;
    static LABEL: string;
    readonly model: DebugViewModel;
    readonly sessionManager: DebugSessionManager;
    protected readonly toolbar: DebugConfigurationWidget;
    protected readonly sessionWidget: DebugSessionWidget;
    protected readonly progressLocationService: ProgressLocationService;
    protected init(): void;
    protected onActivateRequest(msg: Message): void;
    getTrackableWidgets(): Widget[];
    storeState(): object;
    restoreState(oldState: ViewContainer.State): void;
}
//# sourceMappingURL=debug-widget.d.ts.map