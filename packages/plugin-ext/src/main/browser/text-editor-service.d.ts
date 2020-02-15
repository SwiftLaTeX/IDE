import { EditorManager, EditorWidget } from '@theia/editor/lib/browser';
import { MonacoEditor } from '@theia/monaco/lib/browser/monaco-editor';
export declare class TextEditorService {
    private editorManager;
    private readonly onTextEditorAddEmitter;
    readonly onTextEditorAdd: import("@theia/core").Event<MonacoEditor>;
    private readonly onTextEditorRemoveEmitter;
    readonly onTextEditorRemove: import("@theia/core").Event<MonacoEditor>;
    constructor(editorManager: EditorManager);
    listTextEditors(): MonacoEditor[];
    getActiveEditor(): EditorWidget | undefined;
    private onEditorCreated;
    private onEditorAdded;
    private onEditorRemoved;
}
//# sourceMappingURL=text-editor-service.d.ts.map