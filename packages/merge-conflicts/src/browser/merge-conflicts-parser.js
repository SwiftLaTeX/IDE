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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var inversify_1 = require("inversify");
var MergeConflictsParser = /** @class */ (function () {
    function MergeConflictsParser() {
        this.init();
    }
    MergeConflictsParser_1 = MergeConflictsParser;
    MergeConflictsParser.prototype.parse = function (input) {
        var context = new MergeConflictsParser_1.Context();
        this.parser.reset(context);
        for (var number = 0; number < input.lineCount; number++) {
            this.parser.read({ number: number, content: input.getLine(number) });
        }
        return context.all;
    };
    MergeConflictsParser.prototype.init = function () {
        var _this = this;
        var parser = this.parser = new MergeConflictsParser_1.StateMachine(new MergeConflictsParser_1.Context());
        // states
        var start = parser.addState('start');
        var currentMarker = parser.addState('current-marker');
        var currentContent = parser.addState('current-content');
        var baseMarker = parser.addState('base-marker');
        var baseContent = parser.addState('base-content');
        var separator = parser.addState('separator');
        var incomingContent = parser.addState('incoming-content');
        var incomingMarker = parser.addState('incoming-marker');
        var push = parser.addState('push');
        // conditions / triggers
        var createStartsWithCondition = function (char) {
            var re = new RegExp("^" + char + "{7}");
            return function (input) {
                if (input.length < 7) {
                    return false;
                }
                return re.test(input);
            };
        };
        var startsWithLt = createStartsWithCondition('<');
        var startsWithEq = createStartsWithCondition('=');
        var startsWithGt = createStartsWithCondition('>');
        var startsWithPp = createStartsWithCondition('\\|');
        var any = function () { return true; };
        // transitions
        start.to(currentMarker, startsWithLt);
        start.to(start, any);
        currentMarker.to(currentMarker, startsWithLt);
        currentMarker.to(separator, startsWithEq);
        currentMarker.to(baseMarker, startsWithPp);
        currentMarker.to(currentContent, any);
        currentContent.to(currentMarker, startsWithLt);
        currentContent.to(separator, startsWithEq);
        currentContent.to(baseMarker, startsWithPp);
        currentContent.to(start, startsWithGt);
        currentContent.to(currentContent, any);
        baseMarker.to(currentMarker, startsWithLt);
        baseMarker.to(baseMarker, startsWithPp);
        baseMarker.to(separator, startsWithEq);
        baseMarker.to(baseContent, any);
        baseContent.to(currentMarker, startsWithLt);
        baseContent.to(separator, startsWithEq);
        baseContent.to(baseMarker, startsWithPp);
        baseContent.to(baseContent, any);
        separator.to(currentMarker, startsWithLt);
        separator.to(start, startsWithEq);
        separator.to(incomingMarker, startsWithGt);
        separator.to(incomingContent, any);
        incomingContent.to(start, startsWithEq);
        incomingContent.to(currentMarker, startsWithLt);
        incomingContent.to(incomingMarker, startsWithGt);
        incomingContent.to(incomingContent, any);
        incomingMarker.to(push);
        push.to(start);
        // actions
        currentMarker.onEnter = function (input, ctx) {
            ctx.new = new MergeConflictsParser_1.Context().new;
            ctx.new.current.marker = _this.lineToRange(input);
        };
        currentContent.onEnter = function (input, ctx) {
            var current = ctx.new.current;
            current.content = _this.addLineToRange(input, current.content);
        };
        baseMarker.onEnter = function (input, ctx) {
            ctx.new.bases.push({ marker: _this.lineToRange(input) });
        };
        baseContent.onEnter = function (input, ctx) {
            var base = ctx.new.bases.slice(-1)[0];
            base.content = _this.addLineToRange(input, base.content);
        };
        incomingContent.onEnter = function (input, ctx) {
            var incoming = ctx.new.incoming;
            incoming.content = _this.addLineToRange(input, incoming.content);
        };
        incomingMarker.onEnter = function (input, ctx) {
            var markerRange = _this.lineToRange(input);
            ctx.new.incoming.marker = markerRange;
            ctx.new.total = {
                start: ctx.new.current.marker.start,
                end: markerRange.end
            };
        };
        push.onEnter = function (input, ctx) {
            ctx.all.push(ctx.new);
        };
    };
    MergeConflictsParser.prototype.lineToRange = function (line) {
        return {
            start: { line: line.number, character: 0 },
            end: { line: line.number, character: line.content.length },
        };
    };
    MergeConflictsParser.prototype.addLineToRange = function (line, range) {
        if (!range) {
            return this.lineToRange(line);
        }
        range.end = { line: line.number, character: line.content.length };
        return range;
    };
    var MergeConflictsParser_1;
    MergeConflictsParser = MergeConflictsParser_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MergeConflictsParser);
    return MergeConflictsParser;
}());
exports.MergeConflictsParser = MergeConflictsParser;
(function (MergeConflictsParser) {
    var Context = /** @class */ (function () {
        function Context() {
            this.new = {
                current: {},
                incoming: {},
                bases: []
            };
            this.all = [];
        }
        return Context;
    }());
    MergeConflictsParser.Context = Context;
    var StateMachine = /** @class */ (function () {
        function StateMachine(context) {
            this.context = context;
            this.states = [];
        }
        StateMachine.prototype.reset = function (context) {
            this.current = this.states[0];
            this.context = context;
        };
        StateMachine.prototype.read = function (line) {
            var next = this.current.findNext(line, this.context);
            while (next) {
                if (next.onEnter) {
                    next.onEnter(line, this.context);
                }
                if (next.immediateNext) {
                    this.current = next;
                    next = next.immediateNext;
                }
                else {
                    break;
                }
            }
            if (!next) {
                throw new Error("Missing transition from (" + this.current.id + ") for input: L." + line.number + " > " + line.content);
            }
            this.current = next;
        };
        StateMachine.prototype.addState = function (id) {
            var state = new State(id);
            this.states.push(state);
            if (!this.current) {
                this.current = state;
            }
            return state;
        };
        return StateMachine;
    }());
    MergeConflictsParser.StateMachine = StateMachine;
    var State = /** @class */ (function () {
        function State(id) {
            this.id = id;
            this.conditionalNext = [];
        }
        State.prototype.findNext = function (line, context) {
            var e_1, _a;
            try {
                for (var _b = __values(this.conditionalNext), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var candidate = _c.value;
                    if (candidate.condition(line.content)) {
                        return candidate.to;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return undefined;
        };
        State.prototype.to = function (next, condition) {
            if (condition) {
                this.immediateNext = undefined;
                this.conditionalNext.push({ to: next, condition: condition });
            }
            else {
                this.immediateNext = next;
            }
        };
        return State;
    }());
    MergeConflictsParser.State = State;
})(MergeConflictsParser = exports.MergeConflictsParser || (exports.MergeConflictsParser = {}));
exports.MergeConflictsParser = MergeConflictsParser;
//# sourceMappingURL=merge-conflicts-parser.js.map