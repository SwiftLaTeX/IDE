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
/**
 * Parses the given line into an array of args respecting escapes and string literals.
 * @param line the given line to parse
 */
export declare function parseArgs(line: string | undefined): string[];
/**
 * Convert a signal number to its short name (using the signal definitions of
 * the current host).  Should never be called on Windows.  For Linux, this is
 * only valid for the x86 and ARM architectures, since other architectures may
 * use different numbers, see signal(7).
 */
export declare function signame(sig: number): string;
/**
 * Convert a code number to its short name
 */
export declare function codename(code: number): string;
//# sourceMappingURL=utils.d.ts.map