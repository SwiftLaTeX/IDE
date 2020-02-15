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
import URI from '../common/uri';
/**
 * An endpoint provides URLs for http and ws, based on configuration and defaults.
 */
export declare class Endpoint {
    protected readonly options: Endpoint.Options;
    protected readonly location: Endpoint.Location;
    static readonly PROTO_HTTPS: string;
    static readonly PROTO_HTTP: string;
    static readonly PROTO_WS: string;
    static readonly PROTO_WSS: string;
    static readonly PROTO_FILE: string;
    constructor(options?: Endpoint.Options, location?: Endpoint.Location);
    getWebSocketUrl(): URI;
    getRestUrl(): URI;
    protected get pathname(): string;
    protected get host(): string;
    protected get port(): string;
    protected getSearchParam(name: string, defaultValue: string): string;
    protected get wsScheme(): string;
    /**
     * The HTTP/HTTPS scheme of the endpoint, or the user defined one.
     * See: `Endpoint.Options.httpScheme`.
     */
    get httpScheme(): string;
    protected get path(): string;
}
export declare namespace Endpoint {
    class Options {
        host?: string;
        wsScheme?: string;
        httpScheme?: string;
        path?: string;
    }
    class Location {
        host: string;
        pathname: string;
        search: string;
        protocol: string;
    }
}
//# sourceMappingURL=endpoint.d.ts.map