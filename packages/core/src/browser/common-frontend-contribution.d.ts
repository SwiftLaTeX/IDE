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
import { MenuContribution, MenuModelRegistry } from '../common/menu';
import { KeybindingContribution, KeybindingRegistry } from './keybinding';
import { FrontendApplicationContribution } from './frontend-application';
import { CommandContribution, CommandRegistry, Command } from '../common/command';
import { SelectionService } from '../common/selection-service';
import { MessageService } from '../common/message-service';
import { OpenerService } from '../browser/opener-service';
import { ApplicationShell } from './shell/application-shell';
import { AboutDialog } from './about-dialog';
import { ContextKeyService } from './context-key-service';
import { ResourceContextKey } from './resource-context-key';
import { StorageService } from './storage-service';
import { QuickViewService } from './quick-view-service';
import { PrefixQuickOpenService, QuickOpenService } from './quick-open';
import { IconThemeService } from './icon-theme-service';
import { ColorContribution } from './color-application-contribution';
import { ColorRegistry } from './color-registry';
import { CorePreferences } from './core-preferences';
import { ThemeService } from './theming';
import { PreferenceService } from './preferences';
export declare namespace CommonMenus {
    const FILE: string[];
    const FILE_NEW: string[];
    const FILE_OPEN: string[];
    const FILE_SAVE: string[];
    const FILE_AUTOSAVE: string[];
    const FILE_SETTINGS: string[];
    const FILE_SETTINGS_SUBMENU: string[];
    const FILE_SETTINGS_SUBMENU_OPEN: string[];
    const FILE_SETTINGS_SUBMENU_THEME: string[];
    const FILE_CLOSE: string[];
    const EDIT: string[];
    const EDIT_UNDO: string[];
    const EDIT_CLIPBOARD: string[];
    const EDIT_FIND: string[];
    const VIEW: string[];
    const VIEW_PRIMARY: string[];
    const VIEW_VIEWS: string[];
    const VIEW_LAYOUT: string[];
    const VIEW_TOGGLE: string[];
    const HELP: string[];
}
export declare namespace CommonCommands {
    const OPEN: Command;
    const CUT: Command;
    const COPY: Command;
    const PASTE: Command;
    const UNDO: Command;
    const REDO: Command;
    const FIND: Command;
    const REPLACE: Command;
    const NEXT_TAB: Command;
    const PREVIOUS_TAB: Command;
    const CLOSE_TAB: Command;
    const CLOSE_OTHER_TABS: Command;
    const CLOSE_RIGHT_TABS: Command;
    const CLOSE_ALL_TABS: Command;
    const CLOSE_MAIN_TAB: Command;
    const CLOSE_OTHER_MAIN_TABS: Command;
    const CLOSE_ALL_MAIN_TABS: Command;
    const COLLAPSE_PANEL: Command;
    const COLLAPSE_ALL_PANELS: Command;
    const TOGGLE_BOTTOM_PANEL: Command;
    const TOGGLE_MAXIMIZED: Command;
    const OPEN_VIEW: Command;
    const SAVE: Command;
    const SAVE_ALL: Command;
    const AUTO_SAVE: Command;
    const QUIT: Command;
    const ABOUT_COMMAND: Command;
    const OPEN_PREFERENCES: Command;
    const SELECT_COLOR_THEME: Command;
    const SELECT_ICON_THEME: Command;
}
export declare const supportCut: boolean;
export declare const supportCopy: boolean;
export declare const supportPaste: boolean;
export declare const RECENT_COMMANDS_STORAGE_KEY = "commands";
export declare class CommonFrontendContribution implements FrontendApplicationContribution, MenuContribution, CommandContribution, KeybindingContribution, ColorContribution {
    protected readonly shell: ApplicationShell;
    protected readonly selectionService: SelectionService;
    protected readonly messageService: MessageService;
    protected readonly openerService: OpenerService;
    protected readonly aboutDialog: AboutDialog;
    constructor(shell: ApplicationShell, selectionService: SelectionService, messageService: MessageService, openerService: OpenerService, aboutDialog: AboutDialog);
    protected readonly contextKeyService: ContextKeyService;
    protected readonly resourceContextKey: ResourceContextKey;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly storageService: StorageService;
    protected readonly quickView: QuickViewService;
    protected readonly quickOpen: PrefixQuickOpenService;
    protected readonly iconThemes: IconThemeService;
    protected readonly themeService: ThemeService;
    protected readonly quickOpenService: QuickOpenService;
    protected readonly preferences: CorePreferences;
    protected readonly preferenceService: PreferenceService;
    protected init(): void;
    protected updateStyles(): void;
    protected updateThemePreference(preferenceName: 'workbench.colorTheme' | 'workbench.iconTheme'): void;
    protected updateThemeFromPreference(preferenceName: 'workbench.colorTheme' | 'workbench.iconTheme'): void;
    onStart(): void;
    onStop(): void;
    protected initResourceContextKeys(): void;
    registerMenus(registry: MenuModelRegistry): void;
    registerCommands(commandRegistry: CommandRegistry): void;
    private findTabBar;
    private findTabArea;
    private findTitle;
    private isElectron;
    registerKeybindings(registry: KeybindingRegistry): void;
    protected openAbout(): Promise<void>;
    protected shouldPreventClose: boolean;
    /**
     * registers event listener which make sure that
     * window doesn't get closed if CMD/CTRL W is pressed.
     * Too many users have that in their muscle memory.
     * Chrome doesn't let us rebind or prevent default the keybinding, so this
     * at least doesn't close the window immediately.
     */
    protected registerCtrlWHandling(): void;
    onWillStop(): true | undefined;
    protected selectIconTheme(): void;
    protected selectColorTheme(): void;
    registerColors(colors: ColorRegistry): void;
}
//# sourceMappingURL=common-frontend-contribution.d.ts.map