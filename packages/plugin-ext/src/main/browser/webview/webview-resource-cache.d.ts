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
import { Deferred } from '@theia/core/lib/common/promise-util';
import { MaybePromise } from '@theia/core/lib/common/types';
export interface WebviewResourceResponse {
    eTag: string | undefined;
    body(): MaybePromise<Uint8Array>;
}
/**
 * Browser based cache of webview resources across all instances.
 */
export declare class WebviewResourceCache {
    protected readonly cache: Deferred<Cache | undefined>;
    constructor();
    protected resolveCache(): Promise<void>;
    match(url: string): Promise<WebviewResourceResponse | undefined>;
    delete(url: string): Promise<boolean>;
    put(url: string, response: WebviewResourceResponse): Promise<void>;
}
//# sourceMappingURL=webview-resource-cache.d.ts.map