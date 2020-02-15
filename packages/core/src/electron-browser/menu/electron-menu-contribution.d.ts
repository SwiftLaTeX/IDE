/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { Command, CommandContribution, CommandRegistry, MenuModelRegistry, MenuContribution } from '../../common';
import { KeybindingContribution, KeybindingRegistry } from '../../browser';
import { FrontendApplication, FrontendApplicationContribution } from '../../browser';
import { ElectronMainMenuFactory } from './electron-main-menu-factory';
import { FrontendApplicationStateService } from '../../browser/frontend-application-state';
export declare namespace ElectronCommands {
    const TOGGLE_DEVELOPER_TOOLS: Command;
    const RELOAD: Command;
    const ZOOM_IN: Command;
    const ZOOM_OUT: Command;
    const RESET_ZOOM: Command;
    const CLOSE_WINDOW: Command;
}
export declare namespace ElectronMenus {
    const VIEW_WINDOW: string[];
    const VIEW_ZOOM: string[];
}
export declare namespace ElectronMenus {
    const HELP_TOGGLE: string[];
}
export declare namespace ElectronMenus {
    const FILE_CLOSE: string[];
}
export declare class ElectronMenuContribution implements FrontendApplicationContribution, CommandContribution, MenuContribution, KeybindingContribution {
    protected readonly factory: ElectronMainMenuFactory;
    protected readonly stateService: FrontendApplicationStateService;
    constructor(factory: ElectronMainMenuFactory);
    onStart(app: FrontendApplication): void;
    /**
     * Makes the `theia-top-panel` hidden as it is unused for the electron-based application.
     * The `theia-top-panel` is used as the container of the main, application menu-bar for the
     * browser. Electron has it's own.
     * By default, this method is called on application `onStart`.
     */
    protected hideTopPanel(app: FrontendApplication): void;
    private setMenu;
    registerCommands(registry: CommandRegistry): void;
    registerKeybindings(registry: KeybindingRegistry): void;
    registerMenus(registry: MenuModelRegistry): void;
}
//# sourceMappingURL=electron-menu-contribution.d.ts.map