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
import { ResourceResolver, Resource } from '@theia/core';
import URI from '@theia/core/lib/common/uri';
export declare const MEMORY_TEXT = "mem-txt";
export declare class InMemoryTextResource implements Resource {
    readonly uri: URI;
    constructor(uri: URI);
    readContents(options?: {
        encoding?: string | undefined;
    } | undefined): Promise<string>;
    dispose(): void;
}
export declare class InMemoryTextResourceResolver implements ResourceResolver {
    resolve(uri: URI): Resource | Promise<Resource>;
}
//# sourceMappingURL=in-memory-text-resource.d.ts.map