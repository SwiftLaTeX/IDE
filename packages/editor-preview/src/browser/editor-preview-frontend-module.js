"use strict";
/********************************************************************************
 * Copyright (C) 2018 Google and others.
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
var browser_1 = require("@theia/core/lib/browser");
var inversify_1 = require("inversify");
var editor_preview_manager_1 = require("./editor-preview-manager");
var editor_preview_factory_1 = require("./editor-preview-factory");
var editor_preview_preferences_1 = require("./editor-preview-preferences");
require("../../src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(browser_1.WidgetFactory).to(editor_preview_factory_1.EditorPreviewWidgetFactory).inSingletonScope();
    bind(editor_preview_manager_1.EditorPreviewManager).toSelf().inSingletonScope();
    bind(browser_1.OpenHandler).to(editor_preview_manager_1.EditorPreviewManager);
    editor_preview_preferences_1.bindEditorPreviewPreferences(bind);
});
//# sourceMappingURL=editor-preview-frontend-module.js.map