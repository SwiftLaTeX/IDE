/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
/// <reference types="@typefox/monaco-editor-core/monaco" />
import * as idb from 'idb';
import { Disposable } from '@theia/core/lib/common/disposable';
declare type ThemeMix = import('./textmate/monaco-theme-registry').ThemeMix;
export declare const monacoDB: Promise<idb.IDBPDatabase<unknown>> | undefined;
export interface MonacoThemeState {
    id: string;
    label: string;
    description?: string;
    uiTheme: monaco.editor.BuiltinTheme;
    data: ThemeMix;
}
export declare namespace MonacoThemeState {
    function is(state: Object | undefined): state is MonacoThemeState;
}
export declare function getThemes(): Promise<MonacoThemeState[]>;
export declare function putTheme(state: MonacoThemeState): Disposable;
export declare function deleteTheme(id: string): Promise<void>;
export {};
//# sourceMappingURL=monaco-indexed-db.d.ts.map