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
import { Disposable } from './disposable';
import { MaybePromise } from './types';
/**
 * Represents a typed event.
 */
export interface Event<T> {
    /**
     *
     * @param listener The listener function will be call when the event happens.
     * @param thisArgs The 'this' which will be used when calling the event listener.
     * @param disposables An array to which a {{IDisposable}} will be added.
     * @return a disposable to remove the listener again.
     */
    (listener: (e: T) => any, thisArgs?: any, disposables?: Disposable[]): Disposable;
    /**
     * An emitter will print a warning if more listeners are added for this event.
     * The event.maxListeners allows the limit to be modified for this specific event.
     * The value can be set to 0 to indicate an unlimited number of listener.
     */
    maxListeners: number;
}
export declare namespace Event {
    const None: Event<any>;
    /**
     * Given an event and a `map` function, returns another event which maps each element
     * through the mapping function.
     */
    function map<I, O>(event: Event<I>, mapFunc: (i: I) => O): Event<O>;
}
export interface EmitterOptions {
    onFirstListenerAdd?: Function;
    onLastListenerRemove?: Function;
}
export declare class Emitter<T = any> {
    private _options?;
    private static _noop;
    private _event;
    private _callbacks;
    private _disposed;
    constructor(_options?: EmitterOptions | undefined);
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event(): Event<T>;
    protected checkMaxListeners(maxListeners: number): void;
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(event: T): any;
    /**
     * Process each listener one by one.
     * Return `false` to stop iterating over the listeners, `true` to continue.
     */
    sequence(processor: (listener: (e: T) => any) => MaybePromise<boolean>): Promise<void>;
    dispose(): void;
}
export interface WaitUntilEvent {
    /**
     * Allows to pause the event loop until the provided thenable resolved.
     *
     * *Note:* It can only be called during event dispatch and not in an asynchronous manner
     *
     * @param thenable A thenable that delays execution.
     */
    waitUntil(thenable: Promise<any>): void;
}
export declare namespace WaitUntilEvent {
    function fire<T extends WaitUntilEvent>(emitter: Emitter<T>, event: Pick<T, Exclude<keyof T, 'waitUntil'>>, timeout?: number | undefined): Promise<void>;
}
//# sourceMappingURL=event.d.ts.map