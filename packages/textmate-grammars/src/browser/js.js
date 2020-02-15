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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var textmate_1 = require("@theia/monaco/lib/browser/textmate");
var JavascriptContribution = /** @class */ (function () {
    function JavascriptContribution() {
        this.js_id = 'javascript';
        this.js_react_id = 'javascriptreact';
        this.configuration = {
            // copied and modified from https://github.com/microsoft/vscode/blob/master/extensions/typescript-language-features/src/features/languageConfiguration.ts
            'indentationRules': {
                'decreaseIndentPattern': /^((?!.*?\/\*).*\*\/)?\s*[\}\]].*$/,
                'increaseIndentPattern': /^((?!\/\/).)*(\{[^}"'`]*|\([^)"'`]*|\[[^\]"'`]*)$/
            },
            'wordPattern': /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
            'onEnterRules': [
                {
                    // e.g. /** | */
                    'beforeText': /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
                    'afterText': /^\s*\*\/$/,
                    'action': { indentAction: monaco.languages.IndentAction.IndentOutdent, appendText: ' * ' },
                },
                {
                    // e.g. /** ...|
                    'beforeText': /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
                    'action': { indentAction: monaco.languages.IndentAction.None, appendText: ' * ' },
                },
                {
                    // e.g.  * ...|
                    'beforeText': /^(\t|[ ])*[ ]\*([ ]([^\*]|\*(?!\/))*)?$/,
                    'action': { indentAction: monaco.languages.IndentAction.None, appendText: '* ' },
                },
                {
                    // e.g.  */|
                    'beforeText': /^(\t|[ ])*[ ]\*\/\s*$/,
                    'action': { indentAction: monaco.languages.IndentAction.None, removeText: 1 },
                },
                {
                    // e.g.  *-----*/|
                    'beforeText': /^(\t|[ ])*[ ]\*[^/]*\*\/\s*$/,
                    'action': { indentAction: monaco.languages.IndentAction.None, removeText: 1 },
                },
                {
                    'beforeText': /^\s*(\bcase\s.+:|\bdefault:)$/,
                    'afterText': /^(?!\s*(\bcase\b|\bdefault\b))/,
                    'action': { indentAction: monaco.languages.IndentAction.Indent },
                }
            ],
            'comments': {
                'lineComment': '//',
                'blockComment': ['/*', '*/']
            },
            'brackets': [
                ['{', '}'],
                ['[', ']'],
                ['(', ')']
            ],
            'autoClosingPairs': [
                { 'open': '{', 'close': '}' },
                { 'open': '[', 'close': ']' },
                { 'open': '(', 'close': ')' },
                { 'open': "'", 'close': "'", 'notIn': ['string', 'comment'] },
                { 'open': '"', 'close': '"', 'notIn': ['string'] },
                { 'open': '`', 'close': '`', 'notIn': ['string', 'comment'] },
                { 'open': '/**', 'close': ' */', 'notIn': ['string'] }
            ],
            'surroundingPairs': [
                { 'open': '{', 'close': '}' },
                { 'open': '[', 'close': ']' },
                { 'open': '(', 'close': ')' },
                { 'open': "'", 'close': "'" },
                { 'open': '"', 'close': '"' },
                { 'open': '`', 'close': '`' }
            ],
            'folding': {
                'markers': {
                    'start': new RegExp('^\\s*//\\s*#?region\\b'),
                    'end': new RegExp('^\\s*//\\s*#?endregion\\b')
                }
            }
        };
    }
    JavascriptContribution.prototype.registerTextmateLanguage = function (registry) {
        this.registerJavaScript();
        var grammar = require('../../data/javascript.tmlanguage.json');
        registry.registerTextmateGrammarScope('source.js', {
            getGrammarDefinition: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, {
                                format: 'json',
                                content: grammar,
                            }];
                    });
                });
            }
        });
        registry.registerTextmateGrammarScope('source.js.regexp', {
            getGrammarDefinition: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, {
                                format: 'plist',
                                content: regExpGrammar,
                            }];
                    });
                });
            }
        });
        registry.registerGrammarConfiguration(this.js_id, {
            embeddedLanguages: {
                'meta.tag.js': textmate_1.getEncodedLanguageId('jsx-tags'),
                'meta.tag.without-attributes.js': textmate_1.getEncodedLanguageId('jsx-tags'),
                'meta.tag.attributes.js.jsx': textmate_1.getEncodedLanguageId('javascriptreact'),
                'meta.embedded.expression.js': textmate_1.getEncodedLanguageId('javascriptreact')
            },
            tokenTypes: {
                'entity.name.type.instance.jsdoc': 0 /* Other */,
                'entity.name.function.tagged-template': 0 /* Other */,
                'meta.import string.quoted': 0 /* Other */,
                'variable.other.jsdoc': 0 /* Other */
            }
        });
        registry.mapLanguageIdToTextmateGrammar(this.js_id, 'source.js');
        var jsxGrammar = require('../../data/javascript.jsx.tmlanguage.json');
        registry.registerTextmateGrammarScope('source.jsx', {
            getGrammarDefinition: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, {
                                format: 'json',
                                content: jsxGrammar,
                            }];
                    });
                });
            }
        });
        registry.mapLanguageIdToTextmateGrammar(this.js_react_id, 'source.jsx');
    };
    JavascriptContribution.prototype.registerJavaScript = function () {
        var _this = this;
        monaco.languages.register({
            id: this.js_id,
            aliases: [
                'JavaScript',
                'javascript',
                'js'
            ],
            extensions: [
                '.js',
                '.es6',
                '.mjs',
                '.pac'
            ],
            filenames: [
                'jakefile'
            ],
            firstLine: '^#!.*\\bnode',
            mimetypes: [
                'text/javascript'
            ]
        });
        monaco.languages.onLanguage(this.js_id, function () {
            monaco.languages.setLanguageConfiguration(_this.js_id, _this.configuration);
        });
        monaco.languages.register({
            id: this.js_react_id,
            aliases: [
                'JavaScript React',
                'jsx'
            ],
            extensions: [
                '.jsx'
            ]
        });
        monaco.languages.onLanguage(this.js_react_id, function () {
            monaco.languages.setLanguageConfiguration(_this.js_react_id, _this.configuration);
        });
    };
    JavascriptContribution = __decorate([
        inversify_1.injectable()
    ], JavascriptContribution);
    return JavascriptContribution;
}());
exports.JavascriptContribution = JavascriptContribution;
var regExpGrammar = String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\n<plist version=\"1.0\">\n<dict>\n    <key>fileTypes</key>\n    <array/>\n    <key>hideFromUser</key>\n    <true/>\n    <key>name</key>\n    <string>Regular Expressions (JavaScript)</string>\n    <key>patterns</key>\n    <array>\n        <dict>\n            <key>include</key>\n            <string>#regexp</string>\n        </dict>\n    </array>\n    <key>repository</key>\n    <dict>\n        <key>regex-character-class</key>\n        <dict>\n            <key>patterns</key>\n            <array>\n                <dict>\n                    <key>match</key>\n                    <string>\\[wWsSdD]|.</string>\n                    <key>name</key>\n                    <string>constant.character.character-class.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>\\([0-7]{3}|xhh|uhhhh)</string>\n                    <key>name</key>\n                    <string>constant.character.numeric.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>\\c[A-Z]</string>\n                    <key>name</key>\n                    <string>constant.character.control.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>\\.</string>\n                    <key>name</key>\n                    <string>constant.character.escape.backslash.regexp</string>\n                </dict>\n            </array>\n        </dict>\n        <key>regexp</key>\n        <dict>\n            <key>patterns</key>\n            <array>\n                <dict>\n                    <key>match</key>\n                    <string>\\[bB]|^|$</string>\n                    <key>name</key>\n                    <string>keyword.control.anchor.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>\\[1-9]d*</string>\n                    <key>name</key>\n                    <string>keyword.other.back-reference.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>[?+*]|{(d+,d+|d+,|,d+|d+)}??</string>\n                    <key>name</key>\n                    <string>keyword.operator.quantifier.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>|</string>\n                    <key>name</key>\n                    <string>keyword.operator.or.regexp</string>\n                </dict>\n                <dict>\n                    <key>begin</key>\n                    <string>(()((?=)|(?!))</string>\n                    <key>beginCaptures</key>\n                    <dict>\n                        <key>1</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.group.regexp</string>\n                        </dict>\n                        <key>3</key>\n                        <dict>\n                            <key>name</key>\n                            <string>meta.assertion.look-ahead.regexp</string>\n                        </dict>\n                        <key>4</key>\n                        <dict>\n                            <key>name</key>\n                            <string>meta.assertion.negative-look-ahead.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>end</key>\n                    <string>())</string>\n                    <key>endCaptures</key>\n                    <dict>\n                        <key>1</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.group.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>name</key>\n                    <string>meta.group.assertion.regexp</string>\n                    <key>patterns</key>\n                    <array>\n                        <dict>\n                            <key>include</key>\n                            <string>#regexp</string>\n                        </dict>\n                    </array>\n                </dict>\n                <dict>\n                    <key>begin</key>\n                    <string>((?:)?</string>\n                    <key>beginCaptures</key>\n                    <dict>\n                        <key>0</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.group.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>end</key>\n                    <string>)</string>\n                    <key>endCaptures</key>\n                    <dict>\n                        <key>0</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.group.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>name</key>\n                    <string>meta.group.regexp</string>\n                    <key>patterns</key>\n                    <array>\n                        <dict>\n                            <key>include</key>\n                            <string>#regexp</string>\n                        </dict>\n                    </array>\n                </dict>\n                <dict>\n                    <key>begin</key>\n                    <string>([)(^)?</string>\n                    <key>beginCaptures</key>\n                    <dict>\n                        <key>1</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.character-class.regexp</string>\n                        </dict>\n                        <key>2</key>\n                        <dict>\n                            <key>name</key>\n                            <string>keyword.operator.negation.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>end</key>\n                    <string>(])</string>\n                    <key>endCaptures</key>\n                    <dict>\n                        <key>1</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.character-class.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>name</key>\n                    <string>constant.other.character-class.set.regexp</string>\n                    <key>patterns</key>\n                    <array>\n                        <dict>\n                            <key>captures</key>\n                            <dict>\n                                <key>1</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.numeric.regexp</string>\n                                </dict>\n                                <key>2</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.control.regexp</string>\n                                </dict>\n                                <key>3</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.escape.backslash.regexp</string>\n                                </dict>\n                                <key>4</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.numeric.regexp</string>\n                                </dict>\n                                <key>5</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.control.regexp</string>\n                                </dict>\n                                <key>6</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.escape.backslash.regexp</string>\n                                </dict>\n                            </dict>\n                            <key>match</key>\n                            <string>(?:.|(\\(?:[0-7]{3}|xhh|uhhhh))|(\\c[A-Z])|(\\.))-(?:[^]\\]|(\\(?:[0-7]{3}|xhh|uhhhh))|(\\c[A-Z])|(\\.))</string>\n                            <key>name</key>\n                            <string>constant.other.character-class.range.regexp</string>\n                        </dict>\n                        <dict>\n                            <key>include</key>\n                            <string>#regex-character-class</string>\n                        </dict>\n                    </array>\n                </dict>\n                <dict>\n                    <key>include</key>\n                    <string>#regex-character-class</string>\n                </dict>\n            </array>\n        </dict>\n    </dict>\n    <key>scopeName</key>\n    <string>source.js.regexp</string>\n    <key>uuid</key>\n    <string>AC8679DE-3AC7-4056-84F9-69A7ADC29DDD</string>\n</dict>\n</plist>\n"], ["\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\n<plist version=\"1.0\">\n<dict>\n    <key>fileTypes</key>\n    <array/>\n    <key>hideFromUser</key>\n    <true/>\n    <key>name</key>\n    <string>Regular Expressions (JavaScript)</string>\n    <key>patterns</key>\n    <array>\n        <dict>\n            <key>include</key>\n            <string>#regexp</string>\n        </dict>\n    </array>\n    <key>repository</key>\n    <dict>\n        <key>regex-character-class</key>\n        <dict>\n            <key>patterns</key>\n            <array>\n                <dict>\n                    <key>match</key>\n                    <string>\\\\[wWsSdD]|\\.</string>\n                    <key>name</key>\n                    <string>constant.character.character-class.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>\\\\([0-7]{3}|x\\h\\h|u\\h\\h\\h\\h)</string>\n                    <key>name</key>\n                    <string>constant.character.numeric.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>\\\\c[A-Z]</string>\n                    <key>name</key>\n                    <string>constant.character.control.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>\\\\.</string>\n                    <key>name</key>\n                    <string>constant.character.escape.backslash.regexp</string>\n                </dict>\n            </array>\n        </dict>\n        <key>regexp</key>\n        <dict>\n            <key>patterns</key>\n            <array>\n                <dict>\n                    <key>match</key>\n                    <string>\\\\[bB]|\\^|\\$</string>\n                    <key>name</key>\n                    <string>keyword.control.anchor.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>\\\\[1-9]\\d*</string>\n                    <key>name</key>\n                    <string>keyword.other.back-reference.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??</string>\n                    <key>name</key>\n                    <string>keyword.operator.quantifier.regexp</string>\n                </dict>\n                <dict>\n                    <key>match</key>\n                    <string>\\|</string>\n                    <key>name</key>\n                    <string>keyword.operator.or.regexp</string>\n                </dict>\n                <dict>\n                    <key>begin</key>\n                    <string>(\\()((\\?=)|(\\?!))</string>\n                    <key>beginCaptures</key>\n                    <dict>\n                        <key>1</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.group.regexp</string>\n                        </dict>\n                        <key>3</key>\n                        <dict>\n                            <key>name</key>\n                            <string>meta.assertion.look-ahead.regexp</string>\n                        </dict>\n                        <key>4</key>\n                        <dict>\n                            <key>name</key>\n                            <string>meta.assertion.negative-look-ahead.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>end</key>\n                    <string>(\\))</string>\n                    <key>endCaptures</key>\n                    <dict>\n                        <key>1</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.group.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>name</key>\n                    <string>meta.group.assertion.regexp</string>\n                    <key>patterns</key>\n                    <array>\n                        <dict>\n                            <key>include</key>\n                            <string>#regexp</string>\n                        </dict>\n                    </array>\n                </dict>\n                <dict>\n                    <key>begin</key>\n                    <string>\\((\\?:)?</string>\n                    <key>beginCaptures</key>\n                    <dict>\n                        <key>0</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.group.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>end</key>\n                    <string>\\)</string>\n                    <key>endCaptures</key>\n                    <dict>\n                        <key>0</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.group.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>name</key>\n                    <string>meta.group.regexp</string>\n                    <key>patterns</key>\n                    <array>\n                        <dict>\n                            <key>include</key>\n                            <string>#regexp</string>\n                        </dict>\n                    </array>\n                </dict>\n                <dict>\n                    <key>begin</key>\n                    <string>(\\[)(\\^)?</string>\n                    <key>beginCaptures</key>\n                    <dict>\n                        <key>1</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.character-class.regexp</string>\n                        </dict>\n                        <key>2</key>\n                        <dict>\n                            <key>name</key>\n                            <string>keyword.operator.negation.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>end</key>\n                    <string>(\\])</string>\n                    <key>endCaptures</key>\n                    <dict>\n                        <key>1</key>\n                        <dict>\n                            <key>name</key>\n                            <string>punctuation.definition.character-class.regexp</string>\n                        </dict>\n                    </dict>\n                    <key>name</key>\n                    <string>constant.other.character-class.set.regexp</string>\n                    <key>patterns</key>\n                    <array>\n                        <dict>\n                            <key>captures</key>\n                            <dict>\n                                <key>1</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.numeric.regexp</string>\n                                </dict>\n                                <key>2</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.control.regexp</string>\n                                </dict>\n                                <key>3</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.escape.backslash.regexp</string>\n                                </dict>\n                                <key>4</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.numeric.regexp</string>\n                                </dict>\n                                <key>5</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.control.regexp</string>\n                                </dict>\n                                <key>6</key>\n                                <dict>\n                                    <key>name</key>\n                                    <string>constant.character.escape.backslash.regexp</string>\n                                </dict>\n                            </dict>\n                            <key>match</key>\n                            <string>(?:.|(\\\\(?:[0-7]{3}|x\\h\\h|u\\h\\h\\h\\h))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x\\h\\h|u\\h\\h\\h\\h))|(\\\\c[A-Z])|(\\\\.))</string>\n                            <key>name</key>\n                            <string>constant.other.character-class.range.regexp</string>\n                        </dict>\n                        <dict>\n                            <key>include</key>\n                            <string>#regex-character-class</string>\n                        </dict>\n                    </array>\n                </dict>\n                <dict>\n                    <key>include</key>\n                    <string>#regex-character-class</string>\n                </dict>\n            </array>\n        </dict>\n    </dict>\n    <key>scopeName</key>\n    <string>source.js.regexp</string>\n    <key>uuid</key>\n    <string>AC8679DE-3AC7-4056-84F9-69A7ADC29DDD</string>\n</dict>\n</plist>\n"])));
var templateObject_1;
//# sourceMappingURL=js.js.map