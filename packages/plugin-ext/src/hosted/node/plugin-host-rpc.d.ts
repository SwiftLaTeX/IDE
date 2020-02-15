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
import { PluginManagerExtImpl } from '../../plugin/plugin-manager';
import { Plugin } from '../../common/plugin-api-rpc';
import { EnvExtImpl } from '../../plugin/env';
import { PreferenceRegistryExtImpl } from '../../plugin/preference-registry';
import { KeyValueStorageProxy } from '../../plugin/plugin-storage';
import { WebviewsExtImpl } from '../../plugin/webviews';
/**
 * Handle the RPC calls.
 */
export declare class PluginHostRPC {
    protected readonly rpc: any;
    private apiFactory;
    private pluginManager;
    constructor(rpc: any);
    initialize(): void;
    initContext(contextPath: string, plugin: Plugin): any;
    createPluginManager(envExt: EnvExtImpl, storageProxy: KeyValueStorageProxy, preferencesManager: PreferenceRegistryExtImpl, webview: WebviewsExtImpl, rpc: any): PluginManagerExtImpl;
}
//# sourceMappingURL=plugin-host-rpc.d.ts.map