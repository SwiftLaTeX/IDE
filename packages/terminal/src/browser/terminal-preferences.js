"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/editor/lib/browser");
exports.TerminalConfigSchema = {
    type: 'object',
    properties: {
        'terminal.enableCopy': {
            type: 'boolean',
            description: 'Enable ctrl-c (cmd-c on macOS) to copy selected text',
            default: true
        },
        'terminal.enablePaste': {
            type: 'boolean',
            description: 'Enable ctrl-v (cmd-v on macOS) to paste from clipboard',
            default: true
        },
        'terminal.integrated.fontFamily': {
            type: 'string',
            description: 'Controls the font family of the terminal.',
            default: browser_2.EDITOR_FONT_DEFAULTS.fontFamily
        },
        'terminal.integrated.fontSize': {
            type: 'number',
            description: 'Controls the font size in pixels of the terminal.',
            minimum: 6,
            default: browser_2.EDITOR_FONT_DEFAULTS.fontSize
        },
        'terminal.integrated.fontWeight': {
            type: 'string',
            enum: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
            description: 'The font weight to use within the terminal for non-bold text.',
            default: 'normal'
        },
        'terminal.integrated.fontWeightBold': {
            type: 'string',
            enum: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
            description: 'The font weight to use within the terminal for bold text.',
            default: 'bold'
        },
        'terminal.integrated.letterSpacing': {
            description: 'Controls the letter spacing of the terminal, this is an integer value which represents the amount of additional pixels to add between characters.',
            type: 'number',
            default: 1
        },
        'terminal.integrated.lineHeight': {
            description: 'Controls the line height of the terminal, this number is multiplied by the terminal font size to get the actual line-height in pixels.',
            type: 'number',
            minimum: 1,
            default: 1
        },
        'terminal.integrated.scrollback': {
            description: 'Controls the maximum amount of lines the terminal keeps in its buffer.',
            type: 'number',
            default: 1000
        },
        'terminal.integrated.rendererType': {
            description: 'Controls how the terminal is rendered.',
            type: 'string',
            enum: ['canvas', 'dom'],
            default: 'canvas'
        },
        'terminal.integrated.copyOnSelection': {
            description: 'Controls whether text selected in the terminal will be copied to the clipboard.',
            type: 'boolean',
            default: false,
        }
    }
};
exports.DEFAULT_TERMINAL_RENDERER_TYPE = 'canvas';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTerminalRendererType(arg) {
    return typeof arg === 'string' && (arg === 'canvas' || arg === 'dom');
}
exports.isTerminalRendererType = isTerminalRendererType;
exports.TerminalPreferences = Symbol('TerminalPreferences');
function createTerminalPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.TerminalConfigSchema);
}
exports.createTerminalPreferences = createTerminalPreferences;
function bindTerminalPreferences(bind) {
    bind(exports.TerminalPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createTerminalPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.TerminalConfigSchema });
}
exports.bindTerminalPreferences = bindTerminalPreferences;
//# sourceMappingURL=terminal-preferences.js.map