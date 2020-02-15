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
import PerfectScrollbar from 'perfect-scrollbar';
import { TabBar, Title, Widget } from '@phosphor/widgets';
import { VirtualElement, ElementInlineStyle } from '@phosphor/virtualdom';
import { DisposableCollection, MenuPath } from '../../common';
import { ContextMenuRenderer } from '../context-menu-renderer';
import { Signal } from '@phosphor/signaling';
import { Message } from '@phosphor/messaging';
import { TabBarToolbarRegistry, TabBarToolbar } from './tab-bar-toolbar';
import { WidgetDecoration } from '../widget-decoration';
import { TabBarDecoratorService } from './tab-bar-decorator';
import { IconThemeService } from '../icon-theme-service';
/** Menu path for tab bars used throughout the application shell. */
export declare const SHELL_TABBAR_CONTEXT_MENU: MenuPath;
export declare const TabBarRendererFactory: unique symbol;
/**
 * Size information of DOM elements used for rendering tabs in side bars.
 */
export interface SizeData {
    width: number;
    height: number;
}
/**
 * Extension of the rendering data used for tabs in side bars of the application shell.
 */
export interface SideBarRenderData extends TabBar.IRenderData<Widget> {
    labelSize?: SizeData;
    iconSize?: SizeData;
    paddingTop?: number;
    paddingBottom?: number;
}
/**
 * A tab bar renderer that offers a context menu. In addition, this renderer is able to
 * set an explicit position and size on the icon and label of each tab in a side bar.
 * This is necessary because the elements of side bar tabs are rotated using the CSS
 * `transform` property, disrupting the browser's ability to arrange those elements
 * automatically.
 */
export declare class TabBarRenderer extends TabBar.Renderer {
    protected readonly contextMenuRenderer?: ContextMenuRenderer | undefined;
    protected readonly decoratorService?: TabBarDecoratorService | undefined;
    protected readonly iconThemeService?: IconThemeService | undefined;
    /**
     * The menu path used to render the context menu.
     */
    contextMenuPath?: MenuPath;
    protected readonly toDispose: DisposableCollection;
    constructor(contextMenuRenderer?: ContextMenuRenderer | undefined, decoratorService?: TabBarDecoratorService | undefined, iconThemeService?: IconThemeService | undefined);
    protected _tabBar?: TabBar<Widget>;
    protected readonly toDisposeOnTabBar: DisposableCollection;
    /**
     * A reference to the tab bar is required in order to activate it when a context menu
     * is requested.
     */
    set tabBar(tabBar: TabBar<Widget> | undefined);
    get tabBar(): TabBar<Widget> | undefined;
    /**
     * Render tabs with the default DOM structure, but additionally register a context menu listener.
     * @param {SideBarRenderData} data Data used to render the tab.
     * @param {boolean} isInSidePanel An optional check which determines if the tab is in the side-panel.
     * @returns {VirtualElement} The virtual element of the rendered tab.
     */
    renderTab(data: SideBarRenderData, isInSidePanel?: boolean): VirtualElement;
    createTabId(title: Title<Widget>): string;
    /**
     * If size information is available for the label and icon, set an explicit height on the tab.
     * The height value also considers padding, which should be derived from CSS settings.
     */
    createTabStyle(data: SideBarRenderData): ElementInlineStyle;
    /**
     * If size information is available for the label, set it as inline style.
     * Tab padding and icon size are also considered in the `top` position.
     * @param {SideBarRenderData} data Data used to render the tab.
     * @param {boolean} isInSidePanel An optional check which determines if the tab is in the side-panel.
     * @returns {VirtualElement} The virtual element of the rendered label.
     */
    renderLabel(data: SideBarRenderData, isInSidePanel?: boolean): VirtualElement;
    protected readonly decorations: Map<Title<Widget>, WidgetDecoration.Data[]>;
    protected resetDecorations(title?: Title<Widget>): void;
    /**
     * Get all available decorations of a given tab.
     * @param {string} title The widget title.
     */
    protected getDecorations(title: Title<Widget>): WidgetDecoration.Data[];
    /**
     * Get the decoration data given the tab URI and the decoration data type.
     * @param {string} title The title.
     * @param {K} key The type of the decoration data.
     */
    protected getDecorationData<K extends keyof WidgetDecoration.Data>(title: Title<Widget>, key: K): WidgetDecoration.Data[K][];
    /**
     * Get the class of an icon.
     * @param {string | string[]} iconName The name of the icon.
     * @param {string[]} additionalClasses Additional classes of the icon.
     */
    private getIconClass;
    /**
     * Find duplicate labels from the currently opened tabs in the tab bar.
     * Return the appropriate partial paths that can distinguish the identical labels.
     *
     * E.g., a/p/index.ts => a/..., b/p/index.ts => b/...
     *
     * To prevent excessively long path displayed, show at maximum three levels from the end by default.
     * @param {Title<Widget>[]} titles Array of titles in the current tab bar.
     * @returns {Map<string, string>} A map from each tab's original path to its displayed partial path.
     */
    findDuplicateLabels(titles: Title<Widget>[]): Map<string, string>;
    /**
     * If size information is available for the icon, set it as inline style. Tab padding
     * is also considered in the `top` position.
     * @param {SideBarRenderData} data Data used to render the tab icon.
     * @param {boolean} isInSidePanel An optional check which determines if the tab is in the side-panel.
     */
    renderIcon(data: SideBarRenderData, inSidePanel?: boolean): VirtualElement;
    protected handleContextMenuEvent: (event: MouseEvent) => void;
    protected handleDblClickEvent: (event: MouseEvent) => void;
}
/**
 * A specialized tab bar for the main and bottom areas.
 */
export declare class ScrollableTabBar extends TabBar<Widget> {
    protected scrollBar?: PerfectScrollbar;
    private scrollBarFactory;
    private pendingReveal?;
    constructor(options?: TabBar.IOptions<Widget> & PerfectScrollbar.Options);
    protected onAfterAttach(msg: Message): void;
    protected onBeforeDetach(msg: Message): void;
    protected onUpdateRequest(msg: Message): void;
    protected onResize(msg: Widget.ResizeMessage): void;
    /**
     * Reveal the tab with the given index by moving the scroll bar if necessary.
     */
    revealTab(index: number): Promise<void>;
    protected get scrollbarHost(): HTMLElement;
}
/**
 * Specialized scrollable tab-bar which comes with toolbar support.
 * Instead of the following DOM structure.
 *
 * +-------------------------+
 * |[TAB_0][TAB_1][TAB_2][TAB|
 * +-------------Scrollable--+
 *
 * There is a dedicated HTML element for toolbar which does **not** contained in the scrollable element.
 *
 * +-------------------------+-----------------+
 * |[TAB_0][TAB_1][TAB_2][TAB|         Toolbar |
 * +-------------Scrollable--+-None-Scrollable-+
 *
 */
export declare class ToolbarAwareTabBar extends ScrollableTabBar {
    protected readonly tabBarToolbarRegistry: TabBarToolbarRegistry;
    protected readonly tabBarToolbarFactory: () => TabBarToolbar;
    protected readonly options?: (TabBar.IOptions<Widget> & PerfectScrollbar.Options) | undefined;
    protected contentContainer: HTMLElement | undefined;
    protected toolbar: TabBarToolbar | undefined;
    constructor(tabBarToolbarRegistry: TabBarToolbarRegistry, tabBarToolbarFactory: () => TabBarToolbar, options?: (TabBar.IOptions<Widget> & PerfectScrollbar.Options) | undefined);
    /**
     * Overrides the `contentNode` property getter in PhosphorJS' TabBar.
     */
    get contentNode(): HTMLUListElement;
    /**
     * Overrides the scrollable host from the parent class.
     */
    protected get scrollbarHost(): HTMLElement;
    protected get tabBarContainer(): HTMLElement;
    protected onAfterAttach(msg: Message): void;
    protected onBeforeDetach(msg: Message): void;
    protected onUpdateRequest(msg: Message): void;
    protected updateToolbar(): void;
    handleEvent(event: Event): void;
    /**
     * Restructures the DOM defined in PhosphorJS.
     *
     * By default the tabs (`li`) are contained in the `this.contentNode` (`ul`) which is wrapped in a `div` (`this.node`).
     * Instead of this structure, we add a container for the `this.contentNode` and for the toolbar.
     * The scrollbar will only work for the `ul` part but it does not affect the toolbar, so it can be on the right hand-side.
     */
    protected rewireDOM(): void;
}
export declare namespace ToolbarAwareTabBar {
    namespace Styles {
        const TAB_BAR_CONTENT = "p-TabBar-content";
        const TAB_BAR_CONTENT_CONTAINER = "p-TabBar-content-container";
    }
}
/**
 * A specialized tab bar for side areas.
 */
export declare class SideTabBar extends ScrollableTabBar {
    private static readonly DRAG_THRESHOLD;
    /**
     * Emitted when a tab is added to the tab bar.
     */
    readonly tabAdded: Signal<this, {
        title: Title<Widget>;
    }>;
    /**
     * Side panels can be collapsed by clicking on the currently selected tab. This signal is
     * emitted when the mouse is released on the selected tab without initiating a drag.
     */
    readonly collapseRequested: Signal<this, Title<Widget>>;
    private mouseData?;
    constructor(options?: TabBar.IOptions<Widget> & PerfectScrollbar.Options);
    /**
     * Tab bars of the left and right side panel are arranged vertically by rotating their labels.
     * Rotation is realized with the CSS `transform` property, which disrupts the browser's ability
     * to arrange the involved elements automatically. Therefore the elements are arranged explicitly
     * by the TabBarRenderer using inline `height` and `top` styles. However, the size of labels
     * must still be computed by the browser, so the rendering is performed in two steps: first the
     * tab bar is rendered horizontally inside a _hidden content node_, then it is rendered again
     * vertically inside the proper content node. After the first step, size information is gathered
     * from all labels so it can be applied during the second step.
     */
    get hiddenContentNode(): HTMLUListElement;
    insertTab(index: number, value: Title<Widget> | Title.IOptions<Widget>): Title<Widget>;
    protected onAfterAttach(msg: Message): void;
    protected onUpdateRequest(msg: Message): void;
    /**
     * Render the tab bar in the _hidden content node_ (see `hiddenContentNode` for explanation),
     * then gather size information for labels and render it again in the proper content node.
     */
    protected renderTabBar(): void;
    /**
     * Render the tab bar using the given DOM element as host. The optional `renderData` is forwarded
     * to the TabBarRenderer.
     */
    protected renderTabs(host: HTMLElement, renderData?: Partial<SideBarRenderData>[]): void;
    /**
     * The following event processing is used to generate `collapseRequested` signals
     * when the mouse goes up on the currently selected tab without too much movement
     * between `mousedown` and `mouseup`. The movement threshold is the same that
     * is used by the superclass to detect a drag event. The `allowDeselect` option
     * of the TabBar constructor cannot be used here because it is triggered when the
     * mouse goes down, and thus collides with dragging.
     */
    handleEvent(event: Event): void;
    private onMouseDown;
    private onMouseUp;
    private onMouseMove;
}
//# sourceMappingURL=tab-bars.d.ts.map