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
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var uri_1 = require("@theia/core/lib/common/uri");
var objects_1 = require("@theia/core/lib/common/objects");
var event_1 = require("@theia/core/lib/common/event");
var tree_iterator_1 = require("@theia/core/lib/browser/tree/tree-iterator");
var tree_decorator_1 = require("@theia/core/lib/browser/tree/tree-decorator");
var browser_1 = require("@theia/filesystem/lib/browser");
var problem_manager_1 = require("./problem-manager");
var problem_preferences_1 = require("./problem-preferences");
var ProblemDecorator = /** @class */ (function () {
    function ProblemDecorator(problemManager) {
        var _this = this;
        this.problemManager = problemManager;
        this.id = 'theia-problem-decorator';
        this.emitter = new event_1.Emitter();
        this.problemManager.onDidChangeMarkers(function () { return _this.fireDidChangeDecorations(function (tree) { return _this.collectDecorators(tree); }); });
    }
    ProblemDecorator_1 = ProblemDecorator;
    ProblemDecorator.prototype.init = function () {
        var _this = this;
        this.problemPreferences.onPreferenceChanged(function (event) {
            var preferenceName = event.preferenceName;
            if (preferenceName === 'problems.decorations.enabled') {
                _this.fireDidChangeDecorations(function (tree) { return _this.collectDecorators(tree); });
            }
        });
    };
    ProblemDecorator.prototype.decorations = function (tree) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.collectDecorators(tree)];
            });
        });
    };
    Object.defineProperty(ProblemDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    ProblemDecorator.prototype.fireDidChangeDecorations = function (event) {
        this.emitter.fire(event);
    };
    ProblemDecorator.prototype.collectDecorators = function (tree) {
        var e_1, _a;
        var _this = this;
        var result = new Map();
        // If the tree root is undefined or the preference for the decorations is disabled, return an empty result map.
        if (tree.root === undefined || !this.problemPreferences['problems.decorations.enabled']) {
            return result;
        }
        var markers = this.appendContainerMarkers(tree, this.collectMarkers(tree));
        try {
            for (var _b = __values(new tree_iterator_1.DepthFirstTreeIterator(tree.root)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var node = _c.value;
                var nodeUri = browser_1.FileStatNode.getUri(node);
                if (nodeUri) {
                    var marker = markers.get(nodeUri);
                    if (marker) {
                        result.set(node.id, marker);
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
    ProblemDecorator.prototype.appendContainerMarkers = function (tree, markers) {
        var e_2, _a;
        var result = new Map();
        try {
            // We traverse up and assign the diagnostic to the container directory.
            // Note, instead of stopping at the WS root, we traverse up the driver root.
            // We will filter them later based on the expansion state of the tree.
            for (var _b = __values(new Map(markers.map(function (m) { return [new uri_1.default(m.uri), m]; })).entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), uri = _d[0], marker = _d[1];
                var uriString = uri.toString();
                result.set(uriString, marker);
                var parentUri = uri.parent;
                while (parentUri && !parentUri.path.isRoot) {
                    var parentUriString = parentUri.toString();
                    var existing = result.get(parentUriString);
                    // Make sure the highest diagnostic severity (smaller number) will be propagated to the container directory.
                    if (existing === undefined || this.compare(marker, existing) < 0) {
                        result.set(parentUriString, {
                            data: marker.data,
                            uri: parentUriString,
                            owner: marker.owner,
                            kind: marker.kind
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
    ProblemDecorator.prototype.collectMarkers = function (tree) {
        var _this = this;
        return Array.from(this.problemManager.getUris())
            .map(function (uri) { return new uri_1.default(uri); })
            .map(function (uri) { return _this.problemManager.findMarkers({ uri: uri }); })
            .map(function (markers) { return markers.sort(_this.compare.bind(_this)); })
            .map(function (markers) { return markers.shift(); })
            .filter(objects_1.notEmpty)
            .filter(this.filterMarker.bind(this));
    };
    ProblemDecorator.prototype.toDecorator = function (marker) {
        var position = tree_decorator_1.TreeDecoration.IconOverlayPosition.BOTTOM_RIGHT;
        var icon = this.getOverlayIcon(marker);
        var color = this.getOverlayIconColor(marker);
        return {
            iconOverlay: {
                position: position,
                icon: icon,
                color: color,
                background: {
                    shape: 'circle',
                    color: 'transparent'
                }
            }
        };
    };
    ProblemDecorator.prototype.getOverlayIcon = function (marker) {
        var severity = marker.data.severity;
        switch (severity) {
            case 1: return 'times-circle';
            case 2: return 'exclamation-circle';
            case 3: return 'info-circle';
            default: return 'hand-o-up';
        }
    };
    ProblemDecorator.prototype.getOverlayIconColor = function (marker) {
        var severity = marker.data.severity;
        switch (severity) {
            case 1: return 'var(--theia-editorError-foreground)';
            case 2: return 'var(--theia-editorWarning-foreground)';
            case 3: return 'var(--theia-editorInfo-foreground)';
            default: return 'var(--theia-successBackground)';
        }
    };
    /**
     * Returns `true` if the diagnostic (`data`) of the marker argument has `Error`, `Warning`, or `Information` severity.
     * Otherwise, returns `false`.
     */
    ProblemDecorator.prototype.filterMarker = function (marker) {
        var severity = marker.data.severity;
        return severity === vscode_languageserver_types_1.DiagnosticSeverity.Error
            || severity === vscode_languageserver_types_1.DiagnosticSeverity.Warning
            || severity === vscode_languageserver_types_1.DiagnosticSeverity.Information;
    };
    ProblemDecorator.prototype.compare = function (left, right) {
        return ProblemDecorator_1.severityCompare(left, right);
    };
    var ProblemDecorator_1;
    __decorate([
        inversify_1.inject(problem_preferences_1.ProblemPreferences),
        __metadata("design:type", Object)
    ], ProblemDecorator.prototype, "problemPreferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProblemDecorator.prototype, "init", null);
    ProblemDecorator = ProblemDecorator_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(problem_manager_1.ProblemManager)),
        __metadata("design:paramtypes", [problem_manager_1.ProblemManager])
    ], ProblemDecorator);
    return ProblemDecorator;
}());
exports.ProblemDecorator = ProblemDecorator;
(function (ProblemDecorator) {
    // Highest severities (errors) come first, then the others. Undefined severities treated as the last ones.
    ProblemDecorator.severityCompare = function (left, right) {
        return (left.data.severity || Number.MAX_SAFE_INTEGER) - (right.data.severity || Number.MAX_SAFE_INTEGER);
    };
})(ProblemDecorator = exports.ProblemDecorator || (exports.ProblemDecorator = {}));
exports.ProblemDecorator = ProblemDecorator;
//# sourceMappingURL=problem-decorator.js.map