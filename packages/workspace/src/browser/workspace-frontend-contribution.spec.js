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
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var chai_1 = require("chai");
var os_1 = require("@theia/core/lib/common/os");
var workspace_frontend_contribution_1 = require("./workspace-frontend-contribution");
var workspace_commands_1 = require("./workspace-commands");
disableJSDOM();
describe('workspace-frontend-contribution', function () {
    describe('WorkspaceFrontendContribution', function () {
        var title = workspace_commands_1.WorkspaceCommands.OPEN_WORKSPACE.dialogLabel;
        var filters = workspace_frontend_contribution_1.WorkspaceFrontendContribution.DEFAULT_FILE_FILTER;
        before(function () { return disableJSDOM = jsdom_1.enableJSDOM(); });
        after(function () { return disableJSDOM(); });
        [
            [os_1.OS.Type.Linux, 'browser', true, { title: title, canSelectFiles: true, canSelectFolders: true, filters: filters }],
            [os_1.OS.Type.Linux, 'browser', false, { title: title, canSelectFiles: false, canSelectFolders: true }],
            [os_1.OS.Type.Linux, 'electron', true, { title: title, canSelectFiles: true, canSelectFolders: false, filters: filters }],
            [os_1.OS.Type.Linux, 'electron', false, { title: title, canSelectFiles: false, canSelectFolders: true }],
            [os_1.OS.Type.Windows, 'browser', true, { title: title, canSelectFiles: true, canSelectFolders: true, filters: filters }],
            [os_1.OS.Type.Windows, 'browser', false, { title: title, canSelectFiles: false, canSelectFolders: true }],
            [os_1.OS.Type.Windows, 'electron', true, { title: title, canSelectFiles: true, canSelectFolders: false, filters: filters }],
            [os_1.OS.Type.Windows, 'electron', false, { title: title, canSelectFiles: false, canSelectFolders: true }],
            [os_1.OS.Type.OSX, 'browser', true, { title: title, canSelectFiles: true, canSelectFolders: true, filters: filters }],
            [os_1.OS.Type.OSX, 'browser', false, { title: title, canSelectFiles: false, canSelectFolders: true }],
            [os_1.OS.Type.OSX, 'electron', true, { title: title, canSelectFiles: true, canSelectFolders: true, filters: filters }],
            [os_1.OS.Type.OSX, 'electron', false, { title: title, canSelectFiles: true, canSelectFolders: true, filters: filters }]
        ].forEach(function (test) {
            var _a = __read(test, 4), type = _a[0], environment = _a[1], supportMultiRootWorkspace = _a[2], expected = _a[3];
            var electron = environment === 'electron' ? true : false;
            var os = os_1.OS.Type[type]; // eslint-disable-line @typescript-eslint/no-explicit-any
            var actual = workspace_frontend_contribution_1.WorkspaceFrontendContribution.createOpenWorkspaceOpenFileDialogProps({
                type: type,
                electron: electron,
                supportMultiRootWorkspace: supportMultiRootWorkspace
            });
            it("createOpenWorkspaceOpenFileDialogProps - OS: " + os + ", Environment: " + environment + ", Multi-root workspace: " + (supportMultiRootWorkspace ? 'yes' : 'no'), function () {
                chai_1.expect(actual).to.be.deep.equal(expected);
            });
        });
    });
});
//# sourceMappingURL=workspace-frontend-contribution.spec.js.map