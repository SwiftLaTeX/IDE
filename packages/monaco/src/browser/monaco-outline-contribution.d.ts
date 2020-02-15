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
/// <reference types="@typefox/monaco-editor-core/monaco" />
import DocumentSymbol = monaco.languages.DocumentSymbol;
import { FrontendApplicationContribution, FrontendApplication, TreeNode } from '@theia/core/lib/browser';
import { Range, EditorManager, EditorOpenerOptions } from '@theia/editor/lib/browser';
import CancellationTokenSource = monaco.CancellationTokenSource;
import CancellationToken = monaco.CancellationToken;
import { DisposableCollection } from '@theia/core';
import { OutlineViewService } from '@theia/outline-view/lib/browser/outline-view-service';
import { OutlineSymbolInformationNode } from '@theia/outline-view/lib/browser/outline-view-widget';
import URI from '@theia/core/lib/common/uri';
export declare class MonacoOutlineContribution implements FrontendApplicationContribution {
    protected readonly toDisposeOnClose: DisposableCollection;
    protected readonly toDisposeOnEditor: DisposableCollection;
    protected roots: MonacoOutlineSymbolInformationNode[] | undefined;
    protected canUpdateOutline: boolean;
    protected readonly outlineViewService: OutlineViewService;
    protected readonly editorManager: EditorManager;
    onStart(app: FrontendApplication): void;
    protected selectInEditor(node: MonacoOutlineSymbolInformationNode, options?: EditorOpenerOptions): Promise<void>;
    protected handleCurrentEditorChanged(): void;
    protected tokenSource: CancellationTokenSource;
    protected updateOutline(editorSelection?: Range): Promise<void>;
    protected createRoots(model: monaco.editor.IModel, token: CancellationToken, editorSelection?: Range): Promise<MonacoOutlineSymbolInformationNode[]>;
    protected createNodes(uri: URI, symbols: DocumentSymbol[]): MonacoOutlineSymbolInformationNode[];
    /**
     * Sets the selection on the sub-trees based on the optional editor selection.
     * Select the narrowest node that is strictly contains the editor selection.
     */
    protected applySelection(roots: MonacoOutlineSymbolInformationNode[], editorSelection?: Range): boolean;
    /**
     * Returns `true` if `candidate` is strictly contained inside `parent`
     *
     * If the argument is a `DocumentSymbol`, then `getFullRange` will be used to retrieve the range of the underlying symbol.
     */
    protected parentContains(candidate: DocumentSymbol | Range, parent: DocumentSymbol | Range, rangeBased: boolean): boolean;
    /**
     * `monaco` to LSP `Range` converter. Converts the `1-based` location indices into `0-based` ones.
     */
    protected asRange(range: monaco.IRange): Range;
    /**
     * Returns with a range enclosing this symbol not including leading/trailing whitespace but everything else like comments.
     * This information is typically used to determine if the clients cursor is inside the symbol to reveal in the symbol in the UI.
     * This allows to obtain the range including the associated comments.
     *
     * See: [`DocumentSymbol#range`](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) for more details.
     */
    protected getFullRange(documentSymbol: DocumentSymbol): Range;
    /**
     * The range that should be selected and revealed when this symbol is being picked, e.g the name of a function. Must be contained by the `getSelectionRange`.
     *
     * See: [`DocumentSymbol#selectionRange`](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) for more details.
     */
    protected getNameRange(documentSymbol: DocumentSymbol): Range;
    protected createNode(uri: URI, symbol: DocumentSymbol, ids: Map<string, number>, parent?: MonacoOutlineSymbolInformationNode): MonacoOutlineSymbolInformationNode;
    protected getName(symbol: DocumentSymbol): string;
    protected getDetail(symbol: DocumentSymbol): string;
    protected createId(name: string, ids: Map<string, number>): string;
    protected shouldExpand(symbol: DocumentSymbol): boolean;
    protected orderByPosition(symbol: DocumentSymbol, symbol2: DocumentSymbol): number;
}
export declare namespace MonacoOutlineContribution {
    interface NodeAndSymbol {
        node: MonacoOutlineSymbolInformationNode;
        symbol: DocumentSymbol;
    }
}
export interface MonacoOutlineSymbolInformationNode extends OutlineSymbolInformationNode {
    uri: URI;
    range: Range;
    fullRange: Range;
    detail?: string;
    parent: MonacoOutlineSymbolInformationNode | undefined;
    children: MonacoOutlineSymbolInformationNode[];
}
export declare namespace MonacoOutlineSymbolInformationNode {
    function is(node: TreeNode): node is MonacoOutlineSymbolInformationNode;
    function insert(nodes: MonacoOutlineSymbolInformationNode[], node: MonacoOutlineSymbolInformationNode): void;
    function compare(node: MonacoOutlineSymbolInformationNode, node2: MonacoOutlineSymbolInformationNode): number;
}
//# sourceMappingURL=monaco-outline-contribution.d.ts.map