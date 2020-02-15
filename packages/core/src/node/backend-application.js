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
var path = require("path");
var http = require("http");
var https = require("https");
var express = require("express");
var fs = require("fs-extra");
var inversify_1 = require("inversify");
var common_1 = require("../common");
var promise_util_1 = require("../common/promise-util");
var index_1 = require("../common/index");
var application_package_1 = require("@theia/application-package");
exports.BackendApplicationContribution = Symbol('BackendApplicationContribution');
var defaultPort = index_1.environment.electron.is() ? 0 : 3000;
var defaultHost = 'localhost';
var defaultSSL = false;
var appProjectPath = 'app-project-path';
var BackendApplicationCliContribution = /** @class */ (function () {
    function BackendApplicationCliContribution() {
    }
    BackendApplicationCliContribution.prototype.configure = function (conf) {
        conf.option('port', { alias: 'p', description: 'The port the backend server listens on.', type: 'number', default: defaultPort });
        conf.option('hostname', { alias: 'h', description: 'The allowed hostname for connections.', type: 'string', default: defaultHost });
        conf.option('ssl', { description: 'Use SSL (HTTPS), cert and certkey must also be set', type: 'boolean', default: defaultSSL });
        conf.option('cert', { description: 'Path to SSL certificate.', type: 'string' });
        conf.option('certkey', { description: 'Path to SSL certificate key.', type: 'string' });
        conf.option(appProjectPath, { description: 'Sets the application project directory', default: this.appProjectPath() });
    };
    BackendApplicationCliContribution.prototype.setArguments = function (args) {
        this.port = args.port;
        this.hostname = args.hostname;
        this.ssl = args.ssl;
        this.cert = args.cert;
        this.certkey = args.certkey;
        this.projectPath = args[appProjectPath];
    };
    BackendApplicationCliContribution.prototype.appProjectPath = function () {
        if (index_1.environment.electron.is()) {
            if (process.env.THEIA_APP_PROJECT_PATH) {
                return process.env.THEIA_APP_PROJECT_PATH;
            }
            throw new Error('The \'THEIA_APP_PROJECT_PATH\' environment variable must be set when running in electron.');
        }
        return process.cwd();
    };
    BackendApplicationCliContribution = __decorate([
        inversify_1.injectable()
    ], BackendApplicationCliContribution);
    return BackendApplicationCliContribution;
}());
exports.BackendApplicationCliContribution = BackendApplicationCliContribution;
/**
 * The main entry point for Theia applications.
 */
var BackendApplication = /** @class */ (function () {
    function BackendApplication(contributionsProvider, cliParams, logger) {
        var e_1, _a;
        var _this = this;
        this.contributionsProvider = contributionsProvider;
        this.cliParams = cliParams;
        this.logger = logger;
        this.app = express();
        process.on('uncaughtException', function (error) {
            if (error) {
                logger.error('Uncaught Exception: ', error.toString());
                if (error.stack) {
                    logger.error(error.stack);
                }
            }
        });
        // Handles normal process termination.
        process.on('exit', function () { return _this.onStop(); });
        // Handles `Ctrl+C`.
        process.on('SIGINT', function () { return process.exit(0); });
        // Handles `kill pid`.
        process.on('SIGTERM', function () { return process.exit(0); });
        try {
            for (var _b = __values(this.contributionsProvider.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                if (contribution.initialize) {
                    try {
                        contribution.initialize();
                    }
                    catch (error) {
                        this.logger.error('Could not initialize contribution', error);
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
    }
    BackendApplication.prototype.init = function () {
        var e_2, _a;
        this.app.get('*.js', this.serveGzipped.bind(this, 'text/javascript'));
        this.app.get('*.js.map', this.serveGzipped.bind(this, 'application/json'));
        this.app.get('*.css', this.serveGzipped.bind(this, 'text/css'));
        this.app.get('*.wasm', this.serveGzipped.bind(this, 'application/wasm'));
        this.app.get('*.gif', this.serveGzipped.bind(this, 'image/gif'));
        this.app.get('*.png', this.serveGzipped.bind(this, 'image/png'));
        this.app.get('*.svg', this.serveGzipped.bind(this, 'image/svg+xml'));
        try {
            for (var _b = __values(this.contributionsProvider.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                if (contribution.configure) {
                    try {
                        contribution.configure(this.app);
                    }
                    catch (error) {
                        this.logger.error('Could not configure contribution', error);
                    }
                }
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
    BackendApplication.prototype.use = function () {
        var _a;
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        (_a = this.app).use.apply(_a, __spread(handlers));
    };
    BackendApplication.prototype.start = function (aPort, aHostname) {
        return __awaiter(this, void 0, void 0, function () {
            var hostname, port, deferred, server, key, cert, err_1, err_2, _a, _b, contrib, error_1, e_3_1;
            var e_3, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        hostname = aHostname !== undefined ? aHostname : this.cliParams.hostname;
                        port = aPort !== undefined ? aPort : this.cliParams.port;
                        deferred = new promise_util_1.Deferred();
                        if (!this.cliParams.ssl) return [3 /*break*/, 10];
                        if (this.cliParams.cert === undefined) {
                            throw new Error('Missing --cert option, see --help for usage');
                        }
                        if (this.cliParams.certkey === undefined) {
                            throw new Error('Missing --certkey option, see --help for usage');
                        }
                        key = void 0;
                        cert = void 0;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, fs.readFile(this.cliParams.certkey)];
                    case 2:
                        key = _d.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _d.sent();
                        return [4 /*yield*/, this.logger.error("Can't read certificate key")];
                    case 4:
                        _d.sent();
                        throw err_1;
                    case 5:
                        _d.trys.push([5, 7, , 9]);
                        return [4 /*yield*/, fs.readFile(this.cliParams.cert)];
                    case 6:
                        cert = _d.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        err_2 = _d.sent();
                        return [4 /*yield*/, this.logger.error("Can't read certificate")];
                    case 8:
                        _d.sent();
                        throw err_2;
                    case 9:
                        server = https.createServer({ key: key, cert: cert }, this.app);
                        return [3 /*break*/, 11];
                    case 10:
                        server = http.createServer(this.app);
                        _d.label = 11;
                    case 11:
                        server.on('error', function (error) {
                            deferred.reject(error);
                            /* The backend might run in a separate process,
                             * so we defer `process.exit` to let time for logging in the parent process */
                            setTimeout(process.exit, 0, 1);
                        });
                        server.listen(port, hostname, function () {
                            var scheme = _this.cliParams.ssl ? 'https' : 'http';
                            _this.logger.info("Theia app listening on " + scheme + "://" + (hostname || 'localhost') + ":" + server.address().port + ".");
                            deferred.resolve(server);
                        });
                        /* Allow any number of websocket servers.  */
                        server.setMaxListeners(0);
                        _d.label = 12;
                    case 12:
                        _d.trys.push([12, 19, 20, 21]);
                        _a = __values(this.contributionsProvider.getContributions()), _b = _a.next();
                        _d.label = 13;
                    case 13:
                        if (!!_b.done) return [3 /*break*/, 18];
                        contrib = _b.value;
                        if (!contrib.onStart) return [3 /*break*/, 17];
                        _d.label = 14;
                    case 14:
                        _d.trys.push([14, 16, , 17]);
                        return [4 /*yield*/, contrib.onStart(server)];
                    case 15:
                        _d.sent();
                        return [3 /*break*/, 17];
                    case 16:
                        error_1 = _d.sent();
                        this.logger.error('Could not start contribution', error_1);
                        return [3 /*break*/, 17];
                    case 17:
                        _b = _a.next();
                        return [3 /*break*/, 13];
                    case 18: return [3 /*break*/, 21];
                    case 19:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 21];
                    case 20:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 21: return [2 /*return*/, deferred.promise];
                }
            });
        });
    };
    BackendApplication.prototype.onStop = function () {
        var e_4, _a;
        try {
            for (var _b = __values(this.contributionsProvider.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contrib = _c.value;
                if (contrib.onStop) {
                    try {
                        contrib.onStop(this.app);
                    }
                    catch (error) {
                        this.logger.error('Could not stop contribution', error);
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    BackendApplication.prototype.serveGzipped = function (contentType, req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var acceptedEncodings, gzUrl, gzPath, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        acceptedEncodings = req.acceptsEncodings();
                        gzUrl = req.url + ".gz";
                        gzPath = path.join(this.applicationPackage.projectPath, 'lib', gzUrl);
                        _a = acceptedEncodings.indexOf('gzip') === -1;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, fs.pathExists(gzPath)];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            next();
                            return [2 /*return*/];
                        }
                        req.url = gzUrl;
                        res.set('Content-Encoding', 'gzip');
                        res.set('Content-Type', contentType);
                        next();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(application_package_1.ApplicationPackage),
        __metadata("design:type", application_package_1.ApplicationPackage)
    ], BackendApplication.prototype, "applicationPackage", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BackendApplication.prototype, "init", null);
    BackendApplication = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.ContributionProvider)), __param(0, inversify_1.named(exports.BackendApplicationContribution)),
        __param(1, inversify_1.inject(BackendApplicationCliContribution)),
        __param(2, inversify_1.inject(common_1.ILogger)),
        __metadata("design:paramtypes", [Object, BackendApplicationCliContribution, Object])
    ], BackendApplication);
    return BackendApplication;
}());
exports.BackendApplication = BackendApplication;
//# sourceMappingURL=backend-application.js.map