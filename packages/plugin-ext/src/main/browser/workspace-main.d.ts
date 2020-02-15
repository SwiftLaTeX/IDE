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
import * as theia from '@theia/plugin';
import { interfaces } from 'inversify';
import { WorkspaceExt, WorkspaceMain, WorkspaceFolderPickOptionsMain } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
import { UriComponents } from '../../common/uri-components';
import { FileStat } from '@theia/filesystem/lib/common';
import URI from '@theia/core/lib/common/uri';
import { Resource } from '@theia/core/lib/common/resource';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { Event, ResourceResolver } from '@theia/core';
import { FileWatcherSubscriberOptions } from '../../common/plugin-api-rpc-model';
export declare class WorkspaceMainImpl implements WorkspaceMain, Disposable {
    private readonly proxy;
    private storageProxy;
    private quickOpenService;
    private fileSearchService;
    private inPluginFileSystemWatcherManager;
    private roots;
    private resourceResolver;
    private pluginServer;
    private workspaceService;
    private fsPreferences;
    protected readonly toDispose: DisposableCollection;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    protected processWorkspaceFoldersChanged(roots: FileStat[]): Promise<void>;
    private isAnyRootChanged;
    $pickWorkspaceFolder(options: WorkspaceFolderPickOptionsMain): Promise<theia.WorkspaceFolder | undefined>;
    $startFileSearch(includePattern: string, includeFolderUri: string | undefined, excludePatternOrDisregardExcludes?: string | false, maxResults?: number): Promise<UriComponents[]>;
    $registerFileSystemWatcher(options: FileWatcherSubscriberOptions): Promise<string>;
    $unregisterFileSystemWatcher(watcherId: string): Promise<void>;
    $registerTextDocumentContentProvider(scheme: string): Promise<void>;
    $unregisterTextDocumentContentProvider(scheme: string): void;
    $onTextDocumentContentChange(uri: string, content: string): void;
    $updateWorkspaceFolders(start: number, deleteCount?: number, ...rootsToAdd: string[]): Promise<void>;
}
/**
 * Text content provider for resources with custom scheme.
 */
export interface TextContentResourceProvider {
    /**
     * Provides resource for given URI
     */
    provideResource(uri: URI): Resource;
}
export declare class TextContentResourceResolver implements ResourceResolver {
    private providers;
    private resources;
    resolve(uri: URI): Promise<Resource>;
    registerContentProvider(scheme: string, proxy: WorkspaceExt): void;
    unregisterContentProvider(scheme: string): void;
    onContentChange(uri: string, content: string): void;
}
export declare class TextContentResource implements Resource {
    uri: URI;
    private proxy;
    protected disposable: Disposable;
    private onDidChangeContentsEmitter;
    readonly onDidChangeContents: Event<void>;
    cache: string | undefined;
    constructor(uri: URI, proxy: WorkspaceExt, disposable: Disposable);
    readContents(options?: {
        encoding?: string;
    }): Promise<string>;
    dispose(): void;
    setContent(content: string): void;
}
//# sourceMappingURL=workspace-main.d.ts.map