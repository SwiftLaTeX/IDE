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
import { NotificationMain } from '../../common/plugin-api-rpc';
import { ProgressMessage } from '@theia/core/lib/common';
import { interfaces } from 'inversify';
import { RPCProtocol } from '../../common/rpc-protocol';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
export declare class NotificationMainImpl implements NotificationMain, Disposable {
    private readonly progressService;
    private readonly progressMap;
    private readonly progress2Work;
    protected readonly toDispose: DisposableCollection;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    $startProgress(options: NotificationMain.StartProgressOptions): Promise<string>;
    protected mapOptions(options: NotificationMain.StartProgressOptions): ProgressMessage;
    $stopProgress(id: string): void;
    $updateProgress(id: string, item: NotificationMain.ProgressReport): void;
}
//# sourceMappingURL=notification-main.d.ts.map