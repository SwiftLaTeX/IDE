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
import { MessageService, CommandContribution, CommandRegistry, Command, DisposableCollection } from '@theia/core/lib/common';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { Workspace, Languages } from '@theia/languages/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { DebugConfiguration } from '@theia/debug/lib/common/debug-common';
import { DebugSession } from '@theia/debug/lib/browser/debug-session';
import { DebugSessionManager } from '@theia/debug/lib/browser/debug-session-manager';
import { DebugConfigurationManager } from '@theia/debug/lib/browser/debug-configuration-manager';
import { JavaDebugPreferences } from './java-debug-preferences';
declare enum HcrChangeType {
    ERROR = "ERROR",
    WARNING = "WARNING",
    STARTING = "STARTING",
    END = "END",
    BUILD_COMPLETE = "BUILD_COMPLETE"
}
declare enum LogLevel {
    FINE = "FINE",
    INFO = "INFO",
    SEVERE = "SEVERE",
    WARNING = "WARNING"
}
export declare namespace JavaDebugCommands {
    const RUN: Command;
    const DEBUG: Command;
    const RESOLVE_MAIN_METHOD = "vscode.java.resolveMainMethod";
}
export declare namespace JavaDebugSession {
    function is(session: DebugSession): boolean;
}
export declare class JavaDebugFrontendContribution implements FrontendApplicationContribution, CommandContribution {
    protected readonly workspace: Workspace;
    protected readonly languages: Languages;
    protected readonly commands: CommandRegistry;
    protected readonly messages: MessageService;
    protected readonly sessions: DebugSessionManager;
    protected readonly preferences: JavaDebugPreferences;
    protected readonly workspaceService: WorkspaceService;
    protected readonly configurations: DebugConfigurationManager;
    protected readonly suppressedReasons: Set<string>;
    initialize(): void;
    registerCommands(commands: CommandRegistry): void;
    protected readonly toDisposeRunDebugCodeLens: DisposableCollection;
    protected updateRunDebugCodeLens(): void;
    protected runProgram(mainClass: string, projectName: string, uri: string, noDebug?: boolean): Promise<void>;
    protected constructDebugConfig(mainClass: string, projectName: string, workspaceFolderUri?: string): DebugConfiguration;
    protected findConfiguration(mainClass: string, projectName: string): IterableIterator<DebugConfiguration>;
    protected dirtyDebugSettings: boolean;
    protected updateDebugSettings(): Promise<void>;
    protected convertLogLevel(commonLogLevel: string): LogLevel;
    protected applyCodeChanges(session: DebugSession, { changeType, message }: {
        changeType?: HcrChangeType;
        message: string;
    }): Promise<void>;
    protected handleUserNotification({ notificationType, message }: {
        notificationType?: string;
        message: string;
    }): Promise<void>;
}
export {};
//# sourceMappingURL=java-debug-frontend-contribution.d.ts.map