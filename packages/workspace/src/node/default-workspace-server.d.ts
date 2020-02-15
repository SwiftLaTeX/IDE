/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import * as yargs from 'yargs';
import { CliContribution } from '@theia/core/lib/node/cli';
import { Deferred } from '@theia/core/lib/common/promise-util';
import { WorkspaceServer } from '../common';
export declare class WorkspaceCliContribution implements CliContribution {
    workspaceRoot: Deferred<string | undefined>;
    configure(conf: yargs.Argv): void;
    setArguments(args: yargs.Arguments): void;
}
export declare class DefaultWorkspaceServer implements WorkspaceServer {
    protected root: Deferred<string | undefined>;
    protected readonly cliParams: WorkspaceCliContribution;
    protected init(): Promise<void>;
    protected getRoot(): Promise<string | undefined>;
    getMostRecentlyUsedWorkspace(): Promise<string | undefined>;
    setMostRecentlyUsedWorkspace(uri: string): Promise<void>;
    getRecentWorkspaces(): Promise<string[]>;
    protected workspaceStillExist(wspath: string): boolean;
    protected getWorkspaceURIFromCli(): Promise<string | undefined>;
    /**
     * Writes the given uri as the most recently used workspace root to the user's home directory.
     * @param uri most recently used uri
     */
    protected writeToUserHome(data: RecentWorkspacePathsData): Promise<void>;
    protected writeToFile(filePath: string, data: object): Promise<void>;
    /**
     * Reads the most recently used workspace root from the user's home directory.
     */
    protected readRecentWorkspacePathsFromUserHome(): Promise<RecentWorkspacePathsData | undefined>;
    protected readJsonFromFile(filePath: string): Promise<object | undefined>;
    protected getUserStoragePath(): string;
}
interface RecentWorkspacePathsData {
    recentRoots: string[];
}
declare namespace RecentWorkspacePathsData {
    function is(data: Object | undefined): data is RecentWorkspacePathsData {
        return !!data && typeof data === 'object' && ('recentRoots' in data) && Array.isArray((data as any)['recentRoots']);
    }
}
export {};
//# sourceMappingURL=default-workspace-server.d.ts.map