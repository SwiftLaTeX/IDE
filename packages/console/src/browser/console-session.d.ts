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
import { MaybePromise } from '@theia/core/lib/common/types';
import { TreeSource, TreeElement, CompositeTreeElement } from '@theia/core/lib/browser/source-tree';
import { Emitter } from '@theia/core/lib/common/event';
import { Severity } from '@theia/core/lib/common/severity';
export interface ConsoleItem extends TreeElement {
    readonly severity?: Severity;
}
export declare namespace ConsoleItem {
    const errorClassName = "theia-console-error";
    const warningClassName = "theia-console-warning";
    const infoClassName = "theia-console-info";
    const logClassName = "theia-console-log";
}
export interface CompositeConsoleItem extends ConsoleItem, CompositeTreeElement {
    getElements(): MaybePromise<IterableIterator<ConsoleItem>>;
}
export declare abstract class ConsoleSession extends TreeSource {
    protected selectedSeverity?: Severity;
    protected readonly selectionEmitter: Emitter<void>;
    readonly onSelectionChange: import("@theia/core/src/common/event").Event<void>;
    get severity(): Severity | undefined;
    set severity(severity: Severity | undefined);
    abstract getElements(): MaybePromise<IterableIterator<ConsoleItem>>;
    abstract execute(value: string): MaybePromise<void>;
    abstract clear(): MaybePromise<void>;
}
//# sourceMappingURL=console-session.d.ts.map