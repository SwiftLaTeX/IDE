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

import { MonacoEditorModel } from '@theia/monaco/lib/browser/monaco-editor-model';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
/* eslint-disable @typescript-eslint/no-explicit-any */
const createMutex = () => {
	let token = true;
	return (f: any, g: any) => {
		if (token) {
			token = false;
			try {
				f();
			} finally {
				token = true;
			};
		} else if (g !== undefined) {
			g();
		};
	};
};

export class MonacoYJSBinding {
	private mux: any;
	private monacoHander: monaco.IDisposable;
	private hasInited: boolean = false; /* Prevent multiple sync events */
	constructor(protected monacoModel: MonacoEditorModel) {
		this.mux = createMutex();
		this.init_yjs(monacoModel.textEditorModel);
	}

	init_yjs(monacoModel: monaco.editor.IModel): void {
		console.log('Opening url ' + monacoModel.uri.toString());
		const ydoc = new Y.Doc();
		const unique_id = (window.location.pathname + monacoModel.uri.toString()).replace(/\//gm, '_').replace(':', '_').replace(/\./gm, '_');
		const provider = new WebsocketProvider('wss://share.swiftlatex.com', unique_id, ydoc);
		const ytext = ydoc.getText('document');

		provider.on('sync', () => {
			if (this.hasInited) {
				return;
			}
			this.hasInited = true;
			const remote_source = ytext.toString();
			const local_source = monacoModel.getValue();
			if (remote_source === local_source) {
				console.log('All synced');
			} else {
				if (remote_source.length === 0) {
					ytext.insert(0, local_source);
					console.log('Using local source');
				} else {
					monacoModel.setValue(remote_source);
					console.log('Trusting remote source');
				}
			}

			console.log('Start binding editor events');
			this.monacoHander = monacoModel.onDidChangeContent(event => {
				this.mux(() => {
					ydoc!.transact(() => {
						event.changes.sort((change1, change2) => change2.rangeOffset - change1.rangeOffset).forEach(change => {
							ytext.delete(change.rangeOffset, change.rangeLength);
							ytext.insert(change.rangeOffset, change.text);
						});
					}, this);
				});
			});

			console.log('Start binding yjs events');
			ytext.observe(event => {
				this.mux(() => {
					let index = 0;
					event.delta.forEach(op => {
						if (op.retain !== undefined) {
							index += op.retain;
						} else if ((<any>op).insert !== undefined) {
							const pos = monacoModel.getPositionAt(index);
							const range = new monaco.Selection(pos.lineNumber, pos.column, pos.lineNumber, pos.column);
							/* eslint-disable */
							monacoModel.pushEditOperations([], [{ range, text: (<any>op).insert }], () => null);
							index += (<any>op).insert.length;
							/* eslint-enable */
						} else if (op.delete !== undefined) {
							const pos = monacoModel.getPositionAt(index);
							const endPos = monacoModel.getPositionAt(index + op.delete);
							const range = new monaco.Selection(pos.lineNumber, pos.column, endPos.lineNumber, endPos.column);
							/* eslint-disable */
							monacoModel.pushEditOperations([], [{ range, text: '' }], () => null);
							/* eslint-enable */
						} else {
							throw Error('Unexpected sync protocol');
						}
					});
					monacoModel.pushStackElement();
				});
			});
		});

		monacoModel.onWillDispose(() => {
			/* To debounce */
			this.hasInited = true;
			console.log('Disposing editor event handlers');
			if (this.monacoHander) {
				this.monacoHander.dispose();
			}
			ytext._eH.l.length = 0;
			ydoc.destroy();
			// provider.disconnect();
			provider.destroy();
		});

		provider.connect();
	}
}
