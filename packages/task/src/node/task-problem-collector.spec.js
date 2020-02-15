"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var task_problem_collector_1 = require("./task-problem-collector");
var problem_matcher_protocol_1 = require("../common/problem-matcher-protocol");
var severity_1 = require("@theia/core/lib/common/severity");
var startStopMatcher1 = {
    owner: 'test1',
    source: 'test1',
    applyTo: problem_matcher_protocol_1.ApplyToKind.allDocuments,
    fileLocation: problem_matcher_protocol_1.FileLocationKind.Absolute,
    pattern: {
        regexp: /^([^:]*: )?((.:)?[^:]*):(\d+)(:(\d+))?: (.*)$/.source,
        kind: problem_matcher_protocol_1.ProblemLocationKind.Location,
        file: 2,
        line: 4,
        character: 6,
        message: 7
    },
    severity: severity_1.Severity.Error
};
var startStopMatcher2 = {
    owner: 'test2',
    source: 'test2',
    applyTo: problem_matcher_protocol_1.ApplyToKind.allDocuments,
    fileLocation: problem_matcher_protocol_1.FileLocationKind.Absolute,
    pattern: [
        {
            regexp: /^([^\s].*)$/.source,
            kind: problem_matcher_protocol_1.ProblemLocationKind.Location,
            file: 1
        },
        {
            regexp: /^\s+(\d+):(\d+)\s+(error|warning|info)\s+(.+?)(?:\s\s+(.*))?$/.source,
            line: 1,
            character: 2,
            severity: 3,
            message: 4,
            code: 5,
            loop: true
        }
    ],
    severity: severity_1.Severity.Error
};
var watchMatcher = {
    owner: 'test3',
    applyTo: problem_matcher_protocol_1.ApplyToKind.closedDocuments,
    fileLocation: problem_matcher_protocol_1.FileLocationKind.Absolute,
    pattern: {
        regexp: /Error: ([^(]+)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\): (.*)$/.source,
        file: 1,
        location: 2,
        message: 3
    },
    watching: {
        activeOnStart: false,
        beginsPattern: { regexp: /Starting compilation/.source },
        endsPattern: { regexp: /Finished compilation/.source }
    }
};
describe('ProblemCollector', function () {
    var collector;
    var allMatches = [];
    var collectMatches = function (lines) {
        lines.forEach(function (line) {
            var matches = collector.processLine(line);
            if (matches.length > 0) {
                allMatches.push.apply(allMatches, __spread(matches));
            }
        });
    };
    beforeEach(function () {
        allMatches.length = 0;
    });
    it('should find problems from start-stop task when problem matcher is associated with one problem pattern', function () {
        collector = new task_problem_collector_1.ProblemCollector([startStopMatcher1]);
        collectMatches([
            'npm WARN lifecycle The node binary used for scripts is /tmp/yarn--1557403301319-0.5645247996849125/node but npm is using /usr/local/bin/node itself.',
            'Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.',
            '',
            '# command-line-arguments',
            '/home/test/hello.go:9:2: undefined: fmt.Pntln',
            '/home/test/hello.go:10:6: undefined: numb',
            '/home/test/hello.go:15:9: undefined: stri'
        ]);
        chai_1.expect(allMatches.length).to.eq(3);
        chai_1.expect(allMatches[0].resource.path).eq('/home/test/hello.go');
        chai_1.expect(allMatches[0].marker).deep.equal({
            range: { start: { line: 8, character: 1 }, end: { line: 8, character: 1 } },
            severity: vscode_languageserver_types_1.DiagnosticSeverity.Error,
            source: 'test1',
            message: 'undefined: fmt.Pntln'
        });
        chai_1.expect(allMatches[1].resource.path).eq('/home/test/hello.go');
        chai_1.expect(allMatches[1].marker).deep.equal({
            range: { start: { line: 9, character: 5 }, end: { line: 9, character: 5 } },
            severity: vscode_languageserver_types_1.DiagnosticSeverity.Error,
            source: 'test1',
            message: 'undefined: numb'
        });
        chai_1.expect(allMatches[2].resource.path).eq('/home/test/hello.go');
        chai_1.expect(allMatches[2].marker).deep.equal({
            range: { start: { line: 14, character: 8 }, end: { line: 14, character: 8 } },
            severity: vscode_languageserver_types_1.DiagnosticSeverity.Error,
            source: 'test1',
            message: 'undefined: stri'
        });
    });
    it('should find problems from start-stop task when problem matcher is associated with more than one problem pattern', function () {
        collector = new task_problem_collector_1.ProblemCollector([startStopMatcher2]);
        collectMatches([
            '> test@0.1.0 lint /home/test',
            '> eslint .',
            '',
            '',
            '/home/test/test-dir.js',
            '  14:21  warning  Missing semicolon  semi',
            '  15:23  warning  Missing semicolon  semi',
            '  103:9  error  Parsing error: Unexpected token inte',
            '',
            '/home/test/more-test.js',
            '  13:9  error  Parsing error: Unexpected token 1000',
            '',
            '✖ 3 problems (1 error, 2 warnings)',
            '  0 errors and 2 warnings potentially fixable with the `--fix` option.'
        ]);
        chai_1.expect(allMatches.length).to.eq(4);
        chai_1.expect(allMatches[0].resource.path).eq('/home/test/test-dir.js');
        chai_1.expect(allMatches[0].marker).deep.equal({
            range: { start: { line: 13, character: 20 }, end: { line: 13, character: 20 } },
            severity: vscode_languageserver_types_1.DiagnosticSeverity.Warning,
            source: 'test2',
            message: 'Missing semicolon',
            code: 'semi'
        });
        chai_1.expect(allMatches[1].resource.path).eq('/home/test/test-dir.js');
        chai_1.expect(allMatches[1].marker).deep.equal({
            range: { start: { line: 14, character: 22 }, end: { line: 14, character: 22 } },
            severity: vscode_languageserver_types_1.DiagnosticSeverity.Warning,
            source: 'test2',
            message: 'Missing semicolon',
            code: 'semi'
        });
        chai_1.expect(allMatches[2].resource.path).eq('/home/test/test-dir.js');
        chai_1.expect(allMatches[2].marker).deep.equal({
            range: { start: { line: 102, character: 8 }, end: { line: 102, character: 8 } },
            severity: vscode_languageserver_types_1.DiagnosticSeverity.Error,
            source: 'test2',
            message: 'Parsing error: Unexpected token inte'
        });
        chai_1.expect(allMatches[3].resource.path).eq('/home/test/more-test.js');
        chai_1.expect(allMatches[3].marker).deep.equal({
            range: { start: { line: 12, character: 8 }, end: { line: 12, character: 8 } },
            severity: vscode_languageserver_types_1.DiagnosticSeverity.Error,
            source: 'test2',
            message: 'Parsing error: Unexpected token 1000'
        });
    });
    it('should search and find defined problems from watch task\'s output', function () {
        collector = new task_problem_collector_1.ProblemCollector([watchMatcher]);
        collectMatches([
            '> code-oss-dev@1.33.1 watch /home/test/vscode',
            '> gulp watch --max_old_space_size=4095',
            '',
            '[09:15:37] Node flags detected: --max_old_space_size=4095',
            '[09:15:37] Respawned to PID: 14560',
            '[09:15:40] Using gulpfile ~/dev/vscode/gulpfile.js',
            "[09:15:40] Starting 'watch'...",
            '[09:15:40] Starting clean-out ...',
            '[09:15:41] Starting clean-extension-configuration-editing ...',
            '[09:15:41] Starting clean-extension-css-language-features-client ...',
            '[09:15:41] Starting clean-extension-css-language-features-server ...',
            '[09:15:41] Starting clean-extension-debug-auto-launch ...',
            '[09:15:41] Starting watch-extension:markdown-language-features-preview-src ...',
            '[09:15:41] Starting compilation...',
            '[09:15:41] Finished clean-extension-typescript-basics-test-colorize-fixtures after 49 ms',
            '[09:15:41] Starting watch-extension:typescript-basics-test-colorize-fixtures ...',
            '[09:15:41] Finished compilation with 0 errors after 30 ms',
            '[09:15:41] Finished clean-extension-css-language-features-client after 119 ms',
            '[09:15:41] Starting watch-extension:css-language-features-client ...',
            '[09:15:41] Starting compilation...',
            '[09:15:41] Finished clean-extension-configuration-editing after 128 ms',
            '[09:15:41] Starting watch-extension:configuration-editing ...',
            '[09:15:41] Finished clean-extension-debug-auto-launch after 133 ms',
            '[09:15:41] Starting watch-extension:debug-auto-launch ...',
            '[09:15:41] Finished clean-extension-debug-server-ready after 138 ms',
            '[09:15:52] Starting watch-extension:html-language-features-server ...',
            '[09:15:58] Finished clean-out after 17196 ms',
            '[09:15:58] Starting watch-client ...',
            '[09:17:25] Finished compilation with 0 errors after 104209 ms',
            '[09:19:22] Starting compilation...',
            "[09:19:23] Error: /home/test/src/vs/workbench/contrib/tasks/common/taskConfiguration.ts(517,19): ')' expected.",
            "[09:19:23] Error: /home/test/src/vs/workbench/contrib/tasks/common/taskConfiguration.ts(517,57): ';' expected.",
            '[09:19:23] Finished compilation with 2 errors after 1051 ms',
            '[09:20:21] Starting compilation...',
            "[09:20:24] Error: /home/test/src/vs/workbench/contrib/tasks/common/problemCollectors.ts(15,30): Cannot find module 'n/uuid'.",
            "[09:20:24] Error: /home/test/src/vs/workbench/contrib/tasks/common/taskConfiguration.ts(517,19): ')' expected.",
            "[09:20:24] Error: /home/test/src/vs/workbench/contrib/tasks/common/taskConfiguration.ts(517,57): ';' expected.",
            '[09:20:24] Finished compilation with 3 errors after 2586 ms',
            '[09:20:24] Starting compilation...',
            '[09:20:25] Error: /home/test/src/vs/workbench/contrib/tasks/common/taskTemplates.ts(12,14): Type expected.',
            "[09:20:25] Error: /home/test/src/vs/workbench/contrib/tasks/common/problemCollectors.ts(15,30): Cannot find module 'n/uuid'.",
            "[09:20:25] Error: /home/test/src/vs/workbench/contrib/tasks/common/taskConfiguration.ts(517,19): ')' expected.",
            "[09:20:25] Error: /home/test/src/vs/workbench/contrib/tasks/common/taskConfiguration.ts(517,57): ';' expected.",
            '[09:20:25] Finished compilation with 4 errors after 441 ms'
        ]);
        chai_1.expect(allMatches.length).to.eq(14); // 9 events for problems + 5 events for beginner pattern
    });
    it('should return an empty array if no problems are found', function () {
        collector = new task_problem_collector_1.ProblemCollector([startStopMatcher2]);
        collectMatches([]);
        chai_1.expect(allMatches.length).to.eq(0);
        collectMatches([
            '> test@0.1.0 lint /home/test',
            '> eslint .',
            '',
            '',
            '0 problems (0 error, 0 warnings)',
        ]);
        chai_1.expect(allMatches.length).to.eq(0);
    });
});
//# sourceMappingURL=task-problem-collector.spec.js.map