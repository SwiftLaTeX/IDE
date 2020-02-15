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
import { PreferenceSchema, PreferenceProxy, PreferenceService } from '@theia/core/lib/browser/preferences';
import { interfaces } from 'inversify';
export declare const debugPreferencesSchema: PreferenceSchema;
export declare class DebugConfiguration {
    'debug.trace': boolean;
    'debug.debugViewLocation': 'default' | 'left' | 'right' | 'bottom';
    'debug.openDebug': 'neverOpen' | 'openOnSessionStart' | 'openOnFirstSessionStart' | 'openOnDebugBreak';
    'debug.internalConsoleOptions': 'neverOpen' | 'openOnSessionStart' | 'openOnFirstSessionStart';
}
export declare const DebugPreferences: unique symbol;
export declare type DebugPreferences = PreferenceProxy<DebugConfiguration>;
export declare function createDebugPreferences(preferences: PreferenceService): DebugPreferences;
export declare function bindDebugPreferences(bind: interfaces.Bind): void;
//# sourceMappingURL=debug-preferences.d.ts.map