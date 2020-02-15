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
import { TabBar, Widget, DockPanel, Title } from '@phosphor/widgets';
import { Signal } from '@phosphor/signaling';
import { DisposableCollection } from '../../common/disposable';
export declare const MAIN_AREA_ID = "theia-main-content-panel";
export declare const BOTTOM_AREA_ID = "theia-bottom-content-panel";
/**
 * This specialization of DockPanel adds various events that are used for implementing the
 * side panels of the application shell.
 */
export declare class TheiaDockPanel extends DockPanel {
    /**
     * Emitted when a widget is added to the panel.
     */
    readonly widgetAdded: Signal<this, Widget>;
    /**
     * Emitted when a widget is activated by calling `activateWidget`.
     */
    readonly widgetActivated: Signal<this, Widget>;
    /**
     * Emitted when a widget is removed from the panel.
     */
    readonly widgetRemoved: Signal<this, Widget>;
    constructor(options?: DockPanel.IOptions);
    protected _currentTitle: Title<Widget> | undefined;
    get currentTitle(): Title<Widget> | undefined;
    get currentTabBar(): TabBar<Widget> | undefined;
    findTabBar(title: Title<Widget>): TabBar<Widget> | undefined;
    protected readonly toDisposeOnMarkAsCurrent: DisposableCollection;
    markAsCurrent(title: Title<Widget> | undefined): void;
    addWidget(widget: Widget, options?: DockPanel.IAddOptions): void;
    activateWidget(widget: Widget): void;
    protected onChildRemoved(msg: Widget.ChildMessage): void;
    nextTabBarWidget(widget: Widget): Widget | undefined;
    nextTabBarInPanel(tabBar: TabBar<Widget>): TabBar<Widget> | undefined;
    previousTabBarWidget(widget: Widget): Widget | undefined;
    previousTabBarInPanel(tabBar: TabBar<Widget>): TabBar<Widget> | undefined;
    protected readonly toDisposeOnToggleMaximized: DisposableCollection;
    toggleMaximized(): void;
    protected maximizedElement: HTMLElement | undefined;
    protected getMaximizedElement(): HTMLElement;
}
//# sourceMappingURL=theia-dock-panel.d.ts.map