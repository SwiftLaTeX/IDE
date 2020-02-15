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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var browser_1 = require("@theia/core/lib/browser");
var md5_1 = require("ts-md5/dist/md5");
var cancellation_1 = require("@theia/core/lib/common/cancellation");
var CallHierarchyTree = /** @class */ (function (_super) {
    __extends(CallHierarchyTree, _super);
    function CallHierarchyTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CallHierarchyTree.prototype, "callHierarchyService", {
        get: function () {
            return this._callHierarchyService;
        },
        set: function (callHierarchyService) {
            this._callHierarchyService = callHierarchyService;
        },
        enumerable: true,
        configurable: true
    });
    CallHierarchyTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            var definition, cancellationSource, callers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.callHierarchyService) {
                            return [2 /*return*/, Promise.resolve([])];
                        }
                        if (parent.children.length > 0) {
                            return [2 /*return*/, Promise.resolve(__spread(parent.children))];
                        }
                        if (DefinitionNode.is(parent)) {
                            definition = parent.definition;
                        }
                        else if (CallerNode.is(parent)) {
                            definition = parent.caller.callerDefinition;
                        }
                        if (!definition) return [3 /*break*/, 2];
                        cancellationSource = new cancellation_1.CancellationTokenSource();
                        return [4 /*yield*/, this.callHierarchyService.getCallers(definition, cancellationSource.token)];
                    case 1:
                        callers = _a.sent();
                        if (!callers) {
                            return [2 /*return*/, Promise.resolve([])];
                        }
                        return [2 /*return*/, this.toNodes(callers, parent)];
                    case 2: return [2 /*return*/, Promise.resolve([])];
                }
            });
        });
    };
    CallHierarchyTree.prototype.toNodes = function (callers, parent) {
        var _this = this;
        return callers.map(function (caller) { return _this.toNode(caller, parent); });
    };
    CallHierarchyTree.prototype.toNode = function (caller, parent) {
        return CallerNode.create(caller, parent);
    };
    CallHierarchyTree = __decorate([
        inversify_1.injectable()
    ], CallHierarchyTree);
    return CallHierarchyTree;
}(browser_1.TreeImpl));
exports.CallHierarchyTree = CallHierarchyTree;
var DefinitionNode;
(function (DefinitionNode) {
    function is(node) {
        return !!node && 'definition' in node;
    }
    DefinitionNode.is = is;
    function create(definition, parent) {
        var name = definition.symbolName;
        var id = createId(definition, parent);
        return {
            id: id, definition: definition, name: name, parent: parent,
            visible: true,
            children: [],
            expanded: false,
            selected: false,
        };
    }
    DefinitionNode.create = create;
})(DefinitionNode = exports.DefinitionNode || (exports.DefinitionNode = {}));
var CallerNode;
(function (CallerNode) {
    function is(node) {
        return !!node && 'caller' in node;
    }
    CallerNode.is = is;
    function create(caller, parent) {
        var callerDefinition = caller.callerDefinition;
        var name = callerDefinition.symbolName;
        var id = createId(callerDefinition, parent);
        return {
            id: id, caller: caller, name: name, parent: parent,
            visible: true,
            children: [],
            expanded: false,
            selected: false,
        };
    }
    CallerNode.create = create;
})(CallerNode = exports.CallerNode || (exports.CallerNode = {}));
function createId(definition, parent) {
    var idPrefix = (parent) ? parent.id + '/' : '';
    var id = idPrefix + md5_1.Md5.hashStr(JSON.stringify(definition));
    return id;
}
//# sourceMappingURL=callhierarchy-tree.js.map