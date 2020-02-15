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
/// <reference types="node" />
import * as ws from 'ws';
import * as http from 'http';
import * as https from 'https';
import { interfaces } from 'inversify';
import { MessageConnection } from 'vscode-jsonrpc';
import { IConnection } from 'vscode-ws-jsonrpc/lib/server/connection';
import { ContributionProvider } from '../../common';
import { WebSocketChannel } from '../../common/messaging/web-socket-channel';
import { BackendApplicationContribution } from '../backend-application';
import { MessagingService } from './messaging-service';
export declare const MessagingContainer: unique symbol;
export declare class MessagingContribution implements BackendApplicationContribution, MessagingService {
    protected readonly container: interfaces.Container;
    protected readonly connectionModules: ContributionProvider<interfaces.ContainerModule>;
    protected readonly contributions: ContributionProvider<MessagingService.Contribution>;
    protected readonly wsHandlers: MessagingContribution.ConnectionHandlers<ws>;
    protected readonly channelHandlers: MessagingContribution.ConnectionHandlers<WebSocketChannel>;
    protected init(): void;
    listen(spec: string, callback: (params: MessagingService.PathParams, connection: MessageConnection) => void): void;
    forward(spec: string, callback: (params: MessagingService.PathParams, connection: IConnection) => void): void;
    wsChannel(spec: string, callback: (params: MessagingService.PathParams, channel: WebSocketChannel) => void): void;
    ws(spec: string, callback: (params: MessagingService.PathParams, socket: ws) => void): void;
    protected checkAliveTimeout: number;
    onStart(server: http.Server | https.Server): void;
    protected handleConnection(socket: ws, request: http.IncomingMessage): void;
    protected handleChannels(socket: ws): void;
    protected getConnectionChannelHandlers(socket: ws): MessagingContribution.ConnectionHandlers<WebSocketChannel>;
    protected createChannel(id: number, socket: ws): WebSocketChannel;
}
export declare namespace MessagingContribution {
    class ConnectionHandlers<T> {
        protected readonly parent?: ConnectionHandlers<T> | undefined;
        protected readonly handlers: ((path: string, connection: T) => string | false)[];
        constructor(parent?: ConnectionHandlers<T> | undefined);
        push(spec: string, callback: (params: MessagingService.PathParams, connection: T) => void): void;
        route(path: string, connection: T): string | false;
    }
}
//# sourceMappingURL=messaging-contribution.d.ts.map