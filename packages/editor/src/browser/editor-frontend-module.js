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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/variable-resolver/lib/browser");
var editor_manager_1 = require("./editor-manager");
var editor_contribution_1 = require("./editor-contribution");
var editor_menu_1 = require("./editor-menu");
var editor_command_1 = require("./editor-command");
var editor_keybinding_contexts_1 = require("./editor-keybinding-contexts");
var editor_keybinding_1 = require("./editor-keybinding");
var editor_preferences_1 = require("./editor-preferences");
var editor_widget_factory_1 = require("./editor-widget-factory");
var editor_navigation_contribution_1 = require("./editor-navigation-contribution");
var navigation_location_updater_1 = require("./navigation/navigation-location-updater");
var navigation_location_service_1 = require("./navigation/navigation-location-service");
var navigation_location_similarity_1 = require("./navigation/navigation-location-similarity");
var editor_variable_contribution_1 = require("./editor-variable-contribution");
var semantic_highlighting_service_1 = require("./semantic-highlight/semantic-highlighting-service");
var editor_quick_open_service_1 = require("./editor-quick-open-service");
exports.default = new inversify_1.ContainerModule(function (bind) {
    editor_preferences_1.bindEditorPreferences(bind);
    bind(editor_widget_factory_1.EditorWidgetFactory).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toService(editor_widget_factory_1.EditorWidgetFactory);
    bind(editor_manager_1.EditorManager).toSelf().inSingletonScope();
    bind(browser_1.OpenHandler).toService(editor_manager_1.EditorManager);
    bind(common_1.CommandContribution).to(editor_command_1.EditorCommandContribution).inSingletonScope();
    bind(common_1.MenuContribution).to(editor_menu_1.EditorMenuContribution).inSingletonScope();
    bind(editor_keybinding_contexts_1.StrictEditorTextFocusContext).toSelf().inSingletonScope();
    bind(browser_1.KeybindingContext).toService(editor_keybinding_contexts_1.StrictEditorTextFocusContext);
    bind(browser_1.KeybindingContext).to(editor_keybinding_contexts_1.EditorTextFocusContext).inSingletonScope();
    bind(browser_1.KeybindingContext).to(editor_keybinding_contexts_1.DiffEditorTextFocusContext).inSingletonScope();
    bind(browser_1.KeybindingContribution).to(editor_keybinding_1.EditorKeybindingContribution).inSingletonScope();
    bind(editor_contribution_1.EditorContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(editor_contribution_1.EditorContribution);
    bind(editor_navigation_contribution_1.EditorNavigationContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(editor_navigation_contribution_1.EditorNavigationContribution);
    bind(navigation_location_service_1.NavigationLocationService).toSelf().inSingletonScope();
    bind(navigation_location_updater_1.NavigationLocationUpdater).toSelf().inSingletonScope();
    bind(navigation_location_similarity_1.NavigationLocationSimilarity).toSelf().inSingletonScope();
    bind(browser_2.VariableContribution).to(editor_variable_contribution_1.EditorVariableContribution).inSingletonScope();
    bind(semantic_highlighting_service_1.SemanticHighlightingService).toSelf().inSingletonScope();
    [common_1.CommandContribution, browser_1.KeybindingContribution, browser_1.QuickOpenContribution].forEach(function (serviceIdentifier) {
        bind(serviceIdentifier).toService(editor_contribution_1.EditorContribution);
    });
    bind(editor_quick_open_service_1.EditorQuickOpenService).toSelf().inSingletonScope();
    bind(editor_manager_1.CurrentEditorAccess).toSelf().inSingletonScope();
    bind(editor_manager_1.ActiveEditorAccess).toSelf().inSingletonScope();
    bind(editor_manager_1.EditorAccess).to(editor_manager_1.CurrentEditorAccess).inSingletonScope().whenTargetNamed(editor_manager_1.EditorAccess.CURRENT);
    bind(editor_manager_1.EditorAccess).to(editor_manager_1.ActiveEditorAccess).inSingletonScope().whenTargetNamed(editor_manager_1.EditorAccess.ACTIVE);
});
//# sourceMappingURL=editor-frontend-module.js.map