"use strict";
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
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
var preview_contribution_1 = require("./preview-contribution");
var preview_widget_1 = require("./preview-widget");
var preview_handler_1 = require("./preview-handler");
var preview_uri_1 = require("./preview-uri");
var markdown_1 = require("./markdown");
var preview_preferences_1 = require("./preview-preferences");
var preview_link_normalizer_1 = require("./preview-link-normalizer");
require("../../src/browser/style/index.css");
require("../../src/browser/markdown/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    preview_preferences_1.bindPreviewPreferences(bind);
    bind(preview_handler_1.PreviewHandlerProvider).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, preview_handler_1.PreviewHandler);
    bind(markdown_1.MarkdownPreviewHandler).toSelf().inSingletonScope();
    bind(preview_handler_1.PreviewHandler).toService(markdown_1.MarkdownPreviewHandler);
    bind(preview_link_normalizer_1.PreviewLinkNormalizer).toSelf().inSingletonScope();
    bind(preview_widget_1.PreviewWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: preview_uri_1.PreviewUri.id,
        createWidget: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var container, resource, child;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            container = ctx.container;
                            return [4 /*yield*/, container.get(common_1.ResourceProvider)(new uri_1.default(options.uri))];
                        case 1:
                            resource = _a.sent();
                            child = container.createChild();
                            child.bind(preview_widget_1.PreviewWidgetOptions).toConstantValue({ resource: resource });
                            return [2 /*return*/, child.get(preview_widget_1.PreviewWidget)];
                    }
                });
            });
        }
    }); }).inSingletonScope();
    bind(preview_contribution_1.PreviewContribution).toSelf().inSingletonScope();
    [common_1.CommandContribution, common_1.MenuContribution, browser_1.OpenHandler, browser_1.FrontendApplicationContribution, tab_bar_toolbar_1.TabBarToolbarContribution].forEach(function (serviceIdentifier) {
        return bind(serviceIdentifier).toService(preview_contribution_1.PreviewContribution);
    });
});
//# sourceMappingURL=preview-frontend-module.js.map