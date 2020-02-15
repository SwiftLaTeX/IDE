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
export declare class NavigatorContextKeyService {
    protected readonly contextKeyService: ContextKeyService;
    protected _explorerViewletVisible: ContextKey<boolean>;
    get explorerViewletVisible(): ContextKey<boolean>;
    protected _explorerViewletFocus: ContextKey<boolean>;
    /** True if Explorer view has keyboard focus. */
    get explorerViewletFocus(): ContextKey<boolean>;
    protected _filesExplorerFocus: ContextKey<boolean>;
    /** True if File Explorer section has keyboard focus. */
    get filesExplorerFocus(): ContextKey<boolean>;
    protected _explorerResourceIsFolder: ContextKey<boolean>;
    get explorerResourceIsFolder(): ContextKey<boolean>;
    protected init(): void;
}
//# sourceMappingURL=navigator-context-key-service.d.ts.map