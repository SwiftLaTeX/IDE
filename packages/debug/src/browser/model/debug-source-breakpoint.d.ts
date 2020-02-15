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
import * as React from 'react';
import { DebugProtocol } from 'vscode-debugprotocol/lib/debugProtocol';
import { WidgetOpenerOptions } from '@theia/core/lib/browser';
import { TreeElement } from '@theia/core/lib/browser/source-tree';
import { SourceBreakpoint } from '../breakpoint/breakpoint-marker';
import { DebugSource } from './debug-source';
import { DebugBreakpoint, DebugBreakpointOptions, DebugBreakpointData, DebugBreakpointDecoration } from './debug-breakpoint';
export declare class DebugSourceBreakpointData extends DebugBreakpointData {
    readonly origins: SourceBreakpoint[];
}
export declare class DebugSourceBreakpoint extends DebugBreakpoint<SourceBreakpoint> implements TreeElement {
    readonly origins: SourceBreakpoint[];
    constructor(origin: SourceBreakpoint, options: DebugBreakpointOptions);
    update(data: Partial<DebugSourceBreakpointData>): void;
    get origin(): SourceBreakpoint;
    setEnabled(enabled: boolean): void;
    updateOrigins(data: Partial<DebugProtocol.SourceBreakpoint>): void;
    /** 1-based */
    get line(): number;
    get column(): number | undefined;
    get endLine(): number | undefined;
    get endColumn(): number | undefined;
    get condition(): string | undefined;
    get hitCondition(): string | undefined;
    get logMessage(): string | undefined;
    get source(): DebugSource | undefined;
    open(options?: WidgetOpenerOptions): Promise<void>;
    protected readonly setBreakpointEnabled: (event: React.ChangeEvent<HTMLInputElement>) => void;
    protected doRender(): React.ReactNode;
    renderPosition(): string;
    doGetDecoration(messages?: string[]): DebugBreakpointDecoration;
    protected getUnsupportedBreakpointDecoration(message: string): DebugBreakpointDecoration;
    protected getBreakpointDecoration(message?: string[]): DebugBreakpointDecoration;
    remove(): void;
    protected doRemove(origins: SourceBreakpoint[]): SourceBreakpoint[] | undefined;
}
//# sourceMappingURL=debug-source-breakpoint.d.ts.map