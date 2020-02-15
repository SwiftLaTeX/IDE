/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
import { DefaultUriLabelProviderContribution, DidChangeLabelEvent } from '@theia/core/lib/browser/label-provider';
import URI from '@theia/core/lib/common/uri';
import { Emitter, Event } from '@theia/core';
export declare class SampleDynamicLabelProviderContribution extends DefaultUriLabelProviderContribution {
    protected isActive: boolean;
    constructor();
    canHandle(element: object): number;
    toggle(): void;
    private fireLabelsDidChange;
    protected getUri(element: URI): URI;
    getIcon(element: URI): string;
    protected readonly onDidChangeEmitter: Emitter<DidChangeLabelEvent>;
    private x;
    getName(element: URI): string | undefined;
    getLongName(element: URI): string | undefined;
    get onDidChange(): Event<DidChangeLabelEvent>;
}
//# sourceMappingURL=sample-dynamic-label-provider-contribution.d.ts.map