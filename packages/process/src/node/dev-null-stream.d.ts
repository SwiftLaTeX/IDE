/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import stream = require('stream');
/**
 * A Node stream like `/dev/null`.
 *
 * Writing goes to a black hole, reading returns `EOF`.
 */
export declare class DevNullStream extends stream.Duplex {
    constructor(options?: {
        /**
         * Makes this stream call `destroy` on itself, emitting the `close` event.
         */
        autoDestroy?: boolean;
    });
    _write(chunk: any, encoding: string, callback: (err?: Error) => void): void;
    _read(size: number): void;
}
//# sourceMappingURL=dev-null-stream.d.ts.map