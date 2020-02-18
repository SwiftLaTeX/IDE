/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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

// @ts-check
describe('Saveable', function () {

    const { assert } = chai;

    const { EditorManager } = require('@theia/editor/lib/browser/editor-manager');
    const { EditorWidget } = require('@theia/editor/lib/browser/editor-widget');
    const { PreferenceService, PreferenceScope } = require('@theia/core/lib/browser/preferences/preference-service');
    const Uri = require('@theia/core/lib/common/uri');
    const { Saveable, SaveableWidget } = require('@theia/core/lib/browser/saveable');
    const { WorkspaceService } = require('@theia/workspace/lib/browser/workspace-service');
    const { FileSystem } = require('@theia/filesystem/lib/common/filesystem');
    const { MonacoEditor } = require('@theia/monaco/lib/browser/monaco-editor');
    const { DisposableCollection } = require('@theia/core/lib/common/disposable');
    const { Deferred } = require('@theia/core/lib/common/promise-util');

    /** @type {import('inversify').Container} */
    const container = window['theia'].container;
    const editorManager = container.get(EditorManager);
    const workspaceService = container.get(WorkspaceService);
    /** @type {import('@theia/filesystem/lib/common/filesystem').FileSystem} */
    const fileSystem = container.get(FileSystem);
    /** @type {import('@theia/core/lib/browser/preferences/preference-service').PreferenceService} */
    const preferences = container.get(PreferenceService);

    /** @type {EditorWidget & SaveableWidget} */
    let widget;
    /** @type {MonacoEditor} */
    let editor;

    const client = fileSystem.getClient();
    const originalShouldOverwrite = client.shouldOverwrite;

    const rootUri = new Uri.default(workspaceService.tryGetRoots()[0].uri);
    const fileUri = rootUri.resolve('.test/foo.txt');

    const autoSave = preferences.get('editor.autoSave', undefined, rootUri.toString());

    beforeEach(async () => {
        preferences.set('editor.autoSave', 'off', undefined, rootUri.toString());
        await editorManager.closeAll({ save: false });
        await fileSystem.createFile(fileUri.toString(), { content: 'foo' });
        widget =  /** @type {EditorWidget & SaveableWidget} */
            (await editorManager.open(fileUri, { mode: 'reveal' }));
        editor = MonacoEditor.get(widget);

        client.shouldOverwrite = async () => (assert.fail('should be in sync'), false);
    });

    afterEach(async () => {
        preferences.set('editor.autoSave', autoSave, undefined, rootUri.toString());
        client.shouldOverwrite = originalShouldOverwrite;
        editor = undefined;
        widget = undefined;
        await editorManager.closeAll({ save: false });
        await fileSystem.delete(fileUri.parent.toString(), { moveToTrash: false });
    });

    it('normal save', async function () {
        for (const edit of ['bar', 'baz']) {
            assert.isFalse(Saveable.isDirty(widget), `should NOT be dirty before '${edit}' edit`);
            editor.getControl().setValue(edit);
            assert.isTrue(Saveable.isDirty(widget), `should be dirty before '${edit}' save`);
            await Saveable.save(widget);
            assert.isFalse(Saveable.isDirty(widget), `should NOT be dirty after '${edit}' save`);
            assert.equal(editor.getControl().getValue(), edit, `model should be updated with '${edit}'`);
            const state = await fileSystem.resolveContent(fileUri.toString());
            assert.equal(state.content, edit, `fs should be updated with '${edit}'`);
        }
    });

    it('reject save with incremental update', async function () {
        let longContent = 'foobarbaz';
        for (let i = 0; i < 5; i++) {
            longContent += longContent + longContent;
        }
        editor.getControl().setValue(longContent);
        await Saveable.save(widget);

        editor.getControl().getModel().applyEdits([{
            range: monaco.Range.fromPositions({ lineNumber: 1, column: 1 }, { lineNumber: 1, column: 4 }),
            forceMoveMarkers: false,
            text: ''
        }]);
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before save');

        const resource = editor.document['resource'];
        const version = resource.version;
        await resource.saveContents('baz');
        assert.notEqual(version, resource.version, 'latest version should be different after write');

        let outOfSync = false;
        let outOfSyncCount = 0;
        client.shouldOverwrite = async () => {
            outOfSync = true;
            outOfSyncCount++;
            return false;
        };

        let incrementalUpdate = false;
        const saveContentChanges = resource.saveContentChanges;
        resource.saveContentChanges = async (changes, options) => {
            incrementalUpdate = true;
            return saveContentChanges.bind(resource)(changes, options);
        };
        try {
            await Saveable.save(widget);
        } finally {
            resource.saveContentChanges = saveContentChanges;
        }

        assert.isTrue(incrementalUpdate, 'should tried to update incrementaly');
        assert.isTrue(outOfSync, 'file should be out of sync');
        assert.equal(outOfSyncCount, 1, 'user should be prompted only once with out of sync dialog');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty after rejected save');
        assert.equal(editor.getControl().getValue(), longContent.substring(3), 'model should be updated');
        const state = await fileSystem.resolveContent(fileUri.toString());
        assert.equal(state.content, 'baz', 'fs should NOT be updated');
    });

    it('accept rejected save', async () => {
        let outOfSync = false;
        client.shouldOverwrite = async () => {
            outOfSync = true;
            return false;
        };
        editor.getControl().setValue('bar');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before save');

        const resource = editor.document['resource'];
        const version = resource.version;
        await resource.saveContents('baz');
        assert.notEqual(version, resource.version, 'latest version should be different after write');

        await Saveable.save(widget);
        assert.isTrue(outOfSync, 'file should be out of sync');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty after rejected save');
        assert.equal(editor.getControl().getValue(), 'bar', 'model should be updated');
        let state = await fileSystem.resolveContent(fileUri.toString());
        assert.equal(state.content, 'baz', 'fs should NOT be updated');

        outOfSync = false;
        client.shouldOverwrite = async () => {
            outOfSync = true;
            return true;
        };
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before save');
        await Saveable.save(widget);
        assert.isTrue(outOfSync, 'file should be out of sync');
        assert.isFalse(Saveable.isDirty(widget), 'should NOT be dirty after save');
        assert.equal(editor.getControl().getValue(), 'bar', 'model should be updated');
        state = await fileSystem.resolveContent(fileUri.toString());
        assert.equal(state.content, 'bar', 'fs should be updated');
    });

    it('accept new save', async () => {
        let outOfSync = false;
        client.shouldOverwrite = async () => {
            outOfSync = true;
            return true;
        };
        editor.getControl().setValue('bar');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before save');
        await fileSystem.touchFile(fileUri.toString());
        await Saveable.save(widget);
        assert.isTrue(outOfSync, 'file should be out of sync');
        assert.isFalse(Saveable.isDirty(widget), 'should NOT be dirty after save');
        assert.equal(editor.getControl().getValue(), 'bar', 'model should be updated');
        const state = await fileSystem.resolveContent(fileUri.toString());
        assert.equal(state.content, 'bar', 'fs should be updated');
    });

    it('cancel save on close', async () => {
        editor.getControl().setValue('bar');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before close');

        await widget.closeWithSaving({
            shouldSave: () => undefined
        });
        assert.isTrue(Saveable.isDirty(widget), 'should be still dirty after canceled close');
        assert.isFalse(widget.isDisposed, 'should NOT be disposed after canceled close');
        const state = await fileSystem.resolveContent(fileUri.toString());
        assert.equal(state.content, 'foo', 'fs should NOT be updated after canceled close');
    });

    it('reject save on close', async () => {
        editor.getControl().setValue('bar');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before rejected close');
        await widget.closeWithSaving({
            shouldSave: () => false
        });
        assert.isTrue(widget.isDisposed, 'should be disposed after rejected close');
        const state = await fileSystem.resolveContent(fileUri.toString());
        assert.equal(state.content, 'foo', 'fs should NOT be updated after rejected close');
    });

    it('accept save on close and reject it', async () => {
        let outOfSync = false;
        client.shouldOverwrite = async () => {
            outOfSync = true;
            return false;
        };
        editor.getControl().setValue('bar');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before rejecting save on close');
        await fileSystem.touchFile(fileUri.toString());
        await widget.closeWithSaving({
            shouldSave: () => true
        });
        assert.isTrue(outOfSync, 'file should be out of sync');
        assert.isTrue(widget.isDisposed, 'model should be disposed after close');
        const state = await fileSystem.resolveContent(fileUri.toString());
        assert.equal(state.content, 'foo', 'fs should NOT be updated');
    });

    it('accept save on close and accept new save', async () => {
        let outOfSync = false;
        client.shouldOverwrite = async () => {
            outOfSync = true;
            return true;
        };
        editor.getControl().setValue('bar');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before accepting save on close');
        await fileSystem.touchFile(fileUri.toString());
        await widget.closeWithSaving({
            shouldSave: () => true
        });
        assert.isTrue(outOfSync, 'file should be out of sync');
        assert.isTrue(widget.isDisposed, 'model should be disposed after close');
        const state = await fileSystem.resolveContent(fileUri.toString());
        assert.equal(state.content, 'bar', 'fs should be updated');
    });

    it('normal close', async () => {
        editor.getControl().setValue('bar');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before before close');
        await widget.closeWithSaving({
            shouldSave: () => true
        });
        assert.isTrue(widget.isDisposed, 'model should be disposed after close');
        const state = await fileSystem.resolveContent(fileUri.toString());
        assert.equal(state.content, 'bar', 'fs should be updated');
    });

    it('delete file for saved', async () => {
        assert.isFalse(Saveable.isDirty(widget), 'should NOT be dirty before delete');
        const waitForDisposed = new Deferred();
        const listener = editor.onDispose(() => waitForDisposed.resolve());
        try {
            await fileSystem.delete(fileUri.toString(), { moveToTrash: false });
            await waitForDisposed.promise;
            assert.isTrue(widget.isDisposed, 'model should be disposed after delete');
        } finally {
            listener.dispose();
        }
    });

    it('delete and add again file for dirty', async () => {
        editor.getControl().setValue('bar');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before delete');
        assert.isTrue(editor.document.valid, 'should be valid before delete');
        let waitForDidChangeTitle = new Deferred();
        const listener = () => waitForDidChangeTitle.resolve();
        widget.title.changed.connect(listener);
        try {
            await fileSystem.delete(fileUri.toString(), { moveToTrash: false });
            await waitForDidChangeTitle.promise;
            assert.isTrue(widget.title.label.endsWith('(deleted from disk)'), 'should be marked as deleted');
            assert.isTrue(Saveable.isDirty(widget), 'should be dirty after delete');
            assert.isFalse(widget.isDisposed, 'model should NOT be disposed after delete');
        } finally {
            widget.title.changed.disconnect(listener);
        }

        waitForDidChangeTitle = new Deferred();
        widget.title.changed.connect(listener);
        try {
            await fileSystem.createFile(fileUri.toString(), { content: 'foo' });
            await waitForDidChangeTitle.promise;
            assert.isFalse(widget.title.label.endsWith('(deleted from disk)'), 'should NOT be marked as deleted');
            assert.isTrue(Saveable.isDirty(widget), 'should be dirty after added again');
            assert.isFalse(widget.isDisposed, 'model should NOT be disposed after added again');
        } finally {
            widget.title.changed.disconnect(listener);
        }
    });

    it('save deleted file for dirty', async function () {
        editor.getControl().setValue('bar');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before save deleted');

        assert.isTrue(editor.document.valid, 'should be valid before delete');
        const waitForInvalid = new Deferred();
        const listener = editor.document.onDidChangeValid(() => waitForInvalid.resolve());
        try {
            await fileSystem.delete(fileUri.toString(), { moveToTrash: false });
            await waitForInvalid.promise;
            assert.isFalse(editor.document.valid, 'should be invalid after delete');
        } finally {
            listener.dispose();
        }

        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before save');
        await Saveable.save(widget);
        assert.isFalse(Saveable.isDirty(widget), 'should NOT be dirty after save');
        assert.isTrue(editor.document.valid, 'should be valid after save');
        const state = await fileSystem.resolveContent(fileUri.toString());
        assert.equal(state.content, 'bar', 'fs should be updated');
    });

    it('move file for saved', async function () {
        assert.isFalse(Saveable.isDirty(widget), 'should NOT be dirty before move');

        const targetUri = fileUri.parent.resolve('bar.txt');
        await fileSystem.move(fileUri.toString(), targetUri.toString(), { overwrite: true });
        assert.isTrue(widget.isDisposed, 'old model should be disposed after move');

        const renamed = await editorManager.getByUri(targetUri);
        assert.equal(renamed.getResourceUri().toString(), targetUri.toString(), 'new model should be created after move');
        assert.equal(renamed.editor.document.getText(), 'foo', 'new model should be created after move');
        assert.isFalse(Saveable.isDirty(renamed), 'new model should NOT be dirty after move');
    });

    it('move file for dirty', async function () {
        editor.getControl().setValue('bar');
        assert.isTrue(Saveable.isDirty(widget), 'should be dirty before move');

        const targetUri = fileUri.parent.resolve('bar.txt');

        await fileSystem.move(fileUri.toString(), targetUri.toString(), { overwrite: true });
        assert.isTrue(widget.isDisposed, 'old model should be disposed after move');

        const renamed = await editorManager.getByUri(targetUri);
        assert.equal(renamed.getResourceUri().toString(), targetUri.toString(), 'new model should be created after move');
        assert.equal(renamed.editor.document.getText(), 'bar', 'new model should be created after move');
        assert.isTrue(Saveable.isDirty(renamed), 'new model should be dirty after move');

        await Saveable.save(renamed);
        assert.isFalse(Saveable.isDirty(renamed), 'new model should NOT be dirty after save');
    });

    it('fail to open invalid file', async function () {
        const invalidFile = fileUri.parent.resolve('invalid_file.txt');
        try {
            await editorManager.open(invalidFile, { mode: 'reveal' });
            assert.fail('should not be possible to open an editor for invalid file');
        } catch (e) {
            assert.equal(e.code, 'MODEL_IS_INVALID');
        }
    });

});
