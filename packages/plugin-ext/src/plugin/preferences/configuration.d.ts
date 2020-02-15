/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import { WorkspaceExtImpl } from '../workspace';
import URI from 'vscode-uri';
export declare class Configuration {
    private defaultConfiguration;
    private userConfiguration;
    private workspaceConfiguration;
    private folderConfigurations;
    private combinedConfig;
    private folderCombinedConfigs;
    constructor(defaultConfiguration: ConfigurationModel, userConfiguration: ConfigurationModel, workspaceConfiguration?: ConfigurationModel, folderConfigurations?: {
        [resource: string]: ConfigurationModel;
    });
    getValue(section: string | undefined, workspace: WorkspaceExtImpl, resource?: URI): any;
    inspect<C>(key: string, workspace: WorkspaceExtImpl, resource?: URI): {
        default: C;
        user: C;
        workspace: C | undefined;
        workspaceFolder: C | undefined;
        value: C;
    };
    private getCombinedResourceConfig;
    private getCombinedConfig;
    private getFolderCombinedConfig;
    private getFolderResourceConfig;
}
export declare class ConfigurationModel {
    private contents;
    private keys;
    constructor(contents?: any, keys?: string[]);
    getValue(section?: string): any;
    merge(...others: ConfigurationModel[]): ConfigurationModel;
    private mergeContents;
    private mergeKeys;
}
//# sourceMappingURL=configuration.d.ts.map