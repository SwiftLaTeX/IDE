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
var inversify_1 = require("inversify");
var disposable_1 = require("@theia/core/lib/common/disposable");
var widget_1 = require("@theia/core/lib/browser/widgets/widget");
var mini_browser_content_1 = require("./mini-browser-content");
exports.MiniBrowserProps = mini_browser_content_1.MiniBrowserProps;
var MiniBrowserOptions = /** @class */ (function () {
    function MiniBrowserOptions() {
    }
    MiniBrowserOptions = __decorate([
        inversify_1.injectable()
    ], MiniBrowserOptions);
    return MiniBrowserOptions;
}());
exports.MiniBrowserOptions = MiniBrowserOptions;
var MiniBrowser = /** @class */ (function (_super) {
    __extends(MiniBrowser, _super);
    function MiniBrowser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toDisposeOnProps = new disposable_1.DisposableCollection();
        return _this;
    }
    MiniBrowser_1 = MiniBrowser;
    MiniBrowser.prototype.init = function () {
        var uri = this.options.uri;
        this.id = MiniBrowser_1.ID + ":" + uri.toString();
        this.title.closable = true;
        this.layout = new widget_1.PanelLayout({ fitPolicy: 'set-no-constraint' });
    };
    MiniBrowser.prototype.getResourceUri = function () {
        return this.options.uri;
    };
    MiniBrowser.prototype.createMoveToUri = function (resourceUri) {
        return this.options.uri && this.options.uri.withPath(resourceUri.path);
    };
    MiniBrowser.prototype.setProps = function (raw) {
        var props = {
            toolbar: raw.toolbar,
            startPage: raw.startPage,
            sandbox: raw.sandbox,
            iconClass: raw.iconClass,
            name: raw.name,
            resetBackground: raw.resetBackground
        };
        if (JSON.stringify(props) === JSON.stringify(this.props)) {
            return;
        }
        this.toDisposeOnProps.dispose();
        this.toDispose.push(this.toDisposeOnProps);
        this.props = props;
        this.title.caption = this.title.label = props.name || 'Browser';
        this.title.iconClass = props.iconClass || MiniBrowser_1.ICON;
        var content = this.createContent(props);
        this.layout.addWidget(content);
        this.toDisposeOnProps.push(content);
    };
    MiniBrowser.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        var widget = this.layout.widgets[0];
        if (widget) {
            widget.activate();
        }
    };
    MiniBrowser.prototype.storeState = function () {
        var props = this.props;
        return { props: props };
    };
    MiniBrowser.prototype.restoreState = function (oldState) {
        if (!this.toDisposeOnProps.disposed) {
            return;
        }
        if ('props' in oldState) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.setProps(oldState['props']);
        }
    };
    var MiniBrowser_1;
    MiniBrowser.ID = 'mini-browser';
    MiniBrowser.ICON = 'fa fa-globe';
    __decorate([
        inversify_1.inject(MiniBrowserOptions),
        __metadata("design:type", MiniBrowserOptions)
    ], MiniBrowser.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(mini_browser_content_1.MiniBrowserContentFactory),
        __metadata("design:type", Function)
    ], MiniBrowser.prototype, "createContent", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MiniBrowser.prototype, "init", null);
    MiniBrowser = MiniBrowser_1 = __decorate([
        inversify_1.injectable()
    ], MiniBrowser);
    return MiniBrowser;
}(widget_1.BaseWidget));
exports.MiniBrowser = MiniBrowser;
//# sourceMappingURL=mini-browser.js.map