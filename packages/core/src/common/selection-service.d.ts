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
import { Emitter, Event } from '../common/event';
export interface SelectionProvider<T> {
    onSelectionChanged: Event<T | undefined>;
}
export declare class SelectionService implements SelectionProvider<Object | undefined> {
    private currentSelection;
    protected readonly onSelectionChangedEmitter: Emitter<any>;
    readonly onSelectionChanged: Event<any>;
    get selection(): Object | undefined;
    set selection(selection: Object | undefined);
}
//# sourceMappingURL=selection-service.d.ts.map