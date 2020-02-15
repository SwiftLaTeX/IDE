"use strict";
/********************************************************************************
 * Copyright (c) 2018-2019 TypeFox and others
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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
/**
 * Folders to skip inside the `node_modules` when checking the hoisted dependencies. Such as the `.bin` and `.cache` folders.
 */
var toSkip = ['.bin', '.cache'];
function collectIssues() {
    var e_1, _a, e_2, _b;
    console.log('🔍  Analyzing hoisted dependencies in the Theia extensions...');
    var root = process.cwd();
    var rootNodeModules = path.join(root, 'node_modules');
    var packages = path.join(root, 'packages');
    var issues = new Map();
    try {
        for (var _c = __values(fs.readdirSync(packages)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var extension = _d.value;
            var extensionPath = path.join(packages, extension);
            var nodeModulesPath = path.join(extensionPath, 'node_modules');
            if (fs.existsSync(nodeModulesPath)) {
                try {
                    for (var _e = (e_2 = void 0, __values(fs.readdirSync(nodeModulesPath).filter(function (name) { return toSkip.indexOf(name) === -1; }))), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var dependency = _f.value;
                        var dependencyPath = path.join(nodeModulesPath, dependency);
                        var version = versionOf(dependencyPath);
                        var message = "Dependency '" + dependency + "' " + (version ? "[" + version + "] " : '') + "was not hoisted to the root 'node_modules' folder.";
                        var existingDependency = path.join(rootNodeModules, dependency);
                        if (fs.existsSync(existingDependency)) {
                            var otherVersion = versionOf(existingDependency);
                            if (otherVersion) {
                                message += " The same dependency already exists with version " + otherVersion + " at '" + existingDependency + "'.";
                            }
                        }
                        error(issues, extension, message);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                warn(issues, extension, "Does not have 'node_modules' folder.");
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return issues;
}
function versionOf(npmPackagePath) {
    var packageJsonPath = path.join(npmPackagePath, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
        return require(packageJsonPath).version || '';
    }
    return '';
}
function warn(issues, extension, message) {
    log(issues, extension, message, 'warn');
}
function error(issues, extension, message) {
    log(issues, extension, message, 'error');
}
function log(issues, extension, message, type) {
    var key = "@theia/" + extension;
    if (!issues.has(key)) {
        issues.set(key, []);
    }
    var severity = toSeverity(type);
    issues.get(key).push({ severity: severity, message: message });
}
function toSeverity(type) {
    switch (type) {
        case 'error': return 0;
        case 'warn': return 1;
        default: throw new Error("Unexpected type: " + type + ".");
    }
}
function toType(severity) {
    switch (severity) {
        case 0: return 'error';
        case 1: return 'warn';
        default: throw new Error("Unexpected severity: " + severity + ".");
    }
}
function assert(_a) {
    var e_3, _b, e_4, _c;
    var suppress = _a.suppress;
    var issues = collectIssues();
    console.log('📖  Summary:');
    var code = 0;
    if (issues.size > 0) {
        try {
            for (var _d = __values(issues.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = __read(_e.value, 2), extension = _f[0], issuesPerExtension = _f[1];
                issuesPerExtension.sort(function (left, right) { return left.severity - right.severity; });
                if (issuesPerExtension) {
                    console.log("The following dependency issues were detected in '" + extension + "':");
                    try {
                        for (var issuesPerExtension_1 = (e_4 = void 0, __values(issuesPerExtension)), issuesPerExtension_1_1 = issuesPerExtension_1.next(); !issuesPerExtension_1_1.done; issuesPerExtension_1_1 = issuesPerExtension_1.next()) {
                            var _g = issuesPerExtension_1_1.value, severity = _g.severity, message = _g.message;
                            var type = toType(severity);
                            console.log(" - " + type + ": " + message);
                            if (type === 'error') {
                                code = 1;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (issuesPerExtension_1_1 && !issuesPerExtension_1_1.done && (_c = issuesPerExtension_1.return)) _c.call(issuesPerExtension_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    else {
        console.log('🎉  No dependency issues were detected.');
    }
    if (code !== 0 && suppress) {
        console.log('⚠️  This is a reminder to fix the dependency issues.');
        process.exit(0);
    }
    process.exit(code);
}
exports.default = assert;
//# sourceMappingURL=check-hoisting.js.map