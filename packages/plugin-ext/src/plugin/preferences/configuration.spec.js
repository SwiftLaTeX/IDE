"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var configuration_1 = require("./configuration");
var preference_scope_1 = require("@theia/core/lib/common/preferences/preference-scope");
var vscode_uri_1 = require("vscode-uri");
var expect = chai.expect;
var inspect;
var projects = ['/projects/workspace/project1', '/projects/workspace/project2'];
var propertyName = 'tabSize';
var preferences = (_a = {},
    _a[preference_scope_1.PreferenceScope.Default] = (_b = {},
        _b[propertyName] = 6,
        _b),
    _a[preference_scope_1.PreferenceScope.User] = (_c = {},
        _c[propertyName] = 5,
        _c),
    _a[preference_scope_1.PreferenceScope.Workspace] = (_d = {},
        _d[propertyName] = 4,
        _d),
    _a[preference_scope_1.PreferenceScope.Folder] = (_e = {},
        _e[projects[0]] = (_f = {},
            _f[propertyName] = 3,
            _f),
        _e[projects[1]] = (_g = {},
            _g[propertyName] = 2,
            _g),
        _e),
    _a);
var workspace = {};
var configuration;
var defaultConfiguration;
var userConfiguration;
var workspaceConfiguration;
var folderConfigurations;
before(function () {
    workspace.getWorkspaceFolder = (function (uri) {
        var name = uri.toString().replace(/[^\/]+$/, '$1');
        var index = projects.indexOf(uri.toString());
        return { uri: uri, name: name, index: index };
    });
    defaultConfiguration = new configuration_1.ConfigurationModel(preferences[preference_scope_1.PreferenceScope.Default], Object.keys(preferences[preference_scope_1.PreferenceScope.Default]));
    userConfiguration = new configuration_1.ConfigurationModel(preferences[preference_scope_1.PreferenceScope.User], Object.keys(preferences[preference_scope_1.PreferenceScope.User]));
    workspaceConfiguration = new configuration_1.ConfigurationModel(preferences[preference_scope_1.PreferenceScope.Workspace], Object.keys(preferences[preference_scope_1.PreferenceScope.Workspace]));
    folderConfigurations = projects.reduce(function (configurations, project) {
        var folderPrefs = preferences[preference_scope_1.PreferenceScope.Folder][project];
        configurations[project] = new configuration_1.ConfigurationModel(folderPrefs, Object.keys(folderPrefs));
        return configurations;
    }, {});
});
describe('Configuration:', function () {
    describe('Default scope preferences:', function () {
        beforeEach(function () {
            configuration = new configuration_1.Configuration(defaultConfiguration, new configuration_1.ConfigurationModel({}, []), undefined, undefined);
            inspect = configuration.inspect(propertyName, workspace, undefined);
        });
        it('should have correct value of \'default\' property', function () {
            expect(inspect).to.have.property('default', preferences[preference_scope_1.PreferenceScope.Default][propertyName]);
            expect(inspect.default).to.equal(preferences[preference_scope_1.PreferenceScope.Default][propertyName]);
        });
        it('should have correct value of \'value\' property', function () {
            expect(inspect).to.have.property('value', preferences[preference_scope_1.PreferenceScope.Default][propertyName]);
            expect(inspect.value).to.equal(preferences[preference_scope_1.PreferenceScope.Default][propertyName]);
        });
    });
    describe('User scope preferences:', function () {
        beforeEach(function () {
            configuration = new configuration_1.Configuration(defaultConfiguration, userConfiguration, undefined, undefined);
            inspect = configuration.inspect(propertyName, workspace, undefined);
        });
        it('should have correct value of \'default\' property', function () {
            expect(inspect).to.have.property('default', preferences[preference_scope_1.PreferenceScope.Default][propertyName]);
            expect(inspect.default).to.equal(preferences[preference_scope_1.PreferenceScope.Default][propertyName]);
        });
        it('should have correct value of \'user\' property', function () {
            expect(inspect).to.have.property('user', preferences[preference_scope_1.PreferenceScope.User][propertyName]);
            expect(inspect.user).to.equal(preferences[preference_scope_1.PreferenceScope.User][propertyName]);
        });
        it('should have correct value of \'value\' property', function () {
            expect(inspect).to.have.property('value', preferences[preference_scope_1.PreferenceScope.User][propertyName]);
            expect(inspect.value).to.equal(preferences[preference_scope_1.PreferenceScope.User][propertyName]);
        });
    });
    describe('Workspace scope preferences:', function () {
        beforeEach(function () {
            configuration = new configuration_1.Configuration(defaultConfiguration, userConfiguration, workspaceConfiguration, undefined);
            inspect = configuration.inspect(propertyName, workspace, undefined);
        });
        it('should have correct value of \'default\' property', function () {
            expect(inspect).to.have.property('default', preferences[preference_scope_1.PreferenceScope.Default][propertyName]);
            expect(inspect.default).to.equal(preferences[preference_scope_1.PreferenceScope.Default][propertyName]);
        });
        it('should have correct value of \'user\' property', function () {
            expect(inspect).to.have.property('user', preferences[preference_scope_1.PreferenceScope.User][propertyName]);
            expect(inspect.user).to.equal(preferences[preference_scope_1.PreferenceScope.User][propertyName]);
        });
        it('should have correct value of \'workspace\' property', function () {
            expect(inspect).to.have.property('workspace', preferences[preference_scope_1.PreferenceScope.Workspace][propertyName]);
            expect(inspect.workspace).to.equal(preferences[preference_scope_1.PreferenceScope.Workspace][propertyName]);
        });
        it('should have correct value of \'value\' property', function () {
            expect(inspect).to.have.property('value', preferences[preference_scope_1.PreferenceScope.Workspace][propertyName]);
            expect(inspect.value).to.equal(preferences[preference_scope_1.PreferenceScope.Workspace][propertyName]);
        });
    });
    describe('Folder scope preferences:', function () {
        var project = projects[0];
        beforeEach(function () {
            configuration = new configuration_1.Configuration(defaultConfiguration, userConfiguration, workspaceConfiguration, folderConfigurations);
            var resource = vscode_uri_1.default.revive({ path: project, scheme: '', authority: '', query: '', fragment: '' });
            inspect = configuration.inspect(propertyName, workspace, resource);
        });
        it('should have correct value of \'default\' property', function () {
            expect(inspect).to.have.property('default', preferences[preference_scope_1.PreferenceScope.Default][propertyName]);
            expect(inspect.default).to.equal(preferences[preference_scope_1.PreferenceScope.Default][propertyName]);
        });
        it('should have correct value of \'user\' property', function () {
            expect(inspect).to.have.property('user', preferences[preference_scope_1.PreferenceScope.User][propertyName]);
            expect(inspect.user).to.equal(preferences[preference_scope_1.PreferenceScope.User][propertyName]);
        });
        it('should have correct value of \'workspace\' property', function () {
            expect(inspect).to.have.property('workspace', preferences[preference_scope_1.PreferenceScope.Workspace][propertyName]);
            expect(inspect.workspace).to.equal(preferences[preference_scope_1.PreferenceScope.Workspace][propertyName]);
        });
        it('should have correct value of \'workspaceFolder\' property', function () {
            expect(inspect).to.have.property('workspaceFolder', preferences[preference_scope_1.PreferenceScope.Folder][project][propertyName]);
            expect(inspect.workspaceFolder).to.equal(preferences[preference_scope_1.PreferenceScope.Folder][project][propertyName]);
        });
        it('should have correct value of \'value\' property', function () {
            expect(inspect).to.have.property('value', preferences[preference_scope_1.PreferenceScope.Folder][project][propertyName]);
            expect(inspect.value).to.equal(preferences[preference_scope_1.PreferenceScope.Folder][project][propertyName]);
        });
    });
});
//# sourceMappingURL=configuration.spec.js.map