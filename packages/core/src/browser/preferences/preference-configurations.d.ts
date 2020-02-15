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
import { interfaces } from 'inversify';
import URI from '../../common/uri';
import { ContributionProvider } from '../../common/contribution-provider';
export declare const PreferenceConfiguration: unique symbol;
export interface PreferenceConfiguration {
    name: string;
}
export declare function bindPreferenceConfigurations(bind: interfaces.Bind): void;
export declare class PreferenceConfigurations {
    protected readonly provider: ContributionProvider<PreferenceConfiguration>;
    getPaths(): string[];
    getConfigName(): string;
    protected sectionNames: string[] | undefined;
    getSectionNames(): string[];
    isSectionName(name: string): boolean;
    isSectionUri(configUri: URI | undefined): boolean;
    isConfigUri(configUri: URI | undefined): boolean;
    getName(configUri: URI): string;
    getPath(configUri: URI): string;
    createUri(folder: URI, configPath?: string, configName?: string): URI;
}
//# sourceMappingURL=preference-configurations.d.ts.map