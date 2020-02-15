/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
import { Command, CommandContribution, CommandRegistry, CommandHandler } from '@theia/core';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { SampleDynamicLabelProviderContribution } from './sample-dynamic-label-provider-contribution';
export declare namespace ExampleLabelProviderCommands {
    const TOGGLE_SAMPLE: Command;
}
export declare class ApiSamplesContribution implements FrontendApplicationContribution, CommandContribution {
    protected readonly labelProviderContribution: SampleDynamicLabelProviderContribution;
    initialize(): void;
    registerCommands(commands: CommandRegistry): void;
}
export declare class ExampleLabelProviderCommandHandler implements CommandHandler {
    private readonly labelProviderContribution;
    constructor(labelProviderContribution: SampleDynamicLabelProviderContribution);
    execute(...args: any[]): any;
}
//# sourceMappingURL=api-samples-contribution.d.ts.map