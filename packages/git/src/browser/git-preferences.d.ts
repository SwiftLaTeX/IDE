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
import { PreferenceProxy, PreferenceService, PreferenceSchema } from '@theia/core/lib/browser';
export declare const GitConfigSchema: PreferenceSchema;
export interface GitConfiguration {
    'git.decorations.enabled': boolean;
    'git.decorations.colors': boolean;
    'git.editor.decorations.enabled': boolean;
    'git.editor.dirtyDiff.linesLimit': number;
    'git.alwaysSignOff': boolean;
}
export declare const GitPreferences: unique symbol;
export declare type GitPreferences = PreferenceProxy<GitConfiguration>;
export declare function createGitPreferences(preferences: PreferenceService): GitPreferences;
export declare function bindGitPreferences(bind: interfaces.Bind): void;
//# sourceMappingURL=git-preferences.d.ts.map