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

import { LanguageGrammarDefinitionContribution, TextmateRegistry, GrammarDefinition } from '@theia/monaco/lib/browser/textmate';
import { injectable } from 'inversify';

@injectable()
export class TeXContribution implements LanguageGrammarDefinitionContribution {
    readonly TEX_LANGUAGE_ID = 'latex';

    readonly config: monaco.languages.LanguageConfiguration = {
        'comments': {
            'lineComment': '%'
        },
        'brackets': [
            ['{', '}'],
            ['[', ']'],
            ['(', ')']
        ],
        'autoClosingPairs': [
            { 'open': '{', 'close': '}', 'notIn': ['string'] },
            { 'open': '[', 'close': ']', 'notIn': ['string'] },
            { 'open': '(', 'close': ')', 'notIn': ['string'] },
            { 'open': '`', 'close': '`', 'notIn': ['string', 'comment'] },
            { 'open': '"', 'close': '"', 'notIn': ['string', 'comment'] },
            { 'open': '$', 'close': '$', 'notIn': ['string', 'comment'] }
        ],
        'surroundingPairs': [
            { 'open': '{', 'close': '}' },
            { 'open': '[', 'close': ']' },
            { 'open': '(', 'close': ')' },
            { 'open': '`', 'close': '`' },
            { 'open': '"', 'close': '"' },
            { 'open': '$', 'close': '$' }
        ]

    };

    registerTextmateLanguage(registry: TextmateRegistry): void {
        monaco.languages.register({
            id: this.TEX_LANGUAGE_ID,
            'aliases': [
                'LaTeX',
                'latex'
            ],
            'extensions': [
                '.tex'
            ],
            'mimetypes': [
                'text/latex'
            ]
        });

        monaco.languages.setLanguageConfiguration(this.TEX_LANGUAGE_ID, this.config);

        const latexGrammar = require('../../data/LaTeX.tmLanguage.json');
        registry.registerTextmateGrammarScope('text.tex.latex', {
            async getGrammarDefinition(): Promise<GrammarDefinition> {
                return {
                    format: 'json',
                    content: latexGrammar
                };
            }
        });

        registry.mapLanguageIdToTextmateGrammar(this.TEX_LANGUAGE_ID, 'text.tex.latex');
    }
}
