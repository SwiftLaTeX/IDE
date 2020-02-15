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
import URI from '@theia/core/lib/common/uri';
import { CompositeTreeNode, TreeModelImpl, TreeNode } from '@theia/core/lib/browser';
import { FileSystem } from '../../common';
import { FileSystemWatcher, FileChange, FileMoveEvent } from '../filesystem-watcher';
import { FileStatNode } from './file-tree';
import { LocationService } from '../location';
import { LabelProvider } from '@theia/core/lib/browser/label-provider';
export declare class FileTreeModel extends TreeModelImpl implements LocationService {
    protected readonly labelProvider: LabelProvider;
    protected readonly fileSystem: FileSystem;
    protected readonly watcher: FileSystemWatcher;
    protected init(): void;
    get location(): URI | undefined;
    set location(uri: URI | undefined);
    drives(): Promise<URI[]>;
    get selectedFileStatNodes(): Readonly<FileStatNode>[];
    getNodesByUri(uri: URI): IterableIterator<TreeNode>;
    /**
     * to workaround https://github.com/Axosoft/nsfw/issues/42
     */
    protected onDidMove(move: FileMoveEvent): void;
    protected onFilesChanged(changes: FileChange[]): void;
    protected isRootAffected(changes: FileChange[]): boolean;
    protected getAffectedUris(changes: FileChange[]): URI[];
    protected isFileContentChanged(change: FileChange): boolean;
    protected refreshAffectedNodes(uris: URI[]): boolean;
    protected getAffectedNodes(uris: URI[]): Map<string, CompositeTreeNode>;
    copy(uri: URI): boolean;
    /**
     * Move the given source file or directory to the given target directory.
     */
    move(source: TreeNode, target: TreeNode): Promise<void>;
    protected shouldReplace(fileName: string): Promise<boolean>;
}
//# sourceMappingURL=file-tree-model.d.ts.map