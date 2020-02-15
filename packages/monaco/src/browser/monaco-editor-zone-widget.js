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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation and others. All rights reserved.
 *  Licensed under the MIT License. See https://github.com/Microsoft/vscode/blob/master/LICENSE.txt for license information.
 *--------------------------------------------------------------------------------------------*/
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
var core_1 = require("@theia/core");
var MonacoEditorZoneWidget = /** @class */ (function () {
    function MonacoEditorZoneWidget(editor) {
        var _this = this;
        this.editor = editor;
        this.zoneNode = document.createElement('div');
        this.containerNode = document.createElement('div');
        this.onDidLayoutChangeEmitter = new core_1.Emitter();
        this.onDidLayoutChange = this.onDidLayoutChangeEmitter.event;
        this.toHide = new core_1.DisposableCollection();
        this.toDispose = new core_1.DisposableCollection(this.onDidLayoutChangeEmitter, this.toHide);
        this.zoneNode.classList.add('zone-widget');
        this.containerNode.classList.add('zone-widget-container');
        this.zoneNode.appendChild(this.containerNode);
        this.updateWidth();
        this.toDispose.push(this.editor.onDidLayoutChange(function (info) { return _this.updateWidth(info); }));
    }
    MonacoEditorZoneWidget.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(MonacoEditorZoneWidget.prototype, "options", {
        get: function () {
            return this.viewZone ? this._options : undefined;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorZoneWidget.prototype.hide = function () {
        this.toHide.dispose();
    };
    MonacoEditorZoneWidget.prototype.show = function (options) {
        var _this = this;
        var _a = this._options = __assign({ showFrame: true }, options), afterLineNumber = _a.afterLineNumber, afterColumn = _a.afterColumn, heightInLines = _a.heightInLines;
        var lineHeight = this.editor.getConfiguration().lineHeight;
        var maxHeightInLines = (this.editor.getLayoutInfo().height / lineHeight) * .8;
        if (heightInLines >= maxHeightInLines) {
            heightInLines = maxHeightInLines;
        }
        this.toHide.dispose();
        this.editor.changeViewZones(function (accessor) {
            _this.zoneNode.style.top = '-1000px';
            var domNode = document.createElement('div');
            domNode.style.overflow = 'hidden';
            var zone = {
                domNode: domNode,
                afterLineNumber: afterLineNumber,
                afterColumn: afterColumn,
                heightInLines: heightInLines,
                onDomNodeTop: function (zoneTop) { return _this.updateTop(zoneTop); },
                onComputedHeight: function (zoneHeight) { return _this.updateHeight(zoneHeight); }
            };
            _this.viewZone = Object.assign(zone, {
                id: accessor.addZone(zone)
            });
            var id = _this.viewZone.id;
            _this.toHide.push(core_1.Disposable.create(function () {
                _this.editor.changeViewZones(function (a) { return a.removeZone(id); });
                _this.viewZone = undefined;
            }));
            var widget = {
                getId: function () { return 'editor-zone-widget-' + id; },
                getDomNode: function () { return _this.zoneNode; },
                // eslint-disable-next-line no-null/no-null
                getPosition: function () { return null; }
            };
            _this.editor.addOverlayWidget(widget);
            _this.toHide.push(core_1.Disposable.create(function () { return _this.editor.removeOverlayWidget(widget); }));
        });
        this.containerNode.style.top = 0 + 'px';
        this.containerNode.style.overflow = 'hidden';
        this.updateContainerHeight(heightInLines * lineHeight);
        var model = this.editor.getModel();
        if (model) {
            var revealLineNumber = Math.min(model.getLineCount(), Math.max(1, afterLineNumber + 1));
            this.editor.revealLine(revealLineNumber, monaco.editor.ScrollType.Smooth);
        }
    };
    MonacoEditorZoneWidget.prototype.layout = function (heightInLines) {
        if (this.viewZone && this.viewZone.heightInLines !== heightInLines) {
            this.viewZone.heightInLines = heightInLines;
            var id_1 = this.viewZone.id;
            this.editor.changeViewZones(function (accessor) { return accessor.layoutZone(id_1); });
        }
    };
    MonacoEditorZoneWidget.prototype.updateTop = function (top) {
        this.zoneNode.style.top = top + 'px';
    };
    MonacoEditorZoneWidget.prototype.updateHeight = function (zoneHeight) {
        this.zoneNode.style.height = zoneHeight + 'px';
        this.updateContainerHeight(zoneHeight);
    };
    MonacoEditorZoneWidget.prototype.updateContainerHeight = function (zoneHeight) {
        var _a = this.computeContainerHeight(zoneHeight), frameWidth = _a.frameWidth, height = _a.height;
        this.containerNode.style.height = height + 'px';
        this.containerNode.style.borderTopWidth = frameWidth + 'px';
        this.containerNode.style.borderBottomWidth = frameWidth + 'px';
        var width = this.computeWidth();
        this.onDidLayoutChangeEmitter.fire({ height: height, width: width });
    };
    MonacoEditorZoneWidget.prototype.computeContainerHeight = function (zoneHeight) {
        var lineHeight = this.editor.getConfiguration().lineHeight;
        var frameWidth = this._options && this._options.frameWidth;
        var frameThickness = this._options && this._options.showFrame ? Math.round(lineHeight / 9) : 0;
        return {
            frameWidth: frameWidth !== undefined ? frameWidth : frameThickness,
            height: zoneHeight - 2 * frameThickness
        };
    };
    MonacoEditorZoneWidget.prototype.updateWidth = function (info) {
        if (info === void 0) { info = this.editor.getLayoutInfo(); }
        var width = this.computeWidth(info);
        this.zoneNode.style.width = width + 'px';
        this.zoneNode.style.left = this.computeLeft(info) + 'px';
    };
    MonacoEditorZoneWidget.prototype.computeWidth = function (info) {
        if (info === void 0) { info = this.editor.getLayoutInfo(); }
        return info.width - info.minimapWidth - info.verticalScrollbarWidth;
    };
    MonacoEditorZoneWidget.prototype.computeLeft = function (info) {
        if (info === void 0) { info = this.editor.getLayoutInfo(); }
        // If minimap is to the left, we move beyond it
        if (info.minimapWidth > 0 && info.minimapLeft === 0) {
            return info.minimapWidth;
        }
        return 0;
    };
    return MonacoEditorZoneWidget;
}());
exports.MonacoEditorZoneWidget = MonacoEditorZoneWidget;
//# sourceMappingURL=monaco-editor-zone-widget.js.map