"use strict";
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
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var language_client_contribution_1 = require("./language-client-contribution");
var LanguagesFrontendContribution = /** @class */ (function () {
    function LanguagesFrontendContribution() {
    }
    LanguagesFrontendContribution.prototype.onStart = function (app) {
        var e_1, _a;
        var schema = {
            type: 'object',
            properties: {}
        };
        var _loop_1 = function (contribution) {
            contribution.waitForActivation(app).then(function () {
                return contribution.activate(app);
            });
            schema.properties[contribution.id + ".trace.server"] = {
                type: 'string',
                enum: [
                    'off',
                    'messages',
                    'verbose'
                ],
                default: 'off',
                description: "Enable/disable tracing communications with the " + contribution.name + " language server"
            };
        };
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                _loop_1(contribution);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.preferenceSchema.setSchema(schema);
    };
    LanguagesFrontendContribution.prototype.registerCommands = function (commands) {
        var e_2, _a;
        var _this = this;
        var _loop_2 = function (contribution) {
            commands.registerCommand({
                id: contribution.id + ".server.start",
                label: contribution.name + ": Start Language Server"
            }, {
                execute: function () { return contribution.activate(_this.app); },
                isEnabled: function () { return !contribution.running; },
                isVisible: function () { return !contribution.running; },
            });
            commands.registerCommand({
                id: contribution.id + ".server.stop",
                label: contribution.name + ": Stop Language Server"
            }, {
                execute: function () { return contribution.deactivate(); },
                isEnabled: function () { return contribution.running; },
                isVisible: function () { return contribution.running; },
            });
            commands.registerCommand({
                id: contribution.id + ".server.restart",
                label: contribution.name + ": Restart Language Server"
            }, {
                execute: function () { return contribution.restart(); },
                isEnabled: function () { return contribution.running; },
                isVisible: function () { return contribution.running; },
            });
        };
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                _loop_2(contribution);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], LanguagesFrontendContribution.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], LanguagesFrontendContribution.prototype, "preferenceSchema", void 0);
    __decorate([
        inversify_1.inject(common_1.ContributionProvider), inversify_1.named(language_client_contribution_1.LanguageClientContribution),
        __metadata("design:type", Object)
    ], LanguagesFrontendContribution.prototype, "contributions", void 0);
    LanguagesFrontendContribution = __decorate([
        inversify_1.injectable()
    ], LanguagesFrontendContribution);
    return LanguagesFrontendContribution;
}());
exports.LanguagesFrontendContribution = LanguagesFrontendContribution;
//# sourceMappingURL=languages-frontend-contribution.js.map