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


import { LaTeXClientContribution } from './theia-latex-spellchecker';
import { LanguageClientContribution } from '@theia/languages/lib/browser';
import { ContainerModule } from 'inversify';
import { LaTeXCommandContribution, LaTeXMenuContribution } from './theia-latex-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { LaTeXEngine } from './latex-engine';
import { XDVExporter } from './xdv-exporter';

export default new ContainerModule(bind => {
	// add your contribution bindings here
	bind(LaTeXEngine).toSelf().inSingletonScope();
	bind(XDVExporter).toSelf().inSingletonScope();
	bind(LaTeXClientContribution).toSelf().inSingletonScope();
	bind(LanguageClientContribution).toDynamicValue(ctx => ctx.container.get(LaTeXClientContribution));
	bind(LaTeXCommandContribution).toSelf().inSingletonScope();
	bind(CommandContribution).toService(LaTeXCommandContribution);
	bind(LaTeXMenuContribution).toSelf().inSingletonScope();
	bind(MenuContribution).toService(LaTeXMenuContribution);

});
