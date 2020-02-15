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
import { PluginDeployerResolver, PluginDeployerResolverContext } from '@theia/plugin-ext';
/**
 * Resolver that handle the vscode: protocol
 */
export declare class VsCodePluginDeployerResolver implements PluginDeployerResolver {
    private static PREFIX_VSCODE_EXTENSION;
    private static PREFIX_EXT_INSTALL;
    private static MARKET_PLACE_ENDPOINT;
    private static HEADERS;
    private vscodeExtensionsFolder;
    constructor();
    /**
     * Download vscode extensions if available and add them as plugins.
     */
    resolve(pluginResolverContext: PluginDeployerResolverContext): Promise<void>;
    /**
     * Handle only the plugins that starts with vscode:
     */
    accept(pluginId: string): boolean;
}
//# sourceMappingURL=plugin-vscode-resolver.d.ts.map