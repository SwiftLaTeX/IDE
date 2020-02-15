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
import { QuickOpenModel, QuickOpenHandler, QuickOpenOptions, QuickOpenItem, QuickOpenContribution, QuickOpenHandlerRegistry } from './quick-open';
import { Disposable } from '../common/disposable';
export interface QuickViewItem {
    readonly label: string;
    readonly open: () => any;
}
export declare class QuickViewService implements QuickOpenModel, QuickOpenHandler, QuickOpenContribution {
    readonly prefix: string;
    readonly description: string;
    protected readonly items: QuickOpenItem[];
    registerItem(item: QuickViewItem): Disposable;
    getModel(): QuickOpenModel;
    getOptions(): QuickOpenOptions;
    onType(_: string, acceptor: (items: QuickOpenItem[]) => void): void;
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
}
//# sourceMappingURL=quick-view-service.d.ts.map