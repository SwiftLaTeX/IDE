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
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { Theme } from '@theia/core/lib/browser/theming';
import { IconUrl } from '../../common/plugin-protocol';
import { Reference } from '@theia/core/lib/common/reference';
export interface PluginIconKey {
    url: IconUrl;
    size: number;
}
export interface PluginIcon extends Disposable {
    readonly iconClass: string;
}
export declare class PluginSharedStyle {
    protected style: HTMLStyleElement;
    protected readonly rules: {
        selector: string;
        body: (theme: Theme) => string;
    }[];
    constructor();
    protected readonly toUpdate: DisposableCollection;
    protected update(): void;
    insertRule(selector: string, body: (theme: Theme) => string): Disposable;
    protected doInsertRule({ selector, body }: {
        selector: string;
        body: (theme: Theme) => string;
    }): void;
    deleteRule(selector: string): void;
    private readonly icons;
    toIconClass(url: IconUrl, { size }?: {
        size: number;
    }): Reference<PluginIcon>;
    private iconSequence;
    protected createPluginIcon(key: PluginIconKey): PluginIcon;
}
//# sourceMappingURL=plugin-shared-style.d.ts.map