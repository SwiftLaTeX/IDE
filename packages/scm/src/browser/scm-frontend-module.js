"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../src/browser/style/index.css");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var scm_service_1 = require("./scm-service");
var scm_contribution_1 = require("./scm-contribution");
var scm_widget_1 = require("./scm-widget");
var scm_quick_open_service_1 = require("./scm-quick-open-service");
var dirty_diff_module_1 = require("./dirty-diff/dirty-diff-module");
var browser_2 = require("@theia/navigator/lib/browser");
var scm_navigator_decorator_1 = require("./decorations/scm-navigator-decorator");
var scm_decorations_service_1 = require("./decorations/scm-decorations-service");
var scm_avatar_service_1 = require("./scm-avatar-service");
var scm_context_key_service_1 = require("./scm-context-key-service");
var scm_layout_migrations_1 = require("./scm-layout-migrations");
var color_application_contribution_1 = require("@theia/core/lib/browser/color-application-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(scm_context_key_service_1.ScmContextKeyService).toSelf().inSingletonScope();
    bind(scm_service_1.ScmService).toSelf().inSingletonScope();
    bind(scm_widget_1.ScmWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: scm_contribution_1.SCM_WIDGET_FACTORY_ID,
            createWidget: function () { return container.get(scm_widget_1.ScmWidget); }
        });
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: scm_contribution_1.SCM_VIEW_CONTAINER_ID,
            createWidget: function () { return __awaiter(void 0, void 0, void 0, function () {
                var viewContainer, widget;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            viewContainer = container.get(browser_1.ViewContainer.Factory)({
                                id: scm_contribution_1.SCM_VIEW_CONTAINER_ID,
                                progressLocationId: 'scm'
                            });
                            viewContainer.setTitleOptions(scm_contribution_1.SCM_VIEW_CONTAINER_TITLE_OPTIONS);
                            return [4 /*yield*/, container.get(browser_1.WidgetManager).getOrCreateWidget(scm_contribution_1.SCM_WIDGET_FACTORY_ID)];
                        case 1:
                            widget = _a.sent();
                            viewContainer.addWidget(widget, {
                                canHide: false,
                                initiallyCollapsed: false
                            });
                            return [2 /*return*/, viewContainer];
                    }
                });
            }); }
        });
    }).inSingletonScope();
    bind(browser_1.ApplicationShellLayoutMigration).to(scm_layout_migrations_1.ScmLayoutVersion3Migration).inSingletonScope();
    bind(scm_quick_open_service_1.ScmQuickOpenService).toSelf().inSingletonScope();
    browser_1.bindViewContribution(bind, scm_contribution_1.ScmContribution);
    bind(browser_1.FrontendApplicationContribution).toService(scm_contribution_1.ScmContribution);
    bind(color_application_contribution_1.ColorContribution).toService(scm_contribution_1.ScmContribution);
    bind(browser_2.NavigatorTreeDecorator).to(scm_navigator_decorator_1.ScmNavigatorDecorator).inSingletonScope();
    bind(scm_decorations_service_1.ScmDecorationsService).toSelf().inSingletonScope();
    bind(scm_avatar_service_1.ScmAvatarService).toSelf().inSingletonScope();
    dirty_diff_module_1.bindDirtyDiff(bind);
});
//# sourceMappingURL=scm-frontend-module.js.map