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
import * as React from 'react';
import { TreeSource, TreeElement } from '@theia/core/lib/browser/source-tree';
import { ExpressionContainer, ExpressionItem, DebugVariable } from '../console/debug-console-items';
import { DebugSessionManager } from '../debug-session-manager';
export declare class DebugHoverSource extends TreeSource {
    protected readonly sessions: DebugSessionManager;
    protected _expression: ExpressionItem | DebugVariable | undefined;
    get expression(): ExpressionItem | DebugVariable | undefined;
    protected elements: TreeElement[];
    getElements(): IterableIterator<TreeElement>;
    protected renderTitle(element: ExpressionItem | DebugVariable): React.ReactNode;
    reset(): void;
    evaluate(expression: string): Promise<boolean>;
    protected doEvaluate(expression: string): Promise<ExpressionItem | DebugVariable | undefined>;
    protected findVariable(namesToFind: string[]): Promise<DebugVariable | undefined>;
    protected doFindVariable(owner: ExpressionContainer, namesToFind: string[]): Promise<DebugVariable | undefined>;
}
//# sourceMappingURL=debug-hover-source.d.ts.map