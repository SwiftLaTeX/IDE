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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var common_1 = require("@theia/core/lib/common");
var mock_logger_1 = require("@theia/core/lib/common/test/mock-logger");
var mock_menu_1 = require("@theia/core/lib/common/test/mock-menu");
var browser_1 = require("@theia/editor/lib/browser");
var navigator_contribution_1 = require("@theia/navigator/lib/browser/navigator-contribution");
var menus_contribution_handler_1 = require("./menus-contribution-handler");
var sinon = require("sinon");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var browser_2 = require("@theia/core/lib/browser");
var plugin_shared_style_1 = require("../plugin-shared-style");
var tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
var scm_service_1 = require("@theia/scm/lib/browser/scm-service");
var resource_context_key_1 = require("@theia/core/lib/browser/resource-context-key");
disableJSDOM();
// TODO: enable tests once the https://github.com/eclipse-theia/theia/issues/3344 is fixed
describe.skip('MenusContributionHandler', function () {
    var testContainer;
    var handler;
    var notificationWarnSpy;
    var registerMenuSpy;
    var registerCmdHandlerSpy;
    var loggerWarnSpy;
    var testCommandId = 'core.about';
    before(function () {
        testContainer = new inversify_1.Container();
        var module = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
            bind(core_1.ILogger).to(mock_logger_1.MockLogger).inSingletonScope();
            bind(core_1.MessageClient).toSelf().inSingletonScope();
            bind(core_1.MessageService).toSelf().inSingletonScope();
            bind(common_1.MenuModelRegistry).toConstantValue(new mock_menu_1.MockMenuModelRegistry());
            core_1.bindContributionProvider(bind, core_1.CommandContribution);
            bind(core_1.CommandRegistry).toSelf().inSingletonScope();
            bind(context_key_service_1.ContextKeyService).toSelf().inSingletonScope();
            bind(menus_contribution_handler_1.MenusContributionPointHandler).toSelf();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            bind(browser_2.QuickCommandService).toConstantValue({}); // mock QuickCommandService
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            bind(tab_bar_toolbar_1.TabBarToolbarRegistry).toConstantValue({}); // mock TabBarToolbarRegistry
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            bind(plugin_shared_style_1.PluginSharedStyle).toConstantValue({}); // mock PluginSharedStyle
            bind(core_1.SelectionService).toSelf().inSingletonScope();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            bind(scm_service_1.ScmService).toConstantValue({}); // mock ScmService
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            bind(resource_context_key_1.ResourceContextKey).toConstantValue({}); // mock ScmService
        });
        testContainer.load(module);
    });
    beforeEach(function () {
        handler = testContainer.get(menus_contribution_handler_1.MenusContributionPointHandler);
        var logger = testContainer.get(core_1.ILogger);
        loggerWarnSpy = sinon.spy(logger, 'warn');
        var messageService = testContainer.get(core_1.MessageService);
        notificationWarnSpy = sinon.spy(messageService, 'warn');
        var menuRegistry = testContainer.get(common_1.MenuModelRegistry);
        registerMenuSpy = sinon.spy(menuRegistry, 'registerMenuAction');
        var commandRegistry = testContainer.get(core_1.CommandRegistry);
        registerCmdHandlerSpy = sinon.spy(commandRegistry, 'registerHandler');
    });
    afterEach(function () {
        notificationWarnSpy.restore();
        registerMenuSpy.restore();
        registerCmdHandlerSpy.restore();
        loggerWarnSpy.restore();
    });
    describe('should register an item in the supported menus', function () {
        it('editor context menu', function () {
            handler.handle({
                menus: {
                    'editor/context': [{
                            command: testCommandId
                        }]
                }
            });
            assertItemIsRegistered(browser_1.EDITOR_CONTEXT_MENU);
        });
        it('navigator context menu', function () {
            handler.handle({
                menus: {
                    'explorer/context': [{
                            command: testCommandId
                        }]
                }
            });
            assertItemIsRegistered(navigator_contribution_1.NAVIGATOR_CONTEXT_MENU);
        });
    });
    it('should register an item in a menu\'s group', function () {
        handler.handle({
            menus: {
                'explorer/context': [{
                        command: testCommandId,
                        group: 'navigation'
                    }]
            }
        });
        assertItemIsRegistered(navigator_contribution_1.NAVIGATOR_CONTEXT_MENU, 'navigation');
    });
    it('should register an item in a menu\'s group with a position', function () {
        handler.handle({
            menus: {
                'explorer/context': [{
                        command: testCommandId,
                        group: 'navigation@7'
                    }]
            }
        });
        assertItemIsRegistered(navigator_contribution_1.NAVIGATOR_CONTEXT_MENU, 'navigation', '7');
    });
    it('should do nothing when no \'menus\' contribution provided', function () {
        handler.handle({});
        sinon.assert.notCalled(notificationWarnSpy);
        sinon.assert.notCalled(registerMenuSpy);
        sinon.assert.notCalled(registerCmdHandlerSpy);
    });
    it('should warn when invalid menu identifier', function () {
        handler.handle({
            menus: {
                'non-existent location': [{
                        command: testCommandId
                    }]
            }
        });
        sinon.assert.called(loggerWarnSpy);
    });
    function assertItemIsRegistered(menuPath, menuGroup, order) {
        if (menuGroup === void 0) { menuGroup = ''; }
        sinon.assert.calledWithExactly(registerMenuSpy, __spread(menuPath, [menuGroup]), {
            commandId: testCommandId,
            order: order || undefined
        });
    }
});
//# sourceMappingURL=menus-contribution-handler.spec.js.map