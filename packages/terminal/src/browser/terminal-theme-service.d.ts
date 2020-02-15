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
import * as Xterm from 'xterm';
import { ColorRegistry, ColorDefaults } from '@theia/core/lib/browser/color-registry';
/**
 * It should be aligned with https://github.com/microsoft/vscode/blob/0dfa355b3ad185a6289ba28a99c141ab9e72d2be/src/vs/workbench/contrib/terminal/common/terminalColorRegistry.ts#L40
 */
export declare const terminalAnsiColorMap: {
    [key: string]: {
        index: number;
        defaults: ColorDefaults;
    };
};
export declare class TerminalThemeService {
    protected readonly colorRegistry: ColorRegistry;
    readonly onDidChange: import("@theia/core/src/common").Event<import("@theia/core/src/browser/theming").ThemeChangeEvent>;
    get theme(): Xterm.ITheme;
}
//# sourceMappingURL=terminal-theme-service.d.ts.map