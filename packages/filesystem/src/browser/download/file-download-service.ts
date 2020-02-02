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

import { inject, injectable } from 'inversify';
import URI from '@theia/core/lib/common/uri';
import { ILogger } from '@theia/core/lib/common/logger';
// import { Endpoint } from '@theia/core/lib/browser/endpoint';
import { FileSystem } from '../../common/filesystem';
import { S3StorageSystem } from '../s3storagesystem';
// import { FileDownloadData } from '../../common/download/file-download-data';
import { MessageService } from '@theia/core/lib/common/message-service';
import { addClipboardListener } from '@theia/core/lib/browser/widgets';

@injectable()
export class FileDownloadService {

    protected anchor: HTMLAnchorElement | undefined;
    protected downloadCounter: number = 0;

    @inject(ILogger)
    protected readonly logger: ILogger;

    @inject(FileSystem)
    protected readonly fileSystem: FileSystem;

    @inject(MessageService)
    protected readonly messageService: MessageService;

    @inject(S3StorageSystem)
    protected readonly s3fs: S3StorageSystem;

    protected handleCopy(event: ClipboardEvent, downloadUrl: string): void {
        if (downloadUrl && event.clipboardData) {
            event.clipboardData.setData('text/plain', downloadUrl);
            event.preventDefault();
            this.messageService.info('Copied the download link to the clipboard. The link is valid for 60 seconds.');
        }
    }

    async download(uris: URI[], options?: FileDownloadService.DownloadOptions): Promise<void> {
        console.log(uris);
        let cancel = false;
        if (uris.length === 0) {
            return;
        }
        if (uris.length > 1) {
            await this.messageService.warn('Please download a file/directory at a time. Tip: to download the whole project, \
             deselect any files first and retry the download command');
            return;
        }
        const copyLink = options && options.copyLink ? true : false;
        try {
            const progress = await this.messageService.showProgress({
                text: `Preparing download${copyLink ? ' link' : ''}...`, options: { cancelable: true }
            }, () => { cancel = true; });

            const key = uris[0].toString().substr(7);
            const s3obj = await this.s3fs.stat(key);
            if (!s3obj) {
                progress.cancel();
                await this.messageService.error(`File ${key} does not exists`);
                return;
            }
            let content: Uint8Array;
            if (s3obj.isDir) {
                content = await this.s3fs.zipDir(key);
            } else {
                content = <Uint8Array>(await this.s3fs.readFile(key));
            }
            progress.cancel();
            if (cancel) {
                return;
            }
            const tempBlob = new Blob([content], {type: 'application/octet-stream'});
            const downloadUrl = URL.createObjectURL(tempBlob);

            if (copyLink) {
                setTimeout(() => {
                /* Release it in a minute */
                    URL.revokeObjectURL(downloadUrl);
                }, 60000);
                if (document.documentElement) {
                    const toDispose = addClipboardListener(document.documentElement, 'copy', e => {
                        toDispose.dispose();
                        this.handleCopy(e, downloadUrl);
                    });
                    document.execCommand('copy');
                }
            } else {
                let displayName = uris[0].displayName;
                if (s3obj.isDir) {
                    if (displayName === '' || displayName === '/') {
                        displayName = 'root';
                    }
                    displayName += '.zip';
                }
                this.forceDownload(downloadUrl, displayName);
            }
        } catch (e) {
            this.logger.error(`Error occurred when downloading: ${uris.map(u => u.toString(true))}.`, e);
        }
    }

    protected async forceDownload(blob_url: string, title: string): Promise<void> {
        try {
            if (this.anchor === undefined) {
                this.anchor = document.createElement('a');
            }
            this.anchor.href = blob_url;
            this.anchor.style.display = 'none';
            this.anchor.download = title;
            document.body.appendChild(this.anchor);
            this.anchor.click();
        } finally {
            // make sure anchor is removed from parent
            if (this.anchor && this.anchor.parentNode) {
                this.anchor.parentNode.removeChild(this.anchor);
            }
            URL.revokeObjectURL(blob_url);
        }
    }
}

export namespace FileDownloadService {
    export interface DownloadOptions {
        /**
         * `true` if the download link has to be copied to the clipboard. This will not trigger the actual download. Defaults to `false`.
         */
        readonly copyLink?: boolean;
    }
}
