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
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var file_tree_1 = require("../file-tree");
var file_dialog_model_1 = require("./file-dialog-model");
exports.FILE_DIALOG_CLASS = 'theia-FileDialog';
exports.NOT_SELECTABLE_CLASS = 'theia-mod-not-selectable';
var FileDialogWidget = /** @class */ (function (_super) {
    __extends(FileDialogWidget, _super);
    function FileDialogWidget(props, model, contextMenuRenderer) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this._disableFileSelection = false;
        _this.addClass(exports.FILE_DIALOG_CLASS);
        return _this;
    }
    Object.defineProperty(FileDialogWidget.prototype, "disableFileSelection", {
        set: function (isSelectable) {
            this._disableFileSelection = isSelectable;
            this.model.disableFileSelection = isSelectable;
        },
        enumerable: true,
        configurable: true
    });
    FileDialogWidget.prototype.createNodeAttributes = function (node, props) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var attr = _super.prototype.createNodeAttributes.call(this, node, props);
        if (this.shouldDisableSelection(node)) {
            var keys = Object.keys(attr);
            keys.forEach(function (k) {
                if (['className', 'style', 'title'].indexOf(k) < 0) {
                    delete attr[k];
                }
            });
        }
        return attr;
    };
    FileDialogWidget.prototype.createNodeClassNames = function (node, props) {
        var classNames = _super.prototype.createNodeClassNames.call(this, node, props);
        if (this.shouldDisableSelection(node)) {
            [browser_1.SELECTED_CLASS, browser_1.FOCUS_CLASS].forEach(function (name) {
                var ind = classNames.indexOf(name);
                if (ind >= 0) {
                    classNames.splice(ind, 1);
                }
            });
            classNames.push(exports.NOT_SELECTABLE_CLASS);
        }
        return classNames;
    };
    FileDialogWidget.prototype.shouldDisableSelection = function (node) {
        return file_tree_1.FileStatNode.is(node) && !node.fileStat.isDirectory && this._disableFileSelection;
    };
    FileDialogWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.TreeProps)),
        __param(1, inversify_1.inject(file_dialog_model_1.FileDialogModel)),
        __param(2, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __metadata("design:paramtypes", [Object, file_dialog_model_1.FileDialogModel, Object])
    ], FileDialogWidget);
    return FileDialogWidget;
}(file_tree_1.FileTreeWidget));
exports.FileDialogWidget = FileDialogWidget;
//# sourceMappingURL=file-dialog-widget.js.map