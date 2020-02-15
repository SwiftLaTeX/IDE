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
import { PluginDeployerImpl } from './plugin-deployer-impl';
import { PluginsKeyValueStorage } from './plugins-key-value-storage';
import { PluginServer, PluginStorageKind } from '../../common/plugin-protocol';
import { KeysToAnyValues, KeysToKeysToAnyValue } from '../../common/types';
export declare class PluginServerHandler implements PluginServer {
    protected readonly pluginDeployer: PluginDeployerImpl;
    protected readonly pluginsKeyValueStorage: PluginsKeyValueStorage;
    deploy(pluginEntry: string): Promise<void>;
    setStorageValue(key: string, value: KeysToAnyValues, kind: PluginStorageKind): Promise<boolean>;
    getStorageValue(key: string, kind: PluginStorageKind): Promise<KeysToAnyValues>;
    getAllStorageValues(kind: PluginStorageKind): Promise<KeysToKeysToAnyValue>;
}
//# sourceMappingURL=plugin-server-handler.d.ts.map