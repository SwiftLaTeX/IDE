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
import { NotificationExt } from '../common/plugin-api-rpc';
import { CancellationToken, Progress, ProgressOptions } from '@theia/plugin';
import { RPCProtocol } from '../common/rpc-protocol';
import { ProgressLocation } from './types-impl';
export declare class NotificationExtImpl implements NotificationExt {
    private readonly proxy;
    constructor(rpc: RPCProtocol);
    withProgress<R>(options: ProgressOptions, task: (progress: Progress<{
        message?: string;
        increment?: number;
    }>, token: CancellationToken) => PromiseLike<R>): Promise<R>;
    protected mapLocation(pluginLocation: ProgressLocation): string | undefined;
}
//# sourceMappingURL=notification.d.ts.map