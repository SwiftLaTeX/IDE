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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var logger_1 = require("@theia/core/lib/common/logger");
var event_1 = require("@theia/core/lib/common/event");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/filesystem/lib/browser");
var scm_decorations_service_1 = require("./scm-decorations-service");
var uri_1 = require("@theia/core/lib/common/uri");
var color_registry_1 = require("@theia/core/lib/browser/color-registry");
var ScmNavigatorDecorator = /** @class */ (function () {
    function ScmNavigatorDecorator(decorationsService) {
        var _this = this;
        this.decorationsService = decorationsService;
        this.id = 'theia-scm-decorator';
        this.emitter = new event_1.Emitter();
        this.decorationsService.onNavigatorDecorationsChanged(function (data) {
            _this.decorationsMap = data;
            _this.fireDidChangeDecorations(function (tree) { return _this.collectDecorators(tree); });
        });
    }
    ScmNavigatorDecorator.prototype.collectDecorators = function (tree) {
        var e_1, _a;
        var _this = this;
        var result = new Map();
        if (tree.root === undefined || !this.decorationsMap) {
            return result;
        }
        var markers = this.appendContainerChanges(this.decorationsMap);
        try {
            for (var _b = __values(new browser_1.DepthFirstTreeIterator(tree.root)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var treeNode = _c.value;
                var uri = browser_2.FileStatNode.getUri(treeNode);
                if (uri) {
                    var marker = markers.get(uri);
                    if (marker) {
                        result.set(treeNode.id, marker);
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
        return new Map(Array.from(result.entries()).map(function (m) { return [m[0], _this.toDecorator(m[1])]; }));
    };
    ScmNavigatorDecorator.prototype.toDecorator = function (change) {
        var colorVariable = change.color && this.colors.toCssVariableName(change.color.id);
        return {
            tailDecorations: [
                {
                    data: change.letter ? change.letter : '',
                    fontData: {
                        color: colorVariable && "var(" + colorVariable + ")"
                    },
                    tooltip: change.title ? change.title : ''
                }
            ]
        };
    };
    ScmNavigatorDecorator.prototype.decorations = function (tree) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.decorationsMap) {
                    return [2 /*return*/, this.collectDecorators(tree)];
                }
                else {
                    return [2 /*return*/, new Map()];
                }
                return [2 /*return*/];
            });
        });
    };
    ScmNavigatorDecorator.prototype.appendContainerChanges = function (decorationsMap) {
        var e_2, _a;
        var result = new Map();
        try {
            for (var _b = __values(decorationsMap.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), uri = _d[0], data = _d[1];
                var uriString = uri.toString();
                result.set(uriString, data);
                var parentUri = new uri_1.default(uri).parent;
                while (parentUri && !parentUri.path.isRoot) {
                    var parentUriString = parentUri.toString();
                    var existing = result.get(parentUriString);
                    if (existing === undefined) {
                        result.set(parentUriString, data);
                        parentUri = parentUri.parent;
                    }
                    else {
                        parentUri = undefined;
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
        return result;
    };
    Object.defineProperty(ScmNavigatorDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    ScmNavigatorDecorator.prototype.fireDidChangeDecorations = function (event) {
        this.emitter.fire(event);
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], ScmNavigatorDecorator.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], ScmNavigatorDecorator.prototype, "colors", void 0);
    ScmNavigatorDecorator = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(scm_decorations_service_1.ScmDecorationsService)),
        __metadata("design:paramtypes", [scm_decorations_service_1.ScmDecorationsService])
    ], ScmNavigatorDecorator);
    return ScmNavigatorDecorator;
}());
exports.ScmNavigatorDecorator = ScmNavigatorDecorator;
//# sourceMappingURL=scm-navigator-decorator.js.map