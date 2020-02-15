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
import { Message } from '@phosphor/messaging';
import { interfaces, Container } from 'inversify';
import { MenuPath } from '@theia/core';
import { TreeProps } from '@theia/core/lib/browser/tree';
import { SourceTreeWidget, TreeElementNode } from '@theia/core/lib/browser/source-tree';
import { ConsoleItem } from './console-session';
export declare class ConsoleContentWidget extends SourceTreeWidget {
    static CONTEXT_MENU: MenuPath;
    protected _shouldScrollToEnd: boolean;
    protected set shouldScrollToEnd(shouldScrollToEnd: boolean);
    protected get shouldScrollToEnd(): boolean;
    static createContainer(parent: interfaces.Container, props?: Partial<TreeProps>): Container;
    protected onAfterAttach(msg: Message): void;
    protected revealLastOutputIfNeeded(): void;
    protected createTreeElementNodeClassNames(node: TreeElementNode): string[];
    protected toClassName(item: ConsoleItem): string | undefined;
}
//# sourceMappingURL=console-content-widget.d.ts.map