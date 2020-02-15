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
import URI from '@theia/core/lib/common/uri';
export interface UriComponents {
    scheme: string;
    authority: string;
    path: string;
    query: string;
    fragment: string;
    external?: string;
}
export declare namespace Schemes {
    const FILE = "file";
    const UNTITLED = "untitled";
    const HTTP: string;
    const HTTPS: string;
    const MAILTO: string;
    const DATA: string;
    /**
     * A schema is used for models that exist in memory
     * only and that have no correspondence on a server or such.
     */
    const IN_MEMORY: string;
    /** A schema is used for settings files. */
    const VSCODE: string;
    /** A schema is used for internal private files. */
    const INTERNAL: string;
    const COMMAND: string;
}
export declare function theiaUritoUriComponents(uri: URI): UriComponents;
//# sourceMappingURL=uri-components.d.ts.map