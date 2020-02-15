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
import URI from '../common/uri';
import { ContributionProvider } from '../common/contribution-provider';
import { Event, Emitter } from '../common';
import { FrontendApplicationContribution } from './frontend-application';
/**
 * Internal folder icon class for the default (File Icons) theme.
 *
 * @deprecated Use `LabelProvider.folderIcon` to get a folder icon class for the current icon theme.
 */
export declare const FOLDER_ICON = "fa fa-folder";
/**
 * Internal file icon class for the default (File Icons) theme.
 *
 * @deprecated Use `LabelProvider.fileIcon` to get a file icon class for the current icon theme.
 */
export declare const FILE_ICON = "fa fa-file";
export declare const LabelProviderContribution: unique symbol;
export interface LabelProviderContribution {
    /**
     * whether this contribution can handle the given element and with what priority.
     * All contributions are ordered by the returned number if greater than zero. The highest number wins.
     * If two or more contributions return the same positive number one of those will be used. It is undefined which one.
     */
    canHandle(element: object): number;
    /**
     * returns an icon class for the given element.
     */
    getIcon?(element: object): string | undefined;
    /**
     * returns a short name for the given element.
     */
    getName?(element: object): string | undefined;
    /**
     * returns a long name for the given element.
     */
    getLongName?(element: object): string | undefined;
    /**
     * Emit when something has changed that may result in this label provider returning a different
     * value for one or more properties (name, icon etc).
     */
    readonly onDidChange?: Event<DidChangeLabelEvent>;
    /**
     * Check whether the given element is affected by the given change event.
     * Contributions delegating to the label provider can use this hook
     * to perfrom a recursive check.
     */
    affects?(element: object, event: DidChangeLabelEvent): boolean;
}
export interface DidChangeLabelEvent {
    affects(element: object): boolean;
}
export interface URIIconReference {
    kind: 'uriIconReference';
    id: 'file' | 'folder';
    uri?: URI;
}
export declare namespace URIIconReference {
    function is(element: any | undefined): element is URIIconReference;
    function create(id: URIIconReference['id'], uri?: URI): URIIconReference;
}
export declare class DefaultUriLabelProviderContribution implements LabelProviderContribution {
    canHandle(element: object): number;
    getIcon(element: URI | URIIconReference): string;
    get defaultFolderIcon(): string;
    get defaultFileIcon(): string;
    protected getFileIcon(uri: URI): string | undefined;
    getName(element: URI | URIIconReference): string | undefined;
    getLongName(element: URI | URIIconReference): string | undefined;
    protected getUri(element: URI | URIIconReference): URI | undefined;
}
export declare class LabelProvider implements FrontendApplicationContribution {
    protected readonly onDidChangeEmitter: Emitter<DidChangeLabelEvent>;
    protected readonly contributionProvider: ContributionProvider<LabelProviderContribution>;
    /**
     * Start listening to contributions.
     *
     * Don't call this method directly!
     * It's called by the frontend application during initialization.
     */
    initialize(): void;
    protected affects(element: object, event: DidChangeLabelEvent): boolean;
    get onDidChange(): Event<DidChangeLabelEvent>;
    /**
     * Return a default file icon for the current icon theme.
     */
    get fileIcon(): string;
    /**
     * Return a default folder icon for the current icon theme.
     */
    get folderIcon(): string;
    getIcon(element: object): string;
    getName(element: object): string;
    getLongName(element: object): string;
    protected findContribution(element: object): LabelProviderContribution[];
}
//# sourceMappingURL=label-provider.d.ts.map