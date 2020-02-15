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
import { DisposableCollection, Emitter } from '@theia/core/lib/common';
import { ScmContextKeyService } from './scm-context-key-service';
import { ScmRepository, ScmProviderOptions } from './scm-repository';
import { ScmCommand, ScmProvider } from './scm-provider';
export declare class ScmService {
    protected readonly contextKeys: ScmContextKeyService;
    protected readonly _repositories: Map<string, ScmRepository>;
    protected _selectedRepository: ScmRepository | undefined;
    protected readonly onDidChangeSelectedRepositoryEmitter: Emitter<ScmRepository | undefined>;
    readonly onDidChangeSelectedRepository: import("@theia/core/src/common").Event<ScmRepository | undefined>;
    protected readonly onDidAddRepositoryEmitter: Emitter<ScmRepository>;
    readonly onDidAddRepository: import("@theia/core/src/common").Event<ScmRepository>;
    protected readonly onDidRemoveRepositoryEmitter: Emitter<ScmRepository>;
    readonly onDidRemoveRepository: import("@theia/core/src/common").Event<ScmRepository>;
    protected readonly onDidChangeStatusBarCommandsEmitter: Emitter<ScmCommand[]>;
    readonly onDidChangeStatusBarCommands: import("@theia/core/src/common").Event<ScmCommand[]>;
    protected fireDidChangeStatusBarCommands(): void;
    get statusBarCommands(): ScmCommand[];
    get repositories(): ScmRepository[];
    get selectedRepository(): ScmRepository | undefined;
    protected readonly toDisposeOnSelected: DisposableCollection;
    set selectedRepository(repository: ScmRepository | undefined);
    registerScmProvider(provider: ScmProvider, options?: ScmProviderOptions): ScmRepository;
    protected updateContextKeys(): void;
}
//# sourceMappingURL=scm-service.d.ts.map