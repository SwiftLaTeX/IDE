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
import { SplitPanel, Widget } from '@phosphor/widgets';
export interface SplitPositionOptions {
    /** The side of the side panel that shall be resized. */
    side?: 'left' | 'right' | 'top' | 'bottom';
    /** The duration in milliseconds, or 0 for no animation. */
    duration: number;
    /** When this widget is hidden, the animation is canceled. */
    referenceWidget?: Widget;
}
export interface MoveEntry extends SplitPositionOptions {
    parent: SplitPanel;
    index: number;
    started: boolean;
    ended: boolean;
    targetSize?: number;
    targetPosition?: number;
    startPosition?: number;
    startTime?: number;
    resolve?: (position: number) => void;
    reject?: (reason: string) => void;
}
export declare class SplitPositionHandler {
    private readonly splitMoves;
    private currentMoveIndex;
    /**
     * Set the position of a split handle asynchronously. This function makes sure that such movements
     * are performed one after another in order to prevent the movements from overriding each other.
     * When resolved, the returned promise yields the final position of the split handle.
     */
    setSplitHandlePosition(parent: SplitPanel, index: number, targetPosition: number, options: SplitPositionOptions): Promise<number>;
    /**
     * Resize a side panel asynchronously. This function makes sure that such movements are performed
     * one after another in order to prevent the movements from overriding each other.
     * When resolved, the returned promise yields the final position of the split handle.
     */
    setSidePanelSize(sidePanel: Widget, targetSize: number, options: SplitPositionOptions): Promise<number>;
    protected moveSplitPos(move: MoveEntry): Promise<number>;
    protected animationFrame(time: number): void;
    protected startMove(move: MoveEntry, time: number): void;
    protected endMove(move: MoveEntry): void;
    protected getCurrentPosition(move: MoveEntry): number | undefined;
}
//# sourceMappingURL=split-panels.d.ts.map