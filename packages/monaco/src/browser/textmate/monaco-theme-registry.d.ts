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
/// <reference types="@typefox/monaco-editor-core/monaco" />
/// <reference types="@theia/monaco/src/typings/monaco" />
import { IRawTheme } from 'vscode-textmate';
export interface ThemeMix extends IRawTheme, monaco.editor.IStandaloneThemeData {
}
export interface MixStandaloneTheme extends monaco.services.IStandaloneTheme {
    themeData: ThemeMix;
}
export declare class MonacoThemeRegistry {
    getThemeData(): ThemeMix;
    getThemeData(name: string): ThemeMix | undefined;
    getTheme(): MixStandaloneTheme;
    getTheme(name: string): MixStandaloneTheme | undefined;
    protected doGetTheme(name: string | undefined): MixStandaloneTheme | undefined;
    setTheme(name: string, data: ThemeMix): void;
    /**
     * Register VS Code compatible themes
     */
    register(json: any, includes?: {
        [includePath: string]: any;
    }, givenName?: string, monacoBase?: monaco.editor.BuiltinTheme): ThemeMix;
    protected transform(tokenColor: any, acceptor: (rule: monaco.editor.ITokenThemeRule) => void): void;
    protected normalizeColor(color: string | monaco.color.Color | undefined): string | undefined;
}
export declare namespace MonacoThemeRegistry {
    const SINGLETON: MonacoThemeRegistry;
    const DARK_DEFAULT_THEME: string;
    const LIGHT_DEFAULT_THEME: string;
    const HC_DEFAULT_THEME: string;
}
//# sourceMappingURL=monaco-theme-registry.d.ts.map