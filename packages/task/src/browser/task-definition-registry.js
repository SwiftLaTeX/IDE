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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var common_1 = require("@theia/core/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var disposable_1 = require("@theia/core/lib/common/disposable");
var TaskDefinitionRegistry = /** @class */ (function () {
    function TaskDefinitionRegistry() {
        // task type - array of task definitions
        this.definitions = new Map();
        this.onDidRegisterTaskDefinitionEmitter = new common_1.Emitter();
        this.onDidUnregisterTaskDefinitionEmitter = new common_1.Emitter();
    }
    Object.defineProperty(TaskDefinitionRegistry.prototype, "onDidRegisterTaskDefinition", {
        get: function () {
            return this.onDidRegisterTaskDefinitionEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskDefinitionRegistry.prototype, "onDidUnregisterTaskDefinition", {
        get: function () {
            return this.onDidUnregisterTaskDefinitionEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns all task definitions that are registered
     * @return the task definitions that are registered
     */
    TaskDefinitionRegistry.prototype.getAll = function () {
        var e_1, _a;
        var all = [];
        try {
            for (var _b = __values(this.definitions.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var definitions = _c.value;
                all.push.apply(all, __spread(definitions));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return all;
    };
    /**
     * Finds the task definition(s) from the registry with the given `taskType`.
     *
     * @param taskType the type of the task
     * @return an array of the task definitions. If no task definitions are found, an empty array is returned.
     */
    TaskDefinitionRegistry.prototype.getDefinitions = function (taskType) {
        return this.definitions.get(taskType) || [];
    };
    /**
     * Finds the task definition from the registry for the task configuration.
     * The task configuration is considered as a "match" to the task definition if it has all the `required` properties.
     * In case that more than one task definition is found, return the one that has the biggest number of matched properties.
     *
     * @param taskConfiguration the task configuration
     * @return the task definition for the task configuration. If the task definition is not found, `undefined` is returned.
     */
    TaskDefinitionRegistry.prototype.getDefinition = function (taskConfiguration) {
        var e_2, _a;
        var definitions = this.getDefinitions(taskConfiguration.taskType || taskConfiguration.type);
        var matchedDefinition;
        var highest = -1;
        var _loop_1 = function (def) {
            var score = 0;
            if (!def.properties.required.every(function (requiredProp) { return taskConfiguration[requiredProp] !== undefined; })) {
                return "continue";
            }
            score += def.properties.required.length; // number of required properties
            var requiredProps = new Set(def.properties.required);
            // number of optional properties
            score += def.properties.all.filter(function (p) { return !requiredProps.has(p) && taskConfiguration[p] !== undefined; }).length;
            if (score > highest) {
                highest = score;
                matchedDefinition = def;
            }
        };
        try {
            for (var definitions_1 = __values(definitions), definitions_1_1 = definitions_1.next(); !definitions_1_1.done; definitions_1_1 = definitions_1.next()) {
                var def = definitions_1_1.value;
                _loop_1(def);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (definitions_1_1 && !definitions_1_1.done && (_a = definitions_1.return)) _a.call(definitions_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return matchedDefinition;
    };
    /**
     * Add a task definition to the registry.
     *
     * @param definition the task definition to be added.
     */
    TaskDefinitionRegistry.prototype.register = function (definition) {
        var _this = this;
        var taskType = definition.taskType;
        var definitions = this.definitions.get(taskType) || [];
        definitions.push(definition);
        this.definitions.set(taskType, definitions);
        this.onDidRegisterTaskDefinitionEmitter.fire(undefined);
        return disposable_1.Disposable.create(function () {
            var index = definitions.indexOf(definition);
            if (index !== -1) {
                definitions.splice(index, 1);
            }
            _this.onDidUnregisterTaskDefinitionEmitter.fire(undefined);
        });
    };
    TaskDefinitionRegistry.prototype.compareTasks = function (one, other) {
        var oneType = one.taskType || one.type;
        var otherType = other.taskType || other.type;
        if (oneType !== otherType) {
            return false;
        }
        var def = this.getDefinition(one);
        if (def) {
            var oneScope = new uri_1.default(one._scope).path.toString();
            var otherScope = new uri_1.default(other._scope).path.toString();
            return def.properties.all.every(function (p) { return p === 'type' || one[p] === other[p]; }) && oneScope === otherScope;
        }
        return one.label === other.label && one._source === other._source;
    };
    TaskDefinitionRegistry = __decorate([
        inversify_1.injectable()
    ], TaskDefinitionRegistry);
    return TaskDefinitionRegistry;
}());
exports.TaskDefinitionRegistry = TaskDefinitionRegistry;
//# sourceMappingURL=task-definition-registry.js.map