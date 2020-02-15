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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var os = require("os");
var path = require("path");
var glob = require("glob");
var net_1 = require("net");
var inversify_1 = require("inversify");
var vscode_ws_jsonrpc_1 = require("vscode-ws-jsonrpc");
var vscode_languageserver_protocol_1 = require("vscode-languageserver-protocol");
var server_1 = require("vscode-ws-jsonrpc/lib/server");
var node_1 = require("@theia/core/lib/node");
var node_2 = require("@theia/languages/lib/node");
var common_1 = require("../common");
var java_cli_contribution_1 = require("./java-cli-contribution");
var core_1 = require("@theia/core");
var java_extension_model_1 = require("./java-extension-model");
var sha1 = require('sha1');
exports.configurations = new Map();
exports.configurations.set('darwin', 'config_mac');
exports.configurations.set('win32', 'config_win');
exports.configurations.set('linux', 'config_linux');
var JavaContribution = /** @class */ (function (_super) {
    __extends(JavaContribution, _super);
    function JavaContribution(cli, contributions) {
        var _this = _super.call(this) || this;
        _this.cli = cli;
        _this.contributions = contributions;
        _this.id = common_1.JAVA_LANGUAGE_ID;
        _this.name = common_1.JAVA_LANGUAGE_NAME;
        _this.javaBundles = [];
        _this.activeDataFolders = new Set();
        _this.ready = _this.collectExtensionBundles();
        return _this;
    }
    JavaContribution.prototype.collectExtensionBundles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, contrib, javaBundles, e_1, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, 8, 9]);
                        _a = __values(this.contributions.getContributions()), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 6];
                        contrib = _b.value;
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, contrib.getExtensionBundles()];
                    case 3:
                        javaBundles = _d.sent();
                        this.javaBundles = this.javaBundles.concat(javaBundles);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _d.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    JavaContribution.prototype.start = function (clientConnection, _a) {
        var parameters = _a.parameters;
        return __awaiter(this, void 0, void 0, function () {
            var socketPort, debugSocket_1, debugConnection, serverPath, jarPaths, jarPath, workspaceUri, dataFolderSuffix, workspacePath, configuration, configurationPath, command, args, server, socket, env, address, serverConnection;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _b.sent();
                        socketPort = this.cli.lsPort();
                        // Only if the JDT LS has been started in debug mode.
                        if (socketPort) {
                            debugSocket_1 = new net_1.Socket();
                            debugConnection = server_1.createSocketConnection(debugSocket_1, debugSocket_1, function () { return debugSocket_1.destroy(); });
                            this.forward(clientConnection, debugConnection);
                            debugSocket_1.connect(socketPort);
                            return [2 /*return*/];
                        }
                        serverPath = path.resolve(__dirname, '..', '..', 'server');
                        jarPaths = glob.sync('**/plugins/org.eclipse.equinox.launcher_*.jar', { cwd: serverPath });
                        if (jarPaths.length === 0) {
                            throw new Error('The Java server launcher is not found.');
                        }
                        jarPath = path.resolve(serverPath, jarPaths[0]);
                        if (!parameters || !parameters.workspace) {
                            workspaceUri = 'default';
                        }
                        else {
                            workspaceUri = parameters.workspace;
                        }
                        dataFolderSuffix = this.generateDataFolderSuffix(workspaceUri);
                        this.activeDataFolders.add(dataFolderSuffix);
                        clientConnection.onClose(function () { return _this.activeDataFolders.delete(dataFolderSuffix); });
                        workspacePath = path.resolve(os.homedir(), '.theia', 'jdt.ls', '_ws_' + dataFolderSuffix);
                        configuration = exports.configurations.get(process.platform);
                        if (!configuration) {
                            throw new Error('Cannot find Java server configuration for ' + process.platform);
                        }
                        configurationPath = path.resolve(serverPath, configuration);
                        command = 'java';
                        args = [];
                        if (parameters && parameters.jvmArgs) {
                            parameters.jvmArgs.map(function (jvmArg) { return args.push(jvmArg); });
                        }
                        if (node_1.DEBUG_MODE) {
                            args.push('-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=1044');
                        }
                        args.push.apply(args, __spread([
                            '-Declipse.application=org.eclipse.jdt.ls.core.id1',
                            '-Dosgi.bundles.defaultStartLevel=4',
                            '-Declipse.product=org.eclipse.jdt.ls.core.product'
                        ]));
                        if (node_1.DEBUG_MODE) {
                            args.push('-Dlog.level=ALL');
                        }
                        args.push('-jar', jarPath, '-configuration', configurationPath, '-data', workspacePath);
                        return [4 /*yield*/, this.startSocketServer()];
                    case 2:
                        server = _b.sent();
                        socket = this.accept(server);
                        this.logInfo('logs at ' + path.resolve(workspacePath, '.metadata', '.log'));
                        env = Object.create(process.env);
                        address = server.address();
                        env.CLIENT_HOST = address.address;
                        env.CLIENT_PORT = address.port;
                        return [4 /*yield*/, this.createProcessSocketConnection(socket, socket, command, args, { env: env })];
                    case 3:
                        serverConnection = _b.sent();
                        this.forward(clientConnection, serverConnection);
                        return [2 /*return*/];
                }
            });
        });
    };
    JavaContribution.prototype.generateDataFolderSuffix = function (workspaceUri) {
        var shaValue = sha1(workspaceUri);
        var instanceCounter = 0;
        var dataFolderName = shaValue + '_' + instanceCounter;
        while (this.activeDataFolders.has(dataFolderName)) {
            instanceCounter++;
            dataFolderName = shaValue + '_' + instanceCounter;
        }
        return dataFolderName;
    };
    JavaContribution.prototype.map = function (message) {
        if (vscode_ws_jsonrpc_1.isRequestMessage(message)) {
            if (message.method === vscode_languageserver_protocol_1.InitializeRequest.type.method) {
                var initializeParams = message.params;
                var initializeOptions = initializeParams.initializationOptions;
                initializeOptions.bundles = this.javaBundles;
            }
        }
        return _super.prototype.map.call(this, message);
    };
    JavaContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(java_cli_contribution_1.JavaCliContribution)),
        __param(1, inversify_1.inject(core_1.ContributionProvider)), __param(1, inversify_1.named(java_extension_model_1.JavaExtensionContribution)),
        __metadata("design:paramtypes", [java_cli_contribution_1.JavaCliContribution, Object])
    ], JavaContribution);
    return JavaContribution;
}(node_2.BaseLanguageServerContribution));
exports.JavaContribution = JavaContribution;
//# sourceMappingURL=java-contribution.js.map