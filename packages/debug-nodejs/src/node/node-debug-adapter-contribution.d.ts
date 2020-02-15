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
import { DebugConfiguration } from '@theia/debug/lib/common/debug-configuration';
import { AbstractVSCodeDebugAdapterContribution } from '@theia/debug/lib/node/vscode/vscode-debug-adapter-contribution';
export declare const INSPECTOR_PORT_DEFAULT = 9229;
export declare const LEGACY_PORT_DEFAULT = 5858;
export declare class NodeDebugAdapterContribution extends AbstractVSCodeDebugAdapterContribution {
    constructor();
    provideDebugConfigurations(workspaceFolderUri?: string): DebugConfiguration[];
    resolveDebugConfiguration(config: DebugConfiguration, workspaceFolderUri?: string): Promise<DebugConfiguration | undefined>;
    protected resolveDebugType(config: DebugConfiguration): Promise<string>;
    protected resolveAttachConfiguration(config: DebugConfiguration): Promise<void>;
}
export declare class Node2DebugAdapterContribution extends AbstractVSCodeDebugAdapterContribution {
    constructor();
}
//# sourceMappingURL=node-debug-adapter-contribution.d.ts.map