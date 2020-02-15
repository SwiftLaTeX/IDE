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
import { ContributionProvider } from '@theia/core/lib/common';
import { Disposable } from '@theia/core/lib/common/disposable';
import { FrontendApplication } from '@theia/core/lib/browser';
import { LanguageClientContributionProvider } from './language-client-contribution-provider';
import { ILogger } from '@theia/core/lib/common/logger';
import { LanguageClientContribution } from '@theia/languages/lib/browser';
export declare class LanguageClientContributionProviderImpl implements LanguageClientContributionProvider {
    protected readonly app: FrontendApplication;
    protected readonly logger: ILogger;
    protected readonly contributions: ContributionProvider<LanguageClientContribution>;
    protected readonly languageClientContributors: Map<string, LanguageClientContribution>;
    collectContributions(): void;
    getLanguageClientContributions(): IterableIterator<LanguageClientContribution>;
    registerLanguageClientContribution(clientContribution: LanguageClientContribution): Disposable;
    unregisterLanguageClientContribution(id: string): void;
}
//# sourceMappingURL=language-client-contribution-provider-impl.d.ts.map