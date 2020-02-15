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
import { MessageConnection } from 'vscode-jsonrpc';
import { CommandRegistry, Disposable, MaybePromise } from '@theia/core/lib/common';
import { Workspace, Languages, Window, ILanguageClient, LanguageClientOptions, MonacoLanguageClient, LanguageContribution } from './language-client-services';
export declare class LanguageClientFactory {
    protected readonly workspace: Workspace;
    protected readonly languages: Languages;
    protected readonly window: Window;
    protected readonly registry: CommandRegistry;
    constructor(workspace: Workspace, languages: Languages, window: Window);
    protected registerCommand(id: string, callback: (...args: any[]) => any, thisArg?: any): Disposable;
    get(contribution: LanguageContribution, clientOptions: LanguageClientOptions, connectionProvider: MessageConnection | (() => MaybePromise<MessageConnection>)): ILanguageClient;
    /**
     * see https://github.com/eclipse-theia/theia/issues/4085
     * remove when monaco-languageclient is upgraded to latest vscode-languageclient
     */
    protected patch4085(client: MonacoLanguageClient): MonacoLanguageClient;
}
//# sourceMappingURL=language-client-factory.d.ts.map