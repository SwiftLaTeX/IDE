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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var location_mapper_service_1 = require("@theia/mini-browser/lib/browser/location-mapper-service");
var PreviewLinkNormalizer = /** @class */ (function () {
    function PreviewLinkNormalizer() {
        this.urlScheme = new RegExp('^[a-z][a-z|0-9|\+|\-|\.]*:', 'i');
    }
    PreviewLinkNormalizer.prototype.normalizeLink = function (documentUri, link) {
        try {
            if (!this.urlScheme.test(link)) {
                var location_1 = documentUri.parent.resolve(link).path.toString();
                return new location_mapper_service_1.MiniBrowserEndpoint().getRestUrl().resolve(location_1).toString();
            }
        }
        catch (_a) {
            // ignore
        }
        return link;
    };
    PreviewLinkNormalizer = __decorate([
        inversify_1.injectable()
    ], PreviewLinkNormalizer);
    return PreviewLinkNormalizer;
}());
exports.PreviewLinkNormalizer = PreviewLinkNormalizer;
//# sourceMappingURL=preview-link-normalizer.js.map