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
exports.EditorPreviewConfigSchema = {
    'type': 'object',
    properties: {
        'editor.enablePreview': {
            type: 'boolean',
            description: 'Controls whether editors are opened as previews when selected or single-clicked.',
            default: true
        },
    }
};
exports.EditorPreviewPreferences = Symbol('EditorPreviewPreferences');
function createEditorPreviewPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.EditorPreviewConfigSchema);
}
exports.createEditorPreviewPreferences = createEditorPreviewPreferences;
function bindEditorPreviewPreferences(bind) {
    bind(exports.EditorPreviewPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createEditorPreviewPreferences(preferences);
    }).inSingletonScope();
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.EditorPreviewConfigSchema });
}
exports.bindEditorPreviewPreferences = bindEditorPreviewPreferences;
//# sourceMappingURL=editor-preview-preferences.js.map