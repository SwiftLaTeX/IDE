/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { ApplicationServer } from '@theia/core/lib/common/application-protocol';
import { OS } from '@theia/core/lib/common';
import { OpenerService } from '@theia/core/lib/browser';
import { Position } from '@theia/editor/lib/browser';
import { AbstractCmdClickTerminalContribution } from './terminal-linkmatcher';
import { TerminalWidgetImpl } from './terminal-widget-impl';
import { FileSystem } from '@theia/filesystem/lib/common';
import URI from '@theia/core/lib/common/uri';
export declare class TerminalLinkmatcherFiles extends AbstractCmdClickTerminalContribution {
    protected appServer: ApplicationServer;
    protected openerService: OpenerService;
    protected fileSystem: FileSystem;
    protected backendOs: Promise<OS.Type>;
    protected init(): void;
    getRegExp(): Promise<RegExp>;
    getValidate(terminalWidget: TerminalWidgetImpl): (link: string) => Promise<boolean>;
    getHandler(terminalWidget: TerminalWidgetImpl): (event: MouseEvent, link: string) => void;
    protected toURI(match: string, cwd: URI): Promise<URI | undefined>;
    protected extractPosition(link: string): Promise<Position>;
    protected extractPath(link: string): Promise<string | undefined>;
}
//# sourceMappingURL=terminal-linkmatcher-files.d.ts.map