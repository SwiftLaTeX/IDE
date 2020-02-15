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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var source_tree_1 = require("@theia/core/lib/browser/source-tree");
var event_1 = require("@theia/core/lib/common/event");
var ConsoleItem;
(function (ConsoleItem) {
    ConsoleItem.errorClassName = 'theia-console-error';
    ConsoleItem.warningClassName = 'theia-console-warning';
    ConsoleItem.infoClassName = 'theia-console-info';
    ConsoleItem.logClassName = 'theia-console-log';
})(ConsoleItem = exports.ConsoleItem || (exports.ConsoleItem = {}));
var ConsoleSession = /** @class */ (function (_super) {
    __extends(ConsoleSession, _super);
    function ConsoleSession() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectionEmitter = new event_1.Emitter();
        _this.onSelectionChange = _this.selectionEmitter.event;
        return _this;
    }
    Object.defineProperty(ConsoleSession.prototype, "severity", {
        get: function () {
            return this.selectedSeverity;
        },
        set: function (severity) {
            if (severity === this.selectedSeverity) {
                return;
            }
            this.selectedSeverity = severity;
            this.selectionEmitter.fire(undefined);
            this.fireDidChange();
        },
        enumerable: true,
        configurable: true
    });
    ConsoleSession = __decorate([
        inversify_1.injectable()
    ], ConsoleSession);
    return ConsoleSession;
}(source_tree_1.TreeSource));
exports.ConsoleSession = ConsoleSession;
//# sourceMappingURL=console-session.js.map