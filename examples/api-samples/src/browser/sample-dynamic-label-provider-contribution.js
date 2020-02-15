"use strict";
/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var uri_1 = require("@theia/core/lib/common/uri");
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var SampleDynamicLabelProviderContribution = /** @class */ (function (_super) {
    __extends(SampleDynamicLabelProviderContribution, _super);
    function SampleDynamicLabelProviderContribution() {
        var _this = _super.call(this) || this;
        _this.isActive = false;
        _this.onDidChangeEmitter = new core_1.Emitter();
        _this.x = 0;
        var outer = _this;
        setInterval(function () {
            if (_this.isActive) {
                outer.x++;
                outer.fireLabelsDidChange();
            }
        }, 1000);
        return _this;
    }
    SampleDynamicLabelProviderContribution.prototype.canHandle = function (element) {
        if (element.toString().includes('test')) {
            return 30;
        }
        return 0;
    };
    SampleDynamicLabelProviderContribution.prototype.toggle = function () {
        this.isActive = !this.isActive;
        this.fireLabelsDidChange();
    };
    SampleDynamicLabelProviderContribution.prototype.fireLabelsDidChange = function () {
        this.onDidChangeEmitter.fire({
            affects: function (element) { return element.toString().includes('test'); }
        });
    };
    SampleDynamicLabelProviderContribution.prototype.getUri = function (element) {
        return new uri_1.default(element.toString());
    };
    SampleDynamicLabelProviderContribution.prototype.getIcon = function (element) {
        var uri = this.getUri(element);
        var icon = _super.prototype.getFileIcon.call(this, uri);
        if (!icon) {
            return this.defaultFileIcon;
        }
        return icon;
    };
    SampleDynamicLabelProviderContribution.prototype.getName = function (element) {
        var uri = this.getUri(element);
        if (this.isActive && uri.toString().includes('test')) {
            return _super.prototype.getName.call(this, uri) + '-' + this.x.toString(10);
        }
        else {
            return _super.prototype.getName.call(this, uri);
        }
    };
    SampleDynamicLabelProviderContribution.prototype.getLongName = function (element) {
        var uri = this.getUri(element);
        return _super.prototype.getLongName.call(this, uri);
    };
    Object.defineProperty(SampleDynamicLabelProviderContribution.prototype, "onDidChange", {
        get: function () {
            return this.onDidChangeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    SampleDynamicLabelProviderContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], SampleDynamicLabelProviderContribution);
    return SampleDynamicLabelProviderContribution;
}(label_provider_1.DefaultUriLabelProviderContribution));
exports.SampleDynamicLabelProviderContribution = SampleDynamicLabelProviderContribution;
//# sourceMappingURL=sample-dynamic-label-provider-contribution.js.map