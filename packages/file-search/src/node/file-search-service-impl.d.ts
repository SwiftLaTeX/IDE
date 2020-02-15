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
import { CancellationToken, ILogger } from '@theia/core';
import { RawProcessFactory } from '@theia/process/lib/node';
import { FileSearchService } from '../common/file-search-service';
export declare class FileSearchServiceImpl implements FileSearchService {
    protected readonly logger: ILogger;
    protected readonly rawProcessFactory: RawProcessFactory;
    constructor(logger: ILogger, rawProcessFactory: RawProcessFactory);
    find(searchPattern: string, options: FileSearchService.Options, clientToken?: CancellationToken): Promise<string[]>;
    private doFind;
    private getSearchArgs;
}
//# sourceMappingURL=file-search-service-impl.d.ts.map