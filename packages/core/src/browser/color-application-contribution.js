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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var color_registry_1 = require("./color-registry");
var event_1 = require("../common/event");
var theming_1 = require("./theming");
var contribution_provider_1 = require("../common/contribution-provider");
var disposable_1 = require("../common/disposable");
exports.ColorContribution = Symbol('ColorContribution');
var ColorApplicationContribution = /** @class */ (function () {
    function ColorApplicationContribution() {
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.toUpdate = new disposable_1.DisposableCollection();
    }
    ColorApplicationContribution_1 = ColorApplicationContribution;
    ColorApplicationContribution.prototype.onStart = function () {
        var e_1, _a;
        var _this = this;
        try {
            for (var _b = __values(this.colorContributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                contribution.registerColors(this.colors);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.updateThemeBackground();
        theming_1.ThemeService.get().onThemeChange(function () { return _this.updateThemeBackground(); });
        this.update();
        theming_1.ThemeService.get().onThemeChange(function () { return _this.update(); });
        this.colors.onDidChange(function () { return _this.update(); });
    };
    ColorApplicationContribution.prototype.update = function () {
        var e_2, _a;
        if (!document) {
            return;
        }
        this.toUpdate.dispose();
        var theme = 'theia-' + theming_1.ThemeService.get().getCurrentTheme().type;
        document.body.classList.add(theme);
        this.toUpdate.push(disposable_1.Disposable.create(function () { return document.body.classList.remove(theme); }));
        var documentElement = document.documentElement;
        if (documentElement) {
            var _loop_1 = function (id) {
                var variable = this_1.colors.getCurrentCssVariable(id);
                if (variable) {
                    var name_1 = variable.name, value = variable.value;
                    documentElement.style.setProperty(name_1, value);
                    this_1.toUpdate.push(disposable_1.Disposable.create(function () { return documentElement.style.removeProperty(name_1); }));
                }
            };
            var this_1 = this;
            try {
                for (var _b = __values(this.colors.getColors()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var id = _c.value;
                    _loop_1(id);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        this.onDidChangeEmitter.fire(undefined);
    };
    ColorApplicationContribution.prototype.updateThemeBackground = function () {
        var color = this.colors.getCurrentColor('editor.background');
        if (color) {
            window.localStorage.setItem(ColorApplicationContribution_1.themeBackgroundId, color);
        }
        else {
            window.localStorage.removeItem(ColorApplicationContribution_1.themeBackgroundId);
        }
    };
    ColorApplicationContribution.initBackground = function () {
        var value = window.localStorage.getItem(this.themeBackgroundId) || '#1d1d1d';
        var documentElement = document.documentElement;
        documentElement.style.setProperty('--theia-editor-background', value);
    };
    var ColorApplicationContribution_1;
    ColorApplicationContribution.themeBackgroundId = 'theme.background';
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], ColorApplicationContribution.prototype, "colors", void 0);
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider), inversify_1.named(exports.ColorContribution),
        __metadata("design:type", Object)
    ], ColorApplicationContribution.prototype, "colorContributions", void 0);
    ColorApplicationContribution = ColorApplicationContribution_1 = __decorate([
        inversify_1.injectable()
    ], ColorApplicationContribution);
    return ColorApplicationContribution;
}());
exports.ColorApplicationContribution = ColorApplicationContribution;
//# sourceMappingURL=color-application-contribution.js.map