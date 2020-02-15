/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import { Event } from '../../common/event';
import { QuickTitleButton } from '../../common/quick-open-model';
export declare class QuickTitleBar {
    private readonly onDidTriggerButtonEmitter;
    private _isAttached;
    private titleElement;
    private titleBarContainer;
    private attachedNode;
    private _title;
    private _step;
    private _totalSteps;
    private _buttons;
    private tabIndex;
    constructor();
    get onDidTriggerButton(): Event<QuickTitleButton>;
    get isAttached(): boolean;
    set isAttached(isAttached: boolean);
    set title(title: string | undefined);
    get title(): string | undefined;
    set step(step: number | undefined);
    get step(): number | undefined;
    set totalSteps(totalSteps: number | undefined);
    get totalSteps(): number | undefined;
    set buttons(buttons: ReadonlyArray<QuickTitleButton> | undefined);
    get buttons(): ReadonlyArray<QuickTitleButton> | undefined;
    private updateInnerTitleText;
    private getLeftButtons;
    private getRightButtons;
    private createButtonElements;
    private createTitleBarDiv;
    private createLeftButtonDiv;
    private createRightButtonDiv;
    attachTitleBar(widgetNode: HTMLElement, title: string | undefined, step: number | undefined, totalSteps: number | undefined, buttons: ReadonlyArray<QuickTitleButton> | undefined): void;
    hide(): void;
    shouldShowTitleBar(title: string | undefined, step: number | undefined): boolean;
}
export declare namespace QuickTitleBar {
    namespace Styles {
        const QUICK_TITLE_CONTAINER = "theia-quick-title-container";
        const QUICK_TITLE_LEFT_BAR = "theia-quick-title-left-bar";
        const QUICK_TITLE_RIGHT_BAR = "theia-quick-title-right-bar";
        const QUICK_TITLE_HEADER = "theia-quick-title-header";
        const QUICK_TITLE_BUTTON = "theia-quick-title-button";
    }
}
//# sourceMappingURL=quick-title-bar.d.ts.map