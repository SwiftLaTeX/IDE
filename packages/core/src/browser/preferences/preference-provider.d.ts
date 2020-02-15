/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { JSONValue } from '@phosphor/coreutils/lib/json';
import URI from '../../common/uri';
import { Disposable, DisposableCollection, Emitter, Event } from '../../common';
import { Deferred } from '../../common/promise-util';
import { PreferenceScope } from './preference-scope';
export interface PreferenceProviderDataChange {
    readonly preferenceName: string;
    readonly newValue?: any;
    readonly oldValue?: any;
    readonly scope: PreferenceScope;
    readonly domain?: string[];
}
export interface PreferenceProviderDataChanges {
    [preferenceName: string]: PreferenceProviderDataChange;
}
export interface PreferenceResolveResult<T> {
    configUri?: URI;
    value?: T;
}
export declare abstract class PreferenceProvider implements Disposable {
    protected readonly onDidPreferencesChangedEmitter: Emitter<PreferenceProviderDataChanges>;
    readonly onDidPreferencesChanged: Event<PreferenceProviderDataChanges>;
    protected readonly toDispose: DisposableCollection;
    protected readonly _ready: Deferred<void>;
    constructor();
    dispose(): void;
    /**
     * Informs the listeners that one or more preferences of this provider are changed.
     * The listeners are able to find what was changed from the emitted event.
     */
    protected emitPreferencesChangedEvent(changes: PreferenceProviderDataChanges | PreferenceProviderDataChange[]): void;
    get<T>(preferenceName: string, resourceUri?: string): T | undefined;
    resolve<T>(preferenceName: string, resourceUri?: string): PreferenceResolveResult<T>;
    abstract getPreferences(resourceUri?: string): {
        [p: string]: any;
    };
    abstract setPreference(key: string, value: any, resourceUri?: string): Promise<boolean>;
    /**
     * Resolved when the preference provider is ready to provide preferences
     * It should be resolved by subclasses.
     */
    get ready(): Promise<void>;
    /**
     * undefined if all belongs
     */
    getDomain(): string[] | undefined;
    /**
     * undefined if cannot be provided for the given resource uri
     */
    getConfigUri(resourceUri?: string): URI | undefined;
    static merge(source: JSONValue | undefined, target: JSONValue): JSONValue;
}
//# sourceMappingURL=preference-provider.d.ts.map