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
import { KeybindingContext } from '@theia/core/lib/browser/keybinding';
import { EditorManager } from './editor-manager';
import { EditorWidget } from './editor-widget';
export declare namespace EditorKeybindingContexts {
    /**
     * ID of a keybinding context that is enabled when the active text editor has the focus.
     */
    const editorTextFocus = "editorTextFocus";
    /**
     * ID of a keybinding context that is enabled when the active diff editor has the focus.
     */
    const diffEditorTextFocus = "diffEditorTextFocus";
    /**
     * Unique identifier of a keybinding context that is enabled if the active editor has the focus but it does not have any overlaying widgets, such as the content assist widget.
     */
    const strictEditorTextFocus = "strictEditorTextFocus";
}
export declare class EditorTextFocusContext implements KeybindingContext {
    readonly id: string;
    protected readonly editorManager: EditorManager;
    isEnabled(): boolean;
    protected getEditor(): EditorWidget | undefined;
    protected canHandle(widget: EditorWidget): boolean;
}
export declare class DiffEditorTextFocusContext extends EditorTextFocusContext {
    readonly id: string;
    protected canHandle(widget: EditorWidget): boolean;
}
/**
 * Keybinding context that is enabled when the active text editor has the focus **AND** it does not
 * have any widgets (for example, the content assist widget) overlaying the active editor.
 */
export declare class StrictEditorTextFocusContext extends EditorTextFocusContext {
    readonly id: string;
}
//# sourceMappingURL=editor-keybinding-contexts.d.ts.map