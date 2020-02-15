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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var source_tree_1 = require("@theia/core/lib/browser/source-tree");
var source_tree_2 = require("@theia/core/lib/browser/source-tree");
var console_session_1 = require("./console-session");
var severity_1 = require("@theia/core/lib/common/severity");
var ConsoleContentWidget = /** @class */ (function (_super) {
    __extends(ConsoleContentWidget, _super);
    function ConsoleContentWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._shouldScrollToEnd = true;
        return _this;
    }
    ConsoleContentWidget_1 = ConsoleContentWidget;
    Object.defineProperty(ConsoleContentWidget.prototype, "shouldScrollToEnd", {
        get: function () {
            return this._shouldScrollToEnd;
        },
        set: function (shouldScrollToEnd) {
            this._shouldScrollToEnd = shouldScrollToEnd;
            this.shouldScrollToRow = this._shouldScrollToEnd;
        },
        enumerable: true,
        configurable: true
    });
    ConsoleContentWidget.createContainer = function (parent, props) {
        var child = source_tree_2.SourceTreeWidget.createContainer(parent, __assign({ contextMenuPath: ConsoleContentWidget_1.CONTEXT_MENU }, props));
        child.unbind(source_tree_2.SourceTreeWidget);
        child.bind(ConsoleContentWidget_1).toSelf();
        return child;
    };
    ConsoleContentWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        this.toDisposeOnDetach.push(this.onScrollUp(function () { return _this.shouldScrollToEnd = false; }));
        this.toDisposeOnDetach.push(this.onScrollYReachEnd(function () { return _this.shouldScrollToEnd = true; }));
        this.toDisposeOnDetach.push(this.model.onChanged(function () { return _this.revealLastOutputIfNeeded(); }));
    };
    ConsoleContentWidget.prototype.revealLastOutputIfNeeded = function () {
        var root = this.model.root;
        if (this.shouldScrollToEnd && source_tree_1.TreeSourceNode.is(root)) {
            this.model.selectNode(root.children[root.children.length - 1]);
        }
    };
    ConsoleContentWidget.prototype.createTreeElementNodeClassNames = function (node) {
        var classNames = _super.prototype.createTreeElementNodeClassNames.call(this, node);
        if (node.element) {
            var className = this.toClassName(node.element);
            if (className) {
                classNames.push(className);
            }
        }
        return classNames;
    };
    ConsoleContentWidget.prototype.toClassName = function (item) {
        if (item.severity === severity_1.Severity.Error) {
            return console_session_1.ConsoleItem.errorClassName;
        }
        if (item.severity === severity_1.Severity.Warning) {
            return console_session_1.ConsoleItem.warningClassName;
        }
        if (item.severity === severity_1.Severity.Info) {
            return console_session_1.ConsoleItem.infoClassName;
        }
        if (item.severity === severity_1.Severity.Log) {
            return console_session_1.ConsoleItem.logClassName;
        }
        return undefined;
    };
    var ConsoleContentWidget_1;
    ConsoleContentWidget.CONTEXT_MENU = ['console-context-menu'];
    ConsoleContentWidget = ConsoleContentWidget_1 = __decorate([
        inversify_1.injectable()
    ], ConsoleContentWidget);
    return ConsoleContentWidget;
}(source_tree_2.SourceTreeWidget));
exports.ConsoleContentWidget = ConsoleContentWidget;
//# sourceMappingURL=console-content-widget.js.map