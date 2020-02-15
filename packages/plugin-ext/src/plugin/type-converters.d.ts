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
import * as theia from '@theia/plugin';
import { SymbolInformation } from 'vscode-languageserver-types';
import URI from 'vscode-uri';
import * as rpc from '../common/plugin-api-rpc';
import { DecorationOptions, EditorPosition, PickOpenItem, Plugin, Position, Selection, TaskDto, WorkspaceEditDto } from '../common/plugin-api-rpc';
import * as model from '../common/plugin-api-rpc-model';
import { LanguageSelector, RelativePattern } from '@theia/languages/lib/common/language-selector';
import { MarkdownString } from './markdown-string';
import { Item } from './quick-open';
import * as types from './types-impl';
export declare function toViewColumn(ep?: EditorPosition): theia.ViewColumn | undefined;
export declare function fromViewColumn(column?: theia.ViewColumn): number;
export declare function toWebviewPanelShowOptions(options: theia.ViewColumn | theia.WebviewPanelShowOptions): theia.WebviewPanelShowOptions;
export declare function toSelection(selection: Selection): types.Selection;
export declare function fromSelection(selection: types.Selection): Selection;
export declare function toRange(range: model.Range): types.Range;
export declare function fromRange(range: undefined): undefined;
export declare function fromRange(range: theia.Range): model.Range;
export declare function fromRange(range: theia.Range | undefined): model.Range | undefined;
export declare function fromPosition(position: types.Position): Position;
export declare function toPosition(position: Position): types.Position;
export declare function isDecorationOptionsArr(something: theia.Range[] | theia.DecorationOptions[]): something is theia.DecorationOptions[];
export declare function fromRangeOrRangeWithMessage(ranges: theia.Range[] | theia.DecorationOptions[]): DecorationOptions[];
export declare function fromManyMarkdown(markup: (theia.MarkdownString | theia.MarkedString)[]): model.MarkdownString[];
export declare function fromMarkdown(markup: theia.MarkdownString | theia.MarkedString): model.MarkdownString;
export declare function toMarkdown(value: model.MarkdownString): MarkdownString;
export declare function fromDocumentSelector(selector: theia.DocumentSelector | undefined): LanguageSelector | undefined;
export declare function fromGlobPattern(pattern: theia.GlobPattern): string | RelativePattern;
export declare function fromCompletionItemKind(kind?: types.CompletionItemKind): model.CompletionItemKind;
export declare function toCompletionItemKind(kind?: model.CompletionItemKind): types.CompletionItemKind;
export declare function fromTextEdit(edit: theia.TextEdit): model.TextEdit;
export declare function fromLanguageSelector(selector: undefined): undefined;
export declare function fromLanguageSelector(selector: theia.DocumentSelector): LanguageSelector;
export declare function convertDiagnosticToMarkerData(diagnostic: theia.Diagnostic): model.MarkerData;
export declare function fromHover(hover: theia.Hover): model.Hover;
export declare function fromLocation(location: theia.Location): model.Location;
export declare function fromDefinitionLink(definitionLink: theia.DefinitionLink): model.DefinitionLink;
export declare function fromDocumentLink(definitionLink: theia.DocumentLink): model.DocumentLink;
export declare function fromDocumentHighlightKind(kind?: theia.DocumentHighlightKind): model.DocumentHighlightKind | undefined;
export declare function fromDocumentHighlight(documentHighlight: theia.DocumentHighlight): model.DocumentHighlight;
export declare namespace ParameterInformation {
    function from(info: types.ParameterInformation): model.ParameterInformation;
    function to(info: model.ParameterInformation): types.ParameterInformation;
}
export declare namespace SignatureInformation {
    function from(info: types.SignatureInformation): model.SignatureInformation;
    function to(info: model.SignatureInformation): types.SignatureInformation;
}
export declare namespace SignatureHelp {
    function from(id: number, help: types.SignatureHelp): model.SignatureHelp;
    function to(help: model.SignatureHelp): types.SignatureHelp;
}
export declare function fromWorkspaceEdit(value: theia.WorkspaceEdit, documents?: any): WorkspaceEditDto;
export declare namespace SymbolKind {
    function fromSymbolKind(kind: theia.SymbolKind): model.SymbolKind;
    function toSymbolKind(kind: model.SymbolKind): theia.SymbolKind;
}
export declare function fromDocumentSymbol(info: theia.DocumentSymbol): model.DocumentSymbol;
export declare function toDocumentSymbol(symbol: model.DocumentSymbol): theia.DocumentSymbol;
export declare function toWorkspaceFolder(folder: model.WorkspaceFolder): theia.WorkspaceFolder;
export declare function fromTask(task: theia.Task): TaskDto | undefined;
export declare function toTask(taskDto: TaskDto): theia.Task;
export declare function fromProcessExecution(execution: theia.ProcessExecution, taskDto: TaskDto): TaskDto;
export declare function fromShellExecution(execution: theia.ShellExecution, taskDto: TaskDto): TaskDto;
export declare function getProcessExecution(taskDto: TaskDto): theia.ProcessExecution;
export declare function getShellExecution(taskDto: TaskDto): theia.ShellExecution;
export declare function getShellArgs(args: undefined | (string | theia.ShellQuotedString)[]): string[];
export declare function getShellExecutionOptions(options: theia.ShellExecutionOptions): {
    [key: string]: any;
};
export declare function fromSymbolInformation(symbolInformation: theia.SymbolInformation): SymbolInformation | undefined;
export declare function toSymbolInformation(symbolInformation: SymbolInformation): theia.SymbolInformation | undefined;
export declare function fromFoldingRange(foldingRange: theia.FoldingRange): model.FoldingRange;
export declare function fromFoldingRangeKind(kind: theia.FoldingRangeKind | undefined): model.FoldingRangeKind | undefined;
export declare function fromColor(color: types.Color): [number, number, number, number];
export declare function toColor(color: [number, number, number, number]): types.Color;
export declare function fromColorPresentation(colorPresentation: theia.ColorPresentation): model.ColorPresentation;
export declare function quickPickItemToPickOpenItem(items: Item[]): PickOpenItem[];
export declare namespace DecorationRenderOptions {
    function from(options: theia.DecorationRenderOptions): rpc.DecorationRenderOptions;
}
export declare namespace DecorationRangeBehavior {
    function from(value: types.DecorationRangeBehavior): rpc.TrackedRangeStickiness;
}
export declare namespace ThemableDecorationRenderOptions {
    function from(options: theia.ThemableDecorationRenderOptions): rpc.ThemeDecorationRenderOptions;
}
export declare namespace ThemableDecorationAttachmentRenderOptions {
    function from(options: theia.ThemableDecorationAttachmentRenderOptions): rpc.ContentDecorationRenderOptions;
}
export declare function pathOrURIToURI(value: string | URI): URI;
export declare function pluginToPluginInfo(plugin: Plugin): rpc.PluginInfo;
//# sourceMappingURL=type-converters.d.ts.map