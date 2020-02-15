/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { DisposableCollection } from '@theia/core';
import { IPCConnectionProvider } from '@theia/core/lib/node';
import { GitLocator, GitLocateOptions } from './git-locator-protocol';
export declare class GitLocatorClient implements GitLocator {
    protected readonly toDispose: DisposableCollection;
    protected readonly ipcConnectionProvider: IPCConnectionProvider;
    dispose(): void;
    locate(path: string, options: GitLocateOptions): Promise<string[]>;
}
//# sourceMappingURL=git-locator-client.d.ts.map