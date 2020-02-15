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
import { interfaces } from 'inversify';
import { PreferenceProxy, PreferenceService, PreferenceSchema, PreferenceChangeEvent } from '@theia/core/lib/browser/preferences';
import { JsonSchemaConfiguration } from '@theia/core/lib/browser/json-schema-store';
export declare const jsonPreferenceSchema: PreferenceSchema;
export interface JsonConfiguration {
    'json.schemas': JsonSchemaConfiguration[];
    'json.format.enable': boolean;
}
export declare type JsonPreferenceChange = PreferenceChangeEvent<JsonConfiguration>;
export declare const JsonPreferences: unique symbol;
export declare type JsonPreferences = PreferenceProxy<JsonConfiguration>;
export declare function createJsonPreferences(preferences: PreferenceService): JsonPreferences;
export declare function bindJsonPreferences(bind: interfaces.Bind): void;
//# sourceMappingURL=json-preferences.d.ts.map