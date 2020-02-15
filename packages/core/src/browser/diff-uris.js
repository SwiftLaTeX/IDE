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
var uri_1 = require("../common/uri");
var label_provider_1 = require("./label-provider");
var DiffUris;
(function (DiffUris) {
    DiffUris.DIFF_SCHEME = 'diff';
    function encode(left, right, label) {
        var diffUris = [
            left.toString(),
            right.toString()
        ];
        var diffUriStr = JSON.stringify(diffUris);
        return new uri_1.default().withScheme(DiffUris.DIFF_SCHEME).withPath(label || '').withQuery(diffUriStr);
    }
    DiffUris.encode = encode;
    function decode(uri) {
        if (uri.scheme !== DiffUris.DIFF_SCHEME) {
            throw new Error(("The URI must have scheme \"diff\". The URI was: " + uri + "."));
        }
        var diffUris = JSON.parse(uri.query);
        return diffUris.map(function (s) { return new uri_1.default(s); });
    }
    DiffUris.decode = decode;
    function isDiffUri(uri) {
        return uri.scheme === DiffUris.DIFF_SCHEME;
    }
    DiffUris.isDiffUri = isDiffUri;
})(DiffUris = exports.DiffUris || (exports.DiffUris = {}));
var DiffUriLabelProviderContribution = /** @class */ (function () {
    function DiffUriLabelProviderContribution(labelProvider) {
        this.labelProvider = labelProvider;
    }
    DiffUriLabelProviderContribution.prototype.canHandle = function (element) {
        if (element instanceof uri_1.default && DiffUris.isDiffUri(element)) {
            return 20;
        }
        return 0;
    };
    DiffUriLabelProviderContribution.prototype.getLongName = function (uri) {
        var label = uri.path.toString();
        if (label) {
            return label;
        }
        var _a = __read(DiffUris.decode(uri), 2), left = _a[0], right = _a[1];
        var leftLongName = this.labelProvider.getLongName(left);
        var rightLongName = this.labelProvider.getLongName(right);
        if (leftLongName === rightLongName) {
            return leftLongName;
        }
        return leftLongName + " \u27F7 " + rightLongName;
    };
    DiffUriLabelProviderContribution.prototype.getName = function (uri) {
        var label = uri.path.toString();
        if (label) {
            return label;
        }
        var _a = __read(DiffUris.decode(uri), 2), left = _a[0], right = _a[1];
        if (left.path.toString() === right.path.toString() && left.query && right.query) {
            return left.displayName + ": " + left.query + " \u27F7 " + right.query;
        }
        else {
            var title = void 0;
            if (left.path.toString() !== right.path.toString() && left.displayName !== uri.displayName) {
                title = uri.displayName + ": ";
            }
            else {
                title = '';
            }
            var leftLongName = this.labelProvider.getName(left);
            var rightLongName = this.labelProvider.getName(right);
            if (leftLongName === rightLongName) {
                return leftLongName;
            }
            return "" + title + leftLongName + " \u27F7 " + rightLongName;
        }
    };
    DiffUriLabelProviderContribution.prototype.getIcon = function (uri) {
        return 'fa fa-columns';
    };
    DiffUriLabelProviderContribution.prototype.affects = function (diffUri, event) {
        var e_1, _a;
        try {
            for (var _b = __values(DiffUris.decode(diffUri)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var uri = _c.value;
                if (event.affects(uri)) {
                    return true;
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
        return false;
    };
    DiffUriLabelProviderContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(label_provider_1.LabelProvider)),
        __metadata("design:paramtypes", [label_provider_1.LabelProvider])
    ], DiffUriLabelProviderContribution);
    return DiffUriLabelProviderContribution;
}());
exports.DiffUriLabelProviderContribution = DiffUriLabelProviderContribution;
//# sourceMappingURL=diff-uris.js.map