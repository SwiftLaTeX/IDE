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
import { interfaces } from 'inversify';
import { PreferenceProxy, PreferenceService, PreferenceSchema } from '@theia/core/lib/browser';
export declare const ProblemConfigSchema: PreferenceSchema;
export interface ProblemConfiguration {
    'problems.decorations.enabled': boolean;
    'problems.decorations.tabbar.enabled': boolean;
}
export declare const ProblemPreferences: unique symbol;
export declare type ProblemPreferences = PreferenceProxy<ProblemConfiguration>;
export declare const createProblemPreferences: (preferences: PreferenceService) => PreferenceProxy<ProblemConfiguration>;
export declare const bindProblemPreferences: (bind: interfaces.Bind) => void;
//# sourceMappingURL=problem-preferences.d.ts.map