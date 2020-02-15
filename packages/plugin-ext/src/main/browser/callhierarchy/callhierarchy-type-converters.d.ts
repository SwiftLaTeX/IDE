/********************************************************************************
 * Copyright (C) 2020 Red Hat, Inc. and others.
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
import { Definition as CallHierarchyDefinition, Caller as CallHierarchyCaller } from '@theia/callhierarchy/lib/browser';
import * as model from '../../../common/plugin-api-rpc-model';
import * as rpc from '../../../common/plugin-api-rpc';
import * as callhierarchy from 'vscode-languageserver-types';
import { UriComponents } from '../../../common/uri-components';
import { Location } from 'vscode-languageserver-types';
export declare function toUriComponents(uri: string): UriComponents;
export declare function fromUriComponents(uri: UriComponents): string;
export declare function fromLocation(location: Location): model.Location;
export declare function toLocation(uri: UriComponents, range: model.Range): Location;
export declare function fromPosition(position: callhierarchy.Position): rpc.Position;
export declare function fromRange(range: callhierarchy.Range): model.Range;
export declare function toRange(range: model.Range): callhierarchy.Range;
export declare namespace SymbolKindConverter {
    function fromSymbolKind(kind: callhierarchy.SymbolKind): model.SymbolKind;
    function toSymbolKind(kind: model.SymbolKind): callhierarchy.SymbolKind;
}
export declare function toDefinition(definition: model.CallHierarchyDefinition): CallHierarchyDefinition;
export declare function toDefinition(definition: model.CallHierarchyDefinition | undefined): CallHierarchyDefinition | undefined;
export declare function fromDefinition(definition: CallHierarchyDefinition): model.CallHierarchyDefinition;
export declare function toCaller(caller: model.CallHierarchyReference): CallHierarchyCaller;
export declare function fromCaller(caller: CallHierarchyCaller): model.CallHierarchyReference;
//# sourceMappingURL=callhierarchy-type-converters.d.ts.map