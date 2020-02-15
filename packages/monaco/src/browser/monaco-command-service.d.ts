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
/// <reference types="@theia/monaco/src/typings/monaco" />
/// <reference types="@typefox/monaco-editor-core/monaco" />
import { CommandRegistry, Emitter, DisposableCollection } from '@theia/core/lib/common';
import ICommandEvent = monaco.commands.ICommandEvent;
import ICommandService = monaco.commands.ICommandService;
export declare const MonacoCommandServiceFactory: unique symbol;
export interface MonacoCommandServiceFactory {
    (): MonacoCommandService;
}
export declare class MonacoCommandService implements ICommandService {
    protected readonly commandRegistry: CommandRegistry;
    readonly _onWillExecuteCommand: Emitter<ICommandEvent>;
    protected delegate: ICommandService | undefined;
    protected readonly delegateListeners: DisposableCollection;
    constructor(commandRegistry: CommandRegistry);
    get onWillExecuteCommand(): monaco.IEvent<ICommandEvent>;
    setDelegate(delegate: ICommandService | undefined): void;
    executeCommand(commandId: any, ...args: any[]): Promise<any>;
    executeMonacoCommand(commandId: any, ...args: any[]): Promise<any>;
}
//# sourceMappingURL=monaco-command-service.d.ts.map