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
/// <reference types="@theia/monaco/src/typings/monaco" />
import '../../src/browser/style/index.css';
import '../../src/browser/style/symbol-sprite.svg';
import '../../src/browser/style/symbol-icons.css';
import { ContainerModule, interfaces } from 'inversify';
declare const _default: ContainerModule;
export default _default;
export declare const MonacoConfigurationService: unique symbol;
export declare function createMonacoConfigurationService(container: interfaces.Container): monaco.services.IConfigurationService;
//# sourceMappingURL=monaco-frontend-module.d.ts.map