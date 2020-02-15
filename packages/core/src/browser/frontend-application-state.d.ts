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
import { Emitter, Event } from '../common/event';
import { Deferred } from '../common/promise-util';
import { ILogger } from '../common/logger';
export declare type FrontendApplicationState = 'init' | 'started_contributions' | 'attached_shell' | 'initialized_layout' | 'ready' | 'closing_window';
export declare class FrontendApplicationStateService {
    protected readonly logger: ILogger;
    private _state;
    protected deferred: {
        [state: string]: Deferred<void>;
    };
    protected readonly stateChanged: Emitter<FrontendApplicationState>;
    get state(): FrontendApplicationState;
    set state(state: FrontendApplicationState);
    get onStateChanged(): Event<FrontendApplicationState>;
    reachedState(state: FrontendApplicationState): Promise<void>;
    reachedAnyState(...states: FrontendApplicationState[]): Promise<void>;
}
//# sourceMappingURL=frontend-application-state.d.ts.map