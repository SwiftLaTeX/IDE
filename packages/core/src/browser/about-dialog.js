"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var inversify_1 = require("inversify");
var dialogs_1 = require("./dialogs");
var react_dialog_1 = require("./dialogs/react-dialog");
var application_protocol_1 = require("../common/application-protocol");
exports.ABOUT_CONTENT_CLASS = 'theia-aboutDialog';
exports.ABOUT_EXTENSIONS_CLASS = 'theia-aboutExtensions';
var AboutDialogProps = /** @class */ (function (_super) {
    __extends(AboutDialogProps, _super);
    function AboutDialogProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutDialogProps = __decorate([
        inversify_1.injectable()
    ], AboutDialogProps);
    return AboutDialogProps;
}(dialogs_1.DialogProps));
exports.AboutDialogProps = AboutDialogProps;
var AboutDialog = /** @class */ (function (_super) {
    __extends(AboutDialog, _super);
    function AboutDialog(props) {
        var _this = _super.call(this, {
            title: props.title
        }) || this;
        _this.props = props;
        _this.extensionsInfos = [];
        _this.appendAcceptButton('Ok');
        return _this;
    }
    AboutDialog.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.appServer.getApplicationInfo()];
                    case 1:
                        _a.applicationInfo = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.appServer.getExtensionsInfos()];
                    case 2:
                        _b.extensionsInfos = _c.sent();
                        this.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutDialog.prototype.renderHeader = function () {
        var applicationInfo = this.applicationInfo;
        return applicationInfo && React.createElement("h3", null,
            applicationInfo.name,
            " ",
            applicationInfo.version);
    };
    AboutDialog.prototype.renderExtensions = function () {
        var extensionsInfos = this.extensionsInfos;
        return React.createElement(React.Fragment, null,
            React.createElement("h3", null, "List of extensions"),
            React.createElement("ul", { className: exports.ABOUT_EXTENSIONS_CLASS }, extensionsInfos
                .sort(function (a, b) { return a.name.toLowerCase().localeCompare(b.name.toLowerCase()); })
                .map(function (extension) { return React.createElement("li", { key: extension.name },
                extension.name,
                " ",
                extension.version); })));
    };
    AboutDialog.prototype.render = function () {
        return React.createElement("div", { className: exports.ABOUT_CONTENT_CLASS },
            this.renderHeader(),
            this.renderExtensions());
    };
    Object.defineProperty(AboutDialog.prototype, "value", {
        get: function () { return undefined; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(application_protocol_1.ApplicationServer),
        __metadata("design:type", Object)
    ], AboutDialog.prototype, "appServer", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AboutDialog.prototype, "init", null);
    AboutDialog = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(AboutDialogProps)),
        __metadata("design:paramtypes", [AboutDialogProps])
    ], AboutDialog);
    return AboutDialog;
}(react_dialog_1.ReactDialog));
exports.AboutDialog = AboutDialog;
//# sourceMappingURL=about-dialog.js.map