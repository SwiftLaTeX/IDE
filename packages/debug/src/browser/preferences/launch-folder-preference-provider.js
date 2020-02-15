"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var folder_preference_provider_1 = require("@theia/preferences/lib/browser/folder-preference-provider");
var LaunchFolderPreferenceProvider = /** @class */ (function (_super) {
    __extends(LaunchFolderPreferenceProvider, _super);
    function LaunchFolderPreferenceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LaunchFolderPreferenceProvider.prototype.parse = function (content) {
        var launch = _super.prototype.parse.call(this, content);
        if (launch === undefined) {
            return undefined;
        }
        return { launch: __assign({}, launch) };
    };
    LaunchFolderPreferenceProvider.prototype.getPath = function (preferenceName) {
        if (preferenceName === 'launch') {
            return [];
        }
        if (preferenceName.startsWith('launch.')) {
            return [preferenceName.substr('launch.'.length)];
        }
        return undefined;
    };
    LaunchFolderPreferenceProvider = __decorate([
        inversify_1.injectable()
    ], LaunchFolderPreferenceProvider);
    return LaunchFolderPreferenceProvider;
}(folder_preference_provider_1.FolderPreferenceProvider));
exports.LaunchFolderPreferenceProvider = LaunchFolderPreferenceProvider;
//# sourceMappingURL=launch-folder-preference-provider.js.map