/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
import { FileSystem, FileStat, FileSystemClient } from '../filesystem';
export declare class MockFilesystem implements FileSystem {
    dispose(): void;
    getFileStat(uri: string): Promise<FileStat>;
    exists(uri: string): Promise<boolean>;
    resolveContent(uri: string, options?: {
        encoding?: string;
    }): Promise<{
        stat: FileStat;
        content: string;
    }>;
    setContent(file: FileStat, content: string, options?: {
        encoding?: string;
    }): Promise<FileStat>;
    updateContent(): Promise<FileStat>;
    move(sourceUri: string, targetUri: string, options?: {
        overwrite?: boolean;
    }): Promise<FileStat>;
    copy(sourceUri: string, targetUri: string, options?: {
        overwrite?: boolean;
        recursive?: boolean;
    }): Promise<FileStat>;
    createFile(uri: string, options?: {
        content?: string;
        encoding?: string;
    }): Promise<FileStat>;
    createFolder(uri: string): Promise<FileStat>;
    touchFile(uri: string): Promise<FileStat>;
    delete(uri: string, options?: {
        moveToTrash?: boolean;
    }): Promise<void>;
    getEncoding(uri: string): Promise<string>;
    guessEncoding(uri: string): Promise<string | undefined>;
    getRoots(): Promise<FileStat[]>;
    getCurrentUserHome(): Promise<FileStat>;
    access(uri: string, mode?: number): Promise<boolean>;
    setClient(client: FileSystemClient): void;
    getDrives(): Promise<string[]>;
    getFsPath(uri: string): Promise<string | undefined>;
}
//# sourceMappingURL=mock-filesystem.d.ts.map