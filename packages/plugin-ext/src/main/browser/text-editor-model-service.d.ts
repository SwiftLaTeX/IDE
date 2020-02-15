/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { Event } from '@theia/core';
import { MonacoEditorModel, WillSaveMonacoModelEvent } from '@theia/monaco/lib/browser/monaco-editor-model';
import { MonacoTextModelService } from '@theia/monaco/lib/browser/monaco-text-model-service';
import { MonacoWorkspace } from '@theia/monaco/lib/browser/monaco-workspace';
import URI from '@theia/core/lib/common/uri';
import { Reference } from '@theia/core/lib/common/reference';
export declare class EditorModelService {
    private monacoModelService;
    private modelModeChangedEmitter;
    private onModelRemovedEmitter;
    private modelDirtyEmitter;
    private modelSavedEmitter;
    private onModelWillSavedEmitter;
    readonly onModelDirtyChanged: Event<MonacoEditorModel>;
    readonly onModelSaved: Event<MonacoEditorModel>;
    readonly onModelModeChanged: Event<{
        model: MonacoEditorModel;
        oldModeId: string;
    }>;
    readonly onModelRemoved: Event<MonacoEditorModel>;
    readonly onModelWillSave: Event<WillSaveMonacoModelEvent>;
    constructor(monacoModelService: MonacoTextModelService, monacoWorkspace: MonacoWorkspace);
    private modelCreated;
    get onModelAdded(): Event<MonacoEditorModel>;
    getModels(): MonacoEditorModel[];
    saveAll(includeUntitled?: boolean): Promise<boolean>;
    createModelReference(uri: URI): Promise<Reference<MonacoEditorModel>>;
}
//# sourceMappingURL=text-editor-model-service.d.ts.map