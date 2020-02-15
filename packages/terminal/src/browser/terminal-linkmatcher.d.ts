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
import { TerminalContribution } from './terminal-contribution';
import { TerminalWidgetImpl } from './terminal-widget-impl';
import { OpenerService } from '@theia/core/lib/browser/opener-service';
export declare abstract class AbstractCmdClickTerminalContribution implements TerminalContribution {
    abstract getRegExp(terminalWidget: TerminalWidgetImpl): Promise<RegExp>;
    abstract getHandler(terminalWidget: TerminalWidgetImpl): (event: MouseEvent, text: string) => void;
    getValidate(terminalWidget: TerminalWidgetImpl): (text: string) => Promise<boolean>;
    onCreate(terminalWidget: TerminalWidgetImpl): Promise<void>;
    protected isCommandPressed(event: MouseEvent): boolean;
    protected wasTouchEvent(event: MouseEvent, lastTouchEnd: TouchEvent | undefined): boolean;
    protected getHoverMessage(): string;
}
export declare class URLMatcher extends AbstractCmdClickTerminalContribution {
    protected readonly openerService: OpenerService;
    getRegExp(): Promise<RegExp>;
    getHandler(): (event: MouseEvent, uri: string) => void;
}
export declare class LocalhostMatcher extends AbstractCmdClickTerminalContribution {
    protected readonly openerService: OpenerService;
    getRegExp(): Promise<RegExp>;
    getHandler(): (event: MouseEvent, uri: string) => void;
}
//# sourceMappingURL=terminal-linkmatcher.d.ts.map