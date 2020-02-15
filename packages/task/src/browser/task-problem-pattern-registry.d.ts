/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { NamedProblemPattern, ProblemPatternContribution } from '../common';
import { Disposable } from '@theia/core/lib/common/disposable';
export declare class ProblemPatternRegistry {
    private readonly patterns;
    private readyPromise;
    protected init(): void;
    onReady(): Promise<void>;
    /**
     * Add a problem pattern to the registry.
     *
     * @param definition the problem pattern to be added.
     */
    register(value: ProblemPatternContribution | ProblemPatternContribution[]): Disposable;
    /**
     * Finds the problem pattern(s) from the registry with the given name.
     *
     * @param key the name of the problem patterns
     * @return a problem pattern or an array of the problem patterns associated with the name. If no problem patterns are found, `undefined` is returned.
     */
    get(key: string): undefined | NamedProblemPattern | NamedProblemPattern[];
    private add;
    private fillDefaults;
}
//# sourceMappingURL=task-problem-pattern-registry.d.ts.map