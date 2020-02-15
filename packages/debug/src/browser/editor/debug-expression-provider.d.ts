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
/// <reference types="@typefox/monaco-editor-core/monaco" />
/**
 * TODO: introduce a new request to LSP to look up an expression range: https://github.com/Microsoft/language-server-protocol/issues/462
 */
export declare class DebugExpressionProvider {
    get(model: monaco.editor.IModel, selection: monaco.IRange): string;
    protected getExactExpressionStartAndEnd(lineContent: string, looseStart: number, looseEnd: number): {
        start: number;
        end: number;
    };
}
//# sourceMappingURL=debug-expression-provider.d.ts.map