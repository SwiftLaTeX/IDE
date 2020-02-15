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
require("../../src/browser/style/index.css");
var inversify_1 = require("inversify");
var uri_1 = require("@theia/core/lib/common/uri");
var opener_service_1 = require("@theia/core/lib/browser/opener-service");
var widget_manager_1 = require("@theia/core/lib/browser/widget-manager");
var contribution_provider_1 = require("@theia/core/lib/common/contribution-provider");
// import { WebSocketConnectionProvider } from '@theia/core/lib/browser/messaging/ws-connection-provider';
var frontend_application_1 = require("@theia/core/lib/browser/frontend-application");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
var command_1 = require("@theia/core/lib/common/command");
var menu_1 = require("@theia/core/lib/common/menu");
var mini_browser_open_handler_1 = require("./mini-browser-open-handler");
var mini_browser_service_1 = require("../common/mini-browser-service");
var mini_browser_1 = require("./mini-browser");
var mini_browser_content_1 = require("./mini-browser-content");
var location_mapper_service_1 = require("./location-mapper-service");
var mini_browser_dummy_server_1 = require("./mini-browser-dummy-server");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(mini_browser_content_1.MiniBrowserContent).toSelf();
    bind(mini_browser_content_1.MiniBrowserContentFactory).toFactory(function (context) { return function (props) {
        var container = context.container;
        var child = container.createChild();
        child.bind(mini_browser_content_1.MiniBrowserProps).toConstantValue(props);
        return child.get(mini_browser_content_1.MiniBrowserContent);
    }; });
    bind(mini_browser_1.MiniBrowser).toSelf();
    bind(widget_manager_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: mini_browser_1.MiniBrowser.ID,
        createWidget: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var container, child, uri;
                return __generator(this, function (_a) {
                    container = context.container;
                    child = container.createChild();
                    uri = new uri_1.default(options.uri);
                    child.bind(mini_browser_1.MiniBrowserOptions).toConstantValue({ uri: uri });
                    return [2 /*return*/, child.get(mini_browser_1.MiniBrowser)];
                });
            });
        }
    }); }).inSingletonScope();
    bind(mini_browser_open_handler_1.MiniBrowserOpenHandler).toSelf().inSingletonScope();
    bind(opener_service_1.OpenHandler).toService(mini_browser_open_handler_1.MiniBrowserOpenHandler);
    bind(frontend_application_1.FrontendApplicationContribution).toService(mini_browser_open_handler_1.MiniBrowserOpenHandler);
    bind(command_1.CommandContribution).toService(mini_browser_open_handler_1.MiniBrowserOpenHandler);
    bind(menu_1.MenuContribution).toService(mini_browser_open_handler_1.MiniBrowserOpenHandler);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(mini_browser_open_handler_1.MiniBrowserOpenHandler);
    contribution_provider_1.bindContributionProvider(bind, location_mapper_service_1.LocationMapper);
    bind(location_mapper_service_1.LocationMapper).to(location_mapper_service_1.FileLocationMapper).inSingletonScope();
    bind(location_mapper_service_1.LocationMapper).to(location_mapper_service_1.HttpLocationMapper).inSingletonScope();
    bind(location_mapper_service_1.LocationMapper).to(location_mapper_service_1.HttpsLocationMapper).inSingletonScope();
    bind(location_mapper_service_1.LocationWithoutSchemeMapper).toSelf().inSingletonScope();
    bind(location_mapper_service_1.LocationMapper).toService(location_mapper_service_1.LocationWithoutSchemeMapper);
    bind(location_mapper_service_1.LocationMapperService).toSelf().inSingletonScope();
    bind(mini_browser_service_1.MiniBrowserService).to(mini_browser_dummy_server_1.MiniBrowserDummyServer).inSingletonScope();
    // bind(MiniBrowserService).toDynamicValue(context => WebSocketConnectionProvider.createProxy(context.container, MiniBrowserServicePath)).inSingletonScope();
});
//# sourceMappingURL=mini-browser-frontend-module.js.map