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
/// <reference types="@theia/monaco/src/typings/monaco" />
/// <reference types="@typefox/monaco-editor-core/monaco" />
import URI from '@theia/core/lib/common/uri';
import { EditorPreferenceChange, EditorPreferences, TextEditor, DiffNavigator } from '@theia/editor/lib/browser';
import { DisposableCollection } from '@theia/core/lib/common';
import { MonacoToProtocolConverter, ProtocolToMonacoConverter } from 'monaco-languageclient';
import { MonacoCommandServiceFactory } from './monaco-command-service';
import { MonacoContextMenuService } from './monaco-context-menu';
import { MonacoDiffEditor } from './monaco-diff-editor';
import { MonacoDiffNavigatorFactory } from './monaco-diff-navigator-factory';
import { MonacoEditor, MonacoEditorServices } from './monaco-editor';
import { MonacoEditorModel, WillSaveMonacoModelEvent } from './monaco-editor-model';
import { MonacoEditorService } from './monaco-editor-service';
import { MonacoQuickOpenService } from './monaco-quick-open-service';
import { MonacoTextModelService } from './monaco-text-model-service';
import { MonacoWorkspace } from './monaco-workspace';
import { MonacoBulkEditService } from './monaco-bulk-edit-service';
import IEditorOverrideServices = monaco.editor.IEditorOverrideServices;
import { ApplicationServer } from '@theia/core/lib/common/application-protocol';
import { KeybindingRegistry } from '@theia/core/lib/browser';
export declare class MonacoEditorProvider {
    protected readonly codeEditorService: MonacoEditorService;
    protected readonly textModelService: MonacoTextModelService;
    protected readonly contextMenuService: MonacoContextMenuService;
    protected readonly m2p: MonacoToProtocolConverter;
    protected readonly p2m: ProtocolToMonacoConverter;
    protected readonly workspace: MonacoWorkspace;
    protected readonly commandServiceFactory: MonacoCommandServiceFactory;
    protected readonly editorPreferences: EditorPreferences;
    protected readonly quickOpenService: MonacoQuickOpenService;
    protected readonly diffNavigatorFactory: MonacoDiffNavigatorFactory;
    protected readonly applicationServer: ApplicationServer;
    protected readonly contextKeyService: monaco.contextKeyService.ContextKeyService;
    protected readonly bulkEditService: MonacoBulkEditService;
    protected readonly services: MonacoEditorServices;
    protected keybindingRegistry: KeybindingRegistry;
    private isWindowsBackend;
    protected _current: MonacoEditor | undefined;
    /**
     * Returns the last focused MonacoEditor.
     * It takes into account inline editors as well.
     * If you are interested only in standalone editors then use `MonacoEditor.getCurrent(EditorManager)`
     */
    get current(): MonacoEditor | undefined;
    constructor(codeEditorService: MonacoEditorService, textModelService: MonacoTextModelService, contextMenuService: MonacoContextMenuService, m2p: MonacoToProtocolConverter, p2m: ProtocolToMonacoConverter, workspace: MonacoWorkspace, commandServiceFactory: MonacoCommandServiceFactory, editorPreferences: EditorPreferences, quickOpenService: MonacoQuickOpenService, diffNavigatorFactory: MonacoDiffNavigatorFactory, applicationServer: ApplicationServer, contextKeyService: monaco.contextKeyService.ContextKeyService);
    protected getModel(uri: URI, toDispose: DisposableCollection): Promise<MonacoEditorModel>;
    get(uri: URI): Promise<MonacoEditor>;
    protected doCreateEditor(factory: (override: IEditorOverrideServices, toDispose: DisposableCollection) => Promise<MonacoEditor>): Promise<MonacoEditor>;
    /**
     * Suppresses Monaco keydown listener to avoid triggering default Monaco keybindings
     * if they are overriden by a user. Monaco keybindings should be registered as Theia keybindings
     * to allow a user to customize them.
     */
    protected suppressMonacoKeybindingListener(editor: MonacoEditor): void;
    protected injectKeybindingResolver(editor: MonacoEditor): void;
    protected createEditor(uri: URI, override: IEditorOverrideServices, toDispose: DisposableCollection): Promise<MonacoEditor>;
    protected get preferencePrefixes(): string[];
    protected createMonacoEditor(uri: URI, override: IEditorOverrideServices, toDispose: DisposableCollection): Promise<MonacoEditor>;
    protected createMonacoEditorOptions(model: MonacoEditorModel): MonacoEditor.IOptions;
    protected updateMonacoEditorOptions(editor: MonacoEditor, event?: EditorPreferenceChange): void;
    protected formatOnSave(editor: MonacoEditor, event: WillSaveMonacoModelEvent): Promise<monaco.editor.IIdentifiedSingleEditOperation[]>;
    protected get diffPreferencePrefixes(): string[];
    protected createMonacoDiffEditor(uri: URI, override: IEditorOverrideServices, toDispose: DisposableCollection): Promise<MonacoDiffEditor>;
    protected createMonacoDiffEditorOptions(original: MonacoEditorModel, modified: MonacoEditorModel): MonacoDiffEditor.IOptions;
    protected updateMonacoDiffEditorOptions(editor: MonacoDiffEditor, event?: EditorPreferenceChange, resourceUri?: string): void;
    /** @deprecated always pass a language as an overrideIdentifier */
    protected createOptions(prefixes: string[], uri: string): {
        [name: string]: any;
    };
    protected createOptions(prefixes: string[], uri: string, overrideIdentifier: string): {
        [name: string]: any;
    };
    protected setOption(preferenceName: string, value: any, prefixes: string[], options?: {
        [name: string]: any;
    }): {
        [name: string]: any;
    };
    protected toOptionName(preferenceName: string, prefixes: string[]): string;
    protected doSetOption(obj: {
        [name: string]: any;
    }, value: any, names: string[], idx?: number): void;
    protected installQuickOpenService(editor: MonacoEditor): void;
    protected installReferencesController(editor: MonacoEditor): void;
    getDiffNavigator(editor: TextEditor): DiffNavigator;
    createInline(uri: URI, node: HTMLElement, options?: MonacoEditor.IOptions): Promise<MonacoEditor>;
    static inlineOptions: monaco.editor.IEditorConstructionOptions;
}
//# sourceMappingURL=monaco-editor-provider.d.ts.map