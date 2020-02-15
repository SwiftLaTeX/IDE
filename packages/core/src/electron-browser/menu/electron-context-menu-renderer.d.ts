/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { MenuPath } from '../../common';
import { ContextMenuRenderer, Anchor, RenderContextMenuOptions } from '../../browser';
import { ElectronMainMenuFactory } from './electron-main-menu-factory';
import { ContextMenuContext } from '../../browser/menu/context-menu-context';
export declare class ElectronContextMenuRenderer implements ContextMenuRenderer {
    private menuFactory;
    protected readonly context: ContextMenuContext;
    constructor(menuFactory: ElectronMainMenuFactory);
    render(arg: MenuPath | RenderContextMenuOptions, arg2?: Anchor, arg3?: () => void): void;
}
//# sourceMappingURL=electron-context-menu-renderer.d.ts.map