"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_renderer_1 = require("@theia/core/lib/browser/widgets/react-renderer");
var React = require("react");
exports.FILE_TREE_FILTERS_LIST_CLASS = 'theia-FileTreeFiltersList';
/**
 * A set of file filters that are used by the dialog. Each entry is a human readable label,
 * like "TypeScript", and an array of extensions, e.g.
 * ```ts
 * {
 * 	'Images': ['png', 'jpg']
 * 	'TypeScript': ['ts', 'tsx']
 * }
 * ```
 */
var FileDialogTreeFilters = /** @class */ (function () {
    function FileDialogTreeFilters() {
    }
    return FileDialogTreeFilters;
}());
exports.FileDialogTreeFilters = FileDialogTreeFilters;
var FileDialogTreeFiltersRenderer = /** @class */ (function (_super) {
    __extends(FileDialogTreeFiltersRenderer, _super);
    function FileDialogTreeFiltersRenderer(filters, fileDialogTree) {
        var _this = _super.call(this) || this;
        _this.filters = filters;
        _this.fileDialogTree = fileDialogTree;
        _this.handleFilterChanged = function (e) { return _this.onFilterChanged(e); };
        return _this;
    }
    FileDialogTreeFiltersRenderer.prototype.doRender = function () {
        var _this = this;
        if (!this.filters) {
            return undefined;
        }
        var fileTypes = ['All Files'];
        Object.keys(this.filters).forEach(function (element) {
            fileTypes.push(element);
        });
        var options = fileTypes.map(function (value) { return _this.renderLocation(value); });
        return React.createElement("select", { className: 'theia-select ' + exports.FILE_TREE_FILTERS_LIST_CLASS, onChange: this.handleFilterChanged }, options);
    };
    FileDialogTreeFiltersRenderer.prototype.renderLocation = function (value) {
        return React.createElement("option", { value: value, key: value }, value);
    };
    FileDialogTreeFiltersRenderer.prototype.onFilterChanged = function (e) {
        var locationList = this.locationList;
        if (locationList) {
            var value = locationList.value;
            var filters = this.filters[value];
            this.fileDialogTree.setFilter(filters);
        }
        e.preventDefault();
        e.stopPropagation();
    };
    Object.defineProperty(FileDialogTreeFiltersRenderer.prototype, "locationList", {
        get: function () {
            var locationList = this.host.getElementsByClassName(exports.FILE_TREE_FILTERS_LIST_CLASS)[0];
            if (locationList instanceof HTMLSelectElement) {
                return locationList;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    return FileDialogTreeFiltersRenderer;
}(react_renderer_1.ReactRenderer));
exports.FileDialogTreeFiltersRenderer = FileDialogTreeFiltersRenderer;
//# sourceMappingURL=file-dialog-tree-filters-renderer.js.map