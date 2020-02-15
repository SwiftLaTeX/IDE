/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { QuickPickItem } from '@theia/core/lib/common/quick-pick-service';
/** The representation of a task template used in the auto-generation of `tasks.json` */
export interface TaskTemplateEntry {
    id: string;
    label: string;
    description: string;
    sort?: string;
    autoDetect: boolean;
    content: string;
}
export declare class TaskTemplateSelector {
    selectTemplates(): QuickPickItem<TaskTemplateEntry>[];
}
//# sourceMappingURL=task-templates.d.ts.map