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
import { Emitter } from '@theia/core/lib/common';
import { StorageService } from '@theia/core/lib/browser';
import { Marker } from '@theia/markers/lib/common/marker';
import { MarkerManager } from '@theia/markers/lib/browser/marker-manager';
import URI from '@theia/core/lib/common/uri';
import { SourceBreakpoint, ExceptionBreakpoint, FunctionBreakpoint, BaseBreakpoint } from './breakpoint-marker';
export interface BreakpointsChangeEvent<T extends BaseBreakpoint> {
    uri: URI;
    added: T[];
    removed: T[];
    changed: T[];
}
export declare type SourceBreakpointsChangeEvent = BreakpointsChangeEvent<SourceBreakpoint>;
export declare type FunctionBreakpointsChangeEvent = BreakpointsChangeEvent<FunctionBreakpoint>;
export declare class BreakpointManager extends MarkerManager<SourceBreakpoint> {
    static EXCEPTION_URI: URI;
    static FUNCTION_URI: URI;
    protected readonly owner = "breakpoint";
    protected readonly storage: StorageService;
    getKind(): string;
    protected readonly onDidChangeBreakpointsEmitter: Emitter<SourceBreakpointsChangeEvent>;
    readonly onDidChangeBreakpoints: import("@theia/core/src/common").Event<SourceBreakpointsChangeEvent>;
    protected readonly onDidChangeFunctionBreakpointsEmitter: Emitter<FunctionBreakpointsChangeEvent>;
    readonly onDidChangeFunctionBreakpoints: import("@theia/core/src/common").Event<FunctionBreakpointsChangeEvent>;
    setMarkers(uri: URI, owner: string, newMarkers: SourceBreakpoint[]): Marker<SourceBreakpoint>[];
    getLineBreakpoints(uri: URI, line: number): SourceBreakpoint[];
    getInlineBreakpoint(uri: URI, line: number, column: number): SourceBreakpoint | undefined;
    getBreakpoints(uri?: URI): SourceBreakpoint[];
    setBreakpoints(uri: URI, breakpoints: SourceBreakpoint[]): void;
    addBreakpoint(breakpoint: SourceBreakpoint): boolean;
    enableAllBreakpoints(enabled: boolean): void;
    protected _breakpointsEnabled: boolean;
    get breakpointsEnabled(): boolean;
    set breakpointsEnabled(breakpointsEnabled: boolean);
    protected readonly exceptionBreakpoints: Map<string, ExceptionBreakpoint>;
    getExceptionBreakpoint(filter: string): ExceptionBreakpoint | undefined;
    getExceptionBreakpoints(): IterableIterator<ExceptionBreakpoint>;
    setExceptionBreakpoints(exceptionBreakpoints: ExceptionBreakpoint[]): void;
    toggleExceptionBreakpoint(filter: string): void;
    protected functionBreakpoints: FunctionBreakpoint[];
    getFunctionBreakpoints(): FunctionBreakpoint[];
    setFunctionBreakpoints(functionBreakpoints: FunctionBreakpoint[]): void;
    hasBreakpoints(): boolean;
    removeBreakpoints(): void;
    load(): Promise<void>;
    save(): void;
}
export declare namespace BreakpointManager {
    interface Data {
        breakpointsEnabled: boolean;
        breakpoints: {
            [uri: string]: SourceBreakpoint[];
        };
        exceptionBreakpoints?: ExceptionBreakpoint[];
        functionBreakpoints?: FunctionBreakpoint[];
    }
}
//# sourceMappingURL=breakpoint-manager.d.ts.map