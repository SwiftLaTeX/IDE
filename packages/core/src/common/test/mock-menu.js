"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var disposable_1 = require("../disposable");
var command_1 = require("../command");
var menu_1 = require("../menu");
var MockMenuModelRegistry = /** @class */ (function (_super) {
    __extends(MockMenuModelRegistry, _super);
    function MockMenuModelRegistry() {
        var _this = this;
        var commands = new command_1.CommandRegistry({ getContributions: function () { return []; } });
        _this = _super.call(this, { getContributions: function () { return []; } }, commands) || this;
        return _this;
    }
    MockMenuModelRegistry.prototype.registerMenuAction = function (menuPath, item) {
        return disposable_1.Disposable.NULL;
    };
    MockMenuModelRegistry.prototype.registerSubmenu = function (menuPath, label) {
        return disposable_1.Disposable.NULL;
    };
    return MockMenuModelRegistry;
}(menu_1.MenuModelRegistry));
exports.MockMenuModelRegistry = MockMenuModelRegistry;
//# sourceMappingURL=mock-menu.js.map