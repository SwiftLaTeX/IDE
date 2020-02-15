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
import * as theia from '@theia/plugin';
import { FileSystemExt } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import { UriComponents } from '../common/uri-components';
export declare class FileSystemExtImpl implements FileSystemExt {
    private readonly proxy;
    private readonly usedSchemes;
    private readonly fsProviders;
    private handlePool;
    constructor(rpc: RPCProtocol);
    registerFileSystemProvider(scheme: string, provider: theia.FileSystemProvider): theia.Disposable;
    private checkProviderExists;
    $readFile(handle: number, resource: UriComponents, options?: {
        encoding?: string;
    }): Promise<string>;
    $writeFile(handle: number, resource: UriComponents, content: string, options?: {
        encoding?: string;
    }): Promise<void>;
}
//# sourceMappingURL=file-system.d.ts.map