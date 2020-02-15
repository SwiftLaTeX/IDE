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
import { Position } from '../../common/plugin-api-rpc';
import { CompletionContext, CompletionResultDto, Completion } from '../../common/plugin-api-rpc-model';
import { CommandRegistryImpl } from '../command-registry';
export declare class CompletionAdapter {
    private readonly delegate;
    private readonly documents;
    private readonly commands;
    private cacheId;
    private readonly cache;
    private readonly disposables;
    constructor(delegate: theia.CompletionItemProvider, documents: DocumentsExtImpl, commands: CommandRegistryImpl);
    provideCompletionItems(resource: URI, position: Position, context: CompletionContext, token: theia.CancellationToken): Promise<CompletionResultDto | undefined>;
    resolveCompletionItem(resource: URI, position: Position, completion: Completion, token: theia.CancellationToken): Promise<Completion>;
    releaseCompletionItems(id: number): Promise<void>;
    private convertCompletionItem;
    static hasResolveSupport(provider: theia.CompletionItemProvider): boolean;
}
//# sourceMappingURL=completion.d.ts.map