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
import URI from '@theia/core/lib/common/uri';
import { SelectionService } from '@theia/core/lib/common';
import { NavigatableWidgetOptions, WidgetFactory, LabelProvider } from '@theia/core/lib/browser';
import { EditorWidget } from './editor-widget';
import { TextEditorProvider } from './editor';
export declare class EditorWidgetFactory implements WidgetFactory {
    static ID: string;
    readonly id: string;
    protected readonly labelProvider: LabelProvider;
    protected readonly editorProvider: TextEditorProvider;
    protected readonly selectionService: SelectionService;
    createWidget(options: NavigatableWidgetOptions): Promise<EditorWidget>;
    protected createEditor(uri: URI): Promise<EditorWidget>;
    private setLabels;
}
//# sourceMappingURL=editor-widget-factory.d.ts.map