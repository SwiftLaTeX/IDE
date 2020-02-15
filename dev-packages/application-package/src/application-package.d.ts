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
import { NpmRegistry, NodePackage, PublishedNodePackage } from './npm-registry';
import { Extension, ExtensionPackage } from './extension-package';
import { ApplicationProps } from './application-props';
export declare type ApplicationLog = (message?: any, ...optionalParams: any[]) => void;
export declare class ApplicationPackageOptions {
    readonly projectPath: string;
    readonly log?: ApplicationLog;
    readonly error?: ApplicationLog;
    readonly registry?: NpmRegistry;
    readonly appTarget?: ApplicationProps.Target;
}
export declare type ApplicationModuleResolver = (modulePath: string) => string;
export declare class ApplicationPackage {
    protected readonly options: ApplicationPackageOptions;
    readonly projectPath: string;
    readonly log: ApplicationLog;
    readonly error: ApplicationLog;
    constructor(options: ApplicationPackageOptions);
    protected _registry: NpmRegistry | undefined;
    get registry(): NpmRegistry;
    get target(): ApplicationProps.Target;
    protected _props: ApplicationProps | undefined;
    get props(): ApplicationProps;
    protected _pck: NodePackage | undefined;
    get pck(): NodePackage;
    protected _frontendModules: Map<string, string> | undefined;
    protected _frontendElectronModules: Map<string, string> | undefined;
    protected _backendModules: Map<string, string> | undefined;
    protected _backendElectronModules: Map<string, string> | undefined;
    protected _extensionPackages: ReadonlyArray<ExtensionPackage> | undefined;
    /**
     * Extension packages in the topological order.
     */
    get extensionPackages(): ReadonlyArray<ExtensionPackage>;
    getExtensionPackage(extension: string): ExtensionPackage | undefined;
    findExtensionPackage(extension: string): Promise<ExtensionPackage | undefined>;
    resolveExtensionPackage(extension: string): Promise<ExtensionPackage | undefined>;
    protected newExtensionPackage(raw: PublishedNodePackage): ExtensionPackage;
    get frontendModules(): Map<string, string>;
    get frontendElectronModules(): Map<string, string>;
    get backendModules(): Map<string, string>;
    get backendElectronModules(): Map<string, string>;
    protected computeModules<P extends keyof Extension, S extends keyof Extension = P>(primary: P, secondary?: S): Map<string, string>;
    relative(path: string): string;
    path(...segments: string[]): string;
    get packagePath(): string;
    lib(...segments: string[]): string;
    srcGen(...segments: string[]): string;
    backend(...segments: string[]): string;
    frontend(...segments: string[]): string;
    isBrowser(): boolean;
    isElectron(): boolean;
    ifBrowser<T>(value: T): T | undefined;
    ifBrowser<T>(value: T, defaultValue: T): T;
    ifElectron<T>(value: T): T | undefined;
    ifElectron<T>(value: T, defaultValue: T): T;
    get targetBackendModules(): Map<string, string>;
    get targetFrontendModules(): Map<string, string>;
    setDependency(name: string, version: string | undefined): boolean;
    save(): Promise<void>;
    protected _moduleResolver: undefined | ApplicationModuleResolver;
    /**
     * A node module resolver in the context of the application package.
     */
    get resolveModule(): ApplicationModuleResolver;
    resolveModulePath(moduleName: string, ...segments: string[]): string;
}
//# sourceMappingURL=application-package.d.ts.map