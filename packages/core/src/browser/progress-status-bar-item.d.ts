/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
/// <reference types="lodash" />
import { CancellationToken } from 'vscode-jsonrpc';
import { ProgressClient } from '../common';
import { ProgressMessage, ProgressUpdate } from '../common';
import { StatusBar } from './status-bar';
export declare class ProgressStatusBarItem implements ProgressClient {
    protected readonly id = "theia-progress-status-bar-item";
    protected readonly statusBar: StatusBar;
    showProgress(progressId: string, message: ProgressMessage, cancellationToken: CancellationToken): Promise<string | undefined>;
    protected messagesByProgress: Map<string, string | undefined>;
    protected incomingQueue: string[];
    protected processEvent(progressId: string, event: 'start' | 'done', message?: string): void;
    protected readonly triggerUpdate: (() => void) & import("lodash").Cancelable;
    reportProgress(progressId: string, update: ProgressUpdate, originalMessage: ProgressMessage, _cancellationToken: CancellationToken): Promise<void>;
    protected update(progressId: string | undefined): void;
}
//# sourceMappingURL=progress-status-bar-item.d.ts.map