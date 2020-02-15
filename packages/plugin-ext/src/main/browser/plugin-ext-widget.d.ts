/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import * as React from 'react';
import { Message } from '@phosphor/messaging';
import { PluginMetadata } from '../../common/plugin-protocol';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { HostedPluginSupport } from '../../hosted/browser/hosted-plugin';
import { ProgressLocationService } from '@theia/core/lib/browser/progress-location-service';
import { DisposableCollection } from '@theia/core/lib/common/disposable';
export declare class PluginWidget extends ReactWidget {
    protected readonly pluginService: HostedPluginSupport;
    protected readonly progressLocationService: ProgressLocationService;
    constructor();
    protected init(): void;
    protected onActivateRequest(msg: Message): void;
    protected readonly toDisposeProgress: DisposableCollection;
    protected render(): React.ReactNode;
    protected doRender(): React.ReactNode;
    protected renderPlugins(plugins: PluginMetadata[]): React.ReactNode;
    private renderPlugin;
    protected createPluginClassName(plugin: PluginMetadata): string;
}
//# sourceMappingURL=plugin-ext-widget.d.ts.map