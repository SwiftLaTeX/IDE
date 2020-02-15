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
var marker_manager_1 = require("../marker-manager");
var problem_marker_1 = require("../../common/problem-marker");
var ProblemManager = /** @class */ (function (_super) {
    __extends(ProblemManager, _super);
    function ProblemManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProblemManager.prototype.getKind = function () {
        return problem_marker_1.PROBLEM_KIND;
    };
    ProblemManager.prototype.getProblemStat = function () {
        var e_1, _a;
        var errors = 0;
        var warnings = 0;
        var infos = 0;
        try {
            for (var _b = __values(this.findMarkers()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var marker = _c.value;
                if (marker.data.severity === 1) {
                    errors++;
                }
                else if (marker.data.severity === 2) {
                    warnings++;
                }
                else if (marker.data.severity === 3) {
                    infos++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return { errors: errors, warnings: warnings, infos: infos };
    };
    ProblemManager = __decorate([
        inversify_1.injectable()
    ], ProblemManager);
    return ProblemManager;
}(marker_manager_1.MarkerManager));
exports.ProblemManager = ProblemManager;
//# sourceMappingURL=problem-manager.js.map