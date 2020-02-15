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
import { FrontendApplication, FrontendApplicationContribution } from '@theia/core/lib/browser';
import { CommandContribution, CommandRegistry } from '@theia/core/lib/common';
import { Languages } from '@theia/languages/lib/browser';
import { MergeConflictsCodeLensProvider } from './merge-conflicts-code-lense-provider';
import { MergeConflictResolver } from './merge-conflict-resolver';
import { MergeConflictsProvider } from './merge-conflicts-provider';
import { MergeConflictsDecorations } from './merge-conflicts-decorations';
export declare class MergeConflictsFrontendContribution implements FrontendApplicationContribution, CommandContribution {
    protected readonly languages: Languages;
    protected readonly mergeConflictsCodeLensProvider: MergeConflictsCodeLensProvider;
    protected readonly mergeConflictResolver: MergeConflictResolver;
    protected readonly decorator: MergeConflictsDecorations;
    protected readonly mergeConflictsProvider: MergeConflictsProvider;
    onStart(app: FrontendApplication): void;
    registerCommands(registry: CommandRegistry): void;
}
//# sourceMappingURL=merge-conflicts-frontend-contribution.d.ts.map