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
Object.defineProperty(exports, "__esModule", { value: true });
var EditorDecorationStyle = /** @class */ (function () {
    function EditorDecorationStyle(selector, styleProvider) {
        this.selector = selector;
        EditorDecorationStyle.createRule(selector, styleProvider);
    }
    Object.defineProperty(EditorDecorationStyle.prototype, "className", {
        get: function () {
            return this.selector.split('::')[0];
        },
        enumerable: true,
        configurable: true
    });
    EditorDecorationStyle.prototype.dispose = function () {
        EditorDecorationStyle.deleteRule(this.selector);
    };
    return EditorDecorationStyle;
}());
exports.EditorDecorationStyle = EditorDecorationStyle;
(function (EditorDecorationStyle) {
    function copyStyle(from, to) {
        Object.keys(from).forEach(function (key) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            to[key] = from[key];
        });
    }
    EditorDecorationStyle.copyStyle = copyStyle;
    function createStyleSheet(container) {
        if (container === void 0) { container = document.getElementsByTagName('head')[0]; }
        if (!container) {
            return undefined;
        }
        var style = document.createElement('style');
        style.id = 'editorDecorationsStyle';
        style.type = 'text/css';
        style.media = 'screen';
        style.appendChild(document.createTextNode('')); // trick for webkit
        container.appendChild(style);
        return style.sheet;
    }
    EditorDecorationStyle.createStyleSheet = createStyleSheet;
    var editorDecorationsStyleSheet = createStyleSheet();
    function createRule(selector, styleProvider, styleSheet) {
        if (styleSheet === void 0) { styleSheet = editorDecorationsStyleSheet; }
        if (!styleSheet) {
            return;
        }
        var index = styleSheet.insertRule('.' + selector + '{}', 0);
        var rules = styleSheet.cssRules || styleSheet.rules;
        var rule = rules.item(index);
        if (rule && rule.type === CSSRule.STYLE_RULE) {
            var styleRule = rule;
            styleProvider(styleRule.style);
        }
    }
    EditorDecorationStyle.createRule = createRule;
    function deleteRule(selector, styleSheet) {
        if (styleSheet === void 0) { styleSheet = editorDecorationsStyleSheet; }
        if (!styleSheet) {
            return;
        }
        var rules = styleSheet.cssRules || styleSheet.rules;
        for (var i = 0; i < rules.length; i++) {
            if (rules[i].type === CSSRule.STYLE_RULE) {
                if (rules[i].selectorText === selector) {
                    styleSheet.removeRule(i);
                }
            }
        }
    }
    EditorDecorationStyle.deleteRule = deleteRule;
})(EditorDecorationStyle = exports.EditorDecorationStyle || (exports.EditorDecorationStyle = {}));
exports.EditorDecorationStyle = EditorDecorationStyle;
//# sourceMappingURL=editor-decoration-style.js.map