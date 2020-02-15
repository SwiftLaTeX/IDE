/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { NpmRegistryProps } from './application-props';
export interface IChangeStream {
    on(event: 'data', cb: (change: {
        id: string;
    }) => void): void;
    destroy(): void;
}
export interface Author {
    name: string;
    email: string;
}
export interface Maintainer {
    username: string;
    email: string;
}
export interface Dependencies {
    [name: string]: string | undefined;
}
export interface NodePackage {
    name?: string;
    version?: string;
    description?: string;
    publisher?: Maintainer;
    author?: string | Author;
    maintainers?: Maintainer[];
    keywords?: string[];
    dependencies?: Dependencies;
    [property: string]: any;
}
export interface PublishedNodePackage extends NodePackage {
    name: string;
    version: string;
}
export declare namespace PublishedNodePackage {
    function is(pck: NodePackage | undefined): pck is PublishedNodePackage;
}
export interface ViewResult {
    'dist-tags': {
        [tag: string]: string;
    };
    'versions': {
        [version: string]: NodePackage;
    };
    'readme': string;
    [key: string]: any;
}
export declare function sortByKey(object: {
    [key: string]: any;
}): {
    [key: string]: any;
};
export declare class NpmRegistryOptions {
    /**
     * Default: false.
     */
    readonly watchChanges: boolean;
}
export declare class NpmRegistry {
    readonly props: NpmRegistryProps;
    protected readonly options: NpmRegistryOptions;
    protected changes: undefined | IChangeStream;
    protected readonly index: Map<string, Promise<ViewResult>>;
    constructor(options?: Partial<NpmRegistryOptions>);
    updateProps(props?: Partial<NpmRegistryProps>): void;
    protected resetIndex(): void;
    protected invalidate(name: string): void;
    view(name: string): Promise<ViewResult>;
    protected doView(name: string): Promise<ViewResult>;
}
//# sourceMappingURL=npm-registry.d.ts.map