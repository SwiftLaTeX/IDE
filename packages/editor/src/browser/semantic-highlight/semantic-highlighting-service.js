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
var inversify_1 = require("inversify");
var base64_arraybuffer_1 = require("base64-arraybuffer");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
exports.Position = vscode_languageserver_types_1.Position;
exports.Range = vscode_languageserver_types_1.Range;
var uri_1 = require("@theia/core/lib/common/uri");
var disposable_1 = require("@theia/core/lib/common/disposable");
var logger_1 = require("@theia/core/lib/common/logger");
var semantic_highlighting_feature_1 = require("@theia/languages/lib/browser/semantic-highlighting/semantic-highlighting-feature");
/**
 * Service for registering and managing semantic highlighting decorations in the code editors for multiple languages.
 *
 * The current, default implementation does nothing at all, because the unique identifier of the `EditorDecoration` is not
 * exposed via the API. A working example is available as the `MonacoSemanticHighlightingService` from the `@theia/monaco` extension.
 */
var SemanticHighlightingService = /** @class */ (function () {
    function SemanticHighlightingService() {
        this.scopes = new Map();
    }
    /**
     * Registers the supported highlighting scopes for the given language. Returns with a disposable that will unregister the scopes from this service on `dispose`.
     * @param languageId the unique identifier of the language.
     * @param scopes a lookup table of the supported (TextMate) scopes received from the server. Semantic highlighting will be be supported for a language if the `scopes` is empty.
     */
    SemanticHighlightingService.prototype.register = function (languageId, scopes) {
        if (scopes && scopes.length > 0) {
            this.logger.info("Registering scopes for language: " + languageId + ".");
            if (this.scopes.has(languageId)) {
                this.logger.warn("The scopes are already registered for language: " + languageId + ".");
            }
            this.scopes.set(languageId, scopes.map(function (scope) { return scope.slice(0); }));
            this.logger.info("The scopes have been successfully registered for " + languageId + ".");
            var unregister_1 = this.unregister.bind(this);
            return disposable_1.Disposable.create(function () { return unregister_1(languageId); });
        }
        return disposable_1.Disposable.NULL;
    };
    SemanticHighlightingService.prototype.unregister = function (languageId) {
        this.logger.info("Unregistering scopes for language: " + languageId + ".");
        if (!this.scopes.has(languageId)) {
            this.logger.warn("No scopes were registered for language: " + languageId + ".");
        }
        this.scopes.delete(languageId);
        this.logger.info("The scopes have been successfully unregistered for " + languageId + ".");
    };
    /**
     * An array for TextMate scopes for the language.
     * @param languageId the unique ID of the language.
     * @param index the index of the TextMate scopes for the language.
     */
    SemanticHighlightingService.prototype.scopesFor = function (languageId, index) {
        if (index < 0) {
            throw new Error("index >= 0. " + index);
        }
        var scopes = this.scopes.get(languageId);
        if (!scopes) {
            throw new Error("No scopes were registered for language: " + languageId + ".");
        }
        if (scopes.length <= index) {
            throw new Error("Cannot find scopes by index. Language ID: " + languageId + ". Index: " + index + ". Scopes: " + scopes);
        }
        return scopes[index];
    };
    /**
     * Decorates the editor with the semantic highlighting scopes.
     * @param languageId the unique identifier of the language the resource belongs to.
     * @param uri the URI of the resource to decorate in the editor.
     * @param ranges the decoration ranges.
     */
    SemanticHighlightingService.prototype.decorate = function (languageId, uri, ranges) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * Disposes the service.
     */
    SemanticHighlightingService.prototype.dispose = function () {
        // NOOP
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], SemanticHighlightingService.prototype, "logger", void 0);
    SemanticHighlightingService = __decorate([
        inversify_1.injectable()
    ], SemanticHighlightingService);
    return SemanticHighlightingService;
}());
exports.SemanticHighlightingService = SemanticHighlightingService;
(function (SemanticHighlightingService) {
    var LENGTH_SHIFT = 0x0000010;
    var SCOPE_MASK = 0x000FFFF;
    var Token;
    (function (Token) {
        function fromArray(tokens) {
            if (tokens.length % 3 !== 0) {
                throw new Error("\"Invalid tokens. 'tokens.length % 3 !== 0' Tokens length was: \" + " + tokens.length + ".");
            }
            var result = [];
            for (var i = 0; i < tokens.length; i = i + 3) {
                result.push({
                    character: tokens[i],
                    length: tokens[i + 1],
                    scope: tokens[i + 2]
                });
            }
            return result;
        }
        Token.fromArray = fromArray;
    })(Token = SemanticHighlightingService.Token || (SemanticHighlightingService.Token = {}));
    /**
     * Converts the compact, `base64` string token into an array of tokens.
     */
    function decode(tokens) {
        if (!tokens) {
            return [];
        }
        var buffer = base64_arraybuffer_1.decode(tokens);
        var dataView = new DataView(buffer);
        var result = [];
        for (var i = 0; i < buffer.byteLength / Uint32Array.BYTES_PER_ELEMENT; i = i + 2) {
            var character = dataView.getUint32(i * Uint32Array.BYTES_PER_ELEMENT);
            var lengthAndScope = dataView.getUint32((i + 1) * Uint32Array.BYTES_PER_ELEMENT);
            var length_1 = lengthAndScope >>> LENGTH_SHIFT;
            var scope = lengthAndScope & SCOPE_MASK;
            result.push({
                character: character,
                length: length_1,
                scope: scope
            });
        }
        return result;
    }
    SemanticHighlightingService.decode = decode;
    /**
     * Encodes the array of tokens into a compact `base64` string representation.
     */
    function encode(tokens) {
        if (!tokens || tokens.length === 0) {
            return '';
        }
        var buffer = new ArrayBuffer(tokens.length * 2 * Uint32Array.BYTES_PER_ELEMENT);
        var dataView = new DataView(buffer);
        var j = 0;
        for (var i = 0; i < tokens.length; i++) {
            var _a = tokens[i], character = _a.character, length_2 = _a.length, scope = _a.scope;
            var lengthAndScope = length_2;
            lengthAndScope = lengthAndScope << LENGTH_SHIFT;
            lengthAndScope |= scope;
            dataView.setUint32(j++ * Uint32Array.BYTES_PER_ELEMENT, character);
            dataView.setUint32(j++ * Uint32Array.BYTES_PER_ELEMENT, lengthAndScope);
        }
        return base64_arraybuffer_1.encode(buffer);
    }
    SemanticHighlightingService.encode = encode;
    /**
     * Creates a new text document feature to handle the semantic highlighting capabilities of the protocol.
     * When the feature gets initialized, it delegates to the semantic highlighting service and registers the TextMate scopes received as part of the server capabilities.
     * Plus, each time when a notification is received by the client, the semantic highlighting service will be used as the consumer and the highlighting information
     * will be used to decorate the text editor.
     */
    function createNewFeature(service, client) {
        var languageId = client.languageId;
        var initializeCallback = function (id, scopes) { return service.register(id, scopes); };
        var consumer = function (params) {
            var toRanges = function (tuple) {
                var _a = __read(tuple, 2), line = _a[0], tokens = _a[1];
                if (!tokens) {
                    return [
                        {
                            start: vscode_languageserver_types_1.Position.create(line, 0),
                            end: vscode_languageserver_types_1.Position.create(line, 0),
                        }
                    ];
                }
                return SemanticHighlightingService.decode(tokens).map(function (token) { return ({
                    start: vscode_languageserver_types_1.Position.create(line, token.character),
                    end: vscode_languageserver_types_1.Position.create(line, token.character + token.length),
                    scope: token.scope
                }); });
            };
            var ranges = params.lines.map(function (line) { return [line.line, line.tokens]; }).map(toRanges).reduce(function (acc, current) { return acc.concat(current); }, []);
            var uri = new uri_1.default(params.textDocument.uri);
            service.decorate(languageId, uri, ranges);
        };
        return new semantic_highlighting_feature_1.SemanticHighlightFeature(client, initializeCallback, consumer);
    }
    SemanticHighlightingService.createNewFeature = createNewFeature;
})(SemanticHighlightingService = exports.SemanticHighlightingService || (exports.SemanticHighlightingService = {}));
exports.SemanticHighlightingService = SemanticHighlightingService;
//# sourceMappingURL=semantic-highlighting-service.js.map