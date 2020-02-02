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
export class BibTeXContribution implements LanguageGrammarDefinitionContribution {
    readonly BibTEX_LANGUAGE_ID = 'bibtex';

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
            id: this.BibTEX_LANGUAGE_ID,
            'aliases': [
                'BibTeX',
                'bibtex'
            ],
            'extensions': [
                '.bib'
            ],
            'mimetypes': [
                'text/bibtex'
            ]
        });

        monaco.languages.setLanguageConfiguration(this.BibTEX_LANGUAGE_ID, this.config);

        const biblatexGrammar = require('../../data/Bibtex.tmLanguage.json');
        registry.registerTextmateGrammarScope('text.bibtex', {
            async getGrammarDefinition(): Promise<GrammarDefinition> {
                return {
                    format: 'json',
                    content: biblatexGrammar
                };
            }
        });

        registry.mapLanguageIdToTextmateGrammar(this.BibTEX_LANGUAGE_ID, 'text.bibtex');
    }
}
