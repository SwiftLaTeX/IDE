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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var file_uri_1 = require("@theia/core/lib/node/file-uri");
var file_change_collection_1 = require("./file-change-collection");
var filesystem_watcher_protocol_1 = require("../common/filesystem-watcher-protocol");
describe('FileChangeCollection', function () {
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.ADDED, filesystem_watcher_protocol_1.FileChangeType.ADDED],
        expected: filesystem_watcher_protocol_1.FileChangeType.ADDED
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.ADDED, filesystem_watcher_protocol_1.FileChangeType.UPDATED],
        expected: filesystem_watcher_protocol_1.FileChangeType.ADDED
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.ADDED, filesystem_watcher_protocol_1.FileChangeType.DELETED],
        expected: [filesystem_watcher_protocol_1.FileChangeType.ADDED, filesystem_watcher_protocol_1.FileChangeType.DELETED]
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.UPDATED, filesystem_watcher_protocol_1.FileChangeType.ADDED],
        expected: filesystem_watcher_protocol_1.FileChangeType.UPDATED
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.UPDATED, filesystem_watcher_protocol_1.FileChangeType.UPDATED],
        expected: filesystem_watcher_protocol_1.FileChangeType.UPDATED
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.UPDATED, filesystem_watcher_protocol_1.FileChangeType.DELETED],
        expected: filesystem_watcher_protocol_1.FileChangeType.DELETED
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.DELETED, filesystem_watcher_protocol_1.FileChangeType.ADDED],
        expected: filesystem_watcher_protocol_1.FileChangeType.UPDATED
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.DELETED, filesystem_watcher_protocol_1.FileChangeType.UPDATED],
        expected: filesystem_watcher_protocol_1.FileChangeType.UPDATED
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.DELETED, filesystem_watcher_protocol_1.FileChangeType.DELETED],
        expected: filesystem_watcher_protocol_1.FileChangeType.DELETED
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.ADDED, filesystem_watcher_protocol_1.FileChangeType.UPDATED, filesystem_watcher_protocol_1.FileChangeType.DELETED],
        expected: [filesystem_watcher_protocol_1.FileChangeType.ADDED, filesystem_watcher_protocol_1.FileChangeType.DELETED]
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.ADDED, filesystem_watcher_protocol_1.FileChangeType.UPDATED, filesystem_watcher_protocol_1.FileChangeType.DELETED, filesystem_watcher_protocol_1.FileChangeType.ADDED],
        expected: [filesystem_watcher_protocol_1.FileChangeType.ADDED]
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.ADDED, filesystem_watcher_protocol_1.FileChangeType.UPDATED, filesystem_watcher_protocol_1.FileChangeType.DELETED, filesystem_watcher_protocol_1.FileChangeType.UPDATED],
        expected: [filesystem_watcher_protocol_1.FileChangeType.ADDED]
    });
    assertChanges({
        changes: [filesystem_watcher_protocol_1.FileChangeType.ADDED, filesystem_watcher_protocol_1.FileChangeType.UPDATED, filesystem_watcher_protocol_1.FileChangeType.DELETED, filesystem_watcher_protocol_1.FileChangeType.DELETED],
        expected: [filesystem_watcher_protocol_1.FileChangeType.ADDED, filesystem_watcher_protocol_1.FileChangeType.DELETED]
    });
    function assertChanges(_a) {
        var changes = _a.changes, expected = _a.expected;
        var expectedTypes = Array.isArray(expected) ? expected : [expected];
        var expectation = expectedTypes.map(function (type) { return filesystem_watcher_protocol_1.FileChangeType[type]; }).join(' + ');
        it(changes.map(function (type) { return filesystem_watcher_protocol_1.FileChangeType[type]; }).join(' + ') + " => " + expectation, function () {
            var e_1, _a;
            var collection = new file_change_collection_1.FileChangeCollection();
            var uri = file_uri_1.FileUri.create('/root/foo/bar.txt').toString();
            try {
                for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                    var type = changes_1_1.value;
                    collection.push({ uri: uri, type: type });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var actual = collection.values().map(function (_a) {
                var type = _a.type;
                return filesystem_watcher_protocol_1.FileChangeType[type];
            }).join(' + ');
            assert.equal(expectation, actual);
        });
    }
});
//# sourceMappingURL=file-change-collection.spec.js.map