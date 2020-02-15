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
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { Command, CommandContribution, CommandRegistry, ContributionProvider } from '@theia/core/lib/common';
import { VariableContribution, VariableRegistry } from './variable';
import { VariableQuickOpenService } from './variable-quick-open-service';
export declare const LIST_VARIABLES: Command;
export declare class VariableResolverFrontendContribution implements FrontendApplicationContribution, CommandContribution {
    protected readonly contributionProvider: ContributionProvider<VariableContribution>;
    protected readonly variableRegistry: VariableRegistry;
    protected readonly variableQuickOpenService: VariableQuickOpenService;
    constructor(contributionProvider: ContributionProvider<VariableContribution>, variableRegistry: VariableRegistry, variableQuickOpenService: VariableQuickOpenService);
    onStart(): void;
    registerCommands(commands: CommandRegistry): void;
}
//# sourceMappingURL=variable-resolver-frontend-contribution.d.ts.map