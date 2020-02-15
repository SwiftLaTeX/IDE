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
var jsdom_1 = require("jsdom");
/**
 * ```typescript
 * const disableJSDOM = enableJSDOM();
 * // actions require DOM
 * disableJSDOM();
 * ```
 */
function enableJSDOM() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    /* eslint-disable no-unused-expressions */
    // do nothing if running in browser
    try {
        global;
    }
    catch (e) {
        return function () { };
    }
    // no need to enable twice
    if (typeof global['_disableJSDOM'] === 'function') {
        return global['_disableJSDOM'];
    }
    var dom = new jsdom_1.JSDOM('<!doctype html><html><body></body></html>', {
        url: 'http://localhost/'
    });
    global['document'] = dom.window.document;
    global['window'] = dom.window;
    global['navigator'] = { userAgent: 'node.js', platform: 'Mac' };
    var toCleanup = [];
    Object.getOwnPropertyNames(dom.window).forEach(function (property) {
        if (typeof global[property] === 'undefined') {
            global[property] = dom.window[property];
            toCleanup.push(property);
        }
    });
    dom.window.document['queryCommandSupported'] = function () { };
    var disableJSDOM = global['_disableJSDOM'] = function () {
        var property;
        while (property = toCleanup.pop()) {
            delete global[property];
        }
        delete dom.window.document['queryCommandSupported'];
        delete global['document'];
        delete global['window'];
        delete global['navigator'];
        delete global['_disableJSDOM'];
    };
    return disableJSDOM;
}
exports.enableJSDOM = enableJSDOM;
//# sourceMappingURL=jsdom.js.map