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
import { PluginDeployerEntry, PluginDeployerEntryType } from '../../common/plugin-protocol';
export declare class PluginDeployerEntryImpl implements PluginDeployerEntry {
    readonly originId: string;
    readonly pluginId: string;
    private initPath;
    private currentPath;
    private map;
    private resolved;
    private acceptedTypes;
    private changes;
    private resolvedByName;
    constructor(originId: string, pluginId: string, initPath?: string);
    id(): string;
    originalPath(): string;
    path(): string;
    getValue<T>(key: string): T;
    storeValue<T>(key: string, value: T): void;
    updatePath(newPath: string, transformerName?: string): void;
    getChanges(): string[];
    isFile(): boolean;
    isDirectory(): boolean;
    hasError(): boolean;
    isResolved(): boolean;
    accept(...types: PluginDeployerEntryType[]): void;
    isAccepted(...types: PluginDeployerEntryType[]): boolean;
    setResolvedBy(name: string): void;
    resolvedBy(): string;
}
//# sourceMappingURL=plugin-deployer-entry-impl.d.ts.map