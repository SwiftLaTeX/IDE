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
import { WidgetOpenerOptions } from '@theia/core/lib/browser';
import { EditorWidget } from '@theia/editor/lib/browser';
import { DebugProtocol } from 'vscode-debugprotocol/lib/debugProtocol';
import { TreeElement } from '@theia/core/lib/browser/source-tree';
import { DebugScope } from '../console/debug-console-items';
import { DebugSource } from './debug-source';
import { DebugSession } from '../debug-session';
import { DebugThread } from './debug-thread';
export declare class DebugStackFrameData {
    readonly raw: DebugProtocol.StackFrame;
}
export declare class DebugStackFrame extends DebugStackFrameData implements TreeElement {
    readonly thread: DebugThread;
    readonly session: DebugSession;
    constructor(thread: DebugThread, session: DebugSession);
    get id(): string;
    protected _source: DebugSource | undefined;
    get source(): DebugSource | undefined;
    update(data: Partial<DebugStackFrameData>): void;
    restart(): Promise<void>;
    open(options?: WidgetOpenerOptions): Promise<EditorWidget | undefined>;
    protected scopes: Promise<DebugScope[]> | undefined;
    getScopes(): Promise<DebugScope[]>;
    protected doGetScopes(): Promise<DebugScope[]>;
    protected toArgs<T extends object>(arg?: T): {
        frameId: number;
    } & T;
    render(): React.ReactNode;
    protected renderFile(): React.ReactNode;
}
//# sourceMappingURL=debug-stack-frame.d.ts.map