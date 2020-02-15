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
import { Message } from '@phosphor/messaging';
import { MaybeArray } from '@theia/core/lib/common';
import { LabelProvider } from '@theia/core/lib/browser';
import { AbstractDialog, DialogProps } from '@theia/core/lib/browser';
import { FileStatNode } from '../file-tree';
import { LocationListRenderer } from '../location';
import { FileDialogModel } from './file-dialog-model';
import { FileDialogWidget } from './file-dialog-widget';
import { FileDialogTreeFiltersRenderer, FileDialogTreeFilters } from './file-dialog-tree-filters-renderer';
import URI from '@theia/core/lib/common/uri';
import { Panel } from '@phosphor/widgets';
export declare const OpenFileDialogFactory: unique symbol;
export interface OpenFileDialogFactory {
    (props: OpenFileDialogProps): OpenFileDialog;
}
export declare const SaveFileDialogFactory: unique symbol;
export interface SaveFileDialogFactory {
    (props: SaveFileDialogProps): SaveFileDialog;
}
export declare const SAVE_DIALOG_CLASS = "theia-SaveFileDialog";
export declare const NAVIGATION_PANEL_CLASS = "theia-NavigationPanel";
export declare const NAVIGATION_BACK_CLASS = "theia-NavigationBack";
export declare const NAVIGATION_FORWARD_CLASS = "theia-NavigationForward";
export declare const NAVIGATION_HOME_CLASS = "theia-NavigationHome";
export declare const NAVIGATION_LOCATION_LIST_PANEL_CLASS = "theia-LocationListPanel";
export declare const FILTERS_PANEL_CLASS = "theia-FiltersPanel";
export declare const FILTERS_LABEL_CLASS = "theia-FiltersLabel";
export declare const FILTERS_LIST_PANEL_CLASS = "theia-FiltersListPanel";
export declare const FILENAME_PANEL_CLASS = "theia-FileNamePanel";
export declare const FILENAME_LABEL_CLASS = "theia-FileNameLabel";
export declare const FILENAME_TEXTFIELD_CLASS = "theia-FileNameTextField";
export declare const CONTROL_PANEL_CLASS = "theia-ControlPanel";
export declare class FileDialogProps extends DialogProps {
    /**
     * A set of file filters that are used by the dialog. Each entry is a human readable label,
     * like "TypeScript", and an array of extensions, e.g.
     * ```ts
     * {
     * 	'Images': ['png', 'jpg']
     * 	'TypeScript': ['ts', 'tsx']
     * }
     * ```
     */
    filters?: FileDialogTreeFilters;
}
export declare class OpenFileDialogProps extends FileDialogProps {
    /**
     * A human-readable string for the accept button.
     */
    openLabel?: string;
    /**
     * Allow to select files, defaults to `true`.
     */
    canSelectFiles?: boolean;
    /**
     * Allow to select folders, defaults to `false`.
     */
    canSelectFolders?: boolean;
    /**
     * Allow to select many files or folders.
     */
    canSelectMany?: boolean;
}
export declare class SaveFileDialogProps extends FileDialogProps {
    /**
     * A human-readable string for the accept button.
     */
    saveLabel?: string;
    /**
     * A human-readable value for the input.
     */
    inputValue?: string;
}
export declare abstract class FileDialog<T> extends AbstractDialog<T> {
    readonly props: FileDialogProps;
    readonly widget: FileDialogWidget;
    protected readonly back: HTMLSpanElement;
    protected readonly forward: HTMLSpanElement;
    protected readonly home: HTMLSpanElement;
    protected readonly locationListRenderer: LocationListRenderer;
    protected readonly treeFiltersRenderer: FileDialogTreeFiltersRenderer | undefined;
    protected readonly treePanel: Panel;
    constructor(props: FileDialogProps, widget: FileDialogWidget);
    get model(): FileDialogModel;
    protected createLocationListRenderer(): LocationListRenderer;
    protected createFileTreeFiltersRenderer(): FileDialogTreeFiltersRenderer | undefined;
    protected onUpdateRequest(msg: Message): void;
    protected appendFiltersPanel(): void;
    protected onAfterAttach(msg: Message): void;
    protected abstract getAcceptButtonLabel(): string;
    protected onActivateRequest(msg: Message): void;
}
export declare class OpenFileDialog extends FileDialog<MaybeArray<FileStatNode>> {
    readonly props: OpenFileDialogProps;
    readonly widget: FileDialogWidget;
    constructor(props: OpenFileDialogProps, widget: FileDialogWidget);
    protected getAcceptButtonLabel(): string;
    protected isValid(value: MaybeArray<FileStatNode>): string;
    get value(): MaybeArray<FileStatNode>;
    protected accept(): Promise<void>;
}
export declare class SaveFileDialog extends FileDialog<URI | undefined> {
    readonly props: SaveFileDialogProps;
    readonly widget: FileDialogWidget;
    protected fileNameField: HTMLInputElement | undefined;
    protected readonly labelProvider: LabelProvider;
    constructor(props: SaveFileDialogProps, widget: FileDialogWidget);
    protected getAcceptButtonLabel(): string;
    protected onUpdateRequest(msg: Message): void;
    protected isValid(value: URI | undefined): string | boolean;
    get value(): URI | undefined;
    protected onAfterAttach(msg: Message): void;
}
//# sourceMappingURL=file-dialog.d.ts.map