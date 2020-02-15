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
import { MergeConflict } from './merge-conflict';
export declare class MergeConflictsParser {
    private parser;
    constructor();
    parse(input: MergeConflictsParser.Input): MergeConflict[];
    private init;
    private lineToRange;
    private addLineToRange;
}
export declare namespace MergeConflictsParser {
    interface Input {
        readonly lineCount: number;
        getLine(lineNumber: number): string;
    }
    class Context {
        new: MergeConflict;
        all: MergeConflict[];
    }
    interface Line {
        number: number;
        content: string;
    }
    class StateMachine<C extends object> {
        protected context: C;
        current: State<C>;
        readonly states: State<C>[];
        constructor(context: C);
        reset(context: C): void;
        read(line: Line): void;
        addState(id: string): State<C>;
    }
    class State<C> {
        readonly id: string;
        onEnter?: (line: Line, context: C) => void;
        readonly conditionalNext: {
            to: State<C>;
            condition: (line: string) => boolean;
        }[];
        immediateNext: State<C> | undefined;
        constructor(id: string);
        findNext(line: Line, context: C): State<C> | undefined;
        to(next: State<C>, condition?: (line: string) => boolean): void;
    }
}
//# sourceMappingURL=merge-conflicts-parser.d.ts.map