/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import { Disposable, ResourceResolver } from '@theia/core';
import { Resource } from '@theia/core/lib/common/resource';
import URI from '@theia/core/lib/common/uri';
import { FileSystemMain, FileSystemExt } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
export declare class FileSystemMainImpl implements FileSystemMain, Disposable {
    private readonly proxy;
    private readonly resourceResolver;
    private readonly providers;
    private readonly toDispose;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    $registerFileSystemProvider(handle: number, scheme: string): Promise<void>;
    $unregisterProvider(handle: number): void;
}
export declare class FSResourceResolver implements ResourceResolver, Disposable {
    private providers;
    private toDispose;
    resolve(uri: URI): Resource;
    dispose(): void;
    registerResourceProvider(handle: number, scheme: string, proxy: FileSystemExt): Disposable;
}
/** Resource that delegates reading/saving a content to a plugin's FileSystemProvider. */
export declare class FSResource implements Resource {
    private handle;
    uri: URI;
    private proxy;
    constructor(handle: number, uri: URI, proxy: FileSystemExt);
    readContents(options?: {
        encoding?: string;
    }): Promise<string>;
    saveContents(content: string, options?: {
        encoding?: string;
    }): Promise<void>;
    dispose(): void;
}
//# sourceMappingURL=file-system-main.d.ts.map