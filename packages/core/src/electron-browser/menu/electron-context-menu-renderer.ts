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

/* eslint-disable @typescript-eslint/no-explicit-any */

import { inject, injectable } from 'inversify';
import { MenuPath } from '../../common';
import { ContextMenuRenderer, Anchor, RenderContextMenuOptions } from '../../browser';
import { ElectronMainMenuFactory } from './electron-main-menu-factory';
import { ContextMenuContext } from '../../browser/menu/context-menu-context';

@injectable()
export class ElectronContextMenuRenderer implements ContextMenuRenderer {

    @inject(ContextMenuContext)
    protected readonly context: ContextMenuContext;

    constructor(@inject(ElectronMainMenuFactory) private menuFactory: ElectronMainMenuFactory) {
    }

    render(arg: MenuPath | RenderContextMenuOptions, arg2?: Anchor, arg3?: () => void): void {
        const { menuPath, args, onHide } = RenderContextMenuOptions.resolve(arg, arg2, arg3);
        const menu = this.menuFactory.createContextMenu(menuPath, args);
        menu.popup({});
        // native context menu stops the event loop, so there is no keyboard events
        this.context.resetAltPressed();
        if (onHide) {
            menu.once('menu-will-close', () => onHide());
        }
    }

}
