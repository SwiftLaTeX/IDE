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
import URI from '@theia/core/lib/common/uri';
import { Marker } from '@theia/markers/lib/common/marker';
import { DebugProtocol } from 'vscode-debugprotocol/lib/debugProtocol';
export declare const BREAKPOINT_KIND = "breakpoint";
export interface BaseBreakpoint {
    id: string;
    enabled: boolean;
}
export interface SourceBreakpoint extends BaseBreakpoint {
    uri: string;
    raw: DebugProtocol.SourceBreakpoint;
}
export declare namespace SourceBreakpoint {
    function create(uri: URI, data: DebugProtocol.SourceBreakpoint, origin?: SourceBreakpoint): SourceBreakpoint;
}
export interface BreakpointMarker extends Marker<SourceBreakpoint> {
    kind: 'breakpoint';
}
export declare namespace BreakpointMarker {
    function is(node: Marker<object>): node is BreakpointMarker;
}
export interface ExceptionBreakpoint {
    enabled: boolean;
    raw: DebugProtocol.ExceptionBreakpointsFilter;
}
export declare namespace ExceptionBreakpoint {
    function create(data: DebugProtocol.ExceptionBreakpointsFilter, origin?: ExceptionBreakpoint): ExceptionBreakpoint;
}
export interface FunctionBreakpoint extends BaseBreakpoint {
    raw: DebugProtocol.FunctionBreakpoint;
}
export declare namespace FunctionBreakpoint {
    function create(data: DebugProtocol.FunctionBreakpoint, origin?: FunctionBreakpoint): FunctionBreakpoint;
}
//# sourceMappingURL=breakpoint-marker.d.ts.map