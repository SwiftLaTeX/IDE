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
import { FileSystem } from '@theia/filesystem/lib/common';
import { KeysToAnyValues, KeysToKeysToAnyValue } from '../../common/types';
import { PluginStorageKind } from '../../common';
export declare class PluginsKeyValueStorage {
    private readonly deferredGlobalDataPath;
    private readonly pluginPathsService;
    protected readonly fileSystem: FileSystem;
    protected init(): Promise<void>;
    set(key: string, value: KeysToAnyValues, kind: PluginStorageKind): Promise<boolean>;
    get(key: string, kind: PluginStorageKind): Promise<KeysToAnyValues>;
    getAll(kind: PluginStorageKind): Promise<KeysToKeysToAnyValue>;
    private getDataPath;
    private readFromFile;
    private writeToFile;
}
//# sourceMappingURL=plugins-key-value-storage.d.ts.map