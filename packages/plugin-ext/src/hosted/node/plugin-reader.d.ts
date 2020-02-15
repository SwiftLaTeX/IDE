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
import * as express from 'express';
import { ILogger } from '@theia/core';
import { BackendApplicationContribution } from '@theia/core/lib/node/backend-application';
import { PluginMetadata, PluginPackage, PluginContribution } from '../../common/plugin-protocol';
import { MetadataScanner } from './metadata-scanner';
export declare class HostedPluginReader implements BackendApplicationContribution {
    protected readonly logger: ILogger;
    protected readonly scanner: MetadataScanner;
    private readonly metadataProcessors;
    /**
     * Map between a plugin id and its local storage
     */
    protected pluginsIdsFiles: Map<string, string>;
    configure(app: express.Application): void;
    protected handleMissingResource(req: express.Request, res: express.Response): Promise<void>;
    /**
     * @throws never
     */
    getPluginMetadata(pluginPath: string | undefined): Promise<PluginMetadata | undefined>;
    readPackage(pluginPath: string | undefined): Promise<PluginPackage | undefined>;
    readMetadata(plugin: PluginPackage): PluginMetadata;
    readContribution(plugin: PluginPackage): PluginContribution | undefined;
    readDependencies(plugin: PluginPackage): Map<string, string> | undefined;
}
//# sourceMappingURL=plugin-reader.d.ts.map