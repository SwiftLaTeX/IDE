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
import * as React from 'react';
import { DebugProtocol } from 'vscode-debugprotocol/lib/debugProtocol';
import { ConsoleItem, CompositeConsoleItem } from '@theia/console/lib/browser/console-session';
import { DebugSession } from '../debug-session';
import { Severity } from '@theia/core/lib/common/severity';
export declare type DebugSessionProvider = () => DebugSession | undefined;
export declare class ExpressionContainer implements CompositeConsoleItem {
    private static readonly BASE_CHUNK_SIZE;
    protected readonly sessionProvider: DebugSessionProvider;
    protected get session(): DebugSession | undefined;
    protected variablesReference: number;
    protected namedVariables: number | undefined;
    protected indexedVariables: number | undefined;
    protected readonly startOfVariables: number;
    constructor(options: ExpressionContainer.Options);
    render(): React.ReactNode;
    get hasElements(): boolean;
    protected elements: Promise<ExpressionContainer[]> | undefined;
    getElements(): Promise<IterableIterator<ExpressionContainer>>;
    protected doResolve(): Promise<ExpressionContainer[]>;
    protected fetch(result: ConsoleItem[], filter: 'named'): Promise<void>;
    protected fetch(result: ConsoleItem[], filter: 'indexed', start: number, count?: number): Promise<void>;
}
export declare namespace ExpressionContainer {
    interface Options {
        session: DebugSessionProvider;
        variablesReference?: number;
        namedVariables?: number;
        indexedVariables?: number;
        startOfVariables?: number;
    }
}
export declare class DebugVariable extends ExpressionContainer {
    protected readonly variable: DebugProtocol.Variable;
    protected readonly parent: ExpressionContainer;
    static booleanRegex: RegExp;
    static stringRegex: RegExp;
    constructor(session: DebugSessionProvider, variable: DebugProtocol.Variable, parent: ExpressionContainer);
    get name(): string;
    protected _type: string | undefined;
    get type(): string | undefined;
    protected _value: string | undefined;
    get value(): string;
    render(): React.ReactNode;
    protected get variableClassName(): string;
    get supportSetVariable(): boolean;
    setValue(value: string): Promise<void>;
    get supportCopyValue(): boolean;
    copyValue(): void;
    protected valueRef: HTMLSpanElement | undefined;
    protected setValueRef: (valueRef: HTMLSpanElement | null) => HTMLSpanElement | undefined;
    get supportCopyAsExpression(): boolean;
    copyAsExpression(): void;
    protected nameRef: HTMLSpanElement | undefined;
    protected setNameRef: (nameRef: HTMLSpanElement | null) => HTMLSpanElement | undefined;
    open(): Promise<void>;
}
export declare class DebugVirtualVariable extends ExpressionContainer {
    protected readonly options: VirtualVariableItem.Options;
    constructor(options: VirtualVariableItem.Options);
    render(): React.ReactNode;
}
export declare namespace VirtualVariableItem {
    interface Options extends ExpressionContainer.Options {
        name: string;
    }
}
export declare class ExpressionItem extends ExpressionContainer {
    protected _expression: string;
    severity?: Severity;
    static notAvailable: string;
    protected _value: string;
    get value(): string;
    protected _type: string | undefined;
    get type(): string | undefined;
    protected _available: boolean;
    get available(): boolean;
    constructor(_expression: string, session: DebugSessionProvider);
    get expression(): string;
    render(): React.ReactNode;
    evaluate(context?: string): Promise<void>;
    protected setResult(body?: DebugProtocol.EvaluateResponse['body'], error?: string): void;
}
export declare class DebugScope extends ExpressionContainer {
    protected readonly raw: DebugProtocol.Scope;
    constructor(raw: DebugProtocol.Scope, session: DebugSessionProvider);
    render(): React.ReactNode;
}
//# sourceMappingURL=debug-console-items.d.ts.map