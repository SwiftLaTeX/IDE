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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@theia/core");
var notification_component_1 = require("./notification-component");
var PerfectScrollbar = require('react-perfect-scrollbar');
var NotificationCenterComponent = /** @class */ (function (_super) {
    __extends(NotificationCenterComponent, _super);
    function NotificationCenterComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.toDisposeOnUnmount = new core_1.DisposableCollection();
        _this.onHide = function () {
            _this.props.manager.hideCenter();
        };
        _this.onClearAll = function () {
            _this.props.manager.clearAll();
        };
        _this.state = {
            notifications: [],
            visibilityState: 'hidden'
        };
        return _this;
    }
    NotificationCenterComponent.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.toDisposeOnUnmount.push(this.props.manager.onUpdated(function (_a) {
                    var notifications = _a.notifications, visibilityState = _a.visibilityState;
                    _this.setState({
                        notifications: notifications,
                        visibilityState: visibilityState
                    });
                }));
                return [2 /*return*/];
            });
        });
    };
    NotificationCenterComponent.prototype.componentWillUnmount = function () {
        this.toDisposeOnUnmount.dispose();
    };
    NotificationCenterComponent.prototype.render = function () {
        var _this = this;
        var empty = this.state.notifications.length === 0;
        var title = empty ? 'NO NEW NOTIFICATIONS' : 'NOTIFICATIONS';
        return (React.createElement("div", { className: "theia-notifications-container theia-notification-center " + (this.state.visibilityState === 'center' ? 'open' : 'closed') },
            React.createElement("div", { className: 'theia-notification-center-header' },
                React.createElement("div", { className: 'theia-notification-center-header-title' }, title),
                React.createElement("div", { className: 'theia-notification-center-header-actions' },
                    React.createElement("ul", { className: 'theia-notification-actions' },
                        React.createElement("li", { className: 'collapse', title: 'Hide Notification Center', onClick: this.onHide }),
                        React.createElement("li", { className: 'clear-all', title: 'Clear All', onClick: this.onClearAll })))),
            React.createElement(PerfectScrollbar, { className: 'theia-notification-list-scroll-container' },
                React.createElement("div", { className: 'theia-notification-list' }, this.state.notifications.map(function (notification) {
                    return React.createElement(notification_component_1.NotificationComponent, { key: notification.messageId, notification: notification, manager: _this.props.manager });
                })))));
    };
    return NotificationCenterComponent;
}(React.Component));
exports.NotificationCenterComponent = NotificationCenterComponent;
//# sourceMappingURL=notification-center-component.js.map