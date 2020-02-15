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
import { Emitter, Event } from '../../common/event';
import { ILogger } from '../../common/logger';
import { Deferred } from '../../common/promise-util';
import { NativeKeyboardLayout, KeyboardLayoutProvider, KeyboardLayoutChangeNotifier, KeyValidator, KeyValidationInput } from '../../common/keyboard/keyboard-layout-provider';
import { LocalStorageService } from '../storage-service';
export declare type KeyboardLayoutSource = 'navigator.keyboard' | 'user-choice' | 'pressed-keys';
export declare class BrowserKeyboardLayoutProvider implements KeyboardLayoutProvider, KeyboardLayoutChangeNotifier, KeyValidator {
    protected readonly logger: ILogger;
    protected readonly storageService: LocalStorageService;
    protected readonly initialized: Deferred<unknown>;
    protected readonly nativeLayoutChanged: Emitter<NativeKeyboardLayout>;
    get onDidChangeNativeLayout(): Event<NativeKeyboardLayout>;
    protected readonly tester: KeyboardTester;
    protected source: KeyboardLayoutSource;
    protected currentLayout: KeyboardLayoutData;
    get allLayoutData(): KeyboardLayoutData[];
    get currentLayoutData(): KeyboardLayoutData;
    get currentLayoutSource(): KeyboardLayoutSource;
    protected initialize(): Promise<void>;
    getNativeLayout(): Promise<NativeKeyboardLayout>;
    /**
     * Set user-chosen keyboard layout data.
     */
    setLayoutData(layout: KeyboardLayoutData | 'autodetect'): Promise<KeyboardLayoutData>;
    /**
     * Test all known keyboard layouts with the given combination of pressed key and
     * produced character. Matching layouts have their score increased (see class
     * KeyboardTester). If this leads to a change of the top-scoring layout, a layout
     * change event is fired.
     */
    validateKey(keyCode: KeyValidationInput): void;
    protected setCurrent(layout: KeyboardLayoutData, source: KeyboardLayoutSource): void;
    protected autodetect(): Promise<[KeyboardLayoutData, KeyboardLayoutSource]>;
    /**
     * @param layoutMap a keyboard layout map according to https://wicg.github.io/keyboard-map/
     */
    protected testLayoutMap(layoutMap: KeyboardLayoutMap): void;
    /**
     * Select a layout based on the current tester state and the operating system
     * and language detected from the browser.
     */
    protected selectLayout(): KeyboardLayoutData;
    protected saveState(): Promise<void>;
    protected loadState(): Promise<void>;
}
export interface KeyboardLayoutData {
    name: string;
    hardware: 'pc' | 'mac';
    language: string;
    raw: NativeKeyboardLayout;
}
/**
 * This is the fallback keyboard layout selected when nothing else matches.
 * It has an empty mapping, so user inputs are handled like with a standard US keyboard.
 */
export declare const DEFAULT_LAYOUT_DATA: KeyboardLayoutData;
export interface LayoutProviderState {
    tester?: KeyboardTesterState;
    source?: KeyboardLayoutSource;
    currentLayout?: string;
}
export interface KeyboardTesterState {
    scores?: {
        [id: string]: number;
    };
    topScore?: number;
    testedInputs?: {
        [key: string]: string;
    };
}
/**
 * Holds score values for all known keyboard layouts. Scores are updated
 * by comparing key codes with the corresponding character produced by
 * the user's keyboard.
 */
export declare class KeyboardTester {
    readonly candidates: KeyboardLayoutData[];
    readonly scores: number[];
    topScore: number;
    private readonly testedInputs;
    get inputCount(): number;
    constructor(candidates: KeyboardLayoutData[]);
    reset(): void;
    updateScores(input: KeyValidationInput): boolean;
    protected testCandidate(candidate: KeyboardLayoutData, input: KeyValidationInput, property: 'value' | 'withShift' | 'withAltGr' | 'withShiftAltGr'): number;
    getState(): KeyboardTesterState;
    setState(state: KeyboardTesterState): void;
}
declare type KeyboardLayoutMap = Map<string, string>;
export {};
//# sourceMappingURL=browser-keyboard-layout-provider.d.ts.map