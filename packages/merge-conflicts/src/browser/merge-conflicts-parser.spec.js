"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chai_1 = require("chai");
chai.use(require('chai-string'));
var merge_conflicts_parser_1 = require("./merge-conflicts-parser");
var parser;
before(function () {
    parser = new merge_conflicts_parser_1.MergeConflictsParser();
});
/* eslint-disable no-unused-expressions */
function parse(contents) {
    var splitted = contents.split('\n');
    var input = {
        lineCount: splitted.length,
        getLine: function (lineNumber) { return splitted[lineNumber]; },
    };
    return parser.parse(input);
}
describe('merge-conflict-parser', function () {
    it('simple merge conflict', function () {
        var conflicts = parse("<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n=======\nfoo on branch\nbar on branch\n>>>>>>> branch\n");
        chai_1.expect(conflicts).to.have.lengthOf(1);
        var conflict = conflicts[0];
        chai_1.expect(conflict.total).to.not.be.undefined;
        chai_1.expect(conflict.current.marker).to.not.be.undefined;
        chai_1.expect(conflict.current.content).to.not.be.undefined;
        chai_1.expect(conflict.incoming.marker).to.not.be.undefined;
        chai_1.expect(conflict.incoming.content).to.not.be.undefined;
    });
    it('content regions are correct', function () {
        var content = "first line\n<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n||||||| base 1\nfoo\nbar\n=======\nfoo on branch\nbar on branch\n>>>>>>> branch\nlast line";
        var conflicts = parse(content);
        chai_1.expect(conflicts).to.have.lengthOf(1);
        var conflict = conflicts[0];
        var total = conflict.total;
        chai_1.expect(total, 'total range').to.deep.equal({
            start: { line: 1, character: 0 },
            end: { line: 10, character: 14 }
        });
        chai_1.expect(substring(content, total)).to.equal("<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n||||||| base 1\nfoo\nbar\n=======\nfoo on branch\nbar on branch\n>>>>>>> branch");
        var currentContent = conflict.current.content;
        chai_1.expect(currentContent).to.deep.equal({
            start: { line: 2, character: 0 },
            end: { line: 3, character: 21 }
        });
        chai_1.expect(substring(content, currentContent)).to.equal("foo changed on master\nbar changed on master");
        var baseContent = conflict.bases[0].content;
        chai_1.expect(baseContent).to.deep.equal({
            start: { line: 5, character: 0 },
            end: { line: 6, character: 3 }
        });
        chai_1.expect(substring(content, baseContent)).to.equal("foo\nbar");
        var incomingContent = conflict.incoming.content;
        chai_1.expect(incomingContent).to.deep.equal({
            start: { line: 8, character: 0 },
            end: { line: 9, character: 13 }
        });
        chai_1.expect(substring(content, incomingContent)).to.equal("foo on branch\nbar on branch");
    });
    it('multiple merge conflicts', function () {
        var conflicts = parse("<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n=======\nfoo on branch\nbar on branch\n>>>>>>> branch\n\n<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n=======\nfoo on branch\nbar on branch\n>>>>>>> branch\n\n<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n=======\nfoo on branch\nbar on branch\n>>>>>>> branch");
        chai_1.expect(conflicts).to.have.lengthOf(3);
    });
    it('merge conflict with bases', function () {
        var conflicts = parse("<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n||||||| base 1\ncommon base 1\n||||||| base 2\n||||||| base 3\ncommon base 3\n=======\nfoo on branch\nbar on branch\n>>>>>>> branch\n");
        chai_1.expect(conflicts).to.have.lengthOf(1);
        var conflict = conflicts[0];
        var bases = conflict.bases;
        chai_1.expect(bases).to.have.lengthOf(3);
        var base1Content = bases[0].content;
        chai_1.expect(base1Content).to.not.be.undefined;
        chai_1.expect(base1Content).to.deep.equal({
            start: { line: 4, character: 0 },
            end: { line: 4, character: 13 }
        });
        var base2Content = bases[1].content;
        chai_1.expect(base2Content).to.be.undefined;
        var base3Content = bases[2].content;
        chai_1.expect(base3Content).to.not.be.undefined;
        chai_1.expect(base3Content).to.deep.equal({
            start: { line: 7, character: 0 },
            end: { line: 7, character: 13 }
        });
    });
    it('broken 1: second current marker in current content', function () {
        var conflicts = parse("<<<<<<< HEAD\n<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n=======\nfoo on branch\nbar on branch\n>>>>>>> branch\n");
        chai_1.expect(conflicts).to.have.lengthOf(1);
        var conflict = conflicts[0];
        var total = conflict.total;
        chai_1.expect(total).to.not.be.undefined;
        chai_1.expect(total).to.deep.equal({
            start: { line: 1, character: 0 },
            end: { line: 7, character: 14 }
        });
    });
    it('broken 2: current marker in incoming content', function () {
        var conflicts = parse("<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n=======\nfoo on branch\n<<<<<<< HEAD\nbar on branch\n>>>>>>> branch\n");
        chai_1.expect(conflicts).to.have.lengthOf(0);
    });
    it('broken 3: second separator', function () {
        var conflicts = parse("<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n=======\n=======\nfoo on branch\nbar on branch\n>>>>>>> branch\n");
        chai_1.expect(conflicts).to.have.lengthOf(0);
    });
    it('broken 4: second separator in incoming content', function () {
        var conflicts = parse("<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n=======\nfoo on branch\n=======\nbar on branch\n>>>>>>> branch\n");
        chai_1.expect(conflicts).to.have.lengthOf(0);
    });
    it('broken 5: incoming marker, no separator', function () {
        var conflicts = parse("<<<<<<< HEAD\nfoo changed on master\nbar changed on master\nfoo on branch\nbar on branch\n>>>>>>> branch\n\n<<<<<<< HEAD\nfoo changed on master\nbar changed on master\n=======\nfoo on branch\nbar on branch\n>>>>>>> branch\n");
        chai_1.expect(conflicts).to.have.lengthOf(1);
        var conflict = conflicts[0];
        var total = conflict.total;
        chai_1.expect(total).to.not.be.undefined;
        chai_1.expect(total).to.deep.equal({
            start: { line: 7, character: 0 },
            end: { line: 13, character: 14 }
        });
    });
    it('merge conflict with empty incoming change', function () {
        var conflicts = parse("<<<<<<<\na\n|||||||\nb\n=======\n>>>>>>>\n");
        chai_1.expect(conflicts).to.have.lengthOf(1);
        var conflict = conflicts[0];
        chai_1.expect(conflict.incoming).to.not.be.undefined;
        chai_1.expect(conflict.incoming.content).to.be.undefined;
    });
    it('merge conflict with empty current change', function () {
        var conflicts = parse("<<<<<<<\n|||||||\nb\n=======\na\n>>>>>>>\n");
        chai_1.expect(conflicts).to.have.lengthOf(1);
        var conflict = conflicts[0];
        chai_1.expect(conflict.current).to.not.be.undefined;
        chai_1.expect(conflict.current.content).to.be.undefined;
    });
});
function substring(text, range) {
    var lines = text.split(/\r?\n|\r/);
    var lineOffsets = [0];
    for (var i = 1; i < lines.length; i++) {
        lineOffsets[i] = lineOffsets[i - 1] + lines[i - 1].length + 1;
    }
    var offsetAt = function (position) { return lineOffsets[position.line] + position.character; };
    var startOffset = offsetAt(range.start);
    var endOffset = offsetAt(range.end);
    var result = text.substring(startOffset, endOffset);
    return result;
}
//# sourceMappingURL=merge-conflicts-parser.spec.js.map