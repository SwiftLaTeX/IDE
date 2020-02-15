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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var uri_1 = require("@theia/core/lib/common/uri");
var logger_1 = require("@theia/core/lib/common/logger");
var event_1 = require("@theia/core/lib/common/event");
var tree_iterator_1 = require("@theia/core/lib/browser/tree/tree-iterator");
var git_1 = require("../common/git");
var git_model_1 = require("../common/git-model");
var git_preferences_1 = require("./git-preferences");
var git_repository_tracker_1 = require("./git-repository-tracker");
var browser_1 = require("@theia/filesystem/lib/browser");
var GitDecorator = /** @class */ (function () {
    function GitDecorator() {
        this.id = 'theia-git-decorator';
        this.emitter = new event_1.Emitter();
    }
    GitDecorator.prototype.init = function () {
        var _this = this;
        this.repositories.onGitEvent(function (event) { return _this.fireDidChangeDecorations(function (tree) { return _this.collectDecorators(tree, event && event.status); }); });
        this.preferences.onPreferenceChanged(function (event) { return _this.handlePreferenceChange(event); });
        this.enabled = this.preferences['git.decorations.enabled'];
        this.showColors = this.preferences['git.decorations.colors'];
    };
    GitDecorator.prototype.decorations = function (tree) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                status = this.repositories.selectedRepositoryStatus;
                if (status) {
                    return [2 /*return*/, this.collectDecorators(tree, status)];
                }
                return [2 /*return*/, new Map()];
            });
        });
    };
    Object.defineProperty(GitDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    GitDecorator.prototype.fireDidChangeDecorations = function (event) {
        this.emitter.fire(event);
    };
    GitDecorator.prototype.collectDecorators = function (tree, status) {
        var e_1, _a;
        var _this = this;
        var result = new Map();
        if (tree.root === undefined || !this.enabled) {
            return result;
        }
        var markers = this.appendContainerChanges(tree, status ? status.changes : []);
        try {
            for (var _b = __values(new tree_iterator_1.DepthFirstTreeIterator(tree.root)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var treeNode = _c.value;
                var uri = browser_1.FileStatNode.getUri(treeNode);
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
    GitDecorator.prototype.appendContainerChanges = function (tree, changes) {
        var e_2, _a;
        var result = new Map();
        try {
            // We traverse up and assign the highest Git file change status the container directory.
            // Note, instead of stopping at the WS root, we traverse up the driver root.
            // We will filter them later based on the expansion state of the tree.
            for (var _b = __values(new Map(changes.map(function (m) { return [new uri_1.default(m.uri), m]; })).entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), uri = _d[0], change = _d[1];
                var uriString = uri.toString();
                result.set(uriString, change);
                var parentUri = uri.parent;
                while (parentUri && !parentUri.path.isRoot) {
                    var parentUriString = parentUri.toString();
                    var existing = result.get(parentUriString);
                    if (existing === undefined || this.compare(existing, change) < 0) {
                        result.set(parentUriString, {
                            uri: parentUriString,
                            status: change.status,
                            staged: !!change.staged
                        });
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
    GitDecorator.prototype.toDecorator = function (change) {
        var data = git_model_1.GitFileStatus.toAbbreviation(change.status, change.staged);
        var color = git_model_1.GitFileStatus.getColor(change.status, change.staged);
        var tooltip = git_model_1.GitFileStatus.toString(change.status, change.staged);
        var decorationData = {
            tailDecorations: [
                {
                    data: data,
                    fontData: {
                        color: color
                    },
                    tooltip: tooltip
                }
            ]
        };
        if (this.showColors) {
            decorationData = __assign(__assign({}, decorationData), { fontData: {
                    color: color
                } });
        }
        return decorationData;
    };
    GitDecorator.prototype.compare = function (left, right) {
        return git_model_1.GitFileStatus.statusCompare(left.status, right.status);
    };
    GitDecorator.prototype.handlePreferenceChange = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var refresh, preferenceName, newValue, enabled, showColors, status;
            var _this = this;
            return __generator(this, function (_a) {
                refresh = false;
                preferenceName = event.preferenceName, newValue = event.newValue;
                if (preferenceName === 'git.decorations.enabled') {
                    enabled = !!newValue;
                    if (this.enabled !== enabled) {
                        this.enabled = enabled;
                        refresh = true;
                    }
                }
                if (preferenceName === 'git.decorations.colors') {
                    showColors = !!newValue;
                    if (this.showColors !== showColors) {
                        this.showColors = showColors;
                        refresh = true;
                    }
                }
                status = this.repositories.selectedRepositoryStatus;
                if (refresh && status) {
                    this.fireDidChangeDecorations(function (tree) { return _this.collectDecorators(tree, status); });
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(git_1.Git),
        __metadata("design:type", Object)
    ], GitDecorator.prototype, "git", void 0);
    __decorate([
        inversify_1.inject(git_repository_tracker_1.GitRepositoryTracker),
        __metadata("design:type", git_repository_tracker_1.GitRepositoryTracker)
    ], GitDecorator.prototype, "repositories", void 0);
    __decorate([
        inversify_1.inject(git_preferences_1.GitPreferences),
        __metadata("design:type", Object)
    ], GitDecorator.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], GitDecorator.prototype, "logger", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GitDecorator.prototype, "init", null);
    GitDecorator = __decorate([
        inversify_1.injectable()
    ], GitDecorator);
    return GitDecorator;
}());
exports.GitDecorator = GitDecorator;
//# sourceMappingURL=git-decorator.js.map