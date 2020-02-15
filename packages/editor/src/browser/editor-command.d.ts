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
import { CommandContribution, CommandRegistry, Command } from '@theia/core/lib/common';
import URI from '@theia/core/lib/common/uri';
import { PreferenceService, QuickPickService, LabelProvider, QuickPickValue } from '@theia/core/lib/browser';
import { Languages, Language } from '@theia/languages/lib/browser';
import { EditorManager } from './editor-manager';
import { EditorPreferences } from './editor-preferences';
import { ResourceProvider, MessageService } from '@theia/core';
export declare namespace EditorCommands {
    /**
     * Show editor references
     */
    const SHOW_REFERENCES: Command;
    /**
     * Change indentation configuration (i.e., indent using tabs / spaces, and how many spaces per tab)
     */
    const CONFIG_INDENTATION: Command;
    const CONFIG_EOL: Command;
    const INDENT_USING_SPACES: Command;
    const INDENT_USING_TABS: Command;
    const CHANGE_LANGUAGE: Command;
    const CHANGE_ENCODING: Command;
    /**
     * Command for going back to the last editor navigation location.
     */
    const GO_BACK: Command;
    /**
     * Command for going to the forthcoming editor navigation location.
     */
    const GO_FORWARD: Command;
    /**
     * Command that reveals the last text edit location, if any.
     */
    const GO_LAST_EDIT: Command;
    /**
     * Command that clears the editor navigation history.
     */
    const CLEAR_EDITOR_HISTORY: Command;
    /**
     * Command that displays all editors that are currently opened.
     */
    const SHOW_ALL_OPENED_EDITORS: Command;
    /**
     * Command that toggles the minimap.
     */
    const TOGGLE_MINIMAP: Command;
    /**
     * Command that toggles the rendering of whitespace characters in the editor.
     */
    const TOGGLE_RENDER_WHITESPACE: Command;
    /**
     * Command that toggles the word wrap.
     */
    const TOGGLE_WORD_WRAP: Command;
}
export declare class EditorCommandContribution implements CommandContribution {
    static readonly AUTOSAVE_PREFERENCE: string;
    protected readonly preferencesService: PreferenceService;
    protected readonly editorPreferences: EditorPreferences;
    protected readonly quickPick: QuickPickService;
    protected readonly messageService: MessageService;
    protected readonly labelProvider: LabelProvider;
    protected readonly languages: Languages;
    protected readonly editorManager: EditorManager;
    protected readonly resourceProvider: ResourceProvider;
    registerCommands(registry: CommandRegistry): void;
    protected canConfigureLanguage(): boolean;
    protected configureLanguage(): Promise<void>;
    protected canConfigureEncoding(): boolean;
    protected configureEncoding(): Promise<void>;
    protected toQuickPickLanguage(value: Language, current: string): QuickPickValue<Language>;
    protected toLanguageUri(language: Language): URI;
    private isAutoSaveOn;
    private toggleAutoSave;
}
//# sourceMappingURL=editor-command.d.ts.map