/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import { QuickOpenItem } from '../../common/quick-open-model';
import * as common from '../../common/quick-open-model';
/**
 * @deprecated import from `@theia/core/lib/common/quick-open-model` instead
 */
export declare type QuickOpenActionProvider = common.QuickOpenActionProvider;
/**
 * @deprecated import from `@theia/core/lib/common/quick-open-model` instead
 */
export declare type QuickOpenActionOptions = common.QuickOpenActionOptions;
/**
 * @deprecated import from `@theia/core/lib/common/quick-open-model` instead
 */
export declare type QuickOpenAction = common.QuickOpenAction;
export declare abstract class QuickOpenBaseAction implements QuickOpenAction {
    protected options: QuickOpenActionOptions;
    constructor(options: QuickOpenActionOptions);
    get id(): string;
    get label(): string;
    set label(value: string);
    get tooltip(): string;
    set tooltip(value: string);
    get class(): string | undefined;
    set class(value: string | undefined);
    get enabled(): boolean;
    set enabled(value: boolean);
    get checked(): boolean;
    set checked(value: boolean);
    get radio(): boolean;
    set radio(value: boolean);
    abstract run(item?: QuickOpenItem): PromiseLike<void>;
    dispose(): void;
}
//# sourceMappingURL=quick-open-action-provider.d.ts.map