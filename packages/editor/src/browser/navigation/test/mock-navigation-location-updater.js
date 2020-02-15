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
var navigation_location_updater_1 = require("../navigation-location-updater");
/**
 * Navigation location updater with increased method visibility for testing.
 */
var MockNavigationLocationUpdater = /** @class */ (function (_super) {
    __extends(MockNavigationLocationUpdater, _super);
    function MockNavigationLocationUpdater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockNavigationLocationUpdater.prototype.contained = function (subRange, range) {
        return _super.prototype.contained.call(this, subRange, range);
    };
    return MockNavigationLocationUpdater;
}(navigation_location_updater_1.NavigationLocationUpdater));
exports.MockNavigationLocationUpdater = MockNavigationLocationUpdater;
/**
 * NOOP navigation location updater for testing. Use this, if you want to avoid any
 * location updates during the tests.
 */
var NoopNavigationLocationUpdater = /** @class */ (function (_super) {
    __extends(NoopNavigationLocationUpdater, _super);
    function NoopNavigationLocationUpdater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopNavigationLocationUpdater.prototype.affects = function () {
        return false;
    };
    return NoopNavigationLocationUpdater;
}(navigation_location_updater_1.NavigationLocationUpdater));
exports.NoopNavigationLocationUpdater = NoopNavigationLocationUpdater;
//# sourceMappingURL=mock-navigation-location-updater.js.map