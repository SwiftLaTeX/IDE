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
var NotificationComponent = /** @class */ (function (_super) {
    __extends(NotificationComponent, _super);
    function NotificationComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onClear = function (event) {
            if (event.target instanceof HTMLElement) {
                var messageId = event.target.dataset.messageId;
                if (messageId) {
                    _this.props.manager.clear(messageId);
                }
            }
        };
        _this.onToggleExpansion = function (event) {
            if (event.target instanceof HTMLElement) {
                var messageId = event.target.dataset.messageId;
                if (messageId) {
                    _this.props.manager.toggleExpansion(messageId);
                }
            }
        };
        _this.onAction = function (event) {
            if (event.target instanceof HTMLElement) {
                var messageId = event.target.dataset.messageId;
                var action = event.target.dataset.action;
                if (messageId && action) {
                    _this.props.manager.accept(messageId, action);
                }
            }
        };
        _this.onMessageClick = function (event) {
            if (event.target instanceof HTMLAnchorElement) {
                event.stopPropagation();
                event.preventDefault();
                var link = event.target.href;
                _this.props.manager.openLink(link);
            }
        };
        _this.state = {};
        return _this;
    }
    NotificationComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props.notification, messageId = _a.messageId, message = _a.message, type = _a.type, progress = _a.progress, collapsed = _a.collapsed, expandable = _a.expandable, source = _a.source, actions = _a.actions;
        return (React.createElement("div", { key: messageId, className: 'theia-notification-list-item' },
            React.createElement("div", { className: "theia-notification-list-item-content " + (collapsed ? 'collapsed' : '') },
                React.createElement("div", { className: 'theia-notification-list-item-content-main' },
                    React.createElement("div", { className: "theia-notification-icon theia-notification-icon-" + type }),
                    React.createElement("div", { className: 'theia-notification-message' },
                        React.createElement("span", { dangerouslySetInnerHTML: { __html: message }, onClick: this.onMessageClick })),
                    React.createElement("ul", { className: 'theia-notification-actions' },
                        expandable && (React.createElement("li", { className: collapsed ? 'expand' : 'collapse', title: collapsed ? 'Expand' : 'Collapse', "data-message-id": messageId, onClick: this.onToggleExpansion })),
                        React.createElement("li", { className: 'clear', title: 'Clear', "data-message-id": messageId, onClick: this.onClear }))),
                (source || !!actions.length) && (React.createElement("div", { className: 'theia-notification-list-item-content-bottom' },
                    React.createElement("div", { className: 'theia-notification-source' }, source && (React.createElement("span", null, source))),
                    React.createElement("div", { className: 'theia-notification-buttons' }, actions && actions.map(function (action, index) { return (React.createElement("button", { key: messageId + ("-action-" + index), className: 'theia-button', "data-message-id": messageId, "data-action": action, onClick: _this.onAction }, action)); }))))),
            typeof progress === 'number' && (React.createElement("div", { className: 'theia-notification-item-progress' },
                React.createElement("div", { className: 'theia-notification-item-progressbar', style: { width: progress + "%" } })))));
    };
    return NotificationComponent;
}(React.Component));
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification-component.js.map