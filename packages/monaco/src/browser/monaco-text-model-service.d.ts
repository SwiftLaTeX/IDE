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
/// <reference types="@typefox/monaco-editor-core/monaco" />
/// <reference types="@theia/monaco/src/typings/monaco" />
import { MonacoToProtocolConverter, ProtocolToMonacoConverter } from 'monaco-languageclient';
import URI from '@theia/core/lib/common/uri';
import { ResourceProvider, ReferenceCollection, Event } from '@theia/core';
import { EditorPreferences, EditorPreferenceChange } from '@theia/editor/lib/browser';
import { MonacoEditorModel } from './monaco-editor-model';
export declare class MonacoTextModelService implements monaco.editor.ITextModelService {
    protected readonly _models: ReferenceCollection<string, MonacoEditorModel>;
    protected readonly resourceProvider: ResourceProvider;
    protected readonly editorPreferences: EditorPreferences;
    protected readonly m2p: MonacoToProtocolConverter;
    protected readonly p2m: ProtocolToMonacoConverter;
    get models(): MonacoEditorModel[];
    get(uri: string): MonacoEditorModel | undefined;
    get onDidCreate(): Event<MonacoEditorModel>;
    createModelReference(raw: monaco.Uri | URI): Promise<monaco.editor.IReference<MonacoEditorModel>>;
    protected loadModel(uri: URI): Promise<MonacoEditorModel>;
    protected readonly modelOptions: {
        [name: string]: (keyof monaco.editor.ITextModelUpdateOptions | undefined);
    };
    protected updateModel(model: MonacoEditorModel, change?: EditorPreferenceChange): void;
    /** @deprecated pass MonacoEditorModel instead  */
    protected getModelOptions(uri: string): monaco.editor.ITextModelUpdateOptions;
    protected getModelOptions(model: MonacoEditorModel): monaco.editor.ITextModelUpdateOptions;
    registerTextModelContentProvider(scheme: string, provider: monaco.editor.ITextModelContentProvider): monaco.IDisposable;
}
//# sourceMappingURL=monaco-text-model-service.d.ts.map