/********************************************************************************
 * Copyright (C) 2019 Elliott Wen.
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

import { injectable } from 'inversify';
import { IConnection, BaseLanguageServerContribution } from '@theia/languages/lib/node';
import { LATEX_LANGUAGE_ID, LATEX_LANGUAGE_NAME } from '../common';
import { Socket } from 'net';
import { createSocketConnection } from 'vscode-ws-jsonrpc/lib/server';

/* IPC */
const TEXLAB_PORT = 9999;

@injectable()
export class LaTeXContribution extends BaseLanguageServerContribution {

    readonly id = LATEX_LANGUAGE_ID;
    readonly name = LATEX_LANGUAGE_NAME;

    async start(clientConnection: IConnection): Promise<void> {
        // const command = '/usr/bin/texlab';
        // let args: string[] = [
        // ];
        console.info('starting LaTeX language server.');
        const debugSocket = new Socket();
        const debugConnection = createSocketConnection(debugSocket, debugSocket, () => debugSocket.destroy());
        this.forward(clientConnection, debugConnection);
        console.info('connecting LaTeX language server');
        debugSocket.connect(TEXLAB_PORT);
        // const serverConnection = await this.createProcessStreamConnectionAsync(command, args);
        // this.forward(clientConnection, serverConnection);
    }

    protected onDidFailSpawnProcess(error: Error): void {
        super.onDidFailSpawnProcess(error);
        const message =
            'Error starting rust language server.\n' +
            'Please make sure it is installed on your system.\n' +
            'Use the following command apt install texlab';
        console.error(message);
    }
}
