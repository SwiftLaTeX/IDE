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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("@theia/core/lib/browser");
var inversify_1 = require("inversify");
var search_in_workspace_result_tree_widget_1 = require("./search-in-workspace-result-tree-widget");
var React = require("react");
var ReactDOM = require("react-dom");
var common_1 = require("@theia/core/lib/common");
var browser_2 = require("@theia/workspace/lib/browser");
var search_in_workspace_context_key_service_1 = require("./search-in-workspace-context-key-service");
var progress_location_service_1 = require("@theia/core/lib/browser/progress-location-service");
var progress_bar_1 = require("@theia/core/lib/browser/progress-bar");
var SearchInWorkspaceWidget = /** @class */ (function (_super) {
    __extends(SearchInWorkspaceWidget, _super);
    function SearchInWorkspaceWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showSearchDetails = false;
        _this._hasResults = false;
        _this.resultNumber = 0;
        _this.searchFieldContainerIsFocused = false;
        _this.searchTerm = '';
        _this.replaceTerm = '';
        _this._showReplaceField = false;
        _this.onDidUpdateEmitter = new common_1.Emitter();
        _this.onDidUpdate = _this.onDidUpdateEmitter.event;
        _this.focusSearchFieldContainer = function () { return _this.doFocusSearchFieldContainer(); };
        _this.unfocusSearchFieldContainer = function () { return _this.doUnfocusSearchFieldContainer(); };
        _this.search = function (e) { return _this.doSearch(e); };
        _this.handleFocusSearchInputBox = function () { return _this.contextKeyService.setSearchInputBoxFocus(true); };
        _this.handleBlurSearchInputBox = function () { return _this.contextKeyService.setSearchInputBoxFocus(false); };
        _this.updateReplaceTerm = function (e) { return _this.doUpdateReplaceTerm(e); };
        _this.handleFocusReplaceInputBox = function () { return _this.contextKeyService.setReplaceInputBoxFocus(true); };
        _this.handleBlurReplaceInputBox = function () { return _this.contextKeyService.setReplaceInputBoxFocus(false); };
        _this.handleFocusIncludesInputBox = function () { return _this.contextKeyService.setPatternExcludesInputBoxFocus(true); };
        _this.handleBlurIncludesInputBox = function () { return _this.contextKeyService.setPatternExcludesInputBoxFocus(false); };
        _this.handleFocusExcludesInputBox = function () { return _this.contextKeyService.setPatternExcludesInputBoxFocus(true); };
        _this.handleBlurExcludesInputBox = function () { return _this.contextKeyService.setPatternExcludesInputBoxFocus(false); };
        return _this;
    }
    SearchInWorkspaceWidget_1 = SearchInWorkspaceWidget;
    Object.defineProperty(SearchInWorkspaceWidget.prototype, "hasResults", {
        get: function () {
            return this._hasResults;
        },
        set: function (hasResults) {
            this.contextKeyService.hasSearchResult.set(hasResults);
            this._hasResults = hasResults;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceWidget.prototype, "showReplaceField", {
        get: function () {
            return this._showReplaceField;
        },
        set: function (showReplaceField) {
            this.contextKeyService.replaceActive.set(showReplaceField);
            this._showReplaceField = showReplaceField;
        },
        enumerable: true,
        configurable: true
    });
    SearchInWorkspaceWidget.prototype.init = function () {
        var _this = this;
        this.id = SearchInWorkspaceWidget_1.ID;
        this.title.label = SearchInWorkspaceWidget_1.LABEL;
        this.title.caption = SearchInWorkspaceWidget_1.LABEL;
        this.title.iconClass = 'search-in-workspace-tab-icon';
        this.title.closable = true;
        this.contentNode = document.createElement('div');
        this.contentNode.classList.add('t-siw-search-container');
        this.searchFormContainer = document.createElement('div');
        this.searchFormContainer.classList.add('searchHeader');
        this.contentNode.appendChild(this.searchFormContainer);
        this.node.appendChild(this.contentNode);
        this.matchCaseState = {
            className: 'match-case',
            enabled: false,
            title: 'Match Case'
        };
        this.wholeWordState = {
            className: 'whole-word',
            enabled: false,
            title: 'Match Whole Word'
        };
        this.regExpState = {
            className: 'use-regexp',
            enabled: false,
            title: 'Use Regular Expression'
        };
        this.includeIgnoredState = {
            className: 'include-ignored fa fa-eye',
            enabled: false,
            title: 'Include Ignored Files'
        };
        this.searchInWorkspaceOptions = {
            matchCase: false,
            matchWholeWord: false,
            useRegExp: false,
            includeIgnored: false,
            include: [],
            exclude: [],
            maxResults: 2000
        };
        this.toDispose.push(this.resultTreeWidget.onChange(function (r) {
            _this.hasResults = r.size > 0;
            _this.resultNumber = 0;
            var results = Array.from(r.values());
            results.forEach(function (rootFolder) {
                return rootFolder.children.forEach(function (file) { return _this.resultNumber += file.children.length; });
            });
            _this.update();
        }));
        this.toDispose.push(this.resultTreeWidget.onFocusInput(function (b) {
            _this.focusInputField();
        }));
        this.toDispose.push(this.resultTreeWidget);
        var onProgress = this.progressLocationService.onProgress('search');
        this.toDispose.push(new progress_bar_1.ProgressBar({ container: this.node, insertMode: 'prepend' }, onProgress));
    };
    SearchInWorkspaceWidget.prototype.storeState = function () {
        return {
            matchCaseState: this.matchCaseState,
            wholeWordState: this.wholeWordState,
            regExpState: this.regExpState,
            includeIgnoredState: this.includeIgnoredState,
            showSearchDetails: this.showSearchDetails,
            searchInWorkspaceOptions: this.searchInWorkspaceOptions,
            searchTerm: this.searchTerm,
            replaceTerm: this.replaceTerm,
            showReplaceField: this.showReplaceField
        };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SearchInWorkspaceWidget.prototype.restoreState = function (oldState) {
        this.matchCaseState = oldState.matchCaseState;
        this.wholeWordState = oldState.wholeWordState;
        this.regExpState = oldState.regExpState;
        this.includeIgnoredState = oldState.includeIgnoredState;
        this.showSearchDetails = oldState.showSearchDetails;
        this.searchInWorkspaceOptions = oldState.searchInWorkspaceOptions;
        this.searchTerm = oldState.searchTerm;
        this.replaceTerm = oldState.replaceTerm;
        this.showReplaceField = oldState.showReplaceField;
        this.resultTreeWidget.replaceTerm = this.replaceTerm;
        this.resultTreeWidget.showReplaceButtons = this.showReplaceField;
        this.refresh();
    };
    SearchInWorkspaceWidget.prototype.findInFolder = function (uris) {
        this.showSearchDetails = true;
        var values = Array.from(new Set(uris.map(function (uri) { return uri + "/**"; })));
        var value = values.join(', ');
        this.searchInWorkspaceOptions.include = values;
        var include = document.getElementById('include-glob-field');
        if (include) {
            include.value = value;
        }
        this.update();
    };
    /**
     * Update the search term and input field.
     * @param term the search term.
     */
    SearchInWorkspaceWidget.prototype.updateSearchTerm = function (term) {
        this.searchTerm = term;
        var search = document.getElementById('search-input-field');
        if (search) {
            search.value = term;
        }
        this.refresh();
    };
    SearchInWorkspaceWidget.prototype.hasResultList = function () {
        return this.hasResults;
    };
    SearchInWorkspaceWidget.prototype.hasSearchTerm = function () {
        return this.searchTerm !== '';
    };
    SearchInWorkspaceWidget.prototype.refresh = function () {
        this.resultTreeWidget.search(this.searchTerm, this.searchInWorkspaceOptions);
        this.update();
    };
    SearchInWorkspaceWidget.prototype.getCancelIndicator = function () {
        return this.resultTreeWidget.cancelIndicator;
    };
    SearchInWorkspaceWidget.prototype.collapseAll = function () {
        this.resultTreeWidget.collapseAll();
        this.update();
    };
    SearchInWorkspaceWidget.prototype.clear = function () {
        this.searchTerm = '';
        this.replaceTerm = '';
        this.searchInWorkspaceOptions.include = [];
        this.searchInWorkspaceOptions.exclude = [];
        this.includeIgnoredState.enabled = false;
        this.matchCaseState.enabled = false;
        this.wholeWordState.enabled = false;
        this.regExpState.enabled = false;
        var search = document.getElementById('search-input-field');
        var replace = document.getElementById('replace-input-field');
        var include = document.getElementById('include-glob-field');
        var exclude = document.getElementById('exclude-glob-field');
        if (search && replace && include && exclude) {
            search.value = '';
            replace.value = '';
            include.value = '';
            exclude.value = '';
        }
        this.resultTreeWidget.search(this.searchTerm, this.searchInWorkspaceOptions);
        this.update();
    };
    SearchInWorkspaceWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        ReactDOM.render(React.createElement(React.Fragment, null,
            this.renderSearchHeader(),
            this.renderSearchInfo()), this.searchFormContainer);
        browser_1.Widget.attach(this.resultTreeWidget, this.contentNode);
        this.toDisposeOnDetach.push(common_1.Disposable.create(function () {
            browser_1.Widget.detach(_this.resultTreeWidget);
        }));
    };
    SearchInWorkspaceWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        var searchInfo = this.renderSearchInfo();
        if (searchInfo) {
            ReactDOM.render(React.createElement(React.Fragment, null,
                this.renderSearchHeader(),
                searchInfo), this.searchFormContainer);
            this.onDidUpdateEmitter.fire(undefined);
        }
    };
    SearchInWorkspaceWidget.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        browser_1.MessageLoop.sendMessage(this.resultTreeWidget, browser_1.Widget.ResizeMessage.UnknownSize);
    };
    SearchInWorkspaceWidget.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.focusInputField();
        this.contextKeyService.searchViewletVisible.set(true);
    };
    SearchInWorkspaceWidget.prototype.onAfterHide = function (msg) {
        _super.prototype.onAfterHide.call(this, msg);
        this.contextKeyService.searchViewletVisible.set(false);
    };
    SearchInWorkspaceWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.focusInputField();
    };
    SearchInWorkspaceWidget.prototype.focusInputField = function () {
        var f = document.getElementById('search-input-field');
        if (f) {
            f.focus();
            f.select();
        }
    };
    SearchInWorkspaceWidget.prototype.renderSearchHeader = function () {
        var searchAndReplaceContainer = this.renderSearchAndReplace();
        var searchDetails = this.renderSearchDetails();
        return React.createElement("div", null,
            searchAndReplaceContainer,
            searchDetails);
    };
    SearchInWorkspaceWidget.prototype.renderSearchAndReplace = function () {
        var toggleContainer = this.renderReplaceFieldToggle();
        var searchField = this.renderSearchField();
        var replaceField = this.renderReplaceField();
        return React.createElement("div", { className: 'search-and-replace-container' },
            toggleContainer,
            React.createElement("div", { className: 'search-and-replace-fields' },
                searchField,
                replaceField));
    };
    SearchInWorkspaceWidget.prototype.renderReplaceFieldToggle = function () {
        var _this = this;
        var toggle = React.createElement("span", { className: "fa fa-caret-" + (this.showReplaceField ? 'down' : 'right') });
        return React.createElement("div", { title: 'Toggle Replace', className: 'replace-toggle', tabIndex: 0, onClick: function (e) {
                var elArr = document.getElementsByClassName('replace-toggle');
                if (elArr && elArr.length > 0) {
                    elArr[0].focus();
                }
                _this.showReplaceField = !_this.showReplaceField;
                _this.resultTreeWidget.showReplaceButtons = _this.showReplaceField;
                _this.update();
            } }, toggle);
    };
    SearchInWorkspaceWidget.prototype.renderNotification = function () {
        if (this.workspaceService.tryGetRoots().length <= 0) {
            return React.createElement("div", { className: 'search-notification show' },
                React.createElement("div", null, "Cannot search without an active workspace present."));
        }
        return React.createElement("div", { className: "search-notification " + (this.searchInWorkspaceOptions.maxResults && this.resultNumber >= this.searchInWorkspaceOptions.maxResults ? 'show' : '') },
            React.createElement("div", null, "This is only a subset of all results. Use a more specific search term to narrow down the result list."));
    };
    SearchInWorkspaceWidget.prototype.doFocusSearchFieldContainer = function () {
        this.searchFieldContainerIsFocused = true;
        this.update();
    };
    SearchInWorkspaceWidget.prototype.doUnfocusSearchFieldContainer = function () {
        this.searchFieldContainerIsFocused = false;
        this.update();
    };
    SearchInWorkspaceWidget.prototype.doSearch = function (e) {
        if (e.target) {
            if (browser_1.Key.ARROW_DOWN.keyCode === e.keyCode) {
                this.resultTreeWidget.focusFirstResult();
            }
            else {
                this.searchTerm = e.target.value;
                this.resultTreeWidget.search(this.searchTerm, (this.searchInWorkspaceOptions || {}));
            }
        }
    };
    SearchInWorkspaceWidget.prototype.renderSearchField = function () {
        var input = React.createElement("input", { id: 'search-input-field', className: 'theia-input', title: 'Search', type: 'text', size: 1, placeholder: 'Search', defaultValue: this.searchTerm, autoComplete: 'off', onKeyUp: this.search, onFocus: this.handleFocusSearchInputBox, onBlur: this.handleBlurSearchInputBox });
        var notification = this.renderNotification();
        var optionContainer = this.renderOptionContainer();
        var tooMany = this.searchInWorkspaceOptions.maxResults && this.resultNumber >= this.searchInWorkspaceOptions.maxResults ? 'tooManyResults' : '';
        var className = "search-field-container " + tooMany + " " + (this.searchFieldContainerIsFocused ? 'focused' : '');
        return React.createElement("div", { className: className },
            React.createElement("div", { className: 'search-field', tabIndex: -1, onFocus: this.focusSearchFieldContainer, onBlur: this.unfocusSearchFieldContainer },
                input,
                optionContainer),
            notification);
    };
    SearchInWorkspaceWidget.prototype.doUpdateReplaceTerm = function (e) {
        if (e.target) {
            this.replaceTerm = e.target.value;
            this.resultTreeWidget.replaceTerm = this.replaceTerm;
            this.resultTreeWidget.search(this.searchTerm, (this.searchInWorkspaceOptions || {}));
            this.update();
        }
    };
    SearchInWorkspaceWidget.prototype.renderReplaceField = function () {
        var replaceAllButtonContainer = this.renderReplaceAllButtonContainer();
        return React.createElement("div", { className: "replace-field" + (this.showReplaceField ? '' : ' hidden') },
            React.createElement("input", { id: 'replace-input-field', className: 'theia-input', title: 'Replace', type: 'text', size: 1, placeholder: 'Replace', defaultValue: this.replaceTerm, onKeyUp: this.updateReplaceTerm, onFocus: this.handleFocusReplaceInputBox, onBlur: this.handleBlurReplaceInputBox }),
            replaceAllButtonContainer);
    };
    SearchInWorkspaceWidget.prototype.renderReplaceAllButtonContainer = function () {
        var _this = this;
        // The `Replace All` button is enabled if there is a search term present with results.
        var enabled = this.searchTerm !== '' && this.resultNumber > 0;
        return React.createElement("div", { className: 'replace-all-button-container' },
            React.createElement("span", { title: 'Replace All', className: "replace-all-button" + (enabled ? ' ' : ' disabled'), onClick: function () {
                    if (enabled) {
                        _this.resultTreeWidget.replace(undefined);
                    }
                } }));
    };
    SearchInWorkspaceWidget.prototype.renderOptionContainer = function () {
        var matchCaseOption = this.renderOptionElement(this.matchCaseState);
        var wholeWordOption = this.renderOptionElement(this.wholeWordState);
        var regexOption = this.renderOptionElement(this.regExpState);
        var includeIgnoredOption = this.renderOptionElement(this.includeIgnoredState);
        return React.createElement("div", { className: 'option-buttons' },
            matchCaseOption,
            wholeWordOption,
            regexOption,
            includeIgnoredOption);
    };
    SearchInWorkspaceWidget.prototype.renderOptionElement = function (opt) {
        var _this = this;
        return React.createElement("span", { className: opt.className + " option " + (opt.enabled ? 'enabled' : ''), title: opt.title, onClick: function () { return _this.handleOptionClick(opt); } });
    };
    SearchInWorkspaceWidget.prototype.handleOptionClick = function (option) {
        option.enabled = !option.enabled;
        this.updateSearchOptions();
        this.searchFieldContainerIsFocused = true;
        this.resultTreeWidget.search(this.searchTerm, this.searchInWorkspaceOptions);
        this.update();
    };
    SearchInWorkspaceWidget.prototype.updateSearchOptions = function () {
        this.searchInWorkspaceOptions.matchCase = this.matchCaseState.enabled;
        this.searchInWorkspaceOptions.matchWholeWord = this.wholeWordState.enabled;
        this.searchInWorkspaceOptions.useRegExp = this.regExpState.enabled;
        this.searchInWorkspaceOptions.includeIgnored = this.includeIgnoredState.enabled;
    };
    SearchInWorkspaceWidget.prototype.renderSearchDetails = function () {
        var expandButton = this.renderExpandGlobFieldsButton();
        var globFieldContainer = this.renderGlobFieldContainer();
        return React.createElement("div", { className: 'search-details' },
            expandButton,
            globFieldContainer);
    };
    SearchInWorkspaceWidget.prototype.renderGlobFieldContainer = function () {
        var includeField = this.renderGlobField('include');
        var excludeField = this.renderGlobField('exclude');
        return React.createElement("div", { className: "glob-field-container" + (!this.showSearchDetails ? ' hidden' : '') },
            includeField,
            excludeField);
    };
    SearchInWorkspaceWidget.prototype.renderExpandGlobFieldsButton = function () {
        var _this = this;
        return React.createElement("div", { className: 'button-container' },
            React.createElement("span", { title: 'Toggle Search Details', className: 'fa fa-ellipsis-h btn', onClick: function () {
                    _this.showSearchDetails = !_this.showSearchDetails;
                    _this.update();
                } }));
    };
    SearchInWorkspaceWidget.prototype.renderGlobField = function (kind) {
        var _this = this;
        var currentValue = this.searchInWorkspaceOptions[kind];
        var value = currentValue && currentValue.join(', ') || '';
        return React.createElement("div", { className: 'glob-field' },
            React.createElement("div", { className: 'label' }, 'files to ' + kind),
            React.createElement("input", { className: 'theia-input', type: 'text', size: 1, defaultValue: value, id: kind + '-glob-field', onKeyUp: function (e) {
                    if (e.target) {
                        if (browser_1.Key.ENTER.keyCode === e.keyCode) {
                            _this.resultTreeWidget.search(_this.searchTerm, _this.searchInWorkspaceOptions);
                        }
                        else {
                            _this.searchInWorkspaceOptions[kind] = _this.splitOnComma(e.target.value);
                        }
                    }
                }, onFocus: kind === 'include' ? this.handleFocusIncludesInputBox : this.handleFocusExcludesInputBox, onBlur: kind === 'include' ? this.handleBlurIncludesInputBox : this.handleBlurExcludesInputBox }));
    };
    SearchInWorkspaceWidget.prototype.splitOnComma = function (patterns) {
        return patterns.length > 0 ? patterns.split(',').map(function (s) { return s.trim(); }) : [];
    };
    SearchInWorkspaceWidget.prototype.renderSearchInfo = function () {
        var message = '';
        if (this.searchTerm) {
            if (this.searchInWorkspaceOptions.include && this.searchInWorkspaceOptions.include.length > 0 && this.resultNumber === 0) {
                message = "No results found in '" + this.searchInWorkspaceOptions.include + "'";
            }
            else if (this.resultNumber === 0) {
                message = 'No results found.';
            }
            else {
                if (this.resultNumber === 1 && this.resultTreeWidget.fileNumber === 1) {
                    message = this.resultNumber + " result in " + this.resultTreeWidget.fileNumber + " file";
                }
                else if (this.resultTreeWidget.fileNumber === 1) {
                    message = this.resultNumber + " results in " + this.resultTreeWidget.fileNumber + " file";
                }
                else if (this.resultTreeWidget.fileNumber > 0) {
                    message = this.resultNumber + " results in " + this.resultTreeWidget.fileNumber + " files";
                }
                else {
                    // if fileNumber === 0, return undefined so that `onUpdateRequest()` would not re-render component
                    return undefined;
                }
            }
        }
        return React.createElement("div", { className: 'search-info' }, message);
    };
    var SearchInWorkspaceWidget_1;
    SearchInWorkspaceWidget.ID = 'search-in-workspace';
    SearchInWorkspaceWidget.LABEL = 'Search';
    __decorate([
        inversify_1.inject(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget),
        __metadata("design:type", search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget)
    ], SearchInWorkspaceWidget.prototype, "resultTreeWidget", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], SearchInWorkspaceWidget.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(search_in_workspace_context_key_service_1.SearchInWorkspaceContextKeyService),
        __metadata("design:type", search_in_workspace_context_key_service_1.SearchInWorkspaceContextKeyService)
    ], SearchInWorkspaceWidget.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(progress_location_service_1.ProgressLocationService),
        __metadata("design:type", progress_location_service_1.ProgressLocationService)
    ], SearchInWorkspaceWidget.prototype, "progressLocationService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchInWorkspaceWidget.prototype, "init", null);
    SearchInWorkspaceWidget = SearchInWorkspaceWidget_1 = __decorate([
        inversify_1.injectable()
    ], SearchInWorkspaceWidget);
    return SearchInWorkspaceWidget;
}(browser_1.BaseWidget));
exports.SearchInWorkspaceWidget = SearchInWorkspaceWidget;
//# sourceMappingURL=search-in-workspace-widget.js.map