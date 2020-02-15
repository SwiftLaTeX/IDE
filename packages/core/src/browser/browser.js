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
Object.defineProperty(exports, "__esModule", { value: true });
var userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
exports.isIE = (userAgent.indexOf('Trident') >= 0);
exports.isEdge = (userAgent.indexOf('Edge/') >= 0);
exports.isEdgeOrIE = exports.isIE || exports.isEdge;
exports.isOpera = (userAgent.indexOf('Opera') >= 0);
exports.isFirefox = (userAgent.indexOf('Firefox') >= 0);
exports.isWebKit = (userAgent.indexOf('AppleWebKit') >= 0);
exports.isChrome = (userAgent.indexOf('Chrome') >= 0);
exports.isSafari = (userAgent.indexOf('Chrome') === -1) && (userAgent.indexOf('Safari') >= 0);
exports.isIPad = (userAgent.indexOf('iPad') >= 0);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.isNative = typeof window.process !== 'undefined';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.isBasicWasmSupported = typeof window.WebAssembly !== 'undefined';
/**
 * Resolves after the next animation frame if no parameter is given,
 * or after the given number of animation frames.
 */
function animationFrame(n) {
    if (n === void 0) { n = 1; }
    return new Promise(function (resolve) {
        function frameFunc() {
            if (n <= 0) {
                resolve();
            }
            else {
                n--;
                requestAnimationFrame(frameFunc);
            }
        }
        frameFunc();
    });
}
exports.animationFrame = animationFrame;
function parseCssMagnitude(value, defaultValue) {
    if (value) {
        var parsed = void 0;
        if (value.endsWith('px')) {
            parsed = parseFloat(value.substring(0, value.length - 2));
        }
        else {
            parsed = parseFloat(value);
        }
        if (!isNaN(parsed)) {
            return parsed;
        }
    }
    return defaultValue;
}
exports.parseCssMagnitude = parseCssMagnitude;
function parseCssTime(time, defaultValue) {
    if (time) {
        var parsed = void 0;
        if (time.endsWith('ms')) {
            parsed = parseFloat(time.substring(0, time.length - 2));
        }
        else if (time.endsWith('s')) {
            parsed = parseFloat(time.substring(0, time.length - 1)) * 1000;
        }
        else {
            parsed = parseFloat(time);
        }
        if (!isNaN(parsed)) {
            return parsed;
        }
    }
    return defaultValue;
}
exports.parseCssTime = parseCssTime;
function getMonacoEditorScroll(elem) {
    var linesContent = elem.querySelector('.lines-content');
    var viewLines = elem.querySelector('.view-lines');
    // eslint-disable-next-line no-null/no-null
    if (linesContent === null || viewLines === null) {
        return undefined;
    }
    var linesContentStyle = linesContent.style;
    var elemStyle = elem.style;
    var viewLinesStyle = viewLines.style;
    return {
        left: -parseCssMagnitude(linesContentStyle.left, 0),
        top: -parseCssMagnitude(linesContentStyle.top, 0),
        maxLeft: parseCssMagnitude(viewLinesStyle.width, 0) - parseCssMagnitude(elemStyle.width, 0),
        maxTop: parseCssMagnitude(viewLinesStyle.height, 0) - parseCssMagnitude(elemStyle.height, 0)
    };
}
/**
 * Prevent browser back/forward navigation of a mouse wheel event.
 */
function preventNavigation(event) {
    var currentTarget = event.currentTarget, deltaX = event.deltaX, deltaY = event.deltaY;
    var absDeltaX = Math.abs(deltaX);
    var absDeltaY = Math.abs(deltaY);
    var elem = event.target;
    while (elem && elem !== currentTarget) {
        var scroll_1 = void 0;
        if (elem.classList.contains('monaco-scrollable-element')) {
            scroll_1 = getMonacoEditorScroll(elem);
        }
        else {
            scroll_1 = {
                left: elem.scrollLeft,
                top: elem.scrollTop,
                maxLeft: elem.scrollWidth - elem.clientWidth,
                maxTop: elem.scrollHeight - elem.clientHeight
            };
        }
        if (scroll_1) {
            var scrollH = scroll_1.maxLeft > 0 && (deltaX < 0 && scroll_1.left > 0 || deltaX > 0 && scroll_1.left < scroll_1.maxLeft);
            var scrollV = scroll_1.maxTop > 0 && (deltaY < 0 && scroll_1.top > 0 || deltaY > 0 && scroll_1.top < scroll_1.maxTop);
            if (scrollH && scrollV || scrollH && absDeltaX > absDeltaY || scrollV && absDeltaY > absDeltaX) {
                // The event is consumed by the scrollable child element
                return;
            }
        }
        elem = elem.parentElement;
    }
    event.preventDefault();
    event.stopPropagation();
}
exports.preventNavigation = preventNavigation;
//# sourceMappingURL=browser.js.map