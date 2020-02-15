/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
/**
 * The forward slash path separator.
 */
export declare const sep = "/";
/**
 * The native path separator depending on the OS.
 */
export declare const nativeSep: string;
/**
 * @returns the base name of a path.
 */
export declare function basename(path: string): string;
/**
 * @returns `.far` from `boo.far` or the empty string.
 */
export declare function extname(path: string): string;
export declare function normalize(path: string, toOSPath?: boolean): string;
/**
 * Computes the _root_ this path, like `getRoot('c:\files') === c:\`,
 * `getRoot('files:///files/path') === files:///`,
 * or `getRoot('\\server\shares\path') === \\server\shares\`
 */
export declare function getRoot(path: string, sep?: string): string;
export declare function isEqualOrParent(path: string, candidate: string, ignoreCase?: boolean): boolean;
//# sourceMappingURL=paths.d.ts.map