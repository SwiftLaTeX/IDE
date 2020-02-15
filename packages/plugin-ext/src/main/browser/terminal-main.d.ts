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
import { TerminalOptions } from '@theia/plugin';
import { TerminalWidget } from '@theia/terminal/lib/browser/base/terminal-widget';
import { TerminalServiceMain } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
import { Disposable } from '@theia/core/lib/common/disposable';
/**
 * Plugin api service allows working with terminal emulator.
 */
export declare class TerminalServiceMainImpl implements TerminalServiceMain, Disposable {
    private readonly terminals;
    private readonly shell;
    private readonly extProxy;
    private readonly toDispose;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    protected updateCurrentTerminal(): void;
    protected trackTerminal(terminal: TerminalWidget): Promise<void>;
    $createTerminal(id: string, options: TerminalOptions): Promise<string>;
    $sendText(id: string, text: string, addNewLine?: boolean): void;
    $show(id: string, preserveFocus?: boolean): void;
    $hide(id: string): void;
    $dispose(id: string): void;
}
//# sourceMappingURL=terminal-main.d.ts.map