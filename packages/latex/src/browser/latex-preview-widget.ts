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
	url: string | undefined;
	cs: number;
	line: number;
	column: number;
}

export class LaTeXPreviewWidget extends BaseWidget {

	private xdvBuffer: Uint8Array | undefined = undefined;

	private currentPage: number = 1;

	private totalPage: number = 1;

	private user_zoom_ratio: number = 1.0;

	private initFromViewer: boolean = false;

	private cachedFileList: string[] = [];

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
			this.cachedFileList = xdvMachine.fileList;
			this.totalPage = xdvMachine.totalPages;
			const htmlContent = xdvMachine.getBody();
			const styleContent = '<style>' + xdvMachine.getStyle() + '</style>\n';
			this.unbindEvents();
			$('#swiftlatex_preview_viewer').html('');
			$('#swiftlatex_preview_viewer').append(styleContent);
			$('#swiftlatex_preview_viewer').append(htmlContent);
			this.doZoom();
			this.bindEvents();
			this.doShowPageNumber();
		}
	}

	private unbindEvents(): void {
		$('.pf-line > span').off();
	}

	private bindEvents(): void {
		$('.pf-line > span').on('click', event_obj => {
			this.initFromViewer = true;
			const span_obj = $(event_obj.target);
			const beforeOrAfter = event_obj.pageX > span_obj.offset()!.left + span_obj.width()! / 2;
			this.doShowCursor(span_obj, beforeOrAfter);
		});
	}

	private clearCursor(): void {
		$('.viewercursor').remove();
	}

	private doShowCursor(span_obj: JQuery<HTMLElement>, beforeOrAfter: boolean): void {
		this.clearCursor();
		// const is_space = span_obj.hasClass('pf-space');
		if (this.getRow(span_obj) !== 0) {
			if (this.getEcs(span_obj) === 0) {
				const cursor_html = `<span class='viewercursor' l=${this.getRow(span_obj)} c=${this.getCol(span_obj) + 1} f=${this.getFid(span_obj)}></span>`;
				if (beforeOrAfter) {
					span_obj.after(cursor_html);
				} else {
					span_obj.before(cursor_html);
				}
			}

			/* Fire event */
			if (this.initFromViewer) {
				this.onDidChangePositionEmitter.fire({
					line: this.getRow(span_obj),
					column: this.getCol(span_obj),
					url: this.fidToUrl(this.getFid(span_obj)),
					cs: this.getEcs(span_obj)
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

	private getRow(obj: JQuery<HTMLElement>): number {
		const inp = obj.attr('l');
		if (!inp) {
			return 0;
		}
		return parseInt(inp);
	};

	private getCol(obj: JQuery<HTMLElement>): number {
		const inp = obj.attr('c');
		if (!inp) {
			return 0;
		}
		return parseInt(inp);
	};

	private getEcs(obj: JQuery<HTMLElement>): number {
		const inp = obj.attr('cs');
		if (!inp) {
			return 0;
		}
		return parseInt(inp);
	};

	private getFid(obj: JQuery<HTMLElement>): number {
		const inp = obj.attr('f');
		if (!inp) {
			return 0;
		}
		return parseInt(inp);
	};

	private fidToUrl(fid: number): string | undefined {
		if (fid > this.cachedFileList.length) {
			return undefined;
		}

		return this.cachedFileList[fid - 1];
	}

	private urlToFid(url: string): number {
		for (let j = 0; j < this.cachedFileList.length; j++) {
			if (this.cachedFileList[j] === url) {
				return j + 1;
			}
		}
		return -1;
	}

	private isCursorShowing(): boolean {
		return ($('.viewercursor').length === 1);
	}

	public handleEditorCursorMoved(line: number, column: number, uri: string): void {
		this.initFromViewer = false;
		if (uri.startsWith('file:///')) {
			uri = uri.substr(8);
		}
		const fid = this.urlToFid(uri);
		if (fid === -1) {
			return;
		}

		/* Compatiablilty */
		line += 1;

		if (this.isCursorShowing()) {
			/* Todo Consider Adding It */
			const cursorObj = $('.viewercursor');
			const orirow = this.getRow(cursorObj);
			const oricol = this.getCol(cursorObj);
			const orifid = this.getFid(cursorObj);
			/* Cursor is always one bit ahead */
			if (orirow === line && oricol === column + 1 && orifid === fid) {
				return;
			}
			this.clearCursor();
		}

		console.log(`looking for span[l='${line}' c='${column}' f='${fid}']`);
		const candicates = $(`.pf-line > span[l='${line}']`);
		const filteredOnes: JQuery<HTMLElement>[] = [];
		candicates.each((index, element) => {
			const elementJquery = $(element);
			if (this.getCol(elementJquery) === column && this.getEcs(elementJquery) === 0 && this.getFid(elementJquery) === fid) {
				filteredOnes.push(elementJquery);
			}
		});

		if (filteredOnes.length > 0) {
			this.doShowCursor(filteredOnes[0], true);
			return;
		}

		let min_distance = 0xffff;
		let heuristElement: JQuery<HTMLElement> | undefined = undefined;
		let beforeOrAfter = true;
		candicates.each((index, element) => {
			const elementJquery = $(element);
			if (this.getEcs(elementJquery) !== 0) {
				return;
			}
			if (this.getFid(elementJquery) !== fid) {
				return;
			}
			const distance = this.getCol(elementJquery) - column;
			if (Math.abs(distance) <= min_distance) {
				min_distance = Math.abs(distance);
				heuristElement = elementJquery;
				beforeOrAfter = !(distance > 0);
			}
		});

		if (heuristElement !== undefined && heuristElement!.length > 0) {
			this.doShowCursor(heuristElement, beforeOrAfter);
		}
	}

	public handleCharacterInserted(nchar: string): void {
		this.initFromViewer = false;
		if (!this.isCursorShowing()) {
			return;
		}
		const cursorObj = $('.viewercursor');
		const orirow = this.getRow(cursorObj);
		const oricol = this.getCol(cursorObj);
		const orifid = this.getFid(cursorObj);

		if (nchar === ' ') {
			nchar = '&nbsp';
		}
		cursorObj.before(`<span l=${orirow} c=${oricol} f=${orifid} cs=0>${nchar}</span>`);
		cursorObj.attr('c', oricol + 1);

		/* Fix the following */
		let nextobj = cursorObj;
		let stepCount = 0;
		while (stepCount < 255) {
			stepCount += 1;
			nextobj = nextobj.next();
			if (nextobj.length === 0) {
				break;
			}
			const tmpcol = this.getCol(nextobj) + 1;
			nextobj.attr('c', tmpcol);
		}
	}

	public handleCharacterDeleted(nchar: string): void {

		this.initFromViewer = false;
		if (!this.isCursorShowing()) {
			return;
		}
		const cursorObj = $('.viewercursor');
		const oricol = this.getCol(cursorObj);

		if (oricol === 1) {
			return;
		}

		const prevspan = cursorObj.prev();
		if (prevspan.length === 0) {
			return;
		}

		let isRemoved = false;
		if (nchar === ' ' && prevspan.hasClass('pf-space')) {
			prevspan.remove();
			isRemoved = true;
		} else if (prevspan.html() === nchar) {
			prevspan.remove();
			isRemoved = true;
		}
		/* Fix the following */
		if (isRemoved) {
			let nextobj = cursorObj;
			let stepCount = 0;
			while (stepCount < 255) {
				stepCount += 1;
				nextobj = nextobj.next();
				if (nextobj.length === 0) {
					break;
				}
				const tmpcol = this.getCol(nextobj) - 1;
				nextobj.attr('c', tmpcol);
			}
		}
	}
}
