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
var widgets_1 = require("@phosphor/widgets");
var SplitPositionHandler = /** @class */ (function () {
    function SplitPositionHandler() {
        this.splitMoves = [];
        this.currentMoveIndex = 0;
    }
    /**
     * Set the position of a split handle asynchronously. This function makes sure that such movements
     * are performed one after another in order to prevent the movements from overriding each other.
     * When resolved, the returned promise yields the final position of the split handle.
     */
    SplitPositionHandler.prototype.setSplitHandlePosition = function (parent, index, targetPosition, options) {
        var move = __assign(__assign({}, options), { parent: parent, targetPosition: targetPosition, index: index, started: false, ended: false });
        return this.moveSplitPos(move);
    };
    /**
     * Resize a side panel asynchronously. This function makes sure that such movements are performed
     * one after another in order to prevent the movements from overriding each other.
     * When resolved, the returned promise yields the final position of the split handle.
     */
    SplitPositionHandler.prototype.setSidePanelSize = function (sidePanel, targetSize, options) {
        if (targetSize < 0) {
            return Promise.reject(new Error('Cannot resize to negative value.'));
        }
        var parent = sidePanel.parent;
        if (!(parent instanceof widgets_1.SplitPanel)) {
            return Promise.reject(new Error('Widget must be contained in a SplitPanel.'));
        }
        var index = parent.widgets.indexOf(sidePanel);
        if (index > 0 && (options.side === 'right' || options.side === 'bottom')) {
            index--;
        }
        var move = __assign(__assign({}, options), { parent: parent, targetSize: targetSize, index: index, started: false, ended: false });
        return this.moveSplitPos(move);
    };
    SplitPositionHandler.prototype.moveSplitPos = function (move) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            move.resolve = resolve;
            move.reject = reject;
            if (_this.splitMoves.length === 0) {
                window.requestAnimationFrame(_this.animationFrame.bind(_this));
            }
            _this.splitMoves.push(move);
        });
    };
    SplitPositionHandler.prototype.animationFrame = function (time) {
        var move = this.splitMoves[this.currentMoveIndex];
        var rejectedOrResolved = false;
        if (move.ended || move.referenceWidget && move.referenceWidget.isHidden) {
            this.splitMoves.splice(this.currentMoveIndex, 1);
            if (move.startPosition === undefined || move.targetPosition === undefined) {
                move.reject('Panel is not visible.');
            }
            else {
                move.resolve(move.targetPosition);
            }
            rejectedOrResolved = true;
        }
        else if (!move.started) {
            this.startMove(move, time);
            if (move.duration <= 0 || move.startPosition === undefined || move.targetPosition === undefined
                || move.startPosition === move.targetPosition) {
                this.endMove(move);
            }
        }
        else {
            var elapsedTime = time - move.startTime;
            if (elapsedTime >= move.duration) {
                this.endMove(move);
            }
            else {
                var t = elapsedTime / move.duration;
                var start = move.startPosition || 0;
                var target = move.targetPosition || 0;
                var pos = start + (target - start) * t;
                move.parent.layout.moveHandle(move.index, pos);
            }
        }
        if (!rejectedOrResolved) {
            this.currentMoveIndex++;
        }
        if (this.currentMoveIndex >= this.splitMoves.length) {
            this.currentMoveIndex = 0;
        }
        if (this.splitMoves.length > 0) {
            window.requestAnimationFrame(this.animationFrame.bind(this));
        }
    };
    SplitPositionHandler.prototype.startMove = function (move, time) {
        if (move.targetPosition === undefined && move.targetSize !== undefined) {
            var _a = move.parent.node, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
            if (clientWidth && clientHeight) {
                switch (move.side) {
                    case 'left':
                        move.targetPosition = Math.max(Math.min(move.targetSize, clientWidth), 0);
                        break;
                    case 'right':
                        move.targetPosition = Math.max(Math.min(clientWidth - move.targetSize, clientWidth), 0);
                        break;
                    case 'top':
                        move.targetPosition = Math.max(Math.min(move.targetSize, clientHeight), 0);
                        break;
                    case 'bottom':
                        move.targetPosition = Math.max(Math.min(clientHeight - move.targetSize, clientHeight), 0);
                        break;
                }
            }
        }
        if (move.startPosition === undefined) {
            move.startPosition = this.getCurrentPosition(move);
        }
        move.startTime = time;
        move.started = true;
    };
    SplitPositionHandler.prototype.endMove = function (move) {
        if (move.targetPosition !== undefined) {
            move.parent.layout.moveHandle(move.index, move.targetPosition);
        }
        move.ended = true;
    };
    SplitPositionHandler.prototype.getCurrentPosition = function (move) {
        var layout = move.parent.layout;
        var pos;
        if (layout.orientation === 'horizontal') {
            pos = layout.handles[move.index].offsetLeft;
        }
        else {
            pos = layout.handles[move.index].offsetTop;
        }
        // eslint-disable-next-line no-null/no-null
        if (pos !== null) {
            return pos;
        }
        else {
            return undefined;
        }
    };
    SplitPositionHandler = __decorate([
        inversify_1.injectable()
    ], SplitPositionHandler);
    return SplitPositionHandler;
}());
exports.SplitPositionHandler = SplitPositionHandler;
//# sourceMappingURL=split-panels.js.map