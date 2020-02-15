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
import { Disposable, DisposableCollection, Emitter } from '@theia/core/lib/common';
import { ScmInput, ScmInputOptions } from './scm-input';
import { ScmProvider, ScmResource } from './scm-provider';
export interface ScmProviderOptions {
    input?: ScmInputOptions;
}
export declare class ScmRepository implements Disposable {
    readonly provider: ScmProvider;
    protected readonly options: ScmProviderOptions;
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: import("@theia/core/src/common").Event<void>;
    protected fireDidChange(): void;
    protected readonly toDispose: DisposableCollection;
    readonly input: ScmInput;
    constructor(provider: ScmProvider, options?: ScmProviderOptions);
    dispose(): void;
    protected readonly _resources: ScmResource[];
    get resources(): ScmResource[];
    protected updateResources(): void;
    protected selectedIndex: number;
    get selectedResource(): ScmResource | undefined;
    set selectedResource(selectedResource: ScmResource | undefined);
    protected updateSelection(): void;
    selectNextResource(): ScmResource | undefined;
    selectPreviousResource(): ScmResource | undefined;
}
//# sourceMappingURL=scm-repository.d.ts.map