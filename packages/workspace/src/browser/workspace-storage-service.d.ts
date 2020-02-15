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
import { StorageService } from '@theia/core/lib/browser/storage-service';
import { WorkspaceService } from './workspace-service';
import { FileStat } from '@theia/filesystem/lib/common';
export declare class WorkspaceStorageService implements StorageService {
    private prefix;
    private initialized;
    protected storageService: StorageService;
    protected workspaceService: WorkspaceService;
    protected init(): void;
    setData<T>(key: string, data: T): Promise<void>;
    getData<T>(key: string, defaultValue?: T): Promise<T | undefined>;
    protected prefixWorkspaceURI(originalKey: string): string;
    protected getPrefix(workspaceStat: FileStat | undefined): string;
    private updatePrefix;
}
//# sourceMappingURL=workspace-storage-service.d.ts.map