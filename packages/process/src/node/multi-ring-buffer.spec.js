"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var multi_ring_buffer_1 = require("./multi-ring-buffer");
var expect = chai.expect;
describe('MultiRingBuffer', function () {
    it('expect buffer to be empty initialized', function () {
        var size = 2;
        var compareTo = Buffer.from('0000', 'hex');
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        // eslint-disable-next-line no-unused-expressions
        expect(ringBuffer['buffer'].equals(compareTo)).to.be.true;
    });
    it('expect enq and deq a string with unicode characters > 1 byte and no wrap around', function () {
        var ringBufferSize = 15;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: ringBufferSize });
        var buffer = '\u00bd + \u00bc = \u00be';
        var bufferByteLength = Buffer.byteLength(buffer, 'utf8');
        ringBuffer.enq(buffer);
        expect(ringBuffer.size()).to.be.equal(bufferByteLength);
    });
    it('expect enq and deq a string with unicode characters > 1 byte and wrap around', function () {
        var buffer = '\u00bd + \u00bc = \u00be';
        var ringBufferSize = Buffer.byteLength(buffer[buffer.length - 1]);
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: ringBufferSize });
        ringBuffer.enq(buffer);
        expect(ringBuffer.size()).to.be.equal(ringBufferSize);
        var reader = ringBuffer.getReader();
        var readBuffer = ringBuffer.deq(reader);
        expect(ringBuffer).to.not.be.equal(undefined);
        if (readBuffer !== undefined) {
            expect(readBuffer).to.be.equal(buffer[buffer.length - 1].toString());
        }
    });
    it('expect enq a string < ring buffer size ', function () {
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffer = 'test';
        ringBuffer.enq(buffer);
        expect(ringBuffer.size()).to.be.equal(buffer.length);
        expect(ringBuffer.empty()).to.be.equal(false);
        var reader = ringBuffer.getReader();
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(buffer.length);
        expect(ringBuffer.emptyForReader(reader)).to.be.equal(false);
    });
    it('expect deq a string < ring buffer size ', function () {
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: 5 });
        var buffer = 'test';
        ringBuffer.enq(buffer);
        expect(ringBuffer.size()).to.be.equal(4);
        var reader = ringBuffer.getReader();
        var readBuffer = ringBuffer.deq(reader);
        expect(ringBuffer.size()).to.be.equal(4);
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
        expect(readBuffer).to.equal(buffer);
    });
    it('expect deq a string > ring buffer size ', function () {
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffer = 'testabcd';
        ringBuffer.enq(buffer);
        expect(ringBuffer.size()).to.be.equal(size);
        var reader = ringBuffer.getReader();
        var readBuffer = ringBuffer.deq(reader);
        expect(ringBuffer.size()).to.be.equal(size);
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
        expect(readBuffer).to.equal(buffer.substr(buffer.length - size));
    });
    it('expect enq deq enq deq a string > ring buffer size ', function () {
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffer = '12345678';
        for (var i = 0; i < 2; i++) {
            ringBuffer.enq(buffer);
            expect(ringBuffer.size()).to.be.equal(size);
            var reader = ringBuffer.getReader();
            var readBuffer = ringBuffer.deq(reader);
            expect(ringBuffer.size()).to.be.equal(size);
            expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
            expect(readBuffer).to.equal(buffer.substr(buffer.length - size));
        }
    });
    it('expect enq a string == ring buffer size then one > ring buffer size and dequeue them ', function () {
        var e_1, _a, e_2, _b;
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffers = ['12345', '12345678'];
        try {
            for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
                var buffer = buffers_1_1.value;
                ringBuffer.enq(buffer);
                expect(ringBuffer.size()).to.be.equal(size);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var reader = ringBuffer.getReader();
        var i = 0;
        try {
            for (var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
                var _1 = buffers_2_1.value;
                var readBuffer = ringBuffer.deq(reader);
                if (i === 0) {
                    expect(readBuffer).to.equal(buffers[buffers.length - 1].substr(buffers[buffers.length - 1].length - size));
                }
                else {
                    expect(readBuffer).to.equal(undefined);
                }
                i++;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (buffers_2_1 && !buffers_2_1.done && (_b = buffers_2.return)) _b.call(buffers_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
    });
    it('expect enq a string == ring buffer size then one < ring buffer size and dequeue them ', function () {
        var e_3, _a, e_4, _b;
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffers = ['12345', '123'];
        try {
            for (var buffers_3 = __values(buffers), buffers_3_1 = buffers_3.next(); !buffers_3_1.done; buffers_3_1 = buffers_3.next()) {
                var buffer = buffers_3_1.value;
                ringBuffer.enq(buffer);
                expect(ringBuffer.size()).to.be.equal(size);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (buffers_3_1 && !buffers_3_1.done && (_a = buffers_3.return)) _a.call(buffers_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var reader = ringBuffer.getReader();
        var i = 0;
        try {
            for (var buffers_4 = __values(buffers), buffers_4_1 = buffers_4.next(); !buffers_4_1.done; buffers_4_1 = buffers_4.next()) {
                var _2 = buffers_4_1.value;
                var readBuffer = ringBuffer.deq(reader);
                if (i === 0) {
                    expect(readBuffer).to.equal('45123');
                }
                else {
                    expect(readBuffer).to.equal(undefined);
                }
                i++;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (buffers_4_1 && !buffers_4_1.done && (_b = buffers_4.return)) _b.call(buffers_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
    });
    it('expect enq a string == ring buffer size then one < ring buffer  then one < buffer size and deque ', function () {
        var e_5, _a, e_6, _b;
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffers = ['12345', '123', '678'];
        try {
            for (var buffers_5 = __values(buffers), buffers_5_1 = buffers_5.next(); !buffers_5_1.done; buffers_5_1 = buffers_5.next()) {
                var buffer = buffers_5_1.value;
                ringBuffer.enq(buffer);
                expect(ringBuffer.size()).to.be.equal(size);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (buffers_5_1 && !buffers_5_1.done && (_a = buffers_5.return)) _a.call(buffers_5);
            }
            finally { if (e_5) throw e_5.error; }
        }
        var reader = ringBuffer.getReader();
        var i = 0;
        try {
            for (var buffers_6 = __values(buffers), buffers_6_1 = buffers_6.next(); !buffers_6_1.done; buffers_6_1 = buffers_6.next()) {
                var _3 = buffers_6_1.value;
                var readBuffer = ringBuffer.deq(reader);
                if (i === 0) {
                    expect(readBuffer).to.equal('23678');
                }
                else {
                    expect(readBuffer).to.equal(undefined);
                }
                i++;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (buffers_6_1 && !buffers_6_1.done && (_b = buffers_6.return)) _b.call(buffers_6);
            }
            finally { if (e_6) throw e_6.error; }
        }
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
    });
    it('expect enq buffer size then enq 1 to dequeue the right value', function () {
        var e_7, _a, e_8, _b;
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffers = ['12345', '1'];
        try {
            for (var buffers_7 = __values(buffers), buffers_7_1 = buffers_7.next(); !buffers_7_1.done; buffers_7_1 = buffers_7.next()) {
                var buffer = buffers_7_1.value;
                ringBuffer.enq(buffer);
                expect(ringBuffer.size()).to.be.equal(size);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (buffers_7_1 && !buffers_7_1.done && (_a = buffers_7.return)) _a.call(buffers_7);
            }
            finally { if (e_7) throw e_7.error; }
        }
        var reader = ringBuffer.getReader();
        var i = 0;
        try {
            for (var buffers_8 = __values(buffers), buffers_8_1 = buffers_8.next(); !buffers_8_1.done; buffers_8_1 = buffers_8.next()) {
                var _4 = buffers_8_1.value;
                var readBuffer = ringBuffer.deq(reader);
                if (i === 0) {
                    expect(readBuffer).to.equal('23451');
                }
                else {
                    expect(readBuffer).to.equal(undefined);
                }
                i++;
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (buffers_8_1 && !buffers_8_1.done && (_b = buffers_8.return)) _b.call(buffers_8);
            }
            finally { if (e_8) throw e_8.error; }
        }
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
    });
    it('expect enq buffer size then enq 1 twice to dequeue the right value', function () {
        var e_9, _a, e_10, _b;
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffers = ['12345', '1', '12345', '1'];
        try {
            for (var buffers_9 = __values(buffers), buffers_9_1 = buffers_9.next(); !buffers_9_1.done; buffers_9_1 = buffers_9.next()) {
                var buffer = buffers_9_1.value;
                ringBuffer.enq(buffer);
                expect(ringBuffer.size()).to.be.equal(size);
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (buffers_9_1 && !buffers_9_1.done && (_a = buffers_9.return)) _a.call(buffers_9);
            }
            finally { if (e_9) throw e_9.error; }
        }
        var reader = ringBuffer.getReader();
        var i = 0;
        try {
            for (var buffers_10 = __values(buffers), buffers_10_1 = buffers_10.next(); !buffers_10_1.done; buffers_10_1 = buffers_10.next()) {
                var _5 = buffers_10_1.value;
                var readBuffer = ringBuffer.deq(reader);
                if (i === 0) {
                    expect(readBuffer).to.equal('23451');
                }
                else {
                    expect(readBuffer).to.equal(undefined);
                }
                i++;
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (buffers_10_1 && !buffers_10_1.done && (_b = buffers_10.return)) _b.call(buffers_10);
            }
            finally { if (e_10) throw e_10.error; }
        }
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
    });
    it('expect enq buffer size of various sizes dequeue the right value', function () {
        var e_11, _a, e_12, _b;
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffers = ['12345', '123', '678', '12345', '1', '12345', '123', '12', '12', '1', '12', '123', '1234', '12345', '1', '12'];
        try {
            for (var buffers_11 = __values(buffers), buffers_11_1 = buffers_11.next(); !buffers_11_1.done; buffers_11_1 = buffers_11.next()) {
                var buffer = buffers_11_1.value;
                ringBuffer.enq(buffer);
                expect(ringBuffer.size()).to.be.equal(size);
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (buffers_11_1 && !buffers_11_1.done && (_a = buffers_11.return)) _a.call(buffers_11);
            }
            finally { if (e_11) throw e_11.error; }
        }
        var reader = ringBuffer.getReader();
        var i = 0;
        try {
            for (var buffers_12 = __values(buffers), buffers_12_1 = buffers_12.next(); !buffers_12_1.done; buffers_12_1 = buffers_12.next()) {
                var _6 = buffers_12_1.value;
                var readBuffer = ringBuffer.deq(reader);
                if (i === 0) {
                    expect(readBuffer).to.equal('45112');
                }
                else {
                    expect(readBuffer).to.equal(undefined);
                }
                i++;
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (buffers_12_1 && !buffers_12_1.done && (_b = buffers_12.return)) _b.call(buffers_12);
            }
            finally { if (e_12) throw e_12.error; }
        }
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
    });
    it('expect enq buffer sizes < buffer size to dequeue normally', function () {
        var e_13, _a, e_14, _b;
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffers = ['1', '1'];
        try {
            for (var buffers_13 = __values(buffers), buffers_13_1 = buffers_13.next(); !buffers_13_1.done; buffers_13_1 = buffers_13.next()) {
                var buffer = buffers_13_1.value;
                ringBuffer.enq(buffer);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (buffers_13_1 && !buffers_13_1.done && (_a = buffers_13.return)) _a.call(buffers_13);
            }
            finally { if (e_13) throw e_13.error; }
        }
        expect(ringBuffer.size()).to.be.equal(2);
        var reader = ringBuffer.getReader();
        var i = 0;
        try {
            for (var buffers_14 = __values(buffers), buffers_14_1 = buffers_14.next(); !buffers_14_1.done; buffers_14_1 = buffers_14.next()) {
                var _7 = buffers_14_1.value;
                var readBuffer = ringBuffer.deq(reader);
                if (i === 0) {
                    expect(readBuffer).to.equal('11');
                }
                else {
                    expect(readBuffer).to.equal(undefined);
                }
                i++;
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (buffers_14_1 && !buffers_14_1.done && (_b = buffers_14.return)) _b.call(buffers_14);
            }
            finally { if (e_14) throw e_14.error; }
        }
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
    });
    it('expect enq buffer size of various sizes dequeue the right value', function () {
        var e_15, _a, e_16, _b;
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var buffers = ['1', '1', '12', '12'];
        try {
            for (var buffers_15 = __values(buffers), buffers_15_1 = buffers_15.next(); !buffers_15_1.done; buffers_15_1 = buffers_15.next()) {
                var buffer = buffers_15_1.value;
                ringBuffer.enq(buffer);
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (buffers_15_1 && !buffers_15_1.done && (_a = buffers_15.return)) _a.call(buffers_15);
            }
            finally { if (e_15) throw e_15.error; }
        }
        expect(ringBuffer.size()).to.be.equal(size);
        var reader = ringBuffer.getReader();
        var i = 0;
        try {
            for (var buffers_16 = __values(buffers), buffers_16_1 = buffers_16.next(); !buffers_16_1.done; buffers_16_1 = buffers_16.next()) {
                var _8 = buffers_16_1.value;
                var readBuffer = ringBuffer.deq(reader);
                if (i === 0) {
                    expect(readBuffer).to.equal('11212');
                }
                else {
                    expect(readBuffer).to.equal(undefined);
                }
                i++;
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (buffers_16_1 && !buffers_16_1.done && (_b = buffers_16.return)) _b.call(buffers_16);
            }
            finally { if (e_16) throw e_16.error; }
        }
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
    });
    it('expect multiple enq and deq to deq the right values', function () {
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        ringBuffer.enq('12345');
        expect(ringBuffer.size()).to.be.equal(size);
        var reader = ringBuffer.getReader();
        var readBuffer = ringBuffer.deq(reader);
        expect(readBuffer).to.equal('12345');
        ringBuffer.enq('123');
        readBuffer = ringBuffer.deq(reader);
        expect(readBuffer).to.equal('123');
        ringBuffer.enq('12345');
        readBuffer = ringBuffer.deq(reader);
        expect(readBuffer).to.equal('12345');
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
    });
    it('expect data from stream on enq', function () {
        return __awaiter(this, void 0, void 0, function () {
            var size, ringBuffer, buffer, astream, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        size = 5;
                        ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
                        buffer = 'abc';
                        astream = ringBuffer.getStream();
                        p = new Promise(function (resolve) {
                            astream.on('data', function (chunk) {
                                expect(chunk).to.be.equal(buffer);
                                resolve();
                            });
                        });
                        ringBuffer.enq(buffer);
                        return [4 /*yield*/, p];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('expect data from stream when data is already enqed', function () {
        return __awaiter(this, void 0, void 0, function () {
            var size, ringBuffer, buffer, astream, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        size = 5;
                        ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
                        buffer = 'abc';
                        ringBuffer.enq(buffer);
                        astream = ringBuffer.getStream();
                        p = new Promise(function (resolve) {
                            astream.on('data', function (chunk) {
                                expect(chunk).to.be.equal(buffer);
                                resolve();
                            });
                        });
                        return [4 /*yield*/, p];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('expect disposing of a stream to delete it from the ringbuffer', function () {
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var astream = ringBuffer.getStream();
        astream.dispose();
        expect(ringBuffer.streamsSize()).to.be.equal(0);
        expect(ringBuffer.readersSize()).to.be.equal(0);
    });
    it('expect disposing of a reader to delete it from the ringbuffer', function () {
        var size = 5;
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
        var reader = ringBuffer.getReader();
        ringBuffer.closeReader(reader);
        expect(ringBuffer.readersSize()).to.be.equal(0);
    });
    it('expect enq a string in utf8 and get it in hex', function () {
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: 5 });
        var buffer = 'test';
        ringBuffer.enq(buffer);
        expect(ringBuffer.size()).to.be.equal(4);
        var reader = ringBuffer.getReader();
        var readBuffer = ringBuffer.deq(reader, -1, 'hex');
        expect(readBuffer).to.equal('74657374');
    });
    it('expect enq a string in hex and get it in utf8', function () {
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: 5 });
        var buffer = '74657374';
        ringBuffer.enq(buffer, 'hex');
        expect(ringBuffer.size()).to.be.equal(4);
        var reader = ringBuffer.getReader();
        var readBuffer = ringBuffer.deq(reader);
        expect(readBuffer).to.equal('test');
    });
    it('expect data from stream in hex when enq in uf8', function () {
        return __awaiter(this, void 0, void 0, function () {
            var size, ringBuffer, buffer, astream, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        size = 5;
                        ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: size });
                        buffer = 'test';
                        ringBuffer.enq(buffer);
                        astream = ringBuffer.getStream('hex');
                        p = new Promise(function (resolve) {
                            astream.on('data', function (chunk) {
                                expect(chunk).to.be.equal('74657374');
                                resolve();
                            });
                        });
                        return [4 /*yield*/, p];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('expect deq a string < ring buffer size with the internal encoding in hex ', function () {
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: 5, encoding: 'hex' });
        var buffer = 'test';
        ringBuffer.enq(buffer);
        expect(ringBuffer.size()).to.be.equal(4);
        var reader = ringBuffer.getReader();
        var readBuffer = ringBuffer.deq(reader);
        expect(ringBuffer.size()).to.be.equal(4);
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
        expect(readBuffer).to.equal(buffer);
    });
    it('expect the ringbuffer to be empty if we enq an empty string', function () {
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: 5 });
        var buffer = '';
        ringBuffer.enq(buffer);
        expect(ringBuffer.size()).to.be.equal(0);
        expect(ringBuffer.empty()).to.be.equal(true);
    });
    it('expect an invalid reader count to be zero', function () {
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: 5 });
        expect(ringBuffer.sizeForReader(1)).to.be.equal(0);
    });
    it('expect an invalid reader to be empty', function () {
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: 5 });
        expect(ringBuffer.emptyForReader(1)).to.be.equal(true);
    });
    it('expect partially deq a string < ring buffer size ', function () {
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: 5 });
        var buffer = 'test';
        ringBuffer.enq(buffer);
        expect(ringBuffer.size()).to.be.equal(4);
        var reader = ringBuffer.getReader();
        var readBuffer = ringBuffer.deq(reader, 2);
        expect(ringBuffer.size()).to.be.equal(4);
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(2);
        expect(readBuffer).to.equal('te');
        readBuffer = ringBuffer.deq(reader, 2);
        expect(ringBuffer.size()).to.be.equal(4);
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(0);
        expect(readBuffer).to.equal('st');
    });
    it('expect partially deq a string < ring buffer size then enq and deq again ', function () {
        var ringBuffer = new multi_ring_buffer_1.MultiRingBuffer({ size: 5 });
        var buffer = 'test';
        var secondBuffer = 'abcd';
        ringBuffer.enq(buffer);
        expect(ringBuffer.size()).to.be.equal(4);
        var reader = ringBuffer.getReader();
        var readBuffer = ringBuffer.deq(reader, 2);
        expect(ringBuffer.size()).to.be.equal(4);
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(2);
        expect(readBuffer).to.equal('te');
        ringBuffer.enq(secondBuffer);
        readBuffer = ringBuffer.deq(reader, 4);
        expect(ringBuffer.size()).to.be.equal(5);
        expect(readBuffer).to.equal('tabc');
        expect(ringBuffer.sizeForReader(reader)).to.be.equal(1);
    });
});
//# sourceMappingURL=multi-ring-buffer.spec.js.map