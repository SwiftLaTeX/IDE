"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var inversify_1 = require("inversify");
var chai = require("chai");
var problem_manager_1 = require("./problem-manager");
var uri_1 = require("@theia/core/lib/common/uri");
var storage_service_1 = require("@theia/core/lib/browser/storage-service");
var event_1 = require("@theia/core/lib/common/event");
var logger_1 = require("@theia/core/lib/common/logger");
var mock_logger_1 = require("@theia/core/lib/common/test/mock-logger");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
disableJSDOM();
var expect = chai.expect;
var manager;
var testContainer;
before(function () {
    testContainer = new inversify_1.Container();
    testContainer.bind(logger_1.ILogger).to(mock_logger_1.MockLogger);
    testContainer.bind(storage_service_1.StorageService).to(storage_service_1.LocalStorageService).inSingletonScope();
    testContainer.bind(storage_service_1.LocalStorageService).toSelf().inSingletonScope();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    testContainer.bind(filesystem_watcher_1.FileSystemWatcher).toConstantValue({
        onFilesChanged: event_1.Event.None
    });
    testContainer.bind(problem_manager_1.ProblemManager).toSelf();
    manager = testContainer.get(problem_manager_1.ProblemManager);
    manager.setMarkers(new uri_1.default('file:/foo/bar.txt'), 'me', [
        {
            range: {
                start: {
                    line: 1,
                    character: 1
                },
                end: {
                    line: 1,
                    character: 1
                }
            },
            message: 'Foo'
        },
        {
            range: {
                start: {
                    line: 1,
                    character: 1
                },
                end: {
                    line: 1,
                    character: 1
                }
            },
            message: 'Bar'
        }
    ]);
    manager.setMarkers(new uri_1.default('file:/foo/foo.txt'), 'me', [
        {
            range: {
                start: {
                    line: 1,
                    character: 1
                },
                end: {
                    line: 1,
                    character: 1
                }
            },
            message: 'Foo'
        },
        {
            range: {
                start: {
                    line: 1,
                    character: 1
                },
                end: {
                    line: 1,
                    character: 2
                }
            },
            message: 'Bar'
        }
    ]);
});
describe('problem-manager', function () {
    it('replaces markers', function () {
        var events = 0;
        manager.onDidChangeMarkers(function () {
            events++;
        });
        expect(events).equal(0);
        var previous = manager.setMarkers(new uri_1.default('file:/foo/bar.txt'), 'me', [
            {
                range: {
                    start: {
                        line: 2,
                        character: 3
                    },
                    end: {
                        line: 2,
                        character: 1
                    }
                },
                message: 'Foo'
            },
            {
                range: {
                    start: {
                        line: 1,
                        character: 1
                    },
                    end: {
                        line: 1,
                        character: 1
                    }
                },
                message: 'Bar'
            }
        ]);
        expect(previous.length).equal(2);
        expect(events).equal(1);
        expect(manager.findMarkers().length).equal(4);
    });
    it('should find markers with filter', function () {
        expect(manager.findMarkers({
            owner: 'me'
        }).length).equal(4);
        expect(manager.findMarkers({
            owner: 'you'
        }).length).equal(0);
        expect(manager.findMarkers({
            uri: new uri_1.default('file:/foo/foo.txt'),
            owner: 'me'
        }).length).equal(2);
        expect(manager.findMarkers({
            dataFilter: function (data) { return data.range.end.character > 1; }
        }).length).equal(1);
    });
});
//# sourceMappingURL=problem-manager.spec.js.map