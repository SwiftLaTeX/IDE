/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
/**
 * The JSON-RPC interface for plugin metrics
 */
export declare const metricsJsonRpcPath = "/services/plugin-ext/metrics";
export declare const PluginMetrics: unique symbol;
export interface PluginMetrics {
    setMetrics(metrics: string): void;
    getMetrics(): string;
}
export declare const METRICS_TIMEOUT = 10000;
//# sourceMappingURL=metrics-protocol.d.ts.map