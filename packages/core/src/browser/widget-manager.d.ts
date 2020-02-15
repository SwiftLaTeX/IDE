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
import { Widget } from '@phosphor/widgets';
import { ILogger, Emitter, Event, ContributionProvider, MaybePromise } from '../common';
export declare const WidgetFactory: unique symbol;
/**
 * `OpenHandler` should be implemented to provide a new opener.
 */
export interface WidgetFactory {
    /**
     * The factory id.
     */
    readonly id: string;
    /**
     * Creates a widget and attaches it to the application shell.
     * @param options serializable JSON data.
     */
    createWidget(options?: any): MaybePromise<Widget>;
}
/**
 * Representation of the `WidgetConstructionOptions`.
 * Defines a serializable description to create widgets.
 */
export interface WidgetConstructionOptions {
    /**
     * The id of the widget factory to use.
     */
    factoryId: string;
    /**
     * The widget factory specific information.
     */
    options?: any;
}
/**
 * Representation of a `didCreateWidgetEvent`.
 */
export interface DidCreateWidgetEvent {
    /**
     * The widget which was created.
     */
    readonly widget: Widget;
    /**
     * The widget factory id.
     */
    readonly factoryId: string;
}
/**
 * Creates and manages widgets.
 */
export declare class WidgetManager {
    protected _cachedFactories: Map<string, WidgetFactory>;
    protected readonly widgets: Map<string, Widget>;
    protected readonly widgetPromises: Map<string, MaybePromise<Widget>>;
    protected readonly pendingWidgetPromises: Map<string, MaybePromise<Widget>>;
    protected readonly factoryProvider: ContributionProvider<WidgetFactory>;
    protected readonly logger: ILogger;
    protected readonly onDidCreateWidgetEmitter: Emitter<DidCreateWidgetEvent>;
    readonly onDidCreateWidget: Event<DidCreateWidgetEvent>;
    /**
     * Get the list of widgets created for the given factory id.
     * @param factoryId the widget factory id.
     *
     * @returns the list of widgets created for the given factory id.
     */
    getWidgets(factoryId: string): Widget[];
    /**
     * Try and get the widget.
     *
     * @returns the widget if available, else `undefined`.
     */
    tryGetWidget<T extends Widget>(factoryId: string, options?: any): T | undefined;
    /**
     * Get the widget for the given description.
     *
     * @returns a promise resolving to the widget if available, else `undefined.
     */
    getWidget<T extends Widget>(factoryId: string, options?: any): Promise<T | undefined>;
    protected doGetWidget<T extends Widget>(key: string): MaybePromise<T> | undefined;
    /**
     * Creates or returns the widget for the given description.
     */
    getOrCreateWidget<T extends Widget>(factoryId: string, options?: any): Promise<T>;
    /**
     * Get the widget construction options.
     * @param widget the widget.
     *
     * @returns the widget construction options if the widget was created through the manager, else `undefined`.
     */
    getDescription(widget: Widget): WidgetConstructionOptions | undefined;
    /**
     * Convert the widget construction options to string.
     * @param options the widget construction options.
     *
     * @returns the widget construction options represented as a string.
     */
    protected toKey(options: WidgetConstructionOptions): string;
    /**
     * Convert the key into the widget construction options object.
     * @param key the key.
     *
     * @returns the widget construction options object.
     */
    protected fromKey(key: string): WidgetConstructionOptions;
    protected get factories(): Map<string, WidgetFactory>;
}
//# sourceMappingURL=widget-manager.d.ts.map