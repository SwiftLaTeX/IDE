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
/* eslint-disable @typescript-eslint/no-explicit-any */
var common_1 = require("@theia/core/lib/common");
var scm_input_1 = require("./scm-input");
var ScmRepository = /** @class */ (function () {
    function ScmRepository(provider, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.provider = provider;
        this.options = options;
        this.onDidChangeEmitter = new common_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.toDispose = new common_1.DisposableCollection(this.onDidChangeEmitter);
        // TODO replace by TreeModel
        this._resources = [];
        this.selectedIndex = -1;
        this.toDispose.pushAll([
            this.provider,
            this.provider.onDidChange(function () { return _this.updateResources(); }),
            this.input = new scm_input_1.ScmInput(options.input),
            this.input.onDidChange(function () { return _this.fireDidChange(); })
        ]);
        this.updateResources();
    }
    ScmRepository.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    ScmRepository.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(ScmRepository.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        enumerable: true,
        configurable: true
    });
    ScmRepository.prototype.updateResources = function () {
        var e_1, _a, _b;
        this._resources.length = 0;
        try {
            for (var _c = __values(this.provider.groups), _d = _c.next(); !_d.done; _d = _c.next()) {
                var group = _d.value;
                (_b = this._resources).push.apply(_b, __spread(group.resources));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.updateSelection();
    };
    Object.defineProperty(ScmRepository.prototype, "selectedResource", {
        get: function () {
            return this._resources[this.selectedIndex];
        },
        set: function (selectedResource) {
            this.selectedIndex = selectedResource ? this._resources.indexOf(selectedResource) : -1;
            this.fireDidChange();
        },
        enumerable: true,
        configurable: true
    });
    ScmRepository.prototype.updateSelection = function () {
        this.selectedResource = this.selectedResource;
    };
    ScmRepository.prototype.selectNextResource = function () {
        var lastIndex = this._resources.length - 1;
        if (this.selectedIndex >= 0 && this.selectedIndex < lastIndex) {
            this.selectedIndex++;
            this.fireDidChange();
        }
        else if (this._resources.length && (this.selectedIndex === -1 || this.selectedIndex === lastIndex)) {
            this.selectedIndex = 0;
            this.fireDidChange();
        }
        return this.selectedResource;
    };
    ScmRepository.prototype.selectPreviousResource = function () {
        if (this.selectedIndex > 0) {
            this.selectedIndex--;
            this.fireDidChange();
        }
        else if (this.selectedIndex === 0) {
            this.selectedIndex = this._resources.length - 1;
            this.fireDidChange();
        }
        return this.selectedResource;
    };
    return ScmRepository;
}());
exports.ScmRepository = ScmRepository;
//# sourceMappingURL=scm-repository.js.map