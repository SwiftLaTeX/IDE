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
import { ApplicationPackage, ApplicationPackageOptions } from '@theia/application-package';
import { WebpackGenerator, FrontendGenerator, BackendGenerator } from './generator';
import { ApplicationProcess } from './application-process';
export declare class ApplicationPackageManager {
    readonly pck: ApplicationPackage;
    /** application process */
    readonly process: ApplicationProcess;
    /** manager process */
    protected readonly __process: ApplicationProcess;
    protected readonly webpack: WebpackGenerator;
    protected readonly backend: BackendGenerator;
    protected readonly frontend: FrontendGenerator;
    constructor(options: ApplicationPackageOptions);
    protected remove(fsPath: string): Promise<void>;
    clean(): Promise<void>;
    generate(): Promise<void>;
    copy(): Promise<void>;
    build(args?: string[]): Promise<void>;
    start(args?: string[]): cp.ChildProcess;
    startElectron(args: string[]): cp.ChildProcess;
    startBrowser(args: string[]): cp.ChildProcess;
    private adjustArgs;
    private get forkOptions();
}
//# sourceMappingURL=application-package-manager.d.ts.map