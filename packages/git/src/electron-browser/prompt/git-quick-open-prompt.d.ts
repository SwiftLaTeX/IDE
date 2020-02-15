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
import * as PQueue from 'p-queue';
import { QuickOpenService } from '@theia/core/lib/browser/quick-open/quick-open-service';
import { GitPrompt } from '../../common/git-prompt';
export declare class GitQuickOpenPrompt extends GitPrompt {
    protected readonly quickOpenService: QuickOpenService;
    protected readonly queue: PQueue<PQueue.DefaultAddOptions>;
    ask(question: GitPrompt.Question): Promise<GitPrompt.Answer>;
    dispose(): void;
}
//# sourceMappingURL=git-quick-open-prompt.d.ts.map