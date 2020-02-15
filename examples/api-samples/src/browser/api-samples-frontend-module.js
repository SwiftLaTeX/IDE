"use strict";
/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
var core_1 = require("@theia/core");
var label_provider_1 = require("@theia/core/lib/browser/label-provider");
var api_samples_contribution_1 = require("./api-samples-contribution");
var sample_dynamic_label_provider_contribution_1 = require("./sample-dynamic-label-provider-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(core_1.CommandContribution).to(api_samples_contribution_1.ApiSamplesContribution).inSingletonScope();
    bind(sample_dynamic_label_provider_contribution_1.SampleDynamicLabelProviderContribution).toSelf().inSingletonScope();
    bind(label_provider_1.LabelProviderContribution).toService(sample_dynamic_label_provider_contribution_1.SampleDynamicLabelProviderContribution);
});
//# sourceMappingURL=api-samples-frontend-module.js.map