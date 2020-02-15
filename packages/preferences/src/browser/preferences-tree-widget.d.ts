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
/// <reference types="react" />
import { Message } from '@phosphor/messaging';
import { PreferencesMenuFactory } from './preferences-menu-factory';
import { PreferencesDecorator } from './preferences-decorator';
import { DockPanel, SplitPanel, Widget } from '@phosphor/widgets';
import { ApplicationShell, ContextMenuRenderer, PreferenceSchemaProvider, PreferenceScope, PreferenceService, Saveable, TreeModel, TreeNode, TreeProps, TreeWidget, WidgetManager, LabelProvider } from '@theia/core/lib/browser';
import { UserPreferenceProvider } from './user-preference-provider';
import { WorkspacePreferenceProvider } from './workspace-preference-provider';
import { PreferencesEditorWidget } from './preference-editor-widget';
import { EditorManager } from '@theia/editor/lib/browser';
import { DisposableCollection, Emitter, Event, MessageService } from '@theia/core';
import { FileSystem } from '@theia/filesystem/lib/common';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { FoldersPreferencesProvider } from './folders-preferences-provider';
import { PreferenceConfigurations } from '@theia/core/lib/browser/preferences/preference-configurations';
export declare class PreferencesContainer extends SplitPanel implements ApplicationShell.TrackableWidgetProvider, Saveable {
    static ID: string;
    protected treeWidget: PreferencesTreeWidget | undefined;
    protected editorsContainer: PreferencesEditorsContainer;
    private currentEditor;
    private readonly editors;
    private deferredEditors;
    protected readonly onDirtyChangedEmitter: Emitter<void>;
    readonly onDirtyChanged: Event<void>;
    protected readonly onDidChangeTrackableWidgetsEmitter: Emitter<Widget[]>;
    readonly onDidChangeTrackableWidgets: Event<Widget[]>;
    protected readonly toDispose: DisposableCollection;
    protected readonly widgetManager: WidgetManager;
    protected readonly shell: ApplicationShell;
    protected readonly messageService: MessageService;
    protected readonly preferenceService: PreferenceService;
    protected readonly workspaceService: WorkspaceService;
    protected _preferenceScope: PreferenceScope;
    protected init(): void;
    dispose(): void;
    get autoSave(): 'on' | 'off';
    get dirty(): boolean;
    save(): void;
    getTrackableWidgets(): Promise<Widget[]>;
    get preferenceScope(): PreferenceScope;
    set preferenceScope(preferenceScope: PreferenceScope);
    protected onAfterAttach(msg: Message): Promise<void>;
    protected onActivateRequest(msg: Message): void;
    protected onCloseRequest(msg: Message): void;
    activatePreferenceEditor(preferenceScope: PreferenceScope): Promise<void>;
    private doActivatePreferenceEditor;
    protected handleEditorsChanged(): void;
    private refreshFoldersPreferencesEditor;
}
export declare class PreferencesEditorsContainer extends DockPanel {
    protected readonly workspaceService: WorkspaceService;
    protected readonly fileSystem: FileSystem;
    protected readonly foldersPreferenceProvider: FoldersPreferencesProvider;
    static ID: string;
    protected readonly editorManager: EditorManager;
    protected readonly labelProvider: LabelProvider;
    protected readonly userPreferenceProvider: UserPreferenceProvider;
    protected readonly workspacePreferenceProvider: WorkspacePreferenceProvider;
    private userPreferenceEditorWidget;
    private workspacePreferenceEditorWidget;
    private foldersPreferenceEditorWidget;
    private readonly onInitEmitter;
    readonly onInit: Event<void>;
    private readonly onEditorChangedEmitter;
    readonly onEditorChanged: Event<PreferencesEditorWidget>;
    private readonly onFolderPreferenceEditorUriChangedEmitter;
    readonly onFolderPreferenceEditorUriChanged: Event<string>;
    protected readonly toDispose: DisposableCollection;
    protected readonly toDisposeOnDetach: DisposableCollection;
    constructor(workspaceService: WorkspaceService, fileSystem: FileSystem, foldersPreferenceProvider: FoldersPreferencesProvider);
    dispose(): void;
    onCloseRequest(msg: Message): void;
    onUpdateRequest(msg: Message): void;
    onBeforeDetach(): void;
    protected onAfterAttach(msg: Message): Promise<void>;
    protected getUserPreferenceEditorWidget(): Promise<PreferencesEditorWidget>;
    refreshWorkspacePreferenceEditor(): Promise<void>;
    protected getWorkspacePreferenceEditorWidget(): Promise<PreferencesEditorWidget | undefined>;
    get activeFolder(): string | undefined;
    refreshFoldersPreferencesEditorWidget(currentFolderUri: string | undefined): Promise<void>;
    closeFoldersPreferenceEditorWidget(): void;
    protected getFoldersPreferencesEditor(folderUri: string | undefined): Promise<PreferencesEditorWidget | undefined>;
    private getFolderSettingsUri;
    activatePreferenceEditor(preferenceScope: PreferenceScope): void;
    private getPreferenceEditorCaption;
}
export declare class PreferencesTreeWidget extends TreeWidget {
    readonly model: TreeModel;
    protected readonly treeProps: TreeProps;
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    protected readonly preferenceSchemaProvider: PreferenceSchemaProvider;
    static ID: string;
    private activeFolderUri;
    private preferencesGroupNames;
    private properties;
    private readonly onPreferenceSelectedEmitter;
    readonly onPreferenceSelected: Event<{
        [key: string]: string;
    }>;
    protected readonly toDispose: DisposableCollection;
    protected readonly preferencesMenuFactory: PreferencesMenuFactory;
    protected readonly preferenceService: PreferenceService;
    protected readonly decorator: PreferencesDecorator;
    protected readonly preferenceConfigs: PreferenceConfigurations;
    protected constructor(model: TreeModel, treeProps: TreeProps, contextMenuRenderer: ContextMenuRenderer, preferenceSchemaProvider: PreferenceSchemaProvider);
    dispose(): void;
    protected onAfterAttach(msg: Message): void;
    protected handleContextMenuEvent(node: TreeNode | undefined, event: React.MouseEvent<HTMLElement>): void;
    protected handleClickEvent(node: TreeNode | undefined, event: React.MouseEvent<HTMLElement>): void;
    protected handleEnter(event: KeyboardEvent): void;
    private openContextMenu;
    protected initializeModel(): void;
    setActiveFolder(folder: string): void;
    /**
     * Sort two string.
     *
     * @param a the first string.
     * @param b the second string.
     */
    protected sort(a: string, b: string): number;
}
//# sourceMappingURL=preferences-tree-widget.d.ts.map