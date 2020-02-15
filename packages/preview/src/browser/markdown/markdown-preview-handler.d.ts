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
import URI from '@theia/core/lib/common/uri';
import { OpenerService } from '@theia/core/lib/browser';
import * as markdownit from 'markdown-it';
import { PreviewHandler, RenderContentParams } from '../preview-handler';
import { PreviewLinkNormalizer } from '../preview-link-normalizer';
export declare class MarkdownPreviewHandler implements PreviewHandler {
    readonly iconClass: string;
    readonly contentClass: string;
    protected readonly openerService: OpenerService;
    protected readonly linkNormalizer: PreviewLinkNormalizer;
    canHandle(uri: URI): number;
    renderContent(params: RenderContentParams): HTMLElement;
    protected addLinkClickedListener(contentElement: HTMLElement, params: RenderContentParams): void;
    protected findLink(element: HTMLElement, container: HTMLElement): string | undefined;
    protected openLink(uri: URI, originUri: URI): Promise<void>;
    protected resolveUri(link: string, uri: URI, preview: boolean): URI;
    protected revealFragment(contentElement: HTMLElement, fragment: string): void;
    findElementForFragment(content: HTMLElement, link: string): HTMLElement | undefined;
    findElementForSourceLine(content: HTMLElement, sourceLine: number): HTMLElement | undefined;
    getSourceLineForOffset(content: HTMLElement, offset: number): number | undefined;
    /**
     * returns two significant line elements for the given offset.
     */
    protected getLineElementsAtOffset(content: HTMLElement, offset: number): HTMLElement[];
    protected getLineNumberFromAttribute(element: HTMLElement): number | undefined;
    protected engine: markdownit | undefined;
    protected getEngine(): markdownit;
}
//# sourceMappingURL=markdown-preview-handler.d.ts.map