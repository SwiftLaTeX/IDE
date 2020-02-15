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
import { ILogger } from '@theia/core/lib/common/logger';
import { Event, Emitter } from '@theia/core/lib/common/event';
import { Tree } from '@theia/core/lib/browser/tree/tree';
import { TreeDecorator, TreeDecoration } from '@theia/core/lib/browser/tree/tree-decorator';
import { DecorationData, ScmDecorationsService } from './scm-decorations-service';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
export declare class ScmNavigatorDecorator implements TreeDecorator {
    protected readonly decorationsService: ScmDecorationsService;
    readonly id = "theia-scm-decorator";
    private decorationsMap;
    protected readonly logger: ILogger;
    protected readonly colors: ColorRegistry;
    constructor(decorationsService: ScmDecorationsService);
    protected collectDecorators(tree: Tree): Map<string, TreeDecoration.Data>;
    protected toDecorator(change: DecorationData): TreeDecoration.Data;
    protected readonly emitter: Emitter<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    decorations(tree: Tree): Promise<Map<string, TreeDecoration.Data>>;
    protected appendContainerChanges(decorationsMap: Map<string, DecorationData>): Map<string, DecorationData>;
    get onDidChangeDecorations(): Event<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    fireDidChangeDecorations(event: (tree: Tree) => Map<string, TreeDecoration.Data>): void;
}
//# sourceMappingURL=scm-navigator-decorator.d.ts.map