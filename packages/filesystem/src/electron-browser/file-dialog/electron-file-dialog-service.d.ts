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
import { FileFilter, OpenDialogOptions, SaveDialogOptions } from 'electron';
import URI from '@theia/core/lib/common/uri';
import { MaybeArray } from '@theia/core/lib/common/types';
import { MessageService } from '@theia/core/lib/common/message-service';
import { FileStat } from '../../common';
import { DefaultFileDialogService, OpenFileDialogProps, SaveFileDialogProps } from '../../browser/file-dialog';
export declare class ElectronFileDialogService extends DefaultFileDialogService {
    protected readonly messageService: MessageService;
    showOpenDialog(props: OpenFileDialogProps & {
        canSelectMany: true;
    }, folder?: FileStat): Promise<MaybeArray<URI> | undefined>;
    showOpenDialog(props: OpenFileDialogProps, folder?: FileStat): Promise<URI | undefined>;
    showSaveDialog(props: SaveFileDialogProps, folder?: FileStat): Promise<URI | undefined>;
    protected canReadWrite(uris: MaybeArray<URI>): Promise<boolean>;
    protected toDialogOptions(uri: URI, props: SaveFileDialogProps | OpenFileDialogProps, dialogTitle: string): electron.FileDialogProps;
    protected toOpenDialogOptions(uri: URI, props: OpenFileDialogProps): OpenDialogOptions;
    protected toSaveDialogOptions(uri: URI, props: SaveFileDialogProps): SaveDialogOptions;
}
export declare namespace electron {
    /**
     * Common "super" interface of the `electron.SaveDialogOptions` and `electron.OpenDialogOptions` types.
     */
    interface FileDialogProps {
        /**
         * The dialog title.
         */
        readonly title?: string;
        /**
         * The default path, where the dialog opens. Requires an FS path.
         */
        readonly defaultPath?: string;
        /**
         * Resource filter.
         */
        readonly filters?: FileFilter[];
    }
    namespace dialog {
        /**
         * Converts the Theia specific `OpenFileDialogProps` into an electron specific array.
         *
         * Note: On Windows and Linux an open dialog can not be both a file selector and a directory selector,
         * so if you set properties to ['openFile', 'openDirectory'] on these platforms, a directory selector will be shown.
         *
         * See: https://github.com/electron/electron/issues/10252#issuecomment-322012159
         */
        function toDialogProperties(props: OpenFileDialogProps): Array<'openFile' | 'openDirectory' | 'multiSelections'>;
    }
}
//# sourceMappingURL=electron-file-dialog-service.d.ts.map