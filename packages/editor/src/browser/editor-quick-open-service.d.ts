/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { QuickOpenModel, QuickOpenItem, QuickOpenMode, PrefixQuickOpenService, OpenerService, QuickOpenItemOptions, QuickOpenHandler, QuickOpenOptions } from '@theia/core/lib/browser';
import URI from '@theia/core/lib/common/uri';
import { LabelProvider } from '@theia/core/lib/browser/label-provider';
import { EditorManager } from './editor-manager';
export declare class EditorQuickOpenService implements QuickOpenModel, QuickOpenHandler {
    protected readonly openerService: OpenerService;
    protected readonly prefixQuickOpenService: PrefixQuickOpenService;
    protected readonly labelProvider: LabelProvider;
    protected readonly editorManager: EditorManager;
    readonly prefix: string;
    get description(): string;
    getModel(): QuickOpenModel;
    getOptions(): QuickOpenOptions;
    open(): void;
    onType(lookFor: string, acceptor: (items: QuickOpenItem[]) => void): void;
    protected toItem(uri: URI): QuickOpenItem<QuickOpenItemOptions>;
    /**
     * Gets the function that can open the editor file
     * @param uri the file uri
     * @returns the function that opens the file if mode === QuickOpenMode.OPEN
     */
    protected getRunFunction(uri: URI): (mode: QuickOpenMode) => boolean;
    protected openFile(uri: URI): void;
}
//# sourceMappingURL=editor-quick-open-service.d.ts.map