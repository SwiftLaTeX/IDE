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
/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from 'inversify';
import { LanguageContribution } from '../common';

@injectable()
export class LanguageDummyService implements LanguageContribution.Service {
    protected nextId: number = 1;
    async create(contributionId: string, parameters: any): Promise<string> {
        const id = this.nextId;
        this.nextId++;
        const sessionId = String(id);
        console.log('Creating a dummy language service ' + sessionId);
        return sessionId;
    }
    async destroy(sessionId: string): Promise<void> {
        console.log('Deleting a dummy language service ' + sessionId);
    }
}
