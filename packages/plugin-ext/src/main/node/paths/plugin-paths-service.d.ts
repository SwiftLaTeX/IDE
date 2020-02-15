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
import { FileSystem, FileStat } from '@theia/filesystem/lib/common';
import { ILogger } from '@theia/core';
import { PluginPathsService } from '../../common/plugin-paths-protocol';
import { PluginCliContribution } from '../plugin-cli-contribution';
export declare class PluginPathsServiceImpl implements PluginPathsService {
    private readonly windowsDataFolders;
    protected readonly logger: ILogger;
    protected readonly fileSystem: FileSystem;
    protected readonly cliContribution: PluginCliContribution;
    getHostLogPath(): Promise<string>;
    getHostStoragePath(workspace: FileStat | undefined, roots: FileStat[]): Promise<string | undefined>;
    protected buildWorkspaceId(workspace: FileStat, roots: FileStat[]): Promise<string>;
    /**
     * Generate time folder name in format: YYYYMMDDTHHMMSS, for example: 20181205T093828
     */
    private generateTimeFolderName;
    private getLogsDirPath;
    private getWorkspaceStorageDirPath;
    getTheiaDirPath(): Promise<string>;
    private getUserHomeDir;
    private cleanupOldLogs;
}
//# sourceMappingURL=plugin-paths-service.d.ts.map