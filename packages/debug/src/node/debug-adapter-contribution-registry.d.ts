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
import { ContributionProvider } from '@theia/core';
import { DebugConfiguration } from '../common/debug-configuration';
import { DebuggerDescription } from '../common/debug-service';
import { DebugAdapterContribution, DebugAdapterExecutable, DebugAdapterSessionFactory } from '../common/debug-model';
import { IJSONSchema, IJSONSchemaSnippet } from '@theia/core/lib/common/json-schema';
/**
 * Contributions registry.
 */
export declare class DebugAdapterContributionRegistry {
    protected readonly contributions: ContributionProvider<DebugAdapterContribution>;
    protected getContributions(debugType: string): IterableIterator<DebugAdapterContribution>;
    /**
     * Finds and returns an array of registered debug types.
     * @returns An array of registered debug types
     */
    protected _debugTypes: string[] | undefined;
    debugTypes(): string[];
    getDebuggersForLanguage(language: string): Promise<DebuggerDescription[]>;
    /**
     * Provides initial [debug configuration](#DebugConfiguration).
     * @param debugType The registered debug type
     * @returns An array of [debug configurations](#DebugConfiguration)
     */
    provideDebugConfigurations(debugType: string, workspaceFolderUri?: string): Promise<DebugConfiguration[]>;
    /**
     * Resolves a [debug configuration](#DebugConfiguration) by filling in missing values
     * or by adding/changing/removing attributes.
     * @param debugConfiguration The [debug configuration](#DebugConfiguration) to resolve.
     * @returns The resolved debug configuration.
     */
    resolveDebugConfiguration(config: DebugConfiguration, workspaceFolderUri?: string): Promise<DebugConfiguration>;
    /**
     * Provides schema attributes.
     * @param debugType The registered debug type
     * @returns Schema attributes for the given debug type
     */
    getSchemaAttributes(debugType: string): Promise<IJSONSchema[]>;
    getConfigurationSnippets(): Promise<IJSONSchemaSnippet[]>;
    /**
     * Provides a [debug adapter executable](#DebugAdapterExecutable)
     * based on [debug configuration](#DebugConfiguration) to launch a new debug adapter.
     * @param config The resolved [debug configuration](#DebugConfiguration).
     * @returns The [debug adapter executable](#DebugAdapterExecutable).
     */
    provideDebugAdapterExecutable(config: DebugConfiguration): Promise<DebugAdapterExecutable>;
    /**
     * Returns a [debug adapter session factory](#DebugAdapterSessionFactory).
     * @param debugType The registered debug type
     * @returns An [debug adapter session factory](#DebugAdapterSessionFactory)
     */
    debugAdapterSessionFactory(debugType: string): DebugAdapterSessionFactory | undefined;
}
//# sourceMappingURL=debug-adapter-contribution-registry.d.ts.map