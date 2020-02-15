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
import { NativeKeyboardLayout, KeyboardLayoutProvider, KeyboardLayoutChangeNotifier, KeyValidator } from '../../common/keyboard/keyboard-layout-provider';
import { Emitter, Event } from '../../common/event';
import { KeyCode, Key } from './keys';
export interface KeyboardLayout {
    /**
     * Mapping of standard US keyboard keys to the actual key codes to use.
     * See `KeyboardLayoutService.getCharacterIndex` for the index computation.
     */
    readonly key2KeyCode: KeyCode[];
    /**
     * Mapping of KeyboardEvent codes to the characters shown on the user's keyboard
     * for the respective keys.
     */
    readonly code2Character: {
        [code: string]: string;
    };
}
export declare class KeyboardLayoutService {
    protected readonly layoutProvider: KeyboardLayoutProvider;
    protected readonly layoutChangeNotifier: KeyboardLayoutChangeNotifier;
    protected readonly keyValidator?: KeyValidator;
    private currentLayout?;
    protected updateLayout(newLayout: NativeKeyboardLayout): KeyboardLayout;
    protected keyboardLayoutChanged: Emitter<KeyboardLayout>;
    get onKeyboardLayoutChanged(): Event<KeyboardLayout>;
    initialize(): Promise<void>;
    /**
     * Resolve a KeyCode of a keybinding using the current keyboard layout.
     * If no keyboard layout has been detected or the layout does not contain the
     * key used in the KeyCode, the KeyCode is returned unchanged.
     */
    resolveKeyCode(inCode: KeyCode): KeyCode;
    /**
     * Return the character shown on the user's keyboard for the given key.
     * Use this to determine UI representations of keybindings.
     */
    getKeyboardCharacter(key: Key): string;
    /**
     * Called when a KeyboardEvent is processed by the KeybindingRegistry.
     * The KeyValidator may trigger a keyboard layout change.
     */
    validateKeyCode(keyCode: KeyCode): void;
    protected transformKeyCode(inCode: KeyCode, mappedCode: KeyCode, keyNeedsShift: boolean): KeyCode | undefined;
    protected transformNativeLayout(nativeLayout: NativeKeyboardLayout): KeyboardLayout;
    protected shouldIncludeKey(code: string): boolean;
    private addKeyMapping;
    private addWindowsKeyMapping;
    protected getCharacterIndex(key: Key, shift?: boolean): number;
}
//# sourceMappingURL=keyboard-layout-service.d.ts.map