/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { Event } from '../common/event';
import { Disposable } from '../common/disposable';
export declare const ThemeServiceSymbol: unique symbol;
export declare type ThemeType = 'light' | 'dark' | 'hc';
export interface Theme {
    readonly id: string;
    readonly type: ThemeType;
    readonly label: string;
    readonly description?: string;
    readonly editorTheme?: string;
    activate(): void;
    deactivate(): void;
}
export interface ThemeChangeEvent {
    readonly newTheme: Theme;
    readonly oldTheme?: Theme;
}
export declare class ThemeService {
    protected _defaultTheme: string | undefined;
    protected fallbackTheme: string;
    private themes;
    private activeTheme;
    private readonly themeChange;
    readonly onThemeChange: Event<ThemeChangeEvent>;
    static get(): ThemeService;
    protected constructor(_defaultTheme?: string | undefined, fallbackTheme?: string);
    register(...themes: Theme[]): Disposable;
    protected validateActiveTheme(): void;
    getThemes(): Theme[];
    getTheme(themeId: string): Theme;
    startupTheme(): void;
    loadUserTheme(): void;
    setCurrentTheme(themeId: string): void;
    getCurrentTheme(): Theme;
    /**
     * The default theme. If that is not applicable, returns with the fallback theme.
     */
    get defaultTheme(): Theme;
    /**
     * Resets the state to the user's default, or to the fallback theme. Also discards any persisted state in the local storage.
     */
    reset(): void;
}
export declare class BuiltinThemeProvider {
    static readonly darkCss: any;
    static readonly lightCss: any;
    static readonly darkTheme: Theme;
    static readonly lightTheme: Theme;
    static readonly hcTheme: Theme;
    static readonly themes: Theme[];
}
//# sourceMappingURL=theming.d.ts.map