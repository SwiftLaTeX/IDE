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
import { Resource, ResourceResolver } from '@theia/core';
import URI from '@theia/core/lib/common/uri';
import { GitRepositoryProvider } from './git-repository-provider';
import { GitResource } from './git-resource';
export declare class GitResourceResolver implements ResourceResolver {
    protected readonly git: Git;
    protected readonly repositoryProvider: GitRepositoryProvider;
    constructor(git: Git, repositoryProvider: GitRepositoryProvider);
    resolve(uri: URI): Resource | Promise<Resource>;
    getResource(uri: URI): Promise<GitResource>;
    getRepository(uri: URI): Promise<Repository | undefined>;
}
//# sourceMappingURL=git-resource-resolver.d.ts.map