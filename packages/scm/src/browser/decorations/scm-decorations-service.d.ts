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
import { Event, ResourceProvider } from '@theia/core';
import { DirtyDiffDecorator } from '../dirty-diff/dirty-diff-decorator';
import { EditorManager, TextEditor } from '@theia/editor/lib/browser';
import { ScmService } from '../scm-service';
export interface DecorationData {
    letter?: string;
    title?: string;
    color?: {
        id: string;
    };
    priority?: number;
    bubble?: boolean;
    source?: string;
}
export declare class ScmDecorationsService {
    protected readonly decorator: DirtyDiffDecorator;
    protected readonly scmService: ScmService;
    protected readonly editorManager: EditorManager;
    protected readonly resourceProvider: ResourceProvider;
    private readonly NavigatorDecorationsEmitter;
    private readonly diffComputer;
    private dirtyState;
    constructor(decorator: DirtyDiffDecorator, scmService: ScmService, editorManager: EditorManager, resourceProvider: ResourceProvider);
    applyEditorDecorations(editor: TextEditor): Promise<void>;
    get onNavigatorDecorationsChanged(): Event<Map<string, DecorationData>>;
    fireNavigatorDecorationsChanged(data: Map<string, DecorationData>): void;
}
//# sourceMappingURL=scm-decorations-service.d.ts.map