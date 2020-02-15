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
export declare const javaDebugPreferenceSchema: PreferenceSchema;
export interface JavaConfiguration {
}
export declare type JavaPreferenceChange = PreferenceChangeEvent<JavaConfiguration>;
export declare const JavaPreferences: unique symbol;
export declare type JavaPreferences = PreferenceProxy<JavaConfiguration>;
export declare function createJavaPreferences(preferences: PreferenceService): JavaPreferences;
export declare function bindJavaPreferences(bind: interfaces.Bind): void;
//# sourceMappingURL=java-preferences.d.ts.map