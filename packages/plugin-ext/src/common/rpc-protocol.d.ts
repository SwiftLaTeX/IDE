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
import { Event } from '@theia/core/lib/common/event';
import { Disposable } from '@theia/core/lib/common/disposable';
export interface MessageConnection {
    send(msg: {}): void;
    onMessage: Event<{}>;
}
export declare const RPCProtocol: unique symbol;
export interface RPCProtocol extends Disposable {
    /**
     * Returns a proxy to an object addressable/named in the plugin process or in the main process.
     */
    getProxy<T>(proxyId: ProxyIdentifier<T>): T;
    /**
     * Register manually created instance.
     */
    set<T, R extends T>(identifier: ProxyIdentifier<T>, instance: R): R;
}
export declare class ProxyIdentifier<T> {
    readonly isMain: boolean;
    readonly id: string;
    constructor(isMain: boolean, id: string | T);
}
export declare function createProxyIdentifier<T>(identifier: string): ProxyIdentifier<T>;
export declare class RPCProtocolImpl implements RPCProtocol {
    readonly remoteHostID?: string | undefined;
    private readonly locals;
    private readonly proxies;
    private lastMessageId;
    private readonly cancellationTokenSources;
    private readonly pendingRPCReplies;
    private readonly multiplexor;
    private messageToSendHostId;
    private readonly toDispose;
    constructor(connection: MessageConnection, remoteHostID?: string | undefined);
    private get isDisposed();
    dispose(): void;
    getProxy<T>(proxyId: ProxyIdentifier<T>): T;
    set<T, R extends T>(identifier: ProxyIdentifier<T>, instance: R): R;
    private createProxy;
    private remoteCall;
    private receiveOneMessage;
    private receiveCancel;
    private receiveRequest;
    private receiveReply;
    private receiveReplyErr;
    private invokeHandler;
    private doInvokeHandler;
}
export interface SerializedError {
    readonly $isError: true;
    readonly name: string;
    readonly message: string;
    readonly stack: string;
}
export declare function transformErrorForSerialization(error: Error): SerializedError;
//# sourceMappingURL=rpc-protocol.d.ts.map