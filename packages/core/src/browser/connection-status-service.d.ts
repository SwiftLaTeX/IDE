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
import { ILogger } from '../common/logger';
import { Event, Emitter } from '../common/event';
import { DefaultFrontendApplicationContribution } from './frontend-application';
import { StatusBar } from './status-bar/status-bar';
import { WebSocketConnectionProvider } from './messaging/ws-connection-provider';
import { Disposable, DisposableCollection } from '../common';
/**
 * Service for listening on backend connection changes.
 */
export declare const ConnectionStatusService: unique symbol;
export interface ConnectionStatusService {
    /**
     * The actual connection status.
     */
    readonly currentStatus: ConnectionStatus;
    /**
     * Clients can listen on connection status change events.
     */
    readonly onStatusChange: Event<ConnectionStatus>;
}
/**
 * The connection status.
 */
export declare enum ConnectionStatus {
    /**
     * Connected to the backend.
     */
    ONLINE = 0,
    /**
     * The connection is lost between frontend and backend.
     */
    OFFLINE = 1
}
export declare class ConnectionStatusOptions {
    static DEFAULT: ConnectionStatusOptions;
    /**
     * Timeout in milliseconds before the application is considered offline. Must be a positive integer.
     */
    readonly offlineTimeout: number;
}
export declare const PingService: unique symbol;
export interface PingService {
    ping(): Promise<void>;
}
export declare abstract class AbstractConnectionStatusService implements ConnectionStatusService, Disposable {
    protected readonly options: ConnectionStatusOptions;
    protected readonly statusChangeEmitter: Emitter<ConnectionStatus>;
    protected connectionStatus: ConnectionStatus;
    protected timer: number | undefined;
    protected readonly logger: ILogger;
    constructor(options?: ConnectionStatusOptions);
    get onStatusChange(): Event<ConnectionStatus>;
    get currentStatus(): ConnectionStatus;
    dispose(): void;
    protected updateStatus(success: boolean): void;
    protected fireStatusChange(status: ConnectionStatus): void;
    protected setTimeout(handler: (...args: any[]) => void, timeout: number): number;
    protected clearTimeout(handle: number): void;
}
export declare class FrontendConnectionStatusService extends AbstractConnectionStatusService {
    private scheduledPing;
    protected readonly wsConnectionProvider: WebSocketConnectionProvider;
    protected readonly pingService: PingService;
    protected init(): void;
    protected schedulePing(): void;
}
export declare class ApplicationConnectionStatusContribution extends DefaultFrontendApplicationContribution {
    protected readonly connectionStatusService: ConnectionStatusService;
    protected readonly statusBar: StatusBar;
    protected readonly logger: ILogger;
    protected readonly toDisposeOnOnline: DisposableCollection;
    constructor(connectionStatusService: ConnectionStatusService, statusBar: StatusBar, logger: ILogger);
    protected onStateChange(state: ConnectionStatus): void;
    private statusbarId;
    protected handleOnline(): void;
    protected handleOffline(): void;
}
//# sourceMappingURL=connection-status-service.d.ts.map