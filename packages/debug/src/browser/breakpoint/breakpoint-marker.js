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
Object.defineProperty(exports, "__esModule", { value: true });
var coreutils_1 = require("@phosphor/coreutils");
exports.BREAKPOINT_KIND = 'breakpoint';
var SourceBreakpoint;
(function (SourceBreakpoint) {
    function create(uri, data, origin) {
        return {
            id: origin ? origin.id : coreutils_1.UUID.uuid4(),
            uri: uri.toString(),
            enabled: origin ? origin.enabled : true,
            raw: __assign(__assign({}, (origin && origin.raw)), data)
        };
    }
    SourceBreakpoint.create = create;
})(SourceBreakpoint = exports.SourceBreakpoint || (exports.SourceBreakpoint = {}));
var BreakpointMarker;
(function (BreakpointMarker) {
    function is(node) {
        return 'kind' in node && node.kind === exports.BREAKPOINT_KIND;
    }
    BreakpointMarker.is = is;
})(BreakpointMarker = exports.BreakpointMarker || (exports.BreakpointMarker = {}));
var ExceptionBreakpoint;
(function (ExceptionBreakpoint) {
    function create(data, origin) {
        return {
            enabled: origin ? origin.enabled : false,
            raw: __assign(__assign({}, (origin && origin.raw)), data)
        };
    }
    ExceptionBreakpoint.create = create;
})(ExceptionBreakpoint = exports.ExceptionBreakpoint || (exports.ExceptionBreakpoint = {}));
var FunctionBreakpoint;
(function (FunctionBreakpoint) {
    function create(data, origin) {
        return {
            id: origin ? origin.id : coreutils_1.UUID.uuid4(),
            enabled: origin ? origin.enabled : true,
            raw: __assign(__assign({}, (origin && origin.raw)), data)
        };
    }
    FunctionBreakpoint.create = create;
})(FunctionBreakpoint = exports.FunctionBreakpoint || (exports.FunctionBreakpoint = {}));
//# sourceMappingURL=breakpoint-marker.js.map