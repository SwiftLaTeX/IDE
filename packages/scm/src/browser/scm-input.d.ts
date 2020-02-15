/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import { Disposable, DisposableCollection, Emitter } from '@theia/core/lib/common';
export interface ScmInputIssue {
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
}
export interface ScmInputValidator {
    (value: string): Promise<ScmInputIssue | undefined>;
}
export interface ScmInputOptions {
    placeholder?: string;
    validator?: ScmInputValidator;
}
export interface ScmInputData {
    value?: string;
    issue?: ScmInputIssue;
}
export declare class ScmInput implements Disposable {
    protected readonly options: ScmInputOptions;
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: import("@theia/core/src/common").Event<void>;
    protected fireDidChange(): void;
    protected readonly onDidFocusEmitter: Emitter<void>;
    readonly onDidFocus: import("@theia/core/src/common").Event<void>;
    protected readonly toDispose: DisposableCollection;
    constructor(options?: ScmInputOptions);
    dispose(): void;
    protected _placeholder: string | undefined;
    get placeholder(): string | undefined;
    set placeholder(placeholder: string | undefined);
    protected _value: string | undefined;
    get value(): string;
    set value(value: string);
    protected _issue: ScmInputIssue | undefined;
    get issue(): ScmInputIssue | undefined;
    set issue(issue: ScmInputIssue | undefined);
    validate: () => Promise<void>;
    focus(): void;
    toJSON(): ScmInputData;
    fromJSON(data: ScmInputData | any): void;
}
//# sourceMappingURL=scm-input.d.ts.map