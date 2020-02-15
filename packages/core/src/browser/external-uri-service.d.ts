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
import URI from '../common/uri';
import { MaybePromise } from '../common/types';
export declare class ExternalUriService {
    /**
     * Maps local to remote URLs.
     * Should be no-op if the given URL is not a localhost URL.
     *
     * By default maps to an origin serving Theia.
     *
     * Use `parseLocalhost` to retrieve localhost address and port information.
     */
    resolve(uri: URI): MaybePromise<URI>;
    protected toRemoteUrl(uri: URI, localhost: {
        address: string;
        port: number;
    }): URI;
    protected toRemoteHost(localhost: {
        address: string;
        port: number;
    }): string;
    parseLocalhost(uri: URI): {
        address: string;
        port: number;
    } | undefined;
}
//# sourceMappingURL=external-uri-service.d.ts.map