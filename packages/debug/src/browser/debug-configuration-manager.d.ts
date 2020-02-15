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
import URI from '@theia/core/lib/common/uri';
import { Emitter, Event, WaitUntilEvent } from '@theia/core/lib/common/event';
import { EditorManager, EditorWidget } from '@theia/editor/lib/browser';
import { PreferenceService, StorageService } from '@theia/core/lib/browser';
import { QuickPickService } from '@theia/core/lib/common/quick-pick-service';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { DebugConfigurationModel } from './debug-configuration-model';
import { DebugSessionOptions } from './debug-session-options';
import { DebugService } from '../common/debug-service';
import { ContextKey, ContextKeyService } from '@theia/core/lib/browser/context-key-service';
import { DebugConfiguration } from '../common/debug-common';
import { WorkspaceVariableContribution } from '@theia/workspace/lib/browser/workspace-variable-contribution';
import { FileSystem } from '@theia/filesystem/lib/common';
import { PreferenceConfigurations } from '@theia/core/lib/browser/preferences/preference-configurations';
export interface WillProvideDebugConfiguration extends WaitUntilEvent {
}
export declare class DebugConfigurationManager {
    protected readonly workspaceService: WorkspaceService;
    protected readonly editorManager: EditorManager;
    protected readonly debug: DebugService;
    protected readonly quickPick: QuickPickService;
    protected readonly contextKeyService: ContextKeyService;
    protected readonly filesystem: FileSystem;
    protected readonly preferences: PreferenceService;
    protected readonly preferenceConfigurations: PreferenceConfigurations;
    protected readonly workspaceVariables: WorkspaceVariableContribution;
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: Event<void>;
    protected readonly onWillProvideDebugConfigurationEmitter: Emitter<WillProvideDebugConfiguration>;
    readonly onWillProvideDebugConfiguration: Event<WillProvideDebugConfiguration>;
    protected debugConfigurationTypeKey: ContextKey<string>;
    protected initialized: Promise<void>;
    protected init(): Promise<void>;
    protected readonly models: Map<string, DebugConfigurationModel>;
    protected updateModels: () => Promise<void>;
    get all(): IterableIterator<DebugSessionOptions>;
    protected getAll(): IterableIterator<DebugSessionOptions>;
    get supported(): Promise<IterableIterator<DebugSessionOptions>>;
    protected getSupported(): Promise<IterableIterator<DebugSessionOptions>>;
    protected doGetSupported(debugTypes: Set<string>): IterableIterator<DebugSessionOptions>;
    protected _currentOptions: DebugSessionOptions | undefined;
    get current(): DebugSessionOptions | undefined;
    set current(option: DebugSessionOptions | undefined);
    protected updateCurrent(options?: DebugSessionOptions | undefined): void;
    find(name: string, workspaceFolderUri: string | undefined): DebugSessionOptions | undefined;
    openConfiguration(): Promise<void>;
    addConfiguration(): Promise<void>;
    protected get model(): DebugConfigurationModel | undefined;
    protected doOpen(model: DebugConfigurationModel): Promise<EditorWidget>;
    protected doCreate(model: DebugConfigurationModel): Promise<URI>;
    protected provideDebugConfigurations(debugType: string, workspaceFolderUri: string | undefined): Promise<DebugConfiguration[]>;
    protected fireWillProvideDebugConfiguration(): Promise<void>;
    protected getInitialConfigurationContent(initialConfigurations: DebugConfiguration[]): string;
    protected selectDebugType(): Promise<string | undefined>;
    protected readonly storage: StorageService;
    load(): Promise<void>;
    save(): void;
}
export declare namespace DebugConfigurationManager {
    interface Data {
        current?: {
            name: string;
            workspaceFolderUri?: string;
        };
    }
}
//# sourceMappingURL=debug-configuration-manager.d.ts.map