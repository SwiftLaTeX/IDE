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
import { ContextKeyService, ContextKey } from '@theia/core/lib/browser/context-key-service';
export declare class SearchInWorkspaceContextKeyService {
    protected readonly contextKeyService: ContextKeyService;
    protected _searchViewletVisible: ContextKey<boolean>;
    get searchViewletVisible(): ContextKey<boolean>;
    protected _searchViewletFocus: ContextKey<boolean>;
    get searchViewletFocus(): ContextKey<boolean>;
    protected searchInputBoxFocus: ContextKey<boolean>;
    setSearchInputBoxFocus(searchInputBoxFocus: boolean): void;
    protected replaceInputBoxFocus: ContextKey<boolean>;
    setReplaceInputBoxFocus(replaceInputBoxFocus: boolean): void;
    protected patternIncludesInputBoxFocus: ContextKey<boolean>;
    setPatternIncludesInputBoxFocus(patternIncludesInputBoxFocus: boolean): void;
    protected patternExcludesInputBoxFocus: ContextKey<boolean>;
    setPatternExcludesInputBoxFocus(patternExcludesInputBoxFocus: boolean): void;
    protected inputBoxFocus: ContextKey<boolean>;
    protected updateInputBoxFocus(): void;
    protected _replaceActive: ContextKey<boolean>;
    get replaceActive(): ContextKey<boolean>;
    protected _hasSearchResult: ContextKey<boolean>;
    get hasSearchResult(): ContextKey<boolean>;
    protected init(): void;
}
//# sourceMappingURL=search-in-workspace-context-key-service.d.ts.map