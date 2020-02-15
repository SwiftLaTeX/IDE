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
import { NpmRegistry, PublishedNodePackage, NodePackage } from './npm-registry';
export interface Extension {
    frontend?: string;
    frontendElectron?: string;
    backend?: string;
    backendElectron?: string;
}
export declare class ExtensionPackage {
    readonly raw: PublishedNodePackage & Partial<RawExtensionPackage>;
    protected readonly registry: NpmRegistry;
    constructor(raw: PublishedNodePackage & Partial<RawExtensionPackage>, registry: NpmRegistry);
    get name(): string;
    get version(): string;
    get description(): string;
    get theiaExtensions(): Extension[];
    get installed(): boolean;
    get dependent(): string | undefined;
    get transitive(): boolean;
    get parent(): ExtensionPackage | undefined;
    protected view(): Promise<RawExtensionPackage.ViewState>;
    protected readme?: string;
    getReadme(): Promise<string>;
    protected resolveReadme(): Promise<string>;
    getLatestVersion(): Promise<string | undefined>;
    protected versionRange?: string;
    getVersionRange(): Promise<string | undefined>;
    protected resolveVersionRange(): Promise<string | undefined>;
    getAuthor(): string;
    isOutdated(): Promise<boolean>;
}
export interface RawExtensionPackage extends PublishedNodePackage {
    installed?: RawExtensionPackage.InstalledState;
    view?: RawExtensionPackage.ViewState;
    theiaExtensions: Extension[];
}
export declare namespace RawExtensionPackage {
    interface InstalledState {
        version: string;
        packagePath: string;
        transitive: boolean;
        parent?: ExtensionPackage;
    }
    class ViewState {
        protected readonly registry: NpmRegistry;
        readme?: string;
        tags?: {
            [tag: string]: string;
        };
        constructor(registry: NpmRegistry);
        get latestVersion(): string | undefined;
    }
    function is(pck: NodePackage | undefined): pck is RawExtensionPackage;
    function view(registry: NpmRegistry, name: string, version?: string): Promise<RawExtensionPackage | undefined>;
}
//# sourceMappingURL=extension-package.d.ts.map