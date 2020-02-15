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
import URI from '@theia/core/lib/common/uri';
import { Resource, ResourceResolver, Emitter, Event, MaybePromise, DisposableCollection } from '@theia/core/lib/common';
import { UserStorageService } from './user-storage-service';
export declare class UserStorageResource implements Resource {
    uri: URI;
    protected readonly service: UserStorageService;
    protected readonly onDidChangeContentsEmitter: Emitter<void>;
    protected readonly toDispose: DisposableCollection;
    constructor(uri: URI, service: UserStorageService);
    dispose(): void;
    readContents(options?: {
        encoding?: string;
    }): Promise<string>;
    saveContents(content: string): Promise<void>;
    get onDidChangeContents(): Event<void>;
}
export declare class UserStorageResolver implements ResourceResolver {
    protected readonly service: UserStorageService;
    constructor(service: UserStorageService);
    resolve(uri: URI): MaybePromise<UserStorageResource>;
}
//# sourceMappingURL=user-storage-resource.d.ts.map