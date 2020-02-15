"use strict";
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var path = require("path");
var application_package_1 = require("@theia/application-package/lib/application-package");
var modulePackages = [];
try {
    for (var _b = __values(new application_package_1.ApplicationPackage({ projectPath: process.cwd() }).extensionPackages), _c = _b.next(); !_c.done; _c = _b.next()) {
        var extensionPackage = _c.value;
        modulePackages.push({
            name: extensionPackage.name,
            dir: path.dirname(extensionPackage.raw.installed.packagePath)
        });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function exposeModule(modulePackage, resourcePath, source) {
    if (!modulePackage.name) {
        return source;
    }
    var _a = path.parse(resourcePath), dir = _a.dir, name = _a.name;
    var moduleName = path.join(modulePackage.name, dir.substring(modulePackage.dir.length));
    if (name !== 'index') {
        moduleName = path.join(moduleName, name);
    }
    if (path.sep !== '/') {
        moduleName = moduleName.split(path.sep).join('/');
    }
    return source + ("\nif (!global) global = {};\n(global['theia'] = global['theia'] ||\u00A0{})['" + moduleName + "'] = this;\n");
}
module.exports = function (source, sourceMap) {
    var _this = this;
    if (this.cacheable) {
        this.cacheable();
    }
    var modulePackage = modulePackages.find(function (_a) {
        var dir = _a.dir;
        return _this.resourcePath.startsWith(dir);
    });
    if (modulePackage) {
        this.callback(undefined, exposeModule(modulePackage, this.resourcePath, source), sourceMap);
        return;
    }
    var index = this.resourcePath.lastIndexOf('/node_modules');
    if (index !== -1) {
        var nodeModulesPath = this.resourcePath.substring(0, index + '/node_modules'.length);
        var dir = this.resourcePath;
        while ((dir = path.dirname(dir)) !== nodeModulesPath) {
            try {
                var name_1 = require(path.join(dir, 'package.json')).name;
                modulePackage = { name: name_1, dir: dir };
                modulePackages.push(modulePackage);
                this.callback(undefined, exposeModule(modulePackage, this.resourcePath, source), sourceMap);
                return;
            }
            catch (_a) {
                /** no-op */
            }
        }
    }
    this.callback(undefined, source, sourceMap);
};
//# sourceMappingURL=expose-loader.js.map