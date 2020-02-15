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
import { ConnectionExt } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import { PluginConnection } from '../common/connection';
/**
 * Implementation of connection system of the plugin API.
 * It allows to communicate with main side to send and read messages.
 */
export declare class ConnectionExtImpl implements ConnectionExt {
    private proxy;
    private connections;
    constructor(rpc: RPCProtocol);
    /**
     * Gets the connection between plugin by id and sends string message to it.
     *
     * @param id connection's id
     * @param message incoming message
     */
    $sendMessage(id: string, message: string): Promise<void>;
    /**
     * Instantiates a new connection by the given id.
     * @param id the connection id
     */
    $createConnection(id: string): Promise<void>;
    /**
     * Deletes a connection.
     * @param id the connection id
     */
    $deleteConnection(id: string): Promise<void>;
    /**
     * Returns existed connection or creates a new one.
     * @param id the connection id
     */
    ensureConnection(id: string): Promise<PluginConnection>;
    /**
     * Returns existed connection or creates a new one.
     * @param id the connection id
     */
    doEnsureConnection(id: string): Promise<PluginConnection>;
    protected doCreateConnection(id: string): Promise<PluginConnection>;
}
//# sourceMappingURL=connection-ext.d.ts.map