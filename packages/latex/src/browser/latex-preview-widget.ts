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
import { Emitter, Event } from '@theia/core';
import * as $ from 'jquery';

export interface PositionChangeEvent {
	fid: number;
	cs: number;
	line: number;
	column: number;
}

export class LaTeXPreviewWidget extends BaseWidget {

	private xdvBuffer: Uint8Array | undefined = undefined;

	private currentPage: number = 1;

	private totalPage: number = 1;

	private user_zoom_ratio: number = 1.0;

	private init_from_viewer: boolean = false;

	protected readonly onDidChangePositionEmitter = new Emitter<PositionChangeEvent>();

	constructor(

	) {
		super();
		this.toDispose.push(this.onDidChangePositionEmitter);
		this.setupViewer();
		this.update();
	}

	dispose(): void {
		this.toDispose.dispose();
	}

	get onDidChangePosition(): Event<PositionChangeEvent> {
		return this.onDidChangePositionEmitter.event;
	}

	private createButton(parent: HTMLElement, title: string, ...className: string[]): HTMLElement {
		const button = document.createElement('div');
		button.title = title;
		button.classList.add(...className, 'swiftlatex-preview-toolbar-button');
		parent.appendChild(button);
		return button;
	}

	private setupViewer(): void {
		/* self */
		this.title.label = 'preview';
		this.title.caption = this.title.label;
		this.title.closable = false;
		this.id = 'latex-preview';
		this.title.iconClass = 'fa fa-eye';
		this.addClass('swiftlatex-preview-widget');
		this.node.tabIndex = 0;
		const parent = this.node;

		/* toolbar */
		const toolbar = document.createElement('div');
		toolbar.classList.add('swiftlatex-preview-toolbar');
		parent.appendChild(toolbar);
		/* toolbar buttons */
		const previous_btn = this.createButton(toolbar, 'Show The Previous Page', 'swiftlatex-preview-toolbar-previous');
		this.toDispose.push(addEventListener(previous_btn, 'click', this.handleBack.bind(this)));
		const next_btn = this.createButton(toolbar, 'Show The Next Page', 'swiftlatex-preview-toolbar-next');
		this.toDispose.push(addEventListener(next_btn, 'click', this.handleForward.bind(this)));
		const zoomin_btn = this.createButton(toolbar, 'Zoom In', 'swiftlatex-preview-toolbar-zoomin');
		this.toDispose.push(addEventListener(zoomin_btn, 'click', this.handleZoomin.bind(this)));
		const zoomout_btn = this.createButton(toolbar, 'Zoom Out', 'swiftlatex-preview-toolbar-zoomout');
		this.toDispose.push(addEventListener(zoomout_btn, 'click', this.handleZoomOut.bind(this)));
		/* toolbar input */
		const input = document.createElement('input');
		input.type = 'text';
		input.id = 'swiftlatex-preview-pagecontrol';
		input.classList.add('swiftlatex-preview-toolbar-input');
		this.toDispose.push(addEventListener(input, 'keydown', this.handleInputChanged.bind(this)));
		toolbar.appendChild(input);
		/* Viewer area, maintained by cashdom/jquery */
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

	private handleZoomin(): void {
		console.log('Zoom in');
		this.user_zoom_ratio = this.user_zoom_ratio + 0.1;
		this.doZoom();
	}

	private doZoom(): void {
		const viewer = $('.page_decoration');
		viewer.css('-webkit-transform', `scale(${this.user_zoom_ratio})`);
		viewer.css('-ms-transform', `scale(${this.user_zoom_ratio})`);
		viewer.css('-transform', `scale(${this.user_zoom_ratio})`);
	}

	private handleZoomOut(): void {
		console.log('Zoom Out');
		this.user_zoom_ratio = this.user_zoom_ratio - 0.1;
		this.doZoom();
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
			let parse_ok = false;
			try {
				parseXDV(this.xdvBuffer, xdvMachine, this.currentPage);
				parse_ok = true;
			} catch (err) {
				console.log(err);
				/* Handle Error */
			}

			if (!parse_ok) {
				return;
			}
			this.totalPage = xdvMachine.totalPages;
			const htmlContent = xdvMachine.getBody();
			const styleContent = '<style>' + xdvMachine.getStyle() + '</style>\n';
			this.unbindEvents();
			$('#swiftlatex_preview_viewer').html('');
			$('#swiftlatex_preview_viewer').append(styleContent);
			$('#swiftlatex_preview_viewer').append(htmlContent);
			this.bindEvents();
			this.doShowPageNumber();
		}
	}

	private unbindEvents(): void {
		$('.pf-line > span').off();
	}

	private bindEvents(): void {
		$('.pf-line > span').on('click', event_obj => {
			this.init_from_viewer = true;
			this.doShowCursor(event_obj);
		});
	}

	private clearCursor(): void {
		$('.viewercursor').remove();
	}

	private doShowCursor(event_obj: JQuery.ClickEvent): void {
		this.clearCursor();
		const span_obj = $(event_obj.target);
		// const is_space = span_obj.hasClass('pf-space');
		if (this.get_erow(span_obj) !== 0) {
			if (this.get_ecs(span_obj) === 0) {
				const cursor_html = `<span class='viewercursor' l=${this.get_erow(span_obj)} c=${this.get_ecol(span_obj)} f=${this.get_fid(span_obj)}></span>`;
				if (event_obj.pageX > span_obj.offset()!.left + span_obj.width()! / 2) {
					span_obj.after(cursor_html);
				} else {
					span_obj.before(cursor_html);
				}
			}

			/* Fire event */
			if (this.init_from_viewer) {
				this.onDidChangePositionEmitter.fire({
					line: this.get_erow(span_obj),
					column: this.get_ecol(span_obj),
					fid: this.get_fid(span_obj),
					cs: this.get_ecs(span_obj)
				});
			}
		}
	}

	private handleInputChanged(e: KeyboardEvent): void {
		if (!this.xdvBuffer) {
			return;
		}
		const { key } = KeyCode.createKeyCode(e);
		if (key && Key.ENTER.keyCode === key.keyCode) {
			const { srcElement } = e;
			if (srcElement instanceof HTMLInputElement) {
				let input_val: string = <string>$(srcElement).val();
				if (input_val.includes('/')) {
					input_val = input_val.split('/')[0];
				}
				const vv = parseInt(input_val);
				if (!isNaN(vv)) {
					if ((vv >= 1 && vv <= this.totalPage) && vv !== this.currentPage) {
						this.currentPage = vv;
						this.showPage();
					}
				} else {
					this.doShowPageNumber();
				}
			}
		}
	}

	private doShowPageNumber(): void {
		$('#swiftlatex-preview-pagecontrol').val(`${this.currentPage}/${this.totalPage}`);
	}

	private get_erow(obj: JQuery<HTMLElement>): number {
		const inp = obj.attr('l');
		if (!inp) {
			return 0;
		}
		return parseInt(inp);
	};

	private get_ecol(obj: JQuery<HTMLElement>): number {
		const inp = obj.attr('c');
		if (!inp) {
			return 0;
		}
		return parseInt(inp);
	};

	private get_ecs(obj: JQuery<HTMLElement>): number {
		const inp = obj.attr('cs');
		if (!inp) {
			return 0;
		}
		return parseInt(inp);
	};

	private get_fid(obj: JQuery<HTMLElement>): number {
		const inp = obj.attr('f');
		if (!inp) {
			return 0;
		}
		return parseInt(inp);
	};
}
