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
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var WorkspaceInputDialogProps = /** @class */ (function (_super) {
    __extends(WorkspaceInputDialogProps, _super);
    function WorkspaceInputDialogProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkspaceInputDialogProps = __decorate([
        inversify_1.injectable()
    ], WorkspaceInputDialogProps);
    return WorkspaceInputDialogProps;
}(browser_1.SingleTextInputDialogProps));
exports.WorkspaceInputDialogProps = WorkspaceInputDialogProps;
var WorkspaceInputDialog = /** @class */ (function (_super) {
    __extends(WorkspaceInputDialog, _super);
    function WorkspaceInputDialog(props, labelProvider) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        _this.labelProvider = labelProvider;
        _this.appendParentPath();
        return _this;
    }
    /**
     * Append the human-readable parent `path` to the dialog.
     * When possible, display the relative path, else display the full path (ex: workspace root).
     */
    WorkspaceInputDialog.prototype.appendParentPath = function () {
        // Compute the label for the parent URI.
        var label = this.labelProvider.getLongName(this.props.parentUri);
        var element = document.createElement('div');
        // Create the `folder` icon.
        var icon = document.createElement('i');
        icon.classList.add('fa', 'fa-folder');
        icon.style.marginRight = '0.5em';
        element.appendChild(icon);
        element.appendChild(document.createTextNode(label));
        // Add the path and icon div before the `inputField`.
        this.contentNode.insertBefore(element, this.inputField);
    };
    WorkspaceInputDialog = __decorate([
        __param(0, inversify_1.inject(WorkspaceInputDialogProps)),
        __param(1, inversify_1.inject(browser_1.LabelProvider)),
        __metadata("design:paramtypes", [WorkspaceInputDialogProps,
            browser_1.LabelProvider])
    ], WorkspaceInputDialog);
    return WorkspaceInputDialog;
}(browser_1.SingleTextInputDialog));
exports.WorkspaceInputDialog = WorkspaceInputDialog;
//# sourceMappingURL=workspace-input-dialog.js.map