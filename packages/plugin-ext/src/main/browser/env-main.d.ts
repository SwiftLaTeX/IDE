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
import { RPCProtocol } from '../../common/rpc-protocol';
import { EnvMain } from '../../common/plugin-api-rpc';
import { QueryParameters } from '../../common/env';
import { OperatingSystem } from '../../plugin/types-impl';
export declare class EnvMainImpl implements EnvMain {
    private envVariableServer;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    $getEnvVariable(envVarName: string): Promise<string | undefined>;
    $getClientOperatingSystem(): Promise<OperatingSystem>;
}
/**
 * Returns query parameters from current page.
 */
export declare function getQueryParameters(): QueryParameters;
//# sourceMappingURL=env-main.d.ts.map