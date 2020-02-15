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
import { OutputChannelRegistryMain, PluginInfo } from '../../common/plugin-api-rpc';
export declare class OutputChannelRegistryMainImpl implements OutputChannelRegistryMain {
    private outputChannelManager;
    private outputContribution;
    private commonOutputWidget;
    private channels;
    $append(channelName: string, value: string, pluginInfo: PluginInfo): PromiseLike<void>;
    $clear(channelName: string): PromiseLike<void>;
    $dispose(channelName: string): PromiseLike<void>;
    $reveal(channelName: string, preserveFocus: boolean): Promise<void>;
    $close(channelName: string): PromiseLike<void>;
    private getChannel;
}
//# sourceMappingURL=output-channel-registry-main.d.ts.map