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
import { Range } from '@theia/languages/lib/browser';
import { Command } from '@theia/core/lib/common';
export interface MarkedRegion {
    marker?: Range;
    content?: Range;
}
export interface MergeConflict {
    total?: Range;
    current: MarkedRegion;
    incoming: MarkedRegion;
    bases: MarkedRegion[];
}
export interface MergeConflictCommandArgument {
    uri: string;
    conflict: MergeConflict;
}
export declare namespace MergeConflictsCommands {
    const MERGE_CONFLICT_PREFIX = "Merge Conflict";
    const AcceptCurrent: Command;
    const AcceptIncoming: Command;
    const AcceptBoth: Command;
}
//# sourceMappingURL=merge-conflict.d.ts.map