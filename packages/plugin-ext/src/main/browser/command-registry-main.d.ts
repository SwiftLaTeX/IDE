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
import { interfaces } from 'inversify';
import * as theia from '@theia/plugin';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { CommandRegistryMain } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
export declare class CommandRegistryMainImpl implements CommandRegistryMain, Disposable {
    private readonly proxy;
    private readonly commands;
    private readonly handlers;
    private readonly delegate;
    private readonly keyBinding;
    private readonly contributions;
    protected readonly toDispose: DisposableCollection;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    $registerCommand(command: theia.CommandDescription): void;
    $unregisterCommand(id: string): void;
    $registerHandler(id: string): void;
    $unregisterHandler(id: string): void;
    $executeCommand<T>(id: string, ...args: any[]): Promise<T | undefined>;
    $getKeyBinding(commandId: string): PromiseLike<theia.CommandKeyBinding[] | undefined>;
    $getCommands(): PromiseLike<string[]>;
}
//# sourceMappingURL=command-registry-main.d.ts.map