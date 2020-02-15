/********************************************************************************
 * Copyright (C) 2018 RedHat and others.
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
import { Event, Emitter } from '@theia/core/lib/common/event';
import { Tree } from '@theia/core/lib/browser/tree/tree';
import { TreeDecorator, TreeDecoration } from '@theia/core/lib/browser/tree/tree-decorator';
import { MonacoOutlineSymbolInformationNode } from './monaco-outline-contribution';
export declare class MonacoOutlineDecorator implements TreeDecorator {
    readonly id = "theia-monaco-outline-decorator";
    protected readonly emitter: Emitter<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    decorations(tree: Tree): Promise<Map<string, TreeDecoration.Data>>;
    get onDidChangeDecorations(): Event<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    protected collectDecorations(tree: Tree): Map<string, TreeDecoration.Data>;
    protected toDecoration(node: MonacoOutlineSymbolInformationNode): TreeDecoration.Data;
}
//# sourceMappingURL=monaco-outline-decorator.d.ts.map