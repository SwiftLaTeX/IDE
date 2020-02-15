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
import { interfaces } from 'inversify';
import { OnigScanner, OnigString } from 'onigasm';
import { IOnigLib } from 'vscode-textmate';
export declare function fetchOnigasm(): Promise<ArrayBuffer>;
export declare class OnigasmLib implements IOnigLib {
    createOnigScanner(sources: string[]): OnigScanner;
    createOnigString(sources: string): OnigString;
}
declare const _default: (bind: interfaces.Bind, unbind: interfaces.Unbind, isBound: interfaces.IsBound, rebind: interfaces.Rebind) => void;
export default _default;
//# sourceMappingURL=monaco-textmate-frontend-bindings.d.ts.map