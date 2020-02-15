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
import { Diagnostic } from 'vscode-languageserver-types';
import { Event, Emitter } from '@theia/core/lib/common/event';
import { Tree } from '@theia/core/lib/browser/tree/tree';
import { TreeDecorator, TreeDecoration } from '@theia/core/lib/browser/tree/tree-decorator';
import { Marker } from '../../common/marker';
import { ProblemManager } from './problem-manager';
import { ProblemPreferences } from './problem-preferences';
export declare class ProblemDecorator implements TreeDecorator {
    protected readonly problemManager: ProblemManager;
    protected problemPreferences: ProblemPreferences;
    readonly id = "theia-problem-decorator";
    protected readonly emitter: Emitter<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    constructor(problemManager: ProblemManager);
    protected init(): void;
    decorations(tree: Tree): Promise<Map<string, TreeDecoration.Data>>;
    get onDidChangeDecorations(): Event<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    protected fireDidChangeDecorations(event: (tree: Tree) => Map<string, TreeDecoration.Data>): void;
    protected collectDecorators(tree: Tree): Map<string, TreeDecoration.Data>;
    protected appendContainerMarkers(tree: Tree, markers: Marker<Diagnostic>[]): Map<string, Marker<Diagnostic>>;
    protected collectMarkers(tree: Tree): Marker<Diagnostic>[];
    protected toDecorator(marker: Marker<Diagnostic>): TreeDecoration.Data;
    protected getOverlayIcon(marker: Marker<Diagnostic>): string;
    protected getOverlayIconColor(marker: Marker<Diagnostic>): TreeDecoration.Color;
    /**
     * Returns `true` if the diagnostic (`data`) of the marker argument has `Error`, `Warning`, or `Information` severity.
     * Otherwise, returns `false`.
     */
    protected filterMarker(marker: Marker<Diagnostic>): boolean;
    protected compare(left: Marker<Diagnostic>, right: Marker<Diagnostic>): number;
}
export declare namespace ProblemDecorator {
    const severityCompare: (left: Marker<Diagnostic>, right: Marker<Diagnostic>) => number;
}
//# sourceMappingURL=problem-decorator.d.ts.map