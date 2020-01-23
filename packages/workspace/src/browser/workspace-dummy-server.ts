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
import { WorkspaceServer } from '../common';
import { injectable } from 'inversify';

@injectable()
export class WorkspaceDummyServer implements WorkspaceServer {
    public getMostRecentlyUsedWorkspace(): Promise<string | undefined> {
        return new Promise((resolve, reject) => {
            resolve('/');
        });
    }

    /**
     * Sets the desired string representation of the URI as the most recently used workspace folder.
     */
    public setMostRecentlyUsedWorkspace(uri: string): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    /**
     * Returns list of recently opened workspaces as an array.
     */
    public getRecentWorkspaces(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            resolve(['/']);
        });
    }
}
