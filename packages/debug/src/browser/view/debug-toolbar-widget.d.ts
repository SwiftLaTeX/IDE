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
import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets';
import { DebugViewModel } from './debug-view-model';
import { DebugAction } from './debug-action';
export declare class DebugToolBar extends ReactWidget {
    protected readonly model: DebugViewModel;
    protected init(): void;
    focus(): void;
    protected doFocus(): boolean;
    protected stepRef: DebugAction | undefined;
    protected setStepRef: (stepRef: DebugAction | null) => DebugAction | undefined;
    protected render(): React.ReactNode;
    protected renderStart(): React.ReactNode;
    protected renderContinue(): React.ReactNode;
    protected start: () => Promise<void>;
    protected restart: () => Promise<void>;
    protected stop: () => Promise<void> | undefined;
    protected continue: () => Promise<import("vscode-debugprotocol").DebugProtocol.ContinueResponse> | undefined;
    protected pause: () => Promise<import("vscode-debugprotocol").DebugProtocol.PauseResponse> | undefined;
    protected stepOver: () => Promise<import("vscode-debugprotocol").DebugProtocol.NextResponse> | undefined;
    protected stepIn: () => Promise<import("vscode-debugprotocol").DebugProtocol.StepInResponse> | undefined;
    protected stepOut: () => Promise<import("vscode-debugprotocol").DebugProtocol.StepOutResponse> | undefined;
}
//# sourceMappingURL=debug-toolbar-widget.d.ts.map