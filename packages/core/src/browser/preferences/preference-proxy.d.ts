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
import { Disposable, Event } from '../../common';
import { PreferenceService } from './preference-service';
import { PreferenceSchema } from './preference-contribution';
export interface PreferenceChangeEvent<T> {
    readonly preferenceName: keyof T;
    readonly newValue?: T[keyof T];
    readonly oldValue?: T[keyof T];
    affects(resourceUri?: string, overrideIdentifier?: string): boolean;
}
export interface PreferenceEventEmitter<T> {
    readonly onPreferenceChanged: Event<PreferenceChangeEvent<T>>;
    readonly ready: Promise<void>;
}
export interface PreferenceRetrieval<T> {
    get<K extends keyof T>(preferenceName: K | {
        preferenceName: K;
        overrideIdentifier?: string;
    }, defaultValue?: T[K], resourceUri?: string): T[K];
}
export declare type PreferenceProxy<T> = Readonly<T> & Disposable & PreferenceEventEmitter<T> & PreferenceRetrieval<T>;
export interface PreferenceProxyOptions {
    prefix?: string;
    resourceUri?: string;
    overrideIdentifier?: string;
    style?: 'flat' | 'deep' | 'both';
}
export declare function createPreferenceProxy<T>(preferences: PreferenceService, schema: PreferenceSchema, options?: PreferenceProxyOptions): PreferenceProxy<T>;
//# sourceMappingURL=preference-proxy.d.ts.map