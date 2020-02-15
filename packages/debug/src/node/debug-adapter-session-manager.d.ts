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
import { MessagingService } from '@theia/core/lib/node/messaging/messaging-service';
import { DebugConfiguration } from '../common/debug-configuration';
import { DebugAdapterSession, DebugAdapterSessionFactory, DebugAdapterFactory } from '../common/debug-model';
import { DebugAdapterContributionRegistry } from './debug-adapter-contribution-registry';
/**
 * Debug adapter session manager.
 */
export declare class DebugAdapterSessionManager implements MessagingService.Contribution {
    protected readonly sessions: Map<string, DebugAdapterSession>;
    protected readonly debugAdapterSessionFactory: DebugAdapterSessionFactory;
    protected readonly debugAdapterFactory: DebugAdapterFactory;
    configure(service: MessagingService): void;
    /**
     * Creates a new [debug adapter session](#DebugAdapterSession).
     * @param config The [DebugConfiguration](#DebugConfiguration)
     * @returns The debug adapter session
     */
    create(config: DebugConfiguration, registry: DebugAdapterContributionRegistry): Promise<DebugAdapterSession>;
    /**
     * Removes [debug adapter session](#DebugAdapterSession) from the list of the instantiated sessions.
     * Is invoked when session is terminated and isn't needed anymore.
     * @param sessionId The session identifier
     */
    remove(sessionId: string): void;
    /**
     * Finds the debug adapter session by its id.
     * Returning the value 'undefined' means the session isn't found.
     * @param sessionId The session identifier
     * @returns The debug adapter session
     */
    find(sessionId: string): DebugAdapterSession | undefined;
    /**
     * Returns all instantiated debug adapter sessions.
     * @returns An array of debug adapter sessions
     */
    getAll(): IterableIterator<DebugAdapterSession>;
}
//# sourceMappingURL=debug-adapter-session-manager.d.ts.map