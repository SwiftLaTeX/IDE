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
import { EditorDecorationOptions, EditorDecorator } from '@theia/editor/lib/browser';
import { MergeConflictsUpdate } from './merge-conflicts-provider';
export declare class MergeConflictsDecorations extends EditorDecorator {
    decorate(params: MergeConflictsUpdate): void;
}
export declare namespace MergeConflictsDecorations {
    const Options: {
        CurrentMarker: EditorDecorationOptions;
        CurrentContent: EditorDecorationOptions;
        BaseMarker: EditorDecorationOptions;
        BaseContent: EditorDecorationOptions;
        IncomingMarker: EditorDecorationOptions;
        IncomingContent: EditorDecorationOptions;
    };
}
//# sourceMappingURL=merge-conflicts-decorations.d.ts.map