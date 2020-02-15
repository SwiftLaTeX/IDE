/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { InputBoxOptions, QuickPickItem as QuickPickItemExt } from '@theia/plugin';
import { interfaces } from 'inversify';
import { QuickOpenModel, QuickOpenItem } from '@theia/core/lib/browser/quick-open/quick-open-model';
import { RPCProtocol } from '../../common/rpc-protocol';
import { QuickOpenMain, PickOptions, PickOpenItem, TransferInputBox, QuickInputTitleButtonHandle, TransferQuickPick } from '../../common/plugin-api-rpc';
import { QuickInputButton } from '../../plugin/types-impl';
import { DisposableCollection, Disposable } from '@theia/core/lib/common/disposable';
export declare class QuickOpenMainImpl implements QuickOpenMain, QuickOpenModel, Disposable {
    private quickInput;
    private quickPick;
    private quickTitleBar;
    private doResolve;
    private proxy;
    private delegate;
    private acceptor;
    private items;
    private readonly sharedStyle;
    private readonly labelProvider;
    private activeElement;
    protected readonly toDispose: DisposableCollection;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    private cleanUp;
    $show(options: PickOptions): Promise<number | number[]>;
    $setItems(items: PickOpenItem[]): Promise<any>;
    private convertPickOpenItemToQuickOpenItem;
    $setError(error: Error): Promise<any>;
    $input(options: InputBoxOptions, validateInput: boolean): Promise<string | undefined>;
    protected convertQuickInputButton(quickInputButton: QuickInputButton, index: number, toDispose: DisposableCollection): QuickInputTitleButtonHandle;
    private resolveIconClassFromThemeIcon;
    $showInputBox(inputBox: TransferInputBox, validateInput: boolean): Promise<void>;
    private findChangedKey;
    $setQuickInputChanged(changed: any): void;
    $refreshQuickInput(): void;
    $showCustomQuickPick<T extends QuickPickItemExt>(options: TransferQuickPick<T>): Promise<void>;
    onType(lookFor: string, acceptor: (items: QuickOpenItem[]) => void): void;
    $hide(): void;
}
//# sourceMappingURL=quick-open-main.d.ts.map