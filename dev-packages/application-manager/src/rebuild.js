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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var path = require("path");
function rebuild(target, modules) {
    var e_1, _a, e_2, _b;
    var nodeModulesPath = path.join(process.cwd(), 'node_modules');
    var browserModulesPath = path.join(process.cwd(), '.browser_modules');
    var modulesToProcess = modules || ['@theia/node-pty', 'nsfw', 'native-keymap', 'find-git-repositories'];
    if (target === 'electron' && !fs.existsSync(browserModulesPath)) {
        var dependencies = {};
        try {
            for (var modulesToProcess_1 = __values(modulesToProcess), modulesToProcess_1_1 = modulesToProcess_1.next(); !modulesToProcess_1_1.done; modulesToProcess_1_1 = modulesToProcess_1.next()) {
                var module_1 = modulesToProcess_1_1.value;
                console.log('Processing ' + module_1);
                var src = path.join(nodeModulesPath, module_1);
                if (fs.existsSync(src)) {
                    var dest = path.join(browserModulesPath, module_1);
                    var packJson = fs.readJsonSync(path.join(src, 'package.json'));
                    dependencies[module_1] = packJson.version;
                    fs.copySync(src, dest);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (modulesToProcess_1_1 && !modulesToProcess_1_1.done && (_a = modulesToProcess_1.return)) _a.call(modulesToProcess_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var packFile_1 = path.join(process.cwd(), 'package.json');
        var packageText_1 = fs.readFileSync(packFile_1);
        var pack = fs.readJsonSync(packFile_1);
        try {
            pack.dependencies = Object.assign({}, pack.dependencies, dependencies);
            fs.writeFileSync(packFile_1, JSON.stringify(pack, undefined, '  '));
            var electronRebuildPackageJson = require('electron-rebuild/package.json');
            require("electron-rebuild/" + electronRebuildPackageJson['bin']['electron-rebuild']);
        }
        finally {
            setTimeout(function () {
                fs.writeFile(packFile_1, packageText_1);
            }, 100);
        }
    }
    else if (target === 'browser' && fs.existsSync(browserModulesPath)) {
        try {
            for (var _c = __values(collectModulePaths(browserModulesPath)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var moduleName = _d.value;
                console.log('Reverting ' + moduleName);
                var src = path.join(browserModulesPath, moduleName);
                var dest = path.join(nodeModulesPath, moduleName);
                fs.removeSync(dest);
                fs.copySync(src, dest);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        fs.removeSync(browserModulesPath);
    }
    else {
        console.log('native node modules are already rebuilt for ' + target);
    }
}
exports.rebuild = rebuild;
function collectModulePaths(root) {
    var e_3, _a;
    var moduleRelativePaths = [];
    var _loop_1 = function (dirName) {
        if (fs.existsSync(path.join(root, dirName, 'package.json'))) {
            moduleRelativePaths.push(dirName);
        }
        else if (fs.lstatSync(path.join(root, dirName)).isDirectory()) {
            moduleRelativePaths.push.apply(moduleRelativePaths, __spread(collectModulePaths(path.join(root, dirName)).map(function (p) { return path.join(dirName, p); })));
        }
    };
    try {
        for (var _b = __values(fs.readdirSync(root)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var dirName = _c.value;
            _loop_1(dirName);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return moduleRelativePaths;
}
//# sourceMappingURL=rebuild.js.map