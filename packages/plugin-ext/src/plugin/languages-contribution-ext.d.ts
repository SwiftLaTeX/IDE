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
/// <reference types="node" />
import { LanguagesContributionExt } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import * as theia from '@theia/plugin';
import { ConnectionExtImpl } from './connection-ext';
import { ChildProcess } from 'child_process';
import { Connection } from '../common/connection';
import { Disposable } from './types-impl';
/**
 * Implementation of languages contribution system of the plugin API.
 * It allows to register new language contribution in main side and to start language server.
 */
export declare class LanguagesContributionExtImpl implements LanguagesContributionExt {
    protected readonly connectionExt: ConnectionExtImpl;
    private proxy;
    private serverConnections;
    constructor(rpc: RPCProtocol, connectionExt: ConnectionExtImpl);
    /**
     * Says main side to register new language server.
     *
     * @param languageServerInfo information about new language server contribution
     */
    registerLanguageServerProvider(languageServerInfo: theia.LanguageServerInfo): Disposable;
    /**
     * Stops the language server.
     *
     * @param id language server's id
     */
    stop(id: string): void;
    /**
     * Starts language server.
     *
     * @param languageContribution is information about language server contribution
     */
    $start(languageServerInfo: theia.LanguageServerInfo): Promise<void>;
    private spawnProcess;
    private map;
}
export declare function createConnection(childProcess: ChildProcess): Connection;
//# sourceMappingURL=languages-contribution-ext.d.ts.map