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
import { MenuContribution, MenuModelRegistry, MenuPath } from '@theia/core';
export declare const EDITOR_CONTEXT_MENU: MenuPath;
/**
 * Editor context menu default groups should be aligned
 * with VS Code default groups: https://code.visualstudio.com/api/references/contribution-points#contributes.menus
 */
export declare namespace EditorContextMenu {
    const NAVIGATION: string[];
    const MODIFICATION: string[];
    const CUT_COPY_PASTE: string[];
    const COMMANDS: string[];
    const UNDO_REDO: string[];
}
export declare namespace EditorMainMenu {
    /**
     * The main `Go` menu item.
     */
    const GO: string[];
    /**
     * Navigation menu group in the `Go` menu.
     */
    const NAVIGATION_GROUP: string[];
}
export declare class EditorMenuContribution implements MenuContribution {
    registerMenus(registry: MenuModelRegistry): void;
}
//# sourceMappingURL=editor-menu.d.ts.map