/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
/// <reference types="node" />
import { MessageConnection } from 'vscode-jsonrpc';
export declare type IPCEntryPoint = (connection: MessageConnection) => void;
/**
 * Exit the current process if the parent process is not alive.
 * Relevant only for some OS, like Windows
 */
export declare function checkParentAlive(): void;
export declare const ipcEntryPoint: string | undefined;
export declare function createIpcEnv(options?: {
    entryPoint?: string;
    env?: NodeJS.ProcessEnv;
}): NodeJS.ProcessEnv;
//# sourceMappingURL=ipc-protocol.d.ts.map