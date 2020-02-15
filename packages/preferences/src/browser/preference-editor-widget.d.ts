/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { Title } from '@phosphor/widgets';
import { DockPanel, Menu, TabBar, Widget } from '@phosphor/widgets';
import { VirtualElement } from '@phosphor/virtualdom';
import { PreferenceScope } from '@theia/core/lib/browser';
import { EditorWidget } from '@theia/editor/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { FileSystem } from '@theia/filesystem/lib/common';
import { FoldersPreferencesProvider } from './folders-preferences-provider';
export declare class PreferencesEditorWidgetTitle extends Title<PreferencesEditorWidget> {
    clickableText?: string;
    clickableTextTooltip?: string;
    clickableTextCallback?: (value: string) => void;
}
export declare class PreferencesEditorWidget extends EditorWidget {
    scope: PreferenceScope | undefined;
    get title(): PreferencesEditorWidgetTitle;
}
export declare class PreferenceEditorTabHeaderRenderer extends TabBar.Renderer {
    private readonly workspaceService;
    private readonly fileSystem;
    private readonly foldersPreferenceProvider;
    constructor(workspaceService: WorkspaceService, fileSystem: FileSystem, foldersPreferenceProvider: FoldersPreferencesProvider);
    renderTab(data: TabBar.IRenderData<PreferencesEditorWidget>): VirtualElement;
    renderLabel(data: TabBar.IRenderData<PreferencesEditorWidget>): VirtualElement;
    protected refreshContextMenu(activeMenuId: string, menuItemAction: (value: string) => void): Promise<Menu>;
    private canAccessSettings;
}
export declare class PreferenceEditorContainerTabBarRenderer extends DockPanel.Renderer {
    private readonly workspaceService;
    private readonly fileSystem;
    private readonly foldersPreferenceProvider;
    constructor(workspaceService: WorkspaceService, fileSystem: FileSystem, foldersPreferenceProvider: FoldersPreferencesProvider);
    createTabBar(): TabBar<Widget>;
}
//# sourceMappingURL=preference-editor-widget.d.ts.map