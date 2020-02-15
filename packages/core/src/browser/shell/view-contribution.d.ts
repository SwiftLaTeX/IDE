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
import { interfaces } from 'inversify';
import { Widget } from '@phosphor/widgets';
import { MenuModelRegistry, Command, CommandContribution, MenuContribution, CommandRegistry } from '../../common';
import { KeybindingContribution, KeybindingRegistry } from '../keybinding';
import { WidgetManager } from '../widget-manager';
import { ApplicationShell } from './application-shell';
import { QuickViewService } from '../quick-view-service';
export interface OpenViewArguments extends ApplicationShell.WidgetOptions {
    toggle?: boolean;
    activate?: boolean;
    reveal?: boolean;
}
export interface ViewContributionOptions {
    widgetId: string;
    viewContainerId?: string;
    widgetName: string;
    defaultWidgetOptions: ApplicationShell.WidgetOptions;
    toggleCommandId?: string;
    toggleKeybinding?: string;
}
export declare function bindViewContribution<T extends AbstractViewContribution<any>>(bind: interfaces.Bind, identifier: interfaces.Newable<T>): interfaces.BindingWhenOnSyntax<T>;
/**
 * An abstract superclass for frontend contributions that add a view to the application shell.
 */
export declare abstract class AbstractViewContribution<T extends Widget> implements CommandContribution, MenuContribution, KeybindingContribution {
    protected readonly options: ViewContributionOptions;
    protected readonly widgetManager: WidgetManager;
    protected readonly shell: ApplicationShell;
    protected readonly quickView: QuickViewService;
    readonly toggleCommand?: Command;
    constructor(options: ViewContributionOptions);
    get viewId(): string;
    get viewLabel(): string;
    get defaultViewOptions(): ApplicationShell.WidgetOptions;
    get widget(): Promise<T>;
    tryGetWidget(): T | undefined;
    openView(args?: Partial<OpenViewArguments>): Promise<T>;
    registerCommands(commands: CommandRegistry): void;
    closeView(): Promise<T | undefined>;
    toggleView(): Promise<T>;
    registerMenus(menus: MenuModelRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
}
//# sourceMappingURL=view-contribution.d.ts.map