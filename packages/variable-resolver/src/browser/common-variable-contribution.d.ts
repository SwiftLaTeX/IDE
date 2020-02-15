/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { VariableContribution, VariableRegistry } from './variable';
import { EnvVariablesServer } from '@theia/core/lib/common/env-variables';
import { CommandService } from '@theia/core/lib/common/command';
import { PreferenceService } from '@theia/core/lib/browser/preferences/preference-service';
import { ResourceContextKey } from '@theia/core/lib/browser/resource-context-key';
import { QuickInputService } from '@theia/core/lib/browser/quick-open/quick-input-service';
import { QuickPickService } from '@theia/core/lib/common/quick-pick-service';
export declare class CommonVariableContribution implements VariableContribution {
    protected readonly env: EnvVariablesServer;
    protected readonly commands: CommandService;
    protected readonly preferences: PreferenceService;
    protected readonly resourceContextKey: ResourceContextKey;
    protected readonly quickInputService: QuickInputService;
    protected readonly quickPickService: QuickPickService;
    registerVariables(variables: VariableRegistry): Promise<void>;
}
//# sourceMappingURL=common-variable-contribution.d.ts.map