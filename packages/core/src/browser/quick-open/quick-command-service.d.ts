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
import { Command, CommandRegistry, Disposable } from '../../common';
import { Keybinding, KeybindingRegistry } from '../keybinding';
import { QuickOpenModel, QuickOpenItem, QuickOpenMode, QuickOpenGroupItem } from './quick-open-model';
import { QuickOpenOptions } from './quick-open-service';
import { QuickOpenContribution, QuickOpenHandlerRegistry, QuickOpenHandler } from './prefix-quick-open-service';
import { ContextKeyService } from '../context-key-service';
import { CorePreferences } from '../core-preferences';
export declare class QuickCommandService implements QuickOpenModel, QuickOpenHandler {
    private items;
    readonly prefix: string;
    readonly description: string;
    readonly exemptedCommands: Command[];
    protected readonly commands: CommandRegistry;
    protected readonly keybindings: KeybindingRegistry;
    protected readonly contextKeyService: ContextKeyService;
    protected readonly corePreferences: CorePreferences;
    protected readonly contexts: Map<string, string[]>;
    pushCommandContext(commandId: string, when: string): Disposable;
    /** Initialize this quick open model with the commands. */
    init(): void;
    onType(lookFor: string, acceptor: (items: QuickOpenItem[]) => void): void;
    getModel(): QuickOpenModel;
    getOptions(): QuickOpenOptions;
    /**
     * Get the list of recently used and other commands.
     *
     * @returns the list of recently used commands and other commands.
     */
    private getCommands;
    /**
     * Normalizes a list of commands.
     * Normalization includes obtaining commands that have labels and are visible.
     *
     * @param commands the list of commands.
     * @returns the list of normalized commands.
     */
    private normalize;
    /**
     * Sorts a list of commands alphabetically.
     *
     * @param commands the list of commands.
     * @returns the list of sorted commands.
     */
    private sort;
    /**
     * Get the list of valid commands.
     *
     * @param commands the list of raw commands.
     * @returns the list of valid commands.
     */
    private getValidCommands;
}
export declare class CommandQuickOpenItem extends QuickOpenGroupItem {
    protected readonly command: Command;
    protected readonly commands: CommandRegistry;
    protected readonly keybindings: KeybindingRegistry;
    protected readonly commandOptions?: import("../../common/quick-open-model").QuickOpenGroupItemOptions | undefined;
    private activeElement;
    private hidden;
    constructor(command: Command, commands: CommandRegistry, keybindings: KeybindingRegistry, commandOptions?: import("../../common/quick-open-model").QuickOpenGroupItemOptions | undefined);
    getLabel(): string;
    isHidden(): boolean;
    getIconClass(): string | undefined;
    getKeybinding(): Keybinding | undefined;
    run(mode: QuickOpenMode): boolean;
}
export declare class CommandQuickOpenContribution implements QuickOpenContribution {
    protected readonly commandQuickOpenHandler: QuickCommandService;
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
}
//# sourceMappingURL=quick-command-service.d.ts.map