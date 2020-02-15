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
import { LanguagesContributionMain } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
import * as theia from '@theia/plugin';
import { ConnectionMainImpl } from './connection-main';
import { Disposable } from '@theia/core/lib/common/disposable';
/**
 * Implementation of languages contribution system of the plugin API.
 * Uses for registering new language server which was described in the plug-in.
 */
export declare class LanguagesContributionMainImpl implements LanguagesContributionMain, Disposable {
    protected readonly rpc: RPCProtocol;
    protected readonly container: interfaces.Container;
    protected readonly connectionMain: ConnectionMainImpl;
    private readonly languageClientContributionProvider;
    private readonly toDispose;
    constructor(rpc: RPCProtocol, container: interfaces.Container, connectionMain: ConnectionMainImpl);
    dispose(): void;
    /**
     * Creates new client contribution for the language server and register it.
     *
     * @param languageServerInfo an information about the registered language server
     */
    $registerLanguageServerProvider(languageServerInfo: theia.LanguageServerInfo): void;
    /**
     * Removes language client contribution from the registry and clear related connections.
     *
     * @param id language server's id
     */
    $stop(id: string): void;
}
//# sourceMappingURL=languages-contribution-main.d.ts.map