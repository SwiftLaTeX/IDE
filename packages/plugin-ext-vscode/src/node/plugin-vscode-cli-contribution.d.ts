/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
/// <reference types="node" />
import { Argv, Arguments } from 'yargs';
import { CliContribution } from '@theia/core/lib/node/cli';
import { PluginHostEnvironmentVariable } from '@theia/plugin-ext/lib/common';
/**
 * CLI Contribution allowing to override the VS Code API version which is returned by `vscode.version` API call.
 */
export declare class PluginVsCodeCliContribution implements CliContribution, PluginHostEnvironmentVariable {
    static VSCODE_API_VERSION: string;
    protected vsCodeApiVersion: string | undefined;
    configure(conf: Argv): void;
    setArguments(args: Arguments): void;
    process(env: NodeJS.ProcessEnv): void;
}
//# sourceMappingURL=plugin-vscode-cli-contribution.d.ts.map