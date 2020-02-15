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
import URI from '@theia/core/lib/common/uri';
import { FileSystem } from '../../common/filesystem';
export declare class DirectoryArchiver {
    protected readonly fileSystem: FileSystem;
    archive(inputPath: string, outputPath: string, entries?: string[]): Promise<void>;
    findCommonParents(uris: URI[]): Promise<Map<string, string[]>>;
    protected closestCommonParentUri(left: URI, right: URI): URI | undefined;
    protected isDir(uri: URI): Promise<boolean>;
    protected equal(left: URI | URI[], right: URI | URI[]): boolean;
    protected toUriString(uri: URI): string;
}
//# sourceMappingURL=directory-archiver.d.ts.map