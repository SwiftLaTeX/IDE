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
/// <reference types="@typefox/monaco-editor-core/monaco" />
import { MessageType } from '@theia/core/lib/common/message-service-protocol';
import { QuickOpenService, QuickOpenOptions, QuickOpenItem, QuickOpenGroupItem, KeybindingRegistry } from '@theia/core/lib/browser';
import { QuickOpenModel, QuickOpenActionProvider, QuickOpenAction } from '@theia/core/lib/common/quick-open-model';
import { ContextKey } from '@theia/core/lib/browser/context-key-service';
import { MonacoContextKeyService } from './monaco-context-key-service';
import { QuickOpenHideReason } from '@theia/core/lib/common/quick-open-service';
export interface MonacoQuickOpenControllerOpts extends monaco.quickOpen.IQuickOpenControllerOpts {
    valueSelection?: Readonly<[number, number]>;
    enabled?: boolean;
    readonly prefix?: string;
    readonly password?: boolean;
    readonly ignoreFocusOut?: boolean;
    onType?(lookFor: string, acceptor: (model: monaco.quickOpen.QuickOpenModel) => void): void;
    onClose?(canceled: boolean): void;
}
export declare class MonacoQuickOpenService extends QuickOpenService {
    protected readonly container: HTMLElement;
    protected _widget: monaco.quickOpen.QuickOpenWidget | undefined;
    protected opts: MonacoQuickOpenControllerOpts | undefined;
    protected previousActiveElement: Element | undefined;
    protected _widgetNode: HTMLElement;
    protected readonly contextKeyService: MonacoContextKeyService;
    protected readonly keybindingRegistry: KeybindingRegistry;
    protected inQuickOpenKey: ContextKey<boolean>;
    constructor();
    protected init(): void;
    open(model: QuickOpenModel, options?: QuickOpenOptions): void;
    hide(reason?: QuickOpenHideReason): void;
    showDecoration(type: MessageType): void;
    hideDecoration(): void;
    refresh(): void;
    internalOpen(opts: MonacoQuickOpenControllerOpts): void;
    setValueSelected(value: string | undefined, selectLocation: Readonly<[number, number]> | undefined): void;
    setEnabled(isEnabled: boolean | undefined): void;
    setValue(value: string | undefined): void;
    setPlaceHolder(placeHolder: string): void;
    setPassword(isPassword: boolean): void;
    showInputDecoration(decoration: monaco.MarkerSeverity): void;
    clearInputDecoration(): void;
    protected get widget(): monaco.quickOpen.QuickOpenWidget;
    get widgetNode(): HTMLElement;
    protected attachQuickOpenStyler(): void;
    protected onClose(cancelled: boolean): void;
    protected onType(lookFor: string): Promise<void>;
}
export declare class MonacoQuickOpenControllerOptsImpl implements MonacoQuickOpenControllerOpts {
    protected readonly model: QuickOpenModel;
    protected readonly keybindingService: KeybindingRegistry;
    protected readonly options: QuickOpenOptions.Resolved;
    readonly password?: boolean;
    constructor(model: QuickOpenModel, keybindingService: KeybindingRegistry, options?: QuickOpenOptions);
    get enabled(): boolean;
    get prefix(): string;
    get ignoreFocusOut(): boolean;
    get inputAriaLabel(): string;
    get valueSelection(): Readonly<[number, number]>;
    onClose(cancelled: boolean): void;
    private toOpenModel;
    getModel(lookFor: string): monaco.quickOpen.QuickOpenModel;
    onType(lookFor: string, acceptor: (model: monaco.quickOpen.QuickOpenModel) => void): void;
    protected createEntry(item: QuickOpenItem, lookFor: string): monaco.quickOpen.QuickOpenEntry | undefined;
    protected matchesFuzzy(lookFor: string, value: string | undefined, options?: QuickOpenOptions.FuzzyMatchOptions | boolean): monaco.quickOpen.IHighlight[] | undefined;
    getAutoFocus(lookFor: string): monaco.quickOpen.IAutoFocus;
}
export declare class QuickOpenEntry extends monaco.quickOpen.QuickOpenEntry {
    readonly item: QuickOpenItem;
    protected readonly keybindingService: KeybindingRegistry;
    constructor(item: QuickOpenItem, keybindingService: KeybindingRegistry);
    getLabel(): string | undefined;
    getAriaLabel(): string | undefined;
    getDetail(): string | undefined;
    getDescription(): string | undefined;
    isHidden(): boolean;
    getResource(): monaco.Uri | undefined;
    getIcon(): string | undefined;
    getKeybinding(): monaco.keybindings.ResolvedKeybinding | undefined;
    run(mode: monaco.quickOpen.Mode): boolean;
}
export declare class QuickOpenEntryGroup extends monaco.quickOpen.QuickOpenEntryGroup {
    readonly item: QuickOpenGroupItem;
    protected readonly keybindingService: KeybindingRegistry;
    constructor(item: QuickOpenGroupItem, keybindingService: KeybindingRegistry);
    getGroupLabel(): string;
    showBorder(): boolean;
    getKeybinding(): monaco.keybindings.ResolvedKeybinding | undefined;
}
export declare class MonacoQuickOpenAction implements monaco.quickOpen.IAction {
    readonly action: QuickOpenAction;
    constructor(action: QuickOpenAction);
    get id(): string;
    get label(): string;
    get tooltip(): string;
    get class(): string | undefined;
    get enabled(): boolean;
    get checked(): boolean;
    get radio(): boolean;
    run(entry: QuickOpenEntry | QuickOpenEntryGroup): PromiseLike<any>;
    dispose(): void;
}
export declare class MonacoQuickOpenActionProvider implements monaco.quickOpen.IActionProvider {
    readonly provider: QuickOpenActionProvider;
    constructor(provider: QuickOpenActionProvider);
    hasActions(element: any, entry: QuickOpenEntry | QuickOpenEntryGroup): boolean;
    getActions(element: any, entry: QuickOpenEntry | QuickOpenEntryGroup): ReadonlyArray<monaco.quickOpen.IAction>;
}
//# sourceMappingURL=monaco-quick-open-service.d.ts.map