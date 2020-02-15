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
import { NodePackage, PublishedNodePackage } from './npm-registry';
import { ExtensionPackage } from './extension-package';
export declare class ExtensionPackageCollector {
    protected readonly extensionPackageFactory: (raw: PublishedNodePackage) => ExtensionPackage;
    protected readonly resolveModule: (modulePath: string) => string;
    protected readonly sorted: ExtensionPackage[];
    protected readonly visited: Map<string, boolean>;
    constructor(extensionPackageFactory: (raw: PublishedNodePackage) => ExtensionPackage, resolveModule: (modulePath: string) => string);
    protected root: NodePackage;
    collect(pck: NodePackage): ReadonlyArray<ExtensionPackage>;
    protected collectPackages(pck: NodePackage): void;
    protected parent: ExtensionPackage | undefined;
    protected collectPackagesWithParent(pck: NodePackage, parent: ExtensionPackage): void;
    protected collectPackage(name: string, versionRange: string): void;
}
//# sourceMappingURL=extension-package-collector.d.ts.map