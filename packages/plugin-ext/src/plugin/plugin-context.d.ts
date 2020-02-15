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
import { PluginManager, PluginAPIFactory } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import { MessageRegistryExt } from './message-registry';
import { WorkspaceExtImpl } from './workspace';
import { EnvExtImpl } from './env';
import { EditorsAndDocumentsExtImpl } from './editors-and-documents';
import { PreferenceRegistryExtImpl } from './preference-registry';
import { DebugExtImpl } from './node/debug/debug';
import { ClipboardExt } from './clipboard-ext';
import { WebviewsExtImpl } from './webviews';
export declare function createAPIFactory(rpc: RPCProtocol, pluginManager: PluginManager, envExt: EnvExtImpl, debugExt: DebugExtImpl, preferenceRegistryExt: PreferenceRegistryExtImpl, editorsAndDocumentsExt: EditorsAndDocumentsExtImpl, workspaceExt: WorkspaceExtImpl, messageRegistryExt: MessageRegistryExt, clipboard: ClipboardExt, webviewExt: WebviewsExtImpl): PluginAPIFactory;
//# sourceMappingURL=plugin-context.d.ts.map