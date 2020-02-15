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
var keys_1 = require("./keyboard/keys");
var dialogs_1 = require("./dialogs");
var Saveable;
(function (Saveable) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isSource(arg) {
        return !!arg && ('saveable' in arg);
    }
    Saveable.isSource = isSource;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(arg) {
        return !!arg && ('dirty' in arg) && ('onDirtyChanged' in arg);
    }
    Saveable.is = is;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function get(arg) {
        if (is(arg)) {
            return arg;
        }
        if (isSource(arg)) {
            return arg.saveable;
        }
        return undefined;
    }
    Saveable.get = get;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function getDirty(arg) {
        var saveable = get(arg);
        if (saveable && saveable.dirty) {
            return saveable;
        }
        return undefined;
    }
    Saveable.getDirty = getDirty;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isDirty(arg) {
        return !!getDirty(arg);
    }
    Saveable.isDirty = isDirty;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function save(arg) {
        return __awaiter(this, void 0, void 0, function () {
            var saveable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        saveable = get(arg);
                        if (!saveable) return [3 /*break*/, 2];
                        return [4 /*yield*/, saveable.save()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    Saveable.save = save;
    function apply(widget) {
        var _this = this;
        if (SaveableWidget.is(widget)) {
            return widget;
        }
        var saveable = Saveable.get(widget);
        if (!saveable) {
            return undefined;
        }
        setDirty(widget, saveable.dirty);
        saveable.onDirtyChanged(function () { return setDirty(widget, saveable.dirty); });
        var closing = false;
        var closeWithoutSaving = widget.close.bind(widget);
        return Object.assign(widget, {
            closeWithoutSaving: closeWithoutSaving,
            close: function () { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (closing) {
                                return [2 /*return*/];
                            }
                            closing = true;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 6, 7]);
                            return [4 /*yield*/, shouldSave(saveable, widget)];
                        case 2:
                            result = _a.sent();
                            if (!(typeof result === 'boolean')) return [3 /*break*/, 5];
                            if (!result) return [3 /*break*/, 4];
                            return [4 /*yield*/, Saveable.save(widget)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            closeWithoutSaving();
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            closing = false;
                            return [7 /*endfinally*/];
                        case 7: return [2 /*return*/];
                    }
                });
            }); }
        });
    }
    Saveable.apply = apply;
    function shouldSave(saveable, widget) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!saveable.dirty) {
                    return [2 /*return*/, false];
                }
                if (saveable.autoSave === 'on') {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, new ShouldSaveDialog(widget).open()];
            });
        });
    }
    Saveable.shouldSave = shouldSave;
})(Saveable = exports.Saveable || (exports.Saveable = {}));
var SaveableWidget;
(function (SaveableWidget) {
    function is(widget) {
        return !!widget && 'closeWithoutSaving' in widget;
    }
    SaveableWidget.is = is;
    function getDirty(widgets) {
        return get(widgets, Saveable.isDirty);
    }
    SaveableWidget.getDirty = getDirty;
    function get(widgets, filter) {
        var widgets_1, widgets_1_1, widget, e_1_1;
        var e_1, _a;
        if (filter === void 0) { filter = function () { return true; }; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    widgets_1 = __values(widgets), widgets_1_1 = widgets_1.next();
                    _b.label = 1;
                case 1:
                    if (!!widgets_1_1.done) return [3 /*break*/, 4];
                    widget = widgets_1_1.value;
                    if (!(SaveableWidget.is(widget) && filter(widget))) return [3 /*break*/, 3];
                    return [4 /*yield*/, widget];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    widgets_1_1 = widgets_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (widgets_1_1 && !widgets_1_1.done && (_a = widgets_1.return)) _a.call(widgets_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }
    SaveableWidget.get = get;
})(SaveableWidget = exports.SaveableWidget || (exports.SaveableWidget = {}));
/**
 * The class name added to the dirty widget's title.
 */
var DIRTY_CLASS = 'theia-mod-dirty';
function setDirty(widget, dirty) {
    var dirtyClass = " " + DIRTY_CLASS;
    widget.title.className = widget.title.className.replace(dirtyClass, '');
    if (dirty) {
        widget.title.className += dirtyClass;
    }
}
exports.setDirty = setDirty;
var ShouldSaveDialog = /** @class */ (function (_super) {
    __extends(ShouldSaveDialog, _super);
    function ShouldSaveDialog(widget) {
        var _this = _super.call(this, {
            title: "Do you want to save the changes you made to " + (widget.title.label || widget.title.caption) + "?"
        }) || this;
        _this.shouldSave = true;
        var messageNode = document.createElement('div');
        messageNode.textContent = "Your changes will be lost if you don't save them.";
        messageNode.setAttribute('style', 'flex: 1 100%; padding-bottom: calc(var(--theia-ui-padding)*3);');
        _this.contentNode.appendChild(messageNode);
        _this.dontSaveButton = _this.appendDontSaveButton();
        _this.appendCloseButton();
        _this.appendAcceptButton('Save');
        return _this;
    }
    ShouldSaveDialog.prototype.appendDontSaveButton = function () {
        var button = this.createButton("Don't save");
        this.controlPanel.appendChild(button);
        button.classList.add('secondary');
        return button;
    };
    ShouldSaveDialog.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        this.addKeyListener(this.dontSaveButton, keys_1.Key.ENTER, function () {
            _this.shouldSave = false;
            _this.accept();
        }, 'click');
    };
    Object.defineProperty(ShouldSaveDialog.prototype, "value", {
        get: function () {
            return this.shouldSave;
        },
        enumerable: true,
        configurable: true
    });
    return ShouldSaveDialog;
}(dialogs_1.AbstractDialog));
exports.ShouldSaveDialog = ShouldSaveDialog;
//# sourceMappingURL=saveable.js.map