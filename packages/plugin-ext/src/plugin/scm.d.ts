/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import * as theia from '@theia/plugin';
import { Plugin as InternalPlugin, ScmExt } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import { CancellationToken } from '@theia/core/lib/common/cancellation';
import { UriComponents } from '../common/uri-components';
import { CommandRegistryImpl } from './command-registry';
export declare class ScmExtImpl implements ScmExt {
    readonly rpc: RPCProtocol;
    private readonly commands;
    private handle;
    private readonly proxy;
    private readonly sourceControlMap;
    private readonly sourceControlsByPluginMap;
    constructor(rpc: RPCProtocol, commands: CommandRegistryImpl);
    createSourceControl(plugin: InternalPlugin, id: string, label: string, rootUri?: theia.Uri): theia.SourceControl;
    getLastInputBox(plugin: InternalPlugin): theia.SourceControlInputBox | undefined;
    $executeResourceCommand(sourceControlHandle: number, groupHandle: number, resourceHandle: number): Promise<void>;
    $provideOriginalResource(sourceControlHandle: number, uri: string, token: CancellationToken): Promise<UriComponents | undefined>;
    $updateInputBox(sourceControlHandle: number, value: string): Promise<void>;
    $setSourceControlSelection(sourceControlHandle: number, selected: boolean): Promise<void>;
}
//# sourceMappingURL=scm.d.ts.map