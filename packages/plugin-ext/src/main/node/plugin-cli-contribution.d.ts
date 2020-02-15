/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { Argv, Arguments } from 'yargs';
import { CliContribution } from '@theia/core/lib/node/cli';
export declare class PluginCliContribution implements CliContribution {
    static PLUGINS: string;
    static PLUGIN_MAX_SESSION_LOGS_FOLDERS: string;
    /**
     * This is the default value used in VSCode, see:
     * - https://github.com/Microsoft/vscode/blob/613447d6b3f458ef7fee227e3876303bf5184580/src/vs/code/electron-browser/sharedProcess/contrib/logsDataCleaner.ts#L32
     */
    static DEFAULT_PLUGIN_MAX_SESSION_LOGS_FOLDERS: number;
    protected _localDir: string | undefined;
    protected _maxSessionLogsFolders: number;
    configure(conf: Argv): void;
    setArguments(args: Arguments): void;
    localDir(): string | undefined;
    maxSessionLogsFolders(): number;
}
//# sourceMappingURL=plugin-cli-contribution.d.ts.map