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
import { AbstractLineMatcher } from './task-abstract-line-matcher';
import { ProblemMatcher, ProblemMatch } from '../common/problem-matcher-protocol';
export declare class StartStopLineMatcher extends AbstractLineMatcher {
    protected matcher: ProblemMatcher;
    constructor(matcher: ProblemMatcher);
    /**
     * Finds the problem identified by this line matcher.
     *
     * @param line the line of text to find the problem from
     * @return the identified problem. If the problem is not found, `undefined` is returned.
     */
    match(line: string): ProblemMatch | undefined;
}
export declare class WatchModeLineMatcher extends StartStopLineMatcher {
    protected matcher: ProblemMatcher;
    private beginsPattern;
    private endsPattern;
    activeOnStart: boolean;
    constructor(matcher: ProblemMatcher);
    /**
     * Finds the problem identified by this line matcher.
     *
     * @param line the line of text to find the problem from
     * @return the identified problem. If the problem is not found, `undefined` is returned.
     */
    match(line: string): ProblemMatch | undefined;
    matchBegin(line: string): boolean;
    matchEnd(line: string): boolean;
}
//# sourceMappingURL=task-line-matchers.d.ts.map