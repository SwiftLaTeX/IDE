"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inversify_1 = require("inversify");
var common_1 = require("../common");
var disposable_1 = require("@theia/core/lib/common/disposable");
var ProblemPatternRegistry = /** @class */ (function () {
    function ProblemPatternRegistry() {
        this.patterns = new Map();
    }
    ProblemPatternRegistry.prototype.init = function () {
        this.fillDefaults();
        this.readyPromise = new Promise(function (res, rej) { return res(undefined); });
    };
    ProblemPatternRegistry.prototype.onReady = function () {
        return this.readyPromise;
    };
    /**
     * Add a problem pattern to the registry.
     *
     * @param definition the problem pattern to be added.
     */
    ProblemPatternRegistry.prototype.register = function (value) {
        var _this = this;
        if (Array.isArray(value)) {
            var toDispose_1 = new disposable_1.DisposableCollection();
            value.forEach(function (problemPatternContribution) { return toDispose_1.push(_this.register(problemPatternContribution)); });
            return toDispose_1;
        }
        if (!value.name) {
            console.error('Only named Problem Patterns can be registered.');
            return disposable_1.Disposable.NULL;
        }
        var problemPattern = common_1.ProblemPattern.fromProblemPatternContribution(value);
        return this.add(problemPattern.name, problemPattern);
    };
    /**
     * Finds the problem pattern(s) from the registry with the given name.
     *
     * @param key the name of the problem patterns
     * @return a problem pattern or an array of the problem patterns associated with the name. If no problem patterns are found, `undefined` is returned.
     */
    ProblemPatternRegistry.prototype.get = function (key) {
        return this.patterns.get(key);
    };
    ProblemPatternRegistry.prototype.add = function (key, value) {
        var _this = this;
        var toAdd;
        if (Array.isArray(value)) {
            toAdd = value.map(function (v) { return Object.assign(v, { name: key }); });
        }
        else {
            toAdd = Object.assign(value, { name: key });
        }
        this.patterns.set(key, toAdd);
        return disposable_1.Disposable.create(function () { return _this.patterns.delete(key); });
    };
    // copied from https://github.com/Microsoft/vscode/blob/1.33.1/src/vs/workbench/contrib/tasks/common/problemMatcher.ts
    ProblemPatternRegistry.prototype.fillDefaults = function () {
        this.add('msCompile', {
            regexp: /^(?:\s+\d+\>)?([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\)\s*:\s+(error|warning|info)\s+(\w{1,2}\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('gulp-tsc', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(\d+)\s+(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            code: 3,
            message: 4
        });
        this.add('cpp', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(C\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('csc', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(CS\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('vb', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(BC\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('lessCompile', {
            regexp: /^\s*(.*) in file (.*) line no. (\d+)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            message: 1,
            file: 2,
            line: 3
        });
        this.add('jshint', {
            regexp: /^(.*):\s+line\s+(\d+),\s+col\s+(\d+),\s(.+?)(?:\s+\((\w)(\d+)\))?$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            line: 2,
            character: 3,
            message: 4,
            severity: 5,
            code: 6
        });
        this.add('jshint-stylish', [
            {
                regexp: /^(.+)$/.source,
                kind: common_1.ProblemLocationKind.Location,
                file: 1
            },
            {
                regexp: /^\s+line\s+(\d+)\s+col\s+(\d+)\s+(.+?)(?:\s+\((\w)(\d+)\))?$/.source,
                line: 1,
                character: 2,
                message: 3,
                severity: 4,
                code: 5,
                loop: true
            }
        ]);
        this.add('eslint-compact', {
            regexp: /^(.+):\sline\s(\d+),\scol\s(\d+),\s(Error|Warning|Info)\s-\s(.+)\s\((.+)\)$/.source,
            file: 1,
            kind: common_1.ProblemLocationKind.Location,
            line: 2,
            character: 3,
            severity: 4,
            message: 5,
            code: 6
        });
        this.add('eslint-stylish', [
            {
                regexp: /^([^\s].*)$/.source,
                kind: common_1.ProblemLocationKind.Location,
                file: 1
            },
            {
                regexp: /^\s+(\d+):(\d+)\s+(error|warning|info)\s+(.+?)(?:\s\s+(.*))?$/.source,
                line: 1,
                character: 2,
                severity: 3,
                message: 4,
                code: 5,
                loop: true
            }
        ]);
        this.add('go', {
            regexp: /^([^:]*: )?((.:)?[^:]*):(\d+)(:(\d+))?: (.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 2,
            line: 4,
            character: 6,
            message: 7
        });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProblemPatternRegistry.prototype, "init", null);
    ProblemPatternRegistry = __decorate([
        inversify_1.injectable()
    ], ProblemPatternRegistry);
    return ProblemPatternRegistry;
}());
exports.ProblemPatternRegistry = ProblemPatternRegistry;
//# sourceMappingURL=task-problem-pattern-registry.js.map