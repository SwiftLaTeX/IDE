/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { QuickOpenExt, QuickOpenMain, TransferInputBox, Plugin, TransferQuickPick, QuickInputTitleButtonHandle } from '../common/plugin-api-rpc';
import { QuickPickOptions, QuickPickItem, InputBoxOptions, InputBox, QuickPick, QuickInput } from '@theia/plugin';
import { CancellationToken } from '@theia/core/lib/common/cancellation';
import { RPCProtocol } from '../common/rpc-protocol';
import { Event } from '@theia/core/lib/common/event';
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import { QuickInputButton, ThemeIcon } from './types-impl';
import URI from 'vscode-uri';
import { QuickOpenItem, QuickOpenItemOptions } from '@theia/core/lib/browser/quick-open/quick-open-model';
export declare type Item = string | QuickPickItem;
export declare class QuickOpenExtImpl implements QuickOpenExt {
    private proxy;
    private selectItemHandler;
    private validateInputHandler;
    private createdQuickInputs;
    private currentQuickInputs;
    constructor(rpc: RPCProtocol);
    $onItemSelected(handle: number): void;
    $validateInput(input: string): PromiseLike<string | undefined> | undefined;
    showQuickPick(promiseOrItems: QuickPickItem[] | PromiseLike<QuickPickItem[]>, options?: QuickPickOptions, token?: CancellationToken): PromiseLike<QuickPickItem | undefined>;
    showQuickPick(promiseOrItems: QuickPickItem[] | PromiseLike<QuickPickItem[]>, options?: QuickPickOptions & {
        canSelectMany: true;
    }, token?: CancellationToken): PromiseLike<QuickPickItem[] | undefined>;
    showQuickPick(promiseOrItems: string[] | PromiseLike<string[]>, options?: QuickPickOptions, token?: CancellationToken): PromiseLike<string | undefined>;
    showCustomQuickPick<T extends QuickPickItem>(options: TransferQuickPick<T>): void;
    createQuickPick<T extends QuickPickItem>(plugin: Plugin): QuickPick<T>;
    showInput(options?: InputBoxOptions, token?: CancellationToken): PromiseLike<string | undefined>;
    hide(): void;
    showInputBox(options: TransferInputBox): void;
    createInputBox(plugin: Plugin): InputBox;
    $acceptOnDidAccept(createdQuickInputNumber: number): Promise<void>;
    $acceptDidChangeValue(createdQuickInputNumber: number, changedValue: string): Promise<void>;
    $acceptOnDidHide(createdQuickInputNumber: number): Promise<void>;
    $acceptOnDidTriggerButton(createdQuickInputNumber: number, btn: QuickInputTitleButtonHandle): Promise<void>;
    $acceptDidChangeActive(createdQuickInputNumber: number, changedItems: QuickOpenItem<QuickOpenItemOptions>[]): Promise<void>;
    $acceptDidChangeSelection(createdQuickInputNumber: number, selection: string): Promise<void>;
}
export declare class QuickInputExt implements QuickInput {
    readonly quickOpen: QuickOpenExtImpl;
    readonly quickOpenMain: QuickOpenMain;
    readonly plugin: Plugin;
    private _busy;
    private _enabled;
    private _ignoreFocusOut;
    private _step;
    private _title;
    private _totalSteps;
    private _value;
    protected visible: boolean;
    protected disposableCollection: DisposableCollection;
    private onDidAcceptEmitter;
    private onDidChangeValueEmitter;
    private onDidHideEmitter;
    private onDidTriggerButtonEmitter;
    constructor(quickOpen: QuickOpenExtImpl, quickOpenMain: QuickOpenMain, plugin: Plugin);
    get title(): string | undefined;
    set title(title: string | undefined);
    get step(): number | undefined;
    set step(step: number | undefined);
    get totalSteps(): number | undefined;
    set totalSteps(totalSteps: number | undefined);
    get enabled(): boolean;
    set enabled(enabled: boolean);
    get busy(): boolean;
    set busy(busy: boolean);
    get ignoreFocusOut(): boolean;
    set ignoreFocusOut(ignoreFocusOut: boolean);
    get value(): string;
    set value(value: string);
    show(): void;
    dispose(): void;
    protected update(changed: object): void;
    hide(): void;
    protected convertURL(iconPath: URI | {
        light: string | URI;
        dark: string | URI;
    } | ThemeIcon): URI | {
        light: string | URI;
        dark: string | URI;
    } | ThemeIcon;
    _fireAccept(): void;
    _fireChangedValue(changedValue: string): void;
    _fireHide(): void;
    _fireButtonTrigger(btn: QuickInputButton): void;
    get onDidHide(): Event<void>;
    get onDidAccept(): Event<void>;
    get onDidChangeValue(): Event<string>;
    get onDidTriggerButton(): Event<QuickInputButton>;
}
/**
 * Base implementation of {@link InputBox} that uses {@link QuickOpenExt}.
 * Missing functionality is going to be implemented in the scope of https://github.com/eclipse-theia/theia/issues/5109
 */
export declare class InputBoxExt extends QuickInputExt implements InputBox {
    readonly quickOpen: QuickOpenExtImpl;
    readonly quickOpenMain: QuickOpenMain;
    readonly plugin: Plugin;
    readonly quickInputIndex: number;
    /**
     * Input Box API Start
     */
    private _placeholder;
    private _password;
    private _buttons;
    private _prompt;
    private _validationMessage;
    /**
     * Input Box API End
     */
    constructor(quickOpen: QuickOpenExtImpl, quickOpenMain: QuickOpenMain, plugin: Plugin, quickInputIndex: number);
    get buttons(): ReadonlyArray<QuickInputButton>;
    set buttons(buttons: ReadonlyArray<QuickInputButton>);
    get password(): boolean;
    set password(password: boolean);
    get placeholder(): string | undefined;
    set placeholder(placeholder: string | undefined);
    get prompt(): string | undefined;
    set prompt(prompt: string | undefined);
    get validationMessage(): string | undefined;
    set validationMessage(validationMessage: string | undefined);
    show(): void;
}
/**
 * Base implementation of {@link QuickPick} that uses {@link QuickOpenExt}.
 * Missing functionality is going to be implemented in the scope of https://github.com/eclipse-theia/theia/issues/5059
 */
export declare class QuickPickExt<T extends QuickPickItem> extends QuickInputExt implements QuickPick<T> {
    readonly quickOpen: QuickOpenExtImpl;
    readonly quickOpenMain: QuickOpenMain;
    readonly plugin: Plugin;
    readonly quickInputIndex: number;
    buttons: ReadonlyArray<QuickInputButton>;
    canSelectMany: boolean;
    matchOnDescription: boolean;
    matchOnDetail: boolean;
    selectedItems: ReadonlyArray<T>;
    value: string;
    private _items;
    private _activeItems;
    private _placeholder;
    private readonly onDidChangeActiveEmitter;
    private readonly onDidChangeSelectionEmitter;
    constructor(quickOpen: QuickOpenExtImpl, quickOpenMain: QuickOpenMain, plugin: Plugin, quickInputIndex: number);
    get items(): T[];
    set items(items: T[]);
    get activeItems(): T[];
    set activeItems(activeItems: T[]);
    get placeholder(): string | undefined;
    set placeholder(placeholder: string | undefined);
    _fireChangedSelection(selections: T[]): void;
    _fireChangedActiveItem(changedItems: QuickOpenItem<QuickOpenItemOptions>[]): void;
    get onDidChangeActive(): Event<T[]>;
    get onDidChangeSelection(): Event<T[]>;
    show(): void;
}
//# sourceMappingURL=quick-open.d.ts.map