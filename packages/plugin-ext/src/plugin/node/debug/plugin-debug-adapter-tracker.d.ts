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
import * as theia from '@theia/plugin';
export declare class PluginDebugAdapterTracker implements theia.DebugAdapterTracker {
    protected readonly trackers: theia.DebugAdapterTracker[];
    constructor(trackers: theia.DebugAdapterTracker[]);
    static create(session: theia.DebugSession, trackerFactories: [string, theia.DebugAdapterTrackerFactory][]): Promise<PluginDebugAdapterTracker>;
    onWillStartSession(): void;
    onWillReceiveMessage(message: any): void;
    onDidSendMessage(message: any): void;
    onWillStopSession(): void;
    onError(error: Error): void;
    onExit(code: number | undefined, signal: string | undefined): void;
}
//# sourceMappingURL=plugin-debug-adapter-tracker.d.ts.map