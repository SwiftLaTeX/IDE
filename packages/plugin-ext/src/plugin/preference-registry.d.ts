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
import { Event } from '@theia/core/lib/common/event';
import * as theia from '@theia/plugin';
import { PreferenceRegistryExt, PreferenceData, PreferenceChangeExt } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import { WorkspaceExtImpl } from './workspace';
export declare class PreferenceRegistryExtImpl implements PreferenceRegistryExt {
    private readonly workspace;
    private proxy;
    private _preferences;
    private readonly _onDidChangeConfiguration;
    readonly onDidChangeConfiguration: Event<theia.ConfigurationChangeEvent>;
    constructor(rpc: RPCProtocol, workspace: WorkspaceExtImpl);
    init(data: PreferenceData): void;
    $acceptConfigurationChanged(data: PreferenceData, eventData: PreferenceChangeExt[]): void;
    getConfiguration(section?: string, resource?: theia.Uri | null, extensionId?: string): theia.WorkspaceConfiguration;
    private toReadonlyValue;
    private parse;
    private getConfigurationModel;
    private readonly OVERRIDE_PROPERTY;
    private readonly OVERRIDE_PROPERTY_PATTERN;
    private parseConfigurationData;
    private toConfigurationChangeEvent;
}
//# sourceMappingURL=preference-registry.d.ts.map