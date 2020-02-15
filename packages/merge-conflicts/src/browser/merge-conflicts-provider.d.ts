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
import { MergeConflict } from './merge-conflict';
import { TextEditor, EditorManager, EditorWidget } from '@theia/editor/lib/browser';
import { Emitter, Event } from '@theia/core';
import { MergeConflictsParser } from './merge-conflicts-parser';
export declare class MergeConflictsProvider {
    protected readonly editorManager: EditorManager;
    protected readonly mergeConflictParser: MergeConflictsParser;
    protected readonly onDidUpdateEmitter: Emitter<MergeConflictsUpdate>;
    readonly onDidUpdate: Event<MergeConflictsUpdate>;
    protected values: Map<string, Promise<MergeConflict[]>>;
    protected valueTimeouts: Map<string, number>;
    protected initialize(): void;
    get(uri: string): Promise<MergeConflict[] | undefined>;
    protected handleNewEditor(editorWidget: EditorWidget): void;
    protected updateMergeConflicts(editor: TextEditor): void;
    protected computeMergeConflicts(editor: TextEditor): MergeConflict[];
}
export interface MergeConflictsUpdate {
    readonly editor: TextEditor;
    readonly mergeConflicts: MergeConflict[];
}
//# sourceMappingURL=merge-conflicts-provider.d.ts.map