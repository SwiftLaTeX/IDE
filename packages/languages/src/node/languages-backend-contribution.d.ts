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
import { ContributionProvider, ILogger } from '@theia/core/lib/common';
import { IConnection } from 'vscode-ws-jsonrpc/lib/server';
import { MessagingService } from '@theia/core/lib/node/messaging/messaging-service';
import { LanguageContribution } from '../common';
import { LanguageServerContribution } from './language-server-contribution';
export declare class LanguagesBackendContribution implements MessagingService.Contribution, LanguageContribution.Service {
    protected readonly logger: ILogger;
    protected readonly contributors: ContributionProvider<LanguageServerContribution>;
    protected nextId: number;
    protected readonly sessions: Map<string, any>;
    create(contributionId: string, startParameters: any): Promise<string>;
    destroy(sessionId: string): Promise<void>;
    configure(service: MessagingService): void;
    protected handleStartError(cause: any, connection: IConnection): void;
}
//# sourceMappingURL=languages-backend-contribution.d.ts.map