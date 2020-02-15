/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { MessageService } from '@theia/core/lib/common/message-service';
import { PreferenceProvider, PreferenceSchemaProvider, PreferenceScope, PreferenceService } from '@theia/core/lib/browser';
import URI from '@theia/core/lib/common/uri';
import { PreferenceConfigurations } from '@theia/core/lib/browser/preferences/preference-configurations';
import { MonacoTextModelService } from '@theia/monaco/lib/browser/monaco-text-model-service';
import { MonacoEditorModel } from '@theia/monaco/lib/browser/monaco-editor-model';
import { MonacoWorkspace } from '@theia/monaco/lib/browser/monaco-workspace';
import { Deferred } from '@theia/core/lib/common/promise-util';
export declare abstract class AbstractResourcePreferenceProvider extends PreferenceProvider {
    protected preferences: {
        [key: string]: any;
    };
    protected model: MonacoEditorModel | undefined;
    protected readonly loading: Deferred<unknown>;
    protected readonly preferenceService: PreferenceService;
    protected readonly messageService: MessageService;
    protected readonly schemaProvider: PreferenceSchemaProvider;
    protected readonly configurations: PreferenceConfigurations;
    protected readonly textModelService: MonacoTextModelService;
    protected readonly workspace: MonacoWorkspace;
    protected init(): Promise<void>;
    protected abstract getUri(): URI;
    protected abstract getScope(): PreferenceScope;
    protected get valid(): boolean;
    getConfigUri(): URI;
    getConfigUri(resourceUri: string | undefined): URI | undefined;
    contains(resourceUri: string | undefined): boolean;
    getPreferences(resourceUri?: string): {
        [key: string]: any;
    };
    setPreference(key: string, value: any, resourceUri?: string): Promise<boolean>;
    protected getPath(preferenceName: string): string[] | undefined;
    /**
     * It HAS to be sync to ensure that `setPreference` returns only when values are updated
     * or any other operation modifying the monaco model content.
     */
    protected readPreferences(): void;
    protected getParsedContent(content: string): {
        [key: string]: any;
    };
    protected parse(content: string): any;
    protected handlePreferenceChanges(newPrefs: {
        [key: string]: any;
    }): void;
    protected reset(): void;
}
//# sourceMappingURL=abstract-resource-preference-provider.d.ts.map