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
import URI from '@theia/core/lib/common/uri';
import { SelectionService } from '@theia/core/lib/common/selection-service';
import { Command, CommandContribution, CommandRegistry } from '@theia/core/lib/common/command';
import { MenuContribution, MenuModelRegistry } from '@theia/core/lib/common/menu';
import { FileSystem, FileStat } from '@theia/filesystem/lib/common/filesystem';
import { FileDialogService } from '@theia/filesystem/lib/browser';
import { OpenerService, OpenHandler, FrontendApplication, LabelProvider } from '@theia/core/lib/browser';
import { UriCommandHandler, UriAwareCommandHandler } from '@theia/core/lib/common/uri-command-handler';
import { WorkspaceService } from './workspace-service';
import { MessageService } from '@theia/core/lib/common/message-service';
import { WorkspacePreferences } from './workspace-preferences';
import { WorkspaceDeleteHandler } from './workspace-delete-handler';
import { WorkspaceDuplicateHandler } from './workspace-duplicate-handler';
import { WorkspaceCompareHandler } from './workspace-compare-handler';
export declare namespace WorkspaceCommands {
    const OPEN: Command & {
        dialogLabel: string;
    };
    const OPEN_FILE: Command & {
        dialogLabel: string;
    };
    const OPEN_FOLDER: Command & {
        dialogLabel: string;
    };
    const OPEN_WORKSPACE: Command & {
        dialogLabel: string;
    };
    const OPEN_RECENT_WORKSPACE: Command;
    const CLOSE: Command;
    const NEW_FILE: Command;
    const NEW_FOLDER: Command;
    const FILE_OPEN_WITH: (opener: OpenHandler) => Command;
    const FILE_RENAME: Command;
    const FILE_DELETE: Command;
    const FILE_DUPLICATE: Command;
    const FILE_COMPARE: Command;
    const ADD_FOLDER: Command;
    const REMOVE_FOLDER: Command;
    const SAVE_WORKSPACE_AS: Command;
    const SAVE_AS: Command;
}
export declare class FileMenuContribution implements MenuContribution {
    registerMenus(registry: MenuModelRegistry): void;
}
export declare class EditMenuContribution implements MenuContribution {
    registerMenus(registry: MenuModelRegistry): void;
}
export declare class WorkspaceCommandContribution implements CommandContribution {
    protected readonly labelProvider: LabelProvider;
    protected readonly fileSystem: FileSystem;
    protected readonly workspaceService: WorkspaceService;
    protected readonly selectionService: SelectionService;
    protected readonly openerService: OpenerService;
    protected readonly app: FrontendApplication;
    protected readonly messageService: MessageService;
    protected readonly preferences: WorkspacePreferences;
    protected readonly fileDialogService: FileDialogService;
    protected readonly deleteHandler: WorkspaceDeleteHandler;
    protected readonly duplicateHandler: WorkspaceDuplicateHandler;
    protected readonly compareHandler: WorkspaceCompareHandler;
    registerCommands(registry: CommandRegistry): void;
    protected newUriAwareCommandHandler(handler: UriCommandHandler<URI>): UriAwareCommandHandler<URI>;
    protected newMultiUriAwareCommandHandler(handler: UriCommandHandler<URI[]>): UriAwareCommandHandler<URI[]>;
    protected newWorkspaceRootUriAwareCommandHandler(handler: UriCommandHandler<URI>): WorkspaceRootUriAwareCommandHandler;
    /**
     * Returns an error message if the file name is invalid. Otherwise, an empty string.
     *
     * @param name the simple file name of the file to validate.
     * @param parent the parent directory's file stat.
     * @param recursive allow file or folder creation using recursive path
     */
    protected validateFileName(name: string, parent: FileStat, recursive?: boolean): Promise<string>;
    protected trimFileName(name: string): string;
    protected getDirectory(candidate: URI): Promise<FileStat | undefined>;
    protected getParent(candidate: URI): Promise<FileStat | undefined>;
    protected addFolderToWorkspace(uri: URI | undefined): Promise<void>;
    protected areWorkspaceRoots(uris: URI[]): boolean;
    protected isWorkspaceRoot(uri: URI): boolean;
    protected getDefaultFileConfig(): {
        fileName: string;
        fileExtension: string;
    };
    protected removeFolderFromWorkspace(uris: URI[]): Promise<void>;
    protected areMultipleOpenHandlersPresent(openers: OpenHandler[], uri: URI): boolean;
}
export declare class WorkspaceRootUriAwareCommandHandler extends UriAwareCommandHandler<URI> {
    protected readonly workspaceService: WorkspaceService;
    protected readonly selectionService: SelectionService;
    protected readonly handler: UriCommandHandler<URI>;
    constructor(workspaceService: WorkspaceService, selectionService: SelectionService, handler: UriCommandHandler<URI>);
    isEnabled(...args: any[]): boolean;
    isVisible(...args: any[]): boolean;
    protected getUri(...args: any[]): URI | undefined;
}
//# sourceMappingURL=workspace-commands.d.ts.map