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
import { ColorRegistry } from './color-registry';
import { Emitter } from '../common/event';
import { FrontendApplicationContribution } from './frontend-application';
import { ContributionProvider } from '../common/contribution-provider';
import { DisposableCollection } from '../common/disposable';
export declare const ColorContribution: unique symbol;
export interface ColorContribution {
    registerColors(colors: ColorRegistry): void;
}
export declare class ColorApplicationContribution implements FrontendApplicationContribution {
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: import("../common/event").Event<void>;
    protected readonly colors: ColorRegistry;
    protected readonly colorContributions: ContributionProvider<ColorContribution>;
    private static themeBackgroundId;
    onStart(): void;
    protected readonly toUpdate: DisposableCollection;
    protected update(): void;
    protected updateThemeBackground(): void;
    static initBackground(): void;
}
//# sourceMappingURL=color-application-contribution.d.ts.map