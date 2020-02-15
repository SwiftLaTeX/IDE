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
import * as React from 'react';
import { Message } from '@phosphor/messaging';
import { CommandRegistry } from '@theia/core/lib/common/command';
import { MenuModelRegistry, ActionMenuNode, CompositeMenuNode, MenuPath } from '@theia/core/lib/common/menu';
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import { ContextMenuRenderer, StorageService, ReactWidget, LabelProvider, KeybindingRegistry, StatefulWidget, CorePreferences } from '@theia/core/lib/browser';
import { EditorManager, DiffNavigatorProvider, EditorWidget } from '@theia/editor/lib/browser';
import { ScmAvatarService } from './scm-avatar-service';
import { ScmContextKeyService } from './scm-context-key-service';
import { ScmService } from './scm-service';
import { ScmInput } from './scm-input';
import { ScmRepository } from './scm-repository';
import { ScmResource, ScmResourceGroup } from './scm-provider';
export declare class ScmWidget extends ReactWidget implements StatefulWidget {
    static ID: string;
    static RESOURCE_GROUP_CONTEXT_MENU: string[];
    static RESOURCE_GROUP_INLINE_MENU: string[];
    static RESOURCE_INLINE_MENU: string[];
    static RESOURCE_CONTEXT_MENU: string[];
    protected readonly corePreferences: CorePreferences;
    protected readonly scmService: ScmService;
    protected readonly commands: CommandRegistry;
    protected readonly keybindings: KeybindingRegistry;
    protected readonly menus: MenuModelRegistry;
    protected readonly contextKeys: ScmContextKeyService;
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    protected readonly avatarService: ScmAvatarService;
    protected readonly storageService: StorageService;
    protected readonly labelProvider: LabelProvider;
    protected readonly editorManager: EditorManager;
    protected readonly diffNavigatorProvider: DiffNavigatorProvider;
    protected _scrollContainer: string;
    protected set scrollContainer(id: string);
    protected get scrollContainer(): string;
    /** don't modify DOM use React! only exposed for `focusInput` */
    protected readonly inputRef: React.RefObject<HTMLTextAreaElement>;
    constructor();
    protected init(): void;
    protected readonly toDisposeOnRefresh: DisposableCollection;
    protected refresh(): void;
    protected onActivateRequest(msg: Message): void;
    protected onAfterShow(msg: Message): void;
    protected updateImmediately(): void;
    protected onUpdateRequest(msg: Message): void;
    protected addScmListKeyListeners: (id: string) => void;
    protected render(): React.ReactNode;
    protected renderInput(input: ScmInput, repository: ScmRepository): React.ReactNode;
    protected focusInput(): void;
    protected setInputValue: (event: string | React.FormEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    protected acceptInput: () => Promise<unknown>;
    protected addScmListNavigationKeyListeners(container: HTMLElement): void;
    protected openPreviousChange(): Promise<void>;
    protected openNextChange(): Promise<void>;
    protected openResource(resource: ScmResource): Promise<EditorWidget | undefined>;
    protected selectPreviousResource(): ScmResource | undefined;
    protected selectNextResource(): ScmResource | undefined;
    protected openSelected(): void;
    storeState(): any;
    restoreState(oldState: any): void;
}
export declare namespace ScmWidget {
    namespace Styles {
        const MAIN_CONTAINER = "theia-scm-main-container";
        const PROVIDER_CONTAINER = "theia-scm-provider-container";
        const PROVIDER_NAME = "theia-scm-provider-name";
        const GROUPS_CONTAINER = "groups-outer-container";
        const INPUT_MESSAGE_CONTAINER = "theia-scm-input-message-container";
        const INPUT_MESSAGE = "theia-scm-input-message";
        const VALIDATION_MESSAGE = "theia-scm-input-validation-message";
        const NO_SELECT = "no-select";
    }
    interface Props {
        repository: ScmRepository;
        commands: CommandRegistry;
        menus: MenuModelRegistry;
        contextKeys: ScmContextKeyService;
        labelProvider: LabelProvider;
        contextMenuRenderer: ContextMenuRenderer;
        corePreferences?: CorePreferences;
    }
}
export declare abstract class ScmElement<P extends ScmElement.Props = ScmElement.Props> extends React.Component<P, ScmElement.State> {
    constructor(props: P);
    protected readonly toDisposeOnUnmount: DisposableCollection;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected detectHover: (element: HTMLElement | null) => void;
    protected showHover: () => void;
    protected hideHover: () => void;
    protected renderContextMenu: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    protected abstract get contextMenuPath(): MenuPath;
    protected abstract get contextMenuArgs(): any[];
}
export declare namespace ScmElement {
    interface Props extends ScmWidget.Props {
        group: ScmResourceGroup;
    }
    interface State {
        hover: boolean;
    }
}
export declare class ScmResourceComponent extends ScmElement<ScmResourceComponent.Props> {
    render(): JSX.Element | undefined;
    protected open: () => Promise<void>;
    protected selectChange: () => ScmResource;
    protected readonly contextMenuPath: string[];
    protected get contextMenuArgs(): any[];
    /**
     * Handle the single clicking of nodes present in the widget.
     */
    protected handleClick: () => void;
    /**
     * Handle the double clicking of nodes present in the widget.
     */
    protected handleDoubleClick: () => void;
}
export declare namespace ScmResourceComponent {
    interface Props extends ScmElement.Props {
        name: string;
        resource: ScmResource;
    }
}
export declare class ScmResourceGroupsContainer extends React.Component<ScmResourceGroupsContainer.Props> {
    render(): JSX.Element;
    protected select: () => void;
    protected renderGroup(group: ScmResourceGroup): React.ReactNode;
    componentDidMount(): void;
}
export declare namespace ScmResourceGroupsContainer {
    interface Props extends ScmWidget.Props {
        id: string;
        style?: React.CSSProperties;
        addScmListKeyListeners: (id: string) => void;
    }
}
export declare class ScmResourceGroupContainer extends ScmElement {
    render(): JSX.Element;
    protected renderChangeCount(): React.ReactNode;
    protected renderScmResourceItem(resource: ScmResource): React.ReactNode;
    protected readonly contextMenuPath: string[];
    protected get contextMenuArgs(): any[];
}
export declare class ScmInlineActions extends React.Component<ScmInlineActions.Props> {
    render(): React.ReactNode;
}
export declare namespace ScmInlineActions {
    interface Props {
        hover: boolean;
        menu: CompositeMenuNode;
        commands: CommandRegistry;
        group: ScmResourceGroup;
        contextKeys: ScmContextKeyService;
        args: any[];
        children?: React.ReactNode;
    }
}
export declare class ScmInlineAction extends React.Component<ScmInlineAction.Props> {
    render(): React.ReactNode;
    protected execute: (event: React.MouseEvent<Element, MouseEvent>) => void;
}
export declare namespace ScmInlineAction {
    interface Props {
        node: ActionMenuNode;
        commands: CommandRegistry;
        group: ScmResourceGroup;
        contextKeys: ScmContextKeyService;
        args: any[];
    }
}
//# sourceMappingURL=scm-widget.d.ts.map