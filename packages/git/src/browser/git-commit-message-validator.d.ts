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
import { MaybePromise } from '@theia/core/lib/common/types';
export declare class GitCommitMessageValidator {
    static readonly MAX_CHARS_PER_LINE = 72;
    /**
     * Validates the input and returns with either a validation result with the status and message, or `undefined` if everything went fine.
     */
    validate(input: string | undefined): MaybePromise<GitCommitMessageValidator.Result | undefined>;
    protected isLineValid(line: string, index: number): GitCommitMessageValidator.Result | undefined;
    protected maxCharsPerLine(): number;
}
export declare namespace GitCommitMessageValidator {
    /**
     * Type for the validation result with a status and a corresponding message.
     */
    type Result = Readonly<{
        message: string;
        status: 'info' | 'success' | 'warning' | 'error';
    }>;
    namespace Result {
        /**
         * `true` if the `message` and the `status` properties are the same on both `left` and `right`. Or both arguments are `undefined`. Otherwise, `false`.
         */
        function equal(left: Result | undefined, right: Result | undefined): boolean;
    }
}
//# sourceMappingURL=git-commit-message-validator.d.ts.map