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
import { QuickOpenService } from './quick-open-service';
import { MaybePromise } from '../../common/types';
import { Emitter, Event } from '../../common/event';
import { QuickTitleBar } from './quick-title-bar';
import { QuickTitleButton } from '../../common/quick-open-model';
export interface QuickInputOptions {
    /**
     * Show the progress indicator if true
     */
    busy?: boolean;
    /**
     * Allow user input
     */
    enabled?: boolean;
    /**
     * Current step count
     */
    step?: number | undefined;
    /**
     * The title of the input
     */
    title?: string | undefined;
    /**
     * Total number of steps
     */
    totalSteps?: number | undefined;
    /**
     * Buttons that are displayed on the title panel
     */
    buttons?: ReadonlyArray<QuickTitleButton>;
    /**
     * Text for when there is a problem with the current input value
     */
    validationMessage?: string | undefined;
    /**
     * The prefill value.
     */
    value?: string;
    /**
     * The text to display under the input box.
     */
    prompt?: string;
    /**
     * The place holder in the input box to guide the user what to type.
     */
    placeHolder?: string;
    /**
     * Set to `true` to show a password prompt that will not show the typed value.
     */
    password?: boolean;
    /**
     * Set to `true` to keep the input box open when focus moves to another part of the editor or to another window.
     */
    ignoreFocusOut?: boolean;
    /**
     * Selection of the prefilled [`value`](#InputBoxOptions.value). Defined as tuple of two number where the
     * first is the inclusive start index and the second the exclusive end index. When `undefined` the whole
     * word will be selected, when empty (start equals end) only the cursor will be set,
     * otherwise the defined range will be selected.
     */
    valueSelection?: [number, number];
    /**
     * An optional function that will be called to validate input and to give a hint
     * to the user.
     *
     * @param value The current value of the input box.
     * @return Return `undefined`, or the empty string when 'value' is valid.
     */
    validateInput?(value: string): MaybePromise<string | undefined>;
}
export declare class QuickInputService {
    protected readonly quickOpenService: QuickOpenService;
    protected readonly quickTitleBar: QuickTitleBar;
    open(options: QuickInputOptions): Promise<string | undefined>;
    refresh(): void;
    protected defaultPrompt: string;
    protected createPrompt(prompt?: string): string;
    readonly onDidAcceptEmitter: Emitter<void>;
    get onDidAccept(): Event<void>;
    readonly onDidChangeValueEmitter: Emitter<string>;
    get onDidChangeValue(): Event<string>;
}
//# sourceMappingURL=quick-input-service.d.ts.map