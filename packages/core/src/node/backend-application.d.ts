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
import * as http from 'http';
import * as https from 'https';
import * as express from 'express';
import * as yargs from 'yargs';
import { ILogger, ContributionProvider, MaybePromise } from '../common';
import { CliContribution } from './cli';
import { ApplicationPackage } from '@theia/application-package';
export declare const BackendApplicationContribution: unique symbol;
export interface BackendApplicationContribution {
    initialize?(): void;
    configure?(app: express.Application): void;
    onStart?(server: http.Server | https.Server): MaybePromise<void>;
    /**
     * Called when the backend application shuts down. Contributions must perform only synchronous operations.
     * Any kind of additional asynchronous work queued in the event loop will be ignored and abandoned.
     */
    onStop?(app?: express.Application): void;
}
export declare class BackendApplicationCliContribution implements CliContribution {
    port: number;
    hostname: string | undefined;
    ssl: boolean | undefined;
    cert: string | undefined;
    certkey: string | undefined;
    projectPath: string;
    configure(conf: yargs.Argv): void;
    setArguments(args: yargs.Arguments): void;
    protected appProjectPath(): string;
}
/**
 * The main entry point for Theia applications.
 */
export declare class BackendApplication {
    protected readonly contributionsProvider: ContributionProvider<BackendApplicationContribution>;
    protected readonly cliParams: BackendApplicationCliContribution;
    protected readonly logger: ILogger;
    protected readonly app: express.Application;
    protected readonly applicationPackage: ApplicationPackage;
    constructor(contributionsProvider: ContributionProvider<BackendApplicationContribution>, cliParams: BackendApplicationCliContribution, logger: ILogger);
    protected init(): void;
    use(...handlers: express.Handler[]): void;
    start(aPort?: number, aHostname?: string): Promise<http.Server | https.Server>;
    protected onStop(): void;
    protected serveGzipped(contentType: string, req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>;
}
//# sourceMappingURL=backend-application.d.ts.map