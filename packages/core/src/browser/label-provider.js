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
var fileIcons = require("file-icons-js");
var uri_1 = require("../common/uri");
var contribution_provider_1 = require("../common/contribution-provider");
var types_1 = require("../common/types");
var common_1 = require("../common");
/**
 * @internal don't export it, use `LabelProvider.folderIcon` instead.
 */
var DEFAULT_FOLDER_ICON = 'fa fa-folder';
/**
 * @internal don't export it, use `LabelProvider.fileIcon` instead.
 */
var DEFAULT_FILE_ICON = 'fa fa-file';
/**
 * Internal folder icon class for the default (File Icons) theme.
 *
 * @deprecated Use `LabelProvider.folderIcon` to get a folder icon class for the current icon theme.
 */
exports.FOLDER_ICON = DEFAULT_FOLDER_ICON;
/**
 * Internal file icon class for the default (File Icons) theme.
 *
 * @deprecated Use `LabelProvider.fileIcon` to get a file icon class for the current icon theme.
 */
exports.FILE_ICON = DEFAULT_FILE_ICON;
exports.LabelProviderContribution = Symbol('LabelProviderContribution');
var URIIconReference;
(function (URIIconReference) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(element) {
        return !!element && typeof element === 'object' && 'kind' in element && element['kind'] === 'uriIconReference';
    }
    URIIconReference.is = is;
    function create(id, uri) {
        return { kind: 'uriIconReference', id: id, uri: uri };
    }
    URIIconReference.create = create;
})(URIIconReference = exports.URIIconReference || (exports.URIIconReference = {}));
var DefaultUriLabelProviderContribution = /** @class */ (function () {
    function DefaultUriLabelProviderContribution() {
    }
    DefaultUriLabelProviderContribution.prototype.canHandle = function (element) {
        if (element instanceof uri_1.default || URIIconReference.is(element)) {
            return 1;
        }
        return 0;
    };
    DefaultUriLabelProviderContribution.prototype.getIcon = function (element) {
        if (URIIconReference.is(element) && element.id === 'folder') {
            return this.defaultFolderIcon;
        }
        var uri = URIIconReference.is(element) ? element.uri : element;
        var iconClass = uri && this.getFileIcon(uri);
        return iconClass || this.defaultFileIcon;
    };
    Object.defineProperty(DefaultUriLabelProviderContribution.prototype, "defaultFolderIcon", {
        get: function () {
            return DEFAULT_FOLDER_ICON;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultUriLabelProviderContribution.prototype, "defaultFileIcon", {
        get: function () {
            return DEFAULT_FILE_ICON;
        },
        enumerable: true,
        configurable: true
    });
    DefaultUriLabelProviderContribution.prototype.getFileIcon = function (uri) {
        var fileIcon = fileIcons.getClassWithColor(uri.displayName);
        if (!fileIcon) {
            return undefined;
        }
        return fileIcon + ' theia-file-icons-js';
    };
    DefaultUriLabelProviderContribution.prototype.getName = function (element) {
        var uri = this.getUri(element);
        return uri && uri.displayName;
    };
    DefaultUriLabelProviderContribution.prototype.getLongName = function (element) {
        var uri = this.getUri(element);
        return uri && uri.path.toString();
    };
    DefaultUriLabelProviderContribution.prototype.getUri = function (element) {
        return URIIconReference.is(element) ? element.uri : element;
    };
    DefaultUriLabelProviderContribution = __decorate([
        inversify_1.injectable()
    ], DefaultUriLabelProviderContribution);
    return DefaultUriLabelProviderContribution;
}());
exports.DefaultUriLabelProviderContribution = DefaultUriLabelProviderContribution;
var LabelProvider = /** @class */ (function () {
    function LabelProvider() {
        this.onDidChangeEmitter = new common_1.Emitter();
    }
    /**
     * Start listening to contributions.
     *
     * Don't call this method directly!
     * It's called by the frontend application during initialization.
     */
    LabelProvider.prototype.initialize = function () {
        var e_1, _a;
        var _this = this;
        var contributions = this.contributionProvider.getContributions();
        try {
            for (var contributions_1 = __values(contributions), contributions_1_1 = contributions_1.next(); !contributions_1_1.done; contributions_1_1 = contributions_1.next()) {
                var eventContribution = contributions_1_1.value;
                if (eventContribution.onDidChange) {
                    eventContribution.onDidChange(function (event) {
                        _this.onDidChangeEmitter.fire({
                            // TODO check eventContribution.canHandle as well
                            affects: function (element) { return _this.affects(element, event); }
                        });
                    });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (contributions_1_1 && !contributions_1_1.done && (_a = contributions_1.return)) _a.call(contributions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    LabelProvider.prototype.affects = function (element, event) {
        var e_2, _a;
        if (event.affects(element)) {
            return true;
        }
        try {
            for (var _b = __values(this.findContribution(element)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                if (contribution.affects && contribution.affects(element, event)) {
                    return true;
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
        return false;
    };
    Object.defineProperty(LabelProvider.prototype, "onDidChange", {
        get: function () {
            return this.onDidChangeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelProvider.prototype, "fileIcon", {
        /**
         * Return a default file icon for the current icon theme.
         */
        get: function () {
            return this.getIcon(URIIconReference.create('file'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelProvider.prototype, "folderIcon", {
        /**
         * Return a default folder icon for the current icon theme.
         */
        get: function () {
            return this.getIcon(URIIconReference.create('folder'));
        },
        enumerable: true,
        configurable: true
    });
    LabelProvider.prototype.getIcon = function (element) {
        var e_3, _a;
        var contributions = this.findContribution(element);
        try {
            for (var contributions_2 = __values(contributions), contributions_2_1 = contributions_2.next(); !contributions_2_1.done; contributions_2_1 = contributions_2.next()) {
                var contribution = contributions_2_1.value;
                var value = contribution.getIcon && contribution.getIcon(element);
                if (value === undefined) {
                    continue;
                }
                return value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (contributions_2_1 && !contributions_2_1.done && (_a = contributions_2.return)) _a.call(contributions_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return '';
    };
    LabelProvider.prototype.getName = function (element) {
        var e_4, _a;
        var contributions = this.findContribution(element);
        try {
            for (var contributions_3 = __values(contributions), contributions_3_1 = contributions_3.next(); !contributions_3_1.done; contributions_3_1 = contributions_3.next()) {
                var contribution = contributions_3_1.value;
                var value = contribution.getName && contribution.getName(element);
                if (value === undefined) {
                    continue;
                }
                return value;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (contributions_3_1 && !contributions_3_1.done && (_a = contributions_3.return)) _a.call(contributions_3);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return '<unknown>';
    };
    LabelProvider.prototype.getLongName = function (element) {
        var e_5, _a;
        var contributions = this.findContribution(element);
        try {
            for (var contributions_4 = __values(contributions), contributions_4_1 = contributions_4.next(); !contributions_4_1.done; contributions_4_1 = contributions_4.next()) {
                var contribution = contributions_4_1.value;
                var value = contribution.getLongName && contribution.getLongName(element);
                if (value === undefined) {
                    continue;
                }
                return value;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (contributions_4_1 && !contributions_4_1.done && (_a = contributions_4.return)) _a.call(contributions_4);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return '';
    };
    LabelProvider.prototype.findContribution = function (element) {
        var prioritized = types_1.Prioritizeable.prioritizeAllSync(this.contributionProvider.getContributions(), function (contrib) {
            return contrib.canHandle(element);
        });
        return prioritized.map(function (c) { return c.value; });
    };
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider), inversify_1.named(exports.LabelProviderContribution),
        __metadata("design:type", Object)
    ], LabelProvider.prototype, "contributionProvider", void 0);
    LabelProvider = __decorate([
        inversify_1.injectable()
    ], LabelProvider);
    return LabelProvider;
}());
exports.LabelProvider = LabelProvider;
//# sourceMappingURL=label-provider.js.map