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
import { ReferenceCollection, Reference } from '@theia/core';
import { Repository } from '../common';
import { GitRepositoryWatcher, GitRepositoryWatcherFactory } from './git-repository-watcher';
export declare class GitRepositoryManager {
    protected readonly watcherFactory: GitRepositoryWatcherFactory;
    protected readonly watchers: ReferenceCollection<Repository, GitRepositoryWatcher>;
    run<T>(repository: Repository, op: () => Promise<T>): Promise<T>;
    getWatcher(repository: Repository): Promise<Reference<GitRepositoryWatcher>>;
    protected sync(repository: Repository): Promise<void>;
}
//# sourceMappingURL=git-repository-manager.d.ts.map