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
import { interfaces } from 'inversify';
import { Disposable } from '@theia/core/lib/common/disposable';
import { StatusBarMessageRegistryMain } from '../../common/plugin-api-rpc';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
export declare class StatusBarMessageRegistryMainImpl implements StatusBarMessageRegistryMain, Disposable {
    private readonly delegate;
    private readonly entries;
    private readonly toDispose;
    protected readonly colorRegistry: ColorRegistry;
    constructor(container: interfaces.Container);
    dispose(): void;
    $setMessage(id: string, text: string | undefined, priority: number, alignment: number, color: string | undefined, tooltip: string | undefined, command: string | undefined): Promise<void>;
    $update(id: string, message: string): void;
    $dispose(id: string): void;
}
//# sourceMappingURL=status-bar-message-registry-main.d.ts.map