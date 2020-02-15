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
/* eslint-disable max-len, @typescript-eslint/indent */
var debounce = require("lodash.debounce");
var inversify_1 = require("inversify");
var widgets_1 = require("@phosphor/widgets");
var menu_1 = require("../common/menu");
var command_1 = require("../common/command");
var uri_command_handler_1 = require("../common/uri-command-handler");
var selection_service_1 = require("../common/selection-service");
var message_service_1 = require("../common/message-service");
var opener_service_1 = require("../browser/opener-service");
var application_shell_1 = require("./shell/application-shell");
var tab_bars_1 = require("./shell/tab-bars");
var about_dialog_1 = require("./about-dialog");
var browser = require("./browser");
var context_key_service_1 = require("./context-key-service");
var os_1 = require("../common/os");
var resource_context_key_1 = require("./resource-context-key");
var selection_1 = require("../common/selection");
var storage_service_1 = require("./storage-service");
var navigatable_1 = require("./navigatable");
var quick_view_service_1 = require("./quick-view-service");
var quick_open_1 = require("./quick-open");
var environment_1 = require("@theia/application-package/lib/environment");
var icon_theme_service_1 = require("./icon-theme-service");
var color_registry_1 = require("./color-registry");
var core_preferences_1 = require("./core-preferences");
var theming_1 = require("./theming");
var preferences_1 = require("./preferences");
var CommonMenus;
(function (CommonMenus) {
    CommonMenus.FILE = __spread(menu_1.MAIN_MENU_BAR, ['1_file']);
    CommonMenus.FILE_NEW = __spread(CommonMenus.FILE, ['1_new']);
    CommonMenus.FILE_OPEN = __spread(CommonMenus.FILE, ['2_open']);
    CommonMenus.FILE_SAVE = __spread(CommonMenus.FILE, ['3_save']);
    CommonMenus.FILE_AUTOSAVE = __spread(CommonMenus.FILE, ['4_autosave']);
    CommonMenus.FILE_SETTINGS = __spread(CommonMenus.FILE, ['5_settings']);
    CommonMenus.FILE_SETTINGS_SUBMENU = __spread(CommonMenus.FILE_SETTINGS, ['1_settings_submenu']);
    CommonMenus.FILE_SETTINGS_SUBMENU_OPEN = __spread(CommonMenus.FILE_SETTINGS_SUBMENU, ['1_settings_submenu_open']);
    CommonMenus.FILE_SETTINGS_SUBMENU_THEME = __spread(CommonMenus.FILE_SETTINGS_SUBMENU, ['2_settings_submenu_theme']);
    CommonMenus.FILE_CLOSE = __spread(CommonMenus.FILE, ['6_close']);
    CommonMenus.EDIT = __spread(menu_1.MAIN_MENU_BAR, ['2_edit']);
    CommonMenus.EDIT_UNDO = __spread(CommonMenus.EDIT, ['1_undo']);
    CommonMenus.EDIT_CLIPBOARD = __spread(CommonMenus.EDIT, ['2_clipboard']);
    CommonMenus.EDIT_FIND = __spread(CommonMenus.EDIT, ['3_find']);
    CommonMenus.VIEW = __spread(menu_1.MAIN_MENU_BAR, ['4_view']);
    CommonMenus.VIEW_PRIMARY = __spread(CommonMenus.VIEW, ['0_primary']);
    CommonMenus.VIEW_VIEWS = __spread(CommonMenus.VIEW, ['1_views']);
    CommonMenus.VIEW_LAYOUT = __spread(CommonMenus.VIEW, ['2_layout']);
    CommonMenus.VIEW_TOGGLE = __spread(CommonMenus.VIEW, ['3_toggle']);
    // last menu item
    CommonMenus.HELP = __spread(menu_1.MAIN_MENU_BAR, ['9_help']);
})(CommonMenus = exports.CommonMenus || (exports.CommonMenus = {}));
var CommonCommands;
(function (CommonCommands) {
    var FILE_CATEGORY = 'File';
    var VIEW_CATEGORY = 'View';
    CommonCommands.OPEN = {
        id: 'core.open',
        category: FILE_CATEGORY,
        label: 'Open',
    };
    CommonCommands.CUT = {
        id: 'core.cut',
        label: 'Cut'
    };
    CommonCommands.COPY = {
        id: 'core.copy',
        label: 'Copy'
    };
    CommonCommands.PASTE = {
        id: 'core.paste',
        label: 'Paste'
    };
    CommonCommands.UNDO = {
        id: 'core.undo',
        label: 'Undo'
    };
    CommonCommands.REDO = {
        id: 'core.redo',
        label: 'Redo'
    };
    CommonCommands.FIND = {
        id: 'core.find',
        label: 'Find'
    };
    CommonCommands.REPLACE = {
        id: 'core.replace',
        label: 'Replace'
    };
    CommonCommands.NEXT_TAB = {
        id: 'core.nextTab',
        category: VIEW_CATEGORY,
        label: 'Switch to Next Tab'
    };
    CommonCommands.PREVIOUS_TAB = {
        id: 'core.previousTab',
        category: VIEW_CATEGORY,
        label: 'Switch to Previous Tab'
    };
    CommonCommands.CLOSE_TAB = {
        id: 'core.close.tab',
        category: VIEW_CATEGORY,
        label: 'Close Tab'
    };
    CommonCommands.CLOSE_OTHER_TABS = {
        id: 'core.close.other.tabs',
        category: VIEW_CATEGORY,
        label: 'Close Other Tabs'
    };
    CommonCommands.CLOSE_RIGHT_TABS = {
        id: 'core.close.right.tabs',
        category: VIEW_CATEGORY,
        label: 'Close Tabs to the Right'
    };
    CommonCommands.CLOSE_ALL_TABS = {
        id: 'core.close.all.tabs',
        category: VIEW_CATEGORY,
        label: 'Close All Tabs'
    };
    CommonCommands.CLOSE_MAIN_TAB = {
        id: 'core.close.main.tab',
        category: VIEW_CATEGORY,
        label: 'Close Tab in Main Area'
    };
    CommonCommands.CLOSE_OTHER_MAIN_TABS = {
        id: 'core.close.other.main.tabs',
        category: VIEW_CATEGORY,
        label: 'Close Other Tabs in Main Area'
    };
    CommonCommands.CLOSE_ALL_MAIN_TABS = {
        id: 'core.close.all.main.tabs',
        category: VIEW_CATEGORY,
        label: 'Close All Tabs in Main Area'
    };
    CommonCommands.COLLAPSE_PANEL = {
        id: 'core.collapse.tab',
        category: VIEW_CATEGORY,
        label: 'Collapse Side Panel'
    };
    CommonCommands.COLLAPSE_ALL_PANELS = {
        id: 'core.collapse.all.tabs',
        category: VIEW_CATEGORY,
        label: 'Collapse All Side Panels'
    };
    CommonCommands.TOGGLE_BOTTOM_PANEL = {
        id: 'core.toggle.bottom.panel',
        category: VIEW_CATEGORY,
        label: 'Toggle Bottom Panel'
    };
    CommonCommands.TOGGLE_MAXIMIZED = {
        id: 'core.toggleMaximized',
        category: VIEW_CATEGORY,
        label: 'Toggle Maximized'
    };
    CommonCommands.OPEN_VIEW = {
        id: 'core.openView',
        category: VIEW_CATEGORY,
        label: 'Open View...'
    };
    CommonCommands.SAVE = {
        id: 'core.save',
        category: FILE_CATEGORY,
        label: 'Save',
    };
    CommonCommands.SAVE_ALL = {
        id: 'core.saveAll',
        category: FILE_CATEGORY,
        label: 'Save All',
    };
    CommonCommands.AUTO_SAVE = {
        id: 'textEditor.commands.autosave',
        category: FILE_CATEGORY,
        label: 'Auto Save',
    };
    CommonCommands.QUIT = {
        id: 'core.quit',
        label: 'Quit'
    };
    CommonCommands.ABOUT_COMMAND = {
        id: 'core.about',
        label: 'About'
    };
    CommonCommands.OPEN_PREFERENCES = {
        id: 'preferences:open',
        category: 'Settings',
        label: 'Open Preferences',
    };
    CommonCommands.SELECT_COLOR_THEME = {
        id: 'workbench.action.selectTheme',
        label: 'Color Theme',
        category: 'Preferences'
    };
    CommonCommands.SELECT_ICON_THEME = {
        id: 'workbench.action.selectIconTheme',
        label: 'File Icon Theme',
        category: 'Preferences'
    };
})(CommonCommands = exports.CommonCommands || (exports.CommonCommands = {}));
exports.supportCut = browser.isNative || document.queryCommandSupported('cut');
exports.supportCopy = browser.isNative || document.queryCommandSupported('copy');
// Chrome incorrectly returns true for document.queryCommandSupported('paste')
// when the paste feature is available but the calling script has insufficient
// privileges to actually perform the action
exports.supportPaste = browser.isNative || (!browser.isChrome && document.queryCommandSupported('paste'));
exports.RECENT_COMMANDS_STORAGE_KEY = 'commands';
var CommonFrontendContribution = /** @class */ (function () {
    function CommonFrontendContribution(shell, selectionService, messageService, openerService, aboutDialog) {
        this.shell = shell;
        this.selectionService = selectionService;
        this.messageService = messageService;
        this.openerService = openerService;
        this.aboutDialog = aboutDialog;
        this.shouldPreventClose = false;
    }
    CommonFrontendContribution.prototype.init = function () {
        var _this = this;
        this.contextKeyService.createKey('isLinux', os_1.OS.type() === os_1.OS.Type.Linux);
        this.contextKeyService.createKey('isMac', os_1.OS.type() === os_1.OS.Type.OSX);
        this.contextKeyService.createKey('isWindows', os_1.OS.type() === os_1.OS.Type.Windows);
        this.initResourceContextKeys();
        this.registerCtrlWHandling();
        this.updateStyles();
        this.updateThemeFromPreference('workbench.colorTheme');
        this.updateThemeFromPreference('workbench.iconTheme');
        this.preferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'workbench.editor.highlightModifiedTabs') {
                _this.updateStyles();
            }
            else if (e.preferenceName === 'workbench.colorTheme' || e.preferenceName === 'workbench.iconTheme') {
                _this.updateThemeFromPreference(e.preferenceName);
            }
        });
        this.themeService.onThemeChange(function () { return _this.updateThemePreference('workbench.colorTheme'); });
        this.iconThemes.onDidChangeCurrent(function () { return _this.updateThemePreference('workbench.iconTheme'); });
    };
    CommonFrontendContribution.prototype.updateStyles = function () {
        document.body.classList.remove('theia-editor-highlightModifiedTabs');
        if (this.preferences['workbench.editor.highlightModifiedTabs']) {
            document.body.classList.add('theia-editor-highlightModifiedTabs');
        }
    };
    CommonFrontendContribution.prototype.updateThemePreference = function (preferenceName) {
        var inspect = this.preferenceService.inspect(preferenceName);
        var workspaceValue = inspect && inspect.workspaceValue;
        var userValue = inspect && inspect.globalValue;
        var value = workspaceValue || userValue;
        var newValue = preferenceName === 'workbench.colorTheme' ? this.themeService.getCurrentTheme().id : this.iconThemes.current;
        if (newValue !== value) {
            var scope = workspaceValue !== undefined ? preferences_1.PreferenceScope.Workspace : preferences_1.PreferenceScope.User;
            this.preferenceService.set(preferenceName, newValue, scope);
        }
    };
    CommonFrontendContribution.prototype.updateThemeFromPreference = function (preferenceName) {
        var value = this.preferences[preferenceName];
        if (value !== undefined) {
            if (preferenceName === 'workbench.colorTheme') {
                if (!value) {
                    this.themeService.reset();
                }
                else {
                    this.themeService.setCurrentTheme(value);
                }
            }
            else {
                this.iconThemes.current = value || 'none';
            }
        }
    };
    CommonFrontendContribution.prototype.onStart = function () {
        var _this = this;
        this.storageService.getData(exports.RECENT_COMMANDS_STORAGE_KEY, { recent: [] })
            .then(function (tasks) { return _this.commandRegistry.recent = tasks.recent; });
    };
    CommonFrontendContribution.prototype.onStop = function () {
        var recent = this.commandRegistry.recent;
        this.storageService.setData(exports.RECENT_COMMANDS_STORAGE_KEY, { recent: recent });
    };
    CommonFrontendContribution.prototype.initResourceContextKeys = function () {
        var _this = this;
        var updateContextKeys = function () {
            var selection = _this.selectionService.selection;
            var resourceUri = navigatable_1.Navigatable.is(selection) && selection.getResourceUri() || selection_1.UriSelection.getUri(selection);
            _this.resourceContextKey.set(resourceUri);
        };
        updateContextKeys();
        this.selectionService.onSelectionChanged(updateContextKeys);
    };
    CommonFrontendContribution.prototype.registerMenus = function (registry) {
        registry.registerSubmenu(CommonMenus.FILE, 'File');
        registry.registerSubmenu(CommonMenus.EDIT, 'Edit');
        registry.registerSubmenu(CommonMenus.VIEW, 'View');
        registry.registerSubmenu(CommonMenus.HELP, 'Help');
        registry.registerMenuAction(CommonMenus.FILE_SAVE, {
            commandId: CommonCommands.SAVE.id
        });
        registry.registerMenuAction(CommonMenus.FILE_SAVE, {
            commandId: CommonCommands.SAVE_ALL.id
        });
        registry.registerMenuAction(CommonMenus.FILE_AUTOSAVE, {
            commandId: CommonCommands.AUTO_SAVE.id
        });
        registry.registerSubmenu(CommonMenus.FILE_SETTINGS_SUBMENU, 'Settings');
        registry.registerMenuAction(CommonMenus.EDIT_UNDO, {
            commandId: CommonCommands.UNDO.id,
            order: '0'
        });
        registry.registerMenuAction(CommonMenus.EDIT_UNDO, {
            commandId: CommonCommands.REDO.id,
            order: '1'
        });
        registry.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: CommonCommands.FIND.id,
            order: '0'
        });
        registry.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: CommonCommands.REPLACE.id,
            order: '1'
        });
        registry.registerMenuAction(CommonMenus.EDIT_CLIPBOARD, {
            commandId: CommonCommands.CUT.id,
            order: '0'
        });
        registry.registerMenuAction(CommonMenus.EDIT_CLIPBOARD, {
            commandId: CommonCommands.COPY.id,
            order: '1'
        });
        registry.registerMenuAction(CommonMenus.EDIT_CLIPBOARD, {
            commandId: CommonCommands.PASTE.id,
            order: '2'
        });
        registry.registerMenuAction(CommonMenus.VIEW_LAYOUT, {
            commandId: CommonCommands.TOGGLE_BOTTOM_PANEL.id,
            order: '0'
        });
        registry.registerMenuAction(CommonMenus.VIEW_LAYOUT, {
            commandId: CommonCommands.COLLAPSE_ALL_PANELS.id,
            order: '1'
        });
        registry.registerMenuAction(tab_bars_1.SHELL_TABBAR_CONTEXT_MENU, {
            commandId: CommonCommands.CLOSE_TAB.id,
            label: 'Close',
            order: '0'
        });
        registry.registerMenuAction(tab_bars_1.SHELL_TABBAR_CONTEXT_MENU, {
            commandId: CommonCommands.CLOSE_OTHER_TABS.id,
            label: 'Close Others',
            order: '1'
        });
        registry.registerMenuAction(tab_bars_1.SHELL_TABBAR_CONTEXT_MENU, {
            commandId: CommonCommands.CLOSE_RIGHT_TABS.id,
            label: 'Close to the Right',
            order: '2'
        });
        registry.registerMenuAction(tab_bars_1.SHELL_TABBAR_CONTEXT_MENU, {
            commandId: CommonCommands.CLOSE_ALL_TABS.id,
            label: 'Close All',
            order: '3'
        });
        registry.registerMenuAction(tab_bars_1.SHELL_TABBAR_CONTEXT_MENU, {
            commandId: CommonCommands.COLLAPSE_PANEL.id,
            label: 'Collapse',
            order: '4'
        });
        registry.registerMenuAction(tab_bars_1.SHELL_TABBAR_CONTEXT_MENU, {
            commandId: CommonCommands.TOGGLE_MAXIMIZED.id,
            label: 'Toggle Maximized',
            order: '5'
        });
        registry.registerMenuAction(CommonMenus.HELP, {
            commandId: CommonCommands.ABOUT_COMMAND.id,
            label: 'About',
            order: '9'
        });
        registry.registerMenuAction(CommonMenus.VIEW_PRIMARY, {
            commandId: CommonCommands.OPEN_VIEW.id
        });
        registry.registerMenuAction(CommonMenus.FILE_SETTINGS_SUBMENU_THEME, {
            commandId: CommonCommands.SELECT_COLOR_THEME.id
        });
        registry.registerMenuAction(CommonMenus.FILE_SETTINGS_SUBMENU_THEME, {
            commandId: CommonCommands.SELECT_ICON_THEME.id
        });
    };
    CommonFrontendContribution.prototype.registerCommands = function (commandRegistry) {
        var _this = this;
        commandRegistry.registerCommand(CommonCommands.OPEN, new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, {
            execute: function (uris) { return uris.map(function (uri) { return opener_service_1.open(_this.openerService, uri); }); },
        }, { multi: true }));
        commandRegistry.registerCommand(CommonCommands.CUT, {
            execute: function () {
                if (exports.supportCut) {
                    document.execCommand('cut');
                }
                else {
                    _this.messageService.warn("Please use the browser's cut command or shortcut.");
                }
            }
        });
        commandRegistry.registerCommand(CommonCommands.COPY, {
            execute: function () {
                if (exports.supportCopy) {
                    document.execCommand('copy');
                }
                else {
                    _this.messageService.warn("Please use the browser's copy command or shortcut.");
                }
            }
        });
        commandRegistry.registerCommand(CommonCommands.PASTE, {
            execute: function () {
                if (exports.supportPaste) {
                    document.execCommand('paste');
                }
                else {
                    _this.messageService.warn("Please use the browser's paste command or shortcut.");
                }
            }
        });
        commandRegistry.registerCommand(CommonCommands.UNDO);
        commandRegistry.registerCommand(CommonCommands.REDO);
        commandRegistry.registerCommand(CommonCommands.FIND);
        commandRegistry.registerCommand(CommonCommands.REPLACE);
        commandRegistry.registerCommand(CommonCommands.NEXT_TAB, {
            isEnabled: function () { return _this.shell.currentTabBar !== undefined; },
            execute: function () { return _this.shell.activateNextTab(); }
        });
        commandRegistry.registerCommand(CommonCommands.PREVIOUS_TAB, {
            isEnabled: function () { return _this.shell.currentTabBar !== undefined; },
            execute: function () { return _this.shell.activatePreviousTab(); }
        });
        commandRegistry.registerCommand(CommonCommands.CLOSE_TAB, {
            isEnabled: function (event) { return _this.findTabBar(event) !== undefined; },
            execute: function (event) {
                var tabBar = _this.findTabBar(event);
                var currentTitle = _this.findTitle(tabBar, event);
                _this.shell.closeTabs(tabBar, function (title) { return title === currentTitle; });
            }
        });
        commandRegistry.registerCommand(CommonCommands.CLOSE_OTHER_TABS, {
            isEnabled: function (event) {
                var tabBar = _this.findTabBar(event);
                return tabBar !== undefined && tabBar.titles.length > 1;
            },
            execute: function (event) {
                var tabBar = _this.findTabBar(event);
                var currentTitle = _this.findTitle(tabBar, event);
                var area = _this.shell.getAreaFor(tabBar);
                _this.shell.closeTabs(area, function (title) { return title !== currentTitle; });
            }
        });
        commandRegistry.registerCommand(CommonCommands.CLOSE_RIGHT_TABS, {
            isEnabled: function (event) {
                var tabBar = _this.findTabBar(event);
                return tabBar !== undefined && tabBar.currentIndex < tabBar.titles.length - 1;
            },
            isVisible: function (event) {
                var area = _this.findTabArea(event);
                return area !== undefined && area !== 'left' && area !== 'right';
            },
            execute: function (event) {
                var tabBar = _this.findTabBar(event);
                var currentIndex = tabBar.currentIndex;
                _this.shell.closeTabs(tabBar, function (_, index) { return index > currentIndex; });
            }
        });
        commandRegistry.registerCommand(CommonCommands.CLOSE_ALL_TABS, {
            isEnabled: function (event) { return _this.findTabBar(event) !== undefined; },
            execute: function (event) { return _this.shell.closeTabs(_this.findTabArea(event)); }
        });
        commandRegistry.registerCommand(CommonCommands.CLOSE_MAIN_TAB, {
            isEnabled: function () { return _this.shell.getCurrentWidget('main') !== undefined; },
            execute: function () { return _this.shell.getCurrentWidget('main').close(); }
        });
        commandRegistry.registerCommand(CommonCommands.CLOSE_OTHER_MAIN_TABS, {
            isEnabled: function () {
                var tabBars = _this.shell.mainAreaTabBars;
                return tabBars.length > 1 || tabBars.length === 1 && tabBars[0].titles.length > 1;
            },
            execute: function () {
                var currentWidget = _this.shell.getCurrentWidget('main');
                if (currentWidget !== undefined) {
                    _this.shell.closeTabs('main', function (title) { return title.owner !== currentWidget; });
                }
            }
        });
        commandRegistry.registerCommand(CommonCommands.CLOSE_ALL_MAIN_TABS, {
            isEnabled: function () { return _this.shell.mainAreaTabBars.find(function (tb) { return tb.titles.length > 0; }) !== undefined; },
            execute: function () { return _this.shell.closeTabs('main'); }
        });
        commandRegistry.registerCommand(CommonCommands.COLLAPSE_PANEL, {
            isEnabled: function (event) { return application_shell_1.ApplicationShell.isSideArea(_this.findTabArea(event)); },
            isVisible: function (event) { return application_shell_1.ApplicationShell.isSideArea(_this.findTabArea(event)); },
            execute: function (event) { return _this.shell.collapsePanel(_this.findTabArea(event)); }
        });
        commandRegistry.registerCommand(CommonCommands.COLLAPSE_ALL_PANELS, {
            execute: function () {
                _this.shell.collapsePanel('left');
                _this.shell.collapsePanel('right');
                _this.shell.collapsePanel('bottom');
            }
        });
        commandRegistry.registerCommand(CommonCommands.TOGGLE_BOTTOM_PANEL, {
            isEnabled: function () { return _this.shell.getWidgets('bottom').length > 0; },
            execute: function () {
                if (_this.shell.isExpanded('bottom')) {
                    _this.shell.collapsePanel('bottom');
                }
                else {
                    _this.shell.expandPanel('bottom');
                }
            }
        });
        commandRegistry.registerCommand(CommonCommands.TOGGLE_MAXIMIZED, {
            isEnabled: function () { return _this.shell.canToggleMaximized(); },
            isVisible: function () { return _this.shell.canToggleMaximized(); },
            execute: function () { return _this.shell.toggleMaximized(); }
        });
        commandRegistry.registerCommand(CommonCommands.SAVE, {
            execute: function () { return _this.shell.save(); }
        });
        commandRegistry.registerCommand(CommonCommands.SAVE_ALL, {
            execute: function () { return _this.shell.saveAll(); }
        });
        commandRegistry.registerCommand(CommonCommands.ABOUT_COMMAND, {
            execute: function () { return _this.openAbout(); }
        });
        commandRegistry.registerCommand(CommonCommands.OPEN_VIEW, {
            execute: function () { return _this.quickOpen.open(_this.quickView.prefix); }
        });
        commandRegistry.registerCommand(CommonCommands.SELECT_COLOR_THEME, {
            execute: function () { return _this.selectColorTheme(); }
        });
        commandRegistry.registerCommand(CommonCommands.SELECT_ICON_THEME, {
            execute: function () { return _this.selectIconTheme(); }
        });
    };
    CommonFrontendContribution.prototype.findTabBar = function (event) {
        if (event && event.target) {
            var tabBar = this.shell.findWidgetForElement(event.target);
            if (tabBar instanceof widgets_1.TabBar) {
                return tabBar;
            }
        }
        return this.shell.currentTabBar;
    };
    CommonFrontendContribution.prototype.findTabArea = function (event) {
        var tabBar = this.findTabBar(event);
        if (tabBar) {
            return this.shell.getAreaFor(tabBar);
        }
        return this.shell.currentTabArea;
    };
    CommonFrontendContribution.prototype.findTitle = function (tabBar, event) {
        if (event && event.target) {
            var tabNode_1 = event.target;
            while (tabNode_1 && !tabNode_1.classList.contains('p-TabBar-tab')) {
                tabNode_1 = tabNode_1.parentElement;
            }
            if (tabNode_1 && tabNode_1.title) {
                var title = tabBar.titles.find(function (t) { return t.label === tabNode_1.title; });
                if (title) {
                    return title;
                }
            }
        }
        return tabBar.currentTitle || undefined;
    };
    CommonFrontendContribution.prototype.isElectron = function () {
        return environment_1.environment.electron.is();
    };
    CommonFrontendContribution.prototype.registerKeybindings = function (registry) {
        if (exports.supportCut) {
            registry.registerKeybinding({
                command: CommonCommands.CUT.id,
                keybinding: 'ctrlcmd+x'
            });
        }
        if (exports.supportCopy) {
            registry.registerKeybinding({
                command: CommonCommands.COPY.id,
                keybinding: 'ctrlcmd+c'
            });
        }
        if (exports.supportPaste) {
            registry.registerKeybinding({
                command: CommonCommands.PASTE.id,
                keybinding: 'ctrlcmd+v'
            });
        }
        registry.registerKeybindings(
        // Edition
        {
            command: CommonCommands.UNDO.id,
            keybinding: 'ctrlcmd+z'
        }, {
            command: CommonCommands.REDO.id,
            keybinding: 'ctrlcmd+shift+z'
        }, {
            command: CommonCommands.FIND.id,
            keybinding: 'ctrlcmd+f'
        }, {
            command: CommonCommands.REPLACE.id,
            keybinding: 'ctrlcmd+alt+f'
        }, 
        // Tabs
        {
            command: CommonCommands.NEXT_TAB.id,
            keybinding: 'ctrlcmd+tab'
        }, {
            command: CommonCommands.NEXT_TAB.id,
            keybinding: 'ctrlcmd+alt+d'
        }, {
            command: CommonCommands.PREVIOUS_TAB.id,
            keybinding: 'ctrlcmd+shift+tab'
        }, {
            command: CommonCommands.PREVIOUS_TAB.id,
            keybinding: 'ctrlcmd+alt+a'
        }, {
            command: CommonCommands.CLOSE_MAIN_TAB.id,
            keybinding: this.isElectron() ? (os_1.isWindows ? 'ctrl+f4' : 'ctrlcmd+w') : 'alt+w'
        }, {
            command: CommonCommands.CLOSE_OTHER_MAIN_TABS.id,
            keybinding: 'ctrlcmd+alt+t'
        }, {
            command: CommonCommands.CLOSE_ALL_MAIN_TABS.id,
            keybinding: this.isElectron() ? 'ctrlCmd+k ctrlCmd+w' : 'alt+shift+w'
        }, 
        // Panels
        {
            command: CommonCommands.COLLAPSE_PANEL.id,
            keybinding: 'alt+c'
        }, {
            command: CommonCommands.TOGGLE_BOTTOM_PANEL.id,
            keybinding: 'ctrlcmd+j',
        }, {
            command: CommonCommands.COLLAPSE_ALL_PANELS.id,
            keybinding: 'alt+shift+c',
        }, {
            command: CommonCommands.TOGGLE_MAXIMIZED.id,
            keybinding: 'ctrl+alt+m',
        }, 
        // Saving
        {
            command: CommonCommands.SAVE.id,
            keybinding: 'ctrlcmd+s'
        }, {
            command: CommonCommands.SAVE_ALL.id,
            keybinding: 'ctrlcmd+alt+s'
        }, 
        // Theming
        {
            command: CommonCommands.SELECT_COLOR_THEME.id,
            keybinding: 'ctrlcmd+k ctrlcmd+t'
        });
    };
    CommonFrontendContribution.prototype.openAbout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.aboutDialog.open();
                return [2 /*return*/];
            });
        });
    };
    /**
     * registers event listener which make sure that
     * window doesn't get closed if CMD/CTRL W is pressed.
     * Too many users have that in their muscle memory.
     * Chrome doesn't let us rebind or prevent default the keybinding, so this
     * at least doesn't close the window immediately.
     */
    CommonFrontendContribution.prototype.registerCtrlWHandling = function () {
        var _this = this;
        function isCtrlCmd(event) {
            return (os_1.isOSX && event.metaKey) || (!os_1.isOSX && event.ctrlKey);
        }
        window.document.addEventListener('keydown', function (event) {
            _this.shouldPreventClose = isCtrlCmd(event) && event.code === 'KeyW';
        });
        window.document.addEventListener('keyup', function () {
            _this.shouldPreventClose = false;
        });
    };
    CommonFrontendContribution.prototype.onWillStop = function () {
        try {
            if (this.shouldPreventClose || this.shell.canSaveAll()) {
                return true;
            }
        }
        finally {
            this.shouldPreventClose = false;
        }
    };
    CommonFrontendContribution.prototype.selectIconTheme = function () {
        var e_1, _a;
        var _this = this;
        var resetTo = this.iconThemes.current;
        var previewTheme = debounce(function (id) { return _this.iconThemes.current = id; }, 200);
        var items = [];
        var _loop_1 = function (iconTheme) {
            var item = Object.assign(new quick_open_1.QuickOpenItem({
                label: iconTheme.label,
                description: iconTheme.description,
                run: function (mode) {
                    if (mode === quick_open_1.QuickOpenMode.OPEN) {
                        resetTo = undefined;
                    }
                    previewTheme(iconTheme.id);
                    return true;
                }
            }), { id: iconTheme.id });
            items.push(item);
        };
        try {
            for (var _b = __values(this.iconThemes.definitions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var iconTheme = _c.value;
                _loop_1(iconTheme);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        items = items.sort(function (a, b) {
            if (a.id === 'none') {
                return -1;
            }
            return a.getLabel().localeCompare(b.getLabel());
        });
        this.quickOpenService.open({
            onType: function (_, accept) { return accept(items); }
        }, {
            placeholder: 'Select File Icon Theme',
            fuzzyMatchLabel: true,
            selectIndex: function () { return items.findIndex(function (item) { return item.id === _this.iconThemes.current; }); },
            onClose: function () {
                if (resetTo) {
                    previewTheme.cancel();
                    _this.iconThemes.current = resetTo;
                }
            }
        });
    };
    CommonFrontendContribution.prototype.selectColorTheme = function () {
        var e_2, _a;
        var _this = this;
        var resetTo = this.themeService.getCurrentTheme().id;
        var previewTheme = debounce(function (id) { return _this.themeService.setCurrentTheme(id); }, 200);
        var itemsByTheme = { light: [], dark: [], hc: [] };
        var _loop_2 = function (theme) {
            var themeItems = itemsByTheme[theme.type];
            var groupLabel = themeItems.length === 0 ? (theme.type === 'hc' ? 'high contrast' : theme.type) + ' themes' : undefined;
            themeItems.push(Object.assign(new quick_open_1.QuickOpenGroupItem({
                label: theme.label,
                description: theme.description,
                run: function (mode) {
                    if (mode === quick_open_1.QuickOpenMode.OPEN) {
                        resetTo = undefined;
                    }
                    previewTheme(theme.id);
                    return true;
                },
                groupLabel: groupLabel,
                showBorder: !!groupLabel && theme.type !== 'light'
            }), { id: theme.id }));
        };
        try {
            for (var _b = __values(this.themeService.getThemes().sort(function (a, b) { return a.label.localeCompare(b.label); })), _c = _b.next(); !_c.done; _c = _b.next()) {
                var theme = _c.value;
                _loop_2(theme);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var items = __spread(itemsByTheme.light, itemsByTheme.dark, itemsByTheme.hc);
        this.quickOpenService.open({
            onType: function (_, accept) { return accept(items); }
        }, {
            placeholder: 'Select Color Theme (Up/Down Keys to Preview)',
            fuzzyMatchLabel: true,
            selectIndex: function () {
                var current = _this.themeService.getCurrentTheme().id;
                return items.findIndex(function (item) { return item.id === current; });
            },
            onClose: function () {
                if (resetTo) {
                    previewTheme.cancel();
                    _this.themeService.setCurrentTheme(resetTo);
                }
            }
        });
    };
    CommonFrontendContribution.prototype.registerColors = function (colors) {
        colors.register(
        // Base Colors should be aligned with https://code.visualstudio.com/api/references/theme-color#base-colors
        // if not yet contributed by Monaco, check runtime css variables to learn
        { id: 'selection.background', defaults: { dark: '#217daf', light: '#c0dbf1' }, description: 'Overall border color for focused elements. This color is only used if not overridden by a component.' }, { id: 'icon.foreground', defaults: { dark: '#C5C5C5', light: '#424242', hc: '#FFFFFF' }, description: 'The default color for icons in the workbench.' }, 
        // Window border colors should be aligned with https://code.visualstudio.com/api/references/theme-color#window-border
        {
            id: 'window.activeBorder', defaults: {
                hc: 'contrastBorder'
            }, description: 'The color used for the border of the window when it is active.'
        }, {
            id: 'window.inactiveBorder', defaults: {
                hc: 'contrastBorder'
            },
            description: 'The color used for the border of the window when it is inactive.'
        }, 
        // Buttons should be aligned with https://code.visualstudio.com/api/references/theme-color#button-control
        // if not yet contributed by Monaco, check runtime css variables to learn
        { id: 'button.foreground', defaults: { dark: color_registry_1.Color.white, light: color_registry_1.Color.white, hc: color_registry_1.Color.white }, description: 'Button foreground color.' }, { id: 'button.background', defaults: { dark: '#0E639C', light: '#007ACC' }, description: 'Button background color.' }, { id: 'button.hoverBackground', defaults: { dark: color_registry_1.Color.lighten('button.background', 0.2), light: color_registry_1.Color.darken('button.background', 0.2) }, description: 'Button background color when hovering.' }, 
        // Activity Bar colors should be aligned with https://code.visualstudio.com/api/references/theme-color#activity-bar
        {
            id: 'activityBar.background', defaults: {
                dark: '#333333',
                light: '#2C2C2C',
                hc: '#000000'
            }, description: 'Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.'
        }, {
            id: 'activityBar.foreground', defaults: {
                dark: color_registry_1.Color.white,
                light: color_registry_1.Color.white,
                hc: color_registry_1.Color.white
            }, description: 'Activity bar item foreground color when it is active. The activity bar is showing on the far left or right and allows to switch between views of the side bar.',
        }, {
            id: 'activityBar.inactiveForeground', defaults: {
                dark: color_registry_1.Color.transparent('activityBar.foreground', 0.4),
                light: color_registry_1.Color.transparent('activityBar.foreground', 0.4),
                hc: color_registry_1.Color.white
            }, description: 'Activity bar item foreground color when it is inactive. The activity bar is showing on the far left or right and allows to switch between views of the side bar.'
        }, {
            id: 'activityBar.border', defaults: {
                hc: 'contrastBorder'
            }, description: 'Activity bar border color separating to the side bar. The activity bar is showing on the far left or right and allows to switch between views of the side bar.'
        }, {
            id: 'activityBar.activeBorder', defaults: {
                dark: 'activityBar.foreground',
                light: 'activityBar.foreground',
            }, description: 'Activity bar border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.'
        }, {
            id: 'activityBar.activeFocusBorder',
            description: 'Activity bar focus border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.'
        }, { id: 'activityBar.activeBackground', description: 'Activity bar background color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.' }, {
            id: 'activityBar.dropBackground', defaults: {
                dark: color_registry_1.Color.transparent('#ffffff', 0.12),
                light: color_registry_1.Color.transparent('#ffffff', 0.12),
                hc: color_registry_1.Color.transparent('#ffffff', 0.12),
            }, description: 'Drag and drop feedback color for the activity bar items. The color should have transparency so that the activity bar entries can still shine through. The activity bar is showing on the far left or right and allows to switch between views of the side bar.'
        }, {
            id: 'activityBarBadge.background', defaults: {
                dark: '#007ACC',
                light: '#007ACC',
                hc: '#000000'
            }, description: 'Activity notification badge background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.'
        }, {
            id: 'activityBarBadge.foreground', defaults: {
                dark: color_registry_1.Color.white,
                light: color_registry_1.Color.white,
                hc: color_registry_1.Color.white
            }, description: 'Activity notification badge foreground color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.'
        }, 
        // Input control colors should be aligned with https://code.visualstudio.com/api/references/theme-color#input-control
        // if not yet contributed by Monaco, check runtime css variables to learn
        { id: 'input.border', defaults: { hc: 'contrastBorder' }, description: 'Input box border.' }, { id: 'inputValidation.errorForeground', defaults: { dark: 'errorForeground', light: 'errorForeground', hc: 'errorForeground' }, description: 'Input validation foreground color for error severity.' }, { id: 'inputValidation.infoForeground', description: 'Input validation foreground color for information severity.' }, { id: 'inputValidation.warningForeground', description: 'Input validation foreground color for warning severity.' }, 
        // Side Bar should be aligned with https://code.visualstudio.com/api/references/theme-color#side-bar
        // if not yet contributed by Monaco, check runtime css variables to learn
        { id: 'sideBar.background', defaults: { dark: '#252526', light: '#F3F3F3', hc: '#000000' }, description: 'Side bar background color. The side bar is the container for views like explorer and search.' }, { id: 'sideBar.foreground', description: 'Side bar foreground color. The side bar is the container for views like explorer and search.' }, { id: 'sideBarSectionHeader.background', defaults: { dark: '#80808033', light: '#80808033' }, description: 'Side bar section header background color. The side bar is the container for views like explorer and search.' }, { id: 'sideBarSectionHeader.foreground', description: 'Side bar foreground color. The side bar is the container for views like explorer and search.' }, { id: 'sideBarSectionHeader.border', defaults: { hc: '#6FC3DF' }, description: 'Side bar section header border color. The side bar is the container for views like explorer and search.' }, 
        // Lists and Trees colors should be aligned with https://code.visualstudio.com/api/references/theme-color#lists-and-trees
        // if not yet contributed by Monaco, check runtime css variables to learn.
        // TODO: Following are not yet supported/no respective elements in theia:
        // list.focusBackground, list.focusForeground, list.inactiveFocusBackground, list.filterMatchBorder,
        // list.dropBackground, listFilterWidget.outline, listFilterWidget.noMatchesOutline, tree.indentGuidesStroke
        // list.invalidItemForeground,
        // list.warningForeground, list.errorForeground => tree node needs an respective class
        { id: 'list.activeSelectionBackground', defaults: { dark: '#094771', light: '#0074E8' }, description: 'List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.' }, { id: 'list.activeSelectionForeground', defaults: { dark: '#FFF', light: '#FFF' }, description: 'List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.' }, { id: 'list.inactiveSelectionBackground', defaults: { dark: '#37373D', light: '#E4E6F1' }, description: 'List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.' }, { id: 'list.inactiveSelectionForeground', description: 'List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.' }, { id: 'list.hoverBackground', defaults: { dark: '#2A2D2E', light: '#F0F0F0' }, description: 'List/Tree background when hovering over items using the mouse.' }, { id: 'list.hoverForeground', description: 'List/Tree foreground when hovering over items using the mouse.' }, { id: 'list.filterMatchBackground', defaults: { dark: 'editor.findMatchHighlightBackground', light: 'editor.findMatchHighlightBackground' }, description: 'Background color of the filtered match.' }, 
        // Editor Group & Tabs colors should be aligned with https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
        {
            id: 'editorGroup.border',
            defaults: {
                dark: '#444444',
                light: '#E7E7E7',
                hc: 'contrastBorder'
            },
            description: 'Color to separate multiple editor groups from each other. Editor groups are the containers of editors.'
        }, {
            id: 'editorGroup.dropBackground',
            defaults: {
                dark: color_registry_1.Color.transparent('#53595D', 0.5),
                light: color_registry_1.Color.transparent('#2677CB', 0.18)
            },
            description: 'Background color when dragging editors around. The color should have transparency so that the editor contents can still shine through.'
        }, {
            id: 'editorGroupHeader.tabsBackground',
            defaults: {
                dark: '#252526',
                light: '#F3F3F3'
            },
            description: 'Background color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.'
        }, {
            id: 'editorGroupHeader.tabsBorder',
            defaults: {
                hc: 'contrastBorder'
            },
            description: 'Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.'
        }, {
            id: 'tab.activeBackground',
            defaults: {
                dark: 'editor.background',
                light: 'editor.background',
                hc: 'editor.background'
            },
            description: 'Active tab background color. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.unfocusedActiveBackground',
            defaults: {
                dark: 'tab.activeBackground',
                light: 'tab.activeBackground',
                hc: 'tab.activeBackground'
            },
            description: 'Active tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.inactiveBackground',
            defaults: {
                dark: '#2D2D2D',
                light: '#ECECEC'
            },
            description: 'Inactive tab background color. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.activeForeground',
            defaults: {
                dark: color_registry_1.Color.white,
                light: '#333333',
                hc: color_registry_1.Color.white
            }, description: 'Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.inactiveForeground', defaults: {
                dark: color_registry_1.Color.transparent('tab.activeForeground', 0.5),
                light: color_registry_1.Color.transparent('tab.activeForeground', 0.7),
                hc: color_registry_1.Color.white
            }, description: 'Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.unfocusedActiveForeground', defaults: {
                dark: color_registry_1.Color.transparent('tab.activeForeground', 0.5),
                light: color_registry_1.Color.transparent('tab.activeForeground', 0.7),
                hc: color_registry_1.Color.white
            }, description: 'Active tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.unfocusedInactiveForeground', defaults: {
                dark: color_registry_1.Color.transparent('tab.inactiveForeground', 0.5),
                light: color_registry_1.Color.transparent('tab.inactiveForeground', 0.5),
                hc: color_registry_1.Color.white
            }, description: 'Inactive tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.border', defaults: {
                dark: '#252526',
                light: '#F3F3F3',
                hc: 'contrastBorder'
            }, description: 'Border to separate tabs from each other. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.activeBorder',
            description: 'Border on the bottom of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.unfocusedActiveBorder',
            defaults: {
                dark: color_registry_1.Color.transparent('tab.activeBorder', 0.5),
                light: color_registry_1.Color.transparent('tab.activeBorder', 0.7)
            },
            description: 'Border on the bottom of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.activeBorderTop',
            defaults: {
                dark: 'focusBorder',
                light: 'focusBorder'
            },
            description: 'Border to the top of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.unfocusedActiveBorderTop', defaults: {
                dark: color_registry_1.Color.transparent('tab.activeBorderTop', 0.5),
                light: color_registry_1.Color.transparent('tab.activeBorderTop', 0.7)
            }, description: 'Border to the top of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.hoverBackground',
            description: 'Tab background color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.unfocusedHoverBackground', defaults: {
                dark: color_registry_1.Color.transparent('tab.hoverBackground', 0.5),
                light: color_registry_1.Color.transparent('tab.hoverBackground', 0.7)
            }, description: 'Tab background color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.hoverBorder',
            description: 'Border to highlight tabs when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.unfocusedHoverBorder', defaults: {
                dark: color_registry_1.Color.transparent('tab.hoverBorder', 0.5),
                light: color_registry_1.Color.transparent('tab.hoverBorder', 0.7)
            }, description: 'Border to highlight tabs in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.activeModifiedBorder', defaults: {
                dark: '#3399CC',
                light: '#33AAEE'
            }, description: 'Border on the top of modified (dirty) active tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.inactiveModifiedBorder', defaults: {
                dark: color_registry_1.Color.transparent('tab.activeModifiedBorder', 0.5),
                light: color_registry_1.Color.transparent('tab.activeModifiedBorder', 0.5),
                hc: color_registry_1.Color.white
            }, description: 'Border on the top of modified (dirty) inactive tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.unfocusedActiveModifiedBorder', defaults: {
                dark: color_registry_1.Color.transparent('tab.activeModifiedBorder', 0.5),
                light: color_registry_1.Color.transparent('tab.activeModifiedBorder', 0.7),
                hc: color_registry_1.Color.white
            }, description: 'Border on the top of modified (dirty) active tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, {
            id: 'tab.unfocusedInactiveModifiedBorder', defaults: {
                dark: color_registry_1.Color.transparent('tab.inactiveModifiedBorder', 0.5),
                light: color_registry_1.Color.transparent('tab.inactiveModifiedBorder', 0.5),
                hc: color_registry_1.Color.white
            }, description: 'Border on the top of modified (dirty) inactive tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.'
        }, 
        // Status bar colors should be aligned with https://code.visualstudio.com/api/references/theme-color#status-bar-colors
        // Not yet supported:
        // statusBarItem.prominentForeground, statusBarItem.prominentBackground, statusBarItem.prominentHoverBackground
        {
            id: 'statusBar.foreground', defaults: {
                dark: '#FFFFFF',
                light: '#FFFFFF',
                hc: '#FFFFFF'
            }, description: 'Status bar foreground color when a workspace is opened. The status bar is shown in the bottom of the window.'
        }, {
            id: 'statusBar.background', defaults: {
                dark: '#007ACC',
                light: '#007ACC'
            }, description: 'Status bar background color when a workspace is opened. The status bar is shown in the bottom of the window.'
        }, {
            id: 'statusBar.noFolderForeground', defaults: {
                dark: 'statusBar.foreground',
                light: 'statusBar.foreground',
                hc: 'statusBar.foreground'
            }, description: 'Status bar foreground color when no folder is opened. The status bar is shown in the bottom of the window.'
        }, {
            id: 'statusBar.noFolderBackground', defaults: {
                dark: '#68217A',
                light: '#68217A'
            }, description: 'Status bar background color when no folder is opened. The status bar is shown in the bottom of the window.'
        }, {
            id: 'statusBar.border', defaults: {
                hc: 'contrastBorder'
            }, description: 'Status bar border color separating to the sidebar and editor. The status bar is shown in the bottom of the window.'
        }, {
            id: 'statusBar.noFolderBorder', defaults: {
                dark: 'statusBar.border',
                light: 'statusBar.border',
                hc: 'statusBar.border'
            }, description: 'Status bar border color separating to the sidebar and editor when no folder is opened. The status bar is shown in the bottom of the window.'
        }, {
            id: 'statusBarItem.activeBackground', defaults: {
                dark: color_registry_1.Color.rgba(255, 255, 255, 0.18),
                light: color_registry_1.Color.rgba(255, 255, 255, 0.18),
                hc: color_registry_1.Color.rgba(255, 255, 255, 0.18)
            }, description: 'Status bar item background color when clicking. The status bar is shown in the bottom of the window.'
        }, {
            id: 'statusBarItem.hoverBackground', defaults: {
                dark: color_registry_1.Color.rgba(255, 255, 255, 0.12),
                light: color_registry_1.Color.rgba(255, 255, 255, 0.12),
                hc: color_registry_1.Color.rgba(255, 255, 255, 0.12)
            }, description: 'Status bar item background color when hovering. The status bar is shown in the bottom of the window.'
        }, 
        // Quickinput colors should be aligned with https://code.visualstudio.com/api/references/theme-color#quick-picker
        // if not yet contributed by Monaco, check runtime css variables to learn.
        {
            id: 'quickInput.background', defaults: {
                dark: 'sideBar.background',
                light: 'sideBar.background',
                hc: 'sideBar.background'
            }, description: 'Quick Input background color. The Quick Input widget is the container for views like the color theme picker.'
        }, {
            id: 'quickInput.foreground', defaults: {
                dark: 'sideBar.foreground',
                light: 'sideBar.foreground',
                hc: 'sideBar.foreground'
            }, description: 'Quick Input foreground color. The Quick Input widget is the container for views like the color theme picker.'
        }, 
        // Panel colors should be aligned with https://code.visualstudio.com/api/references/theme-color#panel-colors
        {
            id: 'panel.background', defaults: {
                dark: 'editor.background', light: 'editor.background', hc: 'editor.background'
            }, description: 'Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal.'
        }, {
            id: 'panel.border', defaults: {
                dark: color_registry_1.Color.transparent('#808080', 0.35), light: color_registry_1.Color.transparent('#808080', 0.35), hc: 'contrastBorder'
            }, description: 'Panel border color to separate the panel from the editor. Panels are shown below the editor area and contain views like output and integrated terminal.'
        }, {
            id: 'panel.dropBackground', defaults: {
                dark: color_registry_1.Color.rgba(255, 255, 255, 0.12), light: color_registry_1.Color.transparent('#2677CB', 0.18), hc: color_registry_1.Color.rgba(255, 255, 255, 0.12)
            }, description: 'Drag and drop feedback color for the panel title items. The color should have transparency so that the panel entries can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.'
        }, {
            id: 'panelTitle.activeForeground', defaults: {
                dark: '#E7E7E7', light: '#424242', hc: color_registry_1.Color.white
            }, description: 'Title color for the active panel. Panels are shown below the editor area and contain views like output and integrated terminal.'
        }, {
            id: 'panelTitle.inactiveForeground', defaults: {
                dark: color_registry_1.Color.transparent('panelTitle.activeForeground', 0.6), light: color_registry_1.Color.transparent('panelTitle.activeForeground', 0.75), hc: color_registry_1.Color.white
            }, description: 'Title color for the inactive panel. Panels are shown below the editor area and contain views like output and integrated terminal.'
        }, {
            id: 'panelTitle.activeBorder', defaults: {
                dark: 'panelTitle.activeForeground', light: 'panelTitle.activeForeground', hc: 'contrastBorder'
            }, description: 'Border color for the active panel title. Panels are shown below the editor area and contain views like output and integrated terminal.'
        }, {
            id: 'panelInput.border', defaults: { light: '#ddd' },
            description: 'Input box border for inputs in the panel.'
        }, {
            id: 'imagePreview.border', defaults: {
                dark: color_registry_1.Color.transparent('#808080', 0.35), light: color_registry_1.Color.transparent('#808080', 0.35), hc: 'contrastBorder'
            }, description: 'Border color for image in image preview.'
        }, 
        // Title Bar colors should be aligned with https://code.visualstudio.com/api/references/theme-color#title-bar-colors
        {
            id: 'titleBar.activeForeground', defaults: {
                dark: '#CCCCCC',
                light: '#333333',
                hc: '#FFFFFF'
            }, description: 'Title bar foreground when the window is active. Note that this color is currently only supported on macOS.'
        }, {
            id: 'titleBar.inactiveForeground', defaults: {
                dark: color_registry_1.Color.transparent('titleBar.activeForeground', 0.6),
                light: color_registry_1.Color.transparent('titleBar.activeForeground', 0.6)
            }, description: 'Title bar foreground when the window is inactive. Note that this color is currently only supported on macOS.'
        }, {
            id: 'titleBar.activeBackground', defaults: {
                dark: '#3C3C3C',
                light: '#DDDDDD',
                hc: '#000000'
            }, description: 'Title bar background when the window is active. Note that this color is currently only supported on macOS.'
        }, {
            id: 'titleBar.inactiveBackground', defaults: {
                dark: color_registry_1.Color.transparent('titleBar.activeBackground', 0.6),
                light: color_registry_1.Color.transparent('titleBar.activeBackground', 0.6)
            }, description: 'Title bar background when the window is inactive. Note that this color is currently only supported on macOS.'
        }, {
            id: 'titleBar.border', defaults: {
                hc: 'contrastBorder'
            }, description: 'Title bar border color. Note that this color is currently only supported on macOS.'
        }, 
        // Menu Bar colors should be aligned with https://code.visualstudio.com/api/references/theme-color#menu-bar-colors
        {
            id: 'menubar.selectionForeground', defaults: {
                dark: 'titleBar.activeForeground',
                light: 'titleBar.activeForeground',
                hc: 'titleBar.activeForeground'
            }, description: 'Foreground color of the selected menu item in the menubar.'
        }, {
            id: 'menubar.selectionBackground', defaults: {
                dark: color_registry_1.Color.transparent('#ffffff', 0.1),
                light: color_registry_1.Color.transparent('#000000', 0.1)
            }, description: 'Background color of the selected menu item in the menubar.'
        }, {
            id: 'menubar.selectionBorder', defaults: {
                hc: 'activeContrastBorder'
            }, description: 'Border color of the selected menu item in the menubar.'
        }, {
            id: 'menu.border', defaults: {
                hc: 'contrastBorder'
            }, description: 'Border color of menus.'
        }, {
            id: 'menu.foreground', defaults: {
                dark: 'dropdown.foreground', light: 'foreground', hc: 'dropdown.foreground'
            },
            description: 'Foreground color of menu items.'
        }, {
            id: 'menu.background', defaults: {
                dark: 'dropdown.background', light: 'dropdown.background', hc: 'dropdown.background'
            }, description: 'Background color of menu items.'
        }, {
            id: 'menu.selectionForeground', defaults: {
                dark: 'list.activeSelectionForeground', light: 'list.activeSelectionForeground', hc: 'list.activeSelectionForeground'
            }, description: 'Foreground color of the selected menu item in menus.'
        }, {
            id: 'menu.selectionBackground', defaults: { dark: 'list.activeSelectionBackground', light: 'list.activeSelectionBackground', hc: 'list.activeSelectionBackground' },
            description: 'Background color of the selected menu item in menus.'
        }, {
            id: 'menu.selectionBorder', defaults: {
                hc: 'activeContrastBorder'
            }, description: 'Border color of the selected menu item in menus.'
        }, {
            id: 'menu.separatorBackground', defaults: {
                dark: '#BBBBBB', light: '#888888', hc: 'contrastBorder'
            },
            description: 'Color of a separator menu item in menus.'
        }, 
        // Welcome Page colors should be aligned with https://code.visualstudio.com/api/references/theme-color#welcome-page
        { id: 'welcomePage.background', description: 'Background color for the Welcome page.' }, { id: 'welcomePage.buttonBackground', defaults: { dark: color_registry_1.Color.rgba(0, 0, 0, .2), light: color_registry_1.Color.rgba(0, 0, 0, .04), hc: color_registry_1.Color.black }, description: 'Background color for the buttons on the Welcome page.' }, { id: 'welcomePage.buttonHoverBackground', defaults: { dark: color_registry_1.Color.rgba(200, 235, 255, .072), light: color_registry_1.Color.rgba(0, 0, 0, .10) }, description: 'Hover background color for the buttons on the Welcome page.' }, { id: 'walkThrough.embeddedEditorBackground', defaults: { dark: color_registry_1.Color.rgba(0, 0, 0, .4), light: '#f4f4f4' }, description: 'Background color for the embedded editors on the Interactive Playground.' }, 
        // Settings Editor colors should be aligned with https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
        {
            id: 'settings.headerForeground', defaults: {
                light: '#444444', dark: '#e7e7e7', hc: '#ffffff'
            }, description: 'The foreground color for a section header or active title.'
        }, {
            id: 'settings.modifiedItemIndicator', defaults: {
                light: color_registry_1.Color.rgba(102, 175, 224),
                dark: color_registry_1.Color.rgba(12, 125, 157),
                hc: color_registry_1.Color.rgba(0, 73, 122)
            }, description: 'The color of the modified setting indicator.'
        }, {
            id: 'settings.dropdownBackground', defaults: { dark: 'dropdown.background', light: 'dropdown.background', hc: 'dropdown.background' },
            description: 'Settings editor dropdown background.'
        }, {
            id: 'settings.dropdownForeground', defaults: {
                dark: 'dropdown.foreground', light: 'dropdown.foreground', hc: 'dropdown.foreground'
            }, description: 'Settings editor dropdown foreground.'
        }, {
            id: 'settings.dropdownBorder', defaults: {
                dark: 'dropdown.border', light: 'dropdown.border', hc: 'dropdown.border'
            }, description: 'Settings editor dropdown border.'
        }, {
            id: 'settings.dropdownListBorder', defaults: {
                dark: 'editorWidget.border', light: 'editorWidget.border', hc: 'editorWidget.border'
            }, description: 'Settings editor dropdown list border. This surrounds the options and separates the options from the description.'
        }, {
            id: 'settings.checkboxBackground', defaults: {
                dark: 'checkbox.background', light: 'checkbox.background', hc: 'checkbox.background'
            }, description: 'Settings editor checkbox background.'
        }, {
            id: 'settings.checkboxForeground', defaults: {
                dark: 'checkbox.foreground', light: 'checkbox.foreground', hc: 'checkbox.foreground'
            }, description: 'Settings editor checkbox foreground.'
        }, {
            id: 'settings.checkboxBorder', defaults: {
                dark: 'checkbox.border', light: 'checkbox.border', hc: 'checkbox.border'
            }, description: 'Settings editor checkbox border.'
        }, {
            id: 'settings.textInputBackground', defaults: {
                dark: 'input.background', light: 'input.background', hc: 'input.background'
            }, description: 'Settings editor text input box background.'
        }, {
            id: 'settings.textInputForeground', defaults: {
                dark: 'input.foreground', light: 'input.foreground', hc: 'input.foreground'
            }, description: 'Settings editor text input box foreground.'
        }, {
            id: 'settings.textInputBorder', defaults: {
                dark: 'input.border', light: 'input.border', hc: 'input.border'
            }, description: 'Settings editor text input box border.'
        }, {
            id: 'settings.numberInputBackground', defaults: {
                dark: 'input.background', light: 'input.background', hc: 'input.background'
            }, description: 'Settings editor number input box background.'
        }, {
            id: 'settings.numberInputForeground', defaults: {
                dark: 'input.foreground', light: 'input.foreground', hc: 'input.foreground'
            }, description: 'Settings editor number input box foreground.'
        }, {
            id: 'settings.numberInputBorder', defaults: {
                dark: 'input.border', light: 'input.border', hc: 'input.border'
            }, description: 'Settings editor number input box border.'
        }, 
        // Theia Variable colors
        {
            id: 'variable.name.color', defaults: {
                dark: '#C586C0',
                light: '#9B46B0',
                hc: '#C586C0'
            },
            description: 'Color of a variable name.'
        }, {
            id: 'variable.value.color', defaults: {
                dark: color_registry_1.Color.rgba(204, 204, 204, 0.6),
                light: color_registry_1.Color.rgba(108, 108, 108, 0.8),
                hc: color_registry_1.Color.rgba(204, 204, 204, 0.6)
            },
            description: 'Color of a variable value.'
        }, {
            id: 'variable.number.variable.color', defaults: {
                dark: '#B5CEA8',
                light: '#09885A',
                hc: '#B5CEA8'
            },
            description: 'Value color of a number variable'
        }, {
            id: 'variable.boolean.variable.color', defaults: {
                dark: '#4E94CE',
                light: '#0000FF',
                hc: '#4E94CE'
            },
            description: 'Value color of a boolean variable'
        }, {
            id: 'variable.string.variable.color', defaults: {
                dark: '#CE9178',
                light: '#A31515',
                hc: '#CE9178'
            },
            description: 'Value color of a string variable'
        }, 
        // Theia ANSI colors
        {
            id: 'ansi.black.color', defaults: {
                dark: '#A0A0A0',
                light: color_registry_1.Color.rgba(128, 128, 128),
                hc: '#A0A0A0'
            },
            description: 'ANSI black color'
        }, {
            id: 'ansi.red.color', defaults: {
                dark: '#A74747',
                light: '#BE1717',
                hc: '#A74747'
            },
            description: 'ANSI red color'
        }, {
            id: 'ansi.green.color', defaults: {
                dark: '#348F34',
                light: '#338A2F',
                hc: '#348F34'
            },
            description: 'ANSI green color'
        }, {
            id: 'ansi.yellow.color', defaults: {
                dark: '#5F4C29',
                light: '#BEB817',
                hc: '#5F4C29'
            },
            description: 'ANSI yellow color'
        }, {
            id: 'ansi.blue.color', defaults: {
                dark: '#6286BB',
                light: color_registry_1.Color.rgba(0, 0, 139),
                hc: '#6286BB'
            },
            description: 'ANSI blue color'
        }, {
            id: 'ansi.magenta.color', defaults: {
                dark: '#914191',
                light: color_registry_1.Color.rgba(139, 0, 139),
                hc: '#914191'
            },
            description: 'ANSI magenta color'
        }, {
            id: 'ansi.cyan.color', defaults: {
                dark: '#218D8D',
                light: color_registry_1.Color.rgba(0, 139, 139),
                hc: '#218D8D'
            },
            description: 'ANSI cyan color'
        }, {
            id: 'ansi.white.color', defaults: {
                dark: '#707070',
                light: '#BDBDBD',
                hc: '#707070'
            },
            description: 'ANSI white color'
        }, 
        // Theia defaults
        // Base
        {
            id: 'errorBackground',
            defaults: {
                dark: 'inputValidation.errorBackground',
                light: 'inputValidation.errorBackground',
                hc: 'inputValidation.errorBackground'
            }, description: 'Background color of error widgets (like alerts or notifications).'
        }, {
            id: 'successBackground',
            defaults: {
                dark: 'editorGutter.addedBackground',
                light: 'editorGutter.addedBackground',
                hc: 'editorGutter.addedBackground'
            }, description: 'Background color of success widgets (like alerts or notifications).'
        }, {
            id: 'warningBackground',
            defaults: {
                dark: 'editorWarning.foreground',
                light: 'editorWarning.foreground',
                hc: 'editorWarning.border'
            }, description: 'Background color of warning widgets (like alerts or notifications).'
        }, {
            id: 'warningForeground',
            defaults: {
                dark: 'inputValidation.warningBackground',
                light: 'inputValidation.warningBackground',
                hc: 'inputValidation.warningBackground'
            }, description: 'Foreground color of warning widgets (like alerts or notifications).'
        }, 
        // Statusbar
        {
            id: 'statusBar.offlineBackground',
            defaults: {
                dark: 'editorWarning.foreground',
                light: 'editorWarning.foreground',
                hc: 'editorWarning.foreground'
            }, description: 'Background of hovered statusbar item in case the theia server is offline.'
        }, {
            id: 'statusBar.offlineForeground',
            defaults: {
                dark: 'editor.background',
                light: 'editor.background',
                hc: 'editor.background'
            }, description: 'Background of hovered statusbar item in case the theia server is offline.'
        }, {
            id: 'statusBarItem.offlineHoverBackground',
            defaults: {
                dark: color_registry_1.Color.lighten('statusBar.offlineBackground', 0.4),
                light: color_registry_1.Color.lighten('statusBar.offlineBackground', 0.4),
                hc: color_registry_1.Color.lighten('statusBar.offlineBackground', 0.4)
            }, description: 'Background of hovered statusbar item in case the theia server is offline.'
        }, {
            id: 'statusBarItem.offlineActiveBackground',
            defaults: {
                dark: color_registry_1.Color.lighten('statusBar.offlineBackground', 0.6),
                light: color_registry_1.Color.lighten('statusBar.offlineBackground', 0.6),
                hc: color_registry_1.Color.lighten('statusBar.offlineBackground', 0.6)
            }, description: 'Background of active statusbar item in case the theia server is offline.'
        }, 
        // Buttons
        {
            id: 'secondaryButton.foreground',
            defaults: {
                dark: 'dropdown.foreground',
                light: 'dropdown.foreground',
                hc: 'dropdown.foreground'
            }, description: 'Foreground color of secondary buttons.'
        }, {
            id: 'secondaryButton.disabledForeground',
            defaults: {
                dark: color_registry_1.Color.transparent('secondaryButton.foreground', 0.5),
                light: color_registry_1.Color.transparent('secondaryButton.foreground', 0.5),
                hc: color_registry_1.Color.transparent('secondaryButton.foreground', 0.5),
            }, description: 'Foreground color of secondary buttons.'
        }, {
            id: 'secondaryButton.background',
            defaults: {
                dark: color_registry_1.Color.lighten('dropdown.background', 0.5),
                light: color_registry_1.Color.lighten('dropdown.background', 0.5)
            }, description: 'Background color of secondary buttons.'
        }, {
            id: 'secondaryButton.hoverBackground',
            defaults: {
                dark: color_registry_1.Color.lighten('secondaryButton.background', 0.2),
                light: color_registry_1.Color.lighten('secondaryButton.background', 0.2)
            }, description: 'Background color when hovering secondary buttons.'
        }, {
            id: 'secondaryButton.disabledBackground',
            defaults: {
                dark: color_registry_1.Color.transparent('secondaryButton.background', 0.6),
                light: color_registry_1.Color.transparent('secondaryButton.background', 0.6)
            }, description: 'Background color when hovering secondary buttons.'
        }, {
            id: 'button.disabledForeground',
            defaults: {
                dark: color_registry_1.Color.transparent('button.foreground', 0.5),
                light: color_registry_1.Color.transparent('button.foreground', 0.5),
                hc: color_registry_1.Color.transparent('button.foreground', 0.5)
            }, description: 'Foreground color of secondary buttons.'
        }, {
            id: 'button.disabledBackground',
            defaults: {
                dark: color_registry_1.Color.transparent('button.background', 0.5),
                light: color_registry_1.Color.transparent('button.background', 0.5)
            }, description: 'Background color of secondary buttons.'
        });
    };
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], CommonFrontendContribution.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(resource_context_key_1.ResourceContextKey),
        __metadata("design:type", resource_context_key_1.ResourceContextKey)
    ], CommonFrontendContribution.prototype, "resourceContextKey", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], CommonFrontendContribution.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(storage_service_1.StorageService),
        __metadata("design:type", Object)
    ], CommonFrontendContribution.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(quick_view_service_1.QuickViewService),
        __metadata("design:type", quick_view_service_1.QuickViewService)
    ], CommonFrontendContribution.prototype, "quickView", void 0);
    __decorate([
        inversify_1.inject(quick_open_1.PrefixQuickOpenService),
        __metadata("design:type", quick_open_1.PrefixQuickOpenService)
    ], CommonFrontendContribution.prototype, "quickOpen", void 0);
    __decorate([
        inversify_1.inject(icon_theme_service_1.IconThemeService),
        __metadata("design:type", icon_theme_service_1.IconThemeService)
    ], CommonFrontendContribution.prototype, "iconThemes", void 0);
    __decorate([
        inversify_1.inject(theming_1.ThemeService),
        __metadata("design:type", theming_1.ThemeService)
    ], CommonFrontendContribution.prototype, "themeService", void 0);
    __decorate([
        inversify_1.inject(quick_open_1.QuickOpenService),
        __metadata("design:type", quick_open_1.QuickOpenService)
    ], CommonFrontendContribution.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(core_preferences_1.CorePreferences),
        __metadata("design:type", Object)
    ], CommonFrontendContribution.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(preferences_1.PreferenceService),
        __metadata("design:type", Object)
    ], CommonFrontendContribution.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CommonFrontendContribution.prototype, "init", null);
    CommonFrontendContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(application_shell_1.ApplicationShell)),
        __param(1, inversify_1.inject(selection_service_1.SelectionService)),
        __param(2, inversify_1.inject(message_service_1.MessageService)),
        __param(3, inversify_1.inject(opener_service_1.OpenerService)),
        __param(4, inversify_1.inject(about_dialog_1.AboutDialog)),
        __metadata("design:paramtypes", [application_shell_1.ApplicationShell,
            selection_service_1.SelectionService,
            message_service_1.MessageService, Object, about_dialog_1.AboutDialog])
    ], CommonFrontendContribution);
    return CommonFrontendContribution;
}());
exports.CommonFrontendContribution = CommonFrontendContribution;
//# sourceMappingURL=common-frontend-contribution.js.map