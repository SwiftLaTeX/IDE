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
import { WidgetOpenHandler, WidgetOpenerOptions } from '@theia/core/lib/browser';
import URI from '@theia/core/lib/common/uri';
import { GitCommitDetailWidgetOptions, GitCommitDetailWidget, GitCommitDetails } from './git-commit-detail-widget';
export declare namespace GitCommitDetailUri {
    const scheme = "git-commit-detail-widget";
    function toUri(commitSha: string): URI;
    function toCommitSha(uri: URI): string;
}
export declare type GitCommitDetailOpenerOptions = WidgetOpenerOptions & GitCommitDetailWidgetOptions;
export declare class GitCommitDetailOpenHandler extends WidgetOpenHandler<GitCommitDetailWidget> {
    readonly id = "git-commit-detail-widget";
    canHandle(uri: URI): number;
    protected doOpen(widget: GitCommitDetailWidget, options: GitCommitDetailOpenerOptions): Promise<void>;
    protected createWidgetOptions(uri: URI, commit: GitCommitDetailOpenerOptions): GitCommitDetailWidgetOptions;
    getCommitDetailWidgetOptions(commit: GitCommitDetails): GitCommitDetailWidgetOptions;
}
//# sourceMappingURL=git-commit-detail-open-handler.d.ts.map