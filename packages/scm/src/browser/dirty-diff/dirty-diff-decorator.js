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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/editor/lib/browser");
var DirtyDiffDecorationType;
(function (DirtyDiffDecorationType) {
    DirtyDiffDecorationType["AddedLine"] = "dirty-diff-added-line";
    DirtyDiffDecorationType["RemovedLine"] = "dirty-diff-removed-line";
    DirtyDiffDecorationType["ModifiedLine"] = "dirty-diff-modified-line";
})(DirtyDiffDecorationType = exports.DirtyDiffDecorationType || (exports.DirtyDiffDecorationType = {}));
var AddedLineDecoration = {
    linesDecorationsClassName: 'dirty-diff-glyph dirty-diff-added-line',
    overviewRuler: {
        color: 'editorOverviewRuler.addedForeground',
        position: browser_1.OverviewRulerLane.Left,
    },
    minimap: {
        color: 'minimapGutter.addedBackground',
        position: browser_1.MinimapPosition.Gutter
    },
    isWholeLine: true
};
var RemovedLineDecoration = {
    linesDecorationsClassName: 'dirty-diff-glyph dirty-diff-removed-line',
    overviewRuler: {
        color: 'editorOverviewRuler.deletedForeground',
        position: browser_1.OverviewRulerLane.Left,
    },
    minimap: {
        color: 'minimapGutter.deletedBackground',
        position: browser_1.MinimapPosition.Gutter
    },
    isWholeLine: false
};
var ModifiedLineDecoration = {
    linesDecorationsClassName: 'dirty-diff-glyph dirty-diff-modified-line',
    overviewRuler: {
        color: 'editorOverviewRuler.modifiedForeground',
        position: browser_1.OverviewRulerLane.Left,
    },
    minimap: {
        color: 'minimapGutter.modifiedBackground',
        position: browser_1.MinimapPosition.Gutter
    },
    isWholeLine: true
};
var DirtyDiffDecorator = /** @class */ (function (_super) {
    __extends(DirtyDiffDecorator, _super);
    function DirtyDiffDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirtyDiffDecorator.prototype.applyDecorations = function (update) {
        var _this = this;
        var modifications = update.modified.map(function (range) { return _this.toDeltaDecoration(range, ModifiedLineDecoration); });
        var additions = update.added.map(function (range) { return _this.toDeltaDecoration(range, AddedLineDecoration); });
        var removals = update.removed.map(function (line) { return _this.toDeltaDecoration(line, RemovedLineDecoration); });
        var decorations = __spread(modifications, additions, removals);
        this.setDecorations(update.editor, decorations);
    };
    DirtyDiffDecorator.prototype.toDeltaDecoration = function (from, options) {
        var _a = __read((typeof from === 'number') ? [from, from] : [from.start, from.end], 2), start = _a[0], end = _a[1];
        var range = browser_1.Range.create(browser_1.Position.create(start, 0), browser_1.Position.create(end, 0));
        return { range: range, options: options };
    };
    DirtyDiffDecorator = __decorate([
        inversify_1.injectable()
    ], DirtyDiffDecorator);
    return DirtyDiffDecorator;
}(browser_1.EditorDecorator));
exports.DirtyDiffDecorator = DirtyDiffDecorator;
//# sourceMappingURL=dirty-diff-decorator.js.map