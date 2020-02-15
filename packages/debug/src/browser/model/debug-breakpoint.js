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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var browser_1 = require("@theia/core/lib/browser");
var DebugBreakpointData = /** @class */ (function () {
    function DebugBreakpointData() {
    }
    return DebugBreakpointData;
}());
exports.DebugBreakpointData = DebugBreakpointData;
var DebugBreakpointOptions = /** @class */ (function () {
    function DebugBreakpointOptions() {
    }
    return DebugBreakpointOptions;
}());
exports.DebugBreakpointOptions = DebugBreakpointOptions;
var DebugBreakpointDecoration = /** @class */ (function () {
    function DebugBreakpointDecoration() {
    }
    return DebugBreakpointDecoration;
}());
exports.DebugBreakpointDecoration = DebugBreakpointDecoration;
var DebugBreakpoint = /** @class */ (function (_super) {
    __extends(DebugBreakpoint, _super);
    function DebugBreakpoint(uri, options) {
        var _this = _super.call(this) || this;
        _this.uri = uri;
        _this.setBreakpointEnabled = function (event) {
            _this.setEnabled(event.target.checked);
        };
        Object.assign(_this, options);
        return _this;
    }
    DebugBreakpoint.prototype.update = function (data) {
        Object.assign(this, data);
    };
    Object.defineProperty(DebugBreakpoint.prototype, "idFromAdapter", {
        get: function () {
            return this.raw && this.raw.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugBreakpoint.prototype, "id", {
        get: function () {
            return this.origin.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugBreakpoint.prototype, "enabled", {
        get: function () {
            return this.breakpoints.breakpointsEnabled && this.origin.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugBreakpoint.prototype, "installed", {
        get: function () {
            return !!this.raw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugBreakpoint.prototype, "verified", {
        get: function () {
            return !!this.raw ? this.raw.verified : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugBreakpoint.prototype, "message", {
        get: function () {
            return this.raw && this.raw.message || '';
        },
        enumerable: true,
        configurable: true
    });
    DebugBreakpoint.prototype.render = function () {
        var classNames = ['theia-source-breakpoint'];
        if (!this.isEnabled()) {
            classNames.push(browser_1.DISABLED_CLASS);
        }
        var decoration = this.getDecoration();
        return React.createElement("div", { title: decoration.message.join('\n'), className: classNames.join(' ') },
            React.createElement("span", { className: 'theia-debug-breakpoint-icon ' + decoration.className }),
            React.createElement("input", { className: 'theia-input', type: 'checkbox', checked: this.origin.enabled, onChange: this.setBreakpointEnabled }),
            this.doRender());
    };
    DebugBreakpoint.prototype.isEnabled = function () {
        return this.breakpoints.breakpointsEnabled && this.verified;
    };
    DebugBreakpoint.prototype.getDecoration = function () {
        if (!this.enabled) {
            return this.getDisabledBreakpointDecoration();
        }
        if (this.installed && !this.verified) {
            return this.getUnverifiedBreakpointDecoration();
        }
        return this.doGetDecoration();
    };
    DebugBreakpoint.prototype.getUnverifiedBreakpointDecoration = function () {
        var decoration = this.getBreakpointDecoration();
        return {
            className: decoration.className + '-unverified',
            message: [this.message || 'Unverified ' + decoration.message[0]]
        };
    };
    DebugBreakpoint.prototype.getDisabledBreakpointDecoration = function (message) {
        var decoration = this.getBreakpointDecoration();
        return {
            className: decoration.className + '-disabled',
            message: [message || ('Disabled ' + decoration.message[0])]
        };
    };
    DebugBreakpoint.prototype.doGetDecoration = function (messages) {
        if (messages === void 0) { messages = []; }
        if (this.message) {
            if (messages.length) {
                messages[messages.length - 1].concat(', ' + this.message);
            }
            else {
                messages.push(this.message);
            }
        }
        return this.getBreakpointDecoration(messages);
    };
    return DebugBreakpoint;
}(DebugBreakpointOptions));
exports.DebugBreakpoint = DebugBreakpoint;
//# sourceMappingURL=debug-breakpoint.js.map