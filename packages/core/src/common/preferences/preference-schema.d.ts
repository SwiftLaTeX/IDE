/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { PreferenceScope } from './preference-scope';
export interface PreferenceSchema {
    [name: string]: any;
    scope?: 'application' | 'window' | 'resource' | PreferenceScope;
    overridable?: boolean;
    properties: PreferenceSchemaProperties;
}
export declare namespace PreferenceSchema {
    function is(obj: Object | undefined): obj is PreferenceSchema;
    function getDefaultScope(schema: PreferenceSchema): PreferenceScope;
}
export interface PreferenceSchemaProperties {
    [name: string]: PreferenceSchemaProperty;
}
export declare namespace PreferenceSchemaProperties {
    function is(obj: Object | undefined): obj is PreferenceSchemaProperties;
}
export interface PreferenceDataSchema {
    [name: string]: any;
    scope?: PreferenceScope;
    properties: {
        [name: string]: PreferenceDataProperty;
    };
    patternProperties: {
        [name: string]: PreferenceDataProperty;
    };
}
export interface PreferenceItem {
    type?: JsonType | JsonType[];
    minimum?: number;
    /**
     * content assist (UI) default value
     */
    default?: any;
    /**
     * preference default value, if `undefined` then `default`
     */
    defaultValue?: any;
    enum?: string[];
    items?: PreferenceItem;
    properties?: {
        [name: string]: PreferenceItem;
    };
    additionalProperties?: object | boolean;
    [name: string]: any;
    overridable?: boolean;
}
export interface PreferenceSchemaProperty extends PreferenceItem {
    description?: string;
    markdownDescription?: string;
    scope?: 'application' | 'window' | 'resource' | PreferenceScope;
}
export interface PreferenceDataProperty extends PreferenceItem {
    description?: string;
    markdownDescription?: string;
    scope?: PreferenceScope;
}
export declare namespace PreferenceDataProperty {
    function fromPreferenceSchemaProperty(schemaProps: PreferenceSchemaProperty, defaultScope?: PreferenceScope): PreferenceDataProperty;
}
export declare type JsonType = 'string' | 'array' | 'number' | 'integer' | 'object' | 'boolean' | 'null';
//# sourceMappingURL=preference-schema.d.ts.map