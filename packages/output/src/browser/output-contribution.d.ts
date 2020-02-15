/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import { AbstractViewContribution } from '@theia/core/lib/browser/shell/view-contribution';
import { Widget } from '@theia/core/lib/browser';
import { OutputWidget } from './output-widget';
import { Command, CommandRegistry } from '@theia/core/lib/common';
export declare namespace OutputCommands {
    const CLEAR_OUTPUT_TOOLBAR: Command;
}
export declare class OutputContribution extends AbstractViewContribution<OutputWidget> {
    constructor();
    registerCommands(commands: CommandRegistry): void;
    protected clear(widget: OutputWidget): Promise<void>;
    protected withWidget<T>(widget: Widget | undefined, cb: (problems: OutputWidget) => T): T | false;
}
//# sourceMappingURL=output-contribution.d.ts.map