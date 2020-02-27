/********************************************************************************
 * Copyright (C) 2018-2020 Red Hat, Inc. and others.
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

import { join } from 'path';
import { homedir } from 'os';
import { injectable } from 'inversify';
import { EnvVariable, EnvVariablesServer } from '../../common/env-variables';
import { isWindows } from '../../common/os';
import { FileUri } from '../file-uri';

@injectable()
export class EnvVariablesServerImpl implements EnvVariablesServer {

    protected readonly envs: { [key: string]: EnvVariable } = {};
    protected readonly configDirUri = FileUri.create(join(homedir(), '.theia')).toString();

    constructor() {
        // const prEnv = process.env;
        // Object.keys(prEnv).forEach((key: string) => {
        //     this.envs[key] = { 'name': key, 'value': prEnv[key] };
        // });
    }

    async getExecPath(): Promise<string> {
        console.log('Dummy getExecPath');
        return '/tmp/swiftlatex';
    }

    async getVariables(): Promise<EnvVariable[]> {
        return Object.keys(this.envs).map(key => this.envs[key]);
    }

    async getValue(key: string): Promise<EnvVariable | undefined> {
        if (key !== 'does_not_matter') { // does_not_matter stands for ping
            console.log('Dummy getEnvValue:' + key);
        }
        if (isWindows) {
            key = key.toLowerCase();
        }
        return this.envs[key];
    }

    async getConfigDirUri(): Promise<string> {
        return this.configDirUri;
    }

}
