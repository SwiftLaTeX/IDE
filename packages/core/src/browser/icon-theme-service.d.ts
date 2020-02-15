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
import { Emitter } from '../common/event';
import { Disposable, DisposableCollection } from '../common/disposable';
import { LabelProviderContribution, DidChangeLabelEvent } from './label-provider';
export interface IconThemeDefinition {
    readonly id: string;
    readonly label: string;
    readonly description?: string;
    readonly hasFileIcons?: boolean;
    readonly hasFolderIcons?: boolean;
    readonly hidesExplorerArrows?: boolean;
}
export interface IconTheme extends IconThemeDefinition {
    activate(): Disposable;
}
export declare class NoneIconTheme implements IconTheme, LabelProviderContribution {
    readonly id = "none";
    readonly label = "None";
    readonly description = "Disable file icons";
    readonly hasFileIcons = true;
    readonly hasFolderIcons = true;
    protected readonly onDidChangeEmitter: Emitter<DidChangeLabelEvent>;
    readonly onDidChange: import("../common/event").Event<DidChangeLabelEvent>;
    protected readonly toDeactivate: DisposableCollection;
    activate(): Disposable;
    protected fireDidChange(): void;
    canHandle(): number;
    getIcon(): string;
}
export declare class IconThemeService {
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: import("../common/event").Event<void>;
    protected readonly _iconThemes: Map<string, IconTheme>;
    get ids(): IterableIterator<string>;
    get definitions(): IterableIterator<IconThemeDefinition>;
    getDefinition(id: string): IconThemeDefinition | undefined;
    protected readonly noneIconTheme: NoneIconTheme;
    protected readonly onDidChangeCurrentEmitter: Emitter<string>;
    readonly onDidChangeCurrent: import("../common/event").Event<string>;
    protected _default: IconTheme;
    protected readonly toDeactivate: DisposableCollection;
    protected init(): void;
    register(iconTheme: IconTheme): Disposable;
    unregister(id: string): IconTheme | undefined;
    get current(): string;
    set current(id: string);
    protected getCurrent(): IconTheme;
    protected setCurrent(current: IconTheme): void;
    get default(): string;
    set default(id: string);
    protected load(): string | undefined;
}
//# sourceMappingURL=icon-theme-service.d.ts.map