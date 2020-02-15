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
import { interfaces } from 'inversify';
import { RPCProtocol } from '../../common/rpc-protocol';
import { OpenDialogOptionsMain, SaveDialogOptionsMain, DialogsMain, UploadDialogOptionsMain } from '../../common/plugin-api-rpc';
import { FileStat } from '@theia/filesystem/lib/common';
export declare class DialogsMainImpl implements DialogsMain {
    private workspaceService;
    private fileSystem;
    private openFileDialogFactory;
    private saveFileDialogFactory;
    private uploadService;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    protected getRootUri(defaultUri: string | undefined): Promise<FileStat | undefined>;
    $showOpenDialog(options: OpenDialogOptionsMain): Promise<string[] | undefined>;
    $showSaveDialog(options: SaveDialogOptionsMain): Promise<string | undefined>;
    $showUploadDialog(options: UploadDialogOptionsMain): Promise<string[] | undefined>;
}
//# sourceMappingURL=dialogs-main.d.ts.map