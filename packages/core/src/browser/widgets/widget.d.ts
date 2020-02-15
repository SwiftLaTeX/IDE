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
import { Widget } from '@phosphor/widgets';
import { Message } from '@phosphor/messaging';
import { Emitter, Event, Disposable, DisposableCollection, MaybePromise } from '../../common';
import { KeyCode, KeysOrKeyCodes } from '../keyboard/keys';
import PerfectScrollbar from 'perfect-scrollbar';
export * from '@phosphor/widgets';
export * from '@phosphor/messaging';
export declare const DISABLED_CLASS = "theia-mod-disabled";
export declare const EXPANSION_TOGGLE_CLASS = "theia-ExpansionToggle";
export declare const COLLAPSED_CLASS = "theia-mod-collapsed";
export declare const SELECTED_CLASS = "theia-mod-selected";
export declare const FOCUS_CLASS = "theia-mod-focus";
export declare class BaseWidget extends Widget {
    protected readonly onScrollYReachEndEmitter: Emitter<void>;
    readonly onScrollYReachEnd: Event<void>;
    protected readonly onScrollUpEmitter: Emitter<void>;
    readonly onScrollUp: Event<void>;
    protected readonly onDidChangeVisibilityEmitter: Emitter<boolean>;
    readonly onDidChangeVisibility: Event<boolean>;
    protected readonly toDispose: DisposableCollection;
    protected readonly toDisposeOnDetach: DisposableCollection;
    protected scrollBar?: PerfectScrollbar;
    protected scrollOptions?: PerfectScrollbar.Options;
    dispose(): void;
    protected onCloseRequest(msg: Message): void;
    protected onBeforeAttach(msg: Message): void;
    protected onAfterDetach(msg: Message): void;
    protected onBeforeDetach(msg: Message): void;
    protected onAfterAttach(msg: Message): void;
    protected getScrollContainer(): MaybePromise<HTMLElement>;
    protected disableScrollBarFocus(scrollContainer: HTMLElement): void;
    protected onUpdateRequest(msg: Message): void;
    protected addUpdateListener<K extends keyof HTMLElementEventMap>(element: HTMLElement, type: K, useCapture?: boolean): void;
    protected addEventListener<K extends keyof HTMLElementEventMap>(element: HTMLElement, type: K, listener: EventListenerOrEventListenerObject<K>, useCapture?: boolean): void;
    protected addKeyListener<K extends keyof HTMLElementEventMap>(element: HTMLElement, keysOrKeyCodes: KeyCode.Predicate | KeysOrKeyCodes, action: (event: KeyboardEvent) => boolean | void | Object, ...additionalEventTypes: K[]): void;
    protected addClipboardListener<K extends 'cut' | 'copy' | 'paste'>(element: HTMLElement, type: K, listener: EventListenerOrEventListenerObject<K>): void;
    setFlag(flag: Widget.Flag): void;
    clearFlag(flag: Widget.Flag): void;
}
export declare function setEnabled(element: HTMLElement, enabled: boolean): void;
export declare function createIconButton(...classNames: string[]): HTMLSpanElement;
export declare type EventListener<K extends keyof HTMLElementEventMap> = (this: HTMLElement, event: HTMLElementEventMap[K]) => any;
export interface EventListenerObject<K extends keyof HTMLElementEventMap> {
    handleEvent(evt: HTMLElementEventMap[K]): void;
}
export declare namespace EventListenerObject {
    function is<K extends keyof HTMLElementEventMap>(listener: any | undefined): listener is EventListenerObject<K>;
}
export declare type EventListenerOrEventListenerObject<K extends keyof HTMLElementEventMap> = EventListener<K> | EventListenerObject<K>;
export declare function addEventListener<K extends keyof HTMLElementEventMap>(element: HTMLElement, type: K, listener: EventListenerOrEventListenerObject<K>, useCapture?: boolean): Disposable;
export declare function addKeyListener<K extends keyof HTMLElementEventMap>(element: HTMLElement, keysOrKeyCodes: KeyCode.Predicate | KeysOrKeyCodes, action: (event: KeyboardEvent) => boolean | void | Object, ...additionalEventTypes: K[]): Disposable;
export declare function addClipboardListener<K extends 'cut' | 'copy' | 'paste'>(element: HTMLElement, type: K, listener: EventListenerOrEventListenerObject<K>): Disposable;
export declare function waitForClosed(widget: Widget): Promise<void>;
export declare function waitForRevealed(widget: Widget): Promise<void>;
//# sourceMappingURL=widget.d.ts.map