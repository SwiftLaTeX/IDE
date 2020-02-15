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
import { Event } from '@theia/core/lib/common/event';
import { CancellationToken } from '@theia/core/lib/common/cancellation';
import { WorkspaceExt } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import { WorkspaceRootsChangeEvent, FileChangeEvent, FileMoveEvent, FileWillMoveEvent } from '../common/plugin-api-rpc-model';
import { EditorsAndDocumentsExtImpl } from './editors-and-documents';
import URI from 'vscode-uri';
import { MessageRegistryExt } from './message-registry';
export declare class WorkspaceExtImpl implements WorkspaceExt {
    private editorsAndDocuments;
    private messageService;
    private proxy;
    private fileSystemWatcherManager;
    private workspaceFoldersChangedEmitter;
    readonly onDidChangeWorkspaceFolders: Event<theia.WorkspaceFoldersChangeEvent>;
    private folders;
    private documentContentProviders;
    constructor(rpc: RPCProtocol, editorsAndDocuments: EditorsAndDocumentsExtImpl, messageService: MessageRegistryExt);
    get rootPath(): string | undefined;
    get workspaceFolders(): theia.WorkspaceFolder[] | undefined;
    get name(): string | undefined;
    $onWorkspaceFoldersChanged(event: WorkspaceRootsChangeEvent): void;
    private deltaFolders;
    private foldersDiff;
    private toWorkspaceFolder;
    pickWorkspaceFolder(options?: theia.WorkspaceFolderPickOptions): PromiseLike<theia.WorkspaceFolder | undefined>;
    findFiles(include: theia.GlobPattern, exclude?: theia.GlobPattern | null, maxResults?: number, token?: CancellationToken): PromiseLike<URI[]>;
    createFileSystemWatcher(globPattern: theia.GlobPattern, ignoreCreateEvents?: boolean, ignoreChangeEvents?: boolean, ignoreDeleteEvents?: boolean): theia.FileSystemWatcher;
    $fileChanged(event: FileChangeEvent): void;
    registerTextDocumentContentProvider(scheme: string, provider: theia.TextDocumentContentProvider): theia.Disposable;
    $provideTextDocumentContent(documentURI: string): Promise<string | undefined>;
    getWorkspaceFolder(uri: theia.Uri, resolveParent?: boolean): theia.WorkspaceFolder | undefined;
    private hasFolder;
    getRelativePath(pathOrUri: string | theia.Uri, includeWorkspace?: boolean): string | undefined;
    updateWorkspaceFolders(start: number, deleteCount: number, ...workspaceFoldersToAdd: {
        uri: theia.Uri;
        name?: string;
    }[]): boolean;
    private workspaceWillRenameFileEmitter;
    private workspaceDidRenameFileEmitter;
    /**
     * Adds a listener for an event that is emitted when a workspace file is going to be renamed.
     */
    readonly onWillRenameFile: Event<theia.FileWillRenameEvent>;
    /**
     * Adds a listener for an event that is emitted when a workspace file is renamed.
     */
    readonly onDidRenameFile: Event<theia.FileRenameEvent>;
    $onFileRename(event: FileMoveEvent): void;
    $onWillRename(event: FileWillMoveEvent): Promise<any>;
}
//# sourceMappingURL=workspace.d.ts.map