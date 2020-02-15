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
import URI from 'vscode-uri/lib/umd';
import * as theia from '@theia/plugin';
import { DocumentsExtImpl } from '../documents';
import { CodeLensSymbol } from '../../common/plugin-api-rpc-model';
import { CommandRegistryImpl } from '../command-registry';
/** Adapts the calls from main to extension thread for providing/resolving the code lenses. */
export declare class CodeLensAdapter {
    private readonly provider;
    private readonly documents;
    private readonly commands;
    private static readonly BAD_CMD;
    private cacheId;
    private readonly cache;
    private readonly disposables;
    constructor(provider: theia.CodeLensProvider, documents: DocumentsExtImpl, commands: CommandRegistryImpl);
    provideCodeLenses(resource: URI, token: theia.CancellationToken): Promise<CodeLensSymbol[] | undefined>;
    resolveCodeLens(resource: URI, symbol: CodeLensSymbol, token: theia.CancellationToken): Promise<CodeLensSymbol | undefined>;
}
//# sourceMappingURL=lens.d.ts.map