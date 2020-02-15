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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var Xterm = require("xterm");
var fit_1 = require("xterm/lib/addons/fit/fit");
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var browser_2 = require("@theia/workspace/lib/browser");
var shell_terminal_protocol_1 = require("../common/shell-terminal-protocol");
var terminal_protocol_1 = require("../common/terminal-protocol");
var base_terminal_protocol_1 = require("../common/base-terminal-protocol");
var terminal_watcher_1 = require("../common/terminal-watcher");
var terminal_widget_1 = require("./base/terminal-widget");
var promise_util_1 = require("@theia/core/lib/common/promise-util");
var terminal_preferences_1 = require("./terminal-preferences");
var terminal_contribution_1 = require("./terminal-contribution");
var uri_1 = require("@theia/core/lib/common/uri");
var terminal_service_1 = require("./base/terminal-service");
var terminal_copy_on_selection_handler_1 = require("./terminal-copy-on-selection-handler");
var terminal_theme_service_1 = require("./terminal-theme-service");
exports.TERMINAL_WIDGET_FACTORY_ID = 'terminal';
var TerminalWidgetImpl = /** @class */ (function (_super) {
    __extends(TerminalWidgetImpl, _super);
    function TerminalWidgetImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TERMINAL = 'Terminal';
        _this.onTermDidClose = new core_1.Emitter();
        _this.terminalId = -1;
        _this.restored = false;
        _this.closeOnDispose = true;
        _this.onDidOpenEmitter = new core_1.Emitter();
        _this.onDidOpen = _this.onDidOpenEmitter.event;
        _this.toDisposeOnConnect = new core_1.DisposableCollection();
        _this.needsResize = true;
        // Device status code emitted by Xterm.js
        // Check: https://github.com/xtermjs/xterm.js/blob/release/3.14/src/InputHandler.ts#L1055-L1082
        _this.deviceStatusCodes = new Set(['\u001B[>0;276;0c', '\u001B[>85;95;0c', '\u001B[>83;40003;0c', '\u001B[?1;2c', '\u001B[?6c']);
        _this.termOpened = false;
        _this.initialData = '';
        return _this;
    }
    TerminalWidgetImpl.prototype.init = function () {
        var e_1, _a;
        var _this = this;
        this.title.caption = this.options.title || this.TERMINAL;
        this.title.label = this.options.title || this.TERMINAL;
        this.title.iconClass = 'fa fa-terminal';
        if (this.options.destroyTermOnClose === true) {
            this.toDispose.push(core_1.Disposable.create(function () {
                return _this.term.dispose();
            }));
        }
        this.title.closable = true;
        this.addClass('terminal-container');
        this.term = new Xterm.Terminal({
            experimentalCharAtlas: 'dynamic',
            cursorBlink: false,
            fontFamily: this.preferences['terminal.integrated.fontFamily'],
            fontSize: this.preferences['terminal.integrated.fontSize'],
            fontWeight: this.preferences['terminal.integrated.fontWeight'],
            fontWeightBold: this.preferences['terminal.integrated.fontWeightBold'],
            letterSpacing: this.preferences['terminal.integrated.letterSpacing'],
            lineHeight: this.preferences['terminal.integrated.lineHeight'],
            scrollback: this.preferences['terminal.integrated.scrollback'],
            rendererType: this.getTerminalRendererType(this.preferences['terminal.integrated.rendererType']),
            theme: this.themeService.theme
        });
        this.hoverMessage = document.createElement('div');
        this.hoverMessage.textContent = 'Cmd + click to follow link';
        this.hoverMessage.style.position = 'fixed';
        // TODO use `var(--theia-editorHoverWidget-foreground) with a newer Monaco version
        this.hoverMessage.style.color = 'var(--theia-editorWidget-foreground)';
        this.hoverMessage.style.backgroundColor = 'var(--theia-editorHoverWidget-background)';
        this.hoverMessage.style.borderColor = 'var(--theia-editorHoverWidget-border)';
        this.hoverMessage.style.borderWidth = '0.5px';
        this.hoverMessage.style.borderStyle = 'solid';
        this.hoverMessage.style.padding = '5px';
        // Above the xterm.js canvas layers:
        // https://github.com/xtermjs/xterm.js/blob/ff790236c1b205469f17a21246141f512d844295/src/renderer/Renderer.ts#L41-L46
        this.hoverMessage.style.zIndex = '10';
        // Initially invisible:
        this.hoverMessage.style.display = 'none';
        this.node.appendChild(this.hoverMessage);
        this.toDispose.push(this.preferences.onPreferenceChanged(function (change) {
            var lastSeparator = change.preferenceName.lastIndexOf('.');
            if (lastSeparator > 0) {
                var preferenceName = change.preferenceName.substr(lastSeparator + 1);
                var preferenceValue = _this.preferences[change.preferenceName];
                if (preferenceName === 'rendererType') {
                    var newRendererType = _this.preferences[change.preferenceName];
                    if (newRendererType !== _this.getTerminalRendererType(newRendererType)) {
                        // given terminal renderer type is not supported or invalid
                        preferenceValue = terminal_preferences_1.DEFAULT_TERMINAL_RENDERER_TYPE;
                    }
                }
                _this.term.setOption(preferenceName, preferenceValue);
                _this.needsResize = true;
                _this.update();
            }
        }));
        this.toDispose.push(this.themeService.onDidChange(function () { return _this.term.setOption('theme', _this.themeService.theme); }));
        this.attachCustomKeyEventHandler();
        var titleChangeListenerDispose = this.term.onTitleChange(function (title) {
            if (_this.options.useServerTitle) {
                _this.title.label = title;
            }
        });
        this.toDispose.push(titleChangeListenerDispose);
        this.toDispose.push(this.terminalWatcher.onTerminalError(function (_a) {
            var terminalId = _a.terminalId, error = _a.error;
            if (terminalId === _this.terminalId) {
                _this.dispose();
                _this.onTermDidClose.fire(_this);
                _this.onTermDidClose.dispose();
                _this.logger.error("The terminal process terminated. Cause: " + error);
            }
        }));
        this.toDispose.push(this.terminalWatcher.onTerminalExit(function (_a) {
            var terminalId = _a.terminalId;
            if (terminalId === _this.terminalId) {
                _this.dispose();
                _this.onTermDidClose.fire(_this);
                _this.onTermDidClose.dispose();
            }
        }));
        this.toDispose.push(this.toDisposeOnConnect);
        this.toDispose.push(this.shellTerminalServer.onDidCloseConnection(function () {
            var disposable = _this.shellTerminalServer.onDidOpenConnection(function () {
                disposable.dispose();
                _this.reconnectTerminalProcess();
            });
            _this.toDispose.push(disposable);
        }));
        this.toDispose.push(this.onTermDidClose);
        this.toDispose.push(this.onDidOpenEmitter);
        var touchEndListener = function (event) {
            if (_this.node.contains(event.target)) {
                _this.lastTouchEnd = event;
            }
        };
        document.addEventListener('touchend', touchEndListener, { passive: true });
        this.onDispose(function () {
            document.removeEventListener('touchend', touchEndListener);
        });
        this.toDispose.push(this.term.onSelectionChange(function () {
            if (_this.copyOnSelection) {
                _this.copyOnSelectionHandler.copy(_this.term.getSelection());
            }
        }));
        try {
            for (var _b = __values(this.terminalContributionProvider.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                contribution.onCreate(this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Returns given renderer type if it is valid and supported or default renderer otherwise.
     *
     * @param terminalRendererType desired terminal renderer type
     */
    TerminalWidgetImpl.prototype.getTerminalRendererType = function (terminalRendererType) {
        if (terminalRendererType && terminal_preferences_1.isTerminalRendererType(terminalRendererType)) {
            return terminalRendererType;
        }
        return terminal_preferences_1.DEFAULT_TERMINAL_RENDERER_TYPE;
    };
    TerminalWidgetImpl.prototype.showHoverMessage = function (x, y, message) {
        this.hoverMessage.innerText = message;
        this.hoverMessage.style.display = 'inline';
        this.hoverMessage.style.top = y - 30 + "px";
        this.hoverMessage.style.left = x - 60 + "px";
    };
    TerminalWidgetImpl.prototype.hideHover = function () {
        this.hoverMessage.style.display = 'none';
    };
    TerminalWidgetImpl.prototype.getTerminal = function () {
        return this.term;
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "cwd", {
        get: function () {
            if (!base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)) {
                return Promise.reject(new Error('terminal is not started'));
            }
            if (this.terminalService.getById(this.id)) {
                return this.shellTerminalServer.getCwdURI(this.terminalId)
                    .then(function (cwdUrl) { return new uri_1.default(cwdUrl); });
            }
            return Promise.resolve(new uri_1.default());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "processId", {
        get: function () {
            if (!base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)) {
                return Promise.reject(new Error('terminal is not started'));
            }
            return this.shellTerminalServer.getProcessId(this.terminalId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "lastTouchEndEvent", {
        get: function () {
            return this.lastTouchEnd;
        },
        enumerable: true,
        configurable: true
    });
    TerminalWidgetImpl.prototype.onDispose = function (onDispose) {
        this.toDispose.push(core_1.Disposable.create(onDispose));
    };
    TerminalWidgetImpl.prototype.clearOutput = function () {
        this.term.clear();
    };
    TerminalWidgetImpl.prototype.hasChildProcesses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.shellTerminalServer).hasChildProcesses;
                        return [4 /*yield*/, this.processId];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.storeState = function () {
        this.closeOnDispose = false;
        return { terminalId: this.terminalId, titleLabel: this.title.label };
    };
    TerminalWidgetImpl.prototype.restoreState = function (oldState) {
        if (this.restored === false) {
            var state = oldState;
            /* This is a workaround to issue #879 */
            this.restored = true;
            this.title.label = state.titleLabel;
            this.start(state.terminalId);
        }
    };
    /**
     * Create a new shell terminal in the back-end and attach it to a
     * new terminal widget.
     * If id is provided attach to the terminal for this id.
     */
    TerminalWidgetImpl.prototype.start = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        if (!(typeof id !== 'number')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createTerminal()];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.attachTerminal(id)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4:
                        _a.terminalId = _b;
                        this.resizeTerminalProcess();
                        this.connectTerminalProcess();
                        if (base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)) {
                            this.onDidOpenEmitter.fire(undefined);
                            return [2 /*return*/, this.terminalId];
                        }
                        throw new Error('Failed to start terminal' + (id ? " for id: " + id + "." : '.'));
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.attachTerminal = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var terminalId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shellTerminalServer.attach(id)];
                    case 1:
                        terminalId = _a.sent();
                        if (base_terminal_protocol_1.IBaseTerminalServer.validateId(terminalId)) {
                            return [2 /*return*/, terminalId];
                        }
                        this.logger.error("Error attaching to terminal id " + id + ", the terminal is most likely gone. Starting up a new terminal instead.");
                        return [2 /*return*/, this.createTerminal()];
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.createTerminal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rootURI, root, _a, cols, rows, terminalId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        rootURI = this.options.cwd;
                        if (!!rootURI) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        root = (_b.sent())[0];
                        rootURI = root && root.uri;
                        _b.label = 2;
                    case 2:
                        _a = this.term, cols = _a.cols, rows = _a.rows;
                        return [4 /*yield*/, this.shellTerminalServer.create({
                                shell: this.options.shellPath,
                                args: this.options.shellArgs,
                                env: this.options.env,
                                rootURI: rootURI,
                                cols: cols,
                                rows: rows
                            })];
                    case 3:
                        terminalId = _b.sent();
                        if (base_terminal_protocol_1.IBaseTerminalServer.validateId(terminalId)) {
                            return [2 /*return*/, terminalId];
                        }
                        throw new Error('Error creating terminal widget, see the backend error log for more information.');
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.processMessage = function (msg) {
        _super.prototype.processMessage.call(this, msg);
        switch (msg.type) {
            case 'fit-request':
                this.onFitRequest(msg);
                break;
            default:
                break;
        }
    };
    TerminalWidgetImpl.prototype.onFitRequest = function (msg) {
        _super.prototype.onFitRequest.call(this, msg);
        browser_1.MessageLoop.sendMessage(this, browser_1.Widget.ResizeMessage.UnknownSize);
    };
    TerminalWidgetImpl.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.term.focus();
    };
    TerminalWidgetImpl.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.update();
    };
    TerminalWidgetImpl.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        this.update();
    };
    TerminalWidgetImpl.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        this.needsResize = true;
        this.update();
    };
    TerminalWidgetImpl.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        if (!this.isVisible || !this.isAttached) {
            return;
        }
        this.open();
        if (this.needsResize) {
            this.resizeTerminal();
            this.needsResize = false;
            this.resizeTerminalProcess();
        }
    };
    TerminalWidgetImpl.prototype.connectTerminalProcess = function () {
        var _this = this;
        if (typeof this.terminalId !== 'number') {
            return;
        }
        this.toDisposeOnConnect.dispose();
        this.toDispose.push(this.toDisposeOnConnect);
        this.term.reset();
        var waitForConnection = this.waitForConnection = new promise_util_1.Deferred();
        this.webSocketConnectionProvider.listen({
            path: terminal_protocol_1.terminalsPath + "/" + this.terminalId,
            onConnection: function (connection) {
                connection.onNotification('onData', function (data) { return _this.write(data); });
                // Excludes the device status code emitted by Xterm.js
                var sendData = function (data) {
                    if (data && !_this.deviceStatusCodes.has(data)) {
                        return connection.sendRequest('write', data);
                    }
                };
                var disposable = _this.term.onData(sendData);
                connection.onDispose(function () { return disposable.dispose(); });
                _this.toDisposeOnConnect.push(connection);
                connection.listen();
                if (waitForConnection) {
                    waitForConnection.resolve(connection);
                }
            }
        }, { reconnecting: false });
    };
    TerminalWidgetImpl.prototype.reconnectTerminalProcess = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this.terminalId === 'number')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.start(this.terminalId)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.open = function () {
        if (this.termOpened) {
            return;
        }
        this.term.open(this.node);
        if (this.initialData) {
            this.term.write(this.initialData);
        }
        this.termOpened = true;
        this.initialData = '';
        if (browser_1.isFirefox) {
            // The software scrollbars don't work with xterm.js, so we disable the scrollbar if we are on firefox.
            this.term.element.children.item(0).style.overflow = 'hidden';
        }
    };
    TerminalWidgetImpl.prototype.write = function (data) {
        if (this.termOpened) {
            this.term.write(data);
        }
        else {
            this.initialData += data;
        }
    };
    TerminalWidgetImpl.prototype.sendText = function (text) {
        if (this.waitForConnection) {
            this.waitForConnection.promise.then(function (connection) {
                return connection.sendRequest('write', text);
            });
        }
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "onTerminalDidClose", {
        get: function () {
            return this.onTermDidClose.event;
        },
        enumerable: true,
        configurable: true
    });
    TerminalWidgetImpl.prototype.dispose = function () {
        /* Close the backend terminal only when explicitly closing the terminal
         * a refresh for example won't close it.  */
        if (this.closeOnDispose === true && typeof this.terminalId === 'number') {
            this.shellTerminalServer.close(this.terminalId);
            this.onTermDidClose.fire(this);
            this.onTermDidClose.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    TerminalWidgetImpl.prototype.resizeTerminal = function () {
        var geo = fit_1.proposeGeometry(this.term);
        var cols = geo.cols;
        var rows = geo.rows - 1; // subtract one row for margin
        this.term.resize(cols, rows);
    };
    TerminalWidgetImpl.prototype.resizeTerminalProcess = function () {
        if (!base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)
            && !this.terminalService.getById(this.id)) {
            return;
        }
        var _a = this.term, cols = _a.cols, rows = _a.rows;
        this.shellTerminalServer.resize(this.terminalId, cols, rows);
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "enableCopy", {
        get: function () {
            return this.preferences['terminal.enableCopy'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "enablePaste", {
        get: function () {
            return this.preferences['terminal.enablePaste'];
        },
        enumerable: true,
        configurable: true
    });
    TerminalWidgetImpl.prototype.customKeyHandler = function (event) {
        var keyBindings = browser_1.KeyCode.createKeyCode(event).toString();
        var ctrlCmdCopy = (common_1.isOSX && keyBindings === 'meta+c') || (!common_1.isOSX && keyBindings === 'ctrl+c');
        var ctrlCmdPaste = (common_1.isOSX && keyBindings === 'meta+v') || (!common_1.isOSX && keyBindings === 'ctrl+v');
        if (ctrlCmdCopy && this.enableCopy && this.term.hasSelection()) {
            return false;
        }
        if (ctrlCmdPaste && this.enablePaste) {
            return false;
        }
        return true;
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "copyOnSelection", {
        get: function () {
            return this.preferences['terminal.integrated.copyOnSelection'];
        },
        enumerable: true,
        configurable: true
    });
    TerminalWidgetImpl.prototype.attachCustomKeyEventHandler = function () {
        var _this = this;
        this.term.attachCustomKeyEventHandler(function (e) { return _this.customKeyHandler(e); });
    };
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], TerminalWidgetImpl.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WebSocketConnectionProvider),
        __metadata("design:type", browser_1.WebSocketConnectionProvider)
    ], TerminalWidgetImpl.prototype, "webSocketConnectionProvider", void 0);
    __decorate([
        inversify_1.inject(terminal_widget_1.TerminalWidgetOptions),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(shell_terminal_protocol_1.ShellTerminalServerProxy),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "shellTerminalServer", void 0);
    __decorate([
        inversify_1.inject(terminal_watcher_1.TerminalWatcher),
        __metadata("design:type", terminal_watcher_1.TerminalWatcher)
    ], TerminalWidgetImpl.prototype, "terminalWatcher", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger), inversify_1.named('terminal'),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject('terminal-dom-id'),
        __metadata("design:type", String)
    ], TerminalWidgetImpl.prototype, "id", void 0);
    __decorate([
        inversify_1.inject(terminal_preferences_1.TerminalPreferences),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(core_1.ContributionProvider), inversify_1.named(terminal_contribution_1.TerminalContribution),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "terminalContributionProvider", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(terminal_copy_on_selection_handler_1.TerminalCopyOnSelectionHandler),
        __metadata("design:type", terminal_copy_on_selection_handler_1.TerminalCopyOnSelectionHandler)
    ], TerminalWidgetImpl.prototype, "copyOnSelectionHandler", void 0);
    __decorate([
        inversify_1.inject(terminal_theme_service_1.TerminalThemeService),
        __metadata("design:type", terminal_theme_service_1.TerminalThemeService)
    ], TerminalWidgetImpl.prototype, "themeService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalWidgetImpl.prototype, "init", null);
    TerminalWidgetImpl = __decorate([
        inversify_1.injectable()
    ], TerminalWidgetImpl);
    return TerminalWidgetImpl;
}(terminal_widget_1.TerminalWidget));
exports.TerminalWidgetImpl = TerminalWidgetImpl;
//# sourceMappingURL=terminal-widget-impl.js.map