/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import * as theia from '@theia/plugin';
import * as model from '../common/plugin-api-rpc-model';
import { CommandRegistryExt } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import { Disposable } from './types-impl';
import { DisposableCollection } from '@theia/core';
export declare type Handler = <T>(...args: any[]) => T | PromiseLike<T | undefined>;
export interface ArgumentProcessor {
    processArgument(arg: any): any;
}
export declare class CommandRegistryImpl implements CommandRegistryExt {
    private proxy;
    private readonly commands;
    private readonly handlers;
    private readonly argumentProcessors;
    private readonly commandsConverter;
    constructor(rpc: RPCProtocol);
    get converter(): CommandsConverter;
    registerCommand(command: theia.CommandDescription, handler?: Handler, thisArg?: any): Disposable;
    registerHandler(commandId: string, handler: Handler, thisArg?: any): Disposable;
    dispose(): void;
    $executeCommand<T>(id: string, ...args: any[]): PromiseLike<T | undefined>;
    executeCommand<T>(id: string, ...args: any[]): PromiseLike<T | undefined>;
    getKeyBinding(commandId: string): PromiseLike<theia.CommandKeyBinding[] | undefined>;
    private executeLocalCommand;
    getCommands(filterUnderscoreCommands?: boolean): Promise<string[]>;
    registerArgumentProcessor(processor: ArgumentProcessor): void;
}
export declare class CommandsConverter {
    private readonly safeCommandId;
    private readonly commands;
    private readonly commandsMap;
    private handle;
    private isSafeCommandRegistered;
    constructor(commands: CommandRegistryImpl);
    /**
     * Convert to a command that can be safely passed over JSON-RPC.
     */
    toSafeCommand(command: undefined, disposables: DisposableCollection): undefined;
    toSafeCommand(command: theia.Command, disposables: DisposableCollection): model.Command;
    toSafeCommand(command: theia.Command | undefined, disposables: DisposableCollection): model.Command | undefined;
    protected toInternalCommand(external: theia.Command): model.Command;
    private executeSafeCommand;
}
//# sourceMappingURL=command-registry.d.ts.map