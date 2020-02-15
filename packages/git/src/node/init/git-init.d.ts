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
import { ILogger } from '@theia/core/lib/common/logger';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { MessageService } from '@theia/core';
/**
 * Initializer hook for Git.
 */
export declare const GitInit: unique symbol;
export interface GitInit extends Disposable {
    /**
     * Called before `Git` is ready to be used in Theia. Git operations cannot be executed before the returning promise is not resolved or rejected.
     */
    init(): Promise<void>;
}
/**
 * The default initializer. It is used in the browser.
 *
 * Configures the Git extension to use the Git executable from the `PATH`.
 */
export declare class DefaultGitInit implements GitInit {
    protected readonly toDispose: DisposableCollection;
    protected readonly logger: ILogger;
    protected readonly messages: MessageService;
    init(): Promise<void>;
    dispose(): void;
}
//# sourceMappingURL=git-init.d.ts.map