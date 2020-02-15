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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation and others. All rights reserved.
 *  Licensed under the MIT License. See https://github.com/Microsoft/vscode/blob/master/LICENSE.txt for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
/**
 * TODO: introduce a new request to LSP to look up an expression range: https://github.com/Microsoft/language-server-protocol/issues/462
 */
var DebugExpressionProvider = /** @class */ (function () {
    function DebugExpressionProvider() {
    }
    DebugExpressionProvider.prototype.get = function (model, selection) {
        var lineContent = model.getLineContent(selection.startLineNumber);
        var _a = this.getExactExpressionStartAndEnd(lineContent, selection.startColumn, selection.endColumn), start = _a.start, end = _a.end;
        return lineContent.substring(start - 1, end);
    };
    DebugExpressionProvider.prototype.getExactExpressionStartAndEnd = function (lineContent, looseStart, looseEnd) {
        var matchingExpression = undefined;
        var startOffset = 0;
        // Some example supported expressions: myVar.prop, a.b.c.d, myVar?.prop, myVar->prop, MyClass::StaticProp, *myVar
        // Match any character except a set of characters which often break interesting sub-expressions
        var expression = /([^()\[\]{}<>\s+\-/%~#^;=|,`!]|\->)+/g;
        // eslint-disable-next-line no-null/no-null
        var result = null;
        // First find the full expression under the cursor
        while (result = expression.exec(lineContent)) {
            var start = result.index + 1;
            var end = start + result[0].length;
            if (start <= looseStart && end >= looseEnd) {
                matchingExpression = result[0];
                startOffset = start;
                break;
            }
        }
        // If there are non-word characters after the cursor, we want to truncate the expression then.
        // For example in expression 'a.b.c.d', if the focus was under 'b', 'a.b' would be evaluated.
        if (matchingExpression) {
            var subExpression = /\w+/g;
            // eslint-disable-next-line no-null/no-null
            var subExpressionResult = null;
            while (subExpressionResult = subExpression.exec(matchingExpression)) {
                var subEnd = subExpressionResult.index + 1 + startOffset + subExpressionResult[0].length;
                if (subEnd >= looseEnd) {
                    break;
                }
            }
            if (subExpressionResult) {
                matchingExpression = matchingExpression.substring(0, subExpression.lastIndex);
            }
        }
        return matchingExpression ?
            { start: startOffset, end: startOffset + matchingExpression.length - 1 } :
            { start: 0, end: 0 };
    };
    DebugExpressionProvider = __decorate([
        inversify_1.injectable()
    ], DebugExpressionProvider);
    return DebugExpressionProvider;
}());
exports.DebugExpressionProvider = DebugExpressionProvider;
//# sourceMappingURL=debug-expression-provider.js.map