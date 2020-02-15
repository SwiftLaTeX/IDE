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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var tree_decorator_1 = require("./tree-decorator");
/* eslint-disable no-unused-expressions */
var MockTreeDecoratorService = /** @class */ (function (_super) {
    __extends(MockTreeDecoratorService, _super);
    function MockTreeDecoratorService() {
        return _super.call(this, []) || this;
    }
    return MockTreeDecoratorService;
}(tree_decorator_1.AbstractTreeDecoratorService));
describe('tree-decorator', function () {
    describe('tree-decorator-service', function () {
        var decoratorService = new MockTreeDecoratorService();
        it('should inflate an empty object into an empty map', function () {
            chai_1.expect(decoratorService.inflateDecorators({})).to.be.empty;
        });
        it('should inflate an object into the corresponding map', function () {
            var expected = new Map();
            expected.set('id_1', [
                {
                    tooltip: 'tooltip'
                },
                {
                    fontData: {
                        color: 'blue'
                    }
                }
            ]);
            expected.set('id_2', [
                {
                    backgroundColor: 'yellow'
                },
                {
                    priority: 100
                }
            ]);
            chai_1.expect(decoratorService.inflateDecorators({
                'id_1': [
                    {
                        'tooltip': 'tooltip'
                    },
                    {
                        'fontData': {
                            'color': 'blue'
                        }
                    }
                ],
                'id_2': [
                    {
                        'backgroundColor': 'yellow'
                    },
                    {
                        'priority': 100
                    }
                ]
            })).to.be.deep.equal(expected);
        });
        it('should deflate an empty map into an empty object', function () {
            chai_1.expect(decoratorService.inflateDecorators({})).to.be.empty;
        });
        it('should inflate an object into the corresponding map', function () {
            var decorations = new Map();
            decorations.set('id_1', [
                {
                    tooltip: 'tooltip'
                },
                {
                    fontData: {
                        color: 'blue'
                    }
                }
            ]);
            decorations.set('id_2', [
                {
                    backgroundColor: 'yellow'
                },
                {
                    priority: 100
                }
            ]);
            chai_1.expect(decoratorService.deflateDecorators(decorations)).to.be.deep.equal({
                'id_1': [
                    {
                        'tooltip': 'tooltip'
                    },
                    {
                        'fontData': {
                            'color': 'blue'
                        }
                    }
                ],
                'id_2': [
                    {
                        'backgroundColor': 'yellow'
                    },
                    {
                        'priority': 100
                    }
                ]
            });
        });
    });
    describe('caption-highlight', function () {
        describe('range-contains', function () {
            [
                [1, 2, 3, false],
                [0, 0, 1, true],
                [1, 0, 1, true],
                [1, 1, 1, true],
                [2, 1, 1, true],
                [3, 1, 1, false],
                [1, 1, -100, false],
            ].forEach(function (test) {
                var _a = __read(test, 4), input = _a[0], offset = _a[1], length = _a[2], expected = _a[3];
                it(input + " should " + (expected ? '' : 'not ') + "be contained in the [" + offset + ":" + length + "] range", function () {
                    chai_1.expect(tree_decorator_1.TreeDecoration.CaptionHighlight.Range.contains(input, { offset: offset, length: length })).to.be.equal(expected);
                });
            });
        });
        it('split', function () {
            var actual = tree_decorator_1.TreeDecoration.CaptionHighlight.split('alma', {
                ranges: [{ offset: 0, length: 1 }]
            });
            chai_1.expect(actual).has.lengthOf(2);
            chai_1.expect(actual[0].highlight).to.be.true;
            chai_1.expect(actual[0].data).to.be.equal('a');
            chai_1.expect(actual[1].highlight).to.be.undefined;
            chai_1.expect(actual[1].data).to.be.equal('lma');
        });
    });
});
//# sourceMappingURL=tree-decorator.spec.js.map