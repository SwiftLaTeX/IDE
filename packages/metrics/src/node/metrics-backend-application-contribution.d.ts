/********************************************************************************
 * Copyright (C) 2017-2018 Ericsson and others.
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
import { ContributionProvider } from '@theia/core/lib/common';
import { BackendApplicationContribution } from '@theia/core/lib/node';
import { MetricsContribution } from './metrics-contribution';
export declare class MetricsBackendApplicationContribution implements BackendApplicationContribution {
    protected readonly metricsProviders: ContributionProvider<MetricsContribution>;
    constructor(metricsProviders: ContributionProvider<MetricsContribution>);
    configure(app: express.Application): void;
    onStart(server: http.Server | https.Server): void;
    fetchMetricsFromProviders(): string;
}
//# sourceMappingURL=metrics-backend-application-contribution.d.ts.map