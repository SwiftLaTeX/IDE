/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { VariableResolverService } from '@theia/variable-resolver/lib/browser';
import { TaskResolver } from '../task-contribution';
import { TaskConfiguration } from '../../common/task-protocol';
import { TaskDefinitionRegistry } from '../task-definition-registry';
export declare class ProcessTaskResolver implements TaskResolver {
    protected readonly variableResolverService: VariableResolverService;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    /**
     * Perform some adjustments to the task launch configuration, before sending
     * it to the backend to be executed. We can make sure that parameters that
     * are optional to the user but required by the server will be defined, with
     * sane default values. Also, resolve all known variables, e.g. `${workspaceFolder}`.
     */
    resolveTask(taskConfig: TaskConfiguration): Promise<TaskConfiguration>;
}
//# sourceMappingURL=process-task-resolver.d.ts.map