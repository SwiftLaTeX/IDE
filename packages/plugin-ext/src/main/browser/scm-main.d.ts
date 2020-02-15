/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import { ScmExt, SourceControlGroupFeatures, ScmMain, SourceControlProviderFeatures, SourceControlResourceState } from '../../common/plugin-api-rpc';
import { ScmProvider, ScmResource, ScmResourceDecorations, ScmResourceGroup, ScmCommand } from '@theia/scm/lib/browser/scm-provider';
import { ScmRepository } from '@theia/scm/lib/browser/scm-repository';
import { RPCProtocol } from '../../common/rpc-protocol';
import { interfaces } from 'inversify';
import { Event } from '@theia/core/lib/common/event';
import { Disposable } from '@theia/core/lib/common/disposable';
import URI from '@theia/core/lib/common/uri';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
export declare class ScmMainImpl implements ScmMain, Disposable {
    private readonly proxy;
    private readonly scmService;
    private readonly scmRepositoryMap;
    private readonly colors;
    private lastSelectedSourceControlHandle;
    private readonly toDispose;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    protected updateSelectedRepository(repository: ScmRepository | undefined): void;
    protected getSourceControlHandle(repository: ScmRepository): number | undefined;
    $registerSourceControl(sourceControlHandle: number, id: string, label: string, rootUri: string): Promise<void>;
    $updateSourceControl(sourceControlHandle: number, features: SourceControlProviderFeatures): Promise<void>;
    $unregisterSourceControl(sourceControlHandle: number): Promise<void>;
    $setInputBoxPlaceholder(sourceControlHandle: number, placeholder: string): Promise<void>;
    $setInputBoxValue(sourceControlHandle: number, value: string): Promise<void>;
    $registerGroup(sourceControlHandle: number, groupHandle: number, id: string, label: string): Promise<void>;
    $unregisterGroup(sourceControlHandle: number, groupHandle: number): Promise<void>;
    $updateGroup(sourceControlHandle: number, groupHandle: number, features: SourceControlGroupFeatures): Promise<void>;
    $updateGroupLabel(sourceControlHandle: number, groupHandle: number, label: string): Promise<void>;
    $updateResourceState(sourceControlHandle: number, groupHandle: number, resources: SourceControlResourceState[]): Promise<void>;
}
export declare class PluginScmProvider implements ScmProvider {
    private readonly proxy;
    readonly handle: number;
    readonly id: string;
    readonly label: string;
    readonly rootUri: string;
    protected readonly colors: ColorRegistry;
    private onDidChangeEmitter;
    private onDidChangeCommitTemplateEmitter;
    private onDidChangeStatusBarCommandsEmitter;
    private features;
    private groupsMap;
    private disposableCollection;
    constructor(proxy: ScmExt, handle: number, id: string, label: string, rootUri: string, colors: ColorRegistry);
    protected fireDidChange(): void;
    get groups(): ScmResourceGroup[];
    get commitTemplate(): string | undefined;
    get acceptInputCommand(): ScmCommand | undefined;
    get statusBarCommands(): ScmCommand[] | undefined;
    get count(): number | undefined;
    get onDidChangeCommitTemplate(): Event<string>;
    get onDidChangeStatusBarCommands(): Event<ScmCommand[] | undefined>;
    get onDidChange(): Event<void>;
    dispose(): void;
    updateSourceControl(features: SourceControlProviderFeatures): void;
    getOriginalResource(uri: URI): Promise<URI | undefined>;
    registerGroup(groupHandle: number, id: string, label: string): void;
    unregisterGroup(groupHandle: number): void;
    updateGroup(groupHandle: number, features: SourceControlGroupFeatures): void;
    updateGroupLabel(groupHandle: number, label: string): void;
    updateGroupResourceStates(sourceControlHandle: number, groupHandle: number, resources: SourceControlResourceState[]): Promise<void>;
}
export declare class PluginScmResourceGroup implements ScmResourceGroup {
    readonly handle: number;
    provider: PluginScmProvider;
    features: SourceControlGroupFeatures;
    label: string;
    readonly id: string;
    private _resources;
    constructor(handle: number, provider: PluginScmProvider, features: SourceControlGroupFeatures, label: string, id: string);
    get resources(): PluginScmResource[];
    get hideWhenEmpty(): boolean | undefined;
    updateGroup(features: SourceControlGroupFeatures): void;
    updateGroupLabel(label: string): void;
    updateResources(resources: PluginScmResource[]): void;
    dispose(): void;
}
export declare class PluginScmResource implements ScmResource {
    private proxy;
    readonly handle: number;
    readonly group: PluginScmResourceGroup;
    sourceUri: URI;
    resourceGroup: ScmResourceGroup;
    decorations?: ScmResourceDecorations | undefined;
    constructor(proxy: ScmExt, handle: number, group: PluginScmResourceGroup, sourceUri: URI, resourceGroup: ScmResourceGroup, decorations?: ScmResourceDecorations | undefined);
    open(): Promise<void>;
}
//# sourceMappingURL=scm-main.d.ts.map