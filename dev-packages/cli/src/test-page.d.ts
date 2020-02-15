/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
import * as puppeteer from 'puppeteer';
export interface TestFileOptions {
    ignore: string[];
    extension: string[];
    file: string[];
    recursive: boolean;
    sort: boolean;
    spec: string[];
}
export interface TestPageOptions {
    files?: Partial<TestFileOptions>;
    newPage: () => Promise<puppeteer.Page>;
    matchAppUrl?: (url: string) => boolean;
    onWillRun?: () => Promise<void>;
    onDidRun?: (failures: number) => Promise<void>;
}
export default function newTestPage(options: TestPageOptions): Promise<puppeteer.Page>;
//# sourceMappingURL=test-page.d.ts.map