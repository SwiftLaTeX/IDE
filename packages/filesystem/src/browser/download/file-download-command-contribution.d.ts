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
import URI from '@theia/core/lib/common/uri';
import { SelectionService } from '@theia/core/lib/common/selection-service';
import { Command, CommandContribution, CommandRegistry } from '@theia/core/lib/common/command';
import { FileDownloadService } from './file-download-service';
export declare class FileDownloadCommandContribution implements CommandContribution {
    protected readonly downloadService: FileDownloadService;
    protected readonly selectionService: SelectionService;
    registerCommands(registry: CommandRegistry): void;
    protected executeDownload(uris: URI[], options?: {
        copyLink?: boolean;
    }): Promise<void>;
    protected isDownloadEnabled(uris: URI[]): boolean;
    protected isDownloadVisible(uris: URI[]): boolean;
}
export declare namespace FileDownloadCommands {
    const DOWNLOAD: Command;
    const COPY_DOWNLOAD_LINK: Command;
}
//# sourceMappingURL=file-download-command-contribution.d.ts.map