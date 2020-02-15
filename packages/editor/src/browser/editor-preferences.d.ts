/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { interfaces } from 'inversify';
import { PreferenceProxy, PreferenceService, PreferenceSchema, PreferenceChangeEvent } from '@theia/core/lib/browser/preferences';
export declare const EDITOR_FONT_DEFAULTS: {
    fontFamily: string;
    fontWeight: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
};
export declare const EDITOR_MODEL_DEFAULTS: {
    tabSize: number;
    indentSize: number;
    insertSpaces: boolean;
    detectIndentation: boolean;
    trimAutoWhitespace: boolean;
    largeFileOptimizations: boolean;
};
export declare const EDITOR_DEFAULTS: {
    inDiffEditor: boolean;
    wordSeparators: string;
    lineNumbersMinChars: number;
    lineDecorationsWidth: number;
    readOnly: boolean;
    mouseStyle: string;
    disableLayerHinting: boolean;
    automaticLayout: boolean;
    wordWrap: string;
    wordWrapColumn: number;
    wordWrapMinified: boolean;
    wrappingIndent: number;
    wordWrapBreakBeforeCharacters: string;
    wordWrapBreakAfterCharacters: string;
    wordWrapBreakObtrusiveCharacters: string;
    autoClosingBrackets: string;
    autoClosingQuotes: string;
    autoSurround: string;
    autoIndent: boolean;
    dragAndDrop: boolean;
    emptySelectionClipboard: boolean;
    copyWithSyntaxHighlighting: boolean;
    useTabStops: boolean;
    multiCursorModifier: string;
    multiCursorMergeOverlapping: boolean;
    accessibilitySupport: string;
    showUnused: boolean;
    viewInfo: {
        extraEditorClassName: string;
        disableMonospaceOptimizations: boolean;
        rulers: never[];
        ariaLabel: string;
        renderLineNumbers: number;
        renderCustomLineNumbers: null;
        cursorSurroundingLines: number;
        renderFinalNewline: boolean;
        selectOnLineNumbers: boolean;
        glyphMargin: boolean;
        revealHorizontalRightPadding: number;
        roundedSelection: boolean;
        overviewRulerLanes: number;
        overviewRulerBorder: boolean;
        cursorBlinking: number;
        mouseWheelZoom: boolean;
        cursorSmoothCaretAnimation: boolean;
        cursorStyle: number;
        cursorWidth: number;
        hideCursorInOverviewRuler: boolean;
        scrollBeyondLastLine: boolean;
        scrollBeyondLastColumn: number;
        smoothScrolling: boolean;
        stopRenderingLineAfter: number;
        renderWhitespace: string;
        renderControlCharacters: boolean;
        fontLigatures: boolean;
        renderIndentGuides: boolean;
        highlightActiveIndentGuide: boolean;
        renderLineHighlight: string;
        scrollbar: {
            vertical: number;
            horizontal: number;
            arrowSize: number;
            useShadows: boolean;
            verticalHasArrows: boolean;
            horizontalHasArrows: boolean;
            horizontalScrollbarSize: number;
            horizontalSliderSize: number;
            verticalScrollbarSize: number;
            verticalSliderSize: number;
            handleMouseWheel: boolean;
            mouseWheelScrollSensitivity: number;
            fastScrollSensitivity: number;
        };
        minimap: {
            enabled: boolean;
            side: string;
            showSlider: string;
            renderCharacters: boolean;
            maxColumn: number;
        };
        fixedOverflowWidgets: boolean;
    };
    contribInfo: {
        selectionClipboard: boolean;
        hover: {
            enabled: boolean;
            delay: number;
            sticky: boolean;
        };
        links: boolean;
        contextmenu: boolean;
        quickSuggestions: {
            other: boolean;
            comments: boolean;
            strings: boolean;
        };
        quickSuggestionsDelay: number;
        parameterHints: {
            enabled: boolean;
            cycle: boolean;
        };
        formatOnType: boolean;
        formatOnPaste: boolean;
        suggestOnTriggerCharacters: boolean;
        acceptSuggestionOnEnter: string;
        acceptSuggestionOnCommitCharacter: boolean;
        wordBasedSuggestions: boolean;
        suggestSelection: string;
        suggestFontSize: number;
        suggestLineHeight: number;
        tabCompletion: string;
        suggest: {
            filterGraceful: boolean;
            snippets: string;
            snippetsPreventQuickSuggestions: boolean;
            localityBonus: boolean;
            shareSuggestSelections: boolean;
            showIcons: boolean;
            maxVisibleSuggestions: number;
            filteredTypes: any;
        };
        gotoLocation: {
            multiple: string;
        };
        selectionHighlight: boolean;
        occurrencesHighlight: boolean;
        codeLens: boolean;
        folding: boolean;
        foldingStrategy: string;
        showFoldingControls: string;
        matchBrackets: boolean;
        find: {
            seedSearchStringFromSelection: boolean;
            autoFindInSelection: boolean;
            globalFindClipboard: boolean;
            addExtraSpaceOnTop: boolean;
        };
        colorDecorators: boolean;
        lightbulbEnabled: boolean;
        codeActionsOnSave: {};
        codeActionsOnSaveTimeout: number;
    };
};
declare const codeEditorPreferenceProperties: {
    'editor.fontFamily': {
        'type': string;
        'default': string;
        'description': string;
    };
    'editor.fontWeight': {
        'type': string;
        'enum': string[];
        'default': string;
        'description': string;
    };
    'editor.fontSize': {
        'type': string;
        'default': number;
        'description': string;
    };
    'editor.lineHeight': {
        'type': string;
        'default': number;
        'description': string;
    };
    'editor.letterSpacing': {
        'type': string;
        'default': number;
        'description': string;
    };
    'editor.lineNumbers': {
        'type': string;
        'enum': string[];
        'enumDescriptions': string[];
        'default': string;
        'description': string;
    };
    'editor.cursorSurroundingLines': {
        'type': string;
        'default': number;
        'description': string;
    };
    'editor.renderFinalNewline': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.rulers': {
        'type': string;
        'items': {
            'type': string;
        };
        'default': never[];
        'description': string;
    };
    'editor.wordSeparators': {
        'type': string;
        'default': string;
        'description': string;
    };
    'editor.tabSize': {
        'type': string;
        'default': number;
        'minimum': number;
        'markdownDescription': string;
    };
    'editor.insertSpaces': {
        'type': string;
        'default': boolean;
        'markdownDescription': string;
    };
    'editor.detectIndentation': {
        'type': string;
        'default': boolean;
        'markdownDescription': string;
    };
    'editor.roundedSelection': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.scrollBeyondLastLine': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.scrollBeyondLastColumn': {
        'type': string;
        'default': number;
        'description': string;
    };
    'editor.smoothScrolling': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.minimap.enabled': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.minimap.side': {
        'type': string;
        'enum': string[];
        'default': string;
        'description': string;
    };
    'editor.minimap.showSlider': {
        'type': string;
        'enum': string[];
        'default': string;
        'description': string;
    };
    'editor.minimap.renderCharacters': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.minimap.maxColumn': {
        'type': string;
        'default': number;
        'description': string;
    };
    'editor.hover.enabled': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.hover.delay': {
        'type': string;
        'default': number;
        'description': string;
    };
    'editor.hover.sticky': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.find.seedSearchStringFromSelection': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.find.autoFindInSelection': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.find.globalFindClipboard': {
        'type': string;
        'default': boolean;
        'description': string;
        'included': boolean;
    };
    'editor.find.addExtraSpaceOnTop': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.wordWrap': {
        'type': string;
        'enum': string[];
        'markdownEnumDescriptions': string[];
        'default': string;
        'description': string;
    };
    'editor.wordWrapColumn': {
        'type': string;
        'default': number;
        'minimum': number;
        'markdownDescription': string;
    };
    'editor.wrappingIndent': {
        'type': string;
        'enum': string[];
        enumDescriptions: string[];
        'default': string;
        'description': string;
    };
    'editor.mouseWheelScrollSensitivity': {
        'type': string;
        'default': number;
        'markdownDescription': string;
    };
    'editor.fastScrollSensitivity': {
        'type': string;
        'default': number;
        'markdownDescription': string;
    };
    'editor.multiCursorModifier': {
        'type': string;
        'enum': string[];
        'markdownEnumDescriptions': string[];
        'default': string;
        'markdownDescription': string;
    };
    'editor.multiCursorMergeOverlapping': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.quickSuggestions': {
        'anyOf': ({
            type: string;
            properties?: undefined;
        } | {
            type: string;
            properties: {
                strings: {
                    type: string;
                    default: boolean;
                    description: string;
                };
                comments: {
                    type: string;
                    default: boolean;
                    description: string;
                };
                other: {
                    type: string;
                    default: boolean;
                    description: string;
                };
            };
        })[];
        'default': {
            other: boolean;
            comments: boolean;
            strings: boolean;
        };
        'description': string;
    };
    'editor.quickSuggestionsDelay': {
        'type': string;
        'default': number;
        'minimum': number;
        'description': string;
    };
    'editor.parameterHints.enabled': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.parameterHints.cycle': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.autoClosingBrackets': {
        type: string;
        enum: string[];
        enumDescriptions: string[];
        'default': string;
        'description': string;
    };
    'editor.autoClosingQuotes': {
        type: string;
        enum: string[];
        enumDescriptions: string[];
        'default': string;
        'description': string;
    };
    'editor.autoSurround': {
        type: string;
        enum: string[];
        enumDescriptions: string[];
        'default': string;
        'description': string;
    };
    'editor.formatOnType': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.formatOnPaste': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.autoIndent': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.suggestOnTriggerCharacters': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.acceptSuggestionOnEnter': {
        'type': string;
        'enum': string[];
        'default': string;
        'markdownEnumDescriptions': string[];
        'markdownDescription': string;
    };
    'editor.acceptSuggestionOnCommitCharacter': {
        'type': string;
        'default': boolean;
        'markdownDescription': string;
    };
    'editor.snippetSuggestions': {
        'type': string;
        'enum': string[];
        'enumDescriptions': string[];
        'default': string;
        'description': string;
    };
    'editor.emptySelectionClipboard': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.copyWithSyntaxHighlighting': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.wordBasedSuggestions': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.suggestSelection': {
        'type': string;
        'enum': string[];
        'markdownEnumDescriptions': string[];
        'default': string;
        'description': string;
    };
    'editor.suggestFontSize': {
        'type': string;
        'default': number;
        'minimum': number;
        'markdownDescription': string;
    };
    'editor.suggestLineHeight': {
        'type': string;
        'default': number;
        'minimum': number;
        'markdownDescription': string;
    };
    'editor.tabCompletion': {
        type: string;
        default: string;
        enum: string[];
        enumDescriptions: string[];
        description: string;
    };
    'editor.suggest.filterGraceful': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.suggest.localityBonus': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.suggest.shareSuggestSelections': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.snippetsPreventQuickSuggestions': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.suggest.showIcons': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.suggest.maxVisibleSuggestions': {
        type: string;
        default: number;
        minimum: number;
        maximum: number;
        description: string;
    };
    'editor.suggest.filteredTypes': {
        type: string;
        default: {
            keyword: boolean;
            snippet: boolean;
        };
        markdownDescription: string;
        properties: {
            method: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            function: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            constructor: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            field: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            variable: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            class: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            struct: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            interface: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            module: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            property: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            event: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            operator: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            unit: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            value: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            constant: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            enum: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            enumMember: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            keyword: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            text: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            color: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            file: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            reference: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            customcolor: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            folder: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            typeParameter: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
            snippet: {
                type: string;
                default: boolean;
                markdownDescription: string;
            };
        };
    };
    'editor.gotoLocation.multiple': {
        description: string;
        type: string;
        enum: string[];
        default: string;
        enumDescriptions: string[];
    };
    'editor.selectionHighlight': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.occurrencesHighlight': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.overviewRulerLanes': {
        'type': string;
        'default': number;
        'description': string;
    };
    'editor.overviewRulerBorder': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.cursorBlinking': {
        'type': string;
        'enum': string[];
        'default': string;
        'description': string;
    };
    'editor.mouseWheelZoom': {
        'type': string;
        'default': boolean;
        'markdownDescription': string;
    };
    'editor.cursorSmoothCaretAnimation': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.cursorStyle': {
        'type': string;
        'enum': string[];
        'default': string;
        'description': string;
    };
    'editor.cursorWidth': {
        'type': string;
        'default': number;
        'markdownDescription': string;
    };
    'editor.fontLigatures': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.hideCursorInOverviewRuler': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.renderWhitespace': {
        'type': string;
        'enum': string[];
        'enumDescriptions': string[];
        default: string;
        description: string;
    };
    'editor.renderControlCharacters': {
        'type': string;
        default: boolean;
        description: string;
    };
    'editor.renderIndentGuides': {
        'type': string;
        default: boolean;
        description: string;
    };
    'editor.highlightActiveIndentGuide': {
        'type': string;
        default: boolean;
        description: string;
    };
    'editor.renderLineHighlight': {
        'type': string;
        'enum': string[];
        'enumDescriptions': string[];
        default: string;
        description: string;
    };
    'editor.codeLens': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.folding': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.foldingStrategy': {
        'type': string;
        'enum': string[];
        'default': string;
        'markdownDescription': string;
    };
    'editor.showFoldingControls': {
        'type': string;
        'enum': string[];
        'default': string;
        'description': string;
    };
    'editor.matchBrackets': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.glyphMargin': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.useTabStops': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.trimAutoWhitespace': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.stablePeek': {
        'type': string;
        'default': boolean;
        'markdownDescription': string;
    };
    'editor.dragAndDrop': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.accessibilitySupport': {
        'type': string;
        'enum': string[];
        'enumDescriptions': string[];
        'default': string;
        'description': string;
    };
    'editor.showUnused': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.links': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.colorDecorators': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.lightbulb.enabled': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.maxTokenizationLineLength': {
        'type': string;
        'default': number;
        'description': string;
    };
    'editor.codeActionsOnSave': {
        'type': string;
        'properties': {
            'source.organizeImports': {
                'type': string;
                'description': string;
            };
            'source.fixAll': {
                'type': string;
                'description': string;
            };
        };
        'additionalProperties': {
            'type': string;
        };
        'default': {};
        'description': string;
    };
    'editor.codeActionsOnSaveTimeout': {
        'type': string;
        'default': number;
        'description': string;
    };
    'editor.selectionClipboard': {
        'type': string;
        'default': boolean;
        'description': string;
        'included': boolean;
    };
    'diffEditor.renderSideBySide': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'diffEditor.ignoreTrimWhitespace': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'editor.largeFileOptimizations': {
        'type': string;
        'default': boolean;
        'description': string;
    };
    'diffEditor.renderIndicators': {
        'type': string;
        'default': boolean;
        'description': string;
    };
};
export declare const editorPreferenceSchema: PreferenceSchema;
declare type CodeEditorPreferenceProperties = typeof codeEditorPreferenceProperties;
export declare type CodeEditorConfiguration = {
    [P in keyof CodeEditorPreferenceProperties]: CodeEditorPreferenceProperties[P] extends {
        enum: string[];
    } ? CodeEditorPreferenceProperties[P]['enum'][number] : CodeEditorPreferenceProperties[P]['default'];
};
export interface EditorConfiguration extends CodeEditorConfiguration {
    'editor.autoSave': 'on' | 'off';
    'editor.autoSaveDelay': number;
    'editor.formatOnSave': boolean;
    'editor.formatOnSaveTimeout': number;
    'files.eol': EndOfLinePreference;
    'files.encoding': string;
}
export declare type EndOfLinePreference = '\n' | '\r\n' | 'auto';
export declare type EditorPreferenceChange = PreferenceChangeEvent<EditorConfiguration>;
export declare const EditorPreferences: unique symbol;
export declare type EditorPreferences = PreferenceProxy<EditorConfiguration>;
export declare function createEditorPreferences(preferences: PreferenceService): EditorPreferences;
export declare function bindEditorPreferences(bind: interfaces.Bind): void;
export {};
//# sourceMappingURL=editor-preferences.d.ts.map