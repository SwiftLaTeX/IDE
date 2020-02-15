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
Object.defineProperty(exports, "__esModule", { value: true });
require("../../src/browser/style/index.css");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var preferences_contribution_1 = require("./preferences-contribution");
var preference_tree_container_1 = require("./preference-tree-container");
var preferences_menu_factory_1 = require("./preferences-menu-factory");
var preferences_frontend_application_contribution_1 = require("./preferences-frontend-application-contribution");
var preferences_tree_widget_1 = require("./preferences-tree-widget");
var preference_bindings_1 = require("./preference-bindings");
require("./preferences-monaco-contribution");
exports.PreferencesWidgetFactory = Symbol('PreferencesWidgetFactory');
function bindPreferences(bind, unbind) {
    preference_bindings_1.bindPreferenceProviders(bind, unbind);
    browser_1.bindViewContribution(bind, preferences_contribution_1.PreferencesContribution);
    bind(preferences_tree_widget_1.PreferencesContainer).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: preferences_tree_widget_1.PreferencesContainer.ID,
            createWidget: function () { return container.get(preferences_tree_widget_1.PreferencesContainer); }
        });
    });
    bind(exports.PreferencesWidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: preferences_tree_widget_1.PreferencesTreeWidget.ID,
            createWidget: function () { return preference_tree_container_1.createPreferencesTreeWidget(container); }
        });
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toService(exports.PreferencesWidgetFactory);
    bind(preferences_tree_widget_1.PreferencesEditorsContainer).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: preferences_tree_widget_1.PreferencesEditorsContainer.ID,
            createWidget: function () { return container.get(preferences_tree_widget_1.PreferencesEditorsContainer); }
        });
    });
    bind(preferences_menu_factory_1.PreferencesMenuFactory).toSelf();
    bind(browser_1.FrontendApplicationContribution).to(preferences_frontend_application_contribution_1.PreferencesFrontendApplicationContribution).inSingletonScope();
}
exports.bindPreferences = bindPreferences;
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bindPreferences(bind, unbind);
});
//# sourceMappingURL=preference-frontend-module.js.map