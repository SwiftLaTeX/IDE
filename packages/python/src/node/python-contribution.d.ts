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
/// <reference types="node" />
import { BaseLanguageServerContribution, IConnection } from '@theia/languages/lib/node';
import { SpawnOptions } from 'child_process';
import { ProcessErrorEvent } from '@theia/process/lib/node/process';
export declare class PythonContribution extends BaseLanguageServerContribution {
    readonly id = "python";
    readonly name = "Python";
    start(clientConnection: IConnection): Promise<void>;
    protected getSpawnOptions(): SpawnOptions | undefined;
    protected onDidFailSpawnProcess(error: ProcessErrorEvent): void;
}
//# sourceMappingURL=python-contribution.d.ts.map