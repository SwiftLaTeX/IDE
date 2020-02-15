/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import URI from '../common/uri';
import Uri from 'vscode-uri';
import { ContextKeyService, ContextKey } from './context-key-service';
export declare class ResourceContextKey {
    protected readonly contextKeyService: ContextKeyService;
    protected resource: ContextKey<Uri>;
    protected resourceSchemeKey: ContextKey<string>;
    protected resourceFileName: ContextKey<string>;
    protected resourceExtname: ContextKey<string>;
    protected resourceLangId: ContextKey<string>;
    protected init(): void;
    get(): URI | undefined;
    set(resourceUri: URI | undefined): void;
    /** should be implemented by subclasses */
    protected getLanguageId(uri: URI | undefined): string | undefined;
}
//# sourceMappingURL=resource-context-key.d.ts.map