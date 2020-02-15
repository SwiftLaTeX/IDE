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
import { TextDocument, Range } from '@theia/languages/lib/browser';
import { CommandHandler } from '@theia/core/lib/common';
import { MergeConflictCommandArgument, MergeConflict } from './merge-conflict';
import { EditorManager } from '@theia/editor/lib/browser';
export declare class MergeConflictResolver {
    protected readonly editorManager: EditorManager;
    readonly acceptCurrent: CommandHandler;
    readonly acceptIncoming: CommandHandler;
    readonly acceptBoth: CommandHandler;
    protected doAcceptCurrent(argument: MergeConflictCommandArgument): void;
    protected doAcceptIncoming(argument: MergeConflictCommandArgument): void;
    protected doAcceptBoth(argument: MergeConflictCommandArgument): void;
    protected doAccept(argument: MergeConflictCommandArgument, newTextFn: ((textOfRange: (range: Range | undefined) => string, conflict: MergeConflict) => string)): Promise<void>;
    protected getTextRange(range: Range | undefined, document: TextDocument): string;
}
//# sourceMappingURL=merge-conflict-resolver.d.ts.map