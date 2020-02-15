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
var ReactDOM = require("react-dom");
var React = require("react");
var inversify_1 = require("inversify");
var common_1 = require("../../common");
var widget_1 = require("./widget");
var ReactWidget = /** @class */ (function (_super) {
    __extends(ReactWidget, _super);
    function ReactWidget() {
        var _this = _super.call(this) || this;
        _this.onRender = new common_1.DisposableCollection();
        _this.scrollOptions = {
            suppressScrollX: true,
            minScrollbarLength: 35,
        };
        _this.toDispose.push(common_1.Disposable.create(function () {
            ReactDOM.unmountComponentAtNode(_this.node);
        }));
        return _this;
    }
    ReactWidget.prototype.onUpdateRequest = function (msg) {
        var _this = this;
        _super.prototype.onUpdateRequest.call(this, msg);
        ReactDOM.render(React.createElement(React.Fragment, null, this.render()), this.node, function () { return _this.onRender.dispose(); });
    };
    ReactWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ReactWidget);
    return ReactWidget;
}(widget_1.BaseWidget));
exports.ReactWidget = ReactWidget;
//# sourceMappingURL=react-widget.js.map