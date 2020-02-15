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
import { Position, DocumentUri } from 'vscode-languageserver-types';
import { Definition, Caller, Callee } from './callhierarchy';
import { ContributionProvider } from '@theia/core/lib/common';
import { LanguageSelector } from '@theia/languages/lib/common/language-selector';
import URI from '@theia/core/lib/common/uri';
import { Disposable } from '@theia/core/lib/common';
import { CancellationToken } from '@theia/core';
export declare const CallHierarchyService: unique symbol;
export interface CallHierarchyService {
    readonly selector: LanguageSelector;
    getRootDefinition(uri: DocumentUri, position: Position, cancellationToken: CancellationToken): Promise<Definition | undefined>;
    getCallers(definition: Definition, cancellationToken: CancellationToken): Promise<Caller[] | undefined>;
    getCallees?(definition: Definition, cancellationToken: CancellationToken): Promise<Callee[] | undefined>;
}
export declare class CallHierarchyServiceProvider {
    protected readonly contributions: ContributionProvider<CallHierarchyService>;
    private services;
    init(): void;
    get(languageId: string, uri: URI): CallHierarchyService | undefined;
    add(service: CallHierarchyService): Disposable;
    private remove;
}
//# sourceMappingURL=callhierarchy-service.d.ts.map