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
import { ILogger } from '../common/logger';
import { MessageService } from '../common/message-service';
import { WindowService } from './window/window-service';
export declare const StorageService: unique symbol;
/**
 * The storage service provides an interface to some data storage that allows extensions to keep state among sessions.
 */
export interface StorageService {
    /**
     * Stores the given data under the given key.
     */
    setData<T>(key: string, data: T): Promise<void>;
    /**
     * Returns the data stored for the given key or the provided default value if nothing is stored for the given key.
     */
    getData<T>(key: string, defaultValue: T): Promise<T>;
    getData<T>(key: string): Promise<T | undefined>;
}
export declare class LocalStorageService implements StorageService {
    private storage;
    protected logger: ILogger;
    protected readonly messageService: MessageService;
    protected readonly windowService: WindowService;
    protected init(): void;
    setData<T>(key: string, data?: T): Promise<void>;
    getData<T>(key: string, defaultValue?: T): Promise<T | undefined>;
    protected prefix(key: string): string;
    private showDiskQuotaExceededMessage;
    /**
     * Verify if there is still some spaces left to save another workspace configuration into the local storage of your browser.
     * If we are close to the limit, use a dialog to notify the user.
     */
    private testLocalStorage;
    private clearStorage;
}
//# sourceMappingURL=storage-service.d.ts.map