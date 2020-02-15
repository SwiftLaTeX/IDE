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
import { ApplicationPackage } from '@theia/application-package';
import { BaseLanguageServerContribution, IConnection, LanguageServerStartOptions } from '@theia/languages/lib/node';
import { TypescriptStartParams } from '../common';
import { TypeScriptPlugin } from 'typescript-language-server/lib/ts-protocol';
import { Message } from 'vscode-ws-jsonrpc';
export interface TypeScriptStartOptions extends LanguageServerStartOptions {
    parameters?: TypescriptStartParams;
}
export declare class TypeScriptContribution extends BaseLanguageServerContribution {
    readonly id = "typescript";
    readonly name = "TypeScript";
    protected readonly plugins: TypeScriptPlugin[];
    protected readonly applicationPackage: ApplicationPackage;
    protected init(): void;
    start(clientConnection: IConnection, { parameters }: TypeScriptStartOptions): Promise<void>;
    protected map(message: Message): Message;
}
//# sourceMappingURL=typescript-contribution.d.ts.map