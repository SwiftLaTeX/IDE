/********************************************************************************
 * Copyright (C) 2018-2019 TypeFox and others.
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
import { IIterator } from '@phosphor/algorithm';
import { Widget, Message, SplitPanel, BaseWidget, SplitLayout, LayoutItem } from './widgets';
import { Event, Emitter } from '../common/event';
import { Deferred } from '../common/promise-util';
import { Disposable, DisposableCollection } from '../common/disposable';
import { CommandRegistry } from '../common/command';
import { MenuModelRegistry, MenuPath } from '../common/menu';
import { ApplicationShell, StatefulWidget, SplitPositionHandler } from './shell';
import { FrontendApplicationStateService } from './frontend-application-state';
import { ContextMenuRenderer, Anchor } from './context-menu-renderer';
import { WidgetManager } from './widget-manager';
import { TabBarToolbarRegistry, TabBarToolbarFactory, TabBarToolbar } from './shell/tab-bar-toolbar';
import { ProgressLocationService } from './progress-location-service';
export interface ViewContainerTitleOptions {
    label: string;
    caption?: string;
    iconClass?: string;
    closeable?: boolean;
}
export declare class ViewContainerIdentifier {
    id: string;
    progressLocationId?: string;
}
/**
 * A view container holds an arbitrary number of widgets inside a split panel.
 * Each widget is wrapped in a _part_ that displays the widget title and toolbar
 * and allows to collapse / expand the widget content.
 */
export declare class ViewContainer extends BaseWidget implements StatefulWidget, ApplicationShell.TrackableWidgetProvider {
    protected panel: SplitPanel;
    protected attached: Deferred<void>;
    protected currentPart: ViewContainerPart | undefined;
    protected readonly applicationStateService: FrontendApplicationStateService;
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly menuRegistry: MenuModelRegistry;
    protected readonly widgetManager: WidgetManager;
    protected readonly splitPositionHandler: SplitPositionHandler;
    readonly options: ViewContainerIdentifier;
    protected readonly toolbarRegistry: TabBarToolbarRegistry;
    protected readonly toolbarFactory: TabBarToolbarFactory;
    protected readonly onDidChangeTrackableWidgetsEmitter: Emitter<Widget[]>;
    readonly onDidChangeTrackableWidgets: Event<Widget[]>;
    protected readonly progressLocationService: ProgressLocationService;
    protected init(): void;
    protected readonly toDisposeOnCurrentPart: DisposableCollection;
    protected updateCurrentPart(part?: ViewContainerPart): void;
    protected titleOptions: ViewContainerTitleOptions | undefined;
    setTitleOptions(titleOptions: ViewContainerTitleOptions | undefined): void;
    protected readonly toDisposeOnUpdateTitle: DisposableCollection;
    protected updateTitle(): void;
    protected findPartForAnchor(anchor: Anchor): ViewContainerPart | undefined;
    protected readonly toRemoveWidgets: Map<string, DisposableCollection>;
    addWidget(widget: Widget, options?: ViewContainer.Factory.WidgetOptions): Disposable;
    removeWidget(widget: Widget): boolean;
    getParts(): ViewContainerPart[];
    getPartFor(widget: Widget): ViewContainerPart | undefined;
    get containerLayout(): ViewContainerLayout;
    protected get orientation(): SplitLayout.Orientation;
    protected get enableAnimation(): boolean;
    protected lastVisibleState: ViewContainer.State | undefined;
    storeState(): ViewContainer.State;
    /**
     * The view container restores the visibility, order and relative sizes of contained
     * widgets, but _not_ the widgets themselves. In case the set of widgets is not fixed,
     * it should be restored in the specific subclass or in the widget holding the view container.
     */
    restoreState(state: ViewContainer.State): void;
    /**
     * Register a command to toggle the visibility of the new part.
     */
    protected registerPart(toRegister: ViewContainerPart): void;
    /**
     * Register a menu action to toggle the visibility of the new part.
     * The menu action is unregistered first to enable refreshing the order of menu actions.
     */
    protected refreshMenu(part: ViewContainerPart): void;
    protected unregisterPart(part: ViewContainerPart): void;
    protected get contextMenuPath(): MenuPath;
    protected toggleVisibilityCommandId(part: ViewContainerPart): string;
    protected get globalHideCommandId(): string;
    protected moveBefore(toMovedId: string, moveBeforeThisId: string): void;
    getTrackableWidgets(): Widget[];
    protected fireDidChangeTrackableWidgets(): void;
    activateWidget(id: string): Widget | undefined;
    revealWidget(id: string): Widget | undefined;
    protected revealPart(id: string): ViewContainerPart | undefined;
    protected onActivateRequest(msg: Message): void;
    protected onAfterAttach(msg: Message): void;
    protected onBeforeHide(msg: Message): void;
    protected onAfterShow(msg: Message): void;
    protected draggingPart: ViewContainerPart | undefined;
    protected registerDND(part: ViewContainerPart): Disposable;
}
export declare namespace ViewContainer {
    const Factory: unique symbol;
    interface Factory {
        (options: ViewContainerIdentifier): ViewContainer;
    }
    namespace Factory {
        interface WidgetOptions {
            readonly order?: number;
            readonly weight?: number;
            readonly initiallyCollapsed?: boolean;
            readonly canHide?: boolean;
            readonly initiallyHidden?: boolean;
        }
        interface WidgetDescriptor {
            readonly widget: Widget | interfaces.ServiceIdentifier<Widget>;
            readonly options?: WidgetOptions;
        }
    }
    interface State {
        title?: ViewContainerTitleOptions;
        parts: ViewContainerPart.State[];
    }
    function getOrientation(node: HTMLElement): 'horizontal' | 'vertical';
}
/**
 * Wrapper around a widget held by a view container. Adds a header to display the
 * title, toolbar, and collapse / expand handle.
 */
export declare class ViewContainerPart extends BaseWidget {
    readonly wrapped: Widget;
    readonly partId: string;
    protected readonly toolbarRegistry: TabBarToolbarRegistry;
    protected readonly toolbarFactory: TabBarToolbarFactory;
    readonly options: ViewContainer.Factory.WidgetOptions;
    protected readonly header: HTMLElement;
    protected readonly body: HTMLElement;
    protected readonly collapsedEmitter: Emitter<boolean>;
    protected readonly contextMenuEmitter: Emitter<MouseEvent>;
    /**
     * @deprecated since 0.11.0, use `onDidChangeVisibility` instead
     */
    readonly onVisibilityChanged: Event<boolean>;
    protected readonly onTitleChangedEmitter: Emitter<void>;
    readonly onTitleChanged: Event<void>;
    protected readonly onDidFocusEmitter: Emitter<this>;
    readonly onDidFocus: Event<this>;
    protected _collapsed: boolean;
    uncollapsedSize: number | undefined;
    animatedSize: number | undefined;
    protected readonly toNoDisposeWrapped: Disposable;
    constructor(wrapped: Widget, partId: string, viewContainerId: string, toolbarRegistry: TabBarToolbarRegistry, toolbarFactory: TabBarToolbarFactory, options?: ViewContainer.Factory.WidgetOptions);
    get collapsed(): boolean;
    set collapsed(collapsed: boolean);
    setHidden(hidden: boolean): void;
    get canHide(): boolean;
    get onCollapsed(): Event<boolean>;
    get onContextMenu(): Event<MouseEvent>;
    get minSize(): number;
    protected readonly toShowHeader: DisposableCollection;
    showTitle(): void;
    hideTitle(): void;
    get titleHidden(): boolean;
    protected getScrollContainer(): HTMLElement;
    protected registerContextMenu(): Disposable;
    protected createContent(): {
        header: HTMLElement;
        body: HTMLElement;
        disposable: Disposable;
    };
    protected createHeader(): {
        header: HTMLElement;
        disposable: Disposable;
    };
    protected toolbar: TabBarToolbar | undefined;
    protected readonly toHideToolbar: DisposableCollection;
    hideToolbar(): void;
    showToolbar(): void;
    get toolbarHidden(): boolean;
    protected onResize(msg: Widget.ResizeMessage): void;
    protected onUpdateRequest(msg: Message): void;
    protected onBeforeAttach(msg: Message): void;
    protected onAfterAttach(msg: Message): void;
    protected onBeforeDetach(msg: Message): void;
    protected onBeforeShow(msg: Message): void;
    protected onAfterShow(msg: Message): void;
    protected onBeforeHide(msg: Message): void;
    protected onAfterHide(msg: Message): void;
    protected onChildRemoved(msg: Widget.ChildMessage): void;
    protected onActivateRequest(msg: Message): void;
}
export declare namespace ViewContainerPart {
    /**
     * Make sure to adjust the `line-height` of the `.theia-view-container .part > .header` CSS class when modifying this, and vice versa.
     */
    const HEADER_HEIGHT = 22;
    interface State {
        widget?: Widget;
        partId: string;
        collapsed: boolean;
        hidden: boolean;
        relativeSize?: number;
    }
    function closestPart(element: Element | EventTarget | null, selector?: string): Element | undefined;
}
export declare class ViewContainerLayout extends SplitLayout {
    protected options: ViewContainerLayout.Options;
    protected readonly splitPositionHandler: SplitPositionHandler;
    constructor(options: ViewContainerLayout.Options, splitPositionHandler: SplitPositionHandler);
    protected get items(): ReadonlyArray<LayoutItem & ViewContainerLayout.Item>;
    iter(): IIterator<ViewContainerPart>;
    get widgets(): ViewContainerPart[];
    moveWidget(fromIndex: number, toIndex: number, widget: Widget): void;
    getPartSize(part: ViewContainerPart): number | undefined;
    /**
     * Set the sizes of the view container parts according to the given weights
     * by moving the split handles. This is similar to `setRelativeSizes` defined
     * in `SplitLayout`, but here we properly consider the collapsed / expanded state.
     */
    setPartSizes(weights: (number | undefined)[]): void;
    /**
     * Determine the size of the split panel area that is available for widget content,
     * i.e. excluding part headers and split handles.
     */
    getAvailableSize(): number;
    /**
     * Update a view container part that has been collapsed or expanded. The transition
     * to the new state is animated.
     */
    updateCollapsed(part: ViewContainerPart, enableAnimation: boolean): void;
    protected onFitRequest(msg: Message): void;
    /**
     * Sinusoidal tween function for smooth animation.
     */
    protected tween(t: number): number;
    setHandlePosition(index: number, position: number): Promise<void>;
}
export declare namespace ViewContainerLayout {
    interface Options extends SplitLayout.IOptions {
        headerSize: number;
        animationDuration: number;
    }
    interface Item {
        readonly widget: ViewContainerPart;
    }
}
//# sourceMappingURL=view-container.d.ts.map