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
import { AbstractMessageReader, DataCallback } from 'vscode-jsonrpc/lib/messageReader';
declare const PluginMessageReader_base: typeof AbstractMessageReader;
/**
 * Support for reading string message through RPC protocol.
 */
export declare class PluginMessageReader extends PluginMessageReader_base {
    protected state: 'initial' | 'listening' | 'closed';
    protected callback: DataCallback | undefined;
    protected readonly events: {
        message?: any;
        error?: any;
    }[];
    constructor();
    listen(callback: DataCallback): void;
    readMessage(message: string): void;
    fireError(error: any): void;
    fireClose(): void;
}
export {};
//# sourceMappingURL=plugin-message-reader.d.ts.map