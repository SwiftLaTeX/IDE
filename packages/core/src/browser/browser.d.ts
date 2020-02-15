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
export declare const isIE: boolean;
export declare const isEdge: boolean;
export declare const isEdgeOrIE: boolean;
export declare const isOpera: boolean;
export declare const isFirefox: boolean;
export declare const isWebKit: boolean;
export declare const isChrome: boolean;
export declare const isSafari: boolean;
export declare const isIPad: boolean;
export declare const isNative: boolean;
export declare const isBasicWasmSupported: boolean;
/**
 * Resolves after the next animation frame if no parameter is given,
 * or after the given number of animation frames.
 */
export declare function animationFrame(n?: number): Promise<void>;
/**
 * Parse a magnitude value (e.g. width, height, left, top) from a CSS attribute value.
 * Returns the given default value (or undefined) if the value cannot be determined,
 * e.g. because it is a relative value like `50%` or `auto`.
 */
export declare function parseCssMagnitude(value: string | null, defaultValue: number): number;
/**
 * Parse the number of milliseconds from a CSS time value.
 * Returns the given default value (or undefined) if the value cannot be determined.
 */
export declare function parseCssTime(time: string | null, defaultValue: number): number;
/**
 * Prevent browser back/forward navigation of a mouse wheel event.
 */
export declare function preventNavigation(event: WheelEvent): void;
//# sourceMappingURL=browser.d.ts.map