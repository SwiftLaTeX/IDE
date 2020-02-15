/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
/// <reference types="node" />
import * as fs from 'fs-extra';
import { Request, Response } from 'express';
import { ILogger } from '@theia/core/lib/common/logger';
import { FileSystem } from '../../common/filesystem';
import { DirectoryArchiver } from './directory-archiver';
import { FileDownloadCache, DownloadStorageItem } from './file-download-cache';
interface PrepareDownloadOptions {
    filePath: string;
    downloadId: string;
    remove: boolean;
    root?: string;
}
export declare abstract class FileDownloadHandler {
    protected readonly logger: ILogger;
    protected readonly fileSystem: FileSystem;
    protected readonly directoryArchiver: DirectoryArchiver;
    protected readonly fileDownloadCache: FileDownloadCache;
    abstract handle(request: Request, response: Response): Promise<void>;
    /**
     * Prepares the file and the link for download
     */
    protected prepareDownload(request: Request, response: Response, options: PrepareDownloadOptions): Promise<void>;
    protected download(request: Request, response: Response, downloadInfo: DownloadStorageItem, id: string): Promise<void>;
    /**
     * Streams the file and pipe it to the Response to avoid any OOM issues
     */
    protected streamDownload(status: number, response: Response, stream: fs.ReadStream, id: string): void;
    protected parseRangeHeader(range: string | string[] | undefined, statSize: number): {
        start: number;
        end: number;
    } | undefined;
    protected archive(inputPath: string, outputPath?: string, entries?: string[]): Promise<string>;
    protected createTempDir(downloadId?: string): Promise<string>;
    protected handleError(response: Response, reason: string | Error, status?: number): Promise<void>;
}
export declare namespace FileDownloadHandler {
    const SINGLE: symbol;
    const MULTI: symbol;
    const DOWNLOAD_LINK: symbol;
}
export declare class DownloadLinkHandler extends FileDownloadHandler {
    handle(request: Request, response: Response): Promise<void>;
}
export declare class SingleFileDownloadHandler extends FileDownloadHandler {
    handle(request: Request, response: Response): Promise<void>;
}
export declare class MultiFileDownloadHandler extends FileDownloadHandler {
    handle(request: Request, response: Response): Promise<void>;
}
export {};
//# sourceMappingURL=file-download-handler.d.ts.map