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
import { Event, Emitter } from '@theia/core/lib/common';
import URI from '@theia/core/lib/common/uri';
import { FileSystemWatcher, FileChangeEvent } from '@theia/filesystem/lib/browser/filesystem-watcher';
import { Marker } from '../common/marker';
export interface SearchFilter<D> {
    uri?: URI;
    owner?: string;
    dataFilter?: (data: D) => boolean;
}
export declare class MarkerCollection<T> {
    readonly uri: URI;
    readonly kind: string;
    protected readonly owner2Markers: Map<string, Readonly<Marker<T>>[]>;
    constructor(uri: URI, kind: string);
    get empty(): boolean;
    getOwners(): string[];
    getMarkers(owner: string): Readonly<Marker<T>>[];
    setMarkers(owner: string, markerData: T[]): Marker<T>[];
    protected createMarker(owner: string, data: T): Readonly<Marker<T>>;
    findMarkers(filter: SearchFilter<T>): Marker<T>[];
    protected filterMarkers(filter: SearchFilter<T>, toFilter?: Marker<T>[]): Marker<T>[];
}
export interface Uri2MarkerEntry {
    uri: string;
    markers: Owner2MarkerEntry[];
}
export interface Owner2MarkerEntry {
    owner: string;
    markerData: object[];
}
export declare abstract class MarkerManager<D extends object> {
    abstract getKind(): string;
    protected readonly uri2MarkerCollection: Map<string, MarkerCollection<D>>;
    protected readonly onDidChangeMarkersEmitter: Emitter<URI>;
    protected fileWatcher: FileSystemWatcher;
    protected init(): void;
    protected cleanMarkers(event: FileChangeEvent): void;
    get onDidChangeMarkers(): Event<URI>;
    protected fireOnDidChangeMarkers(uri: URI): void;
    setMarkers(uri: URI, owner: string, data: D[]): Marker<D>[];
    findMarkers(filter?: SearchFilter<D>): Marker<D>[];
    getUris(): IterableIterator<string>;
    cleanAllMarkers(uri?: URI): void;
    protected doCleanAllMarkers(uri: URI): void;
}
//# sourceMappingURL=marker-manager.d.ts.map