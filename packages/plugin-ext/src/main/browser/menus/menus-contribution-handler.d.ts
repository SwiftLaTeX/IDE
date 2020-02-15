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
import CodeUri from 'vscode-uri';
import { MenuPath, ILogger, CommandRegistry, Command, SelectionService, CommandHandler, Disposable } from '@theia/core';
import { EditorWidget } from '@theia/editor/lib/browser';
import { MenuModelRegistry } from '@theia/core/lib/common';
import { TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { QuickCommandService } from '@theia/core/lib/browser/quick-open/quick-command-service';
import { PluginContribution, Menu, ScmCommandArg } from '../../../common';
import { ScmService } from '@theia/scm/lib/browser/scm-service';
import { ResourceContextKey } from '@theia/core/lib/browser/resource-context-key';
import { ViewContextKeyService } from '../view/view-context-key-service';
import { WebviewWidget } from '../webview/webview';
import { ContextKeyService } from '@theia/core/lib/browser/context-key-service';
declare type CodeEditorWidget = EditorWidget | WebviewWidget;
export declare namespace CodeEditorWidget {
    function is(arg: any): arg is CodeEditorWidget;
    function getResourceUri(editor: CodeEditorWidget): CodeUri | undefined;
}
export declare class MenusContributionPointHandler {
    protected readonly menuRegistry: MenuModelRegistry;
    protected readonly commands: CommandRegistry;
    protected readonly logger: ILogger;
    protected readonly scmService: ScmService;
    protected readonly quickCommandService: QuickCommandService;
    protected readonly tabBarToolbar: TabBarToolbarRegistry;
    protected readonly selectionService: SelectionService;
    protected readonly resourceContextKey: ResourceContextKey;
    protected readonly viewContextKeys: ViewContextKeyService;
    protected readonly contextKeyService: ContextKeyService;
    handle(contributions: PluginContribution): Disposable;
    protected static parseMenuPaths(value: string): MenuPath[];
    protected registerTreeMenuAction(menuPath: MenuPath, menu: Menu): Disposable;
    protected toTreeArgs(...args: any[]): any[];
    protected registerTitleAction(location: string, action: Menu, handler: CommandHandler): Disposable;
    protected registerScmTitleAction(location: string, action: Menu): Disposable;
    protected registerScmMenuAction(menuPath: MenuPath, menu: Menu): Disposable;
    protected toScmArgs(...args: any[]): any[];
    protected toScmArg(arg: any): ScmCommandArg | undefined;
    protected registerGlobalMenuAction(menuPath: MenuPath, menu: Menu): Disposable;
    protected registerMenuAction(menuPath: MenuPath, menu: Menu, handler: (command: string) => CommandHandler): Disposable;
    protected createSyntheticCommandId(command: string, { prefix }: {
        prefix: string;
    }): string;
    protected onDidRegisterCommand(id: string, cb: (command: Command) => void): Disposable;
}
export {};
//# sourceMappingURL=menus-contribution-handler.d.ts.map