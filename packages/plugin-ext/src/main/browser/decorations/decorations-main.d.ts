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
import { DecorationProvider, DecorationsMain } from '../../../common/plugin-api-rpc';
import { interfaces } from 'inversify';
import { Emitter } from '@theia/core/lib/common/event';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { Tree, TreeDecoration } from '@theia/core/lib/browser';
import { RPCProtocol } from '../../../common/rpc-protocol';
export declare class DecorationsMainImpl implements DecorationsMain, Disposable {
    private readonly proxy;
    private readonly scmDecorationsService;
    protected readonly emitter: Emitter<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    protected readonly toDispose: DisposableCollection;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    protected readonly providers: Map<number, DecorationProvider>;
    $dispose(id: number): Promise<void>;
    $registerDecorationProvider(id: number, provider: DecorationProvider): Promise<number>;
    $fireDidChangeDecorations(id: number, arg: string | string[] | undefined): Promise<void>;
}
//# sourceMappingURL=decorations-main.d.ts.map