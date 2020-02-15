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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var output_channel_1 = require("../common/output-channel");
var react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
var React = require("react");
require("../../src/browser/style/output.css");
exports.OUTPUT_WIDGET_KIND = 'outputView';
var OutputWidget = /** @class */ (function (_super) {
    __extends(OutputWidget, _super);
    function OutputWidget() {
        var _this = _super.call(this) || this;
        _this.id = exports.OUTPUT_WIDGET_KIND;
        _this.title.label = 'Output';
        _this.title.caption = 'Output';
        _this.title.iconClass = 'fa output-tab-icon';
        _this.title.closable = true;
        _this.addClass('theia-output');
        _this.node.tabIndex = 0;
        return _this;
    }
    OutputWidget_1 = OutputWidget;
    OutputWidget.prototype.init = function () {
        var _this = this;
        this.outputChannelManager.getChannels().forEach(this.registerListener.bind(this));
        this.toDispose.push(this.outputChannelManager.onChannelAdded(function (channel) {
            _this.registerListener(channel);
            _this.update();
        }));
        this.toDispose.push(this.outputChannelManager.onSelectedChannelChange(function (event) {
            _this.update();
        }));
        this.update();
    };
    OutputWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        var channelSelector = document.getElementById(OutputWidget_1.IDs.CHANNEL_LIST);
        if (channelSelector) {
            channelSelector.focus();
        }
        else {
            this.node.focus();
        }
    };
    OutputWidget.prototype.registerListener = function (outputChannel) {
        var _this = this;
        this.toDispose.push(outputChannel.onContentChange(function (c) {
            if (outputChannel === _this.outputChannelManager.selectedChannel) {
                _this.update();
            }
        }));
    };
    OutputWidget.prototype.render = function () {
        return React.createElement(React.Fragment, null, this.renderChannelContents());
    };
    OutputWidget.prototype.clear = function () {
        if (this.outputChannelManager.selectedChannel) {
            this.outputChannelManager.selectedChannel.clear();
        }
    };
    OutputWidget.prototype.renderChannelContents = function () {
        return React.createElement("div", { id: OutputWidget_1.IDs.CONTENTS }, this.renderLines());
    };
    OutputWidget.prototype.renderLines = function () {
        var e_1, _a, e_2, _b;
        var id = 0;
        var result = [];
        var style = {
            whiteSpace: 'pre',
            fontFamily: 'monospace',
        };
        if (this.outputChannelManager.selectedChannel) {
            try {
                for (var _c = __values(this.outputChannelManager.selectedChannel.getLines()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var text = _d.value;
                    var lines = text.split(/[\n\r]+/);
                    try {
                        for (var lines_1 = (e_2 = void 0, __values(lines)), lines_1_1 = lines_1.next(); !lines_1_1.done; lines_1_1 = lines_1.next()) {
                            var line = lines_1_1.value;
                            result.push(React.createElement("div", { style: style, key: id++ }, line));
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (lines_1_1 && !lines_1_1.done && (_b = lines_1.return)) _b.call(lines_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (result.length === 0) {
            result.push(React.createElement("div", { style: style, key: id++ }, '<no output yet>'));
        }
        return result;
    };
    OutputWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        setTimeout(function () {
            var div = document.getElementById(OutputWidget_1.IDs.CONTENTS);
            if (div && div.children.length > 0) {
                div.children[div.children.length - 1].scrollIntoView(false);
            }
        });
    };
    var OutputWidget_1;
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], OutputWidget.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OutputWidget.prototype, "init", null);
    OutputWidget = OutputWidget_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], OutputWidget);
    return OutputWidget;
}(react_widget_1.ReactWidget));
exports.OutputWidget = OutputWidget;
(function (OutputWidget) {
    var IDs;
    (function (IDs) {
        IDs.CONTENTS = 'outputContents';
        IDs.CHANNEL_LIST = 'outputChannelList';
    })(IDs = OutputWidget.IDs || (OutputWidget.IDs = {}));
})(OutputWidget = exports.OutputWidget || (exports.OutputWidget = {}));
exports.OutputWidget = OutputWidget;
//# sourceMappingURL=output-widget.js.map