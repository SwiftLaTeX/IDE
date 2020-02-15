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
import { interfaces } from 'inversify';
import { ContributionProvider, Emitter, Event, Disposable } from '../../common';
import { PreferenceScope } from './preference-scope';
import { PreferenceProvider, PreferenceProviderDataChange } from './preference-provider';
import { PreferenceSchema, PreferenceSchemaProperties, PreferenceDataSchema, PreferenceItem, PreferenceSchemaProperty, PreferenceDataProperty, JsonType } from '../../common/preferences/preference-schema';
import { FrontendApplicationConfig } from '@theia/application-package/lib/application-props';
import { PreferenceConfigurations } from './preference-configurations';
export { PreferenceSchema, PreferenceSchemaProperties, PreferenceDataSchema, PreferenceItem, PreferenceSchemaProperty, PreferenceDataProperty, JsonType };
export declare const PreferenceContribution: unique symbol;
export interface PreferenceContribution {
    readonly schema: PreferenceSchema;
}
export declare function bindPreferenceSchemaProvider(bind: interfaces.Bind): void;
export interface OverridePreferenceName {
    preferenceName: string;
    overrideIdentifier: string;
}
export declare namespace OverridePreferenceName {
    function is(arg: any): arg is OverridePreferenceName;
}
export declare const OVERRIDE_PROPERTY_PATTERN: RegExp;
export interface FrontendApplicationPreferenceConfig extends FrontendApplicationConfig {
    preferences: {
        [preferenceName: string]: any;
    };
}
export declare namespace FrontendApplicationPreferenceConfig {
    function is(config: FrontendApplicationConfig): config is FrontendApplicationPreferenceConfig;
}
export declare class PreferenceSchemaProvider extends PreferenceProvider {
    protected readonly preferences: {
        [name: string]: any;
    };
    protected readonly combinedSchema: PreferenceDataSchema;
    protected readonly preferenceContributions: ContributionProvider<PreferenceContribution>;
    protected readonly configurations: PreferenceConfigurations;
    protected readonly onDidPreferenceSchemaChangedEmitter: Emitter<void>;
    readonly onDidPreferenceSchemaChanged: Event<void>;
    protected fireDidPreferenceSchemaChanged(): void;
    protected init(): void;
    protected readonly overrideIdentifiers: Set<string>;
    registerOverrideIdentifier(overrideIdentifier: string): void;
    protected readonly overridePatternProperties: Required<Pick<PreferenceDataProperty, 'properties' | 'additionalProperties'>> & PreferenceDataProperty;
    protected overridePatternPropertiesKey: string | undefined;
    protected updateOverridePatternPropertiesKey(): void;
    protected computeOverridePatternPropertiesKey(): string | undefined;
    protected doUnsetSchema(changes: PreferenceProviderDataChange[]): PreferenceProviderDataChange[];
    protected doSetSchema(schema: PreferenceSchema): PreferenceProviderDataChange[];
    protected doSetPreferenceValue(preferenceName: string, newValue: any, { scope, domain }: {
        scope: PreferenceScope;
        domain?: string[];
    }): PreferenceProviderDataChange;
    /** @deprecated since 0.6.0 pass preferenceName as the second arg */
    protected getDefaultValue(property: PreferenceItem): any;
    protected getDefaultValue(property: PreferenceItem, preferenceName: string): any;
    getCombinedSchema(): PreferenceDataSchema;
    setSchema(schema: PreferenceSchema): Disposable;
    getPreferences(): {
        [name: string]: any;
    };
    setPreference(): Promise<boolean>;
    isValidInScope(preferenceName: string, scope: PreferenceScope): boolean;
    getPreferenceNames(): IterableIterator<string>;
    getOverridePreferenceNames(preferenceName: string): IterableIterator<string>;
    overridePreferenceName({ preferenceName, overrideIdentifier }: OverridePreferenceName): string;
    overriddenPreferenceName(name: string): OverridePreferenceName | undefined;
    testOverrideValue(name: string, value: any): value is PreferenceSchemaProperties;
}
//# sourceMappingURL=preference-contribution.d.ts.map