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
import { ReferenceContext, Location } from '../../common/plugin-api-rpc-model';
import { Position } from '../../common/plugin-api-rpc';
export declare class ReferenceAdapter {
    private readonly provider;
    private readonly documents;
    constructor(provider: theia.ReferenceProvider, documents: DocumentsExtImpl);
    provideReferences(resource: URI, position: Position, context: ReferenceContext, token: theia.CancellationToken): Promise<Location[] | undefined>;
}
//# sourceMappingURL=reference.d.ts.map