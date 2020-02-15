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
import { WindowMain } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
import { UriComponents } from '../../common/uri-components';
import { Disposable } from '@theia/core/lib/common/disposable';
export declare class WindowStateMain implements WindowMain, Disposable {
    private readonly proxy;
    private readonly openerService;
    private readonly externalUriService;
    private readonly toDispose;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    private onFocusChanged;
    $openUri(uriComponent: UriComponents): Promise<boolean>;
    $asExternalUri(uriComponents: UriComponents): Promise<UriComponents>;
}
//# sourceMappingURL=window-state-main.d.ts.map