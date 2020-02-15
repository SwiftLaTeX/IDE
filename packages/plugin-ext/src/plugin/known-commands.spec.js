"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var known_commands_1 = require("../common/known-commands");
var vscode_uri_1 = require("vscode-uri");
var types_impl_1 = require("./types-impl");
var type_converters_1 = require("./type-converters");
describe('Known Command Conversions', function () {
    it('Should convert position correctly', function () {
        // given
        var commandID = 'editor.action.rename';
        var uri = vscode_uri_1.default.parse('file://my_theia_location');
        var line = 61;
        var character = 22;
        var position = new types_impl_1.Position(line, character); // vscode type position
        assert.ok(known_commands_1.KnownCommands.mapped(commandID));
        // when
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        known_commands_1.KnownCommands.map(commandID, [uri, position], function (mappedID, mappedArgs) {
            // then
            assert.strictEqual(commandID, mappedID);
            assert.strictEqual(mappedArgs.length, 2);
            assert.deepStrictEqual(uri, mappedArgs[0]);
            var expectedMonacoPosition = type_converters_1.fromPosition(position);
            assert.deepStrictEqual(expectedMonacoPosition, mappedArgs[1]);
        });
    });
});
//# sourceMappingURL=known-commands.spec.js.map