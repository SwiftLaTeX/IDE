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
import * as cp from 'child_process';
import { ApplicationPackage } from '@theia/application-package';
export declare class ApplicationProcess {
    protected readonly pck: ApplicationPackage;
    protected readonly binProjectPath: string;
    protected readonly defaultOptions: {
        cwd: string;
        env: NodeJS.ProcessEnv;
    };
    constructor(pck: ApplicationPackage, binProjectPath: string);
    spawn(command: string, args?: string[], options?: cp.SpawnOptions): cp.ChildProcess;
    fork(modulePath: string, args?: string[], options?: cp.ForkOptions): cp.ChildProcess;
    canRun(command: string): boolean;
    run(command: string, args: string[], options?: cp.SpawnOptions): Promise<void>;
    spawnBin(command: string, args: string[], options?: cp.SpawnOptions): cp.ChildProcess;
    protected resolveBin(command: string): string;
    protected promisify(command: string, p: cp.ChildProcess): Promise<void>;
}
//# sourceMappingURL=application-process.d.ts.map