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
import { MenuContribution, MenuModelRegistry } from '@theia/core/lib/common';
import { MonacoCommandRegistry } from './monaco-command-registry';
export interface MonacoActionGroup {
    id: string;
    actions: string[];
}
export declare namespace MonacoMenus {
    const SELECTION: string[];
    const SELECTION_GROUP: MonacoActionGroup;
    const SELECTION_MOVE_GROUP: MonacoActionGroup;
    const SELECTION_CURSOR_GROUP: MonacoActionGroup;
    const SELECTION_GROUPS: MonacoActionGroup[];
}
export declare class MonacoEditorMenuContribution implements MenuContribution {
    protected readonly commands: MonacoCommandRegistry;
    constructor(commands: MonacoCommandRegistry);
    registerMenus(registry: MenuModelRegistry): void;
}
//# sourceMappingURL=monaco-menu.d.ts.map