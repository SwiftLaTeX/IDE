/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { CommandContribution, CommandHandler, CommandRegistry } from '@theia/core/lib/common/command';
import { QuickOpenContribution, QuickOpenHandler, QuickOpenModel, PrefixQuickOpenService, QuickOpenOptions, QuickOpenHandlerRegistry, QuickOpenItem } from '@theia/core/lib/browser/quick-open';
import { DebugSessionManager } from './debug-session-manager';
import { DebugConfigurationManager } from './debug-configuration-manager';
import { DebugSessionOptions } from './debug-session-options';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { LabelProvider } from '@theia/core/lib/browser/label-provider';
export declare class DebugPrefixConfiguration implements CommandContribution, CommandHandler, QuickOpenContribution, QuickOpenHandler, QuickOpenModel {
    protected readonly commandRegistry: CommandRegistry;
    protected readonly debugSessionManager: DebugSessionManager;
    protected readonly debugConfigurationManager: DebugConfigurationManager;
    protected readonly prefixQuickOpenService: PrefixQuickOpenService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly labelProvider: LabelProvider;
    readonly prefix = "debug ";
    readonly description = "Debug Configuration";
    private readonly command;
    execute(): void;
    isEnabled(): boolean;
    isVisible(): boolean;
    getModel(): QuickOpenModel;
    getOptions(): QuickOpenOptions;
    registerCommands(commands: CommandRegistry): void;
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
    onType(_lookFor: string, acceptor: (items: QuickOpenItem[]) => void): Promise<void>;
    /**
     * Set the current debug configuration, and execute debug start command.
     *
     * @param configuration the `DebugSessionOptions`.
     */
    protected runConfiguration(configuration: DebugSessionOptions): void;
}
//# sourceMappingURL=debug-prefix-configuration.d.ts.map