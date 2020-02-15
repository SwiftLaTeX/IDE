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
import { Git, Repository } from '../common';
import { Resource } from '@theia/core';
import URI from '@theia/core/lib/common/uri';
export declare const GIT_RESOURCE_SCHEME = "gitrev";
export declare class GitResource implements Resource {
    readonly uri: URI;
    protected readonly repository: Repository | undefined;
    protected readonly git: Git;
    constructor(uri: URI, repository: Repository | undefined, git: Git);
    readContents(options?: {
        encoding?: string;
    }): Promise<string>;
    dispose(): void;
}
//# sourceMappingURL=git-resource.d.ts.map