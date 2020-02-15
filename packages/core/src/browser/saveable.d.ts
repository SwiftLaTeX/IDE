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
import { Event, MaybePromise } from '../common';
import { AbstractDialog } from './dialogs';
export interface Saveable {
    readonly dirty: boolean;
    readonly onDirtyChanged: Event<void>;
    readonly autoSave: 'on' | 'off';
    save(): MaybePromise<void>;
}
export interface SaveableSource {
    readonly saveable: Saveable;
}
export declare namespace Saveable {
    function isSource(arg: any): arg is SaveableSource;
    function is(arg: any): arg is Saveable;
    function get(arg: any): Saveable | undefined;
    function getDirty(arg: any): Saveable | undefined;
    function isDirty(arg: any): boolean;
    function save(arg: any): Promise<void>;
    function apply(widget: Widget): SaveableWidget | undefined;
    function shouldSave(saveable: Saveable, widget: Widget): Promise<boolean | undefined>;
}
export interface SaveableWidget extends Widget {
    closeWithoutSaving(): void;
}
export declare namespace SaveableWidget {
    function is(widget: Widget | undefined): widget is SaveableWidget;
    function getDirty<T extends Widget>(widgets: IterableIterator<T> | ArrayLike<T>): IterableIterator<SaveableWidget & T>;
    function get<T extends Widget>(widgets: IterableIterator<T> | ArrayLike<T>, filter?: (widget: T) => boolean): IterableIterator<SaveableWidget & T>;
}
export declare function setDirty(widget: Widget, dirty: boolean): void;
export declare class ShouldSaveDialog extends AbstractDialog<boolean> {
    protected shouldSave: boolean;
    protected readonly dontSaveButton: HTMLButtonElement;
    constructor(widget: Widget);
    protected appendDontSaveButton(): HTMLButtonElement;
    protected onAfterAttach(msg: Message): void;
    get value(): boolean;
}
//# sourceMappingURL=saveable.d.ts.map