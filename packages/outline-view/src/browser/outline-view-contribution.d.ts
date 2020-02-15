/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { AbstractViewContribution } from '@theia/core/lib/browser/shell/view-contribution';
import { FrontendApplicationContribution, FrontendApplication } from '@theia/core/lib/browser/frontend-application';
import { Command, CommandRegistry } from '@theia/core/lib/common/command';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { Widget } from '@theia/core/lib/browser/widgets';
import { OutlineViewWidget } from './outline-view-widget';
export declare const OUTLINE_WIDGET_FACTORY_ID = "outline-view";
/**
 * Collection of `outline-view` commands.
 */
export declare namespace OutlineViewCommands {
    /**
     * Command which collapses all nodes
     * from the `outline-view` tree.
     */
    const COLLAPSE_ALL: Command;
}
export declare class OutlineViewContribution extends AbstractViewContribution<OutlineViewWidget> implements FrontendApplicationContribution, TabBarToolbarContribution {
    constructor();
    initializeLayout(app: FrontendApplication): Promise<void>;
    registerCommands(commands: CommandRegistry): void;
    registerToolbarItems(toolbar: TabBarToolbarRegistry): void;
    /**
     * Collapse all nodes in the outline view tree.
     */
    protected collapseAllItems(): Promise<void>;
    /**
     * Determine if the current widget is the `outline-view`.
     */
    protected withWidget<T>(widget: Widget | undefined, cb: (widget: OutlineViewWidget) => T): T | false;
}
//# sourceMappingURL=outline-view-contribution.d.ts.map