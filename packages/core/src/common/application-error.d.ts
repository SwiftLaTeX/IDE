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
export interface ApplicationError<C extends number, D> extends Error {
    readonly code: C;
    readonly data: D;
    toJson(): ApplicationError.Literal<D>;
}
export declare namespace ApplicationError {
    interface Literal<D> {
        message: string;
        data: D;
        stack?: string;
    }
    interface Constructor<C extends number, D> {
        (...args: any[]): ApplicationError<C, D>;
        code: C;
        is(arg: object | undefined): arg is ApplicationError<C, D>;
    }
    function declare<C extends number, D>(code: C, factory: (...args: any[]) => Literal<D>): Constructor<C, D>;
    function is<C extends number, D>(arg: object | undefined): arg is ApplicationError<C, D>;
    function fromJson<C extends number, D>(code: C, raw: Literal<D>): ApplicationError<C, D>;
}
//# sourceMappingURL=application-error.d.ts.map