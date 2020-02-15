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
import { EditorManager, TextEditor, EditorDecoration, EditorDecorationStyle } from '@theia/editor/lib/browser';
import { GitFileBlame, Commit } from '../../common';
import { Disposable, DisposableCollection } from '@theia/core';
import * as moment from 'moment';
import { HoverProvider, TextDocumentPositionParams, Hover, CancellationToken, Languages } from '@theia/languages/lib/browser';
export declare class BlameDecorator implements HoverProvider {
    protected readonly editorManager: EditorManager;
    protected readonly languages: Languages;
    constructor();
    protected registerHoverProvider(uri: string): Disposable;
    protected emptyHover: Hover;
    provideHover(params: TextDocumentPositionParams, token: CancellationToken): Promise<Hover>;
    protected appliedDecorations: Map<string, AppliedBlameDecorations>;
    decorate(blame: GitFileBlame, editor: TextEditor, highlightLine: number): Disposable;
    protected getShaForLine(blame: GitFileBlame, line: number): string | undefined;
    protected toDecorations(blame: GitFileBlame, highlightLine: number): BlameDecorations;
    protected formatContentLine(commit: Commit, commitTime: moment.Moment): string;
    protected now: moment.Moment;
    protected getHeatColor(commitTime: moment.Moment): string;
}
export declare namespace BlameDecorator {
    const maxWidth = 50;
    const defaultGutterStyles: CSSStyleDeclaration;
    const continuationStyle: EditorDecorationStyle;
    const highlightStyle: EditorDecorationStyle;
}
export interface BlameDecorations {
    editorDecorations: EditorDecoration[];
    styles: EditorDecorationStyle[];
}
export declare class AppliedBlameDecorations implements Disposable {
    readonly toDispose: DisposableCollection;
    readonly previousStyles: DisposableCollection;
    readonly previousDecorations: string[];
    blame: GitFileBlame | undefined;
    highlightedSha: string | undefined;
    dispose(): void;
}
//# sourceMappingURL=blame-decorator.d.ts.map