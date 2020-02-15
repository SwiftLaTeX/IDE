"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var core_1 = require("@theia/core");
var strings_1 = require("@theia/core/lib/common/strings");
var PreferencesDecorator = /** @class */ (function () {
    function PreferencesDecorator(preferencesService) {
        var _this = this;
        this.preferencesService = preferencesService;
        this.id = 'theia-preferences-decorator';
        this.emitter = new core_1.Emitter();
        this.preferencesDecorations = new Map();
        this.preferencesService.onPreferenceChanged(function () {
            _this.fireDidChangeDecorations(_this.preferences);
        });
    }
    Object.defineProperty(PreferencesDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    PreferencesDecorator.prototype.fireDidChangeDecorations = function (preferences) {
        var _this = this;
        if (!this.preferences) {
            this.preferences = preferences;
        }
        this.preferencesDecorations = new Map(preferences.map(function (m) {
            var preferenceName = Object.keys(m)[0];
            var preferenceValue = m[preferenceName];
            var storedValue = _this.preferencesService.get(preferenceName, undefined, _this.activeFolderUri);
            var description = _this.getDescription(preferenceValue);
            return [preferenceName, {
                    tooltip: _this.buildTooltip(preferenceValue),
                    captionSuffixes: [
                        {
                            data: ": " + _this.getPreferenceDisplayValue(storedValue, preferenceValue.defaultValue)
                        },
                        {
                            data: ' ' + description,
                            fontData: { color: 'var(--theia-descriptionForeground)' }
                        }
                    ]
                }];
        }));
        this.emitter.fire(function () { return _this.preferencesDecorations; });
    };
    PreferencesDecorator.prototype.decorations = function (tree) {
        return this.preferencesDecorations;
    };
    PreferencesDecorator.prototype.setActiveFolder = function (folder) {
        this.activeFolderUri = folder;
        this.fireDidChangeDecorations(this.preferences);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PreferencesDecorator.prototype.getPreferenceDisplayValue = function (storedValue, defaultValue) {
        if (storedValue !== undefined) {
            if (typeof storedValue === 'string') {
                return strings_1.escapeInvisibleChars(storedValue);
            }
            return storedValue;
        }
        return defaultValue;
    };
    PreferencesDecorator.prototype.buildTooltip = function (data) {
        var tooltips = '';
        if (data.description) {
            tooltips = data.description;
        }
        if (data.defaultValue) {
            tooltips += "\nDefault: " + JSON.stringify(data.defaultValue);
        }
        else if (data.default !== undefined) {
            tooltips += "\nDefault: " + JSON.stringify(data.default);
        }
        if (data.minimum) {
            tooltips += "\nMin: " + data.minimum;
        }
        if (data.enum) {
            tooltips += "\nAccepted Values: " + data.enum.join(', ');
        }
        return tooltips;
    };
    /**
     * Get the description for the preference for display purposes.
     * @param value {PreferenceDataProperty} the preference data property.
     * @returns the description if available.
     */
    PreferencesDecorator.prototype.getDescription = function (value) {
        /**
         * Format the string for consistency and display purposes.
         * Formatting includes:
         * - capitalizing the string.
         * - ensuring it ends in punctuation (`.`).
         * @param str {string} the string to format.
         * @returns the formatted string.
         */
        function format(str) {
            if (str.endsWith('.')) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
            return str.charAt(0).toUpperCase() + str.slice(1) + ".";
        }
        if (value.description) {
            return format(value.description);
        }
        else if (value.markdownDescription) {
            return format(value.markdownDescription);
        }
        return '';
    };
    PreferencesDecorator = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.PreferenceService)),
        __metadata("design:paramtypes", [Object])
    ], PreferencesDecorator);
    return PreferencesDecorator;
}());
exports.PreferencesDecorator = PreferencesDecorator;
//# sourceMappingURL=preferences-decorator.js.map