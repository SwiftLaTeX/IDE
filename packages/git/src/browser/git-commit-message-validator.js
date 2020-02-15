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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var GitCommitMessageValidator = /** @class */ (function () {
    function GitCommitMessageValidator() {
    }
    GitCommitMessageValidator_1 = GitCommitMessageValidator;
    /**
     * Validates the input and returns with either a validation result with the status and message, or `undefined` if everything went fine.
     */
    GitCommitMessageValidator.prototype.validate = function (input) {
        if (input) {
            var lines = input.split(/\r?\n/);
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var result = this.isLineValid(line, i);
                if (!!result) {
                    return result;
                }
            }
        }
        return undefined;
    };
    GitCommitMessageValidator.prototype.isLineValid = function (line, index) {
        if (index === 1 && line.length !== 0) {
            return {
                status: 'warning',
                message: 'The second line should be empty to separate the commit message from the body'
            };
        }
        var diff = line.length - this.maxCharsPerLine();
        if (diff > 0) {
            return {
                status: 'warning',
                message: diff + " characters over " + this.maxCharsPerLine() + " in current line"
            };
        }
        return undefined;
    };
    GitCommitMessageValidator.prototype.maxCharsPerLine = function () {
        return GitCommitMessageValidator_1.MAX_CHARS_PER_LINE;
    };
    var GitCommitMessageValidator_1;
    GitCommitMessageValidator.MAX_CHARS_PER_LINE = 72;
    GitCommitMessageValidator = GitCommitMessageValidator_1 = __decorate([
        inversify_1.injectable()
    ], GitCommitMessageValidator);
    return GitCommitMessageValidator;
}());
exports.GitCommitMessageValidator = GitCommitMessageValidator;
(function (GitCommitMessageValidator) {
    var Result;
    (function (Result) {
        /**
         * `true` if the `message` and the `status` properties are the same on both `left` and `right`. Or both arguments are `undefined`. Otherwise, `false`.
         */
        function equal(left, right) {
            if (left && right) {
                return left.message === right.message && left.status === right.status;
            }
            return left === right;
        }
        Result.equal = equal;
    })(Result = GitCommitMessageValidator.Result || (GitCommitMessageValidator.Result = {}));
})(GitCommitMessageValidator = exports.GitCommitMessageValidator || (exports.GitCommitMessageValidator = {}));
exports.GitCommitMessageValidator = GitCommitMessageValidator;
//# sourceMappingURL=git-commit-message-validator.js.map