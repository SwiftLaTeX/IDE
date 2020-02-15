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
export interface ContentLines extends ArrayLike<string> {
    readonly length: number;
    getLineContent: (line: number) => string;
}
export interface ContentLinesArrayLike extends ContentLines, ArrayLike<string> {
    [Symbol.iterator]: () => IterableIterator<string>;
    readonly [n: number]: string;
}
export declare namespace ContentLines {
    function fromString(content: string): ContentLines;
    function arrayLike(lines: ContentLines): ContentLinesArrayLike;
}
//# sourceMappingURL=content-lines.d.ts.map