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
var React = require("react");
// TODO: Remove this workaround once issue is fixed by anser.
// REF: https://github.com/IonicaBizau/anser/issues/52
var ansiToHtml = require('anser').ansiToHtml;
var AnsiConsoleItem = /** @class */ (function () {
    function AnsiConsoleItem(content, severity) {
        this.content = content;
        this.severity = severity;
        this.htmlContent = ansiToHtml(this.content, {
            use_classes: true,
            remove_empty: true
        });
    }
    Object.defineProperty(AnsiConsoleItem.prototype, "visible", {
        get: function () {
            return !!this.htmlContent;
        },
        enumerable: true,
        configurable: true
    });
    AnsiConsoleItem.prototype.render = function () {
        return React.createElement("div", { className: 'theia-console-ansi-console-item', dangerouslySetInnerHTML: { __html: this.htmlContent } });
    };
    return AnsiConsoleItem;
}());
exports.AnsiConsoleItem = AnsiConsoleItem;
//# sourceMappingURL=ansi-console-item.js.map