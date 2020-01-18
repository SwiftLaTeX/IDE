/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable } from "inversify";
import { IConnection, BaseLanguageServerContribution } from "@theia/languages/lib/node";
import { LATEX_LANGUAGE_ID, LATEX_LANGUAGE_NAME } from '../common';

@injectable()
export class LaTeXContribution extends BaseLanguageServerContribution {

    readonly id = LATEX_LANGUAGE_ID;
    readonly name = LATEX_LANGUAGE_NAME;

    async start(clientConnection: IConnection): Promise<void> {
        const command = '/usr/bin/texlab';
        let args: string[] = [
            
        ];
        console.info("starting LaTeX language server :)")
        const serverConnection = await this.createProcessStreamConnectionAsync(command, args);
        this.forward(clientConnection, serverConnection);
    }

    protected onDidFailSpawnProcess(error: Error): void {
        super.onDidFailSpawnProcess(error);
        const message =
            'Error starting rust language server.\n' +
            'Please make sure it is installed on your system.\n' +
            "Use the following command: 'apt install texlab'";
        console.error(message);
    }
}
