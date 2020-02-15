/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
/// <reference types="lodash" />
import { FileSystem, FileStat } from '@theia/filesystem/lib/common';
import { IconThemeService, IconTheme, IconThemeDefinition } from '@theia/core/lib/browser/icon-theme-service';
import { IconThemeContribution, DeployedPlugin, UiTheme } from '../../common/plugin-protocol';
import URI from '@theia/core/lib/common/uri';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { Emitter } from '@theia/core/lib/common/event';
import { RecursivePartial } from '@theia/core/lib/common/types';
import { LabelProviderContribution, DidChangeLabelEvent, LabelProvider, URIIconReference } from '@theia/core/lib/browser/label-provider';
import { FileStatNode, FileSystemWatcher } from '@theia/filesystem/lib/browser';
import { WorkspaceRootNode } from '@theia/navigator/lib/browser/navigator-tree';
export interface PluginIconDefinition {
    iconPath: string;
    fontColor: string;
    fontCharacter: string;
    fontSize: string;
    fontId: string;
}
export interface PluginFontDefinition {
    id: string;
    weight: string;
    style: string;
    size: string;
    src: {
        path: string;
        format: string;
    }[];
}
export interface PluginIconsAssociation {
    folder?: string;
    file?: string;
    folderExpanded?: string;
    rootFolder?: string;
    rootFolderExpanded?: string;
    folderNames?: {
        [folderName: string]: string;
    };
    folderNamesExpanded?: {
        [folderName: string]: string;
    };
    fileExtensions?: {
        [extension: string]: string;
    };
    fileNames?: {
        [fileName: string]: string;
    };
    languageIds?: {
        [languageId: string]: string;
    };
}
export interface PluginIconDefinitions {
    [key: string]: PluginIconDefinition;
}
export interface PluginIconThemeDocument extends PluginIconsAssociation {
    iconDefinitions: PluginIconDefinitions;
    fonts: PluginFontDefinition[];
    light?: PluginIconsAssociation;
    highContrast?: PluginIconsAssociation;
    hidesExplorerArrows?: boolean;
}
export declare const PluginIconThemeFactory: unique symbol;
export declare type PluginIconThemeFactory = (definition: PluginIconThemeDefinition) => PluginIconTheme;
export declare class PluginIconThemeDefinition implements IconThemeDefinition, IconThemeContribution {
    id: string;
    label: string;
    description?: string;
    uri: string;
    uiTheme?: UiTheme;
    pluginId: string;
    packagePath: string;
    hasFileIcons?: boolean;
    hasFolderIcons?: boolean;
    hidesExplorerArrows?: boolean;
}
export declare class PluginIconTheme extends PluginIconThemeDefinition implements IconTheme, Disposable {
    protected readonly fileSystem: FileSystem;
    protected readonly fsWatcher: FileSystemWatcher;
    protected readonly labelProvider: LabelProvider;
    protected readonly definition: PluginIconThemeDefinition;
    protected readonly onDidChangeEmitter: Emitter<DidChangeLabelEvent>;
    readonly onDidChange: import("@theia/core/src/common/event").Event<DidChangeLabelEvent>;
    protected readonly toDeactivate: DisposableCollection;
    protected readonly toUnload: DisposableCollection;
    protected readonly toDisposeStyleElement: DisposableCollection;
    protected readonly toDispose: DisposableCollection;
    protected packageUri: URI;
    protected locationUri: URI;
    protected styleSheetContent: string | undefined;
    protected readonly icons: Set<string>;
    protected init(): void;
    dispose(): void;
    protected fireDidChange(): void;
    activate(): Disposable;
    protected doActivate(): Promise<void>;
    protected updateStyleElement(): void;
    protected reload: (() => void) & import("lodash").Cancelable;
    /**
     * This should be aligned with
     * https://github.com/microsoft/vscode/blob/7cf4cca47aa025a590fc939af54932042302be63/src/vs/workbench/services/themes/browser/fileIconThemeData.ts#L201
     */
    protected load(): Promise<void>;
    protected toCSSUrl(iconPath: string | undefined): string | undefined;
    protected escapeCSS(value: string): string;
    protected readonly fileIcon = "theia-plugin-file-icon";
    protected readonly folderIcon = "theia-plugin-folder-icon";
    protected readonly folderExpandedIcon = "theia-plugin-folder-expanded-icon";
    protected readonly rootFolderIcon = "theia-plugin-root-folder-icon";
    protected readonly rootFolderExpandedIcon = "theia-plugin-root-folder-expanded-icon";
    protected folderNameIcon(folderName: string): string;
    protected expandedFolderNameIcon(folderName: string): string;
    protected fileNameIcon(fileName: string): string[];
    protected fileExtensionIcon(fileExtension: string): string[];
    protected languageIcon(languageId: string): string;
    protected collectSelectors(associations: RecursivePartial<PluginIconsAssociation>, accept: (definitionId: string, ...icons: string[]) => void): void;
    /**
     * This should be aligned with
     * https://github.com/microsoft/vscode/blob/7cf4cca47aa025a590fc939af54932042302be63/src/vs/editor/common/services/getIconClasses.ts#L5
     */
    getIcon(element: URI | URIIconReference | FileStat | FileStatNode | WorkspaceRootNode): string;
    protected getClassNames(element: URI | URIIconReference | FileStat | FileStatNode | WorkspaceRootNode): string[];
    protected getFolderClassNames(element: object): string[];
    protected getFileClassNames(element: object, uri?: string): string[];
}
export declare class PluginIconThemeService implements LabelProviderContribution {
    protected readonly iconThemeService: IconThemeService;
    protected readonly iconThemeFactory: PluginIconThemeFactory;
    protected readonly onDidChangeEmitter: Emitter<DidChangeLabelEvent>;
    readonly onDidChange: import("@theia/core/src/common/event").Event<DidChangeLabelEvent>;
    protected fireDidChange(): void;
    register(contribution: IconThemeContribution, plugin: DeployedPlugin): Disposable;
    canHandle(element: object): number;
    getIcon(element: URI | URIIconReference | FileStat | FileStatNode | WorkspaceRootNode): string | undefined;
}
//# sourceMappingURL=plugin-icon-theme-service.d.ts.map