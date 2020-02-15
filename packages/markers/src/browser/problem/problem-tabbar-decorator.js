"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var inversify_1 = require("inversify");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var event_1 = require("@theia/core/lib/common/event");
var widget_decoration_1 = require("@theia/core/lib/browser/widget-decoration");
var problem_manager_1 = require("./problem-manager");
var problem_preferences_1 = require("./problem-preferences");
var browser_1 = require("@theia/core/lib/browser");
var ProblemTabBarDecorator = /** @class */ (function () {
    function ProblemTabBarDecorator() {
        this.id = 'theia-problem-tabbar-decorator';
        this.emitter = new event_1.Emitter();
    }
    ProblemTabBarDecorator.prototype.init = function () {
        var _this = this;
        this.problemManager.onDidChangeMarkers(function () { return _this.fireDidChangeDecorations(); });
        this.preferences.onPreferenceChanged(function (event) { return _this.handlePreferenceChange(event); });
    };
    ProblemTabBarDecorator.prototype.decorate = function (title) {
        var e_1, _a;
        var widget = title.owner;
        if (browser_1.Navigatable.is(widget)) {
            var resourceUri = widget.getResourceUri();
            if (resourceUri) {
                // Get the list of problem markers for the given resource URI.
                var markers = this.problemManager.findMarkers({ uri: resourceUri });
                // If no markers are available, return early.
                if (markers.length === 0) {
                    return [];
                }
                // Store the marker with the highest severity.
                var maxSeverity = void 0;
                try {
                    // Iterate over available markers to determine that which has the highest severity.
                    // Only display a decoration if an error or warning marker is available.
                    for (var markers_1 = __values(markers), markers_1_1 = markers_1.next(); !markers_1_1.done; markers_1_1 = markers_1.next()) {
                        var marker = markers_1_1.value;
                        // Break early if an error marker is present, since it represents the highest severity.
                        if (marker.data.severity === vscode_languageserver_types_1.DiagnosticSeverity.Error) {
                            maxSeverity = marker;
                            break;
                        }
                        else if (marker.data.severity === vscode_languageserver_types_1.DiagnosticSeverity.Warning) {
                            maxSeverity = marker;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (markers_1_1 && !markers_1_1.done && (_a = markers_1.return)) _a.call(markers_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // Decorate the tabbar with the highest marker severity if available.
                return maxSeverity ? [this.toDecorator(maxSeverity)] : [];
            }
        }
        return [];
    };
    Object.defineProperty(ProblemTabBarDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    ProblemTabBarDecorator.prototype.fireDidChangeDecorations = function () {
        this.emitter.fire(undefined);
    };
    /**
     * Handle changes in preference.
     * @param {PreferenceChangeEvent<ProblemConfiguration>} event The event of the changes in preference.
     */
    ProblemTabBarDecorator.prototype.handlePreferenceChange = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var preferenceName;
            return __generator(this, function (_a) {
                preferenceName = event.preferenceName;
                if (preferenceName === 'problems.decorations.tabbar.enabled') {
                    this.fireDidChangeDecorations();
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Convert a diagnostic marker to a decorator.
     * @param {Marker<Diagnostic>} marker A diagnostic marker.
     * @returns {WidgetDecoration.Data} The decoration data.
     */
    ProblemTabBarDecorator.prototype.toDecorator = function (marker) {
        var position = widget_decoration_1.WidgetDecoration.IconOverlayPosition.BOTTOM_RIGHT;
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
    /**
     * Get the appropriate overlay icon for decoration.
     * @param {Marker<Diagnostic>} marker A diagnostic marker.
     * @returns {string} A string representing the overlay icon class.
     */
    ProblemTabBarDecorator.prototype.getOverlayIcon = function (marker) {
        var severity = marker.data.severity;
        switch (severity) {
            case 1: return 'times-circle';
            case 2: return 'exclamation-circle';
            case 3: return 'info-circle';
            default: return 'hand-o-up';
        }
    };
    /**
     * Get the appropriate overlay icon color for decoration.
     * @param {Marker<Diagnostic>} marker A diagnostic marker.
     * @returns {WidgetDecoration.Color} The decoration color.
     */
    ProblemTabBarDecorator.prototype.getOverlayIconColor = function (marker) {
        var severity = marker.data.severity;
        switch (severity) {
            case 1: return 'var(--theia-editorError-foreground)';
            case 2: return 'var(--theia-editorWarning-foreground)';
            case 3: return 'var(--theia-editorInfo-foreground)';
            default: return 'var(--theia-successBackground)';
        }
    };
    __decorate([
        inversify_1.inject(problem_preferences_1.ProblemPreferences),
        __metadata("design:type", Object)
    ], ProblemTabBarDecorator.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(problem_manager_1.ProblemManager),
        __metadata("design:type", problem_manager_1.ProblemManager)
    ], ProblemTabBarDecorator.prototype, "problemManager", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProblemTabBarDecorator.prototype, "init", null);
    ProblemTabBarDecorator = __decorate([
        inversify_1.injectable()
    ], ProblemTabBarDecorator);
    return ProblemTabBarDecorator;
}());
exports.ProblemTabBarDecorator = ProblemTabBarDecorator;
//# sourceMappingURL=problem-tabbar-decorator.js.map