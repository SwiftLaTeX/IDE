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
var uri_1 = require("@theia/core/lib/common/uri");
var editor_1 = require("../editor");
exports.Position = editor_1.Position;
exports.Range = editor_1.Range;
var NavigationLocation;
(function (NavigationLocation) {
    /**
     * The navigation location type.
     */
    var Type;
    (function (Type) {
        /**
         * Cursor position change type.
         */
        Type[Type["CURSOR"] = 0] = "CURSOR";
        /**
         * Text selection change type.
         */
        Type[Type["SELECTION"] = 1] = "SELECTION";
        /**
         * Content change type.
         */
        Type[Type["CONTENT_CHANGE"] = 2] = "CONTENT_CHANGE";
    })(Type = NavigationLocation.Type || (NavigationLocation.Type = {}));
    var Context;
    (function (Context) {
        /**
         * Returns with the type for the context.
         */
        function getType(context) {
            if (editor_1.Position.is(context)) {
                return Type.CURSOR;
            }
            if (editor_1.Range.is(context)) {
                return Type.SELECTION;
            }
            if (editor_1.TextDocumentContentChangeDelta.is(context)) {
                return Type.CONTENT_CHANGE;
            }
            throw new Error("Unexpected context for type: " + context + ".");
        }
        Context.getType = getType;
    })(Context = NavigationLocation.Context || (NavigationLocation.Context = {}));
})(NavigationLocation = exports.NavigationLocation || (exports.NavigationLocation = {}));
(function (NavigationLocation) {
    /**
     * Transforms the location into an object that can be safely serialized.
     */
    function toObject(location) {
        var uri = location.uri, type = location.type;
        var context = (function () {
            if (CursorLocation.is(location)) {
                return CursorLocation.toObject(location.context);
            }
            if (SelectionLocation.is(location)) {
                return SelectionLocation.toObject(location.context);
            }
            if (ContentChangeLocation.is(location)) {
                return ContentChangeLocation.toObject(location.context);
            }
        })();
        return {
            uri: uri.toString(),
            type: type,
            context: context
        };
    }
    NavigationLocation.toObject = toObject;
    /**
     * Returns with the navigation location object from its serialized counterpart.
     */
    function fromObject(object) {
        var uri = object.uri, type = object.type;
        if (uri !== undefined && type !== undefined && object.context !== undefined) {
            var context_1 = (function () {
                switch (type) {
                    case NavigationLocation.Type.CURSOR: return CursorLocation.fromObject(object.context);
                    case NavigationLocation.Type.SELECTION: return SelectionLocation.fromObject(object.context);
                    case NavigationLocation.Type.CONTENT_CHANGE: return ContentChangeLocation.fromObject(object.context);
                }
            })();
            if (context_1) {
                return {
                    uri: toUri(uri),
                    context: context_1,
                    type: type
                };
            }
        }
        return undefined;
    }
    NavigationLocation.fromObject = fromObject;
    /**
     * Returns with the context of the location as a `Range`.
     */
    function range(location) {
        if (CursorLocation.is(location)) {
            return editor_1.Range.create(location.context, location.context);
        }
        if (SelectionLocation.is(location)) {
            return location.context;
        }
        if (ContentChangeLocation.is(location)) {
            return location.context.range;
        }
        throw new Error("Unexpected navigation location: " + location + ".");
    }
    NavigationLocation.range = range;
    /**
     * Creates a new navigation location object.
     */
    function create(uri, context) {
        var type = NavigationLocation.Context.getType(context);
        return {
            uri: toUri(uri),
            type: type,
            context: context
        };
    }
    NavigationLocation.create = create;
    /**
     * Returns with the human-consumable (JSON) string representation of the location argument.
     */
    function toString(location) {
        return JSON.stringify(toObject(location));
    }
    NavigationLocation.toString = toString;
    function toUri(arg) {
        if (arg instanceof uri_1.default) {
            return arg;
        }
        if (typeof arg === 'string') {
            return new uri_1.default(arg);
        }
        return arg.uri;
    }
})(NavigationLocation = exports.NavigationLocation || (exports.NavigationLocation = {}));
var CursorLocation;
(function (CursorLocation) {
    /**
     * `true` if the argument is a cursor location. Otherwise, `false`.
     */
    function is(location) {
        return location.type === NavigationLocation.Type.CURSOR;
    }
    CursorLocation.is = is;
    /**
     * Returns with the serialized format of the position argument.
     */
    function toObject(context) {
        var line = context.line, character = context.character;
        return {
            line: line,
            character: character
        };
    }
    CursorLocation.toObject = toObject;
    /**
     * Returns with the position from its serializable counterpart, or `undefined`.
     */
    function fromObject(object) {
        if (object.line !== undefined && object.character !== undefined) {
            var line = object.line, character = object.character;
            return {
                line: line,
                character: character
            };
        }
        return undefined;
    }
    CursorLocation.fromObject = fromObject;
})(CursorLocation = exports.CursorLocation || (exports.CursorLocation = {}));
var SelectionLocation;
(function (SelectionLocation) {
    /**
     * `true` if the argument is a selection location.
     */
    function is(location) {
        return location.type === NavigationLocation.Type.SELECTION;
    }
    SelectionLocation.is = is;
    /**
     * Converts the range argument into a serializable object.
     */
    function toObject(context) {
        var start = context.start, end = context.end;
        return {
            start: CursorLocation.toObject(start),
            end: CursorLocation.toObject(end)
        };
    }
    SelectionLocation.toObject = toObject;
    /**
     * Creates a range object from its serializable counterpart. Returns with `undefined` if the argument cannot be converted into a range.
     */
    function fromObject(object) {
        if (!!object.start && !!object.end) {
            var start = CursorLocation.fromObject(object.start);
            var end = CursorLocation.fromObject(object.end);
            if (start && end) {
                return {
                    start: start,
                    end: end
                };
            }
        }
        return undefined;
    }
    SelectionLocation.fromObject = fromObject;
})(SelectionLocation = exports.SelectionLocation || (exports.SelectionLocation = {}));
var ContentChangeLocation;
(function (ContentChangeLocation) {
    /**
     * `true` if the argument is a content change location. Otherwise, `false`.
     */
    function is(location) {
        return location.type === NavigationLocation.Type.CONTENT_CHANGE;
    }
    ContentChangeLocation.is = is;
    /**
     * Returns with a serializable object representing the arguments.
     */
    function toObject(context) {
        return {
            range: SelectionLocation.toObject(context.range),
            rangeLength: context.rangeLength,
            text: context.text
        };
    }
    ContentChangeLocation.toObject = toObject;
    /**
     * Returns with a text document change delta for the argument. `undefined` if the argument cannot be mapped to a content change delta.
     */
    function fromObject(object) {
        if (!!object.range && object.rangeLength !== undefined && object.text !== undefined) {
            var range = SelectionLocation.fromObject(object.range);
            var rangeLength = object.rangeLength;
            var text = object.text;
            if (!!range) {
                return {
                    range: range,
                    rangeLength: rangeLength,
                    text: text
                };
            }
        }
        else {
            return undefined;
        }
    }
    ContentChangeLocation.fromObject = fromObject;
})(ContentChangeLocation = exports.ContentChangeLocation || (exports.ContentChangeLocation = {}));
//# sourceMappingURL=navigation-location.js.map