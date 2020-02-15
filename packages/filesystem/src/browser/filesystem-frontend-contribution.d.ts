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
import { MaybePromise, SelectionService } from '@theia/core/lib/common';
import { Command, CommandContribution, CommandRegistry } from '@theia/core/lib/common/command';
import { FrontendApplicationContribution, ApplicationShell, NavigatableWidget, WidgetManager, FrontendApplication } from '@theia/core/lib/browser';
import { FileSystemWatcher, FileChangeEvent, FileMoveEvent } from './filesystem-watcher';
import { MimeService } from '@theia/core/lib/browser/mime-service';
import { FileSystemPreferences } from './filesystem-preferences';
import { FileSelection } from './file-selection';
import { FileUploadService } from './file-upload-service';
export declare namespace FileSystemCommands {
    const UPLOAD: Command;
}
export declare class FileSystemFrontendContribution implements FrontendApplicationContribution, CommandContribution {
    protected readonly shell: ApplicationShell;
    protected readonly widgetManager: WidgetManager;
    protected readonly fileSystemWatcher: FileSystemWatcher;
    protected readonly mimeService: MimeService;
    protected readonly preferences: FileSystemPreferences;
    protected readonly selectionService: SelectionService;
    protected readonly uploadService: FileUploadService;
    initialize(): void;
    onStart?(app: FrontendApplication): MaybePromise<void>;
    registerCommands(commands: CommandRegistry): void;
    protected canUpload({ fileStat }: FileSelection): boolean;
    protected upload(selection: FileSelection): Promise<void>;
    protected pendingOperation: Promise<void>;
    protected run(operation: () => MaybePromise<void>): Promise<void>;
    protected moveWidgets(event: FileMoveEvent): Promise<void>;
    protected moveWidget(resourceUri: URI, widget: NavigatableWidget, event: FileMoveEvent): Promise<void>;
    protected createMoveToUri(resourceUri: URI, widget: NavigatableWidget, event: FileMoveEvent): URI | undefined;
    protected readonly deletedSuffix = " (deleted from disk)";
    protected updateWidgets(event: FileChangeEvent): void;
    protected doUpdateWidgets(event: FileChangeEvent): void;
    protected updateWidget(uri: URI, widget: NavigatableWidget, event: FileChangeEvent, { dirty, toClose }: {
        dirty: Set<string>;
        toClose: Map<string, NavigatableWidget[]>;
    }): void;
    protected updateAssociations(): void;
}
//# sourceMappingURL=filesystem-frontend-contribution.d.ts.map