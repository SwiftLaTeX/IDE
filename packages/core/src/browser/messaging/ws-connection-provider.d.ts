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
import { interfaces } from 'inversify';
import { Logger } from 'vscode-ws-jsonrpc/lib';
import { ConnectionHandler, JsonRpcProxyFactory, JsonRpcProxy, Emitter, Event } from '../../common';
import { WebSocketChannel } from '../../common/messaging/web-socket-channel';
import ReconnectingWebSocket from 'reconnecting-websocket';
export interface WebSocketOptions {
    /**
     * True by default.
     */
    reconnecting?: boolean;
}
export declare class WebSocketConnectionProvider {
    /**
     * Create a proxy object to remote interface of T type
     * over a web socket connection for the given path and proxy factory.
     */
    static createProxy<T extends object>(container: interfaces.Container, path: string, factory: JsonRpcProxyFactory<T>): JsonRpcProxy<T>;
    /**
     * Create a proxy object to remote interface of T type
     * over a web socket connection for the given path.
     *
     * An optional target can be provided to handle
     * notifications and requests from a remote side.
     */
    static createProxy<T extends object>(container: interfaces.Container, path: string, target?: object): JsonRpcProxy<T>;
    protected channelIdSeq: number;
    protected readonly socket: ReconnectingWebSocket;
    protected readonly channels: Map<number, WebSocketChannel>;
    protected hasStarted: boolean;
    protected readonly onIncomingMessageActivityEmitter: Emitter<void>;
    onIncomingMessageActivity: Event<void>;
    constructor();
    /**
     * Create a proxy object to remote interface of T type
     * over a web socket connection for the given path and proxy factory.
     */
    createProxy<T extends object>(path: string, factory: JsonRpcProxyFactory<T>): JsonRpcProxy<T>;
    /**
     * Create a proxy object to remote interface of T type
     * over a web socket connection for the given path.
     *
     * An optional target can be provided to handle
     * notifications and requests from a remote side.
     */
    createProxy<T extends object>(path: string, target?: object): JsonRpcProxy<T>;
    /**
     * Install a connection handler for the given path.
     */
    listen(handler: ConnectionHandler, options?: WebSocketOptions): void;
    openChannel(path: string, handler: (channel: WebSocketChannel) => void, options?: WebSocketOptions): void;
    protected doOpenChannel(path: string, handler: (channel: WebSocketChannel) => void, options?: WebSocketOptions): void;
    protected createChannel(id: number): WebSocketChannel;
    protected createLogger(): Logger;
    /**
     * Creates a websocket URL to the current location
     */
    protected createWebSocketUrl(path: string): string;
    /**
     * Creates a web socket for the given url
     */
    protected createWebSocket(url: string): ReconnectingWebSocket;
    protected checkWebSocketStatus(): void;
}
//# sourceMappingURL=ws-connection-provider.d.ts.map