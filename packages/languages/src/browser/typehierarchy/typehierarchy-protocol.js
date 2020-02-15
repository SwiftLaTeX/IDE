"use strict";
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var language_client_services_1 = require("../language-client-services");
var TypeHierarchyDirection;
(function (TypeHierarchyDirection) {
    /**
     * Flag for retrieving/resolving the subtypes.
     */
    TypeHierarchyDirection.Children = 0;
    /**
     * Flag to use when retrieving/resolving the supertypes.
     */
    TypeHierarchyDirection.Parents = 1;
    /**
     * Flag for resolving both the super- and subtypes.
     */
    TypeHierarchyDirection.Both = 2;
})(TypeHierarchyDirection = exports.TypeHierarchyDirection || (exports.TypeHierarchyDirection = {}));
/**
 * The `textDocument/typeHierarchy` request is sent from the client to the server to retrieve the type hierarchy
 * items from a given position of a text document. Can resolve the parentage information on demand.
 * If no item can be retrieved for a given text document position, returns with `null`.
 */
var TypeHierarchyRequest;
(function (TypeHierarchyRequest) {
    TypeHierarchyRequest.type = new language_client_services_1.RequestType('textDocument/typeHierarchy');
})(TypeHierarchyRequest = exports.TypeHierarchyRequest || (exports.TypeHierarchyRequest = {}));
/**
 * The `typeHierarchy/resolve` request is sent from the client to the server to resolve a type hierarchy
 * item by resolving sub- and supertype information.
 */
var ResolveTypeHierarchyRequest;
(function (ResolveTypeHierarchyRequest) {
    ResolveTypeHierarchyRequest.type = new language_client_services_1.RequestType('typeHierarchy/resolve');
})(ResolveTypeHierarchyRequest = exports.ResolveTypeHierarchyRequest || (exports.ResolveTypeHierarchyRequest = {}));
//# sourceMappingURL=typehierarchy-protocol.js.map