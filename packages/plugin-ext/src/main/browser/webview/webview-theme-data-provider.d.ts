/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { Emitter } from '@theia/core/lib/common/event';
import { EditorPreferences } from '@theia/editor/lib/browser/editor-preferences';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
import { ColorApplicationContribution } from '@theia/core/lib/browser/color-application-contribution';
export declare type WebviewThemeType = 'vscode-light' | 'vscode-dark' | 'vscode-high-contrast';
export interface WebviewThemeData {
    readonly activeTheme: WebviewThemeType;
    readonly styles: {
        readonly [key: string]: string | number;
    };
}
export declare class WebviewThemeDataProvider {
    protected readonly onDidChangeThemeDataEmitter: Emitter<void>;
    readonly onDidChangeThemeData: import("@theia/core/src/common/event").Event<void>;
    protected readonly editorPreferences: EditorPreferences;
    protected readonly colors: ColorRegistry;
    protected readonly colorContribution: ColorApplicationContribution;
    protected themeData: WebviewThemeData | undefined;
    protected readonly editorStyles: Map<"editor.fontFamily" | "editor.fontWeight" | "editor.fontSize" | "editor.lineHeight" | "editor.letterSpacing" | "editor.lineNumbers" | "editor.cursorSurroundingLines" | "editor.renderFinalNewline" | "editor.rulers" | "editor.wordSeparators" | "editor.tabSize" | "editor.insertSpaces" | "editor.detectIndentation" | "editor.roundedSelection" | "editor.scrollBeyondLastLine" | "editor.scrollBeyondLastColumn" | "editor.smoothScrolling" | "editor.minimap.enabled" | "editor.minimap.side" | "editor.minimap.showSlider" | "editor.minimap.renderCharacters" | "editor.minimap.maxColumn" | "editor.hover.enabled" | "editor.hover.delay" | "editor.hover.sticky" | "editor.find.seedSearchStringFromSelection" | "editor.find.autoFindInSelection" | "editor.find.globalFindClipboard" | "editor.find.addExtraSpaceOnTop" | "editor.wordWrap" | "editor.wordWrapColumn" | "editor.wrappingIndent" | "editor.mouseWheelScrollSensitivity" | "editor.fastScrollSensitivity" | "editor.multiCursorModifier" | "editor.multiCursorMergeOverlapping" | "editor.quickSuggestions" | "editor.quickSuggestionsDelay" | "editor.parameterHints.enabled" | "editor.parameterHints.cycle" | "editor.autoClosingBrackets" | "editor.autoClosingQuotes" | "editor.autoSurround" | "editor.formatOnType" | "editor.formatOnPaste" | "editor.autoIndent" | "editor.suggestOnTriggerCharacters" | "editor.acceptSuggestionOnEnter" | "editor.acceptSuggestionOnCommitCharacter" | "editor.snippetSuggestions" | "editor.emptySelectionClipboard" | "editor.copyWithSyntaxHighlighting" | "editor.wordBasedSuggestions" | "editor.suggestSelection" | "editor.suggestFontSize" | "editor.suggestLineHeight" | "editor.tabCompletion" | "editor.suggest.filterGraceful" | "editor.suggest.localityBonus" | "editor.suggest.shareSuggestSelections" | "editor.suggest.snippetsPreventQuickSuggestions" | "editor.suggest.showIcons" | "editor.suggest.maxVisibleSuggestions" | "editor.suggest.filteredTypes" | "editor.gotoLocation.multiple" | "editor.selectionHighlight" | "editor.occurrencesHighlight" | "editor.overviewRulerLanes" | "editor.overviewRulerBorder" | "editor.cursorBlinking" | "editor.mouseWheelZoom" | "editor.cursorSmoothCaretAnimation" | "editor.cursorStyle" | "editor.cursorWidth" | "editor.fontLigatures" | "editor.hideCursorInOverviewRuler" | "editor.renderWhitespace" | "editor.renderControlCharacters" | "editor.renderIndentGuides" | "editor.highlightActiveIndentGuide" | "editor.renderLineHighlight" | "editor.codeLens" | "editor.folding" | "editor.foldingStrategy" | "editor.showFoldingControls" | "editor.matchBrackets" | "editor.glyphMargin" | "editor.useTabStops" | "editor.trimAutoWhitespace" | "editor.stablePeek" | "editor.dragAndDrop" | "editor.accessibilitySupport" | "editor.showUnused" | "editor.links" | "editor.colorDecorators" | "editor.lightbulb.enabled" | "editor.maxTokenizationLineLength" | "editor.codeActionsOnSave" | "editor.codeActionsOnSaveTimeout" | "editor.selectionClipboard" | "diffEditor.renderSideBySide" | "diffEditor.ignoreTrimWhitespace" | "editor.largeFileOptimizations" | "diffEditor.renderIndicators" | "editor.autoSave" | "editor.autoSaveDelay" | "editor.formatOnSave" | "editor.formatOnSaveTimeout" | "files.eol" | "files.encoding", string>;
    protected init(): void;
    protected reset(): void;
    getThemeData(): WebviewThemeData;
    protected computeThemeData(): WebviewThemeData;
    protected getActiveTheme(): WebviewThemeType;
}
//# sourceMappingURL=webview-theme-data-provider.d.ts.map