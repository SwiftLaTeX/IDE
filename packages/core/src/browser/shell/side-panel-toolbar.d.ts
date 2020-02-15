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
import { Widget, Title } from '@phosphor/widgets';
import { TabBarToolbar, TabBarToolbarRegistry, TabBarToolbarFactory } from './tab-bar-toolbar';
import { Message } from '@phosphor/messaging';
import { BaseWidget } from '../widgets';
import { Emitter } from '../../common/event';
export declare class SidePanelToolbar extends BaseWidget {
    protected readonly tabBarToolbarRegistry: TabBarToolbarRegistry;
    protected readonly tabBarToolbarFactory: TabBarToolbarFactory;
    protected readonly side: 'left' | 'right';
    protected titleContainer: HTMLElement | undefined;
    private _toolbarTitle;
    protected toolbar: TabBarToolbar | undefined;
    protected readonly onContextMenuEmitter: Emitter<MouseEvent>;
    readonly onContextMenu: import("../../common/event").Event<MouseEvent>;
    constructor(tabBarToolbarRegistry: TabBarToolbarRegistry, tabBarToolbarFactory: TabBarToolbarFactory, side: 'left' | 'right');
    protected onBeforeAttach(msg: Message): void;
    protected onAfterAttach(msg: Message): void;
    protected onBeforeDetach(msg: Message): void;
    protected onUpdateRequest(msg: Message): void;
    protected updateToolbar(): void;
    protected init(): void;
    set toolbarTitle(title: Title<Widget> | undefined);
}
//# sourceMappingURL=side-panel-toolbar.d.ts.map