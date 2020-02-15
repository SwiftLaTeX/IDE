/********************************************************************************
 * Copyright (C) 2017-2018 Ericsson and others.
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
import { ILogger } from '@theia/core';
import { RawProcessFactory } from '@theia/process/lib/node';
import { SearchInWorkspaceServer, SearchInWorkspaceOptions, SearchInWorkspaceClient } from '../common/search-in-workspace-interface';
export declare const RgPath: unique symbol;
/**
 * Typing for ripgrep's arbitrary data object:
 *
 *   https://docs.rs/grep-printer/0.1.0/grep_printer/struct.JSON.html#object-arbitrary-data
 */
export declare type IRgBytesOrText = {
    bytes: string;
} | {
    text: string;
};
export interface IRgSubmatch {
    match: IRgBytesOrText;
    start: number;
    end: number;
}
export declare class RipgrepSearchInWorkspaceServer implements SearchInWorkspaceServer {
    protected readonly logger: ILogger;
    protected readonly rawProcessFactory: RawProcessFactory;
    private ongoingSearches;
    private nextSearchId;
    private client;
    protected readonly rgPath: string;
    constructor(logger: ILogger, rawProcessFactory: RawProcessFactory);
    setClient(client: SearchInWorkspaceClient | undefined): void;
    protected getArgs(options?: SearchInWorkspaceOptions): string[];
    search(what: string, rootUris: string[], opts?: SearchInWorkspaceOptions): Promise<number>;
    /**
     * Returns the root folder uri that a file belongs to.
     * In case that a file belongs to more than one root folders, returns the root folder that is closest to the file.
     * If the file is not from the current workspace, returns empty string.
     * @param filePath string path of the file
     * @param rootUris string URIs of the root folders in the current workspace
     */
    private getRoot;
    cancel(searchId: number): Promise<void>;
    private wrapUpSearch;
    dispose(): void;
}
//# sourceMappingURL=ripgrep-search-in-workspace-server.d.ts.map