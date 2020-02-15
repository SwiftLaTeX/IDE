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
import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { DebugConsoleContribution } from '../console/debug-console-contribution';
import { DebugConfigurationManager } from '../debug-configuration-manager';
import { DebugSessionManager } from '../debug-session-manager';
import { DebugAction } from './debug-action';
import { DebugViewModel } from './debug-view-model';
import { DebugSessionOptions } from '../debug-session-options';
import { CommandRegistry } from '@theia/core/lib/common';
export declare class DebugConfigurationWidget extends ReactWidget {
    protected readonly commandRegistry: CommandRegistry;
    protected readonly viewModel: DebugViewModel;
    protected readonly manager: DebugConfigurationManager;
    protected readonly sessionManager: DebugSessionManager;
    protected readonly debugConsole: DebugConsoleContribution;
    protected readonly workspaceService: WorkspaceService;
    protected init(): void;
    focus(): void;
    protected doFocus(): boolean;
    protected stepRef: DebugAction | undefined;
    protected setStepRef: (stepRef: DebugAction | null) => DebugAction | undefined;
    render(): React.ReactNode;
    protected get currentValue(): string;
    protected get options(): React.ReactNode[];
    protected toValue({ configuration, workspaceFolderUri }: DebugSessionOptions): string;
    protected toName({ configuration, workspaceFolderUri }: DebugSessionOptions): string;
    protected readonly setCurrentConfiguration: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    protected readonly start: () => void;
    protected readonly openConfiguration: () => Promise<void>;
    protected readonly openConsole: () => Promise<import("../../../../console/src/browser/console-widget").ConsoleWidget>;
}
//# sourceMappingURL=debug-configuration-widget.d.ts.map