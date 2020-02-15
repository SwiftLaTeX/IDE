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
import { Location, Range, Position } from 'vscode-languageserver-types';
/**
 * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
 */
export declare function containsRange(range: Range, otherRange: Range): boolean;
export declare function containsPosition(range: Range, position: Position): boolean;
export declare function filterSame(locations: Location[], definition: Location): Location[];
export declare function comparePosition(left: Position, right: Position): number;
export declare function filterUnique(locations: Location[] | null): Location[];
export declare function startsAfter(a: Range, b: Range): boolean;
export declare function isSame(a: Location, b: Location): boolean;
//# sourceMappingURL=utils.d.ts.map