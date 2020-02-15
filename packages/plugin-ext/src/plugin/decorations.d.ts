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
import * as theia from '@theia/plugin';
import { DecorationData, DecorationsExt } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import { Disposable } from './types-impl';
export declare class DecorationsExtImpl implements DecorationsExt {
    readonly rpc: RPCProtocol;
    static PROVIDER_ID: number;
    private readonly providersMap;
    private readonly proxy;
    constructor(rpc: RPCProtocol);
    registerDecorationProvider(provider: theia.DecorationProvider): Disposable;
    $provideDecoration(id: number, uri: string): Promise<DecorationData | undefined>;
}
//# sourceMappingURL=decorations.d.ts.map