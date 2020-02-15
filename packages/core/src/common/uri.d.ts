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
import Uri from 'vscode-uri';
import { Path } from './path';
export default class URI {
    private readonly codeUri;
    private _path;
    constructor(uri?: string | Uri);
    /**
     * TODO move implementation to `DefaultUriLabelProviderContribution.getName`
     *
     * @deprecated use `LabelProvider.getName` instead
     */
    get displayName(): string;
    /**
     * Return all uri from the current to the top most.
     */
    get allLocations(): URI[];
    get parent(): URI;
    relative(uri: URI): Path | undefined;
    resolve(path: string | Path): URI;
    /**
     * return a new URI replacing the current with the given scheme
     */
    withScheme(scheme: string): URI;
    /**
     * return a new URI replacing the current with the given authority
     */
    withAuthority(authority: string): URI;
    /**
     * return this URI without a authority
     */
    withoutAuthority(): URI;
    /**
     * return a new URI replacing the current with the given path
     */
    withPath(path: string | Path): URI;
    /**
     * return this URI without a path
     */
    withoutPath(): URI;
    /**
     * return a new URI replacing the current with the given query
     */
    withQuery(query: string): URI;
    /**
     * return this URI without a query
     */
    withoutQuery(): URI;
    /**
     * return a new URI replacing the current with the given fragment
     */
    withFragment(fragment: string): URI;
    /**
     * return this URI without a fragment
     */
    withoutFragment(): URI;
    /**
     * return a new URI replacing the current with its normalized path, resolving '..' and '.' segments
     */
    normalizePath(): URI;
    get scheme(): string;
    get authority(): string;
    get path(): Path;
    get query(): string;
    get fragment(): string;
    toString(skipEncoding?: boolean): string;
    isEqualOrParent(uri: URI): boolean;
    static getDistinctParents(uris: URI[]): URI[];
}
//# sourceMappingURL=uri.d.ts.map