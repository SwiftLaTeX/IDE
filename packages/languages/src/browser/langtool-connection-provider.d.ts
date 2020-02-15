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
import { Logger } from 'vscode-ws-jsonrpc/lib';
import { ConnectionHandler } from '@theia/core/lib/common';
import { WebSocketChannel } from '@theia/core/lib/common/messaging/web-socket-channel';
import ReconnectingWebSocket from 'reconnecting-websocket';
interface LangToolSocketOptions {
    /**
     * True by default.
     */
    reconnecting?: boolean;
}
export declare class LangToolWebSocketConnectionProvider {
    protected channelIdSeq: number;
    protected readonly socket: ReconnectingWebSocket;
    protected readonly channels: Map<number, WebSocketChannel>;
    constructor();
    /**
     * Install a connection handler for the given path.
     */
    listen(handler: ConnectionHandler, options?: LangToolSocketOptions): void;
    openChannel(path: string, handler: (channel: WebSocketChannel) => void, options?: LangToolSocketOptions): void;
    protected doOpenChannel(path: string, handler: (channel: WebSocketChannel) => void, options?: LangToolSocketOptions): void;
    protected createChannel(id: number): WebSocketChannel;
    protected createLogger(): Logger;
    /**
     * Creates a web socket for the given url
     */
    protected createWebSocket(url: string): ReconnectingWebSocket;
}
export {};
//# sourceMappingURL=langtool-connection-provider.d.ts.map