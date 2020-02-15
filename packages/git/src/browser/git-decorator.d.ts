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
import { ILogger } from '@theia/core/lib/common/logger';
import { Event, Emitter } from '@theia/core/lib/common/event';
import { Tree } from '@theia/core/lib/browser/tree/tree';
import { PreferenceChangeEvent } from '@theia/core/lib/browser/preferences/preference-proxy';
import { TreeDecorator, TreeDecoration } from '@theia/core/lib/browser/tree/tree-decorator';
import { Git } from '../common/git';
import { WorkingDirectoryStatus } from '../common/git-model';
import { GitFileChange } from '../common/git-model';
import { GitPreferences, GitConfiguration } from './git-preferences';
import { GitRepositoryTracker } from './git-repository-tracker';
export declare class GitDecorator implements TreeDecorator {
    readonly id = "theia-git-decorator";
    protected readonly git: Git;
    protected readonly repositories: GitRepositoryTracker;
    protected readonly preferences: GitPreferences;
    protected readonly logger: ILogger;
    protected readonly emitter: Emitter<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    protected enabled: boolean;
    protected showColors: boolean;
    protected init(): void;
    decorations(tree: Tree): Promise<Map<string, TreeDecoration.Data>>;
    get onDidChangeDecorations(): Event<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    protected fireDidChangeDecorations(event: (tree: Tree) => Map<string, TreeDecoration.Data>): void;
    protected collectDecorators(tree: Tree, status: WorkingDirectoryStatus | undefined): Map<string, TreeDecoration.Data>;
    protected appendContainerChanges(tree: Tree, changes: GitFileChange[]): Map<string, GitFileChange>;
    protected toDecorator(change: GitFileChange): TreeDecoration.Data;
    protected compare(left: GitFileChange, right: GitFileChange): number;
    protected handlePreferenceChange(event: PreferenceChangeEvent<GitConfiguration>): Promise<void>;
}
//# sourceMappingURL=git-decorator.d.ts.map