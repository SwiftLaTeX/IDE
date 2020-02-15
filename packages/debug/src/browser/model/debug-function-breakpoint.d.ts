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
import * as React from 'react';
import { TreeElement } from '@theia/core/lib/browser/source-tree';
import { FunctionBreakpoint } from '../breakpoint/breakpoint-marker';
import { DebugBreakpoint, DebugBreakpointOptions, DebugBreakpointDecoration } from './debug-breakpoint';
export declare class DebugFunctionBreakpoint extends DebugBreakpoint<FunctionBreakpoint> implements TreeElement {
    readonly origin: FunctionBreakpoint;
    constructor(origin: FunctionBreakpoint, options: DebugBreakpointOptions);
    setEnabled(enabled: boolean): void;
    protected isEnabled(): boolean;
    protected isSupported(): boolean;
    remove(): void;
    get name(): string;
    protected doRender(): React.ReactNode;
    protected doGetDecoration(): DebugBreakpointDecoration;
    protected getBreakpointDecoration(message?: string[]): DebugBreakpointDecoration;
    open(): Promise<void>;
}
//# sourceMappingURL=debug-function-breakpoint.d.ts.map