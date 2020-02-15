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
import { SearchBoxDebounce, SearchBoxDebounceOptions } from '../tree/search-box-debounce';
import { BaseWidget, Message } from '../widgets/widget';
import { Emitter, Event } from '../../common/event';
import { KeyCode, Key } from '../keyboard/keys';
/**
 * Initializer properties for the search box widget.
 */
export interface SearchBoxProps extends SearchBoxDebounceOptions {
    /**
     * If `true`, the `Previous`, `Next`, and `Close` buttons will be visible. Otherwise, `false`. Defaults to `false`.
     */
    readonly showButtons?: boolean;
}
export declare namespace SearchBoxProps {
    /**
     * The default search box widget option.
     */
    const DEFAULT: SearchBoxProps;
}
/**
 * The search box widget.
 */
export declare class SearchBox extends BaseWidget {
    protected readonly props: SearchBoxProps;
    protected readonly debounce: SearchBoxDebounce;
    protected static SPECIAL_KEYS: Key[];
    protected readonly nextEmitter: Emitter<void>;
    protected readonly previousEmitter: Emitter<void>;
    protected readonly closeEmitter: Emitter<void>;
    protected readonly textChangeEmitter: Emitter<string | undefined>;
    protected readonly input: HTMLInputElement;
    constructor(props: SearchBoxProps, debounce: SearchBoxDebounce);
    get onPrevious(): Event<void>;
    get onNext(): Event<void>;
    get onClose(): Event<void>;
    get onTextChange(): Event<string | undefined>;
    get keyCodePredicate(): KeyCode.Predicate;
    protected firePrevious(): void;
    protected fireNext(): void;
    protected fireClose(): void;
    protected fireTextChange(input: string | undefined): void;
    handle(event: KeyboardEvent): void;
    protected handleArrowUp(): void;
    protected handleArrowDown(): void;
    onBeforeHide(): void;
    protected handleKey(keyCode: KeyCode): void;
    protected canHandle(keyCode: KeyCode | undefined): boolean;
    protected createContent(): {
        container: HTMLElement;
        input: HTMLInputElement;
        previous: HTMLElement | undefined;
        next: HTMLElement | undefined;
        close: HTMLElement | undefined;
    };
    protected onAfterAttach(msg: Message): void;
}
export declare namespace SearchBox {
    /**
     * CSS classes for the search box widget.
     */
    namespace Styles {
        const SEARCH_BOX = "theia-search-box";
        const SEARCH_INPUT = "theia-search-input";
        const BUTTON = "theia-search-button";
        const BUTTON_PREVIOUS = "theia-search-button-previous";
        const BUTTON_NEXT = "theia-search-button-next";
        const BUTTON_CLOSE = "theia-search-button-close";
        const NON_SELECTABLE = "theia-non-selectable";
    }
}
/**
 * Search box factory.
 */
export declare const SearchBoxFactory: unique symbol;
export interface SearchBoxFactory {
    /**
     * Creates a new search box with the given initializer properties.
     */
    (props: SearchBoxProps): SearchBox;
}
//# sourceMappingURL=search-box.d.ts.map