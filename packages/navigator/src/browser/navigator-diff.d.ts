/********************************************************************************
 * Copyright (C) 2019 David Saunders and others.
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
import { FileSystem } from '@theia/filesystem/lib/common/filesystem';
import { SelectionService } from '@theia/core/lib/common';
import { OpenerService } from '@theia/core/lib/browser/opener-service';
import { MessageService } from '@theia/core/lib/common/message-service';
import { Command } from '@theia/core/lib/common/command';
export declare namespace NavigatorDiffCommands {
    const COMPARE_FIRST: Command;
    const COMPARE_SECOND: Command;
}
export declare class NavigatorDiff {
    protected readonly fileSystem: FileSystem;
    protected openerService: OpenerService;
    protected readonly notifications: MessageService;
    protected readonly selectionService: SelectionService;
    constructor();
    protected _firstCompareFile: URI | undefined;
    protected get firstCompareFile(): URI | undefined;
    protected set firstCompareFile(uri: URI | undefined);
    protected _isFirstFileSelected: boolean;
    get isFirstFileSelected(): boolean;
    protected isDirectory(uri: URI): Promise<boolean>;
    protected getURISelection(): Promise<URI | undefined>;
    /**
     * Adds the initial file for comparison
     * @see SelectionService
     * @see compareFiles
     * @returns Promise<boolean> indicating whether the uri is valid
     */
    addFirstComparisonFile(): Promise<boolean>;
    /**
     * Compare selected files.  First file is selected through addFirstComparisonFile
     * @see SelectionService
     * @see addFirstComparisonFile
     * @returns Promise<boolean> indicating whether the comparison was completed successfully
     */
    compareFiles(): Promise<boolean>;
}
//# sourceMappingURL=navigator-diff.d.ts.map