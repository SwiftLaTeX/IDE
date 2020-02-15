"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var process_task_1 = require("./process-task");
describe('removeAnsiEscapeCodes function', function () {
    it('should remove all end line and color codes', function () {
        var str1 = '  [2m14:21[22m  [33mwarning[39m  Missing semicolon  [2msemi[22m\r';
        var res = process_task_1.removeAnsiEscapeCodes(str1);
        chai_1.expect(res).to.eq('  14:21  warning  Missing semicolon  semi');
        var str2 = '[37;40mnpm[0m [0m[31;40mERR![0m [0m[35mcode[0m ELIFECYCLE\r';
        res = process_task_1.removeAnsiEscapeCodes(str2);
        chai_1.expect(res).to.eq('npm ERR! code ELIFECYCLE');
    });
});
//# sourceMappingURL=process-task.spec.js.map