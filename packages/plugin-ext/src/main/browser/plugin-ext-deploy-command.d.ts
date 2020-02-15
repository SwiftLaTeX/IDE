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
import { QuickOpenService, QuickOpenItem, QuickOpenModel, QuickOpenMode } from '@theia/core/lib/browser';
import { PluginServer } from '../../common';
import { Command } from '@theia/core/lib/common/command';
export declare class PluginExtDeployCommandService implements QuickOpenModel {
    private items;
    static COMMAND: Command;
    protected readonly quickOpenService: QuickOpenService;
    protected readonly pluginServer: PluginServer;
    constructor();
    /**
     * Whether the dialog is currently open.
     */
    protected isOpen: boolean;
    deploy(): void;
    onType(lookFor: string, acceptor: (items: QuickOpenItem[]) => void): Promise<void>;
}
export declare class DeployQuickOpenItem extends QuickOpenItem {
    protected readonly name: string;
    protected readonly pluginServer: PluginServer;
    protected readonly description?: string | undefined;
    constructor(name: string, pluginServer: PluginServer, description?: string | undefined);
    getLabel(): string;
    getDetail(): string;
    run(mode: QuickOpenMode): boolean;
}
//# sourceMappingURL=plugin-ext-deploy-command.d.ts.map