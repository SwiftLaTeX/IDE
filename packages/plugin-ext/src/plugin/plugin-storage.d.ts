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
import * as theia from '@theia/plugin';
import { Event } from '@theia/core/lib/common/event';
import { StorageExt } from '../common/plugin-api-rpc';
import { KeysToAnyValues, KeysToKeysToAnyValue } from '../common/types';
import { RPCProtocol } from '../common/rpc-protocol';
export declare class Memento implements theia.Memento {
    private readonly pluginId;
    private readonly isPluginGlobalData;
    private readonly storage;
    private cache;
    constructor(pluginId: string, isPluginGlobalData: boolean, storage: KeyValueStorageProxy);
    get<T>(key: string): T | undefined;
    get<T>(key: string, defaultValue: T): T;
    update(key: string, value: any): Promise<void>;
}
/**
 * Singleton.
 * Is used to proxy storage requests to main side.
 */
export declare class KeyValueStorageProxy implements StorageExt {
    private storageDataChangedEmitter;
    readonly storageDataChangedEvent: Event<KeysToKeysToAnyValue>;
    private readonly proxy;
    private globalDataCache;
    private workspaceDataCache;
    constructor(rpc: RPCProtocol);
    init(initGlobalData: KeysToKeysToAnyValue, initWorkspaceData: KeysToKeysToAnyValue): void;
    getPerPluginData(key: string, isGlobal: boolean): KeysToAnyValues;
    setPerPluginData(key: string, value: KeysToAnyValues, isGlobal: boolean): Promise<boolean>;
    $updatePluginsWorkspaceData(workspaceData: KeysToKeysToAnyValue): void;
}
//# sourceMappingURL=plugin-storage.d.ts.map