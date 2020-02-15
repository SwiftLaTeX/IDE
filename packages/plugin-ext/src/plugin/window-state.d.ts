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
import URI from 'vscode-uri';
import { WindowState } from '@theia/plugin';
import { WindowStateExt } from '../common/plugin-api-rpc';
import { Event } from '@theia/core/lib/common/event';
import { RPCProtocol } from '../common/rpc-protocol';
export declare class WindowStateExtImpl implements WindowStateExt {
    private windowStateCached;
    private windowStateChangedEmitter;
    readonly onDidChangeWindowState: Event<WindowState>;
    private readonly proxy;
    constructor(rpc: RPCProtocol);
    getWindowState(): WindowState;
    $onWindowStateChanged(focused: boolean): void;
    openUri(uri: URI): Promise<boolean>;
    asExternalUri(target: URI): Promise<URI>;
}
//# sourceMappingURL=window-state.d.ts.map