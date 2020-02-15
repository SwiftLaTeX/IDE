/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
/// <reference types="lodash" />
import { MessageClient, MessageType, Message as PlainMessage, ProgressMessage, ProgressUpdate, CancellationToken } from '@theia/core/lib/common';
import { Emitter } from '@theia/core';
import { Deferred } from '@theia/core/lib/common/promise-util';
import * as markdownit from 'markdown-it';
import { NotificationPreferences } from './notification-preferences';
import { ContextKeyService, ContextKey } from '@theia/core/lib/browser/context-key-service';
import { OpenerService } from '@theia/core/lib/browser';
export interface NotificationUpdateEvent {
    readonly notifications: Notification[];
    readonly toasts: Notification[];
    readonly visibilityState: Notification.Visibility;
}
export interface Notification {
    messageId: string;
    message: string;
    source?: string;
    expandable: boolean;
    collapsed: boolean;
    type: Notification.Type;
    actions: string[];
    progress?: number;
}
export declare namespace Notification {
    type Visibility = 'hidden' | 'toasts' | 'center';
    type Type = 'info' | 'warning' | 'error' | 'progress';
}
export declare class NotificationManager extends MessageClient {
    protected readonly preferences: NotificationPreferences;
    protected readonly contextKeyService: ContextKeyService;
    protected readonly openerService: OpenerService;
    protected readonly onUpdatedEmitter: Emitter<NotificationUpdateEvent>;
    readonly onUpdated: import("@theia/core").Event<NotificationUpdateEvent>;
    protected readonly fireUpdatedEvent: (() => void) & import("lodash").Cancelable;
    protected readonly deferredResults: Map<string, Deferred<string | undefined>>;
    protected readonly notifications: Map<string, Notification>;
    protected readonly toasts: Map<string, Notification>;
    protected notificationToastsVisibleKey: ContextKey<boolean>;
    protected notificationCenterVisibleKey: ContextKey<boolean>;
    protected init(): Promise<void>;
    protected updateContextKeys(): void;
    get toastsVisible(): boolean;
    get centerVisible(): boolean;
    protected visibilityState: Notification.Visibility;
    protected setVisibilityState(newState: Notification.Visibility): void;
    hideCenter(): void;
    toggleCenter(): void;
    accept(notification: Notification | string, action: string | undefined): void;
    protected find(notification: Notification | string): Notification | undefined;
    protected getId(notification: Notification | string): string;
    hide(): void;
    clearAll(): void;
    clear(notification: Notification | string): void;
    toggleExpansion(notificationId: string): void;
    showMessage(plainMessage: PlainMessage): Promise<string | undefined>;
    protected hideTimeouts: Map<string, number>;
    protected startHideTimeout(messageId: string, timeout: number): void;
    protected hideToast(messageId: string): void;
    protected getTimeout(plainMessage: PlainMessage): number;
    protected readonly mdEngine: markdownit;
    protected renderMessage(content: string): string;
    protected isExpandable(message: string, source: string | undefined, actions: string[]): boolean;
    protected toNotificationType(type?: MessageType): Notification.Type;
    protected getMessageId(m: PlainMessage): string;
    showProgress(messageId: string, plainMessage: ProgressMessage, cancellationToken: CancellationToken): Promise<string | undefined>;
    reportProgress(messageId: string, update: ProgressUpdate, originalMessage: ProgressMessage, cancellationToken: CancellationToken): Promise<void>;
    protected toPlainProgress(update: ProgressUpdate): number | undefined;
    openLink(link: string): Promise<void>;
}
//# sourceMappingURL=notifications-manager.d.ts.map