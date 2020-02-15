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
import * as React from 'react';
import { ExpressionItem, DebugSessionProvider } from '../console/debug-console-items';
import { DebugProtocol } from 'vscode-debugprotocol';
export declare class DebugWatchExpression extends ExpressionItem {
    protected readonly options: {
        id: number;
        expression: string;
        session: DebugSessionProvider;
        onDidChange: () => void;
    };
    readonly id: number;
    constructor(options: {
        id: number;
        expression: string;
        session: DebugSessionProvider;
        onDidChange: () => void;
    });
    evaluate(): Promise<void>;
    protected setResult(body?: DebugProtocol.EvaluateResponse['body']): void;
    render(): React.ReactNode;
    open(): Promise<void>;
    get supportCopyValue(): boolean;
    copyValue(): void;
    protected valueRef: HTMLSpanElement | undefined;
    protected setValueRef: (valueRef: HTMLSpanElement | null) => HTMLSpanElement | undefined;
}
//# sourceMappingURL=debug-watch-expression.d.ts.map