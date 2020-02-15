"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var event_1 = require("../common/event");
var disposable_1 = require("../common/disposable");
var NoneIconTheme = /** @class */ (function () {
    function NoneIconTheme() {
        this.id = 'none';
        this.label = 'None';
        this.description = 'Disable file icons';
        this.hasFileIcons = true;
        this.hasFolderIcons = true;
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.toDeactivate = new disposable_1.DisposableCollection();
    }
    NoneIconTheme.prototype.activate = function () {
        var _this = this;
        if (this.toDeactivate.disposed) {
            this.toDeactivate.push(disposable_1.Disposable.create(function () { return _this.fireDidChange(); }));
            this.fireDidChange();
        }
        return this.toDeactivate;
    };
    NoneIconTheme.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire({ affects: function () { return true; } });
    };
    NoneIconTheme.prototype.canHandle = function () {
        if (this.toDeactivate.disposed) {
            return 0;
        }
        return Number.MAX_SAFE_INTEGER;
    };
    NoneIconTheme.prototype.getIcon = function () {
        return '';
    };
    NoneIconTheme = __decorate([
        inversify_1.injectable()
    ], NoneIconTheme);
    return NoneIconTheme;
}());
exports.NoneIconTheme = NoneIconTheme;
var IconThemeService = /** @class */ (function () {
    function IconThemeService() {
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this._iconThemes = new Map();
        this.onDidChangeCurrentEmitter = new event_1.Emitter();
        this.onDidChangeCurrent = this.onDidChangeCurrentEmitter.event;
        this.toDeactivate = new disposable_1.DisposableCollection();
    }
    Object.defineProperty(IconThemeService.prototype, "ids", {
        get: function () {
            return this._iconThemes.keys();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconThemeService.prototype, "definitions", {
        get: function () {
            return this._iconThemes.values();
        },
        enumerable: true,
        configurable: true
    });
    IconThemeService.prototype.getDefinition = function (id) {
        return this._iconThemes.get(id);
    };
    IconThemeService.prototype.init = function () {
        this._default = this.noneIconTheme;
        this.register(this.noneIconTheme);
    };
    IconThemeService.prototype.register = function (iconTheme) {
        var _this = this;
        if (this._iconThemes.has(iconTheme.id)) {
            console.warn(new Error("Icon theme '" + iconTheme.id + "' has already been registered, skipping."));
            return disposable_1.Disposable.NULL;
        }
        this._iconThemes.set(iconTheme.id, iconTheme);
        this.onDidChangeEmitter.fire(undefined);
        if (this.toDeactivate.disposed
            && window.localStorage.getItem('iconTheme') === iconTheme.id) {
            this.setCurrent(iconTheme);
        }
        return disposable_1.Disposable.create(function () { return _this.unregister(iconTheme.id); });
    };
    IconThemeService.prototype.unregister = function (id) {
        var iconTheme = this._iconThemes.get(id);
        if (!iconTheme) {
            return undefined;
        }
        this._iconThemes.delete(id);
        if (this._default === iconTheme) {
            this._default = this.noneIconTheme;
        }
        if (window.localStorage.getItem('iconTheme') === id) {
            window.localStorage.removeItem('iconTheme');
            this.onDidChangeCurrentEmitter.fire(this._default.id);
        }
        this.onDidChangeEmitter.fire(undefined);
        return iconTheme;
    };
    Object.defineProperty(IconThemeService.prototype, "current", {
        get: function () {
            return this.getCurrent().id;
        },
        set: function (id) {
            var newCurrent = this._iconThemes.get(id) || this._default;
            if (this.getCurrent().id !== newCurrent.id) {
                this.setCurrent(newCurrent);
            }
        },
        enumerable: true,
        configurable: true
    });
    IconThemeService.prototype.getCurrent = function () {
        var id = window.localStorage.getItem('iconTheme');
        return id && this._iconThemes.get(id) || this._default;
    };
    IconThemeService.prototype.setCurrent = function (current) {
        window.localStorage.setItem('iconTheme', current.id);
        this.toDeactivate.dispose();
        this.toDeactivate.push(current.activate());
        this.onDidChangeCurrentEmitter.fire(current.id);
    };
    Object.defineProperty(IconThemeService.prototype, "default", {
        get: function () {
            return this._default.id;
        },
        set: function (id) {
            var newDefault = this._iconThemes.get(id) || this.noneIconTheme;
            if (this._default.id === newDefault.id) {
                return;
            }
            this._default = newDefault;
            if (!window.localStorage.getItem('iconTheme')) {
                this.onDidChangeCurrentEmitter.fire(newDefault.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    IconThemeService.prototype.load = function () {
        return window.localStorage.getItem('iconTheme') || undefined;
    };
    __decorate([
        inversify_1.inject(NoneIconTheme),
        __metadata("design:type", NoneIconTheme)
    ], IconThemeService.prototype, "noneIconTheme", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], IconThemeService.prototype, "init", null);
    IconThemeService = __decorate([
        inversify_1.injectable()
    ], IconThemeService);
    return IconThemeService;
}());
exports.IconThemeService = IconThemeService;
//# sourceMappingURL=icon-theme-service.js.map