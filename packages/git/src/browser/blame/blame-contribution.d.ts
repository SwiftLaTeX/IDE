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
import { KeybindingContribution, KeybindingRegistry } from '@theia/core/lib/browser';
import { CommandContribution, CommandRegistry, Command, MenuContribution, MenuModelRegistry, Disposable } from '@theia/core/lib/common';
import { BlameDecorator } from './blame-decorator';
import { EditorManager, EditorWidget, EditorTextFocusContext, StrictEditorTextFocusContext } from '@theia/editor/lib/browser';
import { BlameManager } from './blame-manager';
import URI from '@theia/core/lib/common/uri';
export declare namespace BlameCommands {
    const TOGGLE_GIT_ANNOTATIONS: Command;
    const CLEAR_GIT_ANNOTATIONS: Command;
}
export declare class BlameContribution implements CommandContribution, KeybindingContribution, MenuContribution {
    protected readonly editorManager: EditorManager;
    protected readonly decorator: BlameDecorator;
    protected readonly blameManager: BlameManager;
    registerCommands(commands: CommandRegistry): void;
    showsBlameAnnotations(uri: string | URI): boolean;
    protected get currentFileEditorWidget(): EditorWidget | undefined;
    protected isBlameable(uri: string | URI): boolean;
    protected appliedDecorations: Map<string, Disposable>;
    protected showBlame(editorWidget: EditorWidget): Promise<void>;
    protected clearBlame(uri: string | URI): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
}
export declare class BlameAnnotationsKeybindingContext extends EditorTextFocusContext {
    protected readonly blameContribution: BlameContribution;
    protected readonly base: StrictEditorTextFocusContext;
    id: string;
    protected canHandle(widget: EditorWidget): boolean;
}
export declare namespace BlameAnnotationsKeybindingContext {
    const showsBlameAnnotations = "showsBlameAnnotations";
}
//# sourceMappingURL=blame-contribution.d.ts.map