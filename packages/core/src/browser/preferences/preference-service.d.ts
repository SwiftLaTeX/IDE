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
import { Event, Emitter, DisposableCollection, Disposable } from '../../common';
import { Deferred } from '../../common/promise-util';
import { PreferenceProvider, PreferenceProviderDataChange, PreferenceProviderDataChanges, PreferenceResolveResult } from './preference-provider';
import { PreferenceSchemaProvider, OverridePreferenceName } from './preference-contribution';
import URI from '../../common/uri';
import { PreferenceScope } from './preference-scope';
import { PreferenceConfigurations } from './preference-configurations';
export { PreferenceScope };
export interface PreferenceChange {
    readonly preferenceName: string;
    readonly newValue?: any;
    readonly oldValue?: any;
    readonly scope: PreferenceScope;
    affects(resourceUri?: string): boolean;
}
export declare class PreferenceChangeImpl implements PreferenceChange {
    private change;
    constructor(change: PreferenceProviderDataChange);
    get preferenceName(): string;
    get newValue(): string;
    get oldValue(): string;
    get scope(): PreferenceScope;
    affects(resourceUri?: string): boolean;
}
export interface PreferenceChanges {
    [preferenceName: string]: PreferenceChange;
}
export declare const PreferenceService: unique symbol;
export interface PreferenceService extends Disposable {
    readonly ready: Promise<void>;
    get<T>(preferenceName: string): T | undefined;
    get<T>(preferenceName: string, defaultValue: T): T;
    get<T>(preferenceName: string, defaultValue: T, resourceUri?: string): T;
    get<T>(preferenceName: string, defaultValue?: T, resourceUri?: string): T | undefined;
    set(preferenceName: string, value: any, scope?: PreferenceScope, resourceUri?: string): Promise<void>;
    onPreferenceChanged: Event<PreferenceChange>;
    onPreferencesChanged: Event<PreferenceChanges>;
    inspect<T>(preferenceName: string, resourceUri?: string): {
        preferenceName: string;
        defaultValue: T | undefined;
        globalValue: T | undefined;
        workspaceValue: T | undefined;
        workspaceFolderValue: T | undefined;
    } | undefined;
    overridePreferenceName(options: OverridePreferenceName): string;
    overriddenPreferenceName(preferenceName: string): OverridePreferenceName | undefined;
    resolve<T>(preferenceName: string, defaultValue?: T, resourceUri?: string): PreferenceResolveResult<T>;
}
/**
 * We cannot load providers directly in the case if they depend on `PreferenceService` somehow.
 * It allows to load them lazilly after DI is configured.
 */
export declare const PreferenceProviderProvider: unique symbol;
export declare type PreferenceProviderProvider = (scope: PreferenceScope, uri?: URI) => PreferenceProvider;
export declare class PreferenceServiceImpl implements PreferenceService {
    protected readonly onPreferenceChangedEmitter: Emitter<PreferenceChange>;
    readonly onPreferenceChanged: Event<PreferenceChange>;
    protected readonly onPreferencesChangedEmitter: Emitter<PreferenceChanges>;
    readonly onPreferencesChanged: Event<PreferenceChanges>;
    protected readonly toDispose: DisposableCollection;
    protected readonly schema: PreferenceSchemaProvider;
    protected readonly providerProvider: PreferenceProviderProvider;
    protected readonly configurations: PreferenceConfigurations;
    protected readonly preferenceProviders: Map<PreferenceScope, PreferenceProvider>;
    protected initializeProviders(): Promise<void>;
    protected init(): void;
    dispose(): void;
    protected readonly _ready: Deferred<void>;
    get ready(): Promise<void>;
    protected reconcilePreferences(changes: PreferenceProviderDataChanges): void;
    protected getAffectedPreferenceNames(change: PreferenceProviderDataChange, accept: (affectedPreferenceName: string) => void): void;
    protected getProvider(scope: PreferenceScope): PreferenceProvider | undefined;
    has(preferenceName: string, resourceUri?: string): boolean;
    get<T>(preferenceName: string): T | undefined;
    get<T>(preferenceName: string, defaultValue: T): T;
    get<T>(preferenceName: string, defaultValue: T, resourceUri: string): T;
    get<T>(preferenceName: string, defaultValue?: T, resourceUri?: string): T | undefined;
    resolve<T>(preferenceName: string, defaultValue?: T, resourceUri?: string): {
        configUri?: URI;
        value?: T;
    };
    set(preferenceName: string, value: any, scope: PreferenceScope | undefined, resourceUri?: string): Promise<void>;
    getBoolean(preferenceName: string): boolean | undefined;
    getBoolean(preferenceName: string, defaultValue: boolean): boolean;
    getBoolean(preferenceName: string, defaultValue: boolean, resourceUri: string): boolean;
    getString(preferenceName: string): string | undefined;
    getString(preferenceName: string, defaultValue: string): string;
    getString(preferenceName: string, defaultValue: string, resourceUri: string): string;
    getNumber(preferenceName: string): number | undefined;
    getNumber(preferenceName: string, defaultValue: number): number;
    getNumber(preferenceName: string, defaultValue: number, resourceUri: string): number;
    inspect<T>(preferenceName: string, resourceUri?: string): {
        preferenceName: string;
        defaultValue: T | undefined;
        globalValue: T | undefined;
        workspaceValue: T | undefined;
        workspaceFolderValue: T | undefined;
    } | undefined;
    protected inspectInScope<T>(preferenceName: string, scope: PreferenceScope, resourceUri?: string): T | undefined;
    overridePreferenceName(options: OverridePreferenceName): string;
    overriddenPreferenceName(preferenceName: string): OverridePreferenceName | undefined;
    protected doHas(preferenceName: string, resourceUri?: string): boolean;
    protected doInspectInScope<T>(preferenceName: string, scope: PreferenceScope, resourceUri?: string): T | undefined;
    protected doGet<T>(preferenceName: string, defaultValue?: T, resourceUri?: string): T | undefined;
    protected doResolve<T>(preferenceName: string, defaultValue?: T, resourceUri?: string): PreferenceResolveResult<T>;
}
//# sourceMappingURL=preference-service.d.ts.map