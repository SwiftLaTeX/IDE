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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* eslint-disable @typescript-eslint/indent */
var abstract_generator_1 = require("./abstract-generator");
var fs_1 = require("fs");
var FrontendGenerator = /** @class */ (function (_super) {
    __extends(FrontendGenerator, _super);
    function FrontendGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrontendGenerator.prototype.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var frontendModules;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        frontendModules = this.pck.targetFrontendModules;
                        return [4 /*yield*/, this.write(this.pck.frontend('index.html'), this.compileIndexHtml(frontendModules))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.write(this.pck.frontend('index.js'), this.compileIndexJs(frontendModules))];
                    case 2:
                        _a.sent();
                        if (!this.pck.isElectron()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.write(this.pck.frontend('electron-main.js'), this.compileElectronMain())];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FrontendGenerator.prototype.compileIndexPreload = function (frontendModules) {
        var template = this.pck.props.generator.config.preloadTemplate;
        if (!template) {
            return '';
        }
        // Support path to html file
        if (fs_1.existsSync(template)) {
            return fs_1.readFileSync(template).toString();
        }
        return template;
    };
    FrontendGenerator.prototype.compileIndexHtml = function (frontendModules) {
        return "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>" + this.compileIndexHead(frontendModules) + "\n  <script type=\"text/javascript\" src=\"./bundle.js\" charset=\"utf-8\"></script>\n</head>\n\n<body>\n  <div class=\"theia-preload\">" + this.compileIndexPreload(frontendModules) + "</div>\n</body>\n\n</html>";
    };
    FrontendGenerator.prototype.compileIndexHead = function (frontendModules) {
        return "\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
    };
    FrontendGenerator.prototype.compileIndexJs = function (frontendModules) {
        return "// @ts-check\n" + this.ifBrowser("require('es6-promise/auto');") + "\nrequire('reflect-metadata');\nconst { Container } = require('inversify');\nconst { FrontendApplication } = require('@theia/core/lib/browser');\nconst { frontendApplicationModule } = require('@theia/core/lib/browser/frontend-application-module');\nconst { messagingFrontendModule } = require('@theia/core/lib/" + (this.pck.isBrowser()
            ? 'browser/messaging/messaging-frontend-module'
            : 'electron-browser/messaging/electron-messaging-frontend-module') + "');\nconst { loggerFrontendModule } = require('@theia/core/lib/browser/logger-frontend-module');\nconst { ThemeService } = require('@theia/core/lib/browser/theming');\nconst { FrontendApplicationConfigProvider } = require('@theia/core/lib/browser/frontend-application-config-provider');\n\nFrontendApplicationConfigProvider.set(" + this.prettyStringify(this.pck.props.frontend.config) + ");\n\nconst container = new Container();\ncontainer.load(frontendApplicationModule);\ncontainer.load(messagingFrontendModule);\ncontainer.load(loggerFrontendModule);\n\nfunction load(raw) {\n    return Promise.resolve(raw.default).then(module =>\n        container.load(module)\n    )\n}\n\nfunction start() {\n    (window['theia'] = window['theia'] ||\u00A0{}).container = container;\n\n    const themeService = ThemeService.get();\n    themeService.loadUserTheme();\n\n    const application = container.get(FrontendApplication);\n    application.start();\n}\n\nmodule.exports = Promise.resolve()" + this.compileFrontendModuleImports(frontendModules) + "\n    .then(start).catch(reason => {\n        console.error('Failed to start the frontend application.');\n        if (reason) {\n            console.error(reason);\n        }\n    });";
    };
    FrontendGenerator.prototype.compileElectronMain = function () {
        return "// @ts-check\n\n// Useful for Electron/NW.js apps as GUI apps on macOS doesn't inherit the `$PATH` define\n// in your dotfiles (.bashrc/.bash_profile/.zshrc/etc).\n// https://github.com/electron/electron/issues/550#issuecomment-162037357\n// https://github.com/eclipse-theia/theia/pull/3534#issuecomment-439689082\nrequire('fix-path')();\n\n// Workaround for https://github.com/electron/electron/issues/9225. Chrome has an issue where\n// in certain locales (e.g. PL), image metrics are wrongly computed. We explicitly set the\n// LC_NUMERIC to prevent this from happening (selects the numeric formatting category of the\n// C locale, http://en.cppreference.com/w/cpp/locale/LC_categories).\nif (process.env.LC_ALL) {\n    process.env.LC_ALL = 'C';\n}\nprocess.env.LC_NUMERIC = 'C';\n\nconst electron = require('electron');\nconst { join, resolve } = require('path');\nconst { fork } = require('child_process');\nconst { app, dialog, shell, BrowserWindow, ipcMain, Menu, globalShortcut } = electron;\n\nconst applicationName = `" + this.pck.props.frontend.config.applicationName + "`;\nconst isSingleInstance = " + (this.pck.props.backend.config.singleInstance === true ? 'true' : 'false') + ";\nconst disallowReloadKeybinding = " + (this.pck.props.frontend.config.disallowReloadKeybinding === true ? 'true' : 'false') + ";\n\nif (isSingleInstance && !app.requestSingleInstanceLock()) {\n    // There is another instance running, exit now. The other instance will request focus.\n    app.quit();\n    return;\n}\n\nconst nativeKeymap = require('native-keymap');\nconst Storage = require('electron-store');\nconst electronStore = new Storage();\n\napp.on('ready', () => {\n\n    if (disallowReloadKeybinding) {\n        globalShortcut.register('CmdOrCtrl+R', () => {});\n    }\n\n    // Explicitly set the app name to have better menu items on macOS. (\"About\", \"Hide\", and \"Quit\")\n    // See: https://github.com/electron-userland/electron-builder/issues/2468\n    app.setName(applicationName);\n\n    const { screen } = electron;\n\n    // Remove the default electron menus, waiting for the application to set its own.\n    Menu.setApplicationMenu(Menu.buildFromTemplate([{\n        role: 'help', submenu: [{ role: 'toggledevtools'}]\n    }]));\n\n    function createNewWindow(theUrl) {\n\n        // We must center by hand because `browserWindow.center()` fails on multi-screen setups\n        // See: https://github.com/electron/electron/issues/3490\n        const { bounds } = screen.getDisplayNearestPoint(screen.getCursorScreenPoint());\n        const height = Math.floor(bounds.height * (2/3));\n        const width = Math.floor(bounds.width * (2/3));\n\n        const y = Math.floor(bounds.y + (bounds.height - height) / 2);\n        const x = Math.floor(bounds.x + (bounds.width - width) / 2);\n\n        const WINDOW_STATE = 'windowstate';\n        const windowState = electronStore.get(WINDOW_STATE, {\n            width, height, x, y\n        });\n\n        let windowOptions = {\n            show: false,\n            title: applicationName,\n            width: windowState.width,\n            height: windowState.height,\n            minWidth: 200,\n            minHeight: 120,\n            x: windowState.x,\n            y: windowState.y,\n            isMaximized: windowState.isMaximized\n        };\n\n        // Always hide the window, we will show the window when it is ready to be shown in any case.\n        const newWindow = new BrowserWindow(windowOptions);\n        if (windowOptions.isMaximized) {\n            newWindow.maximize();\n        }\n        newWindow.on('ready-to-show', () => newWindow.show());\n\n        // Prevent calls to \"window.open\" from opening an ElectronBrowser window,\n        // and rather open in the OS default web browser.\n        newWindow.webContents.on('new-window', (event, url) => {\n            event.preventDefault();\n            shell.openExternal(url);\n        });\n\n        // Save the window geometry state on every change\n        const saveWindowState = () => {\n            try {\n                let bounds;\n                if (newWindow.isMaximized()) {\n                    bounds = electronStore.get(WINDOW_STATE, {});\n                } else {\n                    bounds = newWindow.getBounds();\n                }\n                electronStore.set(WINDOW_STATE, {\n                    isMaximized: newWindow.isMaximized(),\n                    width: bounds.width,\n                    height: bounds.height,\n                    x: bounds.x,\n                    y: bounds.y\n                });\n            } catch (e) {\n                console.error(\"Error while saving window state.\", e);\n            }\n        };\n        let delayedSaveTimeout;\n        const saveWindowStateDelayed = () => {\n            if (delayedSaveTimeout) {\n                clearTimeout(delayedSaveTimeout);\n            }\n            delayedSaveTimeout = setTimeout(saveWindowState, 1000);\n        };\n        newWindow.on('close', saveWindowState);\n        newWindow.on('resize', saveWindowStateDelayed);\n        newWindow.on('move', saveWindowStateDelayed);\n\n        // Fired when a beforeunload handler tries to prevent the page unloading\n        newWindow.webContents.on('will-prevent-unload', event => {\n            const preventStop = 0 !== dialog.showMessageBox(newWindow, {\n                type: 'question',\n                buttons: ['Yes', 'No'],\n                title: 'Confirm',\n                message: 'Are you sure you want to quit?',\n                detail: 'Any unsaved changes will not be saved.'\n            });\n\n            if (!preventStop) {\n                // This ignores the beforeunload callback, allowing the page to unload\n                event.preventDefault();\n            }\n        });\n\n        // Notify the renderer process on keyboard layout change\n        nativeKeymap.onDidChangeKeyboardLayout(() => {\n            if (!newWindow.isDestroyed()) {\n                const newLayout = {\n                    info: nativeKeymap.getCurrentKeyboardLayout(),\n                    mapping: nativeKeymap.getKeyMap()\n                };\n                newWindow.webContents.send('keyboardLayoutChanged', newLayout);\n            }\n        });\n\n        if (!!theUrl) {\n            newWindow.loadURL(theUrl);\n        }\n        return newWindow;\n    }\n\n    app.on('window-all-closed', () => {\n        app.quit();\n    });\n    ipcMain.on('create-new-window', (event, url) => {\n        createNewWindow(url);\n    });\n    ipcMain.on('open-external', (event, url) => {\n        shell.openExternal(url);\n    });\n\n    // Check whether we are in bundled application or development mode.\n    // @ts-ignore\n    const devMode = process.defaultApp || /node_modules[/]electron[/]/.test(process.execPath);\n    const mainWindow = createNewWindow();\n\n    if (isSingleInstance) {\n        app.on('second-instance', (event, commandLine, workingDirectory) => {\n            // Someone tried to run a second instance, we should focus our window.\n            if (mainWindow && !mainWindow.isDestroyed()) {\n                if (mainWindow.isMinimized()) {\n                    mainWindow.restore();\n                }\n                mainWindow.focus()\n            }\n        })\n    }\n\n    const loadMainWindow = (port) => {\n        if (!mainWindow.isDestroyed()) {\n            mainWindow.loadURL('file://' + join(__dirname, '../../lib/index.html') + '?port=' + port);\n        }\n    };\n\n    // We cannot use the `process.cwd()` as the application project path (the location of the `package.json` in other words)\n    // in a bundled electron application because it depends on the way we start it. For instance, on OS X, these are a differences:\n    // https://github.com/eclipse-theia/theia/issues/3297#issuecomment-439172274\n    process.env.THEIA_APP_PROJECT_PATH = resolve(__dirname, '..', '..');\n\n    // Set the electron version for both the dev and the production mode. (https://github.com/eclipse-theia/theia/issues/3254)\n    // Otherwise, the forked backend processes will not know that they're serving the electron frontend.\n    const { versions } = process;\n    // @ts-ignore\n    if (versions && typeof versions.electron !== 'undefined') {\n        // @ts-ignore\n        process.env.THEIA_ELECTRON_VERSION = versions.electron;\n    }\n\n    const mainPath = join(__dirname, '..', 'backend', 'main');\n    // We need to distinguish between bundled application and development mode when starting the clusters.\n    // See: https://github.com/electron/electron/issues/6337#issuecomment-230183287\n    if (devMode) {\n        require(mainPath).then(address => {\n            loadMainWindow(address.port);\n        }).catch((error) => {\n            console.error(error);\n            app.exit(1);\n        });\n    } else {\n        const cp = fork(mainPath, [], { env: Object.assign({}, process.env) });\n        cp.on('message', (address) => {\n            loadMainWindow(address.port);\n        });\n        cp.on('error', (error) => {\n            console.error(error);\n            app.exit(1);\n        });\n        app.on('quit', () => {\n            // If we forked the process for the clusters, we need to manually terminate it.\n            // See: https://github.com/eclipse-theia/theia/issues/835\n            process.kill(cp.pid);\n        });\n    }\n});\n";
    };
    return FrontendGenerator;
}(abstract_generator_1.AbstractGenerator));
exports.FrontendGenerator = FrontendGenerator;
//# sourceMappingURL=frontend-generator.js.map