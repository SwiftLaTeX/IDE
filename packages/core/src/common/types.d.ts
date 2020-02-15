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
export declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare type Deferred<T> = {
    [P in keyof T]: Promise<T[P]>;
};
export declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
export declare type MaybeArray<T> = T | T[];
export declare type MaybePromise<T> = T | Promise<T> | PromiseLike<T>;
export interface Prioritizeable<T> {
    readonly priority: number;
    readonly value: T;
}
export declare namespace Prioritizeable {
    type GetPriority<T> = (value: T) => MaybePromise<number>;
    type GetPrioritySync<T> = (value: T) => number;
    function toPrioritizeable<T>(rawValue: MaybePromise<T>, getPriority: GetPriority<T>): Promise<Prioritizeable<T>>;
    function toPrioritizeable<T>(rawValue: MaybePromise<T>[], getPriority: GetPriority<T>): Promise<Prioritizeable<T>[]>;
    function toPrioritizeableSync<T>(rawValue: T[], getPriority: GetPrioritySync<T>): Prioritizeable<T>[];
    function prioritizeAllSync<T>(values: T[], getPriority: GetPrioritySync<T>): Prioritizeable<T>[];
    function prioritizeAll<T>(values: MaybePromise<T>[], getPriority: GetPriority<T>): Promise<Prioritizeable<T>[]>;
    function isValid<T>(p: Prioritizeable<T>): boolean;
    function compare<T>(p: Prioritizeable<T>, p2: Prioritizeable<T>): number;
}
//# sourceMappingURL=types.d.ts.map