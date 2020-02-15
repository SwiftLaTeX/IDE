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
import { Emitter, Event } from '@theia/core/lib/common/event';
import { ApplicationShell } from '@theia/core/lib/browser/shell/application-shell';
import { TabBar, Widget } from '@phosphor/widgets';
export declare class ViewColumnService {
    private readonly shell;
    private readonly columnValues;
    private readonly viewColumnIds;
    protected readonly onViewColumnChangedEmitter: Emitter<{
        id: string;
        viewColumn: number;
    }>;
    constructor(shell: ApplicationShell);
    get onViewColumnChanged(): Event<{
        id: string;
        viewColumn: number;
    }>;
    updateViewColumns(): void;
    protected setViewColumn(tabBar: TabBar<Widget>, viewColumn: number): void;
    getViewColumnIds(viewColumn: number): string[];
    getViewColumn(id: string): number | undefined;
    hasViewColumn(id: string): boolean;
    viewColumnsSize(): number;
}
//# sourceMappingURL=view-column-service.d.ts.map