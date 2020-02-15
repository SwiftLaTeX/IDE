/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import URI from '@theia/core/lib/common/uri';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { FileSystem } from '@theia/filesystem/lib/common/filesystem';
import { MonacoThemeState } from './monaco-indexed-db';
export interface MonacoTheme {
    id?: string;
    label?: string;
    uiTheme?: monaco.editor.BuiltinTheme;
    description?: string;
    uri: string;
}
export interface MonacoThemeJson {
    /**
     * theme id (optional), label is used if not provided
     */
    id?: string;
    label: string;
    /**
     * theme type, `vs-dark` if not provided
     */
    uiTheme?: monaco.editor.BuiltinTheme;
    description?: string;
    /**
     * Follow https://code.visualstudio.com/api/extension-guides/color-theme#create-a-new-color-theme to create a custom theme.
     */
    json: any;
    /**
     * Themes can include each other. It specifies how inclusions should be resolved.
     */
    includes?: {
        [includePath: string]: any;
    };
}
export declare class MonacoThemingService {
    protected readonly fileSystem: FileSystem;
    register(theme: MonacoTheme, pending?: {
        [uri: string]: Promise<any>;
    }): Disposable;
    protected doRegister(theme: MonacoTheme, pending: {
        [uri: string]: Promise<any>;
    }, toDispose: DisposableCollection): Promise<void>;
    protected loadTheme(uri: string, includes: {
        [include: string]: any;
    }, pending: {
        [uri: string]: Promise<any>;
    }, toDispose: DisposableCollection): Promise<any>;
    protected doLoadTheme(themeUri: URI, referencedPath: string, includes: {
        [include: string]: any;
    }, pending: {
        [uri: string]: Promise<any>;
    }, toDispose: DisposableCollection): Promise<any>;
    static init(): void;
    static register(theme: MonacoThemeJson): Disposable;
    protected static toUpdateUiTheme: DisposableCollection;
    protected static updateBodyUiTheme(): void;
    protected static doRegister(state: MonacoThemeState): Disposable;
    protected static restore(): Promise<void>;
    protected static toCssSelector(str: string): string;
}
//# sourceMappingURL=monaco-theming-service.d.ts.map