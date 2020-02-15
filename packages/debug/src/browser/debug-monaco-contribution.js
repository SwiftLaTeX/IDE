"use strict";
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
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var jsonc_parser_1 = require("jsonc-parser");
var uri_1 = require("@theia/core/lib/common/uri");
monaco.languages.register({
    id: 'jsonc',
    'aliases': [
        'JSON with Comments'
    ],
    'filenames': [
        'launch.json'
    ]
});
monaco.languages.registerDocumentSymbolProvider('jsonc', {
    provideDocumentSymbols: function (model) {
        if (new uri_1.default(model.uri.toString()).path.base !== 'launch.json') {
            return [];
        }
        var children = [];
        var result = {
            name: 'Launch Configurations',
            detail: '',
            kind: monaco.languages.SymbolKind.Object,
            range: new monaco.Range(0, 0, 0, 0),
            selectionRange: new monaco.Range(0, 0, 0, 0),
            children: children
        };
        var name = '';
        var lastProperty = '';
        var startOffset = 0;
        var depthInObjects = 0;
        jsonc_parser_1.visit(model.getValue(), {
            onObjectProperty: function (property, _offset, _length) {
                lastProperty = property;
            },
            onLiteralValue: function (value, _offset, _length) {
                if (lastProperty === 'name') {
                    name = value;
                }
            },
            onObjectBegin: function (offset, _length) {
                depthInObjects++;
                if (depthInObjects === 2) {
                    startOffset = offset;
                }
            },
            onObjectEnd: function (offset, _length) {
                if (name && depthInObjects === 2) {
                    var range = monaco.Range.fromPositions(model.getPositionAt(startOffset), model.getPositionAt(offset));
                    children.push({
                        name: name,
                        detail: '',
                        kind: monaco.languages.SymbolKind.Object,
                        range: range,
                        selectionRange: range
                    });
                }
                depthInObjects--;
            },
        });
        return [result];
    }
});
//# sourceMappingURL=debug-monaco-contribution.js.map