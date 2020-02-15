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
/// <reference types="node" />
import { Message } from 'vscode-ws-jsonrpc';
import { IConnection, BaseLanguageServerContribution, LanguageServerStartOptions } from '@theia/languages/lib/node';
import { JavaStartParams } from '../common';
import { JavaCliContribution } from './java-cli-contribution';
import { ContributionProvider } from '@theia/core';
import { JavaExtensionContribution } from './java-extension-model';
export declare type ConfigurationType = 'config_win' | 'config_mac' | 'config_linux';
export declare const configurations: Map<NodeJS.Platform, ConfigurationType>;
export interface JavaStartOptions extends LanguageServerStartOptions {
    parameters?: JavaStartParams;
}
export declare class JavaContribution extends BaseLanguageServerContribution {
    protected readonly cli: JavaCliContribution;
    protected readonly contributions: ContributionProvider<JavaExtensionContribution>;
    readonly id = "java";
    readonly name = "Java";
    private activeDataFolders;
    private javaBundles;
    protected readonly ready: Promise<void>;
    constructor(cli: JavaCliContribution, contributions: ContributionProvider<JavaExtensionContribution>);
    protected collectExtensionBundles(): Promise<void>;
    start(clientConnection: IConnection, { parameters }: JavaStartOptions): Promise<void>;
    protected generateDataFolderSuffix(workspaceUri: string): string;
    protected map(message: Message): Message;
}
//# sourceMappingURL=java-contribution.d.ts.map