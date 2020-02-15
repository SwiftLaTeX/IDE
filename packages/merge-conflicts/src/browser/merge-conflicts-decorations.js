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
var browser_1 = require("@theia/editor/lib/browser");
var MergeConflictsDecorations = /** @class */ (function (_super) {
    __extends(MergeConflictsDecorations, _super);
    function MergeConflictsDecorations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MergeConflictsDecorations_1 = MergeConflictsDecorations;
    MergeConflictsDecorations.prototype.decorate = function (params) {
        var e_1, _a, e_2, _b;
        var mergeConflicts = params.mergeConflicts;
        var newDecorations = [];
        try {
            for (var mergeConflicts_1 = __values(mergeConflicts), mergeConflicts_1_1 = mergeConflicts_1.next(); !mergeConflicts_1_1.done; mergeConflicts_1_1 = mergeConflicts_1.next()) {
                var mergeConflict = mergeConflicts_1_1.value;
                newDecorations.push({ range: mergeConflict.current.marker, options: MergeConflictsDecorations_1.Options.CurrentMarker });
                if (mergeConflict.current.content) {
                    newDecorations.push({ range: mergeConflict.current.content, options: MergeConflictsDecorations_1.Options.CurrentContent });
                }
                newDecorations.push({ range: mergeConflict.incoming.marker, options: MergeConflictsDecorations_1.Options.IncomingMarker });
                if (mergeConflict.incoming.content) {
                    newDecorations.push({ range: mergeConflict.incoming.content, options: MergeConflictsDecorations_1.Options.IncomingContent });
                }
                try {
                    for (var _c = (e_2 = void 0, __values(mergeConflict.bases)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var base = _d.value;
                        if (base.marker) {
                            newDecorations.push({ range: base.marker, options: MergeConflictsDecorations_1.Options.BaseMarker });
                        }
                        if (base.content) {
                            newDecorations.push({ range: base.content, options: MergeConflictsDecorations_1.Options.BaseContent });
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (mergeConflicts_1_1 && !mergeConflicts_1_1.done && (_a = mergeConflicts_1.return)) _a.call(mergeConflicts_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.setDecorations(params.editor, newDecorations);
    };
    var MergeConflictsDecorations_1;
    MergeConflictsDecorations = MergeConflictsDecorations_1 = __decorate([
        inversify_1.injectable()
    ], MergeConflictsDecorations);
    return MergeConflictsDecorations;
}(browser_1.EditorDecorator));
exports.MergeConflictsDecorations = MergeConflictsDecorations;
(function (MergeConflictsDecorations) {
    MergeConflictsDecorations.Options = {
        CurrentMarker: {
            isWholeLine: true,
            className: 'merge-conflict-current-marker'
        },
        CurrentContent: {
            isWholeLine: true,
            className: 'merge-conflict-current-content',
            overviewRuler: {
                position: browser_1.OverviewRulerLane.Full,
                color: 'editorOverviewRuler.currentContentForeground',
            }
        },
        BaseMarker: {
            isWholeLine: true,
            className: 'merge-conflict-base-marker'
        },
        BaseContent: {
            isWholeLine: true,
            className: 'merge-conflict-base-content',
            overviewRuler: {
                position: browser_1.OverviewRulerLane.Full,
                color: 'editorOverviewRuler.commonContentForeground',
            }
        },
        IncomingMarker: {
            isWholeLine: true,
            className: 'merge-conflict-incoming-marker'
        },
        IncomingContent: {
            isWholeLine: true,
            className: 'merge-conflict-incoming-content',
            overviewRuler: {
                position: browser_1.OverviewRulerLane.Full,
                color: 'editorOverviewRuler.incomingContentForeground',
            }
        },
    };
})(MergeConflictsDecorations = exports.MergeConflictsDecorations || (exports.MergeConflictsDecorations = {}));
exports.MergeConflictsDecorations = MergeConflictsDecorations;
//# sourceMappingURL=merge-conflicts-decorations.js.map