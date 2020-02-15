/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { CancellationToken } from '@theia/core/lib/common/cancellation';
import { Deferred } from '@theia/core/lib/common/promise-util';
import { MessageService } from '@theia/core/lib/common/message-service';
import { Progress } from '@theia/core/lib/common/message-service-protocol';
import { S3StorageSystem } from './s3storagesystem';
export interface FileUploadParams {
    source?: DataTransfer;
    progress?: FileUploadProgressParams;
    onDidUpload?: (uri: string) => void;
}
export interface FileUploadProgressParams {
    text: string;
}
export interface FileUploadResult {
    uploaded: string[];
}
export declare class FileUploadService {
    static TARGET: string;
    static UPLOAD: string;
    protected readonly messageService: MessageService;
    protected readonly s3fs: S3StorageSystem;
    protected uploadForm: FileUploadService.Form;
    protected init(): void;
    protected createUploadForm(): FileUploadService.Form;
    protected deferredUpload: Deferred<FileUploadResult> | undefined;
    upload(targetUri: string | URI, params?: FileUploadParams): Promise<FileUploadResult>;
    protected doUpload(targetUri: URI, { source, progress, token, onDidUpload }: FileUploadService.UploadParams): Promise<FileUploadResult>;
    protected withProgress<T>(cb: (progress: Progress, token: CancellationToken) => Promise<T>, { text }?: FileUploadProgressParams): Promise<T>;
    protected index(targetUri: URI, source: FileUploadService.Source, context: FileUploadService.Context): Promise<void>;
    protected indexFormData(targetUri: URI, formData: FormData, context: FileUploadService.Context): Promise<void>;
    protected indexDataTransfer(targetUri: URI, dataTransfer: DataTransfer, context: FileUploadService.Context): Promise<void>;
    protected indexFileList(targetUri: URI, files: FileList, context: FileUploadService.Context): Promise<void>;
    protected indexFile(targetUri: URI, file: File, context: FileUploadService.Context): Promise<void>;
    protected indexDataTransferItemList(targetUri: URI, items: DataTransferItemList, context: FileUploadService.Context): Promise<void>;
    protected indexEntry(targetUri: URI, entry: WebKitEntry | null, context: FileUploadService.Context): Promise<void>;
    /**
     *  Read all entries within a folder by block of 100 files or folders until the
     *  whole folder has been read.
     */
    protected indexDirectoryEntry(targetUri: URI, entry: WebKitDirectoryEntry, context: FileUploadService.Context): Promise<void>;
    protected indexEntries(targetUri: URI, entries: WebKitEntry[], context: FileUploadService.Context): Promise<void>;
    protected indexFileEntry(targetUri: URI, entry: WebKitFileEntry, context: FileUploadService.Context): Promise<void>;
}
export declare namespace FileUploadService {
    type Source = FormData | DataTransfer;
    interface UploadEntry {
        file: File;
        uri: URI;
    }
    interface Context {
        progress: Progress;
        token: CancellationToken;
        accept: (entry: UploadEntry) => Promise<void>;
    }
    interface Form {
        targetInput: HTMLInputElement;
        fileInput: HTMLInputElement;
        progress?: FileUploadProgressParams;
        onDidUpload?: (uri: string) => void;
    }
    interface UploadParams {
        source: FileUploadService.Source;
        progress: Progress;
        token: CancellationToken;
        onDidUpload?: (uri: string) => void;
    }
}
//# sourceMappingURL=file-upload-service.d.ts.map