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
import { Event } from './event';
export interface CancellationToken {
    readonly isCancellationRequested: boolean;
    readonly onCancellationRequested: Event<void>;
}
export declare namespace CancellationToken {
    const None: CancellationToken;
    const Cancelled: CancellationToken;
}
export declare class CancellationTokenSource {
    private _token;
    get token(): CancellationToken;
    cancel(): void;
    dispose(): void;
}
export declare function cancelled(): Error;
export declare function isCancelled(err: Error | undefined): boolean;
export declare function checkCancelled(token?: CancellationToken): void;
//# sourceMappingURL=cancellation.d.ts.map