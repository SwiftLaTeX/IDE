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
import { DebugConfiguration } from '@theia/debug/lib/common/debug-configuration';
import { JavaExtensionContribution } from '@theia/java/lib/node';
import { MessageService, CommandService } from '@theia/core/lib/common';
import { QuickPickService, QuickPickItem } from '@theia/core/lib/common/quick-pick-service';
import { AbstractVSCodeDebugAdapterContribution } from '@theia/debug/lib/node/vscode/vscode-debug-adapter-contribution';
export declare namespace VSCodeJavaDebugCommands {
    const COMPILE_WORKSPACE = "java.workspace.compile";
    const RESOLVE_MAINCLASS = "vscode.java.resolveMainClass";
    const VALIDATE_LAUNCH_CONFIG = "vscode.java.validateLaunchConfig";
    const RESOLVE_CLASSPATH = "vscode.java.resolveClasspath";
    const START_DEBUG_SESSION = "vscode.java.startDebugSession";
}
export interface MainClassOption {
    readonly mainClass: string;
    readonly projectName?: string;
    readonly filePath?: string;
}
interface ValidationResult {
    readonly isValid: boolean;
    readonly message?: string;
}
interface LaunchValidationResponse {
    readonly mainClass: ValidationResult;
    readonly projectName: ValidationResult;
    readonly proposals?: MainClassOption[];
}
export declare class JavaDebugExtensionContribution extends AbstractVSCodeDebugAdapterContribution implements JavaExtensionContribution {
    constructor();
    getExtensionBundles(): Promise<string[]>;
}
export declare class JavaDebugAdapterContribution extends JavaDebugExtensionContribution {
    protected readonly commands: CommandService;
    protected readonly messages: MessageService;
    protected readonly quickPickService: QuickPickService;
    provideDebugConfigurations(workspaceFolderUri?: string): Promise<DebugConfiguration[]>;
    protected constructLaunchConfigName(mainClass: string, projectName: string | undefined, cache: {
        [name: string]: number;
    }): string;
    resolveDebugConfiguration(config: DebugConfiguration, workspaceFolderUri?: string): Promise<DebugConfiguration | undefined>;
    protected resolveLaunchConfig(config: DebugConfiguration, workspaceFolderUri?: string): Promise<MainClassOption | undefined>;
    protected promptMainClass(workspaceFolderUri?: string): Promise<MainClassOption | undefined>;
    protected fixMainClass(config: DebugConfiguration, validationResponse: LaunchValidationResponse, workspaceFolderUri?: string): Promise<MainClassOption | undefined>;
    protected selectMainClass(options: MainClassOption[]): Promise<MainClassOption | undefined>;
    protected formatMainClassOptions(options: MainClassOption[]): QuickPickItem<MainClassOption>[];
    protected resolveMainClass(workspaceFolderUri?: string): Promise<MainClassOption[]>;
    protected compileWorkspace(): Promise<void>;
    protected validateLaunchConfig(mainClass: string, projectName: string, containsExternalClasspaths: boolean, workspaceFolderUri?: string): Promise<LaunchValidationResponse | undefined>;
    protected resolveClasspath(mainClass: string | undefined, projectName: string | undefined): Promise<[string, string] | undefined>;
    protected startDebugSession(): Promise<any>;
    /**
     * Converts an array of arguments to a string as the args and vmArgs.
     */
    protected concatArgs(args: any[]): string;
}
export {};
//# sourceMappingURL=java-debug-adapter-contribution.d.ts.map