/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import * as React from 'react';
import URI from '@theia/core/lib/common/uri';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { CommandRegistry } from '@theia/core/lib/common';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { FileStat, FileSystem } from '@theia/filesystem/lib/common/filesystem';
import { LabelProvider } from '@theia/core/lib/browser';
import { ApplicationInfo, ApplicationServer } from '@theia/core/lib/common/application-protocol';
/**
 * Default implementation of the `GettingStartedWidget`.
 * The widget is displayed when there are currently no workspaces present.
 * Some of the features displayed include:
 * - `open` commands.
 * - `recently used workspaces`.
 * - `settings` commands.
 * - `help` commands.
 * - helpful links.
 */
export declare class GettingStartedWidget extends ReactWidget {
    /**
     * The widget `id`.
     */
    static readonly ID = "getting.started.widget";
    /**
     * The widget `label` which is used for display purposes.
     */
    static readonly LABEL = "Getting Started";
    /**
     * The `ApplicationInfo` for the application if available.
     * Used in order to obtain the version number of the application.
     */
    protected applicationInfo: ApplicationInfo | undefined;
    /**
     * The application name which is used for display purposes.
     */
    protected applicationName: string;
    protected stat: FileStat | undefined;
    protected home: string | undefined;
    /**
     * The recently used workspaces limit.
     * Used in order to limit the number of recently used workspaces to display.
     */
    protected recentLimit: number;
    /**
     * The list of recently used workspaces.
     */
    protected recentWorkspaces: string[];
    /**
     * Collection of useful links to display for end users.
     */
    protected readonly documentationUrl = "https://www.theia-ide.org/doc/";
    protected readonly extensionUrl = "https://www.theia-ide.org/doc/Authoring_Extensions.html";
    protected readonly pluginUrl = "https://www.theia-ide.org/doc/Authoring_Plugins.html";
    protected readonly appServer: ApplicationServer;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly fileSystem: FileSystem;
    protected readonly labelProvider: LabelProvider;
    protected readonly workspaceService: WorkspaceService;
    protected init(): Promise<void>;
    /**
     * Render the content of the widget.
     */
    protected render(): React.ReactNode;
    /**
     * Render the widget header.
     * Renders the title `{applicationName} Getting Started`.
     */
    protected renderHeader(): React.ReactNode;
    /**
     * Render the `open` section.
     * Displays a collection of `open` commands.
     */
    protected renderOpen(): React.ReactNode;
    /**
     * Render the recently used workspaces section.
     */
    protected renderRecentWorkspaces(): React.ReactNode;
    /**
     * Render the settings section.
     * Generally used to display useful links.
     */
    protected renderSettings(): React.ReactNode;
    /**
     * Render the help section.
     */
    protected renderHelp(): React.ReactNode;
    /**
     * Render the version section.
     */
    protected renderVersion(): React.ReactNode;
    /**
     * Build the list of workspace paths.
     * @param workspaces {string[]} the list of workspaces.
     * @returns {string[]} the list of workspace paths.
     */
    protected buildPaths(workspaces: string[]): string[];
    /**
     * Trigger the open command.
     */
    protected doOpen: () => Promise<unknown>;
    /**
     * Trigger the open file command.
     */
    protected doOpenFile: () => Promise<unknown>;
    /**
     * Trigger the open folder command.
     */
    protected doOpenFolder: () => Promise<unknown>;
    /**
     * Trigger the open workspace command.
     */
    protected doOpenWorkspace: () => Promise<unknown>;
    /**
     * Trigger the open recent workspace command.
     */
    protected doOpenRecentWorkspace: () => Promise<unknown>;
    /**
     * Trigger the open preferences command.
     * Used to open the preferences widget.
     */
    protected doOpenPreferences: () => Promise<unknown>;
    /**
     * Trigger the open keyboard shortcuts command.
     * Used to open the keyboard shortcuts widget.
     */
    protected doOpenKeyboardShortcuts: () => Promise<unknown>;
    /**
     * Open a workspace given its uri.
     * @param uri {URI} the workspace uri.
     */
    protected open: (uri: URI) => void;
}
//# sourceMappingURL=getting-started-widget.d.ts.map