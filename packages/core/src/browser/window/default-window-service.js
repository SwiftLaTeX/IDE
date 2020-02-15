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
var core_preferences_1 = require("../core-preferences");
var contribution_provider_1 = require("../../common/contribution-provider");
var frontend_application_1 = require("../frontend-application");
var DefaultWindowService = /** @class */ (function () {
    function DefaultWindowService() {
    }
    DefaultWindowService.prototype.onStart = function (app) {
        var _this = this;
        this.frontendApplication = app;
        window.addEventListener('beforeunload', function (event) {
            if (!_this.canUnload()) {
                return _this.preventUnload(event);
            }
        });
    };
    DefaultWindowService.prototype.openNewWindow = function (url) {
        window.open(url, undefined, 'noopener');
        return undefined;
    };
    DefaultWindowService.prototype.canUnload = function () {
        var e_1, _a;
        var confirmExit = this.corePreferences['application.confirmExit'];
        if (confirmExit === 'never') {
            return true;
        }
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                if (contribution.onWillStop) {
                    if (!!contribution.onWillStop(this.frontendApplication)) {
                        return false;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return confirmExit !== 'always';
    };
    /**
     * Ask the user to confirm if they want to unload the window. Prevent it if they do not.
     * @param event The beforeunload event
     */
    DefaultWindowService.prototype.preventUnload = function (event) {
        event.returnValue = '';
        event.preventDefault();
        return '';
    };
    __decorate([
        inversify_1.inject(core_preferences_1.CorePreferences),
        __metadata("design:type", Object)
    ], DefaultWindowService.prototype, "corePreferences", void 0);
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider),
        inversify_1.named(frontend_application_1.FrontendApplicationContribution),
        __metadata("design:type", Object)
    ], DefaultWindowService.prototype, "contributions", void 0);
    DefaultWindowService = __decorate([
        inversify_1.injectable()
    ], DefaultWindowService);
    return DefaultWindowService;
}());
exports.DefaultWindowService = DefaultWindowService;
//# sourceMappingURL=default-window-service.js.map