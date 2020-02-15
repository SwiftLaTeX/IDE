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
import { VariableRegistry } from './variable';
import URI from '@theia/core/lib/common/uri';
export interface VariableResolveOptions {
    context?: URI;
    /**
     * Used for resolving inputs, see https://code.visualstudio.com/docs/editor/variables-reference#_input-variables
     */
    configurationSection?: string;
}
/**
 * The variable resolver service should be used to resolve variables in strings.
 */
export declare class VariableResolverService {
    protected static VAR_REGEXP: RegExp;
    protected readonly variableRegistry: VariableRegistry;
    /**
     * Resolve the variables in the given string array.
     * @param value The array of data to resolve
     * @param options options of the variable resolution
     * @returns promise resolved to the provided string array with already resolved variables.
     * Never reject.
     */
    resolveArray(value: string[], options?: VariableResolveOptions): Promise<string[]>;
    /**
     * Resolve the variables in the given string.
     * @param value Data to resolve
     * @param options options of the variable resolution
     * @returns promise resolved to the provided string with already resolved variables.
     * Never reject.
     */
    resolve<T>(value: T, options?: VariableResolveOptions): Promise<T>;
    protected doResolve(value: Object | undefined, context: VariableResolverService.Context): Promise<Object | undefined>;
    protected doResolveObject(obj: object, context: VariableResolverService.Context): Promise<object>;
    protected doResolveArray(values: Array<Object | undefined>, context: VariableResolverService.Context): Promise<Array<Object | undefined>>;
    protected doResolveString(value: string, context: VariableResolverService.Context): Promise<string>;
    protected resolveVariables(value: string, context: VariableResolverService.Context): Promise<void>;
}
export declare namespace VariableResolverService {
    class Context {
        protected readonly variableRegistry: VariableRegistry;
        protected readonly options: VariableResolveOptions;
        protected readonly resolved: Map<string, string | undefined>;
        constructor(variableRegistry: VariableRegistry, options: VariableResolveOptions);
        get(name: string): string | undefined;
        resolve(name: string): Promise<void>;
    }
}
//# sourceMappingURL=variable-resolver-service.d.ts.map