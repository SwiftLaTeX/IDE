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
import { Disposable, DisposableCollection } from './disposable';
import { Emitter, Event } from './event';
import { MaybePromise } from './types';
export interface Reference<T> extends Disposable {
    readonly object: T;
}
export declare abstract class AbstractReferenceCollection<K, V extends Disposable> implements Disposable {
    protected readonly _keys: Map<string, K>;
    protected readonly _values: Map<string, V>;
    protected readonly references: Map<string, DisposableCollection>;
    protected readonly onDidCreateEmitter: Emitter<V>;
    readonly onDidCreate: Event<V>;
    protected readonly onWillDisposeEmitter: Emitter<V>;
    readonly onWillDispose: Event<V>;
    protected readonly toDispose: DisposableCollection;
    constructor();
    dispose(): void;
    clear(): void;
    has(args: K): boolean;
    keys(): K[];
    values(): V[];
    get(args: K): V | undefined;
    abstract acquire(args: K): MaybePromise<Reference<V>>;
    protected doAcquire(key: string, object: V): Reference<V>;
    protected toKey(args: K): string;
    protected createReferences(key: string, value: V): DisposableCollection;
}
export declare class ReferenceCollection<K, V extends Disposable> extends AbstractReferenceCollection<K, V> {
    protected readonly factory: (key: K) => MaybePromise<V>;
    constructor(factory: (key: K) => MaybePromise<V>);
    acquire(args: K): Promise<Reference<V>>;
    protected readonly pendingValues: Map<string, MaybePromise<V>>;
    protected getOrCreateValue(key: string, args: K): Promise<V>;
}
export declare class SyncReferenceCollection<K, V extends Disposable> extends AbstractReferenceCollection<K, V> {
    protected readonly factory: (key: K) => V;
    constructor(factory: (key: K) => V);
    acquire(args: K): Reference<V>;
    protected getOrCreateValue(key: string, args: K): V;
}
//# sourceMappingURL=reference.d.ts.map