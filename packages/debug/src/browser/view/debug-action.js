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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var browser_1 = require("@theia/core/lib/browser");
var DebugAction = /** @class */ (function (_super) {
    __extends(DebugAction, _super);
    function DebugAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setRef = function (ref) { return _this.ref = ref || undefined; };
        return _this;
    }
    DebugAction.prototype.render = function () {
        var _a = this.props, enabled = _a.enabled, label = _a.label, iconClass = _a.iconClass;
        var classNames = ['debug-action', 'theia-debug-' + iconClass];
        if (enabled === false) {
            classNames.push(browser_1.DISABLED_CLASS);
        }
        return React.createElement("span", { tabIndex: 0, className: classNames.join(' '), title: label, onClick: this.props.run, ref: this.setRef });
    };
    DebugAction.prototype.focus = function () {
        if (this.ref) {
            this.ref.focus();
        }
    };
    return DebugAction;
}(React.Component));
exports.DebugAction = DebugAction;
//# sourceMappingURL=debug-action.js.map