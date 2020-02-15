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
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/editor/lib/browser");
var callhierarchy_1 = require("./callhierarchy");
var current_editor_access_1 = require("./current-editor-access");
var callhierarchy_service_1 = require("./callhierarchy-service");
var uri_1 = require("@theia/core/lib/common/uri");
exports.CALL_HIERARCHY_TOGGLE_COMMAND_ID = 'callhierachy:toggle';
exports.CALL_HIERARCHY_LABEL = 'Call Hierarchy';
var CallHierarchyCommands;
(function (CallHierarchyCommands) {
    CallHierarchyCommands.OPEN = {
        id: 'callhierarchy:open',
        label: 'Open Call Hierarchy'
    };
})(CallHierarchyCommands = exports.CallHierarchyCommands || (exports.CallHierarchyCommands = {}));
var CallHierarchyContribution = /** @class */ (function (_super) {
    __extends(CallHierarchyContribution, _super);
    function CallHierarchyContribution() {
        return _super.call(this, {
            widgetId: callhierarchy_1.CALLHIERARCHY_ID,
            widgetName: exports.CALL_HIERARCHY_LABEL,
            defaultWidgetOptions: {
                area: 'bottom'
            },
            toggleCommandId: exports.CALL_HIERARCHY_TOGGLE_COMMAND_ID,
            toggleKeybinding: 'ctrlcmd+shift+f1'
        }) || this;
    }
    CallHierarchyContribution.prototype.isCallHierarchyAvailable = function () {
        var selection = this.editorAccess.getSelection();
        var languageId = this.editorAccess.getLanguageId();
        return !!selection && !!languageId && !!this.callHierarchyServiceProvider.get(languageId, new uri_1.default(selection.uri));
    };
    CallHierarchyContribution.prototype.openView = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, selection, languageId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.openView.call(this, args)];
                    case 1:
                        widget = _a.sent();
                        selection = this.editorAccess.getSelection();
                        languageId = this.editorAccess.getLanguageId();
                        widget.initializeModel(selection, languageId);
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    CallHierarchyContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(CallHierarchyCommands.OPEN, {
            execute: function () { return _this.openView({
                toggle: false,
                activate: true
            }); },
            isEnabled: this.isCallHierarchyAvailable.bind(this)
        });
        _super.prototype.registerCommands.call(this, commands);
    };
    CallHierarchyContribution.prototype.registerMenus = function (menus) {
        var menuPath = __spread(browser_2.EDITOR_CONTEXT_MENU, ['navigation']);
        menus.registerMenuAction(menuPath, {
            commandId: CallHierarchyCommands.OPEN.id,
            label: exports.CALL_HIERARCHY_LABEL
        });
        _super.prototype.registerMenus.call(this, menus);
    };
    CallHierarchyContribution.prototype.registerKeybindings = function (keybindings) {
        _super.prototype.registerKeybindings.call(this, keybindings);
        keybindings.registerKeybinding({
            command: CallHierarchyCommands.OPEN.id,
            keybinding: 'ctrlcmd+f1'
        });
    };
    __decorate([
        inversify_1.inject(current_editor_access_1.CurrentEditorAccess),
        __metadata("design:type", current_editor_access_1.CurrentEditorAccess)
    ], CallHierarchyContribution.prototype, "editorAccess", void 0);
    __decorate([
        inversify_1.inject(callhierarchy_service_1.CallHierarchyServiceProvider),
        __metadata("design:type", callhierarchy_service_1.CallHierarchyServiceProvider)
    ], CallHierarchyContribution.prototype, "callHierarchyServiceProvider", void 0);
    CallHierarchyContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], CallHierarchyContribution);
    return CallHierarchyContribution;
}(browser_1.AbstractViewContribution));
exports.CallHierarchyContribution = CallHierarchyContribution;
//# sourceMappingURL=callhierarchy-contribution.js.map