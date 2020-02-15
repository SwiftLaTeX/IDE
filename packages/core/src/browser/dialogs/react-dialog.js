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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var inversify_1 = require("inversify");
var common_1 = require("../../common");
var dialogs_1 = require("../dialogs");
var ReactDialog = /** @class */ (function (_super) {
    __extends(ReactDialog, _super);
    function ReactDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        _this.onRender = new common_1.DisposableCollection();
        _this.toDispose.push(common_1.Disposable.create(function () {
            ReactDOM.unmountComponentAtNode(_this.contentNode);
        }));
        return _this;
    }
    ReactDialog.prototype.onUpdateRequest = function (msg) {
        var _this = this;
        _super.prototype.onUpdateRequest.call(this, msg);
        ReactDOM.render(React.createElement(React.Fragment, null, this.render()), this.contentNode, function () { return _this.onRender.dispose(); });
    };
    ReactDialog = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(dialogs_1.DialogProps)),
        __metadata("design:paramtypes", [dialogs_1.DialogProps])
    ], ReactDialog);
    return ReactDialog;
}(dialogs_1.AbstractDialog));
exports.ReactDialog = ReactDialog;
//# sourceMappingURL=react-dialog.js.map