/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { MaybeArray } from '@theia/core/lib/common';
import { LabelProvider } from '@theia/core/lib/browser';
import { FileSystem, FileStat } from '../../common';
import { DirNode } from '../file-tree';
import { OpenFileDialogFactory, OpenFileDialogProps, SaveFileDialogFactory, SaveFileDialogProps } from './file-dialog';
export declare const FileDialogService: unique symbol;
export interface FileDialogService {
    showOpenDialog(props: OpenFileDialogProps & {
        canSelectMany: true;
    }, folder?: FileStat): Promise<MaybeArray<URI> | undefined>;
    showOpenDialog(props: OpenFileDialogProps, folder?: FileStat): Promise<URI | undefined>;
    showOpenDialog(props: OpenFileDialogProps, folder?: FileStat): Promise<MaybeArray<URI> | undefined>;
    showSaveDialog(props: SaveFileDialogProps, folder?: FileStat): Promise<URI | undefined>;
}
export declare class DefaultFileDialogService {
    protected readonly fileSystem: FileSystem;
    protected readonly openFileDialogFactory: OpenFileDialogFactory;
    protected readonly labelProvider: LabelProvider;
    protected readonly saveFileDialogFactory: SaveFileDialogFactory;
    showOpenDialog(props: OpenFileDialogProps & {
        canSelectMany: true;
    }, folder?: FileStat): Promise<MaybeArray<URI> | undefined>;
    showOpenDialog(props: OpenFileDialogProps, folder?: FileStat): Promise<URI | undefined>;
    showSaveDialog(props: SaveFileDialogProps, folder?: FileStat): Promise<URI | undefined>;
    protected getRootNode(folderToOpen?: FileStat): Promise<DirNode | undefined>;
}
//# sourceMappingURL=file-dialog-service.d.ts.map