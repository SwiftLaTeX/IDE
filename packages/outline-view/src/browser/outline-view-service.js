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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var outline_view_widget_1 = require("./outline-view-widget");
var OutlineViewService = /** @class */ (function () {
    function OutlineViewService(factory) {
        this.factory = factory;
        this.id = 'outline-view';
        this.onDidChangeOutlineEmitter = new core_1.Emitter();
        this.onDidChangeOpenStateEmitter = new core_1.Emitter();
        this.onDidSelectEmitter = new core_1.Emitter();
        this.onDidOpenEmitter = new core_1.Emitter();
    }
    Object.defineProperty(OutlineViewService.prototype, "onDidSelect", {
        get: function () {
            return this.onDidSelectEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OutlineViewService.prototype, "onDidOpen", {
        get: function () {
            return this.onDidOpenEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OutlineViewService.prototype, "onDidChangeOutline", {
        get: function () {
            return this.onDidChangeOutlineEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OutlineViewService.prototype, "onDidChangeOpenState", {
        get: function () {
            return this.onDidChangeOpenStateEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OutlineViewService.prototype, "open", {
        get: function () {
            return this.widget !== undefined && this.widget.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Publish the collection of outline view symbols.
     * - Publishing includes setting the `OutlineViewWidget` tree with symbol information.
     * @param roots the list of outline symbol information nodes.
     */
    OutlineViewService.prototype.publish = function (roots) {
        if (this.widget) {
            this.widget.setOutlineTree(roots);
            this.onDidChangeOutlineEmitter.fire(roots);
        }
    };
    OutlineViewService.prototype.createWidget = function () {
        var _this = this;
        this.widget = this.factory();
        var disposables = new core_1.DisposableCollection();
        disposables.push(this.widget.onDidChangeOpenStateEmitter.event(function (open) { return _this.onDidChangeOpenStateEmitter.fire(open); }));
        disposables.push(this.widget.model.onOpenNode(function (node) { return _this.onDidOpenEmitter.fire(node); }));
        disposables.push(this.widget.model.onSelectionChanged(function (selection) { return _this.onDidSelectEmitter.fire(selection[0]); }));
        this.widget.disposed.connect(function () {
            _this.widget = undefined;
            disposables.dispose();
        });
        return Promise.resolve(this.widget);
    };
    OutlineViewService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(outline_view_widget_1.OutlineViewWidgetFactory)),
        __metadata("design:paramtypes", [Function])
    ], OutlineViewService);
    return OutlineViewService;
}());
exports.OutlineViewService = OutlineViewService;
//# sourceMappingURL=outline-view-service.js.map