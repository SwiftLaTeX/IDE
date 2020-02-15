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
var uri_1 = require("@theia/core/lib/common/uri");
var vscode_uri_1 = require("vscode-uri");
var DebugSourceData = /** @class */ (function () {
    function DebugSourceData() {
    }
    return DebugSourceData;
}());
exports.DebugSourceData = DebugSourceData;
var DebugSource = /** @class */ (function (_super) {
    __extends(DebugSource, _super);
    function DebugSource(session, editorManager, labelProvider) {
        var _this = _super.call(this) || this;
        _this.session = session;
        _this.editorManager = editorManager;
        _this.labelProvider = labelProvider;
        return _this;
    }
    Object.defineProperty(DebugSource.prototype, "uri", {
        get: function () {
            return DebugSource.toUri(this.raw);
        },
        enumerable: true,
        configurable: true
    });
    DebugSource.prototype.update = function (data) {
        Object.assign(this, data);
    };
    DebugSource.prototype.open = function (options) {
        return this.editorManager.open(this.uri, options);
    };
    DebugSource.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var source, sourceReference, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        source = this.raw;
                        sourceReference = source.sourceReference;
                        return [4 /*yield*/, this.session.sendRequest('source', {
                                sourceReference: sourceReference,
                                source: source
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body.content];
                }
            });
        });
    };
    Object.defineProperty(DebugSource.prototype, "inMemory", {
        get: function () {
            return this.uri.scheme === DebugSource.SCHEME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSource.prototype, "name", {
        get: function () {
            if (this.inMemory) {
                return this.raw.name || this.uri.path.base || this.uri.path.toString();
            }
            return this.labelProvider.getName(this.uri);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugSource.prototype, "longName", {
        get: function () {
            if (this.inMemory) {
                return this.name;
            }
            return this.labelProvider.getLongName(this.uri);
        },
        enumerable: true,
        configurable: true
    });
    DebugSource.toUri = function (raw) {
        if (raw.sourceReference && raw.sourceReference > 0) {
            return new uri_1.default().withScheme(DebugSource.SCHEME).withPath(raw.name).withQuery(String(raw.sourceReference));
        }
        if (!raw.path) {
            throw new Error('Unrecognized source type: ' + JSON.stringify(raw));
        }
        if (raw.path.match(DebugSource.SCHEME_PATTERN)) {
            return new uri_1.default(raw.path);
        }
        return new uri_1.default(vscode_uri_1.default.file(raw.path));
    };
    DebugSource.SCHEME = 'debug';
    DebugSource.SCHEME_PATTERN = /^[a-zA-Z][a-zA-Z0-9\+\-\.]+:/;
    return DebugSource;
}(DebugSourceData));
exports.DebugSource = DebugSource;
//# sourceMappingURL=debug-source.js.map