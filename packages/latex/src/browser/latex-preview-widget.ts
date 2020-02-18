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

import { BaseWidget } from '@theia/core/lib/browser';

export const PREVIEW_WIDGET_CLASS = 'swiftlatex-preview-widget';

import '../../src/browser/style/index.css';

export class LaTeXPreviewWidget extends BaseWidget {

	constructor(

	) {
		super();
		this.title.label = 'preview';
		this.title.caption = this.title.label;
		this.title.closable = true;
		this.id = 'latex-preview';
		this.title.iconClass = 'fa fa-eye';
		this.addClass(PREVIEW_WIDGET_CLASS);
		this.node.tabIndex = 0;
		this.setupViewer();
		this.update();
	}

	private setupViewer(): void {
		/* include viewer frame */
		this.node.innerHTML += '<div id="swiftlatex_preview_viewer"></div>';
	}

	public showPage(): void {

	}

}
