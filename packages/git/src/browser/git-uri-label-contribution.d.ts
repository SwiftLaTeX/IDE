/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { LabelProviderContribution, LabelProvider, DidChangeLabelEvent } from '@theia/core/lib/browser/label-provider';
import URI from '@theia/core/lib/common/uri';
export declare class GitUriLabelProviderContribution implements LabelProviderContribution {
    protected labelProvider: LabelProvider;
    constructor(labelProvider: LabelProvider);
    canHandle(element: object): number;
    getLongName(uri: URI): string;
    getName(uri: URI): string;
    getIcon(uri: URI): string;
    affects(uri: URI, event: DidChangeLabelEvent): boolean;
    protected toFileUri(uri: URI): URI;
    protected getTagSuffix(uri: URI): string;
}
//# sourceMappingURL=git-uri-label-contribution.d.ts.map