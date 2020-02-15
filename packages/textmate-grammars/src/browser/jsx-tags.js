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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var JsxTagsContribution = /** @class */ (function () {
    function JsxTagsContribution() {
        this.id = 'jsx-tags';
        this.configuration = {
            // copied and modified from https://github.com/microsoft/vscode/blob/master/extensions/typescript-language-features/src/features/languageConfiguration.ts
            'wordPattern': /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
            'onEnterRules': [
                {
                    'beforeText': new RegExp("<(?!(?:" + JsxTagsContribution_1.EMPTY_ELEMENTS.join('|') + "))([_:\\w][_:\\w\\-.\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
                    'afterText': /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
                    'action': { indentAction: monaco.languages.IndentAction.IndentOutdent }
                },
                {
                    'beforeText': new RegExp("<(?!(?:" + JsxTagsContribution_1.EMPTY_ELEMENTS.join('|') + "))([_:\\w][_:\\w\\-.\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
                    'action': { indentAction: monaco.languages.IndentAction.Indent }
                },
                {
                    // `beforeText` only applies to tokens of a given language. Since we are dealing with jsx-tags,
                    // make sure we apply to the closing `>` of a tag so that mixed language spans
                    // such as `<div onclick={1}>` are handled properly.
                    'beforeText': /^>$/,
                    'afterText': /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
                    'action': { indentAction: monaco.languages.IndentAction.IndentOutdent }
                },
                {
                    'beforeText': /^>$/,
                    'action': { indentAction: monaco.languages.IndentAction.Indent }
                },
            ],
            'comments': {
                'blockComment': ['{/*', '*/}']
            },
            'brackets': [
                ['{', '}'],
                ['[', ']'],
                ['(', ')'],
                ['<', '>']
            ],
            'autoClosingPairs': [
                { 'open': '{', 'close': '}' },
                { 'open': '[', 'close': ']' },
                { 'open': '(', 'close': ')' },
                { 'open': '\'', 'close': '\'', 'notIn': ['string', 'comment'] },
                { 'open': '"', 'close': '"', 'notIn': ['string'] },
                { 'open': '/**', 'close': ' */', 'notIn': ['string'] }
            ],
            'surroundingPairs': [
                { 'open': '{', 'close': '}' },
                { 'open': '[', 'close': ']' },
                { 'open': '(', 'close': ')' },
                { 'open': '<', 'close': '>' },
                { 'open': '\'', 'close': '\'' },
                { 'open': '"', 'close': '"' }
            ]
        };
    }
    JsxTagsContribution_1 = JsxTagsContribution;
    JsxTagsContribution.prototype.registerTextmateLanguage = function (registry) {
        this.registerJsxTags();
    };
    JsxTagsContribution.prototype.registerJsxTags = function () {
        var _this = this;
        monaco.languages.register({
            id: this.id
        });
        monaco.languages.onLanguage(this.id, function () {
            monaco.languages.setLanguageConfiguration(_this.id, _this.configuration);
        });
    };
    var JsxTagsContribution_1;
    // copied and modified from https://github.com/microsoft/vscode/blob/master/extensions/typescript-language-features/src/features/languageConfiguration.ts
    JsxTagsContribution.EMPTY_ELEMENTS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];
    JsxTagsContribution = JsxTagsContribution_1 = __decorate([
        inversify_1.injectable()
    ], JsxTagsContribution);
    return JsxTagsContribution;
}());
exports.JsxTagsContribution = JsxTagsContribution;
//# sourceMappingURL=jsx-tags.js.map