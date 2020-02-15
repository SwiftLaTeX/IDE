/********************************************************************************
 * Copyright (C) 2019 RedHat and others.
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
import { ClipboardMain } from '../../common';
import { ClipboardService } from '@theia/core/lib/browser/clipboard-service';
export declare class ClipboardMainImpl implements ClipboardMain {
    protected readonly clipboardService: ClipboardService;
    constructor(container: interfaces.Container);
    $readText(): Promise<string>;
    $writeText(value: string): Promise<void>;
}
//# sourceMappingURL=clipboard-main.d.ts.map