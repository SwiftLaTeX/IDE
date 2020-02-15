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
import { Emitter, Event } from '../common/event';
import { CommandRegistry } from '../common/command';
import { Disposable } from '../common/disposable';
import { KeyCode, KeySequence, Key } from './keyboard/keys';
import { KeyboardLayoutService } from './keyboard/keyboard-layout-service';
import { ContributionProvider } from '../common/contribution-provider';
import { ILogger } from '../common/logger';
import { StatusBar } from './status-bar/status-bar';
import { ContextKeyService } from './context-key-service';
import * as common from '../common/keybinding';
export declare enum KeybindingScope {
    DEFAULT = 0,
    DEFAULT_OVERRIDING = 1,
    USER = 2,
    WORKSPACE = 3,
    END = 4
}
export declare namespace KeybindingScope {
    const length: number;
}
/**
 * @deprecated import from `@theia/core/lib/common/keybinding` instead
 */
export declare type Keybinding = common.Keybinding;
export declare const Keybinding: typeof common.Keybinding;
export interface ResolvedKeybinding extends Keybinding {
    /**
     * The KeyboardLayoutService may transform the `keybinding` depending on the
     * user's keyboard layout. This property holds the transformed keybinding that
     * should be used in the UI. The value is undefined if the KeyboardLayoutService
     * has not been called yet to resolve the keybinding.
     */
    resolved?: KeyCode[];
}
export interface ScopedKeybinding extends Keybinding {
    /** Current keybinding scope */
    scope?: KeybindingScope;
}
export declare const KeybindingContribution: unique symbol;
/**
 * Representation of a keybinding contribution.
 */
export interface KeybindingContribution {
    /**
     * Registers keybindings.
     * @param keybindings the keybinding registry.
     */
    registerKeybindings(keybindings: KeybindingRegistry): void;
}
export declare const KeybindingContext: unique symbol;
export interface KeybindingContext {
    /**
     * The unique ID of the current context.
     */
    readonly id: string;
    isEnabled(arg: Keybinding): boolean;
}
export declare namespace KeybindingContexts {
    const NOOP_CONTEXT: KeybindingContext;
    const DEFAULT_CONTEXT: KeybindingContext;
}
export declare class KeybindingRegistry {
    static readonly PASSTHROUGH_PSEUDO_COMMAND = "passthrough";
    protected keySequence: KeySequence;
    protected readonly contexts: {
        [id: string]: KeybindingContext;
    };
    protected readonly keymaps: Keybinding[][];
    protected readonly keyboardLayoutService: KeyboardLayoutService;
    protected readonly contextProvider: ContributionProvider<KeybindingContext>;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly contributions: ContributionProvider<KeybindingContribution>;
    protected readonly statusBar: StatusBar;
    protected readonly logger: ILogger;
    protected readonly whenContextService: ContextKeyService;
    onStart(): Promise<void>;
    protected keybindingsChanged: Emitter<void>;
    /**
     * Event that is fired when the resolved keybindings change due to a different keyboard layout
     * or when a new keymap is being set
     */
    get onKeybindingsChanged(): Event<void>;
    /**
     * Registers the keybinding context arguments into the application. Fails when an already registered
     * context is being registered.
     *
     * @param contexts the keybinding contexts to register into the application.
     */
    protected registerContext(...contexts: KeybindingContext[]): void;
    /**
     * Register a default keybinding to the registry.
     *
     * @param binding
     * @param override Override existed keybinding
     */
    registerKeybinding(binding: Keybinding, override?: boolean): Disposable;
    /**
     * Register default keybindings to the registry
     *
     * @param bindings
     */
    registerKeybindings(...bindings: Keybinding[]): Disposable;
    /**
     * Unregister keybinding from the registry
     *
     * @param binding
     */
    unregisterKeybinding(binding: Keybinding): void;
    /**
     * Unregister keybinding from the registry
     *
     * @param key
     */
    unregisterKeybinding(key: string): void;
    protected doRegisterKeybindings(bindings: Keybinding[], scope?: KeybindingScope): Disposable;
    protected doRegisterKeybinding(binding: Keybinding, scope?: KeybindingScope): Disposable;
    /**
     * Ensure that the `resolved` property of the given binding is set by calling the KeyboardLayoutService.
     */
    resolveKeybinding(binding: ResolvedKeybinding): KeyCode[];
    /**
     * Clear all `resolved` properties of registered keybindings so the KeyboardLayoutService is called
     * again to resolve them. This is necessary when the user's keyboard layout has changed.
     */
    protected clearResolvedKeybindings(): void;
    /**
     * Checks for keySequence collisions in a list of Keybindings
     *
     * @param bindings the keybinding reference list
     * @param binding the keybinding to test collisions for
     */
    containsKeybinding(bindings: Keybinding[], binding: Keybinding): boolean;
    containsKeybindingInScope(binding: Keybinding, scope?: KeybindingScope): boolean;
    /**
     * Return a user visible representation of a keybinding.
     */
    acceleratorFor(keybinding: Keybinding, separator?: string): string[];
    /**
     * Return a user visible representation of a key sequence.
     */
    acceleratorForSequence(keySequence: KeySequence, separator?: string): string[];
    /**
     * Return a user visible representation of a key code (a key with modifiers).
     */
    acceleratorForKeyCode(keyCode: KeyCode, separator?: string): string;
    /**
     * Return a user visible representation of a single key.
     */
    acceleratorForKey(key: Key): string;
    /**
     * Finds collisions for a binding inside a list of bindings (error-free)
     *
     * @param bindings the reference bindings
     * @param binding the binding to match
     */
    protected getKeybindingCollisions(bindings: Keybinding[], binding: Keybinding): KeybindingRegistry.KeybindingsResult;
    /**
     * Finds collisions for a key sequence inside a list of bindings (error-free)
     *
     * @param bindings the reference bindings
     * @param candidate the sequence to match
     */
    protected getKeySequenceCollisions(bindings: Keybinding[], candidate: KeySequence): KeybindingRegistry.KeybindingsResult;
    /**
     * Get the lists of keybindings matching fully or partially matching a KeySequence.
     * The lists are sorted by priority (see #sortKeybindingsByPriority).
     *
     * @param keySequence The key sequence for which we are looking for keybindings.
     * @param event The source keyboard event.
     */
    getKeybindingsForKeySequence(keySequence: KeySequence, event?: KeyboardEvent): KeybindingRegistry.KeybindingsResult;
    /**
     * Get the keybindings associated to commandId.
     *
     * @param commandId The ID of the command for which we are looking for keybindings.
     */
    getKeybindingsForCommand(commandId: string): ScopedKeybinding[];
    /**
     * Returns a list of keybindings for a command in a specific scope
     * @param scope specific scope to look for
     * @param commandId unique id of the command
     */
    getScopedKeybindingsForCommand(scope: KeybindingScope, commandId: string): Keybinding[];
    /**
     * Sort keybindings in-place, in order of priority.
     *
     * The only criterion right now is that a keybinding with a context has
     * more priority than a keybinding with no context.
     *
     * @param keybindings Array of keybindings to be sorted in-place.
     */
    private sortKeybindingsByPriority;
    protected isActive(binding: Keybinding): boolean;
    /**
     * Tries to execute a keybinding.
     *
     * @param binding to execute
     * @param event keyboard event.
     */
    protected executeKeyBinding(binding: Keybinding, event: KeyboardEvent): void;
    /**
     * Only execute if it has no context (global context) or if we're in that context.
     */
    protected isEnabled(binding: Keybinding, event: KeyboardEvent): boolean;
    /**
     * Run the command matching to the given keyboard event.
     */
    run(event: KeyboardEvent): void;
    /**
     * Return true of string a pseudo-command id, in other words a command id
     * that has a special meaning and that we won't find in the command
     * registry.
     *
     * @param commandId commandId to test
     */
    isPseudoCommand(commandId: string): boolean;
    setKeymap(scope: KeybindingScope, bindings: Keybinding[]): void;
    protected readonly toResetKeymap: Map<KeybindingScope, Disposable>;
    /**
     * Reset keybindings for a specific scope
     * @param scope scope to reset the keybindings for
     */
    resetKeybindingsForScope(scope: KeybindingScope): void;
    /**
     * Reset keybindings for all scopes(only leaves the default keybindings mapped)
     */
    resetKeybindings(): void;
}
export declare namespace KeybindingRegistry {
    class KeybindingsResult {
        full: ScopedKeybinding[];
        partial: ScopedKeybinding[];
        shadow: ScopedKeybinding[];
        /**
         * Merge two results together inside `this`
         *
         * @param other the other KeybindingsResult to merge with
         * @return this
         */
        merge(other: KeybindingsResult): KeybindingsResult;
        /**
         * Returns a new filtered KeybindingsResult
         *
         * @param fn callback filter on the results
         * @return filtered new result
         */
        filter(fn: (binding: Keybinding) => boolean): KeybindingsResult;
    }
}
//# sourceMappingURL=keybinding.d.ts.map