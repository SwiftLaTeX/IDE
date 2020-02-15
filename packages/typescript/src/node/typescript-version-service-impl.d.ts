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
import URI from '@theia/core/lib/common/uri';
import { TypescriptVersion, TypescriptVersionService, TypescriptVersionOptions } from '../common/typescript-version-service';
import { ApplicationPackage } from '@theia/application-package';
export declare namespace TypescriptVersionURI {
    function encodeCommand(command: string): URI;
    function getTsServerPath(version: TypescriptVersion | undefined): string | undefined;
}
export declare class TypescriptVersionServiceImpl implements TypescriptVersionService {
    protected readonly applicationPackage: ApplicationPackage;
    getVersions(options: TypescriptVersionOptions): Promise<TypescriptVersion[]>;
    protected resolveBundledVersion(): Promise<TypescriptVersion | undefined>;
    protected resolveBundledVersionInApplicationPath(): Promise<TypescriptVersion | undefined>;
    protected resolveBundledVersionWithRequire(): Promise<TypescriptVersion | undefined>;
    protected resolveBundledVersionAsExecutable(): Promise<TypescriptVersion | undefined>;
    protected resolveWorkspaceVersions(versions: TypescriptVersion[], options: TypescriptVersionOptions): Promise<void>;
    protected resolveVersions(roots: URI[], versions: Map<string, string | undefined>, rawPath: string): Promise<void>;
    protected resolveVersion(versions: Map<string, string | undefined>, uri: URI): Promise<void>;
    protected readVersion(uri: URI): Promise<string | undefined>;
}
//# sourceMappingURL=typescript-version-service-impl.d.ts.map