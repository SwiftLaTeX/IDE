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
import { MessageClient, MessageType, MessageOptions, Progress, ProgressMessage } from './message-service-protocol';
export declare class MessageService {
    protected readonly client: MessageClient;
    constructor(client: MessageClient);
    log<T extends string>(message: string, ...actions: T[]): Promise<T | undefined>;
    log<T extends string>(message: string, options?: MessageOptions, ...actions: T[]): Promise<T | undefined>;
    info<T extends string>(message: string, ...actions: T[]): Promise<T | undefined>;
    info<T extends string>(message: string, options?: MessageOptions, ...actions: T[]): Promise<T | undefined>;
    warn<T extends string>(message: string, ...actions: T[]): Promise<T | undefined>;
    warn<T extends string>(message: string, options?: MessageOptions, ...actions: T[]): Promise<T | undefined>;
    error<T extends string>(message: string, ...actions: T[]): Promise<T | undefined>;
    error<T extends string>(message: string, options?: MessageOptions, ...actions: T[]): Promise<T | undefined>;
    protected processMessage(type: MessageType, text: string, args?: any[]): Promise<string | undefined>;
    showProgress(message: ProgressMessage, onDidCancel?: () => void): Promise<Progress>;
    private progressIdPrefix;
    private counter;
    protected newProgressId(): string;
}
//# sourceMappingURL=message-service.d.ts.map