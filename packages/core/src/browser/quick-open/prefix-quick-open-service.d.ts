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
import { QuickOpenModel, QuickOpenItem } from './quick-open-model';
import { QuickOpenService, QuickOpenOptions } from './quick-open-service';
import { Disposable, DisposableCollection } from '../../common/disposable';
import { ILogger } from '../../common/logger';
import { MaybePromise } from '../../common/types';
import { QuickOpenActionProvider } from './quick-open-action-provider';
import { QuickTitleBar } from './quick-title-bar';
export declare const QuickOpenContribution: unique symbol;
/**
 * The quick open contribution should be implemented to register custom quick open handler.
 */
export interface QuickOpenContribution {
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
}
/**
 * A handler allows to call it's quick open model when
 * the handler's prefix is typed in the quick open widget.
 */
export interface QuickOpenHandler {
    /**
     * Prefix to trigger this handler's model.
     */
    readonly prefix: string;
    /**
     * A human-readable description of this handler.
     */
    readonly description: string;
    /**
     * Called immediately when the user's input in
     * the quick open widget matches this handler's prefix.
     * Allows to initialize the model with some initial data.
     */
    init?(): MaybePromise<void>;
    /**
     * A model that should be used by the quick open widget when this handler's prefix is used.
     */
    getModel(): QuickOpenModel;
    /**
     * Returns the options which should be used for the quick open widget.
     * Note, that the `prefix` and `skipPrefix` options are ignored and will be overridden.
     * The `placeholder` option makes sense for a default handler only since it's used without a prefix in quick open widget.
     */
    getOptions(): QuickOpenOptions;
}
export declare class QuickOpenHandlerRegistry implements Disposable {
    protected readonly handlers: Map<string, QuickOpenHandler>;
    protected readonly toDispose: DisposableCollection;
    protected defaultHandler: QuickOpenHandler | undefined;
    protected readonly logger: ILogger;
    /**
     * Register the given handler.
     * Do nothing if a handler is already registered.
     * @param handler the handler to register
     * @param defaultHandler default means that a handler is used when the user's
     * input in the quick open widget doesn't match any of known prefixes
     */
    registerHandler(handler: QuickOpenHandler, defaultHandler?: boolean): Disposable;
    getDefaultHandler(): QuickOpenHandler | undefined;
    isDefaultHandler(handler: QuickOpenHandler): boolean;
    /**
     * Return all registered handlers.
     */
    getHandlers(): QuickOpenHandler[];
    /**
     * Return a handler that matches the given text or the default handler if none.
     */
    getHandlerOrDefault(text: string): QuickOpenHandler | undefined;
    dispose(): void;
}
/** Prefix-based quick open service. */
export declare class PrefixQuickOpenService {
    protected readonly handlers: QuickOpenHandlerRegistry;
    protected readonly quickOpenService: QuickOpenService;
    protected readonly quickTitleBar: QuickTitleBar;
    /**
     * Opens a quick open widget with the model that handles the known prefixes.
     * @param prefix string that may contain a prefix of some of the known quick open handlers.
     * A default quick open handler will be called if the provided string doesn't match any.
     * An empty quick open will be opened if there's no default handler registered.
     */
    open(prefix: string): void;
    protected toDisposeCurrent: DisposableCollection;
    protected currentHandler: QuickOpenHandler | undefined;
    protected setCurrentHandler(prefix: string, handler: QuickOpenHandler | undefined): Promise<void>;
    protected doOpen(options?: QuickOpenOptions): void;
    protected onType(lookFor: string, acceptor: (items: QuickOpenItem[], actionProvider?: QuickOpenActionProvider | undefined) => void): void;
}
export declare class HelpQuickOpenHandler implements QuickOpenHandler, QuickOpenContribution {
    readonly prefix: string;
    readonly description: string;
    protected items: QuickOpenItem[];
    protected readonly handlers: QuickOpenHandlerRegistry;
    protected readonly quickOpenService: PrefixQuickOpenService;
    init(): void;
    getModel(): QuickOpenModel;
    getOptions(): QuickOpenOptions;
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
    /**
     * Compare two prefixes.
     *
     * @param a {string} first prefix.
     * @param b {string} second prefix.
     */
    protected comparePrefix(a: string, b: string): number;
}
//# sourceMappingURL=prefix-quick-open-service.d.ts.map