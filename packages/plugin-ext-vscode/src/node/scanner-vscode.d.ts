/********************************************************************************
 * Copyright (C) 2015-2018 Red Hat, Inc.
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
import { PluginScanner, PluginEngine, PluginPackage, PluginModel, PluginLifecycle } from '@theia/plugin-ext';
import { TheiaPluginScanner } from '@theia/plugin-ext/lib/hosted/node/scanners/scanner-theia';
export declare class VsCodePluginScanner extends TheiaPluginScanner implements PluginScanner {
    private readonly VSCODE_TYPE;
    private readonly VSCODE_PREFIX;
    get apiType(): PluginEngine;
    getModel(plugin: PluginPackage): PluginModel;
    /**
     * Maps extension dependencies to deployable extension dependencies.
     */
    getDependencies(plugin: PluginPackage): Map<string, string> | undefined;
    getLifecycle(plugin: PluginPackage): PluginLifecycle;
}
//# sourceMappingURL=scanner-vscode.d.ts.map