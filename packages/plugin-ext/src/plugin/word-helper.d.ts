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
/**
 * Word inside a model.
 */
export interface WordAtPosition {
    /**
     * The word.
     */
    readonly word: string;
    /**
     * The column where the word starts.
     */
    readonly startColumn: number;
    /**
     * The column where the word ends.
     */
    readonly endColumn: number;
}
export declare const USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
export declare const DEFAULT_WORD_REGEXP: RegExp;
export declare function ensureValidWordDefinition(wordDefinition?: RegExp): RegExp;
export declare function getWordAtText(column: number, wordDefinition: RegExp, text: string, textOffset: number): WordAtPosition | undefined;
//# sourceMappingURL=word-helper.d.ts.map