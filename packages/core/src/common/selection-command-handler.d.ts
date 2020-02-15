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
import { CommandHandler } from './command';
import { SelectionService } from '../common/selection-service';
export declare class SelectionCommandHandler<S> implements CommandHandler {
    protected readonly selectionService: SelectionService;
    protected readonly toSelection: (arg: any) => S | undefined;
    protected readonly options: SelectionCommandHandler.Options<S>;
    constructor(selectionService: SelectionService, toSelection: (arg: any) => S | undefined, options: SelectionCommandHandler.Options<S>);
    execute(...args: any[]): Object | undefined;
    isVisible(...args: any[]): boolean;
    isEnabled(...args: any[]): boolean;
    protected isMulti(): boolean;
    protected getSelection(...args: any[]): S | S[] | undefined;
    protected getSingleSelection(arg: Object | undefined): S | undefined;
    protected getMultiSelection(arg: Object | undefined): S[] | undefined;
}
export declare namespace SelectionCommandHandler {
    type Options<S> = SelectionOptions<false, S> | SelectionOptions<true, S[]>;
    interface SelectionOptions<Multi extends boolean, T> {
        multi: Multi;
        execute(selection: T, ...args: any[]): any;
        isEnabled?(selection: T, ...args: any[]): boolean;
        isVisible?(selection: T, ...args: any[]): boolean;
    }
}
//# sourceMappingURL=selection-command-handler.d.ts.map