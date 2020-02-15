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
import { RawProcessFactory, ProcessManager } from '@theia/process/lib/node';
import { DebugAdapterExecutable, CommunicationProvider, DebugAdapterSession, DebugAdapterSessionFactory, DebugAdapterFactory } from '../common/debug-model';
/**
 * [DebugAdapterFactory](#DebugAdapterFactory) implementation based on
 * launching the debug adapter as separate process.
 */
export declare class LaunchBasedDebugAdapterFactory implements DebugAdapterFactory {
    protected readonly processFactory: RawProcessFactory;
    protected readonly processManager: ProcessManager;
    start(executable: DebugAdapterExecutable): CommunicationProvider;
    private childProcess;
    connect(debugServerPort: number): CommunicationProvider;
}
/**
 * [DebugAdapterSessionFactory](#DebugAdapterSessionFactory) implementation.
 */
export declare class DebugAdapterSessionFactoryImpl implements DebugAdapterSessionFactory {
    get(sessionId: string, communicationProvider: CommunicationProvider): DebugAdapterSession;
}
//# sourceMappingURL=debug-adapter-factory.d.ts.map