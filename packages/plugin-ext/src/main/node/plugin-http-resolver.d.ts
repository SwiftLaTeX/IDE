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
import { PluginDeployerResolver, PluginDeployerResolverContext } from '../../common';
/**
 * Resolver that handle the http(s): protocol
 * http://path/to/my.plugin
 * https://path/to/my.plugin
 */
export declare class HttpPluginDeployerResolver implements PluginDeployerResolver {
    private unpackedFolder;
    constructor();
    /**
     * Grab the remote file specified by the given URL
     */
    resolve(pluginResolverContext: PluginDeployerResolverContext): Promise<void>;
    /**
     * Handle only the plugins that starts with http or https:
     */
    accept(pluginId: string): boolean;
}
//# sourceMappingURL=plugin-http-resolver.d.ts.map