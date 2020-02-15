/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { FrontendApplicationContribution } from '../frontend-application';
import { ApplicationShell } from './application-shell';
import { DisposableCollection } from '../../common/disposable';
import { Emitter, Event } from '../../common/event';
import { SplitPanel } from '@phosphor/widgets';
import { Widget } from '../widgets';
/**
 * Contribution that tracks `mouseup` and `mousedown` events.
 *
 * This is required to be able to track the `TabBar`, `DockPanel`, and `SidePanel` resizing and drag and drop events correctly
 * all over the application. By default, when the mouse is over an `iframe` we lose the mouse tracking ability, so whenever
 * we click (`mousedown`), we overlay a transparent `div` over the `iframe` in the Mini Browser, then we set the `display` of
 * the transparent `div` to `none` on `mouseup` events.
 */
export declare class ApplicationShellMouseTracker implements FrontendApplicationContribution {
    protected readonly applicationShell: ApplicationShell;
    protected readonly toDispose: DisposableCollection;
    protected readonly toDisposeOnActiveChange: DisposableCollection;
    protected readonly mouseupEmitter: Emitter<MouseEvent>;
    protected readonly mousedownEmitter: Emitter<MouseEvent>;
    protected readonly mouseupListener: (e: MouseEvent) => void;
    protected readonly mousedownListener: (e: MouseEvent) => void;
    onStart(): void;
    onStop(): void;
    get onMouseup(): Event<MouseEvent>;
    get onMousedown(): Event<MouseEvent>;
}
export declare namespace ApplicationShellMouseTracker {
    function isSplitPanel(arg: Widget): arg is SplitPanel;
}
//# sourceMappingURL=application-shell-mouse-tracker.d.ts.map