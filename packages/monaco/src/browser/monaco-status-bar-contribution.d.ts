/********************************************************************************
 * Copyright (C) 2018 Ericsson
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
/// <reference types="@typefox/monaco-editor-core/monaco" />
import { DisposableCollection } from '@theia/core';
import { FrontendApplicationContribution, FrontendApplication, StatusBar } from '@theia/core/lib/browser';
import { EditorManager, EditorWidget } from '@theia/editor/lib/browser';
export declare class MonacoStatusBarContribution implements FrontendApplicationContribution {
    protected readonly editorManager: EditorManager;
    protected readonly statusBar: StatusBar;
    protected readonly toDispose: DisposableCollection;
    constructor(editorManager: EditorManager, statusBar: StatusBar);
    onStart(app: FrontendApplication): void;
    protected updateStatusBar(): void;
    protected setConfigTabSizeWidget(): void;
    protected removeConfigTabSizeWidget(): void;
    protected setLineEndingWidget(): void;
    protected removeLineEndingWidget(): void;
    protected getModel(editor: EditorWidget | undefined): monaco.editor.IModel | undefined;
}
//# sourceMappingURL=monaco-status-bar-contribution.d.ts.map