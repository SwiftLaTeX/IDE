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
import { DebugSessionContributionRegistry, DebugSessionContribution } from '@theia/debug/lib/browser/debug-session-contribution';
import { ContributionProvider } from '@theia/core/lib/common/contribution-provider';
import { Disposable } from '@theia/core/lib/common/disposable';
/**
 * Debug session contribution registrator.
 */
export interface PluginDebugSessionContributionRegistrator {
    /**
     * Registers [DebugSessionContribution](#DebugSessionContribution).
     * @param contrib contribution
     */
    registerDebugSessionContribution(contrib: DebugSessionContribution): Disposable;
    /**
     * Unregisters [DebugSessionContribution](#DebugSessionContribution).
     * @param debugType the debug type
     */
    unregisterDebugSessionContribution(debugType: string): void;
}
/**
 * Plugin debug session contribution registry implementation with functionality
 * to register / unregister plugin contributions.
 */
export declare class PluginDebugSessionContributionRegistry implements DebugSessionContributionRegistry, PluginDebugSessionContributionRegistrator {
    protected readonly contribs: Map<string, DebugSessionContribution>;
    protected readonly contributions: ContributionProvider<DebugSessionContribution>;
    protected init(): void;
    get(debugType: string): DebugSessionContribution | undefined;
    registerDebugSessionContribution(contrib: DebugSessionContribution): Disposable;
    unregisterDebugSessionContribution(debugType: string): void;
}
//# sourceMappingURL=plugin-debug-session-contribution-registry.d.ts.map