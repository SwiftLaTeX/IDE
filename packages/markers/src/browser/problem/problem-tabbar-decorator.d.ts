/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { Diagnostic } from 'vscode-languageserver-types';
import { Event, Emitter } from '@theia/core/lib/common/event';
import { Title, Widget } from '@phosphor/widgets';
import { WidgetDecoration } from '@theia/core/lib/browser/widget-decoration';
import { TabBarDecorator } from '@theia/core/lib/browser/shell/tab-bar-decorator';
import { Marker } from '../../common/marker';
import { ProblemManager } from './problem-manager';
import { ProblemPreferences, ProblemConfiguration } from './problem-preferences';
import { PreferenceChangeEvent } from '@theia/core/lib/browser';
export declare class ProblemTabBarDecorator implements TabBarDecorator {
    readonly id = "theia-problem-tabbar-decorator";
    protected readonly emitter: Emitter<void>;
    protected readonly preferences: ProblemPreferences;
    protected readonly problemManager: ProblemManager;
    protected init(): void;
    decorate(title: Title<Widget>): WidgetDecoration.Data[];
    get onDidChangeDecorations(): Event<void>;
    protected fireDidChangeDecorations(): void;
    /**
     * Handle changes in preference.
     * @param {PreferenceChangeEvent<ProblemConfiguration>} event The event of the changes in preference.
     */
    protected handlePreferenceChange(event: PreferenceChangeEvent<ProblemConfiguration>): Promise<void>;
    /**
     * Convert a diagnostic marker to a decorator.
     * @param {Marker<Diagnostic>} marker A diagnostic marker.
     * @returns {WidgetDecoration.Data} The decoration data.
     */
    protected toDecorator(marker: Marker<Diagnostic>): WidgetDecoration.Data;
    /**
     * Get the appropriate overlay icon for decoration.
     * @param {Marker<Diagnostic>} marker A diagnostic marker.
     * @returns {string} A string representing the overlay icon class.
     */
    protected getOverlayIcon(marker: Marker<Diagnostic>): string;
    /**
     * Get the appropriate overlay icon color for decoration.
     * @param {Marker<Diagnostic>} marker A diagnostic marker.
     * @returns {WidgetDecoration.Color} The decoration color.
     */
    protected getOverlayIconColor(marker: Marker<Diagnostic>): WidgetDecoration.Color;
}
//# sourceMappingURL=problem-tabbar-decorator.d.ts.map