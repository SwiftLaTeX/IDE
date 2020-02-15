/********************************************************************************
 * Copyright (C) 2015-2018 Red Hat, Inc.
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
import { PluginEngine, PluginModel, PluginPackage, PluginScanner, PluginLifecycle, PluginContribution, SnippetContribution, PluginPackageCommand, PluginCommand, ThemeContribution, IconThemeContribution } from '../../../common/plugin-protocol';
import { IJSONSchema } from '@theia/core/lib/common/json-schema';
import { ColorDefinition } from '@theia/core/lib/browser/color-registry';
export declare class TheiaPluginScanner implements PluginScanner {
    private readonly _apiType;
    private readonly grammarsReader;
    get apiType(): PluginEngine;
    getModel(plugin: PluginPackage): PluginModel;
    getLifecycle(plugin: PluginPackage): PluginLifecycle;
    getDependencies(rawPlugin: PluginPackage): Map<string, string> | undefined;
    getContribution(rawPlugin: PluginPackage): PluginContribution | undefined;
    protected readCommand({ command, title, category, icon }: PluginPackageCommand, pck: PluginPackage): PluginCommand;
    protected toPluginUrl(pck: PluginPackage, relativePath: string): string;
    protected readColors(pck: PluginPackage): ColorDefinition[] | undefined;
    protected readThemes(pck: PluginPackage): ThemeContribution[] | undefined;
    protected readIconThemes(pck: PluginPackage): IconThemeContribution[] | undefined;
    protected readSnippets(pck: PluginPackage): SnippetContribution[] | undefined;
    protected readJson<T>(filePath: string): T | undefined;
    protected readFileSync(filePath: string): string;
    private readConfiguration;
    private readKeybinding;
    private readViewsContainers;
    private readViewContainer;
    private readViews;
    private readView;
    private readMenus;
    private readMenu;
    private readLanguages;
    private readLanguage;
    private readDebuggers;
    private readDebugger;
    private readTaskDefinition;
    protected resolveSchemaAttributes(type: string, configurationAttributes: {
        [request: string]: IJSONSchema;
    }): IJSONSchema[];
    private extractValidAutoClosingPairs;
    private extractValidSurroundingPairs;
}
//# sourceMappingURL=scanner-theia.d.ts.map