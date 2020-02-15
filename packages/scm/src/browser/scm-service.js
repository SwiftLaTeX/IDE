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
var inversify_1 = require("inversify");
var scm_context_key_service_1 = require("./scm-context-key-service");
var scm_repository_1 = require("./scm-repository");
var ScmService = /** @class */ (function () {
    function ScmService() {
        this._repositories = new Map();
        this.onDidChangeSelectedRepositoryEmitter = new common_1.Emitter();
        this.onDidChangeSelectedRepository = this.onDidChangeSelectedRepositoryEmitter.event;
        this.onDidAddRepositoryEmitter = new common_1.Emitter();
        this.onDidAddRepository = this.onDidAddRepositoryEmitter.event;
        this.onDidRemoveRepositoryEmitter = new common_1.Emitter();
        this.onDidRemoveRepository = this.onDidAddRepositoryEmitter.event;
        this.onDidChangeStatusBarCommandsEmitter = new common_1.Emitter();
        this.onDidChangeStatusBarCommands = this.onDidChangeStatusBarCommandsEmitter.event;
        this.toDisposeOnSelected = new common_1.DisposableCollection();
    }
    ScmService.prototype.fireDidChangeStatusBarCommands = function () {
        this.onDidChangeStatusBarCommandsEmitter.fire(this.statusBarCommands);
    };
    Object.defineProperty(ScmService.prototype, "statusBarCommands", {
        get: function () {
            var repository = this.selectedRepository;
            return repository && repository.provider.statusBarCommands || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScmService.prototype, "repositories", {
        get: function () {
            return __spread(this._repositories.values());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScmService.prototype, "selectedRepository", {
        get: function () {
            return this._selectedRepository;
        },
        set: function (repository) {
            var _this = this;
            if (this._selectedRepository === repository) {
                return;
            }
            this.toDisposeOnSelected.dispose();
            this._selectedRepository = repository;
            this.updateContextKeys();
            if (this._selectedRepository) {
                this.toDisposeOnSelected.push(this._selectedRepository.onDidChange(function () { return _this.updateContextKeys(); }));
                if (this._selectedRepository.provider.onDidChangeStatusBarCommands) {
                    this.toDisposeOnSelected.push(this._selectedRepository.provider.onDidChangeStatusBarCommands(function () { return _this.fireDidChangeStatusBarCommands(); }));
                }
            }
            this.onDidChangeSelectedRepositoryEmitter.fire(this._selectedRepository);
            this.fireDidChangeStatusBarCommands();
        },
        enumerable: true,
        configurable: true
    });
    ScmService.prototype.registerScmProvider = function (provider, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var key = provider.id + ':' + provider.rootUri;
        if (this._repositories.has(key)) {
            throw new Error(provider.label + " provider for '" + provider.rootUri + "' already exists.");
        }
        var repository = new scm_repository_1.ScmRepository(provider, options);
        var dispose = repository.dispose;
        repository.dispose = function () {
            _this._repositories.delete(key);
            dispose.bind(repository)();
            _this.onDidRemoveRepositoryEmitter.fire(repository);
            if (_this._selectedRepository === repository) {
                _this.selectedRepository = _this._repositories.values().next().value;
            }
        };
        this._repositories.set(key, repository);
        this.onDidAddRepositoryEmitter.fire(repository);
        if (this._repositories.size === 1) {
            this.selectedRepository = repository;
        }
        return repository;
    };
    ScmService.prototype.updateContextKeys = function () {
        if (this._selectedRepository) {
            this.contextKeys.scmProvider.set(this._selectedRepository.provider.id);
            this.contextKeys.scmResourceGroup.set(this._selectedRepository.selectedResource && this._selectedRepository.selectedResource.group.id);
        }
        else {
            this.contextKeys.scmProvider.reset();
            this.contextKeys.scmResourceGroup.reset();
        }
    };
    __decorate([
        inversify_1.inject(scm_context_key_service_1.ScmContextKeyService),
        __metadata("design:type", scm_context_key_service_1.ScmContextKeyService)
    ], ScmService.prototype, "contextKeys", void 0);
    ScmService = __decorate([
        inversify_1.injectable()
    ], ScmService);
    return ScmService;
}());
exports.ScmService = ScmService;
//# sourceMappingURL=scm-service.js.map