"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DebugExceptionBreakpoint = /** @class */ (function () {
    function DebugExceptionBreakpoint(data, breakpoints) {
        var _this = this;
        this.data = data;
        this.breakpoints = breakpoints;
        this.toggle = function () { return _this.breakpoints.toggleExceptionBreakpoint(_this.data.raw.filter); };
        this.id = data.raw.filter + ':' + data.raw.label;
    }
    DebugExceptionBreakpoint.prototype.render = function () {
        return React.createElement("div", { title: this.data.raw.label, className: 'theia-source-breakpoint' },
            React.createElement("span", { className: 'theia-debug-breakpoint-icon' }),
            React.createElement("input", { type: 'checkbox', checked: this.data.enabled, onChange: this.toggle }),
            React.createElement("span", { className: 'line-info' }, this.data.raw.label));
    };
    return DebugExceptionBreakpoint;
}());
exports.DebugExceptionBreakpoint = DebugExceptionBreakpoint;
//# sourceMappingURL=debug-exception-breakpoint.js.map