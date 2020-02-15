/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import { JSONValue } from '@phosphor/coreutils';
import { Configurations, ConfigurationChangeEvent, WorkspaceConfiguration } from 'monaco-languageclient';
import { Event, Emitter } from '@theia/core/lib/common';
import { PreferenceService, PreferenceChanges, PreferenceSchemaProvider } from '@theia/core/lib/browser';
export interface MonacoConfigurationChangeEvent extends ConfigurationChangeEvent {
    affectedSections?: string[];
}
export declare class MonacoConfigurations implements Configurations {
    protected readonly onDidChangeConfigurationEmitter: Emitter<MonacoConfigurationChangeEvent>;
    readonly onDidChangeConfiguration: Event<MonacoConfigurationChangeEvent>;
    protected readonly preferences: PreferenceService;
    protected readonly preferenceSchemaProvider: PreferenceSchemaProvider;
    protected init(): void;
    protected reconcileData(changes?: PreferenceChanges): void;
    protected affectsConfiguration(section: string, changes?: PreferenceChanges): boolean;
    getConfiguration(section?: string, resource?: string): WorkspaceConfiguration;
}
export declare namespace MonacoConfigurations {
    function parseSections(changes?: PreferenceChanges): string[] | undefined;
}
export declare class MonacoWorkspaceConfiguration implements WorkspaceConfiguration {
    protected readonly preferences: PreferenceService;
    protected readonly preferenceSchemaProvider: PreferenceSchemaProvider;
    protected readonly section?: string | undefined;
    protected readonly resource?: string | undefined;
    constructor(preferences: PreferenceService, preferenceSchemaProvider: PreferenceSchemaProvider, section?: string | undefined, resource?: string | undefined);
    readonly [key: string]: any;
    protected getSection(section: string): string;
    has(section: string): boolean;
    get<T>(section: string, defaultValue?: T): T | undefined;
    toJSON(): JSONValue | undefined;
}
//# sourceMappingURL=monaco-configurations.d.ts.map