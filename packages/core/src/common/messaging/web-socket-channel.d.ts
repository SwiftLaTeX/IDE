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
import { IWebSocket } from 'vscode-ws-jsonrpc/lib/socket/socket';
import { Disposable, DisposableCollection } from '../disposable';
import { Emitter } from '../event';
export declare class WebSocketChannel implements IWebSocket {
    readonly id: number;
    protected readonly doSend: (content: string) => void;
    static wsPath: string;
    protected readonly closeEmitter: Emitter<[number, string]>;
    protected readonly toDispose: DisposableCollection;
    constructor(id: number, doSend: (content: string) => void);
    dispose(): void;
    protected checkNotDisposed(): void;
    handleMessage(message: WebSocketChannel.Message): void;
    open(path: string): void;
    ready(): void;
    send(content: string): void;
    close(code?: number, reason?: string): void;
    tryClose(code?: number, reason?: string): void;
    protected fireOpen: () => void;
    onOpen(cb: () => void): void;
    protected fireMessage: (data: any) => void;
    onMessage(cb: (data: any) => void): void;
    fireError: (reason: any) => void;
    onError(cb: (reason: any) => void): void;
    protected closing: boolean;
    protected fireClose(code: number, reason: string): void;
    onClose(cb: (code: number, reason: string) => void): Disposable;
}
export declare namespace WebSocketChannel {
    interface OpenMessage {
        kind: 'open';
        id: number;
        path: string;
    }
    interface ReadyMessage {
        kind: 'ready';
        id: number;
    }
    interface DataMessage {
        kind: 'data';
        id: number;
        content: string;
    }
    interface CloseMessage {
        kind: 'close';
        id: number;
        code: number;
        reason: string;
    }
    type Message = OpenMessage | ReadyMessage | DataMessage | CloseMessage;
}
//# sourceMappingURL=web-socket-channel.d.ts.map