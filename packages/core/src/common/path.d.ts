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
 * On POSIX:
 * ┌──────────────────────┬────────────┐
 * │          dir         │    base    │
 * ├──────┬               ├──────┬─────┤
 * │ root │               │ name │ ext │
 * "  /     home/user/dir / file  .txt "
 * └──────┴───────────────┴──────┴─────┘
 *
 * On Windows:
 * ┌──────────────────────┬────────────┐
 * │           dir        │    base    │
 * ├──────┬               ├──────┬─────┤
 * │ root │               │ name │ ext │
 * "  /c: / home/user/dir / file  .txt "
 * └──────┴───────────────┴──────┴─────┘
 */
export declare class Path {
    static separator: '/';
    static isDrive(segment: string): boolean;
    /**
     * vscode-uri always normalizes drive letters to lower case:
     * https://github.com/Microsoft/vscode-uri/blob/b1d3221579f97f28a839b6f996d76fc45e9964d8/src/index.ts#L1025
     * Theia path should be adjusted to this.
     */
    static normalizeDrive(path: string): string;
    readonly isAbsolute: boolean;
    readonly isRoot: boolean;
    readonly root: Path | undefined;
    readonly base: string;
    readonly name: string;
    readonly ext: string;
    private _dir;
    private readonly raw;
    /**
     * The raw should be normalized, meaning that only '/' is allowed as a path separator.
     */
    constructor(raw: string);
    protected computeRoot(): Path | undefined;
    /**
     * Returns the parent directory if it exists (`hasDir === true`) or `this` otherwise.
     */
    get dir(): Path;
    /**
     * Returns `true` if this has a parent directory, `false` otherwise.
     *
     * _This implementation returns `true` if and only if this is not the root dir and
     * there is a path separator in the raw path._
     */
    get hasDir(): boolean;
    protected computeDir(): Path;
    join(...paths: string[]): Path;
    toString(): string;
    relative(path: Path): Path | undefined;
    isEqualOrParent(path: Path): boolean;
    relativity(path: Path): number;
    normalize(): Path;
}
//# sourceMappingURL=path.d.ts.map