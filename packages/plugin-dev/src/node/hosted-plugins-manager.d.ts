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
/// <reference types="node" />
import * as cp from 'child_process';
import { HostedPluginSupport } from '@theia/plugin-ext/lib/hosted/node/hosted-plugin';
export declare const HostedPluginsManager: unique symbol;
export interface HostedPluginsManager {
    /**
     * Runs watcher script to recomple plugin on any changes along given path.
     *
     * @param uri uri to plugin root folder.
     */
    runWatchCompilation(uri: string): Promise<void>;
    /**
     * Stops watcher script.
     *
     * @param uri uri to plugin root folder.
     */
    stopWatchCompilation(uri: string): Promise<void>;
    /**
     * Chacks if watcher script to recomple plugin is running.
     *
     * @param uri uri to plugin root folder.
     */
    isWatchCompilationRunning(uri: string): Promise<boolean>;
}
export declare class HostedPluginsManagerImpl implements HostedPluginsManager {
    protected readonly hostedPluginSupport: HostedPluginSupport;
    protected watchCompilationRegistry: Map<string, cp.ChildProcess>;
    constructor();
    runWatchCompilation(uri: string): Promise<void>;
    stopWatchCompilation(uri: string): Promise<void>;
    isWatchCompilationRunning(uri: string): Promise<boolean>;
    protected runWatchScript(pluginRootPath: string): Promise<void>;
    protected unregisterWatchScript(pluginRootPath: string): void;
    /**
     * Checks whether watch script is present into package.json by given parent folder.
     *
     * @param pluginPath path to plugin's root directory
     */
    protected checkWatchScript(pluginPath: string): boolean;
}
//# sourceMappingURL=hosted-plugins-manager.d.ts.map