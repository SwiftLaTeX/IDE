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
export declare class ConsoleHistory {
    static limit: number;
    protected values: string[];
    protected index: number;
    push(value: string): void;
    protected delete(value: string): void;
    protected trim(): void;
    get current(): string | undefined;
    get previous(): string | undefined;
    get next(): string | undefined;
    store(): ConsoleHistory.Data;
    restore(object: ConsoleHistory): void;
}
export declare namespace ConsoleHistory {
    interface Data {
        values: string[];
        index: number;
    }
}
//# sourceMappingURL=console-history.d.ts.map