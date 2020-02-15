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
import { DocumentLink } from '../../common/plugin-api-rpc-model';
export declare class LinkProviderAdapter {
    private readonly provider;
    private readonly documents;
    private cacheId;
    private cache;
    constructor(provider: theia.DocumentLinkProvider, documents: DocumentsExtImpl);
    provideLinks(resource: URI, token: theia.CancellationToken): Promise<DocumentLink[] | undefined>;
    resolveLink(link: DocumentLink, token: theia.CancellationToken): Promise<DocumentLink | undefined>;
}
//# sourceMappingURL=link-provider.d.ts.map