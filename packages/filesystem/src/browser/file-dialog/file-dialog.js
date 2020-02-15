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
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/core/lib/browser");
var location_1 = require("../location");
var file_dialog_widget_1 = require("./file-dialog-widget");
var file_dialog_tree_filters_renderer_1 = require("./file-dialog-tree-filters-renderer");
var widgets_1 = require("@phosphor/widgets");
exports.OpenFileDialogFactory = Symbol('OpenFileDialogFactory');
exports.SaveFileDialogFactory = Symbol('SaveFileDialogFactory');
exports.SAVE_DIALOG_CLASS = 'theia-SaveFileDialog';
exports.NAVIGATION_PANEL_CLASS = 'theia-NavigationPanel';
exports.NAVIGATION_BACK_CLASS = 'theia-NavigationBack';
exports.NAVIGATION_FORWARD_CLASS = 'theia-NavigationForward';
exports.NAVIGATION_HOME_CLASS = 'theia-NavigationHome';
exports.NAVIGATION_LOCATION_LIST_PANEL_CLASS = 'theia-LocationListPanel';
exports.FILTERS_PANEL_CLASS = 'theia-FiltersPanel';
exports.FILTERS_LABEL_CLASS = 'theia-FiltersLabel';
exports.FILTERS_LIST_PANEL_CLASS = 'theia-FiltersListPanel';
exports.FILENAME_PANEL_CLASS = 'theia-FileNamePanel';
exports.FILENAME_LABEL_CLASS = 'theia-FileNameLabel';
exports.FILENAME_TEXTFIELD_CLASS = 'theia-FileNameTextField';
exports.CONTROL_PANEL_CLASS = 'theia-ControlPanel';
var FileDialogProps = /** @class */ (function (_super) {
    __extends(FileDialogProps, _super);
    function FileDialogProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FileDialogProps;
}(browser_2.DialogProps));
exports.FileDialogProps = FileDialogProps;
var OpenFileDialogProps = /** @class */ (function (_super) {
    __extends(OpenFileDialogProps, _super);
    function OpenFileDialogProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenFileDialogProps = __decorate([
        inversify_1.injectable()
    ], OpenFileDialogProps);
    return OpenFileDialogProps;
}(FileDialogProps));
exports.OpenFileDialogProps = OpenFileDialogProps;
var SaveFileDialogProps = /** @class */ (function (_super) {
    __extends(SaveFileDialogProps, _super);
    function SaveFileDialogProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveFileDialogProps = __decorate([
        inversify_1.injectable()
    ], SaveFileDialogProps);
    return SaveFileDialogProps;
}(FileDialogProps));
exports.SaveFileDialogProps = SaveFileDialogProps;
var FileDialog = /** @class */ (function (_super) {
    __extends(FileDialog, _super);
    function FileDialog(props, widget) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        _this.widget = widget;
        _this.treePanel = new widgets_1.Panel();
        _this.treePanel.addWidget(_this.widget);
        _this.toDispose.push(_this.treePanel);
        _this.toDispose.push(_this.model.onChanged(function () { return _this.update(); }));
        _this.toDispose.push(_this.model.onDidOpenFile(function () { return _this.accept(); }));
        _this.toDispose.push(_this.model.onSelectionChanged(function () { return _this.update(); }));
        var navigationPanel = document.createElement('div');
        navigationPanel.classList.add(exports.NAVIGATION_PANEL_CLASS);
        _this.contentNode.appendChild(navigationPanel);
        navigationPanel.appendChild(_this.back = browser_2.createIconButton('fa', 'fa-chevron-left'));
        _this.back.classList.add(exports.NAVIGATION_BACK_CLASS);
        _this.back.title = 'Navigate Back';
        navigationPanel.appendChild(_this.forward = browser_2.createIconButton('fa', 'fa-chevron-right'));
        _this.forward.classList.add(exports.NAVIGATION_FORWARD_CLASS);
        _this.forward.title = 'Navigate Forward';
        navigationPanel.appendChild(_this.home = browser_2.createIconButton('fa', 'fa-home'));
        _this.home.classList.add(exports.NAVIGATION_HOME_CLASS);
        _this.home.title = 'Go To Initial Location';
        _this.locationListRenderer = _this.createLocationListRenderer();
        _this.locationListRenderer.host.classList.add(exports.NAVIGATION_LOCATION_LIST_PANEL_CLASS);
        navigationPanel.appendChild(_this.locationListRenderer.host);
        _this.treeFiltersRenderer = _this.createFileTreeFiltersRenderer();
        return _this;
    }
    Object.defineProperty(FileDialog.prototype, "model", {
        get: function () {
            return this.widget.model;
        },
        enumerable: true,
        configurable: true
    });
    FileDialog.prototype.createLocationListRenderer = function () {
        return new location_1.LocationListRenderer(this.model);
    };
    FileDialog.prototype.createFileTreeFiltersRenderer = function () {
        if (this.props.filters) {
            return new file_dialog_tree_filters_renderer_1.FileDialogTreeFiltersRenderer(this.props.filters, this.widget.model.tree);
        }
        return undefined;
    };
    FileDialog.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        browser_2.setEnabled(this.back, this.model.canNavigateBackward());
        browser_2.setEnabled(this.forward, this.model.canNavigateForward());
        browser_2.setEnabled(this.home, !!this.model.initialLocation
            && !!this.model.location
            && this.model.initialLocation.toString() !== this.model.location.toString());
        this.locationListRenderer.render();
        if (this.treeFiltersRenderer) {
            this.treeFiltersRenderer.render();
        }
        this.widget.update();
    };
    FileDialog.prototype.appendFiltersPanel = function () {
        if (this.treeFiltersRenderer) {
            var filtersPanel = document.createElement('div');
            filtersPanel.classList.add(exports.FILTERS_PANEL_CLASS);
            this.contentNode.appendChild(filtersPanel);
            var titlePanel = document.createElement('div');
            titlePanel.innerHTML = 'Format:';
            titlePanel.classList.add(exports.FILTERS_LABEL_CLASS);
            filtersPanel.appendChild(titlePanel);
            this.treeFiltersRenderer.host.classList.add(exports.FILTERS_LIST_PANEL_CLASS);
            filtersPanel.appendChild(this.treeFiltersRenderer.host);
        }
    };
    FileDialog.prototype.onAfterAttach = function (msg) {
        var _this = this;
        browser_2.Widget.attach(this.treePanel, this.contentNode);
        this.toDisposeOnDetach.push(common_1.Disposable.create(function () {
            browser_2.Widget.detach(_this.treePanel);
            _this.locationListRenderer.dispose();
            if (_this.treeFiltersRenderer) {
                _this.treeFiltersRenderer.dispose();
            }
        }));
        this.appendFiltersPanel();
        this.appendCloseButton('Cancel');
        this.appendAcceptButton(this.getAcceptButtonLabel());
        this.addKeyListener(this.back, browser_1.Key.ENTER, function () { return _this.model.navigateBackward(); }, 'click');
        this.addKeyListener(this.forward, browser_1.Key.ENTER, function () { return _this.model.navigateForward(); }, 'click');
        this.addKeyListener(this.home, browser_1.Key.ENTER, function () {
            if (_this.model.initialLocation) {
                _this.model.location = _this.model.initialLocation;
            }
        }, 'click');
        _super.prototype.onAfterAttach.call(this, msg);
    };
    FileDialog.prototype.onActivateRequest = function (msg) {
        this.widget.activate();
    };
    FileDialog = __decorate([
        __param(0, inversify_1.inject(FileDialogProps)),
        __param(1, inversify_1.inject(file_dialog_widget_1.FileDialogWidget)),
        __metadata("design:paramtypes", [FileDialogProps,
            file_dialog_widget_1.FileDialogWidget])
    ], FileDialog);
    return FileDialog;
}(browser_2.AbstractDialog));
exports.FileDialog = FileDialog;
var OpenFileDialog = /** @class */ (function (_super) {
    __extends(OpenFileDialog, _super);
    function OpenFileDialog(props, widget) {
        var _this = _super.call(this, props, widget) || this;
        _this.props = props;
        _this.widget = widget;
        if (props.canSelectFiles !== undefined) {
            _this.widget.disableFileSelection = !props.canSelectFiles;
        }
        return _this;
    }
    OpenFileDialog.prototype.getAcceptButtonLabel = function () {
        return this.props.openLabel ? this.props.openLabel : 'Open';
    };
    OpenFileDialog.prototype.isValid = function (value) {
        if (value && !this.props.canSelectMany && value instanceof Array) {
            return 'You can select only one item';
        }
        return '';
    };
    Object.defineProperty(OpenFileDialog.prototype, "value", {
        get: function () {
            if (this.widget.model.selectedFileStatNodes.length === 1) {
                return this.widget.model.selectedFileStatNodes[0];
            }
            else {
                return this.widget.model.selectedFileStatNodes;
            }
        },
        enumerable: true,
        configurable: true
    });
    OpenFileDialog.prototype.accept = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selection;
            return __generator(this, function (_a) {
                selection = this.value;
                if (!this.props.canSelectFolders
                    && !Array.isArray(selection)
                    && selection.fileStat.isDirectory) {
                    this.widget.model.openNode(selection);
                    return [2 /*return*/];
                }
                _super.prototype.accept.call(this);
                return [2 /*return*/];
            });
        });
    };
    OpenFileDialog = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(OpenFileDialogProps)),
        __param(1, inversify_1.inject(file_dialog_widget_1.FileDialogWidget)),
        __metadata("design:paramtypes", [OpenFileDialogProps,
            file_dialog_widget_1.FileDialogWidget])
    ], OpenFileDialog);
    return OpenFileDialog;
}(FileDialog));
exports.OpenFileDialog = OpenFileDialog;
var SaveFileDialog = /** @class */ (function (_super) {
    __extends(SaveFileDialog, _super);
    function SaveFileDialog(props, widget) {
        var _this = _super.call(this, props, widget) || this;
        _this.props = props;
        _this.widget = widget;
        widget.addClass(exports.SAVE_DIALOG_CLASS);
        return _this;
    }
    SaveFileDialog.prototype.getAcceptButtonLabel = function () {
        return this.props.saveLabel ? this.props.saveLabel : 'Save';
    };
    SaveFileDialog.prototype.onUpdateRequest = function (msg) {
        // Update file name field when changing a selection
        if (this.fileNameField) {
            if (this.widget.model.selectedFileStatNodes.length === 1) {
                var node = this.widget.model.selectedFileStatNodes[0];
                if (!node.fileStat.isDirectory) {
                    this.fileNameField.value = this.labelProvider.getName(node);
                }
            }
            else {
                this.fileNameField.value = '';
            }
        }
        // Continue updating the dialog
        _super.prototype.onUpdateRequest.call(this, msg);
    };
    SaveFileDialog.prototype.isValid = function (value) {
        if (this.fileNameField && this.fileNameField.value) {
            return '';
        }
        return false;
    };
    Object.defineProperty(SaveFileDialog.prototype, "value", {
        get: function () {
            if (this.fileNameField && this.widget.model.selectedFileStatNodes.length === 1) {
                var node = this.widget.model.selectedFileStatNodes[0];
                if (node.fileStat.isDirectory) {
                    return node.uri.resolve(this.fileNameField.value);
                }
                return node.uri.parent.resolve(this.fileNameField.value);
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    SaveFileDialog.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        var fileNamePanel = document.createElement('div');
        fileNamePanel.classList.add(exports.FILENAME_PANEL_CLASS);
        this.contentNode.appendChild(fileNamePanel);
        var titlePanel = document.createElement('div');
        titlePanel.innerHTML = 'Name:';
        titlePanel.classList.add(exports.FILENAME_LABEL_CLASS);
        fileNamePanel.appendChild(titlePanel);
        this.fileNameField = document.createElement('input');
        this.fileNameField.type = 'text';
        this.fileNameField.classList.add('theia-input', exports.FILENAME_TEXTFIELD_CLASS);
        this.fileNameField.value = this.props.inputValue || '';
        fileNamePanel.appendChild(this.fileNameField);
        this.fileNameField.onkeyup = function () { return _this.validate(); };
    };
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], SaveFileDialog.prototype, "labelProvider", void 0);
    SaveFileDialog = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(SaveFileDialogProps)),
        __param(1, inversify_1.inject(file_dialog_widget_1.FileDialogWidget)),
        __metadata("design:paramtypes", [SaveFileDialogProps,
            file_dialog_widget_1.FileDialogWidget])
    ], SaveFileDialog);
    return SaveFileDialog;
}(FileDialog));
exports.SaveFileDialog = SaveFileDialog;
//# sourceMappingURL=file-dialog.js.map