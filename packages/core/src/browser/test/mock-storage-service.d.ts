/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { StorageService } from '../storage-service';
/**
 * A StorageService suitable to use during tests.
 */
export declare class MockStorageService implements StorageService {
    readonly data: Map<string, {} | undefined>;
    onSetDataCallback?: (key: string, data?: any) => void;
    onSetData(callback: (key: string, data?: any) => void): void;
    setData<T>(key: string, data?: T): Promise<void>;
    getData<T>(key: string, defaultValue?: T): Promise<T | undefined>;
}
//# sourceMappingURL=mock-storage-service.d.ts.map