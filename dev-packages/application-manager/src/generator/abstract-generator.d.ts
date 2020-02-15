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
import { ApplicationPackage } from '@theia/application-package';
export declare abstract class AbstractGenerator {
    protected readonly pck: ApplicationPackage;
    constructor(pck: ApplicationPackage);
    protected compileFrontendModuleImports(modules: Map<string, string>): string;
    protected compileBackendModuleImports(modules: Map<string, string>): string;
    protected compileModuleImports(modules: Map<string, string>, fn: 'import' | 'require'): string;
    protected ifBrowser(value: string, defaultValue?: string): string;
    protected ifElectron(value: string, defaultValue?: string): string;
    protected write(path: string, content: string): Promise<void>;
    protected ifMonaco(value: () => string, defaultValue?: () => string): string;
    protected prettyStringify(object: object): string;
}
//# sourceMappingURL=abstract-generator.d.ts.map