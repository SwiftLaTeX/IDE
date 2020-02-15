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
import * as theia from '@theia/plugin';
import { Event, Emitter } from '@theia/core/lib/common/event';
import { RPCProtocol } from '../../common/rpc-protocol';
import { LanguagesMain } from '../../common/plugin-api-rpc';
import URI from 'vscode-uri';
export declare class DiagnosticCollection implements theia.DiagnosticCollection {
    private static DIAGNOSTICS_PRIORITY;
    private collectionName;
    private diagnosticsLimitPerResource;
    private proxy;
    private onDidChangeDiagnosticsEmitter;
    private diagnostics;
    private isDisposed;
    private onDisposeCallback;
    constructor(name: string, maxCountPerFile: number, proxy: LanguagesMain, onDidChangeDiagnosticsEmitter: Emitter<theia.DiagnosticChangeEvent>);
    get name(): string;
    set(uri: theia.Uri, diagnostics: theia.Diagnostic[] | undefined): void;
    set(entries: [theia.Uri, theia.Diagnostic[] | undefined][]): void;
    private setDiagnosticsForUri;
    private setDiagnostics;
    delete(uri: URI): void;
    clear(): void;
    forEach(callback: (uri: URI, diagnostics: theia.Diagnostic[], collection: theia.DiagnosticCollection) => any, thisArg?: any): void;
    get(uri: URI): theia.Diagnostic[] | undefined;
    has(uri: URI): boolean;
    dispose(): void;
    setOnDisposeCallback(onDisposeCallback: (() => void) | undefined): void;
    private ensureNotDisposed;
    private getAllResourcesUris;
    private getDiagnosticsByUri;
    private fireDiagnosticChangeEvent;
    private toUrisArray;
    private sendChangesToEditor;
}
export declare class Diagnostics {
    static MAX_DIAGNOSTICS_PER_FILE: number;
    private static GENERATED_DIAGNOSTIC_COLLECTION_NAME_PREFIX;
    private proxy;
    private diagnosticCollections;
    private diagnosticsChangedEmitter;
    readonly onDidChangeDiagnostics: Event<theia.DiagnosticChangeEvent>;
    constructor(rpc: RPCProtocol);
    getDiagnostics(resource: theia.Uri): theia.Diagnostic[];
    getDiagnostics(): [theia.Uri, theia.Diagnostic[]][];
    createDiagnosticCollection(name?: string): theia.DiagnosticCollection;
    private getNextId;
    private getAllDiagnisticsForResource;
    private getAllDiagnostics;
}
//# sourceMappingURL=diagnostics.d.ts.map