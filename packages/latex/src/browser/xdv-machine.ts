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
/* eslint-disable @typescript-eslint/no-explicit-any */
export class CharPosition {
	line: number;

	column: number;

	group: number;

	cs: number;

	fid: number;

	constructor() {
		this.line = 0;
		this.column = 0;
		this.group = 0;
		this.cs = 0;
		this.fid = 0;
	}
}

class Position {
	h: number;

	v: number;

	w: number;

	x: number;

	y: number;

	z: number;

	constructor(properties?: Position) {
		if (properties) {
			this.h = properties.h;
			this.v = properties.v;
			this.w = properties.w;
			this.x = properties.x;
			this.y = properties.y;
			this.z = properties.z;
		} else {
			this.h = 0;
			this.v = 0;
			this.w = 0;
			this.x = 0;
			this.y = 0;
			this.z = 0;
		}
	}
}

export class DviFont {
	name: string;

	checksum: number;

	scaleFactor: number;

	designSize: number;

	faceindex: number;

	height: number;

	depth: number;

	rbga: number;

	extend: number;

	slant: number;

	embolden: number;

	isnative: boolean;
}

export class XDVMachine {
	body: string = '';

	style: string = '';

	pointsPerDviUnit: number = 0;

	svgDepth: number = 0;

	color: string = 'black';

	colorStack: string[] = [];

	paperwidth: number = 600;

	paperheight: number = 800;

	currentpage: number = 1;

	fonts: Map<number, DviFont> = new Map<number, DviFont>();

	font: DviFont; /* Do need to init */

	usedfonts: Map<string, number> = new Map<string, number>();

	stack: Position[] = [];

	position: Position; /* Do need to init */

	h_offset = 4736287;

	v_offset = 4736287;

	inTextMode = false;

	totalPages = 0;

	lastSpacePos: CharPosition | undefined = undefined;

	constructor() {

	}

	getBody(): string {
		return this.body;
	}

	getStyle(): string {
		return this.style;
	}

	pushColor(c: string): void {
		this.endTextMode();
		this.colorStack.push(this.color);
		this.color = c;
	}

	popColor(): void {
		this.endTextMode();
		if (this.colorStack.length >= 1) {
			this.color = this.colorStack.pop()!;
		} else {
			throw Error('Color stack is empty');
		}
	}

	setPapersize(width: number, height: number): void {
		this.paperwidth = width;
		this.paperheight = height;
		this.style += `#page${this.currentpage} { position:relative; width:${this.paperwidth}px; height:${this.paperheight}px; border-width: thin; }\n`;
	}

	putSVG(svg: string): void {
		this.endTextMode();
		const left = (this.position.h + this.h_offset) * this.pointsPerDviUnit;
		const top = (this.position.v + this.v_offset) * this.pointsPerDviUnit;

		this.svgDepth += (svg.match(/<svg>/g) || []).length;
		this.svgDepth -= (svg.match(/<\/svg>/g) || []).length;

		svg = svg.replace('<svg>', '<svg width="10px" height="10px" viewBox="-5 -5 10 10" style="overflow: visible; position: absolute;">');

		svg = svg.replace(/{\?x}/g, left.toString());
		svg = svg.replace(/{\?y}/g, top.toString());

		this.body += svg;
	}

	push(): void {
		this.endTextMode();
		this.stack.push(new Position(this.position));
	}

	pop(): void {
		this.endTextMode();
		if (this.stack.length >= 1) {
			this.position = this.stack.pop()!;
		} else {
			throw Error('Position stack is empty');
		}
	}

	beginPage(page: number, h_offset: number, v_offset: number): void {
		this.stack = [];
		this.position = new Position();
		this.currentpage = page + 1;
		this.body += `<div id='page${this.currentpage}' class='page_decoration'>`;
	}

	endPage(): void {
		this.endTextMode();
		this.body += '</div>';
	}

	post(_p: any): void {
	}

	postPost(_p: any): void {
	}

	endTextMode(): void {
		if (this.inTextMode) {
			this.body += '</div>';
			this.inTextMode = false;
		}
	}

	moveRight(distance: number): void {
		this.position.h += distance;
		if (this.inTextMode) {
			let l = 0;
			let c = 0;
			let f = 0;
			let cs = 0;
			if (this.lastSpacePos) {
				l = this.lastSpacePos.line;
				c = this.lastSpacePos.column;
				f = this.lastSpacePos.fid;
				cs = this.lastSpacePos.cs;
				this.lastSpacePos = undefined;
			}
			const inpixel = Number(distance * this.pointsPerDviUnit).toFixed(2);
			this.body += `<span l='${l}' c='${c}' f='${f}' cs='${cs}' class='pf-space' style='width: ${inpixel}px;'> </span>`;
		}
	}

	moveDown(distance: number): void {
		this.position.v += distance;
	}

	setFont(fontnum: number): void {
		this.endTextMode();
		if (this.fonts.has(fontnum)) {
			this.font = this.fonts.get(fontnum)!;
			if (!(this.usedfonts.has(this.font.name))) {
				this.usedfonts.set(this.font.name, 1);
				if (this.font.isnative) {
					if (this.font.name.endsWith('.ttf') || this.font.name.endsWith('.otf')) {
						// Local font
					} else {
						// Remote font
						this.style += `@font-face { font-family:${this.font.name}; src:url(https://texlive.swiftlatex.com/${this.font.name}.otf); } \n\n`;
					}
				} else {
					// Texfont
					this.style += `@font-face { font-family:${this.font.name}; src:url(https://texlive.swiftlatex.com/fonts/${this.font.name}.woff); }\n`;
				}
			}
		} else {
			throw Error(`Could not find font ${fontnum}.`);
		}
	}

	preamble(numerator: number, denominator: number, magnification: number, comment: string): void {
		const dviUnit = magnification * numerator / 1000.0 / denominator;

		this.pointsPerDviUnit = dviUnit * 72.27 / 100000.0 / 2.54;
	}

	putRule(rulea: number, ruleb: number, moved: boolean): void {
		this.endTextMode();
		const a = rulea * this.pointsPerDviUnit;
		const b = ruleb * this.pointsPerDviUnit;
		const left = (this.position.h + this.h_offset) * this.pointsPerDviUnit;
		const bottom = (this.position.v + this.v_offset) * this.pointsPerDviUnit;
		const top = bottom - a;

		this.body += `<span style="background: ${this.color}; position: absolute; top: ${top}px; left: ${left}px; width:${b}px; height: ${a}px;"></span>\n`;
		if (moved) {
			this.position.h += ruleb;
		}
	}

	_to_legal_unicode(c: number): number {
		if ((c <= 0x20) || (c >= 0x7F && c <= 0xA0) || (c === 0xAD)) {
			return c + 0xE000;
		}
		return c;
	}

	setChar(c: number, text_height: number, text_width: number, pos: CharPosition): void {
		this.endTextMode();
		c = this._to_legal_unicode(c);
		const htmlText = String.fromCharCode(c);
		// console.log(htmlText + ' ' + text_width);
		const cssleft = (this.position.h + this.h_offset) * this.pointsPerDviUnit;
		const cssheight = text_height * this.pointsPerDviUnit;
		const csstop = (this.position.v + this.v_offset) * this.pointsPerDviUnit;
		// console.log(this.font.scaleFactor);
		const fontsize = this.font.designSize / 65536.0;
		if (this.svgDepth === 0) {
			this.body += `<div style="line-height: 0; color: ${this.color}; 
            font-family: ${this.font.name}; font-size: ${fontsize}px; 
            position: absolute; top: ${Number(csstop - cssheight).toFixed(2)}px; vertical-align: baseline;
            left: ${Number(cssleft).toFixed(2)}px;">${htmlText}<span style="display: inline-block;
             vertical-align: ${Number(cssheight).toFixed(2)}px; height: 0px; line-height: 0;"></span></div>`;
		} else {
			const bottom = (this.position.v + this.v_offset) * this.pointsPerDviUnit;
			this.body += `<text alignment-baseline="baseline"
            y="${bottom}" x="${cssleft}" style="font-family: ${this.font.name};"
            font-size="${fontsize}">${htmlText}</text>\n`;
		}
		this.position.h += text_width;
	}

	setSpace(pos: CharPosition): void {
		if (pos.line !== 0) {
			this.lastSpacePos = pos;
		}
		// console.log(pos.line + ' ' + pos.column);
	}

	setNativeText(text: number[], textpos: CharPosition[], width: number): void {
		const cssleft = (this.position.h + this.h_offset) * this.pointsPerDviUnit;
		const csstop = (this.position.v + this.v_offset) * this.pointsPerDviUnit;
		const fontsize = this.font.designSize * this.font.extend;
		const textheight = fontsize; /* Todo, not sure whether it is correct */
		if (!this.inTextMode) {
			this.inTextMode = true;
			this.body += `<div class="pf-line"
            style="color: ${this.color}; font-family: ${this.font.name};
            font-size: ${Number(fontsize).toFixed(2)}px;
            top: ${Number(csstop - textheight).toFixed(2)}px;
            left: ${Number(cssleft).toFixed(2)}px;">`;
		}

		for (let j = 0; j < text.length; j++) {
			const pos = textpos[j];
			this.body += `<span l='${pos.line}'
            c='${pos.column}' f='${pos.fid}' cs='${pos.cs}'>${String.fromCharCode(text[j])}</span>`;
		}

		this.position.h += width;
	}

	putImage(width: number, height: number, url: string): void {
		this.endTextMode();
		const cssleft = (this.position.h + this.h_offset) * this.pointsPerDviUnit;

		const csstop = (this.position.v + this.v_offset) * this.pointsPerDviUnit;
		this.body += `<div data-url="${url}"
        style="top: ${Number(csstop - height).toFixed(2)}px;
        left: ${Number(cssleft).toFixed(2)}px;
        position: absolute; height:${Number(height).toFixed(2)}px;
        width:${Number(width).toFixed(2)}px;
        background-color:grey;"></div>`;
	}

	loadFont(properties: any, fontnumber: number, isnative: boolean): void {
		const f = new DviFont();
		if (!isnative) {
			f.name = properties.name;
			f.checksum = properties.checksum;
			f.scaleFactor = properties.scaleFactor;
			f.designSize = properties.designSize;
			f.isnative = false;
		} else {
			f.name = properties.name;
			f.designSize = properties.fontsize;
			f.faceindex = properties.faceindex;
			f.height = properties.height;
			f.depth = properties.depth;
			f.rbga = properties.rgba;
			if (!f.rbga) {
				f.rbga = 0xffffffff;
			}
			f.extend = properties.extend;
			if (!f.extend) {
				f.extend = 1.0;
			}
			f.slant = properties.slant;
			if (!f.slant) {
				f.slant = 0;
			}
			f.embolden = properties.embolden;
			if (!f.embolden) {
				f.embolden = 0;
			}
			f.isnative = true;
		}
		this.fonts.set(fontnumber, f);
	}
}
