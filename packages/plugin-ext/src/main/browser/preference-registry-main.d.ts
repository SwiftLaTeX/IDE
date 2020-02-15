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
import { PreferenceProviderProvider } from '@theia/core/lib/browser/preferences';
import { interfaces } from 'inversify';
import { PreferenceRegistryMain, PreferenceData } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
import { ConfigurationTarget } from '../../plugin/types-impl';
import { FileStat } from '@theia/filesystem/lib/common/filesystem';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
export declare function getPreferences(preferenceProviderProvider: PreferenceProviderProvider, rootFolders: FileStat[]): PreferenceData;
export declare class PreferenceRegistryMainImpl implements PreferenceRegistryMain, Disposable {
    private readonly proxy;
    private readonly preferenceService;
    protected readonly toDispose: DisposableCollection;
    constructor(prc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    $updateConfigurationOption(target: boolean | ConfigurationTarget | undefined, key: string, value: any, resource?: string): Promise<void>;
    $removeConfigurationOption(target: boolean | ConfigurationTarget | undefined, key: string, resource?: string): Promise<void>;
    private parseConfigurationTarget;
}
//# sourceMappingURL=preference-registry-main.d.ts.map