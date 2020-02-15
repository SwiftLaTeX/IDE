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
import URI from '@theia/core/lib/common/uri';
import { Emitter, Event } from '@theia/core/lib/common/event';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import { TaskCustomization, TaskConfiguration } from '../common/task-protocol';
import { PreferenceService } from '@theia/core/lib/browser/preferences/preference-service';
export declare class TaskConfigurationModel implements Disposable {
    readonly workspaceFolderUri: string;
    protected readonly preferences: PreferenceService;
    protected json: TaskConfigurationModel.JsonContent;
    protected readonly onDidChangeEmitter: Emitter<void>;
    readonly onDidChange: Event<void>;
    protected readonly toDispose: DisposableCollection;
    constructor(workspaceFolderUri: string, preferences: PreferenceService);
    get uri(): URI | undefined;
    dispose(): void;
    get onDispose(): Event<void>;
    get configurations(): (TaskCustomization | TaskConfiguration)[];
    protected reconcile(): void;
    setConfigurations(value: object): Promise<void>;
    protected parseConfigurations(): TaskConfigurationModel.JsonContent;
}
export declare namespace TaskConfigurationModel {
    interface JsonContent {
        uri?: URI;
        configurations: (TaskCustomization | TaskConfiguration)[];
    }
}
//# sourceMappingURL=task-configuration-model.d.ts.map