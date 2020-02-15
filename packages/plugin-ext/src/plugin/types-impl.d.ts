/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import * as theia from '@theia/plugin';
import URI from 'vscode-uri';
import { MarkdownString } from './markdown-string';
import { SymbolKind } from '../common/plugin-api-rpc-model';
export declare class Disposable {
    private disposable;
    static from(...disposables: {
        dispose(): any;
    }[]): Disposable;
    constructor(func: () => void);
    /**
     * Dispose this object.
     */
    dispose(): void;
    static create(func: () => void): Disposable;
}
export declare enum StatusBarAlignment {
    Left = 1,
    Right = 2
}
export declare enum TextEditorLineNumbersStyle {
    Off = 0,
    On = 1,
    Relative = 2
}
/**
 * Denotes a column in the editor window.
 * Columns are used to show editors side by side.
 */
export declare enum ViewColumn {
    Active = -1,
    Beside = -2,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9
}
/**
 * Represents sources that can cause `window.onDidChangeEditorSelection`
 */
export declare enum TextEditorSelectionChangeKind {
    Keyboard = 1,
    Mouse = 2,
    Command = 3
}
export declare namespace TextEditorSelectionChangeKind {
    function fromValue(s: string | undefined): TextEditorSelectionChangeKind | undefined;
}
export declare class Position {
    private _line;
    private _character;
    constructor(line: number, char: number);
    get line(): number;
    get character(): number;
    isBefore(other: Position): boolean;
    isBeforeOrEqual(other: Position): boolean;
    isAfter(other: Position): boolean;
    isAfterOrEqual(other: Position): boolean;
    isEqual(other: Position): boolean;
    compareTo(other: Position): number;
    translate(change: {
        lineDelta?: number;
        characterDelta?: number;
    }): Position;
    translate(lineDelta?: number, characterDelta?: number): Position;
    with(change: {
        line?: number;
        character?: number;
    }): Position;
    with(line?: number, character?: number): Position;
    static Min(...positions: Position[]): Position;
    static Max(...positions: Position[]): Position;
    static isPosition(other: {}): other is Position;
}
export declare class Range {
    protected _start: Position;
    protected _end: Position;
    constructor(start: Position, end: Position);
    constructor(startLine: number, startColumn: number, endLine: number, endColumn: number);
    get start(): Position;
    get end(): Position;
    contains(positionOrRange: Position | Range): boolean;
    isEqual(other: Range): boolean;
    intersection(other: Range): Range | undefined;
    union(other: Range): Range;
    get isEmpty(): boolean;
    get isSingleLine(): boolean;
    with(change: {
        start?: Position;
        end?: Position;
    }): Range;
    with(start?: Position, end?: Position): Range;
    static isRange(thing: {}): thing is theia.Range;
}
export declare class Selection extends Range {
    private _anchor;
    private _active;
    constructor(anchor: Position, active: Position);
    constructor(anchorLine: number, anchorColumn: number, activeLine: number, activeColumn: number);
    get active(): Position;
    get anchor(): Position;
    get isReversed(): boolean;
}
export declare enum EndOfLine {
    LF = 1,
    CRLF = 2
}
export declare class SnippetString {
    static isSnippetString(thing: {}): thing is SnippetString;
    private static _escape;
    private _tabstop;
    value: string;
    constructor(value?: string);
    appendText(string: string): SnippetString;
    appendTabstop(number?: number): SnippetString;
    appendPlaceholder(value: string | ((snippet: SnippetString) => void), number?: number): SnippetString;
    appendVariable(name: string, defaultValue?: string | ((snippet: SnippetString) => void)): SnippetString;
}
export declare class ThemeColor {
    id: string;
    constructor(id: string);
}
export declare class ThemeIcon {
    id: string;
    static readonly File: ThemeIcon;
    static readonly Folder: ThemeIcon;
    private constructor();
}
export declare enum TextEditorRevealType {
    Default = 0,
    InCenter = 1,
    InCenterIfOutsideViewport = 2,
    AtTop = 3
}
/**
 * These values match very carefully the values of `TrackedRangeStickiness`
 */
export declare enum DecorationRangeBehavior {
    /**
     * TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges
     */
    OpenOpen = 0,
    /**
     * TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges
     */
    ClosedClosed = 1,
    /**
     * TrackedRangeStickiness.GrowsOnlyWhenTypingBefore
     */
    OpenClosed = 2,
    /**
     * TrackedRangeStickiness.GrowsOnlyWhenTypingAfter
     */
    ClosedOpen = 3
}
/**
 * Vertical Lane in the overview ruler of the editor.
 */
export declare enum OverviewRulerLane {
    Left = 1,
    Center = 2,
    Right = 4,
    Full = 7
}
export declare enum ConfigurationTarget {
    Global = 1,
    Workspace = 2,
    WorkspaceFolder = 3,
    Default = 4,
    Memory = 5
}
export declare class RelativePattern {
    pattern: string;
    base: string;
    constructor(base: theia.WorkspaceFolder | string, pattern: string);
    pathToRelative(from: string, to: string): string;
}
export declare enum IndentAction {
    None = 0,
    Indent = 1,
    IndentOutdent = 2,
    Outdent = 3
}
export declare class TextEdit {
    protected _range: Range;
    protected _newText: string;
    protected _newEol: EndOfLine;
    get range(): Range;
    set range(value: Range);
    get newText(): string;
    set newText(value: string);
    get newEol(): EndOfLine;
    set newEol(value: EndOfLine);
    constructor(range: Range | undefined, newText: string | undefined);
    static isTextEdit(thing: {}): thing is TextEdit;
    static replace(range: Range, newText: string): TextEdit;
    static insert(position: Position, newText: string): TextEdit;
    static delete(range: Range): TextEdit;
    static setEndOfLine(eol: EndOfLine): TextEdit;
}
export declare enum CompletionTriggerKind {
    Invoke = 0,
    TriggerCharacter = 1,
    TriggerForIncompleteCompletions = 2
}
export declare enum CompletionItemKind {
    Text = 0,
    Method = 1,
    Function = 2,
    Constructor = 3,
    Field = 4,
    Variable = 5,
    Class = 6,
    Interface = 7,
    Module = 8,
    Property = 9,
    Unit = 10,
    Value = 11,
    Enum = 12,
    Keyword = 13,
    Snippet = 14,
    Color = 15,
    File = 16,
    Reference = 17,
    Folder = 18,
    EnumMember = 19,
    Constant = 20,
    Struct = 21,
    Event = 22,
    Operator = 23,
    TypeParameter = 24
}
export declare class CompletionItem implements theia.CompletionItem {
    label: string;
    kind?: CompletionItemKind;
    detail: string;
    documentation: string | MarkdownString;
    sortText: string;
    filterText: string;
    preselect: boolean;
    insertText: string | SnippetString;
    range: Range;
    textEdit: TextEdit;
    additionalTextEdits: TextEdit[];
    command: theia.Command;
    constructor(label: string, kind?: CompletionItemKind);
}
export declare class CompletionList {
    isIncomplete?: boolean;
    items: theia.CompletionItem[];
    constructor(items?: theia.CompletionItem[], isIncomplete?: boolean);
}
export declare enum DiagnosticSeverity {
    Error = 0,
    Warning = 1,
    Information = 2,
    Hint = 3
}
export declare class DiagnosticRelatedInformation {
    location: Location;
    message: string;
    constructor(location: Location, message: string);
}
export declare class Location {
    uri: URI;
    range: Range;
    constructor(uri: URI, rangeOrPosition: Range | Position | undefined);
    static isLocation(thing: {}): thing is theia.Location;
}
export declare enum DiagnosticTag {
    Unnecessary = 1
}
export declare class Diagnostic {
    range: Range;
    message: string;
    severity: DiagnosticSeverity;
    source?: string;
    code?: string | number;
    relatedInformation?: DiagnosticRelatedInformation[];
    tags?: DiagnosticTag[];
    constructor(range: Range, message: string, severity?: DiagnosticSeverity);
}
export declare enum MarkerSeverity {
    Hint = 1,
    Info = 2,
    Warning = 4,
    Error = 8
}
export declare enum MarkerTag {
    Unnecessary = 1
}
export declare class ParameterInformation {
    label: string | [number, number];
    documentation?: string | MarkdownString;
    constructor(label: string | [number, number], documentation?: string | MarkdownString);
}
export declare class SignatureInformation {
    label: string;
    documentation?: string | MarkdownString;
    parameters: ParameterInformation[];
    constructor(label: string, documentation?: string | MarkdownString);
}
export declare enum SignatureHelpTriggerKind {
    Invoke = 1,
    TriggerCharacter = 2,
    ContentChange = 3
}
export declare class SignatureHelp {
    signatures: SignatureInformation[];
    activeSignature: number;
    activeParameter: number;
    constructor();
}
export declare class Hover {
    contents: MarkdownString[] | theia.MarkedString[];
    range?: Range;
    constructor(contents: MarkdownString | theia.MarkedString | MarkdownString[] | theia.MarkedString[], range?: Range);
}
export declare enum DocumentHighlightKind {
    Text = 0,
    Read = 1,
    Write = 2
}
export declare class DocumentHighlight {
    range: Range;
    kind?: DocumentHighlightKind;
    constructor(range: Range, kind?: DocumentHighlightKind);
}
export declare type Definition = Location | Location[];
export declare class DocumentLink {
    range: Range;
    target: URI;
    constructor(range: Range, target: URI);
}
export declare class CodeLens {
    range: Range;
    command?: theia.Command;
    get isResolved(): boolean;
    constructor(range: Range, command?: theia.Command);
}
export declare enum CodeActionTrigger {
    Automatic = 1,
    Manual = 2
}
export declare class CodeActionKind {
    readonly value: string;
    private static readonly sep;
    static readonly Empty: CodeActionKind;
    static readonly QuickFix: CodeActionKind;
    static readonly Refactor: CodeActionKind;
    static readonly RefactorExtract: CodeActionKind;
    static readonly RefactorInline: CodeActionKind;
    static readonly RefactorRewrite: CodeActionKind;
    static readonly Source: CodeActionKind;
    static readonly SourceOrganizeImports: CodeActionKind;
    static readonly SourceFixAll: CodeActionKind;
    constructor(value: string);
    append(parts: string): CodeActionKind;
    contains(other: CodeActionKind): boolean;
    intersects(other: CodeActionKind): boolean;
}
export declare enum TextDocumentSaveReason {
    Manual = 1,
    AfterDelay = 2,
    FocusOut = 3
}
export declare class CodeAction {
    title: string;
    command?: theia.Command;
    edit?: WorkspaceEdit;
    diagnostics?: Diagnostic[];
    kind?: CodeActionKind;
    constructor(title: string, kind?: CodeActionKind);
}
export interface FileOperationOptions {
    overwrite?: boolean;
    ignoreIfExists?: boolean;
    ignoreIfNotExists?: boolean;
    recursive?: boolean;
}
export interface FileOperation {
    _type: 1;
    from: URI | undefined;
    to: URI | undefined;
    options?: FileOperationOptions;
}
export interface FileTextEdit {
    _type: 2;
    uri: URI;
    edit: TextEdit;
}
export declare class WorkspaceEdit implements theia.WorkspaceEdit {
    private _edits;
    renameFile(from: theia.Uri, to: theia.Uri, options?: {
        overwrite?: boolean;
        ignoreIfExists?: boolean;
    }): void;
    createFile(uri: theia.Uri, options?: {
        overwrite?: boolean;
        ignoreIfExists?: boolean;
    }): void;
    deleteFile(uri: theia.Uri, options?: {
        recursive?: boolean;
        ignoreIfNotExists?: boolean;
    }): void;
    replace(uri: URI, range: Range, newText: string): void;
    insert(resource: URI, position: Position, newText: string): void;
    delete(resource: URI, range: Range): void;
    has(uri: URI): boolean;
    set(uri: URI, edits: TextEdit[]): void;
    get(uri: URI): TextEdit[];
    entries(): [URI, TextEdit[]][];
    _allEntries(): ([URI, TextEdit[]] | [URI, URI, FileOperationOptions])[];
    get size(): number;
    toJSON(): any;
}
export declare class TreeItem {
    collapsibleState: theia.TreeItemCollapsibleState;
    label?: string | theia.TreeItemLabel;
    id?: string;
    iconPath?: string | URI | {
        light: string | URI;
        dark: string | URI;
    } | ThemeIcon;
    resourceUri?: URI;
    tooltip?: string | undefined;
    command?: theia.Command;
    contextValue?: string;
    constructor(label: string | theia.TreeItemLabel, collapsibleState?: theia.TreeItemCollapsibleState);
    constructor(resourceUri: URI, collapsibleState?: theia.TreeItemCollapsibleState);
}
export declare enum TreeItemCollapsibleState {
    None = 0,
    Collapsed = 1,
    Expanded = 2
}
export declare class SymbolInformation {
    static validate(candidate: SymbolInformation): void;
    name: string;
    location: Location;
    kind: SymbolKind;
    containerName: undefined | string;
    constructor(name: string, kind: SymbolKind, containerName: string, location: Location);
    constructor(name: string, kind: SymbolKind, range: Range, uri?: URI, containerName?: string);
    toJSON(): any;
}
export declare class DocumentSymbol {
    static validate(candidate: DocumentSymbol): void;
    name: string;
    detail: string;
    kind: SymbolKind;
    range: Range;
    selectionRange: Range;
    children: DocumentSymbol[];
    constructor(name: string, detail: string, kind: SymbolKind, range: Range, selectionRange: Range);
}
export declare enum FileChangeType {
    Changed = 1,
    Created = 2,
    Deleted = 3
}
export declare enum CommentThreadCollapsibleState {
    Collapsed = 0,
    Expanded = 1
}
export interface QuickInputButton {
    readonly iconPath: URI | {
        light: string | URI;
        dark: string | URI;
    } | ThemeIcon;
    readonly tooltip?: string | undefined;
}
export declare class QuickInputButtons {
    static readonly Back: QuickInputButton;
}
export declare enum CommentMode {
    Editing = 0,
    Preview = 1
}
export declare class FileSystemError extends Error {
    static FileExists(messageOrUri?: string | URI): FileSystemError;
    static FileNotFound(messageOrUri?: string | URI): FileSystemError;
    static FileNotADirectory(messageOrUri?: string | URI): FileSystemError;
    static FileIsADirectory(messageOrUri?: string | URI): FileSystemError;
    static NoPermissions(messageOrUri?: string | URI): FileSystemError;
    static Unavailable(messageOrUri?: string | URI): FileSystemError;
    constructor(uriOrMessage?: string | URI, code?: string, terminator?: Function);
}
export declare enum FileType {
    Unknown = 0,
    File = 1,
    Directory = 2,
    SymbolicLink = 64
}
export declare class ProgressOptions {
    /**
     * The location at which progress should show.
     */
    location: ProgressLocation;
    /**
     * A human-readable string which will be used to describe the
     * operation.
     */
    title?: string;
    /**
     * Controls if a cancel button should show to allow the user to
     * cancel the long running operation.  Note that currently only
     * `ProgressLocation.Notification` is supporting to show a cancel
     * button.
     */
    cancellable?: boolean;
    constructor(location: ProgressLocation, title?: string, cancellable?: boolean);
}
export declare class Progress<T> {
    /**
     * Report a progress update.
     * @param value A progress item, like a message and/or an
     * report on how much work finished
     */
    report(value: T): void;
}
export declare enum ProgressLocation {
    /**
     * Show progress for the source control viewlet, as overlay for the icon and as progress bar
     * inside the viewlet (when visible). Neither supports cancellation nor discrete progress.
     */
    SourceControl = 1,
    /**
     * Show progress in the status bar of the editor. Neither supports cancellation nor discrete progress.
     */
    Window = 10,
    /**
     * Show progress as notification with an optional cancel button. Supports to show infinite and discrete progress.
     */
    Notification = 15
}
export declare class ProcessExecution {
    private executionProcess;
    private arguments;
    private executionOptions;
    constructor(process: string, options?: theia.ProcessExecutionOptions);
    constructor(process: string, args: string[], options?: theia.ProcessExecutionOptions);
    get process(): string;
    set process(value: string);
    get args(): string[];
    set args(value: string[]);
    get options(): theia.ProcessExecutionOptions | undefined;
    set options(value: theia.ProcessExecutionOptions | undefined);
    computeId(): string;
    static is(value: theia.ShellExecution | theia.ProcessExecution): boolean;
}
export declare enum ShellQuoting {
    Escape = 1,
    Strong = 2,
    Weak = 3
}
export declare enum TaskPanelKind {
    Shared = 1,
    Dedicated = 2,
    New = 3
}
export declare enum TaskRevealKind {
    Always = 1,
    Silent = 2,
    Never = 3
}
export declare class ShellExecution {
    private shellCommandLine;
    private shellCommand;
    private arguments;
    private shellOptions;
    constructor(commandLine: string, options?: theia.ShellExecutionOptions);
    constructor(command: string | theia.ShellQuotedString, args: (string | theia.ShellQuotedString)[], options?: theia.ShellExecutionOptions);
    get commandLine(): string;
    set commandLine(value: string);
    get command(): string | theia.ShellQuotedString;
    set command(value: string | theia.ShellQuotedString);
    get args(): (string | theia.ShellQuotedString)[];
    set args(value: (string | theia.ShellQuotedString)[]);
    get options(): theia.ShellExecutionOptions | undefined;
    set options(value: theia.ShellExecutionOptions | undefined);
    computeId(): string;
    static is(value: theia.ShellExecution | theia.ProcessExecution): boolean;
}
export declare class TaskGroup {
    private groupId;
    static Clean: TaskGroup;
    static Build: TaskGroup;
    static Rebuild: TaskGroup;
    static Test: TaskGroup;
    static from(value: string): TaskGroup | undefined;
    constructor(id: string, label: string);
    get id(): string;
}
export declare enum TaskScope {
    Global = 1,
    Workspace = 2
}
export declare class Task {
    private taskDefinition;
    private taskScope;
    private taskName;
    private taskExecution;
    private taskProblemMatchers;
    private hasTaskProblemMatchers;
    private isTaskBackground;
    private taskSource;
    private taskGroup;
    private taskPresentationOptions;
    constructor(taskDefinition: theia.TaskDefinition, scope: theia.WorkspaceFolder | theia.TaskScope.Global | theia.TaskScope.Workspace, name: string, source: string, execution?: ProcessExecution | ShellExecution, problemMatchers?: string | string[]);
    constructor(taskDefinition: theia.TaskDefinition, name: string, source: string, execution?: ProcessExecution | ShellExecution, problemMatchers?: string | string[]);
    get definition(): theia.TaskDefinition;
    set definition(value: theia.TaskDefinition);
    get scope(): theia.TaskScope.Global | theia.TaskScope.Workspace | theia.WorkspaceFolder | undefined;
    set scope(value: theia.TaskScope.Global | theia.TaskScope.Workspace | theia.WorkspaceFolder | undefined);
    get name(): string;
    set name(value: string);
    get execution(): ProcessExecution | ShellExecution | undefined;
    set execution(value: ProcessExecution | ShellExecution | undefined);
    get problemMatchers(): string[];
    set problemMatchers(value: string[]);
    get hasProblemMatchers(): boolean;
    get isBackground(): boolean;
    set isBackground(value: boolean);
    get source(): string;
    set source(value: string);
    get group(): TaskGroup | undefined;
    set group(value: TaskGroup | undefined);
    get presentationOptions(): theia.TaskPresentationOptions | undefined;
    set presentationOptions(value: theia.TaskPresentationOptions | undefined);
    private updateDefinitionBasedOnExecution;
}
export declare class DebugAdapterExecutable {
    /**
     * The command or path of the debug adapter executable.
     * A command must be either an absolute path of an executable or the name of an command to be looked up via the PATH environment variable.
     * The special value 'node' will be mapped to VS Code's built-in Node.js runtime.
     */
    readonly command: string;
    /**
     * The arguments passed to the debug adapter executable. Defaults to an empty array.
     */
    readonly args?: string[];
    /**
     * Optional options to be used when the debug adapter is started.
     * Defaults to undefined.
     */
    readonly options?: theia.DebugAdapterExecutableOptions;
    /**
     * Creates a description for a debug adapter based on an executable program.
     *
     * @param command The command or executable path that implements the debug adapter.
     * @param args Optional arguments to be passed to the command or executable.
     * @param options Optional options to be used when starting the command or executable.
     */
    constructor(command: string, args?: string[], options?: theia.DebugAdapterExecutableOptions);
}
/**
 * Represents a debug adapter running as a socket based server.
 */
export declare class DebugAdapterServer {
    /**
     * The port.
     */
    readonly port: number;
    /**
     * The host.
     */
    readonly host?: string;
    /**
     * Create a description for a debug adapter running as a socket based server.
     */
    constructor(port: number, host?: string);
}
/**
 * The base class of all breakpoint types.
 */
export declare class Breakpoint {
    /**
     * Is breakpoint enabled.
     */
    enabled: boolean;
    /**
     * An optional expression for conditional breakpoints.
     */
    condition?: string;
    /**
     * An optional expression that controls how many hits of the breakpoint are ignored.
     */
    hitCondition?: string;
    /**
     * An optional message that gets logged when this breakpoint is hit. Embedded expressions within {} are interpolated by the debug adapter.
     */
    logMessage?: string;
    protected constructor(enabled?: boolean, condition?: string, hitCondition?: string, logMessage?: string);
    private _id;
    /**
     * The unique ID of the breakpoint.
     */
    get id(): string;
}
/**
 * A breakpoint specified by a source location.
 */
export declare class SourceBreakpoint extends Breakpoint {
    /**
     * The source and line position of this breakpoint.
     */
    location: Location;
    /**
     * Create a new breakpoint for a source location.
     */
    constructor(location: Location, enabled?: boolean, condition?: string, hitCondition?: string, logMessage?: string);
}
/**
 * A breakpoint specified by a function name.
 */
export declare class FunctionBreakpoint extends Breakpoint {
    /**
     * The name of the function to which this breakpoint is attached.
     */
    functionName: string;
    /**
     * Create a new function breakpoint.
     */
    constructor(functionName: string, enabled?: boolean, condition?: string, hitCondition?: string, logMessage?: string);
}
export declare class Color {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly alpha: number;
    constructor(red: number, green: number, blue: number, alpha: number);
}
export declare class ColorInformation {
    range: Range;
    color: Color;
    constructor(range: Range, color: Color);
}
export declare class ColorPresentation {
    label: string;
    textEdit?: TextEdit;
    additionalTextEdits?: TextEdit[];
    constructor(label: string);
}
export declare enum ColorFormat {
    RGB = 0,
    HEX = 1,
    HSL = 2
}
export declare class FoldingRange {
    start: number;
    end: number;
    kind?: FoldingRangeKind;
    constructor(start: number, end: number, kind?: FoldingRangeKind);
}
export declare enum FoldingRangeKind {
    Comment = 1,
    Imports = 2,
    Region = 3
}
/**
 * Enumeration of the supported operating systems.
 */
export declare enum OperatingSystem {
    Windows = "Windows",
    Linux = "Linux",
    OSX = "OSX"
}
/** The areas of the application shell where webview panel can reside. */
export declare enum WebviewPanelTargetArea {
    Main = "main",
    Left = "left",
    Right = "right",
    Bottom = "bottom"
}
export declare class CallHierarchyItem {
    kind: SymbolKind;
    name: string;
    detail?: string;
    uri: URI;
    range: Range;
    selectionRange: Range;
    constructor(kind: SymbolKind, name: string, detail: string, uri: URI, range: Range, selectionRange: Range);
}
export declare class CallHierarchyIncomingCall {
    from: theia.CallHierarchyItem;
    fromRanges: theia.Range[];
    constructor(item: theia.CallHierarchyItem, fromRanges: theia.Range[]);
}
export declare class CallHierarchyOutgoingCall {
    to: theia.CallHierarchyItem;
    fromRanges: theia.Range[];
    constructor(item: theia.CallHierarchyItem, fromRanges: theia.Range[]);
}
//# sourceMappingURL=types-impl.d.ts.map