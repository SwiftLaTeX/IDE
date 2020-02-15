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
import { Event, Emitter } from '@theia/core';
import { WidgetFactory } from '@theia/core/lib/browser';
import { OutlineViewWidget, OutlineViewWidgetFactory, OutlineSymbolInformationNode } from './outline-view-widget';
import { Widget } from '@phosphor/widgets';
export declare class OutlineViewService implements WidgetFactory {
    protected factory: OutlineViewWidgetFactory;
    id: string;
    protected widget?: OutlineViewWidget;
    protected readonly onDidChangeOutlineEmitter: Emitter<OutlineSymbolInformationNode[]>;
    protected readonly onDidChangeOpenStateEmitter: Emitter<boolean>;
    protected readonly onDidSelectEmitter: Emitter<OutlineSymbolInformationNode>;
    protected readonly onDidOpenEmitter: Emitter<OutlineSymbolInformationNode>;
    constructor(factory: OutlineViewWidgetFactory);
    get onDidSelect(): Event<OutlineSymbolInformationNode>;
    get onDidOpen(): Event<OutlineSymbolInformationNode>;
    get onDidChangeOutline(): Event<OutlineSymbolInformationNode[]>;
    get onDidChangeOpenState(): Event<boolean>;
    get open(): boolean;
    /**
     * Publish the collection of outline view symbols.
     * - Publishing includes setting the `OutlineViewWidget` tree with symbol information.
     * @param roots the list of outline symbol information nodes.
     */
    publish(roots: OutlineSymbolInformationNode[]): void;
    createWidget(): Promise<Widget>;
}
//# sourceMappingURL=outline-view-service.d.ts.map