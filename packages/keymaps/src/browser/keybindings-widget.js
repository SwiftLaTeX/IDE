"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var React = require("react");
var debounce = require("lodash.debounce");
var fuzzy = require("fuzzy");
var inversify_1 = require("inversify");
var event_1 = require("@theia/core/lib/common/event");
var command_1 = require("@theia/core/lib/common/command");
var react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
var browser_1 = require("@theia/core/lib/browser");
var keymaps_service_1 = require("./keymaps-service");
var alert_message_1 = require("@theia/core/lib/browser/widgets/alert-message");
var KeybindingWidget = /** @class */ (function (_super) {
    __extends(KeybindingWidget, _super);
    function KeybindingWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The list of all available keybindings.
         */
        _this.items = [];
        /**
         * The current user search query.
         */
        _this.query = '';
        /**
         * The regular expression used to extract values between fuzzy results.
         */
        _this.regexp = /<match>(.*?)<\/match>/g;
        /**
         * The regular expression used to extract values between the keybinding separator.
         */
        _this.keybindingSeparator = /<match>\+<\/match>/g;
        /**
         * The fuzzy search options.
         * The `pre` and `post` options are used to wrap fuzzy matches.
         */
        _this.fuzzyOptions = {
            pre: '<match>',
            post: '</match>',
        };
        _this.onDidUpdateEmitter = new event_1.Emitter();
        _this.onDidUpdate = _this.onDidUpdateEmitter.event;
        /**
         * Search keybindings.
         */
        _this.searchKeybindings = debounce(function () { return _this.doSearchKeybindings(); }, 50);
        return _this;
    }
    KeybindingWidget_1 = KeybindingWidget;
    /**
     * Initialize the widget.
     */
    KeybindingWidget.prototype.init = function () {
        var _this = this;
        this.id = KeybindingWidget_1.ID;
        this.title.label = KeybindingWidget_1.LABEL;
        this.title.caption = KeybindingWidget_1.LABEL;
        this.title.iconClass = 'fa fa-bars';
        this.title.closable = true;
        this.update();
        // Initialize the list of keybinding items.
        this.items = this.getItems();
        // Listen to changes made in the `keymaps.json` and update the view accordingly.
        if (this.keymapsService.onDidChangeKeymaps) {
            this.toDispose.push(this.keymapsService.onDidChangeKeymaps(function () {
                _this.doSearchKeybindings();
                _this.update();
            }));
        }
    };
    /**
     * Determine if there currently is a search term.
     * @returns `true` if a search term is present.
     */
    KeybindingWidget.prototype.hasSearch = function () {
        return !!this.query.length;
    };
    /**
     * Clear the search and reset the view.
     */
    KeybindingWidget.prototype.clearSearch = function () {
        var search = this.findSearchField();
        if (search) {
            search.value = '';
            this.query = '';
            this.doSearchKeybindings();
        }
    };
    KeybindingWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.focusInputField();
    };
    /**
     * Perform a search based on the user's search query.
     */
    KeybindingWidget.prototype.doSearchKeybindings = function () {
        var _this = this;
        this.onDidUpdateEmitter.fire(undefined);
        this.items = [];
        var searchField = this.findSearchField();
        this.query = searchField ? searchField.value.trim().toLocaleLowerCase() : '';
        var items = this.getItems();
        items.forEach(function (item) {
            var e_1, _a;
            var keys = ['command', 'keybinding', 'context', 'source'];
            var matched = false;
            var _loop_1 = function (key) {
                var string = item.labels[key];
                if (string) {
                    var fuzzyMatch = fuzzy.match(_this.query, string, _this.fuzzyOptions);
                    if (fuzzyMatch) {
                        item.labels[key] = fuzzyMatch.rendered;
                        matched = true;
                    }
                    else {
                        // Match identical keybindings that have different orders.
                        if (key === 'keybinding') {
                            var queryItems = _this.query.split('+');
                            // Handle key chords.
                            var tempItems = string.split(' ');
                            // Store positions of `space` in the keybinding string.
                            var spaceIndexArr_1 = [0];
                            var bindingItems_1 = [];
                            if (tempItems.length > 1) {
                                tempItems.forEach(function (tItem) {
                                    var tKeys = tItem.split('+');
                                    spaceIndexArr_1.push(tKeys.length + spaceIndexArr_1[-1]);
                                    bindingItems_1.push.apply(bindingItems_1, __spread(tKeys));
                                });
                            }
                            else {
                                bindingItems_1 = string.split('+');
                            }
                            spaceIndexArr_1.shift();
                            var renderedResult_1 = __spread(bindingItems_1);
                            var matchCounter_1 = 0;
                            queryItems.forEach(function (queryItem) {
                                var keyFuzzyMatch = { rendered: '', score: 0 };
                                var keyIndex = -1;
                                if (string) {
                                    bindingItems_1.forEach(function (bindingItem) {
                                        // Match every key in user query with every key in keybinding string.
                                        var tempFuzzyMatch = fuzzy.match(queryItem, bindingItem, _this.fuzzyOptions);
                                        // Select the match with the highest matching score.
                                        if (tempFuzzyMatch && tempFuzzyMatch.score > keyFuzzyMatch.score) {
                                            keyFuzzyMatch = tempFuzzyMatch;
                                            // Get index in the keybinding array.
                                            keyIndex = renderedResult_1.indexOf(bindingItem);
                                        }
                                    });
                                    var keyRendered = keyFuzzyMatch.rendered;
                                    if (keyRendered) {
                                        if (keyIndex > -1) {
                                            renderedResult_1[keyIndex] = keyRendered;
                                        }
                                        // Remove key from keybinding items if it is matched.
                                        bindingItems_1.splice(keyIndex, 1, '');
                                        matchCounter_1 += 1;
                                    }
                                }
                            });
                            if (matchCounter_1 === queryItems.length) {
                                // Handle rendering of key chords.
                                if (spaceIndexArr_1.length > 0) {
                                    var chordRenderedResult_1 = '';
                                    renderedResult_1.forEach(function (resultKey, index) {
                                        if (index === 0) {
                                            chordRenderedResult_1.concat(resultKey);
                                        }
                                        else if (spaceIndexArr_1.indexOf(index) !== -1) {
                                            chordRenderedResult_1.concat(' ' + resultKey);
                                        }
                                        else {
                                            chordRenderedResult_1.concat('+' + resultKey);
                                        }
                                    });
                                    item.labels[key] = chordRenderedResult_1;
                                }
                                item.labels[key] = renderedResult_1.join('+');
                                matched = true;
                            }
                        }
                    }
                }
            };
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    _loop_1(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (matched) {
                _this.items.push(item);
            }
        });
        this.update();
    };
    /**
     * Get the search input if available.
     * @returns the search input if available.
     */
    KeybindingWidget.prototype.findSearchField = function () {
        return document.getElementById('search-kb');
    };
    /**
     * Set the focus the search input field if available.
     */
    KeybindingWidget.prototype.focusInputField = function () {
        var input = document.getElementById('search-kb');
        if (input) {
            input.focus();
            input.select();
        }
    };
    /**
     * Render the view.
     */
    KeybindingWidget.prototype.render = function () {
        return React.createElement("div", { id: 'kb-main-container' },
            this.renderSearch(),
            (this.items.length > 0) ? this.renderTable() : this.renderMessage());
    };
    /**
     * Render the search container with the search input.
     */
    KeybindingWidget.prototype.renderSearch = function () {
        return React.createElement("div", null,
            React.createElement("div", { className: 'search-kb-container' },
                React.createElement("input", { id: 'search-kb', className: "theia-input" + ((this.items.length > 0) ? '' : ' no-kb'), type: 'text', placeholder: 'Search keybindings', autoComplete: 'off', onKeyUp: this.searchKeybindings })));
    };
    /**
     * Render the warning message when no search results are found.
     */
    KeybindingWidget.prototype.renderMessage = function () {
        return React.createElement(alert_message_1.AlertMessage, { type: 'WARNING', header: 'No results found!' });
    };
    /**
     * Render the keybindings table.
     */
    KeybindingWidget.prototype.renderTable = function () {
        return React.createElement("div", { id: 'kb-table-container' },
            React.createElement("div", { className: 'kb' },
                React.createElement("table", null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", { className: 'th-action' }),
                            React.createElement("th", { className: 'th-label' }, "Command"),
                            React.createElement("th", { className: 'th-keybinding' }, "Keybinding"),
                            React.createElement("th", { className: 'th-context' }, "Context / When"),
                            React.createElement("th", { className: 'th-source' }, "Source"))),
                    React.createElement("tbody", null, this.renderRows()))));
    };
    /**
     * Render the table rows.
     */
    KeybindingWidget.prototype.renderRows = function () {
        var _this = this;
        return React.createElement(React.Fragment, null, this.items.map(function (item, index) { return _this.renderRow(item, index); }));
    };
    KeybindingWidget.prototype.renderRow = function (item, index) {
        var _this = this;
        var command = item.command, keybinding = item.keybinding;
        // TODO get rid of array functions in event handlers
        return React.createElement("tr", { className: 'kb-item-row', key: index, onDoubleClick: function () { return _this.editKeybinding(item); } },
            React.createElement("td", { className: 'kb-actions' }, this.renderActions(item)),
            React.createElement("td", { className: 'kb-label', title: this.getCommandLabel(command) }, this.renderMatchedData(item.labels.command)),
            React.createElement("td", { title: this.getKeybindingLabel(keybinding), className: 'kb-keybinding monaco-keybinding' }, this.renderKeybinding(item.labels.keybinding)),
            React.createElement("td", { className: 'kb-context', title: this.getContextLabel(keybinding) },
                React.createElement("code", null, this.renderMatchedData(item.labels.context))),
            React.createElement("td", { className: 'kb-source', title: this.getScopeLabel(keybinding) },
                React.createElement("code", { className: 'td-source' }, this.renderMatchedData(item.labels.source))));
    };
    /**
     * Render the actions container with action icons.
     * @param item the keybinding item for the row.
     */
    KeybindingWidget.prototype.renderActions = function (item) {
        return React.createElement("span", { className: 'kb-actions-icons' },
            this.renderEdit(item),
            this.renderReset(item));
    };
    /**
     * Render the edit action used to update a keybinding.
     * @param item the keybinding item for the row.
     */
    KeybindingWidget.prototype.renderEdit = function (item) {
        var _this = this;
        return React.createElement("a", { title: 'Edit Keybinding', href: '#', onClick: function (a) { return _this.editKeybinding(item); } },
            React.createElement("i", { className: 'fa fa-pencil kb-action-item' }));
    };
    /**
     * Render the reset action to reset the custom keybinding.
     * Only visible if a keybinding has a `user` scope.
     * @param item the keybinding item for the row.
     */
    KeybindingWidget.prototype.renderReset = function (item) {
        var _this = this;
        return (item.keybinding && item.keybinding.scope === browser_1.KeybindingScope.USER)
            ? React.createElement("a", { title: 'Reset Keybinding', href: '#', onClick: function (a) { return _this.resetKeybinding(item); } },
                React.createElement("i", { className: 'fa fa-undo kb-action-item' })) : '';
    };
    /**
     * Render the keybinding.
     * @param keybinding the keybinding value.
     */
    KeybindingWidget.prototype.renderKeybinding = function (keybinding) {
        var _this = this;
        if (!keybinding.length) {
            return undefined;
        }
        var regex = new RegExp(this.keybindingSeparator);
        keybinding = keybinding.replace(regex, '+');
        var keys = keybinding.split('+');
        return React.createElement(React.Fragment, null, keys.map(function (key, index) {
            if (index === 0) {
                return React.createElement("span", { key: index, className: 'monaco-keybinding-key' }, _this.renderMatchedData(key));
            }
            else if (key.includes(' ')) {
                // Handle key chords, which have space as the separator
                // Example: `k Ctrl` in key chords `Ctrl+k Ctrl+p`
                var chordKeys = key.split('<match> </match>');
                if (chordKeys.length === 1) {
                    chordKeys = key.split(' ');
                }
                return React.createElement(React.Fragment, { key: index },
                    React.createElement("span", { className: 'monaco-keybinding-separator' }, "+"),
                    React.createElement("span", { className: 'monaco-keybinding-key' }, _this.renderKeybinding(chordKeys[0])),
                    React.createElement("span", { className: 'monaco-keybinding-separator' }, "\u00A0\u00A0"),
                    React.createElement("span", { className: 'monaco-keybinding-key' }, _this.renderKeybinding(chordKeys[1])));
            }
            else {
                return React.createElement(React.Fragment, { key: index },
                    React.createElement("span", { className: 'monaco-keybinding-separator' }, "+"),
                    React.createElement("span", { className: 'monaco-keybinding-key' }, _this.renderKeybinding(key)));
            }
        }));
    };
    /**
     * Get the list of keybinding items.
     *
     * @returns the list of keybinding items.
     */
    KeybindingWidget.prototype.getItems = function () {
        var _this = this;
        // Sort the commands alphabetically.
        var commands = this.commandRegistry.commands;
        var items = [];
        // Build the keybinding items.
        for (var i = 0; i < commands.length; i++) {
            var command = commands[i];
            // Skip internal commands prefixed by `_`.
            if (command.id.startsWith('_')) {
                continue;
            }
            var keybinding = this.keybindingRegistry.getKeybindingsForCommand(command.id)[0];
            items.push({
                command: command,
                keybinding: keybinding,
                labels: {
                    id: command.id,
                    command: this.getCommandLabel(command),
                    keybinding: this.getKeybindingLabel(keybinding) || '',
                    context: this.getContextLabel(keybinding) || '',
                    source: this.getScopeLabel(keybinding) || ''
                }
            });
        }
        // Sort the keybinding item by label.
        var sorted = items.sort(function (a, b) { return _this.compareItem(a.labels.id, b.labels.id); });
        // Get the list of keybinding item with keybindings (visually put them at the top of the table).
        var keyItems = sorted.filter(function (a) { return !!a.labels.keybinding; });
        // Get the remaining keybinding items (without keybindings).
        var otherItems = sorted.filter(function (a) { return !a.labels.keybinding; });
        // Return the list of keybinding items prioritizing those with a defined keybinding.
        return __spread(keyItems, otherItems);
    };
    KeybindingWidget.prototype.getCommandLabel = function (command) {
        return command.label || command.id;
    };
    KeybindingWidget.prototype.getKeybindingLabel = function (keybinding) {
        return keybinding && keybinding.keybinding;
    };
    KeybindingWidget.prototype.getContextLabel = function (keybinding) {
        return keybinding ? keybinding.context || keybinding.when : undefined;
    };
    KeybindingWidget.prototype.getScopeLabel = function (keybinding) {
        var scope = keybinding && keybinding.scope;
        if (scope !== undefined) {
            if (scope < browser_1.KeybindingScope.USER) {
                scope = browser_1.KeybindingScope.DEFAULT;
            }
            return browser_1.KeybindingScope[scope].toLocaleLowerCase();
        }
        return undefined;
    };
    /**
     * Compare two strings.
     * - Strings are first normalized before comparison (`toLowerCase`).
     * @param a the optional first string.
     * @param b the optional second string.
     *
     * @returns an integer indicating whether `a` comes before, after or is equivalent to `b`.
     * - returns `-1` if `a` occurs before `b`.
     * - returns `1` if `a` occurs after `b`.
     * - returns `0` if they are equivalent.
     */
    KeybindingWidget.prototype.compareItem = function (a, b) {
        if (a && b) {
            return (a.toLowerCase()).localeCompare(b.toLowerCase());
        }
        return 0;
    };
    /**
     * Prompt users to update the keybinding for the given command.
     * @param item the keybinding item.
     */
    KeybindingWidget.prototype.editKeybinding = function (item) {
        var _this = this;
        var command = item.command.id;
        var oldKeybinding = item.keybinding && item.keybinding.keybinding;
        var dialog = new EditKeybindingDialog({
            title: "Edit Keybinding For " + command,
            initialValue: oldKeybinding,
            validate: function (newKeybinding) { return _this.validateKeybinding(command, oldKeybinding, newKeybinding); },
        }, this.keymapsService, item);
        dialog.open().then(function (keybinding) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!keybinding) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.keymapsService.setKeybinding(__assign(__assign({}, item.keybinding), { command: command,
                                keybinding: keybinding }), oldKeybinding)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Prompt users for confirmation before resetting.
     * @param command the command label.
     *
     * @returns a Promise which resolves to `true` if a user accepts resetting.
     */
    KeybindingWidget.prototype.confirmResetKeybinding = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var dialog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = new browser_1.ConfirmDialog({
                            title: "Reset keybinding for '" + this.getCommandLabel(item.command) + "'",
                            msg: 'Do you really want to reset this keybinding to its default value?'
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 1: return [2 /*return*/, !!(_a.sent())];
                }
            });
        });
    };
    /**
     * Reset the keybinding to its default value.
     * @param item the keybinding item.
     */
    KeybindingWidget.prototype.resetKeybinding = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.confirmResetKeybinding(item)];
                    case 1:
                        confirmed = _a.sent();
                        if (confirmed) {
                            this.keymapsService.removeKeybinding(item.command.id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Validate the provided keybinding value against its previous value.
     * @param command the command label.
     * @param oldKeybinding the old keybinding value.
     * @param keybinding the new keybinding value.
     *
     * @returns the end user message to display.
     */
    KeybindingWidget.prototype.validateKeybinding = function (command, oldKeybinding, keybinding) {
        if (!keybinding) {
            return 'keybinding value is required';
        }
        try {
            var binding = { command: command, keybinding: keybinding };
            browser_1.KeySequence.parse(keybinding);
            if (oldKeybinding === keybinding) {
                return ' '; // if old and new keybindings match, quietly reject update
            }
            if (this.keybindingRegistry.containsKeybindingInScope(binding)) {
                return 'keybinding currently collides';
            }
            return '';
        }
        catch (error) {
            return error;
        }
    };
    /**
     * Build the cell data with highlights if applicable.
     * @param raw the raw cell value.
     *
     * @returns the list of cell data.
     */
    KeybindingWidget.prototype.buildCellData = function (raw) {
        var data = [];
        if (this.query === '') {
            return data;
        }
        var following = raw;
        var leading;
        var result;
        var regexp = new RegExp(this.regexp);
        while (result = regexp.exec(raw)) {
            var splitLeftIndex = following.indexOf(result[0]);
            var splitRightIndex = splitLeftIndex + result[0].length;
            leading = following.slice(0, splitLeftIndex);
            following = following.slice(splitRightIndex);
            if (leading) {
                data.push({ value: leading, highlighted: false });
            }
            data.push({ value: result[1], highlighted: true });
        }
        if (following) {
            data.push({ value: following, highlighted: false });
        }
        return data;
    };
    /**
     * Render the fuzzy representation of a matched result.
     * @param property one of the `KeybindingItem` properties.
     */
    KeybindingWidget.prototype.renderMatchedData = function (property) {
        if (this.query !== '') {
            var cellData = this.buildCellData(property);
            return React.createElement(React.Fragment, null, cellData.map(function (data, index) { return (data.highlighted) ? React.createElement("span", { key: index, className: 'fuzzy-match' }, data.value) : React.createElement("span", { key: index }, data.value); }));
        }
        else {
            return property;
        }
    };
    var KeybindingWidget_1;
    KeybindingWidget.ID = 'keybindings.view.widget';
    KeybindingWidget.LABEL = 'Keyboard Shortcuts';
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], KeybindingWidget.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_1.KeybindingRegistry),
        __metadata("design:type", browser_1.KeybindingRegistry)
    ], KeybindingWidget.prototype, "keybindingRegistry", void 0);
    __decorate([
        inversify_1.inject(keymaps_service_1.KeymapsService),
        __metadata("design:type", keymaps_service_1.KeymapsService)
    ], KeybindingWidget.prototype, "keymapsService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KeybindingWidget.prototype, "init", null);
    KeybindingWidget = KeybindingWidget_1 = __decorate([
        inversify_1.injectable()
    ], KeybindingWidget);
    return KeybindingWidget;
}(react_widget_1.ReactWidget));
exports.KeybindingWidget = KeybindingWidget;
/**
 * Dialog used to edit keybindings, and reset custom keybindings.
 */
var EditKeybindingDialog = /** @class */ (function (_super) {
    __extends(EditKeybindingDialog, _super);
    function EditKeybindingDialog(props, keymapsService, item) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        _this.keymapsService = keymapsService;
        _this.item = item;
        // Add the `Reset` button if the command currently has a custom keybinding.
        if (_this.item.keybinding && _this.item.keybinding.scope === browser_1.KeybindingScope.USER) {
            _this.appendResetButton();
        }
        return _this;
    }
    EditKeybindingDialog.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        if (this.resetButton) {
            this.addResetAction(this.resetButton, 'click');
        }
    };
    /**
     * Add `Reset` action used to reset a custom keybinding, and close the dialog.
     * @param element the HTML element in question.
     * @param additionalEventTypes additional event types.
     */
    EditKeybindingDialog.prototype.addResetAction = function (element) {
        var _this = this;
        var additionalEventTypes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additionalEventTypes[_i - 1] = arguments[_i];
        }
        this.addKeyListener.apply(this, __spread([element, browser_1.Key.ENTER, function () {
                _this.reset();
                _this.close();
            }], additionalEventTypes));
    };
    /**
     * Create the `Reset` button, and append it to the dialog.
     *
     * @returns the `Reset` button.
     */
    EditKeybindingDialog.prototype.appendResetButton = function () {
        // Create the `Reset` button.
        this.resetButton = this.createButton('Reset');
        // Add the `Reset` button to the dialog control panel, before the `Accept` button.
        this.controlPanel.insertBefore(this.resetButton, this.acceptButton);
        this.resetButton.title = 'Reset Keybinding';
        this.resetButton.classList.add('secondary');
        return this.resetButton;
    };
    /**
     * Perform keybinding reset.
     */
    EditKeybindingDialog.prototype.reset = function () {
        this.keymapsService.removeKeybinding(this.item.command.id);
    };
    EditKeybindingDialog = __decorate([
        __param(0, inversify_1.inject(browser_1.SingleTextInputDialogProps)),
        __param(1, inversify_1.inject(keymaps_service_1.KeymapsService)),
        __metadata("design:paramtypes", [browser_1.SingleTextInputDialogProps,
            keymaps_service_1.KeymapsService, Object])
    ], EditKeybindingDialog);
    return EditKeybindingDialog;
}(browser_1.SingleTextInputDialog));
//# sourceMappingURL=keybindings-widget.js.map