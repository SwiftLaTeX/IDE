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
/// <reference types="@theia/monaco/src/typings/monaco" />
import { KeybindingRegistry } from '@theia/core/lib/browser/keybinding';
import { KeyCode, KeySequence } from '@theia/core/lib/browser/keys';
export declare class MonacoResolvedKeybinding extends monaco.keybindings.ResolvedKeybinding {
    protected readonly keySequence: KeySequence;
    protected readonly parts: monaco.keybindings.ResolvedKeybindingPart[];
    constructor(keySequence: KeySequence, keybindingService: KeybindingRegistry);
    getLabel(): string | null;
    getAriaLabel(): string | null;
    getElectronAccelerator(): string | null;
    getUserSettingsLabel(): string | null;
    isWYSIWYG(): boolean;
    isChord(): boolean;
    getDispatchParts(): (string | null)[];
    private toKeybinding;
    getParts(): monaco.keybindings.ResolvedKeybindingPart[];
    static toKeybinding(keybinding: monaco.keybindings.Keybinding): string;
    static keyCode(keybinding: monaco.keybindings.SimpleKeybinding): KeyCode;
    static keySequence(keybinding: monaco.keybindings.ChordKeybinding): KeySequence;
    private static monaco2BrowserKeyCode;
}
//# sourceMappingURL=monaco-resolved-keybinding.d.ts.map