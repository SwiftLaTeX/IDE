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
import { LabelProvider } from '@theia/core/lib/browser';
import { EditorManager, EditorOpenerOptions, EditorWidget } from '@theia/editor/lib/browser';
import URI from '@theia/core/lib/common/uri';
import { DebugProtocol } from 'vscode-debugprotocol/lib/debugProtocol';
import { DebugSession } from '../debug-session';
export declare class DebugSourceData {
    readonly raw: DebugProtocol.Source;
}
export declare class DebugSource extends DebugSourceData {
    protected readonly session: DebugSession;
    protected readonly editorManager: EditorManager;
    protected readonly labelProvider: LabelProvider;
    constructor(session: DebugSession, editorManager: EditorManager, labelProvider: LabelProvider);
    get uri(): URI;
    update(data: Partial<DebugSourceData>): void;
    open(options?: EditorOpenerOptions): Promise<EditorWidget>;
    load(): Promise<string>;
    get inMemory(): boolean;
    get name(): string;
    get longName(): string;
    static SCHEME: string;
    static SCHEME_PATTERN: RegExp;
    static toUri(raw: DebugProtocol.Source): URI;
}
//# sourceMappingURL=debug-source.d.ts.map