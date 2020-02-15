"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var Converter = require("./type-converters");
var types = require("./types-impl");
var markdown_string_1 = require("./markdown-string");
describe('Type converters:', function () {
    describe('convert ranges:', function () {
        // given
        var modelRange = {
            startLineNumber: 5,
            startColumn: 5,
            endLineNumber: 10,
            endColumn: 20
        };
        var pluginRange = new types.Range(4, 4, 9, 19);
        it('should convert to theia range', function () {
            // when
            var result = Converter.toRange(modelRange);
            // then
            assert.deepEqual(result, pluginRange);
        });
        it('should convert to model range', function () {
            // when
            var result = Converter.fromRange(pluginRange);
            // then
            assert.notEqual(result, undefined);
            assert.deepEqual(result, modelRange);
        });
    });
    describe('markdown:', function () {
        describe('type guard:', function () {
            it('should recognize markdown string', function () {
                // given
                var markdownString = new markdown_string_1.MarkdownString('**test**');
                // when
                var result = markdown_string_1.isMarkdownString(markdownString);
                // then
                assert.deepEqual(result !== false, true);
            });
            it('should recognize markdown object', function () {
                // given
                var markdownObject = { value: '*test*' };
                // when
                var result = markdown_string_1.isMarkdownString(markdownObject);
                // then
                assert.deepEqual(result !== false, true);
            });
            it('should recognize markdown object with redundant fields', function () {
                // given
                var markdownObject = { field1: 5, value: '*test*', field2: 'test' };
                // when
                var result = markdown_string_1.isMarkdownString(markdownObject);
                // then
                assert.deepEqual(result !== false, true);
            });
            it('should reject non markdown object', function () {
                // given
                var nonMarkdownObject = { field1: 5, field2: 'test' };
                // when
                var result = markdown_string_1.isMarkdownString(nonMarkdownObject);
                // then
                assert.deepEqual(result === false, true);
            });
            it('should reject non markdown object if it countains isTrusted field', function () {
                // given
                var nonMarkdownObject = { isTrusted: true, field1: 5, field2: 'test' };
                // when
                var result = markdown_string_1.isMarkdownString(nonMarkdownObject);
                // then
                assert.deepEqual(result === false, true);
            });
        });
        describe('converter: ', function () {
            var aStringWithMarkdown = '**test**';
            var pluginMarkdown = new markdown_string_1.MarkdownString(aStringWithMarkdown);
            var aLanguage = 'typescript';
            var aValue = 'const x=5;';
            var codeblock = { language: aLanguage, value: aValue };
            var modelMarkdownWithCode = { value: '```' + aLanguage + '\n' + aValue + '\n```\n' };
            var modelMarkdown = { value: aStringWithMarkdown };
            it('should convert plugin markdown to model markdown', function () {
                // when
                var result = Converter.fromMarkdown(pluginMarkdown);
                // then
                assert.deepEqual(result, modelMarkdown);
            });
            it('should convert string to model markdown', function () {
                // when
                var result = Converter.fromMarkdown(aStringWithMarkdown);
                // then
                assert.deepEqual(result, modelMarkdown);
            });
            it('should convert codeblock to model markdown', function () {
                // when
                var result = Converter.fromMarkdown(codeblock);
                // then
                assert.deepEqual(result, modelMarkdownWithCode);
            });
            it('should convert array of markups to model markdown', function () {
                // given
                var markups = [
                    pluginMarkdown,
                    aStringWithMarkdown,
                    codeblock
                ];
                // when
                var result = Converter.fromManyMarkdown(markups);
                // then
                assert.deepEqual(Array.isArray(result), true);
                assert.deepEqual(result.length, 3);
                assert.deepEqual(result[0], modelMarkdown);
                assert.deepEqual(result[1], modelMarkdown);
                assert.deepEqual(result[2], modelMarkdownWithCode);
            });
        });
    });
    describe('convert tasks:', function () {
        var customType = 'custom';
        var shellType = 'shell';
        var label = 'yarn build';
        var source = 'source';
        var command = 'yarn';
        var commandLine = 'yarn run build';
        var args = ['run', 'build'];
        var cwd = '/projects/theia';
        var additionalProperty = 'some property';
        var shellTaskDto = {
            type: shellType,
            label: label,
            source: source,
            scope: undefined,
            command: command,
            args: args,
            options: { cwd: cwd },
            additionalProperty: additionalProperty
        };
        var shellTaskDtoWithCommandLine = {
            type: shellType,
            label: label,
            source: source,
            scope: undefined,
            command: commandLine,
            options: { cwd: cwd },
            additionalProperty: additionalProperty
        };
        var shellPluginTask = {
            name: label,
            source: source,
            definition: {
                type: shellType,
                additionalProperty: additionalProperty
            },
            execution: {
                command: command,
                args: args,
                options: {
                    cwd: cwd
                }
            }
        };
        var pluginTaskWithCommandLine = {
            name: label,
            source: source,
            definition: {
                type: shellType,
                additionalProperty: additionalProperty
            },
            execution: {
                commandLine: commandLine,
                options: {
                    cwd: cwd
                }
            }
        };
        var customTaskDto = __assign(__assign({}, shellTaskDto), { type: customType });
        var customTaskDtoWithCommandLine = __assign(__assign({}, shellTaskDtoWithCommandLine), { type: customType });
        var customPluginTask = __assign(__assign({}, shellPluginTask), { definition: {
                type: customType,
                additionalProperty: additionalProperty
            } });
        var customPluginTaskWithCommandLine = {
            name: label,
            source: source,
            definition: {
                type: customType,
                additionalProperty: additionalProperty
            },
            execution: {
                commandLine: commandLine,
                options: {
                    cwd: cwd
                }
            }
        };
        it('should convert to task dto', function () {
            // when
            var result = Converter.fromTask(shellPluginTask);
            // then
            assert.notEqual(result, undefined);
            assert.deepEqual(result, shellTaskDto);
        });
        it('should convert from task dto', function () {
            // when
            var result = Converter.toTask(shellTaskDto);
            assert.strictEqual(result.execution instanceof types.ShellExecution, true);
            if (result.execution instanceof types.ShellExecution) {
                assert.strictEqual(result.execution.commandLine, undefined);
                result.execution = {
                    args: result.execution.args,
                    options: result.execution.options,
                    command: result.execution.command
                };
            }
            // then
            assert.notEqual(result, undefined);
            assert.deepEqual(result, shellPluginTask);
        });
        it('should convert to task dto from task with commandline', function () {
            // when
            var result = Converter.fromTask(pluginTaskWithCommandLine);
            // then
            assert.notEqual(result, undefined);
            assert.deepEqual(result, shellTaskDtoWithCommandLine);
        });
        it('should convert task with custom type to dto', function () {
            // when
            var result = Converter.fromTask(customPluginTask);
            // then
            assert.notEqual(result, undefined);
            assert.deepEqual(result, customTaskDto);
        });
        it('should convert task with custom type from dto', function () {
            // when
            var result = Converter.toTask(customTaskDto);
            assert.strictEqual(result.execution instanceof types.ShellExecution, true);
            if (result.execution instanceof types.ShellExecution) {
                assert.strictEqual(result.execution.commandLine, undefined);
                result.execution = {
                    args: result.execution.args,
                    options: result.execution.options,
                    command: result.execution.command
                };
            }
            // then
            assert.deepEqual(result, customPluginTask);
        });
        it('should convert to task dto from custom task with commandline', function () {
            // when
            var result = Converter.fromTask(customPluginTaskWithCommandLine);
            // then
            assert.notEqual(result, undefined);
            assert.deepEqual(result, customTaskDtoWithCommandLine);
        });
    });
    describe('Webview Panel Show Options:', function () {
        it('should create options from view column ', function () {
            var viewColumn = types.ViewColumn.Five;
            var showOptions = {
                area: types.WebviewPanelTargetArea.Main,
                viewColumn: types.ViewColumn.Four,
                preserveFocus: false
            };
            // when
            var result = Converter.toWebviewPanelShowOptions(viewColumn);
            // then
            assert.notEqual(result, undefined);
            assert.deepEqual(result, showOptions);
        });
        it('should create options from given "WebviewPanelShowOptions" object ', function () {
            var incomingObject = {
                area: types.WebviewPanelTargetArea.Main,
                viewColumn: types.ViewColumn.Five,
                preserveFocus: true
            };
            var showOptions = {
                area: types.WebviewPanelTargetArea.Main,
                viewColumn: types.ViewColumn.Four,
                preserveFocus: true
            };
            // when
            var result = Converter.toWebviewPanelShowOptions(incomingObject);
            // then
            assert.notEqual(result, undefined);
            assert.deepEqual(result, showOptions);
        });
        it('should set default "main" area', function () {
            var incomingObject = {
                viewColumn: types.ViewColumn.Five,
                preserveFocus: false
            };
            var showOptions = {
                area: types.WebviewPanelTargetArea.Main,
                viewColumn: types.ViewColumn.Four,
                preserveFocus: false
            };
            // when
            var result = Converter.toWebviewPanelShowOptions(incomingObject);
            // then
            assert.notEqual(result, undefined);
            assert.deepEqual(result, showOptions);
        });
    });
});
//# sourceMappingURL=type-converters.spec.js.map