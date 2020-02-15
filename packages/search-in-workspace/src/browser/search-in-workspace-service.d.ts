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
import { SearchInWorkspaceServer, SearchInWorkspaceClient, SearchInWorkspaceResult, SearchInWorkspaceOptions } from '../common/search-in-workspace-interface';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { ILogger } from '@theia/core';
/**
 * Class that will receive the search results from the server.  This is separate
 * from the SearchInWorkspaceService class only to avoid a cycle in the
 * dependency injection.
 */
export declare class SearchInWorkspaceClientImpl implements SearchInWorkspaceClient {
    private service;
    onResult(searchId: number, result: SearchInWorkspaceResult): void;
    onDone(searchId: number, error?: string): void;
    setService(service: SearchInWorkspaceClient): void;
}
export declare type SearchInWorkspaceCallbacks = SearchInWorkspaceClient;
/**
 * Service to search text in the workspace files.
 */
export declare class SearchInWorkspaceService implements SearchInWorkspaceClient {
    private pendingSearches;
    private pendingOnDones;
    private lastKnownSearchId;
    protected readonly searchServer: SearchInWorkspaceServer;
    protected readonly client: SearchInWorkspaceClientImpl;
    protected readonly workspaceService: WorkspaceService;
    protected readonly logger: ILogger;
    protected init(): void;
    isEnabled(): boolean;
    onResult(searchId: number, result: SearchInWorkspaceResult): void;
    onDone(searchId: number, error?: string): void;
    search(what: string, callbacks: SearchInWorkspaceCallbacks, opts?: SearchInWorkspaceOptions): Promise<number>;
    cancel(searchId: number): void;
}
//# sourceMappingURL=search-in-workspace-service.d.ts.map