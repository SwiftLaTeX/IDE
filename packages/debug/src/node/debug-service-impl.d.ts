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
import { DebugConfiguration } from '../common/debug-configuration';
import { DebugService, DebuggerDescription } from '../common/debug-service';
import { IJSONSchema, IJSONSchemaSnippet } from '@theia/core/lib/common/json-schema';
import { DebugAdapterSessionManager } from './debug-adapter-session-manager';
import { DebugAdapterContributionRegistry } from './debug-adapter-contribution-registry';
/**
 * DebugService implementation.
 */
export declare class DebugServiceImpl implements DebugService {
    protected readonly sessionManager: DebugAdapterSessionManager;
    protected readonly registry: DebugAdapterContributionRegistry;
    dispose(): void;
    debugTypes(): Promise<string[]>;
    getDebuggersForLanguage(language: string): Promise<DebuggerDescription[]>;
    getSchemaAttributes(debugType: string): Promise<IJSONSchema[]>;
    getConfigurationSnippets(): Promise<IJSONSchemaSnippet[]>;
    provideDebugConfigurations(debugType: string, workspaceFolderUri?: string): Promise<DebugConfiguration[]>;
    resolveDebugConfiguration(config: DebugConfiguration, workspaceFolderUri?: string): Promise<DebugConfiguration>;
    protected readonly sessions: Set<string>;
    createDebugSession(config: DebugConfiguration): Promise<string>;
    terminateDebugSession(sessionId?: string): Promise<void>;
    protected doStop(sessionId: string): Promise<void>;
}
//# sourceMappingURL=debug-service-impl.d.ts.map