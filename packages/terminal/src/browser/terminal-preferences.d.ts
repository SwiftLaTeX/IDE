/********************************************************************************
 * Copyright (C) 2018 Bitsler and others.
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
export declare const TerminalConfigSchema: PreferenceSchema;
export interface TerminalConfiguration {
    'terminal.enableCopy': boolean;
    'terminal.enablePaste': boolean;
    'terminal.integrated.fontFamily': string;
    'terminal.integrated.fontSize': number;
    'terminal.integrated.fontWeight': FontWeight;
    'terminal.integrated.fontWeightBold': FontWeight;
    'terminal.integrated.letterSpacing': number;
    'terminal.integrated.lineHeight': number;
    'terminal.integrated.scrollback': number;
    'terminal.integrated.rendererType': TerminalRendererType;
    'terminal.integrated.copyOnSelection': boolean;
}
declare type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export declare type TerminalRendererType = 'canvas' | 'dom';
export declare const DEFAULT_TERMINAL_RENDERER_TYPE = "canvas";
export declare function isTerminalRendererType(arg: any): arg is TerminalRendererType;
export declare const TerminalPreferences: unique symbol;
export declare type TerminalPreferences = PreferenceProxy<TerminalConfiguration>;
export declare function createTerminalPreferences(preferences: PreferenceService): TerminalPreferences;
export declare function bindTerminalPreferences(bind: interfaces.Bind): void;
export {};
//# sourceMappingURL=terminal-preferences.d.ts.map