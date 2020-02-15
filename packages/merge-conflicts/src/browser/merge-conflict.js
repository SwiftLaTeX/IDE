"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var MergeConflictsCommands;
(function (MergeConflictsCommands) {
    MergeConflictsCommands.MERGE_CONFLICT_PREFIX = 'Merge Conflict';
    MergeConflictsCommands.AcceptCurrent = {
        id: 'merge-conflicts:accept.current',
        category: MergeConflictsCommands.MERGE_CONFLICT_PREFIX,
        label: 'Accept Current Change'
    };
    MergeConflictsCommands.AcceptIncoming = {
        id: 'merge-conflicts:accept.incoming',
        category: MergeConflictsCommands.MERGE_CONFLICT_PREFIX,
        label: 'Accept Incoming Change'
    };
    MergeConflictsCommands.AcceptBoth = {
        id: 'merge-conflicts:accept.both',
        category: MergeConflictsCommands.MERGE_CONFLICT_PREFIX,
        label: 'Accept Both Changes'
    };
})(MergeConflictsCommands = exports.MergeConflictsCommands || (exports.MergeConflictsCommands = {}));
//# sourceMappingURL=merge-conflict.js.map