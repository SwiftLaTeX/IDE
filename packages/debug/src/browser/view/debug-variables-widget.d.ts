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
import { interfaces, Container } from 'inversify';
import { MenuPath } from '@theia/core/lib/common';
import { SourceTreeWidget } from '@theia/core/lib/browser/source-tree';
import { DebugVariablesSource } from './debug-variables-source';
import { DebugViewModel } from './debug-view-model';
export declare class DebugVariablesWidget extends SourceTreeWidget {
    static CONTEXT_MENU: MenuPath;
    static EDIT_MENU: MenuPath;
    static WATCH_MENU: MenuPath;
    static createContainer(parent: interfaces.Container): Container;
    static createWidget(parent: interfaces.Container): DebugVariablesWidget;
    protected readonly viewModel: DebugViewModel;
    protected readonly variables: DebugVariablesSource;
    protected init(): void;
}
//# sourceMappingURL=debug-variables-widget.d.ts.map