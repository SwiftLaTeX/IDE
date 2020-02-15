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
import { MenuModelRegistry } from '@theia/core/lib/common/menu';
import { ApplicationShell } from '@theia/core/lib/browser/shell';
import { KeybindingRegistry } from '@theia/core/lib/browser/keybinding';
import { Command, CommandRegistry } from '@theia/core/lib/common/command';
import { EditorAccess } from '@theia/editor/lib/browser/editor-manager';
import { AbstractViewContribution, OpenViewArguments } from '@theia/core/lib/browser/shell/view-contribution';
import { TypeHierarchyTreeWidget } from './tree/typehierarchy-tree-widget';
import { TypeHierarchyDirection } from '@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol';
export declare class TypeHierarchyContribution extends AbstractViewContribution<TypeHierarchyTreeWidget> {
    protected readonly editorAccess: EditorAccess;
    protected readonly shell: ApplicationShell;
    constructor();
    openView(args?: Partial<TypeHierarchyOpenViewArguments>): Promise<TypeHierarchyTreeWidget>;
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    /**
     * Flips the hierarchy direction in the `Type Hierarchy` view, if it is active and has a valid root.
     * Otherwise, calculates the type hierarchy based on the selection of the current editor.
     */
    protected openViewOrFlipHierarchyDirection(direction: TypeHierarchyDirection): Promise<void>;
    /**
     * Enabled if the `current` editor has the `languageId` or the `Type Hierarchy` widget is the active one.
     */
    protected isEnabled(languageId?: string | undefined): boolean;
    /**
     * Extracts the type hierarchy direction from the argument. If the direction cannot be extracted, returns with the `Children` as the default type.
     */
    protected getDirection(args?: Partial<TypeHierarchyOpenViewArguments>): TypeHierarchyDirection;
}
export interface TypeHierarchyOpenViewArguments extends OpenViewArguments {
    /**
     * The type hierarchy direction for the view argument.
     */
    readonly direction: TypeHierarchyDirection;
}
export declare namespace TypeHierarchyCommands {
    const TOGGLE_VIEW: Command;
    const OPEN_SUBTYPE: Command;
    const OPEN_SUPERTYPE: Command;
}
//# sourceMappingURL=typehierarchy-contribution.d.ts.map