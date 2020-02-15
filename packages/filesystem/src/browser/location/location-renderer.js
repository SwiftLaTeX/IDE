"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var uri_1 = require("@theia/core/lib/common/uri");
var react_renderer_1 = require("@theia/core/lib/browser/widgets/react-renderer");
var React = require("react");
var LocationListRenderer = /** @class */ (function (_super) {
    __extends(LocationListRenderer, _super);
    function LocationListRenderer(service, host) {
        var _this = _super.call(this, host) || this;
        _this.service = service;
        _this.handleLocationChanged = function (e) { return _this.onLocationChanged(e); };
        _this.doLoadDrives();
        return _this;
    }
    LocationListRenderer.prototype.render = function () {
        _super.prototype.render.call(this);
        var locationList = this.locationList;
        if (locationList) {
            var currentLocation = this.service.location;
            locationList.value = currentLocation ? currentLocation.toString() : '';
        }
    };
    LocationListRenderer.prototype.doRender = function () {
        var _this = this;
        var options = this.collectLocations().map(function (value) { return _this.renderLocation(value); });
        return React.createElement("select", { className: 'theia-select ' + LocationListRenderer.Styles.LOCATION_LIST_CLASS, onChange: this.handleLocationChanged }, options);
    };
    /**
     * Collects the available locations based on the currently selected, and appends the available drives to it.
     */
    LocationListRenderer.prototype.collectLocations = function () {
        var location = this.service.location;
        var locations = (!!location ? location.allLocations : []).map(function (uri) { return ({ uri: uri }); });
        if (this._drives) {
            var drives = this._drives.map(function (uri) { return ({ uri: uri, isDrive: true }); });
            // `URI.allLocations` returns with the URI without the trailing slash unlike `FileUri.create(fsPath)`.
            // to be able to compare file:///path/to/resource with file:///path/to/resource/.
            var toUriString_1 = function (uri) {
                var toString = uri.toString();
                return toString.endsWith('/') ? toString.slice(0, -1) : toString;
            };
            drives.forEach(function (drive) {
                var index = locations.findIndex(function (loc) { return toUriString_1(loc.uri) === toUriString_1(drive.uri); });
                // Ignore drives which are already discovered as a location based on the current model root URI.
                if (index === -1) {
                    // Make sure, it does not have the trailing slash.
                    locations.push({ uri: new uri_1.default(toUriString_1(drive.uri)), isDrive: true });
                }
                else {
                    // This is necessary for Windows to be able to show `/e:/` as a drive and `c:` as "non-drive" in the same way.
                    // `URI.path.toString()` Vs. `URI.displayName` behaves a bit differently on Windows.
                    // https://github.com/eclipse-theia/theia/pull/3038#issuecomment-425944189
                    locations[index].isDrive = true;
                }
            });
        }
        this.doLoadDrives();
        return locations;
    };
    /**
     * Asynchronously loads the drives (if not yet available) and triggers a UI update on success with the new values.
     */
    LocationListRenderer.prototype.doLoadDrives = function () {
        var _this = this;
        if (!this._drives) {
            this.service.drives().then(function (drives) {
                // If the `drives` are empty, something already went wrong.
                if (drives.length > 0) {
                    _this._drives = drives;
                    _this.render();
                }
            });
        }
    };
    LocationListRenderer.prototype.renderLocation = function (location) {
        var uri = location.uri, isDrive = location.isDrive;
        var value = uri.toString();
        return React.createElement("option", { value: value, key: uri.toString() }, isDrive ? uri.path.toString() : uri.displayName);
    };
    LocationListRenderer.prototype.onLocationChanged = function (e) {
        var locationList = this.locationList;
        if (locationList) {
            var value = locationList.value;
            var uri = new uri_1.default(value);
            this.service.location = uri;
        }
        e.preventDefault();
        e.stopPropagation();
    };
    Object.defineProperty(LocationListRenderer.prototype, "locationList", {
        get: function () {
            var locationList = this.host.getElementsByClassName(LocationListRenderer.Styles.LOCATION_LIST_CLASS)[0];
            if (locationList instanceof HTMLSelectElement) {
                return locationList;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    return LocationListRenderer;
}(react_renderer_1.ReactRenderer));
exports.LocationListRenderer = LocationListRenderer;
(function (LocationListRenderer) {
    var Styles;
    (function (Styles) {
        Styles.LOCATION_LIST_CLASS = 'theia-LocationList';
    })(Styles = LocationListRenderer.Styles || (LocationListRenderer.Styles = {}));
})(LocationListRenderer = exports.LocationListRenderer || (exports.LocationListRenderer = {}));
exports.LocationListRenderer = LocationListRenderer;
//# sourceMappingURL=location-renderer.js.map