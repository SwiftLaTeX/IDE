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
import { CodeLensProvider, CodeLensParams, CodeLens, CancellationToken } from '@theia/languages/lib/browser';
import { MergeConflictsProvider } from './merge-conflicts-provider';
import { MergeConflict } from './merge-conflict';
export declare class MergeConflictsCodeLensProvider implements CodeLensProvider {
    protected readonly mergeConflictsProvider: MergeConflictsProvider;
    provideCodeLenses(params: CodeLensParams, token: CancellationToken): Promise<CodeLens[]>;
    protected toCodeLense(uri: string, conflict: MergeConflict): CodeLens[];
}
//# sourceMappingURL=merge-conflicts-code-lense-provider.d.ts.map