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
import URI from './uri';
import { Keybinding } from './keybinding';
import { Disposable } from './disposable';
export interface Highlight {
    start: number;
    end: number;
}
export declare enum QuickOpenMode {
    PREVIEW = 0,
    OPEN = 1,
    OPEN_IN_BACKGROUND = 2
}
export interface QuickOpenItemOptions {
    tooltip?: string;
    label?: string;
    labelHighlights?: Highlight[];
    description?: string;
    descriptionHighlights?: Highlight[];
    detail?: string;
    detailHighlights?: Highlight[];
    hidden?: boolean;
    uri?: URI;
    iconClass?: string;
    keybinding?: Keybinding;
    run?(mode: QuickOpenMode): boolean;
}
export interface QuickOpenGroupItemOptions extends QuickOpenItemOptions {
    groupLabel?: string;
    showBorder?: boolean;
}
export declare class QuickOpenItem<T extends QuickOpenItemOptions = QuickOpenItemOptions> {
    protected options: T;
    constructor(options?: T);
    getTooltip(): string | undefined;
    getLabel(): string | undefined;
    getLabelHighlights(): Highlight[];
    getDescription(): string | undefined;
    getDescriptionHighlights(): Highlight[] | undefined;
    getDetail(): string | undefined;
    getDetailHighlights(): Highlight[] | undefined;
    isHidden(): boolean;
    getUri(): URI | undefined;
    getIconClass(): string | undefined;
    getKeybinding(): Keybinding | undefined;
    run(mode: QuickOpenMode): boolean;
}
export declare class QuickOpenGroupItem<T extends QuickOpenGroupItemOptions = QuickOpenGroupItemOptions> extends QuickOpenItem<T> {
    getGroupLabel(): string | undefined;
    showBorder(): boolean;
}
export interface QuickOpenModel {
    onType(lookFor: string, acceptor: (items: QuickOpenItem[], actionProvider?: QuickOpenActionProvider) => void): void;
}
export interface QuickOpenActionProvider {
    hasActions(item: QuickOpenItem): boolean;
    getActions(item: QuickOpenItem): ReadonlyArray<QuickOpenAction>;
}
export interface QuickOpenActionOptions {
    id: string;
    label?: string;
    tooltip?: string;
    class?: string | undefined;
    enabled?: boolean;
    checked?: boolean;
    radio?: boolean;
}
export interface QuickOpenAction extends QuickOpenActionOptions, Disposable {
    run(item?: QuickOpenItem): PromiseLike<void>;
}
export declare enum QuickTitleButtonSide {
    LEFT = 0,
    RIGHT = 1
}
export interface QuickTitleButton {
    icon: string;
    iconClass?: string;
    tooltip?: string | undefined;
    side: QuickTitleButtonSide;
}
//# sourceMappingURL=quick-open-model.d.ts.map