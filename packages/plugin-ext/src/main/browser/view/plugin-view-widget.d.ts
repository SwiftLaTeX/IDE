/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { Panel, Widget } from '@phosphor/widgets';
import { MenuModelRegistry } from '@theia/core/lib/common/menu';
import { CommandRegistry } from '@theia/core/lib/common/command';
import { ViewContextKeyService } from './view-context-key-service';
import { StatefulWidget } from '@theia/core/lib/browser/shell/shell-layout-restorer';
import { Message } from '@phosphor/messaging';
export declare class PluginViewWidgetIdentifier {
    id: string;
    viewId: string;
}
export declare class PluginViewWidget extends Panel implements StatefulWidget {
    protected readonly menus: MenuModelRegistry;
    protected readonly commands: CommandRegistry;
    protected readonly contextKeys: ViewContextKeyService;
    readonly options: PluginViewWidgetIdentifier;
    constructor();
    protected init(): void;
    protected onActivateRequest(msg: Message): void;
    storeState(): PluginViewWidget.State;
    restoreState(state: PluginViewWidget.State): void;
    protected _suppressUpdateViewVisibility: boolean;
    set suppressUpdateViewVisibility(suppressUpdateViewVisibility: boolean);
    protected updatingViewVisibility: boolean;
    updateViewVisibility(cb: () => void): void;
}
export declare namespace PluginViewWidget {
    interface State {
        label: string;
        widgets: ReadonlyArray<Widget>;
    }
}
//# sourceMappingURL=plugin-view-widget.d.ts.map