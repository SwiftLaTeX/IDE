/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import * as theia from '@theia/plugin';
import { ThemeColor, StatusBarAlignment } from '../types-impl';
import { StatusBarMessageRegistryMain } from '../../common/plugin-api-rpc';
export declare class StatusBarItemImpl implements theia.StatusBarItem {
    private readonly id;
    private _alignment;
    private _priority;
    private _text;
    private _tooltip;
    private _color;
    private _command;
    private _isVisible;
    private _timeoutHandle;
    _proxy: StatusBarMessageRegistryMain;
    constructor(_proxy: StatusBarMessageRegistryMain, alignment?: StatusBarAlignment, priority?: number);
    get alignment(): theia.StatusBarAlignment;
    get priority(): number;
    get text(): string;
    get tooltip(): string;
    get color(): string | ThemeColor;
    get command(): string;
    set text(text: string);
    set tooltip(tooltip: string);
    set color(color: string | ThemeColor);
    set command(command: string);
    show(): void;
    hide(): void;
    private update;
    dispose(): void;
    static nextId(): string;
    static ID_PREFIX: string;
}
//# sourceMappingURL=status-bar-item.d.ts.map