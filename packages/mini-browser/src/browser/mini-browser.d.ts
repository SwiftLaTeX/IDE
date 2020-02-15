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
import { Message } from '@phosphor/messaging';
import URI from '@theia/core/lib/common/uri';
import { NavigatableWidget, StatefulWidget } from '@theia/core/lib/browser';
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import { BaseWidget } from '@theia/core/lib/browser/widgets/widget';
import { MiniBrowserProps, MiniBrowserContentFactory } from './mini-browser-content';
export { MiniBrowserProps };
export declare class MiniBrowserOptions {
    uri: URI;
}
export declare class MiniBrowser extends BaseWidget implements NavigatableWidget, StatefulWidget {
    static ID: string;
    static ICON: string;
    protected readonly options: MiniBrowserOptions;
    protected readonly createContent: MiniBrowserContentFactory;
    protected init(): void;
    getResourceUri(): URI | undefined;
    createMoveToUri(resourceUri: URI): URI | undefined;
    protected props: MiniBrowserProps | undefined;
    protected readonly toDisposeOnProps: DisposableCollection;
    setProps(raw: MiniBrowserProps): void;
    protected onActivateRequest(msg: Message): void;
    storeState(): object;
    restoreState(oldState: object): void;
}
//# sourceMappingURL=mini-browser.d.ts.map