/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
/// <reference types="node" />
import * as stream from 'stream';
import { Disposable } from '@theia/core/lib/common';
/**
 * The MultiRingBuffer is a ring buffer implementation that allows
 * multiple independant readers.
 *
 * These readers are created using the getReader or getStream functions
 * to create a reader that can be read using deq() or one that is a readable stream.
 */
export declare class MultiRingBufferReadableStream extends stream.Readable implements Disposable {
    protected readonly ringBuffer: MultiRingBuffer;
    protected readonly reader: number;
    protected readonly encoding: string;
    protected more: boolean;
    protected disposed: boolean;
    constructor(ringBuffer: MultiRingBuffer, reader: number, encoding?: string);
    _read(size: number): void;
    _destroy(err: Error | undefined, callback: (err?: Error) => void): void;
    onData(): void;
    deq(size: number): void;
    dispose(): void;
}
export declare const MultiRingBufferOptions: unique symbol;
export interface MultiRingBufferOptions {
    readonly size: number;
    readonly encoding?: string;
}
export interface WrappedPosition {
    newPos: number;
    wrap: boolean;
}
export declare class MultiRingBuffer implements Disposable {
    protected readonly options: MultiRingBufferOptions;
    protected readonly buffer: Buffer;
    protected head: number;
    protected tail: number;
    protected readonly maxSize: number;
    protected readonly encoding: string;
    protected readonly readers: Map<number, number>;
    protected readonly streams: Map<MultiRingBufferReadableStream, number>;
    protected readerId: number;
    constructor(options: MultiRingBufferOptions);
    enq(astring: string, encoding?: string): void;
    getReader(): number;
    closeReader(id: number): void;
    getStream(encoding?: string): MultiRingBufferReadableStream;
    closeStream(astream: MultiRingBufferReadableStream): void;
    protected onData(start: number): void;
    deq(id: number, size?: number, encoding?: string): string | undefined;
    sizeForReader(id: number): number;
    size(): number;
    protected isWrapped(from: number, to: number): boolean;
    protected sizeFrom(from: number, to: number, wrap: boolean): number;
    emptyForReader(id: number): boolean;
    empty(): boolean;
    streamsSize(): number;
    readersSize(): number;
    /**
     * Dispose all the attached readers/streams.
     */
    dispose(): void;
    protected shouldIncPos(pos: number, end: number, size: number): boolean;
    protected incTailSize(pos: number, head: number, size: number): WrappedPosition;
    protected incTail(pos: number, size: number): WrappedPosition;
    protected incTails(size: number): void;
    protected inc(pos: number, size: number): WrappedPosition;
}
//# sourceMappingURL=multi-ring-buffer.d.ts.map