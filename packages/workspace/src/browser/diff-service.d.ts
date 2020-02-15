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
import URI from '@theia/core/lib/common/uri';
import { FileSystem } from '@theia/filesystem/lib/common/filesystem';
import { OpenerService, OpenerOptions } from '@theia/core/lib/browser';
import { MessageService } from '@theia/core/lib/common/message-service';
export declare class DiffService {
    protected readonly fileSystem: FileSystem;
    protected readonly openerService: OpenerService;
    protected readonly messageService: MessageService;
    openDiffEditor(left: URI, right: URI, label?: string, options?: OpenerOptions): Promise<void>;
}
//# sourceMappingURL=diff-service.d.ts.map