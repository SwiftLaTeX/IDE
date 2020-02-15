/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
import { OutputChannelManager } from '../common/output-channel';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import * as React from 'react';
export declare class OutputToolbarContribution implements TabBarToolbarContribution {
    protected readonly outputChannelManager: OutputChannelManager;
    registerToolbarItems(toolbarRegistry: TabBarToolbarRegistry): Promise<void>;
    protected readonly NONE = "<no channels>";
    protected renderChannelSelector(): React.ReactNode;
    protected changeChannel: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
//# sourceMappingURL=output-toolbar-contribution.d.ts.map