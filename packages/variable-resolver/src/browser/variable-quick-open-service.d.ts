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
import { MessageService } from '@theia/core/lib/common/message-service';
import { QuickOpenModel, QuickOpenItem } from '@theia/core/lib/common/quick-open-model';
import { QuickOpenService } from '@theia/core/lib/browser/quick-open/quick-open-service';
import { QuickInputService } from '@theia/core/lib/browser/quick-open/quick-input-service';
import { VariableRegistry, Variable } from './variable';
import { VariableResolverService } from './variable-resolver-service';
export declare class VariableQuickOpenService implements QuickOpenModel {
    protected readonly variableRegistry: VariableRegistry;
    protected readonly quickOpenService: QuickOpenService;
    protected items: QuickOpenItem[];
    protected readonly messages: MessageService;
    protected readonly quickInputService: QuickInputService;
    protected readonly variableResolver: VariableResolverService;
    constructor(variableRegistry: VariableRegistry, quickOpenService: QuickOpenService);
    open(): void;
    onType(lookFor: string, acceptor: (items: QuickOpenItem[]) => void): void;
    protected showValue(variable: Variable): Promise<void>;
}
//# sourceMappingURL=variable-quick-open-service.d.ts.map