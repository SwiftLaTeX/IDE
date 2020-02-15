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
import { QuickOpenModel, QuickOpenItem, QuickOpenMode, PrefixQuickOpenService, OpenerService, KeybindingRegistry, QuickOpenItemOptions, QuickOpenHandler, QuickOpenOptions } from '@theia/core/lib/browser';
import { FileSystem } from '@theia/filesystem/lib/common/filesystem';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import URI from '@theia/core/lib/common/uri';
import { FileSearchService } from '../common/file-search-service';
import { LabelProvider } from '@theia/core/lib/browser/label-provider';
import { Command } from '@theia/core/lib/common';
import { NavigationLocationService } from '@theia/editor/lib/browser/navigation/navigation-location-service';
import { MessageService } from '@theia/core/lib/common/message-service';
export declare const quickFileOpen: Command;
export declare class QuickFileOpenService implements QuickOpenModel, QuickOpenHandler {
    protected readonly keybindingRegistry: KeybindingRegistry;
    protected readonly fileSystem: FileSystem;
    protected readonly workspaceService: WorkspaceService;
    protected readonly openerService: OpenerService;
    protected readonly quickOpenService: PrefixQuickOpenService;
    protected readonly fileSearchService: FileSearchService;
    protected readonly labelProvider: LabelProvider;
    protected readonly navigationLocationService: NavigationLocationService;
    protected readonly messageService: MessageService;
    /**
     * Whether to hide .gitignored (and other ignored) files.
     */
    protected hideIgnoredFiles: boolean;
    /**
     * Whether the dialog is currently open.
     */
    protected isOpen: boolean;
    /**
     * The current lookFor string input by the user.
     */
    protected currentLookFor: string;
    readonly prefix: string;
    get description(): string;
    getModel(): QuickOpenModel;
    getOptions(): QuickOpenOptions;
    isEnabled(): boolean;
    open(): void;
    /**
     * Get a string (suitable to show to the user) representing the keyboard
     * shortcut used to open the quick file open menu.
     */
    protected getKeyCommand(): string | undefined;
    private cancelIndicator;
    onType(lookFor: string, acceptor: (items: QuickOpenItem[]) => void): Promise<void>;
    protected getRunFunction(uri: URI): (mode: QuickOpenMode) => boolean;
    /**
     * Compare two `QuickOpenItem`.
     *
     * @param a `QuickOpenItem` for comparison.
     * @param b `QuickOpenItem` for comparison.
     * @param member the `QuickOpenItem` object member for comparison.
     */
    protected compareItems(a: QuickOpenItem<QuickOpenItemOptions>, b: QuickOpenItem<QuickOpenItemOptions>, member?: 'getLabel' | 'getUri'): number;
    openFile(uri: URI): void;
    private toItem;
}
//# sourceMappingURL=quick-file-open.d.ts.map