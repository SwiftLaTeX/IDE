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
 * Resolver that handle the github: protocol
 * github:<org>/<repo>/<filename>@latest
 * github:<org>/<repo>/<filename>@<version>
 */
export declare class GithubPluginDeployerResolver implements PluginDeployerResolver {
    private static PREFIX;
    private static GITHUB_ENDPOINT;
    private unpackedFolder;
    constructor();
    /**
     * Grab the remote file specified by Github URL
     */
    resolve(pluginResolverContext: PluginDeployerResolverContext): Promise<void>;
    protected grabGithubFile(pluginResolverContext: PluginDeployerResolverContext, orgName: string, repoName: string, filename: string, version: string, resolve: (value?: void | PromiseLike<void>) => void, reject: (reason?: any) => void): void;
    /**
     * Handle only the plugins that starts with github:
     */
    accept(pluginId: string): boolean;
}
//# sourceMappingURL=plugin-github-resolver.d.ts.map