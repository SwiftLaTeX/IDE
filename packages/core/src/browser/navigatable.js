"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var widgets_1 = require("./widgets");
var widget_open_handler_1 = require("./widget-open-handler");
var Navigatable;
(function (Navigatable) {
    function is(arg) {
        return !!arg && 'getResourceUri' in arg && 'createMoveToUri' in arg;
    }
    Navigatable.is = is;
})(Navigatable = exports.Navigatable || (exports.Navigatable = {}));
var NavigatableWidget;
(function (NavigatableWidget) {
    function is(arg) {
        return arg instanceof widgets_1.BaseWidget && Navigatable.is(arg);
    }
    NavigatableWidget.is = is;
    function getAffected(widgets, context) {
        var uris;
        return __generator(this, function (_a) {
            uris = Array.isArray(context) ? context : [context];
            return [2 /*return*/, get(widgets, function (resourceUri) { return uris.some(function (uri) { return uri.isEqualOrParent(resourceUri); }); })];
        });
    }
    NavigatableWidget.getAffected = getAffected;
    function get(widgets, filter) {
        var widgets_2, widgets_2_1, widget, resourceUri, e_1_1;
        var e_1, _a;
        if (filter === void 0) { filter = function () { return true; }; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    widgets_2 = __values(widgets), widgets_2_1 = widgets_2.next();
                    _b.label = 1;
                case 1:
                    if (!!widgets_2_1.done) return [3 /*break*/, 4];
                    widget = widgets_2_1.value;
                    if (!NavigatableWidget.is(widget)) return [3 /*break*/, 3];
                    resourceUri = widget.getResourceUri();
                    if (!(resourceUri && filter(resourceUri))) return [3 /*break*/, 3];
                    return [4 /*yield*/, [resourceUri, widget]];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    widgets_2_1 = widgets_2.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (widgets_2_1 && !widgets_2_1.done && (_a = widgets_2.return)) _a.call(widgets_2);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }
    NavigatableWidget.get = get;
})(NavigatableWidget = exports.NavigatableWidget || (exports.NavigatableWidget = {}));
var NavigatableWidgetOptions;
(function (NavigatableWidgetOptions) {
    function is(arg) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return !!arg && 'kind' in arg && arg.kind === 'navigatable';
    }
    NavigatableWidgetOptions.is = is;
})(NavigatableWidgetOptions = exports.NavigatableWidgetOptions || (exports.NavigatableWidgetOptions = {}));
var NavigatableWidgetOpenHandler = /** @class */ (function (_super) {
    __extends(NavigatableWidgetOpenHandler, _super);
    function NavigatableWidgetOpenHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigatableWidgetOpenHandler.prototype.createWidgetOptions = function (uri, options) {
        return {
            kind: 'navigatable',
            uri: this.serializeUri(uri)
        };
    };
    NavigatableWidgetOpenHandler.prototype.serializeUri = function (uri) {
        if (uri.scheme === 'file') {
            return uri.withoutFragment().normalizePath().toString();
        }
        else {
            return uri.withoutFragment().toString();
        }
    };
    return NavigatableWidgetOpenHandler;
}(widget_open_handler_1.WidgetOpenHandler));
exports.NavigatableWidgetOpenHandler = NavigatableWidgetOpenHandler;
//# sourceMappingURL=navigatable.js.map