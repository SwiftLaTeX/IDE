/********************************************************************************
 * Copyright (C) 2019 Elliott Wen.
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

import { BaseWidget, addEventListener } from '@theia/core/lib/browser/widgets/widget';
import { Key, KeyCode } from '@theia/core/lib/browser';
import '../../src/browser/style/index.css';
import { parseXDV } from './xdv-parser';
import { XDVMachine } from './xdv-machine';

export class LaTeXPreviewWidget extends BaseWidget {

	private xdvBuffer: Uint8Array | undefined = undefined;

	private currentPage: number = 1;

	private totalPage: number = 1;

	constructor(

	) {
		super();
		this.title.label = 'preview';
		this.title.caption = this.title.label;
		this.title.closable = true;
		this.id = 'latex-preview';
		this.title.iconClass = 'fa fa-eye';
		this.addClass('swiftlatex-preview-widget');
		this.node.tabIndex = 0;
		this.setupViewer(this.node);
		this.update();
		
	}

	private createButton(parent: HTMLElement, title: string, ...className: string[]): HTMLElement {
		const button = document.createElement('div');
		button.title = title;
		button.classList.add(...className, 'swiftlatex-toolbar-button');
		parent.appendChild(button);
		return button;
	}

	private setupViewer(parent: HTMLElement): void {
		/* toolbar */
		const toolbar = document.createElement('div');
		toolbar.classList.add('swiftlatex-preview-toolbar');
		parent.appendChild(toolbar);
		/* toolbar buttons */
		const previous_btn = this.createButton(toolbar, 'Show The Previous Page', 'swiftlatex-preview--toolbar-previous');
		this.toDispose.push(addEventListener(previous_btn, 'click', this.handleBack.bind(this)));
		const next_btn = this.createButton(toolbar, 'Show The Next Page', 'swiftlatex-preview-toolbar-next');
		this.toDispose.push(addEventListener(next_btn, 'click', this.handleForward.bind(this)));
		/* toolbar input */
		const input = document.createElement('input');
		input.type = 'text';
		input.classList.add('swiftlatex-preview-toolbar-input');
		this.toDispose.push(addEventListener(input, 'keydown', this.handleInputChanged.bind(this)));
		toolbar.appendChild(input);
		/* Viewer area, maintained by jquery */
		const viewer = document.createElement('div');
		viewer.id = 'swiftlatex_preview_viewer';
		parent.appendChild(viewer);
	}

	public updateXDV(buffer: Uint8Array): void {
		this.xdvBuffer = buffer;
		this.showPage();
	}

	private handleBack(): void {
		if (this.currentPage - 1 >= 1) {
			this.currentPage -= 1;
			this.showPage();
		}
	}

	private handleForward(): void {
		if (this.currentPage + 1 <= this.totalPage) {
			this.currentPage += 1;
			this.showPage();
		}
	}

	private showPage(): void {
		if (this.xdvBuffer) {
			const xdvMachine = new XDVMachine();
			try {
				parseXDV(this.xdvBuffer, xdvMachine, this.currentPage);
			} catch {
				/* Handle Error */
			}
			const htmlContent = xdvMachine.getBody();
			document.getElementById('swiftlatex_preview_viewer')!.innerHTML = htmlContent;
		}
	}

	private handleInputChanged(e: KeyboardEvent): void {
		const { key } = KeyCode.createKeyCode(e);
		if (key && Key.ENTER.keyCode === key.keyCode) {
			const { srcElement } = e;
			if (srcElement instanceof HTMLInputElement) {
				/* Jump to the page */
			}
		}
	}
}
