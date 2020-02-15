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
export declare const typescriptVersionPath = "/services/ts-version";
export declare type TypescriptVersionQualifier = 'Bundled' | 'Workspace';
export interface TypescriptVersion {
    uri: string;
    version: string;
    qualifier: TypescriptVersionQualifier;
}
export declare namespace TypescriptVersion {
    function equals(one: TypescriptVersion | undefined, another: TypescriptVersion | undefined): boolean;
}
export interface TypescriptVersionOptions {
    workspaceFolders: string[];
    localTsdk?: string;
}
export declare const TypescriptVersionService: unique symbol;
export interface TypescriptVersionService {
    getVersions(options: TypescriptVersionOptions): Promise<TypescriptVersion[]>;
}
//# sourceMappingURL=typescript-version-service.d.ts.map