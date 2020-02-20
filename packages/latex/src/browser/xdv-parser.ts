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
import { Machine, CharPosition } from './xdv-machine';

const FILE_VERSION = 71;

enum Opcode {
	set_char = 0,
	set1 = 128,
	set2 = 129,
	set3 = 130,
	set4 = 131,
	set_rule = 132,
	put_char = 133,
	put2 = 134,
	put3 = 135,
	put4 = 136,
	put_rule = 137,
	nop = 138,
	bop = 139,
	eop = 140,
	push = 141,
	pop = 142,
	right = 143,
	right2 = 144,
	right3 = 145,
	right4 = 146,
	w = 147,
	w1 = 148,
	w2 = 149,
	w3 = 150,
	w4 = 151,
	x = 152,
	x1 = 153,
	x2 = 154,
	x3 = 155,
	x4 = 156,
	down = 157,
	down2 = 158,
	down3 = 159,
	down4 = 160,
	y = 161,
	y1 = 162,
	y2 = 163,
	y3 = 164,
	y4 = 165,
	z = 166,
	z1 = 167,
	z2 = 168,
	z3 = 169,
	z4 = 170,
	fnt = 171,
	fnt1 = 235,
	fnt2 = 236,
	fnt3 = 237
	, fnt4 = 238,
	xxx = 239,
	xxx2 = 240,
	xxx3 = 241,
	xxx4 = 242,
	fnt_def = 243,
	fnt_def2 = 244,
	fnt_def3 = 245,
	fnt_def4 = 246,
	pre = 247,
	post = 248,
	post_post = 249,
	define_native_font = 252,
	set_glyphs = 253,
	set_text_and_glyphs = 254
}

export class DviCommand {
	length: number;

	special: boolean;

	constructor(properties: any) {
		this.special = false;
		Object.assign(this, properties);
	}

	execute(machine: Machine): void {

	}

	toString(): string {
		return 'DviCommand { }';
	}
}

export class SetChar extends DviCommand {
	opcode: Opcode.set_char;

	c: number;

	text_height: number;

	text_width: number;

	char_positon: CharPosition;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.set_char;
	}

	execute(machine: Machine): void {
		machine.setChar(this.c, this.text_height, this.text_width, this.char_positon);
	}

	toString(): string {
		return `SetChar { c: '${String.fromCharCode(this.c)}' }`;
	}
}

export class SetSpace extends DviCommand {
	opcode: Opcode.set2;

	char_positon: CharPosition;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.set2;
	}

	execute(machine: Machine): void {
		machine.setSpace(this.char_positon);
	}

	toString(): string {
		return 'SetSpace { _ }';
	}
}

export class PutRule extends DviCommand {
	opcode: Opcode.put_rule;

	a: number;

	b: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.put_rule;
	}

	execute(machine: Machine): void {
		machine.putRule(this.a, this.b, false);
	}

	toString(): string {
		return `PutRule { a: ${this.a}, b: ${this.b} }`;
	}
}

export class SetRule extends DviCommand {
	opcode: Opcode.set_rule;

	a: number;

	b: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.set_rule;
	}

	execute(machine: Machine): void {
		machine.putRule(this.a, this.b, true);
	}

	toString(): string {
		return `SetRule { a: ${this.a}, b: ${this.b} }`;
	}
}

// 138  nop     no operation

class Nop extends DviCommand {
	opcode: Opcode.nop;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.nop;
	}

	toString(): string {
		return 'Nop { }';
	}
}

// 139  bop c_0[4]..c_9[4], p[4]    beginning of page

class Bop extends DviCommand {
	opcode: Opcode.bop;

	c_0: number;

	h_offset: number;

	v_offset: number;

	p: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.bop;
	}

	execute(machine: Machine): void {
		machine.beginPage(this.c_0, this.h_offset, this.v_offset);
	}

	toString(): string {
		return 'Bop { ... }';
	}
}

// 140  eop     ending of page

class Eop extends DviCommand {
	opcode: Opcode.eop;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.eop;
	}

	execute(machine: Machine): void {
		if (machine.stack.length) { throw new Error('Stack should be empty at the end of a page.'); }

		machine.endPage();
	}

	toString(): string {
		return 'Eop { }';
	}
}

// 141  push        save the current positions

class Push extends DviCommand {
	opcode: Opcode.push;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.push;
	}

	execute(machine: Machine): void {
		machine.push();
	}

	toString(): string {
		return 'Push { }';
	}
}

// 142  pop     restore previous positions

class Pop extends DviCommand {
	opcode: Opcode.pop;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.pop;
	}

	execute(machine: Machine): void {
		machine.pop();
	}

	toString(): string {
		return 'Pop { }';
	}
}

class MoveRight extends DviCommand {
	opcode: Opcode.right;

	b: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.right;
	}

	execute(machine: Machine): void {
		machine.moveRight(this.b);
	}

	toString(): string {
		return `MoveRight { b: ${this.b} }`;
	}
}

// 147  w0      move right by w
// 148  w1  b[1]    move right and set w
// 149  w2  b[2]
// 150  w3  b[3]
// 151  w4  b[4]

class MoveW extends DviCommand {
	opcode: Opcode.w;

	b: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.w;
	}

	execute(machine: Machine): void {
		if (this.length > 1) {
			machine.position.w = this.b;
		}
		machine.moveRight(machine.position.w);
	}

	toString(): string {
		if (this.length > 1) { return `MoveW { b: ${this.b} }`; }
		return 'MoveW0 { }';
	}
}

// 152  x0      move right by x
// 153  x1  b[1]    move right and set x
// 154  x2  b[2]
// 155  x3  b[3]
// 156  x4  b[4]

class MoveX extends DviCommand {
	opcode: Opcode.x;

	b: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.x;
	}

	execute(machine: Machine): void {
		if (this.length > 1) {
			machine.position.x = this.b;
		}
		machine.moveRight(machine.position.x);
	}

	toString(): string {
		if (this.length > 1) { return `MoveX { b: ${this.b} }`; }
		return 'MoveX0 { }';
	}
}

// 157  down1   a[1]    move down
// 158  down2   a[2]
// 159  down3   a[3]
// 160  down4   a[4]

class MoveDown extends DviCommand {
	opcode: Opcode.down;

	a: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.down;
	}

	execute(machine: Machine): void {
		machine.moveDown(this.a);
	}

	toString(): string {
		return `MoveDown { a: ${this.a} }`;
	}
}

// 161  y0      move down by y
// 162  y1  a[1]    move down and set y
// 163  y2  a[2]
// 164  y3  a[3]
// 165  y4  a[4]

class MoveY extends DviCommand {
	opcode: Opcode.y;

	a: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.y;
	}

	execute(machine: Machine): void {
		if (this.length > 1) {
			machine.position.y = this.a;
		}
		machine.moveDown(machine.position.y);
	}

	toString(): string {
		if (this.length > 1) { return `MoveY { a: ${this.a} }`; }
		return 'MoveY0 { }';
	}
}

// 166  z0      move down by z
// 167  z1  a[1]    move down and set z
// 168  z2  a[2]
// 169  z3  a[3]
// 170  z4  a[4]

class MoveZ extends DviCommand {
	opcode: Opcode.z;

	a: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.z;
	}

	execute(machine: Machine): void {
		if (this.length > 1) {
			machine.position.z = this.a;
		}
		machine.moveDown(machine.position.z);
	}

	toString(): string {
		if (this.length > 1) { return `MoveZ { a: ${this.a} }`; }
		return 'MoveZ0 { }';
	}
}

// 171...234    fnt_num_i       set current font to i
// 235  fnt1    k[1]    set current font
// 236  fnt2    k[2]
// 237  fnt3    k[3]
// 238  fnt4    k[4]

class SetFont extends DviCommand {
	opcode: Opcode.fnt;

	k: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.fnt;
	}

	execute(machine: Machine): void {
		// console.log("Setting mainfont to " + this.k);

		machine.setFont(this.k);
	}

	toString(): string {
		return `SetFont { k: ${this.k} }`;
	}
}

// 239  xxx1    k[1], x[k]  extension to DVI primitives
// 240  xxx2    k[2], x[k]
// 241  xxx3    k[3], x[k]
// 242  xxx4    k[4], x[k]

function _intToHex(n: number): string {
	return (`00${Math.round(n).toString(16)}`).substr(-2);
}

function _texColor(name: string): string {
	if (name === 'gray 0') { return 'black'; }
	if (name === 'gray 1') { return 'white'; }
	if (name.startsWith('rgb ')) {
		const out = name.split(' ').slice(1).map(x => _intToHex(parseFloat(x) * 255)).join('');
		return `#${out}`;
	}
	if (name.startsWith('gray ')) {
		const x = name.split(' ')[1];
		return _texColor(`rgb ${x} ${x} ${x}`);
	}
	return 'black';
}

class Special extends DviCommand {
	opcode: Opcode.xxx;

	x: string;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.xxx;
		this.special = true;
	}

	toString(): string {
		return `Special { x: '${this.x}' }`;
	}

	execute(machine: Machine): void {
		if (this.x.startsWith('dvisvgm:raw ')) {
			const svg = this.x.replace(/^dvisvgm:raw /, '');
			machine.putSVG(svg);
		} else if (this.x.startsWith('pdf:pagesize')) {
			const papersize = this.x.replace(/^pdf:pagesize /, '');
			const regex = /width ([0-9\.]+)pt height ([0-9\.]+)pt/gm;
			const m = regex.exec(papersize);
			if (!m || m.length !== 3) {
				/* Fallback */
				machine.setPapersize(595, 842);
			} else {
				const paperWidth = Number(m[1]);
				const paperHeight = Number(m[2]);
				machine.setPapersize(paperWidth, paperHeight);
			}
		} else if (this.x.startsWith('color push ')) {
			const color = _texColor(this.x.replace(/^color push /, ''));
			machine.pushColor(color);
		} else if (this.x.startsWith('color pop ')) {
			machine.popColor();
		} else if (this.x.startsWith('pdf:image bbox 0 0 ')) {
			const image = this.x.replace(/pdf:image bbox 0 0 /, '').split(' ');
			const imageWidth = Number(image[0]);
			const imageHeight = Number(image[1]);
			const url = image[6].substr(1).slice(0, -1);
			machine.putImage(imageWidth, imageHeight, url);
		}
	}
}

class SetTextGlyph extends DviCommand {
	opcode: Opcode.set_text_and_glyphs;
	text: number[];
	textpos: CharPosition[];
	textcount: number;
	width: number;
	glyphcount: number;
	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.set_text_and_glyphs;
	}
	execute(machine: Machine): void {
		machine.setNativeText(this.text, this.textpos, this.width);
	}
	toString(): string {
		return `SetGlyph { count: ${this.textcount} }`;
	}
}

class FontDefinition extends DviCommand {
	opcode: Opcode.fnt_def;

	k: number; // font id

	c: number; // checksum

	s: number; // fixed-point scale factor (applied to char widths of font)

	d: number; // design-size factors with the magnification (`s/1000`)

	a: number; // length of directory path of font (`./` if a = 0)

	l: number; // length of font name

	n: string; // font name (first `a` bytes is dir, remaining `l` = name)

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.fnt_def;
	}

	execute(machine: Machine): void {
		// console.log("Defining Local Font name: " + this.n + " index: " + this.k);
		machine.loadFont({
			name: this.n,
			checksum: this.c,
			scaleFactor: this.s,
			designSize: this.d,
		}, this.k, false);
	}

	toString(): string {
		return `FontDefinition { k: ${this.k}, n: '${this.n}', ... }`;
	}
}

// 247  pre i[1], num[4], den[4], mag[4],  k[1], x[k]   preamble

class Preamble extends DviCommand {
	opcode: Opcode.pre;

	i: number;

	num: number;

	den: number;

	mag: number;

	x: string;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.pre;
	}

	execute(machine: Machine): void {
		if (this.num <= 0) { throw new Error('Invalid numerator (must be > 0)'); }

		if (this.den <= 0) { throw new Error('Invalid denominator (must be > 0)'); }

		if (this.i !== FILE_VERSION) {
			throw new Error('DVI format must be 71, which is SwiftLaTeX format ');
		}

		machine.preamble(this.num, this.den, this.mag, this.x);
	}

	toString(): string {
		return `Preamble { i: ${this.i}, num: ${this.num}, den: ${this.den}, mag: ${this.mag}, x: '${this.x}' }`;
	}
}

// 248  post    p[4], num[4], den[4], mag[4], l[4], u[4], s[2], t[2]
// < font definitions > postamble beginning

class Post extends DviCommand {
	opcode: Opcode.post;

	p: number;

	num: number;

	den: number;

	mag: number;

	l: number;

	u: number;

	s: number;

	t: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.post;
	}

	execute(machine: Machine): void {
		machine.post(this);
	}

	toString(): string {
		return `Post { p: ${this.p}, num: ${this.num}, den: ${this.den}, mag: ${this.mag}, ... }`;
	}
}

// 249  post_post   q[4], i[1]; 223's   postamble ending

class PostPost extends DviCommand {
	opcode: Opcode.post_post;

	q: number;

	i: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.post_post;
	}

	execute(machine: Machine): void {
		machine.postPost(this);
	}

	toString(): string {
		return `PostPost { q: ${this.q}, i: ${this.i} }`;
	}
}

// 252

class NativeFontDefinition extends DviCommand {
	opcode: Opcode.define_native_font;

	fontnumber: number;

	fontsize: number;

	flag: number;

	filenamelen: number;

	filename: string;

	faceindex: number;

	height: number;

	depth: number;

	rbga: number;

	extend: number;

	slant: number;

	embolden: number;

	constructor(properties: any) {
		super(properties);
		this.opcode = Opcode.define_native_font;
	}

	execute(machine: Machine): void {
		// console.log("Defining Native Font name: " + this.filename + " index: " + this.fontnumber);
		machine.loadFont({
			name: this.filename,
			fontsize: this.fontsize,
			faceindex: this.faceindex,
			height: this.height,
			depth: this.depth,
			rbga: this.rbga,
			extend: this.extend,
			slant: this.slant,
			embolden: this.embolden,
		}, this.fontnumber, true);
	}

	toString(): string {
		return `NativeFontDefinition { filename: ${this.filename}, fontnumber: ${this.fontnumber}, length: ${this.length}, rbga: ${this.rbga}}`;
	}
}

type Command =
	SetChar | SetRule | PutRule | Nop | Bop | Eop | Push | Pop |
	MoveRight | MoveW | MoveX | MoveDown | MoveY | MoveZ | SetFont | Special |
	FontDefinition | Preamble | Post | PostPost | NativeFontDefinition | SetTextGlyph | SetSpace;

function parseCommand(opcode: Opcode, buffer: Buffer): Command {

	const undefined_codes: number[] = [250, 251, 255];

	if (<number>opcode in undefined_codes) {
		throw new Error(`Undefined opcode ${opcode}`);
	}

	const unsupported_codes: Opcode[] = [Opcode.set3, Opcode.set4, Opcode.put_char, Opcode.put2, Opcode.put3, Opcode.put4,
	Opcode.set_glyphs];

	if (opcode in undefined_codes) {
		throw new Error('SwiftLaTeX does not support opcode ' + opcode);
	}

	if ((opcode >= Opcode.set_char) && (opcode < Opcode.set1)) {
		throw new Error('SwiftLaTeX does not generate simple setchar');
	}

	if (opcode in unsupported_codes) {
		throw new Error('SwiftLaTeX does not support code:' + opcode);
	}

	if ((opcode >= Opcode.fnt) && (opcode < Opcode.fnt1)) { return new SetFont({ k: opcode - 171, length: 1 }); }

	switch (opcode) {
		case Opcode.set1:
			if (buffer.length < 17) { throw new Error(`not enough bytes to process opcode ${opcode}`); }
			const c = buffer.readUInt8(0);
			const char_p = new CharPosition();
			char_p.line = buffer.readUInt16BE(1);
			char_p.column = buffer.readUInt16BE(3);
			char_p.cs = buffer.readUInt16BE(5);
			char_p.group = buffer.readUInt8(7);
			char_p.fid = buffer.readUInt8(8);
			const text_height = buffer.readUInt32BE(9);
			const text_width = buffer.readUInt32BE(13);
			return new SetChar({
				c: c,
				text_height: text_height,
				text_width: text_width,
				char_positon: char_p,
				length: 17 + 1
			});

		case Opcode.set2:
			if (buffer.length < 10) { throw new Error(`not enough bytes to process opcode ${opcode}`); }
			const char_sp = new CharPosition();
			char_sp.line = buffer.readUInt16BE(2);
			char_sp.column = buffer.readUInt16BE(4);
			char_sp.cs = buffer.readUInt16BE(6);
			char_sp.group = buffer.readUInt8(8);
			char_sp.fid = buffer.readUInt8(9);
			return new SetSpace({
				char_positon: char_sp,
				length: 10 + 1
			});

		case Opcode.set_rule:
			if (buffer.length < 8) { throw new Error(`not enough bytes to process opcode ${opcode}`); }
			return new SetRule({
				a: buffer.readInt32BE(0),
				b: buffer.readInt32BE(4),
				length: 9,
			});

		case Opcode.put_rule:
			if (buffer.length < 8) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new PutRule({
				a: buffer.readInt32BE(0),
				b: buffer.readInt32BE(4),
				length: 9,
			});

		case Opcode.nop:
			return new Nop({ length: 1 });

		case Opcode.bop:
			if (buffer.length < 44) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new Bop({
				c_0: buffer.readUInt32BE(0),
				h_offset: buffer.readUInt32BE(4),
				v_offset: buffer.readUInt32BE(8),
				p: buffer.readUInt32BE(40),
				length: 45,
			});

		case Opcode.eop:
			return new Eop({ length: 1 });

		case Opcode.push:
			return new Push({ length: 1 });

		case Opcode.pop:
			return new Pop({ length: 1 });

		case Opcode.right:
		case Opcode.right2:
		case Opcode.right3:
		case Opcode.right4:
			if (buffer.length < opcode - Opcode.right + 1) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new MoveRight({
				b: buffer.readIntBE(0, opcode - Opcode.right + 1),
				length: opcode - Opcode.right + 1 + 1,
			});

		case Opcode.w:
			return new MoveW({ b: 0, length: 1 });

		case Opcode.w1:
		case Opcode.w2:
		case Opcode.w3:
		case Opcode.w4:
			if (buffer.length < opcode - Opcode.w) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new MoveW({
				b: buffer.readIntBE(0, opcode - Opcode.w),
				length: opcode - Opcode.w + 1,
			});

		case Opcode.x:
			return new MoveX({ b: 0, length: 1 });

		case Opcode.x1:
		case Opcode.x2:
		case Opcode.x3:
		case Opcode.x4:
			if (buffer.length < opcode - Opcode.x) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new MoveX({
				b: buffer.readIntBE(0, opcode - Opcode.x),
				length: opcode - Opcode.x + 1,
			});

		case Opcode.down:
		case Opcode.down2:
		case Opcode.down3:
		case Opcode.down4:
			if (buffer.length < opcode - Opcode.down + 1) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new MoveDown({
				a: buffer.readIntBE(0, opcode - Opcode.down + 1),
				length: opcode - Opcode.down + 1 + 1,
			});

		case Opcode.y:
			return new MoveY({ a: 0, length: 1 });

		case Opcode.y1:
		case Opcode.y2:
		case Opcode.y3:
		case Opcode.y4:
			if (buffer.length < opcode - Opcode.y) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new MoveY({
				a: buffer.readIntBE(0, opcode - Opcode.y),
				length: opcode - Opcode.y + 1,
			});

		case Opcode.z:
			return new MoveZ({ a: 0, length: 1 });

		case Opcode.z1:
		case Opcode.z2:
		case Opcode.z3:
		case Opcode.z4:
			if (buffer.length < opcode - Opcode.z) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new MoveZ({
				a: buffer.readIntBE(0, opcode - Opcode.z),
				length: opcode - Opcode.z + 1,
			});

		case Opcode.fnt1:
		case Opcode.fnt2:
		case Opcode.fnt3:
		case Opcode.fnt4:
			if (buffer.length < opcode - Opcode.fnt1 + 1) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new SetFont({
				k: buffer.readIntBE(0, opcode - Opcode.fnt1 + 1),
				length: opcode - Opcode.fnt1 + 1 + 1,
			});

		case Opcode.xxx:
		case Opcode.xxx2:
		case Opcode.xxx3:
		case Opcode.xxx4: {
			const i = opcode - Opcode.xxx + 1;
			if (buffer.length < i) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			const k = buffer.readUIntBE(0, i);
			if (buffer.length < i + k) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new Special({
				x: buffer.slice(i, i + k).toString(),
				length: i + k + 1,
			});
		}

		case Opcode.fnt_def:
		case Opcode.fnt_def2:
		case Opcode.fnt_def3:
		case Opcode.fnt_def4: {
			const i = opcode - Opcode.fnt_def + 1;
			if (buffer.length < i) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			const k = buffer.readIntBE(0, i);
			if (buffer.length < i + 14) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			const cc = buffer.readUInt32BE(i + 0);
			const s = buffer.readUInt32BE(i + 4);
			const d = buffer.readUInt32BE(i + 8);
			const a = buffer.readUInt8(i + 12);
			const l = buffer.readUInt8(i + 13);
			if (buffer.length < i + 14 + a + l) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			const n = buffer.slice(i + 14, i + 14 + a + l).toString();
			return new FontDefinition({
				k,
				cc,
				s,
				d,
				a,
				l,
				n,
				length: i + 14 + a + l + 1,
			});
		}

		case Opcode.pre: {
			if (buffer.length < 14) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			const i = buffer.readUInt8(0);
			const num = buffer.readUInt32BE(1);
			const den = buffer.readUInt32BE(5);
			const mag = buffer.readUInt32BE(9);
			const k = buffer.readUInt8(13);
			if (buffer.length < 14 + k + 8) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			const comment = buffer.slice(14, 14 + k).toString();
			return new Preamble({
				i,
				num,
				den,
				mag,
				x: comment,
				length: 14 + k + 1,
			});
		}

		case Opcode.post:
			if (buffer.length < 4 + 4 + 4 + 4 + 4 + 4 + 2 + 2) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new Post({
				p: buffer.readUInt32BE(0),
				num: buffer.readUInt32BE(4),
				den: buffer.readUInt32BE(8),
				mag: buffer.readUInt32BE(12),
				l: buffer.readUInt32BE(16),
				u: buffer.readUInt32BE(20),
				s: buffer.readUInt16BE(24),
				t: buffer.readUInt16BE(26),
				length: 29,
			});

		case Opcode.post_post:
			if (buffer.length < 5) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			return new PostPost({
				q: buffer.readUInt32BE(0),
				i: buffer.readUInt8(4),
				length: 6,
			});

		case Opcode.define_native_font: {
			if (buffer.length < 19) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			const fontnum = buffer.readUInt32BE(0);
			const fontsize = buffer.readUInt32BE(4) / 65536;
			const flag = buffer.readUInt16BE(8);
			const filenamelen = buffer.readUInt8(10);
			const filename = buffer.slice(11, 11 + filenamelen).toString();
			const faceindex = buffer.readUInt32BE(11 + filenamelen);
			const height = buffer.readUInt32BE(11 + filenamelen + 4);
			const depth = buffer.readUInt32BE(11 + filenamelen + 8);
			const res = new NativeFontDefinition({
				fontnumber: fontnum,
				fontsize,
				flag,
				height,
				depth,
				filenamelen,
				filename,
				faceindex,
			});
			const XDV_FLAGS_COLORED = 0x0200;
			const XDV_FLAG_EXTEND = 0x1000;
			const XDV_FLAG_SLANT = 0x2000;
			const XDV_FLAG_EMBOLDEN = 0x4000;
			let length = 23 + filenamelen;

			if ((flag & XDV_FLAGS_COLORED) !== 0) {
				res.rbga = buffer.readUInt32BE(length);
				length += 4;
			}
			if ((flag & XDV_FLAG_EXTEND) !== 0) {
				res.extend = buffer.readUInt32BE(length) / 65536.0;
				length += 4;
			}
			if ((flag & XDV_FLAG_SLANT) !== 0) {
				res.slant = buffer.readUInt32BE(length) / 65536.0;
				length += 4;
			}
			if ((flag & XDV_FLAG_EMBOLDEN) !== 0) {
				res.embolden = buffer.readUInt32BE(length) / 65536.0;
				length += 4;
			}
			res.length = length + 1;
			return res;
		}
		case Opcode.set_text_and_glyphs: {
			if (buffer.length < 28) {
				throw new Error(`not enough bytes to process opcode ${opcode}`);
			}
			const textcount = buffer.readUInt16BE(0);
			if (buffer.length < 2 + textcount * 10) {
				throw new Error(`not enough bytes to process opcode ${opcode} for textcount`);
			}
			const text = [];
			const char_ps = [];
			for (let j = 0; j < textcount; j++) {
				const n = buffer.readUInt16BE(2 + j * 10);
				text.push(n);
				const char_pp = new CharPosition();
				char_pp.line = buffer.readUInt16BE(2 + j * 10 + 2);
				char_pp.column = buffer.readUInt16BE(2 + j * 10 + 4);
				char_pp.cs = buffer.readUInt16BE(2 + j * 10 + 6);
				char_pp.group = buffer.readUInt8(2 + j * 10 + 8);
				char_pp.fid = buffer.readUInt8(2 + j * 10 + 9);
				char_ps.push(char_pp);
			}
			const width = buffer.readUInt32BE(2 + textcount * 10);
			const glyphcount = buffer.readUInt16BE(2 + textcount * 10 + 4);
			// console.log(`How many count? ${glyphcount}`);
			if (buffer.length < 2 + textcount * 10 + 6 + glyphcount * 10) {
				throw new Error(`not enough bytes to process opcode ${opcode} ${buffer.length} ${glyphcount}`);
			}
			const res = new SetTextGlyph({
				textcount: textcount,
				text: text,
				textpos: char_ps,
				width: width,
				glyphcount: glyphcount,
				length: 2 + textcount * 10 + 6 + glyphcount * 10 + 1,
			});
			return res;
		}
	}

	throw new Error(`routine for ${opcode} is not implemented`);
}

function locatePagePtr(buffer: Buffer, lastBop: number, page: number): number {
	let offset = lastBop;
	while (offset > 0) {
		const bop_opcode = buffer.readUInt8(offset);
		if (bop_opcode !== 139) {
			throw new Error('Parse failed in reading bop preamble');
		}
		const boppage = buffer.readUInt32BE(offset + 1) + 1;
		if (boppage < page) {
			throw new Error('No such a page');
		}
		if (boppage === page) {
			console.log(`Find page ${page}`);
			break;
		}
		const _prevPtr = buffer.readUInt32BE(offset + 41);
		if (_prevPtr > offset) {
			throw new Error('Parse failed in reading bop jump');
		}
		offset = _prevPtr;
	}
	return offset;
}

function parseHeader(buffer: Buffer, machine: Machine): number {
	let offset = 0;

	// Parse Header
	const preamble_code: Opcode = buffer.readUInt8(offset);

	if (preamble_code !== Opcode.pre) {
		throw new Error(`Invalid Header ${Opcode.pre} ${preamble_code}`);
	}

	const command = parseCommand(preamble_code, buffer.slice(offset + 1));

	command.execute(machine);
	offset += command.length;

	// Parse Footer
	return offset;
}

function parseFooter(buffer: Buffer, machine: Machine): number {
	let offset = buffer.length - 1;
	// Locate Post
	while (offset > 0) {
		const opcode = buffer.readUInt8(offset);
		if (opcode === 223) {
			offset -= 1;
		} else if (opcode === FILE_VERSION) {
			break;
		} else {
			throw new Error('Parse failed, signature check');
		}
	}
	offset -= 4;
	let prevPtr = buffer.readUInt32BE(offset);
	if (prevPtr > offset) {
		throw new Error('Parse failed in reading post ending');
	}
	offset = prevPtr;

	// Post Sanity Check
	const post_opcode = buffer.readUInt8(offset);
	if (post_opcode !== 248) {
		throw new Error('Parse failed in reading post preamble');
	}
	prevPtr = buffer.readUInt32BE(offset + 1);
	if (prevPtr > offset) {
		throw new Error('Parse failed in reading post preamble');
	}

	// Parse fonts definition
	while (offset < buffer.length) {
		const opcode: Opcode = buffer.readUInt8(offset);
		const command = parseCommand(opcode, buffer.slice(offset + 1));

		command.execute(machine);
		offset += command.length;
		if (command.opcode === Opcode.post_post) {
			break;
		}

	}

	return prevPtr; // Last Bop
}

export function parseXDV(dviContent: Buffer | Uint8Array, machine: Machine, page: number): void {
	const buffer = Buffer.from(dviContent);

	let offset = 0;

	const firstBop = parseHeader(buffer, machine);

	const lastBop = parseFooter(buffer, machine);

	// Jump to Page
	if (page !== 0) {
		offset = locatePagePtr(buffer, lastBop, page);
	} else {
		offset = firstBop;
	}

	while (offset < buffer.length) {
		const opcode: Opcode = buffer.readUInt8(offset);

		const command = parseCommand(opcode, buffer.slice(offset + 1));

		command.execute(machine);

		offset += command.length;

		if (page !== 0 && command.opcode === Opcode.eop) {
			break;
		}
		if (command.opcode === Opcode.post || command.opcode === Opcode.post_post) {
			break;
		}
	}
}
