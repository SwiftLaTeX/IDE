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
import * as theia from '@theia/plugin';
import URI from 'vscode-uri/lib/umd';
import { Selection } from '../../common/plugin-api-rpc';
import { Range, CodeActionContext, CodeAction } from '../../common/plugin-api-rpc-model';
import { DocumentsExtImpl } from '../documents';
import { Diagnostics } from './diagnostics';
import { CommandRegistryImpl } from '../command-registry';
export declare class CodeActionAdapter {
    private readonly provider;
    private readonly document;
    private readonly diagnostics;
    private readonly pluginId;
    private readonly commands;
    constructor(provider: theia.CodeActionProvider, document: DocumentsExtImpl, diagnostics: Diagnostics, pluginId: string, commands: CommandRegistryImpl);
    provideCodeAction(resource: URI, rangeOrSelection: Range | Selection, context: CodeActionContext, token: theia.CancellationToken): Promise<CodeAction[] | undefined>;
    private static _isCommand;
    private static _isSelection;
}
//# sourceMappingURL=code-action.d.ts.map