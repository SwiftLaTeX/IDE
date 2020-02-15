"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var color_registry_1 = require("@theia/core/lib/browser/color-registry");
var theming_1 = require("@theia/core/lib/browser/theming");
/**
 * It should be aligned with https://github.com/microsoft/vscode/blob/0dfa355b3ad185a6289ba28a99c141ab9e72d2be/src/vs/workbench/contrib/terminal/common/terminalColorRegistry.ts#L40
 */
exports.terminalAnsiColorMap = {
    'terminal.ansiBlack': {
        index: 0,
        defaults: {
            light: '#000000',
            dark: '#000000',
            hc: '#000000'
        }
    },
    'terminal.ansiRed': {
        index: 1,
        defaults: {
            light: '#cd3131',
            dark: '#cd3131',
            hc: '#cd0000'
        }
    },
    'terminal.ansiGreen': {
        index: 2,
        defaults: {
            light: '#00BC00',
            dark: '#0DBC79',
            hc: '#00cd00'
        }
    },
    'terminal.ansiYellow': {
        index: 3,
        defaults: {
            light: '#949800',
            dark: '#e5e510',
            hc: '#cdcd00'
        }
    },
    'terminal.ansiBlue': {
        index: 4,
        defaults: {
            light: '#0451a5',
            dark: '#2472c8',
            hc: '#0000ee'
        }
    },
    'terminal.ansiMagenta': {
        index: 5,
        defaults: {
            light: '#bc05bc',
            dark: '#bc3fbc',
            hc: '#cd00cd'
        }
    },
    'terminal.ansiCyan': {
        index: 6,
        defaults: {
            light: '#0598bc',
            dark: '#11a8cd',
            hc: '#00cdcd'
        }
    },
    'terminal.ansiWhite': {
        index: 7,
        defaults: {
            light: '#555555',
            dark: '#e5e5e5',
            hc: '#e5e5e5'
        }
    },
    'terminal.ansiBrightBlack': {
        index: 8,
        defaults: {
            light: '#666666',
            dark: '#666666',
            hc: '#7f7f7f'
        }
    },
    'terminal.ansiBrightRed': {
        index: 9,
        defaults: {
            light: '#cd3131',
            dark: '#f14c4c',
            hc: '#ff0000'
        }
    },
    'terminal.ansiBrightGreen': {
        index: 10,
        defaults: {
            light: '#14CE14',
            dark: '#23d18b',
            hc: '#00ff00'
        }
    },
    'terminal.ansiBrightYellow': {
        index: 11,
        defaults: {
            light: '#b5ba00',
            dark: '#f5f543',
            hc: '#ffff00'
        }
    },
    'terminal.ansiBrightBlue': {
        index: 12,
        defaults: {
            light: '#0451a5',
            dark: '#3b8eea',
            hc: '#5c5cff'
        }
    },
    'terminal.ansiBrightMagenta': {
        index: 13,
        defaults: {
            light: '#bc05bc',
            dark: '#d670d6',
            hc: '#ff00ff'
        }
    },
    'terminal.ansiBrightCyan': {
        index: 14,
        defaults: {
            light: '#0598bc',
            dark: '#29b8db',
            hc: '#00ffff'
        }
    },
    'terminal.ansiBrightWhite': {
        index: 15,
        defaults: {
            light: '#a5a5a5',
            dark: '#e5e5e5',
            hc: '#ffffff'
        }
    }
};
var TerminalThemeService = /** @class */ (function () {
    function TerminalThemeService() {
        this.onDidChange = theming_1.ThemeService.get().onThemeChange;
    }
    Object.defineProperty(TerminalThemeService.prototype, "theme", {
        get: function () {
            var foregroundColor = this.colorRegistry.getCurrentColor('terminal.foreground');
            var backgroundColor = this.colorRegistry.getCurrentColor('terminal.background') || this.colorRegistry.getCurrentColor('panel.background');
            var cursorColor = this.colorRegistry.getCurrentColor('terminalCursor.foreground') || foregroundColor;
            var cursorAccentColor = this.colorRegistry.getCurrentColor('terminalCursor.background') || backgroundColor;
            var selectionColor = this.colorRegistry.getCurrentColor('terminal.selectionBackground');
            var theme = {
                background: backgroundColor,
                foreground: foregroundColor,
                cursor: cursorColor,
                cursorAccent: cursorAccentColor,
                selection: selectionColor
            };
            // eslint-disable-next-line guard-for-in
            for (var id in exports.terminalAnsiColorMap) {
                var colorName = id.substring(13);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                theme[colorName] = this.colorRegistry.getCurrentColor(id);
            }
            return theme;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], TerminalThemeService.prototype, "colorRegistry", void 0);
    TerminalThemeService = __decorate([
        inversify_1.injectable()
    ], TerminalThemeService);
    return TerminalThemeService;
}());
exports.TerminalThemeService = TerminalThemeService;
//# sourceMappingURL=terminal-theme-service.js.map