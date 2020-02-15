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
import { ContainerModule, interfaces } from 'inversify';
import { IBaseTerminalServer } from '../common/base-terminal-protocol';
export declare function bindTerminalServer(bind: interfaces.Bind, { path, identifier, constructor }: {
    path: string;
    identifier: interfaces.ServiceIdentifier<IBaseTerminalServer>;
    constructor: {
        new (...args: any[]): IBaseTerminalServer;
    };
}): void;
declare const _default: ContainerModule;
export default _default;
//# sourceMappingURL=terminal-backend-module.d.ts.map