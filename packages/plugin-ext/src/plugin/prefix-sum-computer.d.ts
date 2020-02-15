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
export declare function toUint32(v: number): number;
export declare class PrefixSumIndexOfResult {
    _prefixSumIndexOfResultBrand: void;
    index: number;
    remainder: number;
    constructor(index: number, remainder: number);
}
export declare class PrefixSumComputer {
    /**
     * values[i] is the value at index i
     */
    private values;
    /**
     * prefixSum[i] = SUM(heights[j]), 0 <= j <= i
     */
    private prefixSum;
    /**
     * prefixSum[i], 0 <= i <= prefixSumValidIndex can be trusted
     */
    private prefixSumValidIndex;
    constructor(values: Uint32Array);
    getCount(): number;
    insertValues(insertIndex: number, insertValues: Uint32Array): boolean;
    changeValue(index: number, value: number): boolean;
    removeValues(startIndex: number, cnt: number): boolean;
    getTotalValue(): number;
    getAccumulatedValue(index: number): number;
    private _getAccumulatedValue;
    getIndexOf(accumulatedValue: number): PrefixSumIndexOfResult;
}
//# sourceMappingURL=prefix-sum-computer.d.ts.map