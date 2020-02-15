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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("@theia/core/lib/browser");
var file_tree_1 = require("../file-tree");
var file_dialog_1 = require("./file-dialog");
var file_dialog_model_1 = require("./file-dialog-model");
var file_dialog_widget_1 = require("./file-dialog-widget");
var file_dialog_tree_1 = require("./file-dialog-tree");
function createFileDialogContainer(parent) {
    var child = file_tree_1.createFileTreeContainer(parent);
    child.unbind(file_tree_1.FileTreeModel);
    child.bind(file_dialog_model_1.FileDialogModel).toSelf();
    child.rebind(browser_1.TreeModel).toService(file_dialog_model_1.FileDialogModel);
    child.unbind(file_tree_1.FileTreeWidget);
    child.bind(file_dialog_widget_1.FileDialogWidget).toSelf();
    child.bind(file_dialog_tree_1.FileDialogTree).toSelf();
    child.rebind(browser_1.Tree).toService(file_dialog_tree_1.FileDialogTree);
    return child;
}
exports.createFileDialogContainer = createFileDialogContainer;
function createOpenFileDialogContainer(parent, props) {
    var container = createFileDialogContainer(parent);
    container.rebind(browser_1.TreeProps).toConstantValue(__assign(__assign({}, browser_1.defaultTreeProps), { multiSelect: props.canSelectMany, search: true }));
    container.bind(file_dialog_1.OpenFileDialogProps).toConstantValue(props);
    container.bind(file_dialog_1.OpenFileDialog).toSelf();
    return container;
}
exports.createOpenFileDialogContainer = createOpenFileDialogContainer;
function createSaveFileDialogContainer(parent, props) {
    var container = createFileDialogContainer(parent);
    container.rebind(browser_1.TreeProps).toConstantValue(__assign(__assign({}, browser_1.defaultTreeProps), { multiSelect: false, search: true }));
    container.bind(file_dialog_1.SaveFileDialogProps).toConstantValue(props);
    container.bind(file_dialog_1.SaveFileDialog).toSelf();
    return container;
}
exports.createSaveFileDialogContainer = createSaveFileDialogContainer;
//# sourceMappingURL=file-dialog-container.js.map