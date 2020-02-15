/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { Disposable, StatusBarAlignment } from './types-impl';
import { StatusBarItem } from '@theia/plugin';
import { StatusBarMessageRegistryMain } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
export declare class StatusBarMessageRegistryExt {
    proxy: StatusBarMessageRegistryMain;
    protected readonly statusMessage: StatusBarMessage;
    constructor(rpc: RPCProtocol);
    setStatusBarMessage(text: string, timeoutOrThenable?: number | PromiseLike<any>): Disposable;
    createStatusBarItem(alignment?: StatusBarAlignment, priority?: number): StatusBarItem;
}
declare class StatusBarMessage {
    private _item;
    private _messages;
    constructor(statusBar: StatusBarMessageRegistryExt);
    dispose(): void;
    setMessage(message: string): Disposable;
    private _update;
}
export {};
//# sourceMappingURL=status-bar-message-registry.d.ts.map