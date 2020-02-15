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
import { ILogger } from '@theia/core/lib/common/logger';
import { StorageService } from '@theia/core/lib/browser/storage-service';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { FrontendApplicationContribution } from '@theia/core/lib/browser/frontend-application';
import { CommandRegistry } from '@theia/core/lib/common/command';
import { EditorWidget } from './editor-widget';
import { EditorManager } from './editor-manager';
import { TextEditor, Position, Range, TextDocumentChangeEvent } from './editor';
import { NavigationLocationService } from './navigation/navigation-location-service';
import { PreferenceService } from '@theia/core/lib/browser';
export declare class EditorNavigationContribution implements Disposable, FrontendApplicationContribution {
    private static ID;
    protected readonly toDispose: DisposableCollection;
    protected readonly toDisposePerCurrentEditor: DisposableCollection;
    protected readonly logger: ILogger;
    protected readonly editorManager: EditorManager;
    protected readonly locationStack: NavigationLocationService;
    protected readonly storageService: StorageService;
    protected readonly preferenceService: PreferenceService;
    protected readonly commandRegistry: CommandRegistry;
    protected init(): void;
    onStart(): Promise<void>;
    onStop(): void;
    dispose(): void;
    /**
     * Toggle the editor word wrap behavior.
     */
    protected toggleWordWrap(): Promise<void>;
    /**
     * Toggle the display of minimap in the editor.
     */
    protected toggleMinimap(): Promise<void>;
    /**
     * Toggle the rendering of whitespace in the editor.
     */
    protected toggleRenderWhitespace(): Promise<void>;
    protected onCurrentEditorChanged(editorWidget: EditorWidget | undefined): void;
    protected onCursorPositionChanged(editor: TextEditor, position: Position): void;
    protected onSelectionChanged(editor: TextEditor, selection: Range): void;
    protected onDocumentContentChanged(editor: TextEditor, event: TextDocumentChangeEvent): void;
    /**
     * `true` if the `range` argument has zero length. In other words, the `start` and the `end` positions are the same. Otherwise, `false`.
     */
    protected isZeroLengthRange(range: Range): boolean;
    protected storeState(): Promise<void>;
    protected restoreState(): Promise<void>;
    private isMinimapEnabled;
    private isRenderWhitespaceEnabled;
}
//# sourceMappingURL=editor-navigation-contribution.d.ts.map