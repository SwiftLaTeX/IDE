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
// This file is inspired by VSCode and partially copied from https://github.com/Microsoft/vscode/blob/1.33.1/src/vs/workbench/contrib/tasks/common/problemMatcher.ts
// 'problemMatcher.ts' copyright:
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var inversify_1 = require("inversify");
var json_schema_store_1 = require("@theia/core/lib/browser/json-schema-store");
var common_1 = require("@theia/core/lib/common");
var variable_input_schema_1 = require("@theia/variable-resolver/lib/browser/variable-input-schema");
var uri_1 = require("@theia/core/lib/common/uri");
var task_problem_matcher_registry_1 = require("./task-problem-matcher-registry");
var task_definition_registry_1 = require("./task-definition-registry");
var common_2 = require("../common");
exports.taskSchemaId = 'vscode://schemas/tasks';
var TaskSchemaUpdater = /** @class */ (function () {
    function TaskSchemaUpdater() {
        this.onDidChangeTaskSchemaEmitter = new common_1.Emitter();
        this.onDidChangeTaskSchema = this.onDidChangeTaskSchemaEmitter.event;
    }
    TaskSchemaUpdater.prototype.init = function () {
        var _this = this;
        var taskSchemaUri = new uri_1.default(exports.taskSchemaId);
        this.jsonSchemaStore.onDidChangeSchema(function (uri) {
            if (uri.toString() === taskSchemaUri.toString()) {
                _this.onDidChangeTaskSchemaEmitter.fire(undefined);
            }
        });
        this.updateProblemMatcherNames();
        this.updateSupportedTaskTypes();
        // update problem matcher names in the task schema every time a problem matcher is added or disposed
        this.problemMatcherRegistry.onDidChangeProblemMatcher(function () { return _this.updateProblemMatcherNames(); });
        // update supported task types in the task schema every time a task definition is registered or removed
        this.taskDefinitionRegistry.onDidRegisterTaskDefinition(function () { return _this.updateSupportedTaskTypes(); });
        this.taskDefinitionRegistry.onDidUnregisterTaskDefinition(function () { return _this.updateSupportedTaskTypes(); });
    };
    TaskSchemaUpdater.prototype.update = function () {
        var taskSchemaUri = new uri_1.default(exports.taskSchemaId);
        taskConfigurationSchema.anyOf = __spread([processTaskConfigurationSchema], customizedDetectedTasks, customSchemas);
        var schemaContent = this.getStringifiedTaskSchema();
        try {
            this.inmemoryResources.update(taskSchemaUri, schemaContent);
        }
        catch (e) {
            this.inmemoryResources.add(taskSchemaUri, schemaContent);
            this.jsonSchemaStore.registerSchema({
                fileMatch: ['tasks.json'],
                url: taskSchemaUri.toString()
            });
        }
    };
    /**
     * Adds given task schema to `taskConfigurationSchema` as `oneOf` subschema.
     * Replaces existed subschema by given schema if the corresponding `$id` properties are equal.
     *
     * Note: please provide `$id` property for subschema to have ability remove/replace it.
     * @param schema subschema for adding to `taskConfigurationSchema`
     */
    TaskSchemaUpdater.prototype.addSubschema = function (schema) {
        var schemaId = schema.$id;
        if (schemaId) {
            this.doRemoveSubschema(schemaId);
        }
        customSchemas.push(schema);
        this.update();
    };
    /**
     * Removes task subschema from `taskConfigurationSchema`.
     *
     * @param arg `$id` property of subschema
     */
    TaskSchemaUpdater.prototype.removeSubschema = function (arg) {
        var isRemoved = this.doRemoveSubschema(arg);
        if (isRemoved) {
            this.update();
        }
    };
    /**
     * Removes task subschema from `customSchemas`, use `update()` to apply the changes for `taskConfigurationSchema`.
     *
     * @param arg `$id` property of subschema
     * @returns `true` if subschema was removed, `false` otherwise
     */
    TaskSchemaUpdater.prototype.doRemoveSubschema = function (arg) {
        var index = customSchemas.findIndex(function (existed) { return !!existed.$id && existed.$id === arg; });
        if (index > -1) {
            customSchemas.splice(index, 1);
            return true;
        }
        return false;
    };
    /** Returns an array of task types that are registered, including the default types */
    TaskSchemaUpdater.prototype.getRegisteredTaskTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var serverSupportedTypes, browserSupportedTypes, allTypes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskServer.getRegisteredTaskTypes()];
                    case 1:
                        serverSupportedTypes = _a.sent();
                        browserSupportedTypes = this.taskDefinitionRegistry.getAll().map(function (def) { return def.taskType; });
                        allTypes = new Set(__spread(serverSupportedTypes, browserSupportedTypes));
                        return [2 /*return*/, Array.from(allTypes.values()).sort()];
                }
            });
        });
    };
    TaskSchemaUpdater.prototype.updateSchemasForRegisteredTasks = function () {
        customizedDetectedTasks.length = 0;
        var definitions = this.taskDefinitionRegistry.getAll();
        definitions.forEach(function (def) {
            var customizedDetectedTask = {
                type: 'object',
                required: ['type'],
                properties: {}
            };
            var taskType = __assign(__assign({}, defaultTaskType), { enum: [def.taskType], default: def.taskType, description: 'The task type to customize' });
            customizedDetectedTask.properties.type = taskType;
            def.properties.all.forEach(function (taskProp) {
                if (!!def.properties.required.find(function (requiredProp) { return requiredProp === taskProp; })) { // property is mandatory
                    customizedDetectedTask.required.push(taskProp);
                }
                customizedDetectedTask.properties[taskProp] = __assign({}, def.properties.schema.properties[taskProp]);
            });
            customizedDetectedTask.properties.problemMatcher = problemMatcher;
            customizedDetectedTask.properties.options = commandOptionsSchema;
            customizedDetectedTask.properties.group = group;
            customizedDetectedTask.additionalProperties = true;
            customizedDetectedTasks.push(customizedDetectedTask);
        });
    };
    /** Returns the task's JSON schema */
    TaskSchemaUpdater.prototype.getTaskSchema = function () {
        return {
            type: 'object',
            properties: {
                version: {
                    type: 'string'
                },
                tasks: {
                    type: 'array',
                    items: __assign({}, common_1.deepClone(taskConfigurationSchema))
                },
                inputs: variable_input_schema_1.inputsSchema.definitions.inputs
            },
            additionalProperties: false
        };
    };
    /** Returns the task's JSON schema as a string */
    TaskSchemaUpdater.prototype.getStringifiedTaskSchema = function () {
        return JSON.stringify(this.getTaskSchema());
    };
    /** Gets the most up-to-date names of problem matchers from the registry and update the task schema */
    TaskSchemaUpdater.prototype.updateProblemMatcherNames = function () {
        var matcherNames = this.problemMatcherRegistry.getAll().map(function (m) { return m.name.startsWith('$') ? m.name : "$" + m.name; });
        problemMatcherNames.length = 0;
        problemMatcherNames.push.apply(problemMatcherNames, __spread(matcherNames));
        this.update();
    };
    TaskSchemaUpdater.prototype.updateSupportedTaskTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateSchemasForRegisteredTasks();
                this.update();
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(json_schema_store_1.JsonSchemaStore),
        __metadata("design:type", json_schema_store_1.JsonSchemaStore)
    ], TaskSchemaUpdater.prototype, "jsonSchemaStore", void 0);
    __decorate([
        inversify_1.inject(common_1.InMemoryResources),
        __metadata("design:type", common_1.InMemoryResources)
    ], TaskSchemaUpdater.prototype, "inmemoryResources", void 0);
    __decorate([
        inversify_1.inject(task_problem_matcher_registry_1.ProblemMatcherRegistry),
        __metadata("design:type", task_problem_matcher_registry_1.ProblemMatcherRegistry)
    ], TaskSchemaUpdater.prototype, "problemMatcherRegistry", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskSchemaUpdater.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(common_2.TaskServer),
        __metadata("design:type", Object)
    ], TaskSchemaUpdater.prototype, "taskServer", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskSchemaUpdater.prototype, "init", null);
    TaskSchemaUpdater = __decorate([
        inversify_1.injectable()
    ], TaskSchemaUpdater);
    return TaskSchemaUpdater;
}());
exports.TaskSchemaUpdater = TaskSchemaUpdater;
var commandSchema = {
    type: 'string',
    description: 'The actual command or script to execute'
};
var commandArgSchema = {
    type: 'array',
    description: 'A list of strings, each one being one argument to pass to the command',
    items: {
        type: 'string'
    }
};
var commandOptionsSchema = {
    type: 'object',
    description: 'The command options used when the command is executed',
    properties: {
        cwd: {
            type: 'string',
            description: 'The directory in which the command will be executed',
            default: '${workspaceFolder}'
        },
        env: {
            type: 'object',
            description: 'The environment of the executed program or shell. If omitted the parent process\' environment is used'
        },
        shell: {
            type: 'object',
            description: 'Configuration of the shell when task type is `shell`',
            properties: {
                executable: {
                    type: 'string',
                    description: 'The shell to use'
                },
                args: {
                    type: 'array',
                    description: "The arguments to be passed to the shell executable to run in command mode\n                        (e.g ['-c'] for bash or ['/S', '/C'] for cmd.exe)",
                    items: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
var problemMatcherNames = [];
var defaultTaskTypes = ['shell', 'process'];
var supportedTaskTypes = __spread(defaultTaskTypes);
var taskLabel = {
    type: 'string',
    description: 'A unique string that identifies the task that is also used as task\'s user interface label'
};
var defaultTaskType = {
    type: 'string',
    enum: supportedTaskTypes,
    default: defaultTaskTypes[0],
    description: 'Determines what type of process will be used to execute the task. Only shell types will have output shown on the user interface'
};
var commandAndArgs = {
    command: commandSchema,
    args: commandArgSchema,
    options: commandOptionsSchema
};
var group = {
    oneOf: [
        {
            type: 'string'
        },
        {
            type: 'object',
            properties: {
                kind: {
                    type: 'string',
                    default: 'none',
                    description: 'The task\'s execution group.'
                },
                isDefault: {
                    type: 'boolean',
                    default: false,
                    description: 'Defines if this task is the default task in the group.'
                }
            }
        }
    ],
    enum: [
        { kind: 'build', isDefault: true },
        { kind: 'test', isDefault: true },
        'build',
        'test',
        'none'
    ],
    enumDescriptions: [
        'Marks the task as the default build task.',
        'Marks the task as the default test task.',
        'Marks the task as a build task accessible through the \'Run Build Task\' command.',
        'Marks the task as a test task accessible through the \'Run Test Task\' command.',
        'Assigns the task to no group'
    ],
    // eslint-disable-next-line max-len
    description: 'Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.'
};
var problemPattern = {
    default: {
        regexp: '^([^\\\\s].*)\\\\((\\\\d+,\\\\d+)\\\\):\\\\s*(.*)$',
        file: 1,
        location: 2,
        message: 3
    },
    type: 'object',
    properties: {
        regexp: {
            type: 'string',
            description: 'The regular expression to find an error, warning or info in the output.'
        },
        kind: {
            type: 'string',
            description: 'whether the pattern matches a location (file and line) or only a file.'
        },
        file: {
            type: 'integer',
            description: 'The match group index of the filename. If omitted 1 is used.'
        },
        location: {
            type: 'integer',
            // eslint-disable-next-line max-len
            description: 'The match group index of the problem\'s location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.'
        },
        line: {
            type: 'integer',
            description: 'The match group index of the problem\'s line. Defaults to 2'
        },
        column: {
            type: 'integer',
            description: 'The match group index of the problem\'s line character. Defaults to 3'
        },
        endLine: {
            type: 'integer',
            description: 'The match group index of the problem\'s end line. Defaults to undefined'
        },
        endColumn: {
            type: 'integer',
            description: 'The match group index of the problem\'s end line character. Defaults to undefined'
        },
        severity: {
            type: 'integer',
            description: 'The match group index of the problem\'s severity. Defaults to undefined'
        },
        code: {
            type: 'integer',
            description: 'The match group index of the problem\'s code. Defaults to undefined'
        },
        message: {
            type: 'integer',
            description: 'The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.'
        },
        loop: {
            type: 'boolean',
            // eslint-disable-next-line max-len
            description: 'In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.'
        }
    }
};
var multiLineProblemPattern = {
    type: 'array',
    items: problemPattern
};
var watchingPattern = {
    type: 'object',
    additionalProperties: false,
    properties: {
        regexp: {
            type: 'string',
            description: 'The regular expression to detect the begin or end of a background task.'
        },
        file: {
            type: 'integer',
            description: 'The match group index of the filename. Can be omitted.'
        },
    }
};
var patternType = {
    anyOf: [
        {
            type: 'string',
            description: 'The name of a contributed or predefined pattern'
        },
        problemPattern,
        multiLineProblemPattern
    ],
    description: 'A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.'
};
var problemMatcherObject = {
    type: 'object',
    properties: {
        base: {
            type: 'string',
            description: 'The name of a base problem matcher to use.'
        },
        owner: {
            type: 'string',
            description: 'The owner of the problem inside Code. Can be omitted if base is specified. Defaults to \'external\' if omitted and base is not specified.'
        },
        source: {
            type: 'string',
            description: 'A human-readable string describing the source of this diagnostic, e.g. \'typescript\' or \'super lint\'.'
        },
        severity: {
            type: 'string',
            enum: ['error', 'warning', 'info'],
            description: 'The default severity for captures problems. Is used if the pattern doesn\'t define a match group for severity.'
        },
        applyTo: {
            type: 'string',
            enum: ['allDocuments', 'openDocuments', 'closedDocuments'],
            description: 'Controls if a problem reported on a text document is applied only to open, closed or all documents.'
        },
        pattern: patternType,
        fileLocation: {
            oneOf: [
                {
                    type: 'string',
                    enum: ['absolute', 'relative', 'autoDetect']
                },
                {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                }
            ],
            description: 'Defines how file names reported in a problem pattern should be interpreted.'
        },
        background: {
            type: 'object',
            additionalProperties: false,
            description: 'Patterns to track the begin and end of a matcher active on a background task.',
            properties: {
                activeOnStart: {
                    type: 'boolean',
                    description: 'If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern'
                },
                beginsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the start of a background task is signaled.'
                },
                endsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the end of a background task is signaled.'
                }
            }
        },
        watching: {
            type: 'object',
            additionalProperties: false,
            deprecationMessage: 'The watching property is deprecated. Use background instead.',
            description: 'Patterns to track the begin and end of a watching matcher.',
            properties: {
                activeOnStart: {
                    type: 'boolean',
                    description: 'If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern'
                },
                beginsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the start of a watching task is signaled.'
                },
                endsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the end of a watching task is signaled.'
                }
            }
        }
    }
};
var problemMatcher = {
    anyOf: [
        {
            type: 'string',
            description: 'Name of the problem matcher to parse the output of the task',
            enum: problemMatcherNames
        },
        {
            type: 'array',
            description: 'Name(s) of the problem matcher(s) to parse the output of the task',
            items: {
                type: 'string',
                enum: problemMatcherNames
            }
        },
        problemMatcherObject,
        {
            type: 'array',
            description: 'User defined problem matcher(s) to parse the output of the task',
            items: problemMatcherObject
        }
    ]
};
var presentation = {
    type: 'object',
    default: {
        reveal: 'always',
        focus: false
    },
    description: 'Configures the panel that is used to present the task\'s output and reads its input.',
    additionalProperties: true,
    properties: {
        focus: {
            type: 'boolean',
            default: false,
            description: 'Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.'
        },
        reveal: {
            type: 'string',
            enum: ['always', 'silent', 'never'],
            enumDescriptions: [
                'Always reveals the terminal when this task is executed.',
                'Only reveals the terminal if the task exits with an error or the problem matcher finds an error.',
                'Never reveals the terminal when this task is executed.'
            ],
            default: 'always',
            description: 'Controls whether the terminal running the task is revealed or not. May be overridden by option \"revealProblems\". Default is \"always\".'
        }
    }
};
var taskIdentifier = {
    type: 'object',
    additionalProperties: true,
    properties: {
        type: {
            type: 'string',
            description: 'The task identifier.'
        }
    }
};
var processTaskConfigurationSchema = {
    type: 'object',
    required: ['type', 'label', 'command'],
    properties: __assign(__assign({ label: taskLabel, type: defaultTaskType }, commandAndArgs), { isBackground: {
            type: 'boolean',
            default: false,
            description: 'Whether the executed task is kept alive and is running in the background.'
        }, dependsOn: {
            anyOf: [
                {
                    type: 'string',
                    description: 'Another task this task depends on.'
                },
                taskIdentifier,
                {
                    type: 'array',
                    description: 'The other tasks this task depends on.',
                    items: {
                        anyOf: [
                            {
                                type: 'string'
                            },
                            taskIdentifier
                        ]
                    }
                }
            ],
            description: 'Either a string representing another task or an array of other tasks that this task depends on.'
        }, dependsOrder: {
            type: 'string',
            enum: ['parallel', 'sequence'],
            enumDescriptions: [
                'Run all dependsOn tasks in parallel.',
                'Run all dependsOn tasks in sequence.'
            ],
            default: 'parallel',
            description: 'Determines the order of the dependsOn tasks for this task. Note that this property is not recursive.'
        }, windows: {
            type: 'object',
            description: 'Windows specific command configuration that overrides the command, args, and options',
            properties: commandAndArgs
        }, osx: {
            type: 'object',
            description: 'MacOS specific command configuration that overrides the command, args, and options',
            properties: commandAndArgs
        }, linux: {
            type: 'object',
            description: 'Linux specific command configuration that overrides the default command, args, and options',
            properties: commandAndArgs
        }, group: group,
        problemMatcher: problemMatcher,
        presentation: presentation }),
    additionalProperties: true
};
var customizedDetectedTasks = [];
var customSchemas = [];
var taskConfigurationSchema = {
    $id: exports.taskSchemaId,
    anyOf: __spread([processTaskConfigurationSchema], customizedDetectedTasks, customSchemas)
};
//# sourceMappingURL=task-schema-updater.js.map