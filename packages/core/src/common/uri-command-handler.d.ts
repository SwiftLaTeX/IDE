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
import { SelectionService } from '../common/selection-service';
import { CommandHandler } from './command';
import { MaybeArray } from '.';
import URI from './uri';
export interface UriCommandHandler<T extends MaybeArray<URI>> {
    execute(uri: T, ...args: any[]): any;
    isEnabled?(uri: T, ...args: any[]): boolean;
    isVisible?(uri: T, ...args: any[]): boolean;
}
/**
 * Handler for a single URI-based selection.
 */
export interface SingleUriCommandHandler extends UriCommandHandler<URI> {
}
/**
 * Handler for multiple URIs.
 */
export interface MultiUriCommandHandler extends UriCommandHandler<URI[]> {
}
export declare namespace UriAwareCommandHandler {
    /**
     * Further options for the URI aware command handler instantiation.
     */
    interface Options {
        /**
         * `true` if the handler supports multiple selection. Otherwise, `false`. Defaults to `false`.
         */
        readonly multi?: boolean;
    }
}
/**
 * @todo Create different classes for single and multi-uris. State can be
 * corrupt if the developer does something like:
 * ```ts
 * new UriAwareCommandHandler<URI[]>(selectionService, handler, { multi: false })
 * ```
 */
export declare class UriAwareCommandHandler<T extends MaybeArray<URI>> implements CommandHandler {
    protected readonly selectionService: SelectionService;
    protected readonly handler: UriCommandHandler<T>;
    protected readonly options?: UriAwareCommandHandler.Options | undefined;
    constructor(selectionService: SelectionService, handler: UriCommandHandler<T>, options?: UriAwareCommandHandler.Options | undefined);
    protected getUri(...args: any[]): T | undefined;
    execute(...args: any[]): object | undefined;
    isVisible(...args: any[]): boolean;
    isEnabled(...args: any[]): boolean;
    protected isMulti(): boolean | undefined;
}
//# sourceMappingURL=uri-command-handler.d.ts.map