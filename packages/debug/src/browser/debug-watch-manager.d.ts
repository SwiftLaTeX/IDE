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
import { Emitter } from '@theia/core/lib/common/event';
import { StorageService } from '@theia/core/lib/browser/storage-service';
export declare class DebugWatchManager {
    protected readonly storage: StorageService;
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: import("@theia/core/src/common/event").Event<void>;
    protected idSequence: number;
    protected readonly _watchExpressions: Map<number, string>;
    get watchExpressions(): IterableIterator<[number, string]>;
    addWatchExpression(expression: string): number;
    removeWatchExpression(id: number): boolean;
    removeWatchExpressions(): void;
    load(): Promise<void>;
    save(): void;
    protected get storageKey(): string;
    protected storeState(): DebugWatchData;
    protected restoreState(state: DebugWatchData): void;
}
export interface DebugWatchData {
    readonly expressions: string[];
}
//# sourceMappingURL=debug-watch-manager.d.ts.map