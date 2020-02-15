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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var electron = require("electron");
var inversify_1 = require("inversify");
var common_1 = require("../../common");
var browser_1 = require("../../browser");
var electron_main_menu_factory_1 = require("./electron-main-menu-factory");
var frontend_application_state_1 = require("../../browser/frontend-application-state");
var ElectronCommands;
(function (ElectronCommands) {
    ElectronCommands.TOGGLE_DEVELOPER_TOOLS = {
        id: 'theia.toggleDevTools',
        label: 'Toggle Developer Tools'
    };
    ElectronCommands.RELOAD = {
        id: 'view.reload',
        label: 'Reload Window'
    };
    ElectronCommands.ZOOM_IN = {
        id: 'view.zoomIn',
        label: 'Zoom In'
    };
    ElectronCommands.ZOOM_OUT = {
        id: 'view.zoomOut',
        label: 'Zoom Out'
    };
    ElectronCommands.RESET_ZOOM = {
        id: 'view.resetZoom',
        label: 'Reset Zoom'
    };
    ElectronCommands.CLOSE_WINDOW = {
        id: 'close.window',
        label: 'Close Window'
    };
})(ElectronCommands = exports.ElectronCommands || (exports.ElectronCommands = {}));
var ElectronMenus;
(function (ElectronMenus) {
    ElectronMenus.VIEW_WINDOW = __spread(browser_1.CommonMenus.VIEW, ['window']);
    ElectronMenus.VIEW_ZOOM = __spread(browser_1.CommonMenus.VIEW, ['zoom']);
})(ElectronMenus = exports.ElectronMenus || (exports.ElectronMenus = {}));
(function (ElectronMenus) {
    ElectronMenus.HELP_TOGGLE = __spread(browser_1.CommonMenus.HELP, ['z_toggle']);
})(ElectronMenus = exports.ElectronMenus || (exports.ElectronMenus = {}));
(function (ElectronMenus) {
    ElectronMenus.FILE_CLOSE = __spread(browser_1.CommonMenus.FILE_CLOSE, ['window-close']);
})(ElectronMenus = exports.ElectronMenus || (exports.ElectronMenus = {}));
var ElectronMenuContribution = /** @class */ (function () {
    function ElectronMenuContribution(factory) {
        this.factory = factory;
    }
    ElectronMenuContribution.prototype.onStart = function (app) {
        var _this = this;
        this.hideTopPanel(app);
        this.setMenu();
        if (common_1.isOSX) {
            // OSX: Recreate the menus when changing windows.
            // OSX only has one menu bar for all windows, so we need to swap
            // between them as the user switches windows.
            electron.remote.getCurrentWindow().on('focus', function () { return _this.setMenu(); });
        }
        // Make sure the application menu is complete, once the frontend application is ready.
        // https://github.com/theia-ide/theia/issues/5100
        var onStateChange = undefined;
        var stateServiceListener = function (state) {
            if (state === 'ready') {
                _this.setMenu();
            }
            if (state === 'closing_window') {
                if (!!onStateChange) {
                    onStateChange.dispose();
                }
            }
        };
        onStateChange = this.stateService.onStateChanged(stateServiceListener);
    };
    /**
     * Makes the `theia-top-panel` hidden as it is unused for the electron-based application.
     * The `theia-top-panel` is used as the container of the main, application menu-bar for the
     * browser. Electron has it's own.
     * By default, this method is called on application `onStart`.
     */
    ElectronMenuContribution.prototype.hideTopPanel = function (app) {
        var itr = app.shell.children();
        var child = itr.next();
        while (child) {
            // Top panel for the menu contribution is not required for Electron.
            if (child.id === 'theia-top-panel') {
                child.setHidden(true);
                child = undefined;
            }
            else {
                child = itr.next();
            }
        }
    };
    ElectronMenuContribution.prototype.setMenu = function (menu, electronWindow) {
        if (menu === void 0) { menu = this.factory.createMenuBar(); }
        if (electronWindow === void 0) { electronWindow = electron.remote.getCurrentWindow(); }
        if (common_1.isOSX) {
            electron.remote.Menu.setApplicationMenu(menu);
        }
        else {
            // Unix/Windows: Set the per-window menus
            electronWindow.setMenu(menu);
        }
    };
    ElectronMenuContribution.prototype.registerCommands = function (registry) {
        var currentWindow = electron.remote.getCurrentWindow();
        registry.registerCommand(ElectronCommands.TOGGLE_DEVELOPER_TOOLS, {
            execute: function () {
                var webContent = electron.remote.getCurrentWebContents();
                if (!webContent.isDevToolsOpened()) {
                    webContent.openDevTools();
                }
                else {
                    webContent.closeDevTools();
                }
            }
        });
        registry.registerCommand(ElectronCommands.RELOAD, {
            execute: function () { return currentWindow.reload(); }
        });
        registry.registerCommand(ElectronCommands.CLOSE_WINDOW, {
            execute: function () { return currentWindow.close(); }
        });
        registry.registerCommand(ElectronCommands.ZOOM_IN, {
            execute: function () {
                var webContents = currentWindow.webContents;
                webContents.getZoomLevel(function (zoomLevel) {
                    return webContents.setZoomLevel(zoomLevel + 0.5);
                });
            }
        });
        registry.registerCommand(ElectronCommands.ZOOM_OUT, {
            execute: function () {
                var webContents = currentWindow.webContents;
                webContents.getZoomLevel(function (zoomLevel) {
                    return webContents.setZoomLevel(zoomLevel - 0.5);
                });
            }
        });
        registry.registerCommand(ElectronCommands.RESET_ZOOM, {
            execute: function () { return currentWindow.webContents.setZoomLevel(0); }
        });
    };
    ElectronMenuContribution.prototype.registerKeybindings = function (registry) {
        registry.registerKeybindings({
            command: ElectronCommands.TOGGLE_DEVELOPER_TOOLS.id,
            keybinding: 'ctrlcmd+alt+i'
        }, {
            command: ElectronCommands.RELOAD.id,
            keybinding: 'ctrlcmd+r'
        }, {
            command: ElectronCommands.ZOOM_IN.id,
            keybinding: 'ctrlcmd+='
        }, {
            command: ElectronCommands.ZOOM_OUT.id,
            keybinding: 'ctrlcmd+-'
        }, {
            command: ElectronCommands.RESET_ZOOM.id,
            keybinding: 'ctrlcmd+0'
        }, {
            command: ElectronCommands.CLOSE_WINDOW.id,
            keybinding: (common_1.isOSX ? 'cmd+shift+w' : (common_1.isWindows ? 'ctrl+w' : /* Linux */ 'ctrl+q'))
        });
    };
    ElectronMenuContribution.prototype.registerMenus = function (registry) {
        registry.registerMenuAction(ElectronMenus.HELP_TOGGLE, {
            commandId: ElectronCommands.TOGGLE_DEVELOPER_TOOLS.id
        });
        registry.registerMenuAction(ElectronMenus.VIEW_WINDOW, {
            commandId: ElectronCommands.RELOAD.id,
            order: 'z0'
        });
        registry.registerMenuAction(ElectronMenus.VIEW_ZOOM, {
            commandId: ElectronCommands.ZOOM_IN.id,
            order: 'z1'
        });
        registry.registerMenuAction(ElectronMenus.VIEW_ZOOM, {
            commandId: ElectronCommands.ZOOM_OUT.id,
            order: 'z2'
        });
        registry.registerMenuAction(ElectronMenus.VIEW_ZOOM, {
            commandId: ElectronCommands.RESET_ZOOM.id,
            order: 'z3'
        });
        registry.registerMenuAction(ElectronMenus.FILE_CLOSE, {
            commandId: ElectronCommands.CLOSE_WINDOW.id,
        });
    };
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], ElectronMenuContribution.prototype, "stateService", void 0);
    ElectronMenuContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(electron_main_menu_factory_1.ElectronMainMenuFactory)),
        __metadata("design:paramtypes", [electron_main_menu_factory_1.ElectronMainMenuFactory])
    ], ElectronMenuContribution);
    return ElectronMenuContribution;
}());
exports.ElectronMenuContribution = ElectronMenuContribution;
//# sourceMappingURL=electron-menu-contribution.js.map