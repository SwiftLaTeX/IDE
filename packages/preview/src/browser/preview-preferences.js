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
var browser_1 = require("@theia/core/lib/browser");
exports.PreviewConfigSchema = {
    type: 'object',
    properties: {
        'preview.openByDefault': {
            type: 'boolean',
            description: 'Open the preview instead of the editor by default.',
            default: false
        }
    }
};
exports.PreviewPreferences = Symbol('PreviewPreferences');
function createPreviewPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.PreviewConfigSchema);
}
exports.createPreviewPreferences = createPreviewPreferences;
function bindPreviewPreferences(bind) {
    bind(exports.PreviewPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createPreviewPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.PreviewConfigSchema });
}
exports.bindPreviewPreferences = bindPreviewPreferences;
//# sourceMappingURL=preview-preferences.js.map