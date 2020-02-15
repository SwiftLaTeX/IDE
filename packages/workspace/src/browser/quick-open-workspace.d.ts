/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { QuickOpenService, QuickOpenModel, QuickOpenItem, QuickOpenGroupItem, LabelProvider } from '@theia/core/lib/browser';
import { WorkspaceService } from './workspace-service';
import { WorkspacePreferences } from './workspace-preferences';
import { FileSystem } from '@theia/filesystem/lib/common';
export declare class QuickOpenWorkspace implements QuickOpenModel {
    protected items: QuickOpenGroupItem[];
    protected opened: boolean;
    protected readonly quickOpenService: QuickOpenService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly fileSystem: FileSystem;
    protected readonly labelProvider: LabelProvider;
    protected preferences: WorkspacePreferences;
    open(workspaces: string[]): Promise<void>;
    onType(lookFor: string, acceptor: (items: QuickOpenItem[]) => void): void;
    select(): void;
}
//# sourceMappingURL=quick-open-workspace.d.ts.map