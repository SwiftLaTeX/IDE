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
import { Container, interfaces } from 'inversify';
import { TreeProps } from '@theia/core/lib/browser';
import { FileNavigatorWidget } from './navigator-widget';
export declare const FILE_NAVIGATOR_PROPS: TreeProps;
export declare function createFileNavigatorContainer(parent: interfaces.Container): Container;
export declare function createFileNavigatorWidget(parent: interfaces.Container): FileNavigatorWidget;
//# sourceMappingURL=navigator-container.d.ts.map