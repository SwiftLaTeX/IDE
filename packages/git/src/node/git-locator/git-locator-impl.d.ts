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
import { GitLocator, GitLocateOptions } from './git-locator-protocol';
export declare type FindGitRepositories = (path: string, progressCb: (repos: string[]) => void) => Promise<string[]>;
export interface GitLocateContext {
    maxCount: number;
    readonly visited: Map<string, boolean>;
}
export declare class GitLocatorImpl implements GitLocator {
    protected readonly options: {
        info: (message: string, ...args: any[]) => void;
        error: (message: string, ...args: any[]) => void;
    };
    constructor(options?: {
        info?: (message: string, ...args: any[]) => void;
        error?: (message: string, ...args: any[]) => void;
    });
    dispose(): void;
    locate(basePath: string, options: GitLocateOptions): Promise<string[]>;
    protected doLocate(basePath: string, context: GitLocateContext): Promise<string[]>;
    protected generateNested(repositoryPaths: string[], context: GitLocateContext): IterableIterator<Promise<string[]>>;
    protected locateNested(repositoryPath: string, context: GitLocateContext): Promise<string[]>;
    protected generateRepositories(repositoryPath: string, files: string[], context: GitLocateContext): IterableIterator<Promise<string[]>>;
    protected locateFrom(generator: (context: GitLocateContext) => IterableIterator<Promise<string[]>>, parentContext: GitLocateContext, initial?: string[]): Promise<string[]>;
    static map(repository: string): string;
}
//# sourceMappingURL=git-locator-impl.d.ts.map