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
import URI from '../common/uri';
import { MaybeArray } from '../common/types';
import { Widget, BaseWidget } from './widgets';
import { WidgetOpenHandler, WidgetOpenerOptions } from './widget-open-handler';
/**
 * `Navigatable` provides an access to an URI of an underlying instance of `Resource`.
 */
export interface Navigatable {
    /**
     * Return an underlying resource URI.
     */
    getResourceUri(): URI | undefined;
    /**
     * Creates a new URI to which this navigatable should moved based on the given target resource URI.
     */
    createMoveToUri(resourceUri: URI): URI | undefined;
}
export declare namespace Navigatable {
    function is(arg: Object | undefined): arg is Navigatable;
}
export declare type NavigatableWidget = BaseWidget & Navigatable;
export declare namespace NavigatableWidget {
    function is(arg: Object | undefined): arg is NavigatableWidget;
    function getAffected<T extends Widget>(widgets: IterableIterator<T> | ArrayLike<T>, context: MaybeArray<URI>): IterableIterator<[URI, T & NavigatableWidget]>;
    function get<T extends Widget>(widgets: IterableIterator<T> | ArrayLike<T>, filter?: (resourceUri: URI) => boolean): IterableIterator<[URI, T & NavigatableWidget]>;
}
export interface NavigatableWidgetOptions {
    kind: 'navigatable';
    uri: string;
}
export declare namespace NavigatableWidgetOptions {
    function is(arg: Object | undefined): arg is NavigatableWidgetOptions;
}
export declare abstract class NavigatableWidgetOpenHandler<W extends NavigatableWidget> extends WidgetOpenHandler<W> {
    protected createWidgetOptions(uri: URI, options?: WidgetOpenerOptions): NavigatableWidgetOptions;
    protected serializeUri(uri: URI): string;
}
//# sourceMappingURL=navigatable.d.ts.map