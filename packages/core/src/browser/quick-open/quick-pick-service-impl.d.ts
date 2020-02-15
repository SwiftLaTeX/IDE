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
import { QuickOpenItem, QuickOpenItemOptions } from './quick-open-model';
import { QuickOpenService } from './quick-open-service';
import { QuickPickService, QuickPickOptions, QuickPickItem, QuickPickValue } from '../../common/quick-pick-service';
import { QuickOpenHideReason } from '../../common/quick-open-service';
import { QuickTitleBar } from './quick-title-bar';
import { Event } from '../../common/event';
export declare class QuickPickServiceImpl implements QuickPickService {
    protected readonly quickTitleBar: QuickTitleBar;
    protected readonly quickOpenService: QuickOpenService;
    private items;
    show(elements: string[], options?: QuickPickOptions): Promise<string | undefined>;
    show<T>(elements: QuickPickItem<T>[], options?: QuickPickOptions): Promise<T | undefined>;
    protected toItems(elements: (string | QuickPickItem<Object>)[], resolve: (element: Object) => void): QuickOpenItem[];
    protected toItemOptions(element: string | QuickPickValue<Object>, resolve: (element: Object) => void): QuickOpenItemOptions;
    hide(reason?: QuickOpenHideReason): void;
    private readonly onDidAcceptEmitter;
    readonly onDidAccept: Event<void>;
    private readonly onDidChangeActiveItemsEmitter;
    readonly onDidChangeActiveItems: Event<QuickOpenItem<QuickOpenItemOptions>[]>;
    private readonly onDidChangeValueEmitter;
    readonly onDidChangeValue: Event<string>;
    setItems(items: QuickOpenItem[]): void;
}
//# sourceMappingURL=quick-pick-service-impl.d.ts.map