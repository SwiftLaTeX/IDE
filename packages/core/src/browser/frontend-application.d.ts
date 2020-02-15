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
import { ContributionProvider, CommandRegistry, MenuModelRegistry, ILogger } from '../common';
import { MaybePromise } from '../common/types';
import { KeybindingRegistry } from './keybinding';
import { ApplicationShell } from './shell/application-shell';
import { ShellLayoutRestorer } from './shell/shell-layout-restorer';
import { FrontendApplicationStateService } from './frontend-application-state';
import { CorePreferences } from './core-preferences';
/**
 * Clients can implement to get a callback for contributing widgets to a shell on start.
 */
export declare const FrontendApplicationContribution: unique symbol;
export interface FrontendApplicationContribution {
    /**
     * Called on application startup before configure is called.
     */
    initialize?(): void;
    /**
     * Called before commands, key bindings and menus are initialized.
     * Should return a promise if it runs asynchronously.
     */
    configure?(app: FrontendApplication): MaybePromise<void>;
    /**
     * Called when the application is started. The application shell is not attached yet when this method runs.
     * Should return a promise if it runs asynchronously.
     */
    onStart?(app: FrontendApplication): MaybePromise<void>;
    /**
     * Called on `beforeunload` event, right before the window closes.
     * Return `true` in order to prevent exit.
     * Note: No async code allowed, this function has to run on one tick.
     */
    onWillStop?(app: FrontendApplication): boolean | void;
    /**
     * Called when an application is stopped or unloaded.
     *
     * Note that this is implemented using `window.beforeunload` which doesn't allow any asynchronous code anymore.
     * I.e. this is the last tick.
     */
    onStop?(app: FrontendApplication): void;
    /**
     * Called after the application shell has been attached in case there is no previous workbench layout state.
     * Should return a promise if it runs asynchronously.
     */
    initializeLayout?(app: FrontendApplication): MaybePromise<void>;
    /**
     * An event is emitted when a layout is initialized, but before the shell is attached.
     */
    onDidInitializeLayout?(app: FrontendApplication): MaybePromise<void>;
}
/**
 * Default frontend contribution that can be extended by clients if they do not want to implement any of the
 * methods from the interface but still want to contribute to the frontend application.
 */
export declare abstract class DefaultFrontendApplicationContribution implements FrontendApplicationContribution {
    initialize(): void;
}
export declare class FrontendApplication {
    protected readonly commands: CommandRegistry;
    protected readonly menus: MenuModelRegistry;
    protected readonly keybindings: KeybindingRegistry;
    protected readonly logger: ILogger;
    protected readonly layoutRestorer: ShellLayoutRestorer;
    protected readonly contributions: ContributionProvider<FrontendApplicationContribution>;
    protected readonly _shell: ApplicationShell;
    protected readonly stateService: FrontendApplicationStateService;
    protected readonly corePreferences: CorePreferences;
    constructor(commands: CommandRegistry, menus: MenuModelRegistry, keybindings: KeybindingRegistry, logger: ILogger, layoutRestorer: ShellLayoutRestorer, contributions: ContributionProvider<FrontendApplicationContribution>, _shell: ApplicationShell, stateService: FrontendApplicationStateService);
    get shell(): ApplicationShell;
    /**
     * Start the frontend application.
     *
     * Start up consists of the following steps:
     * - start frontend contributions
     * - attach the application shell to the host element
     * - initialize the application shell layout
     * - reveal the application shell if it was hidden by a startup indicator
     */
    start(): Promise<void>;
    /**
     * Return a promise to the host element to which the application shell is attached.
     */
    protected getHost(): Promise<HTMLElement>;
    /**
     * Return an HTML element that indicates the startup phase, e.g. with an animation or a splash screen.
     */
    protected getStartupIndicator(host: HTMLElement): HTMLElement | undefined;
    protected inComposition: boolean;
    /**
     * Register composition related event listeners.
     */
    protected registerCompositionEventListeners(): void;
    /**
     * Register global event listeners.
     */
    protected registerEventListeners(): void;
    /**
     * Attach the application shell to the host element. If a startup indicator is present, the shell is
     * inserted before that indicator so it is not visible yet.
     */
    protected attachShell(host: HTMLElement): void;
    /**
     * If a startup indicator is present, it is first hidden with the `theia-hidden` CSS class and then
     * removed after a while. The delay until removal is taken from the CSS transition duration.
     */
    protected revealShell(host: HTMLElement): Promise<void>;
    /**
     * Initialize the shell layout either using the layout restorer service or, if no layout has
     * been stored, by creating the default layout.
     */
    protected initializeLayout(): Promise<void>;
    /**
     * Try to restore the shell layout from the storage service. Resolves to `true` if successful.
     */
    protected restoreLayout(): Promise<boolean>;
    /**
     * Let the frontend application contributions initialize the shell layout. Override this
     * method in order to create an application-specific custom layout.
     */
    protected createDefaultLayout(): Promise<void>;
    protected fireOnDidInitializeLayout(): Promise<void>;
    /**
     * Initialize and start the frontend application contributions.
     */
    protected startContributions(): Promise<void>;
    /**
     * Stop the frontend application contributions. This is called when the window is unloaded.
     */
    protected stopContributions(): void;
    protected measure<T>(name: string, fn: () => MaybePromise<T>): Promise<T>;
}
//# sourceMappingURL=frontend-application.d.ts.map