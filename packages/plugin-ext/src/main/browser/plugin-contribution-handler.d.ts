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
import { PluginContribution, DeployedPlugin } from '../../common';
import { PreferenceSchemaProperties } from '@theia/core/lib/browser/preferences';
import { MonacoSnippetSuggestProvider } from '@theia/monaco/lib/browser/monaco-snippet-suggest-provider';
import { PluginSharedStyle } from './plugin-shared-style';
import { CommandRegistry, Command, CommandHandler } from '@theia/core/lib/common/command';
import { Disposable } from '@theia/core/lib/common/disposable';
import { Emitter } from '@theia/core/lib/common/event';
import { TaskDefinitionRegistry, ProblemMatcherRegistry, ProblemPatternRegistry } from '@theia/task/lib/browser';
import { PluginDebugService } from './debug/plugin-debug-service';
import { DebugSchemaUpdater } from '@theia/debug/lib/browser/debug-schema-updater';
import { MonacoThemingService } from '@theia/monaco/lib/browser/monaco-theming-service';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
import { PluginIconThemeService } from './plugin-icon-theme-service';
export declare class PluginContributionHandler {
    private injections;
    private readonly grammarsRegistry;
    private readonly viewRegistry;
    private readonly menusContributionHandler;
    private readonly preferenceSchemaProvider;
    private readonly monacoTextmateService;
    private readonly keybindingsContributionHandler;
    protected readonly snippetSuggestProvider: MonacoSnippetSuggestProvider;
    protected readonly commands: CommandRegistry;
    protected readonly style: PluginSharedStyle;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    protected readonly problemMatcherRegistry: ProblemMatcherRegistry;
    protected readonly problemPatternRegistry: ProblemPatternRegistry;
    protected readonly debugService: PluginDebugService;
    protected readonly debugSchema: DebugSchemaUpdater;
    protected readonly monacoThemingService: MonacoThemingService;
    protected readonly colors: ColorRegistry;
    protected readonly iconThemeService: PluginIconThemeService;
    protected readonly commandHandlers: Map<string, ((...args: any[]) => any) | undefined>;
    protected readonly onDidRegisterCommandHandlerEmitter: Emitter<string>;
    readonly onDidRegisterCommandHandler: import("@theia/core/src/common/event").Event<string>;
    /**
     * Always synchronous in order to simplify handling disconnections.
     * @throws never, loading of each contribution should handle errors
     * in order to avoid preventing loading of other contibutions or extensions
     */
    handleContributions(clientId: string, plugin: DeployedPlugin): Disposable;
    protected registerCommands(contribution: PluginContribution): Disposable;
    registerCommand(command: Command): Disposable;
    registerCommandHandler(id: string, execute: CommandHandler['execute']): Disposable;
    hasCommand(id: string): boolean;
    hasCommandHandler(id: string): boolean;
    protected updateDefaultOverridesSchema(configurationDefaults: PreferenceSchemaProperties): Disposable;
    private createRegex;
    private convertIndentationRules;
    private convertFolding;
    private convertTokenTypes;
    private convertEmbeddedLanguages;
}
//# sourceMappingURL=plugin-contribution-handler.d.ts.map