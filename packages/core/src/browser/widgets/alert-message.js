"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var AlertMessageIcon = {
    INFO: 'fa fa-info-circle',
    SUCCESS: 'fa fa-check-circle',
    WARNING: 'fa fa-exclamation-circle',
    ERROR: 'fa fa-error-icon'
};
var AlertMessage = /** @class */ (function (_super) {
    __extends(AlertMessage, _super);
    function AlertMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertMessage.prototype.render = function () {
        return React.createElement("div", { className: 'theia-alert-message-container' },
            React.createElement("div", { className: "theia-" + this.props.type.toLowerCase() + "-alert" },
                React.createElement("div", { className: 'theia-message-header' },
                    React.createElement("i", { className: AlertMessageIcon[this.props.type] }),
                    "\u00A0",
                    this.props.header),
                React.createElement("div", { className: 'theia-message-content' }, this.props.children)));
    };
    return AlertMessage;
}(React.Component));
exports.AlertMessage = AlertMessage;
//# sourceMappingURL=alert-message.js.map