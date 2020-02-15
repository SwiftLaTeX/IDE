/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { StackElement, IGrammar } from 'vscode-textmate';
export declare class TokenizerState implements monaco.languages.IState {
    readonly ruleStack: StackElement;
    constructor(ruleStack: StackElement);
    clone(): monaco.languages.IState;
    equals(other: monaco.languages.IState): boolean;
}
/**
 * Options for the TextMate tokenizer.
 */
export interface TokenizerOption {
    /**
     * Maximum line length that will be handled by the TextMate tokenizer. If the length of the actual line exceeds this
     * limit, the tokenizer terminates and the tokenization of any subsequent lines might be broken.
     *
     * If the `lineLimit` is not defined, it means, there are no line length limits. Otherwise, it must be a positive
     * integer or an error will be thrown.
     */
    readonly lineLimit?: number;
}
export declare namespace TokenizerOption {
    /**
     * The default TextMate tokenizer option.
     */
    const DEFAULT: TokenizerOption;
}
export declare function createTextmateTokenizer(grammar: IGrammar, options: TokenizerOption): monaco.languages.EncodedTokensProvider & monaco.languages.TokensProvider;
//# sourceMappingURL=textmate-tokenizer.d.ts.map