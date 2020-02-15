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
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var path_1 = require("@theia/core/lib/common/path");
var hljs = require("highlight.js");
var markdownit = require("markdown-it");
var anchor = require("markdown-it-anchor");
var preview_uri_1 = require("../preview-uri");
var preview_handler_1 = require("../preview-handler");
var preview_link_normalizer_1 = require("../preview-link-normalizer");
var MarkdownPreviewHandler = /** @class */ (function () {
    function MarkdownPreviewHandler() {
        this.iconClass = 'markdown-icon file-icon';
        this.contentClass = 'markdown-preview';
    }
    MarkdownPreviewHandler.prototype.canHandle = function (uri) {
        return uri.scheme === 'file' && uri.path.ext.toLowerCase() === '.md' ? 500 : 0;
    };
    MarkdownPreviewHandler.prototype.renderContent = function (params) {
        var content = params.content;
        var renderedContent = this.getEngine().render(content, params);
        var contentElement = document.createElement('div');
        contentElement.classList.add(this.contentClass);
        contentElement.innerHTML = renderedContent;
        this.addLinkClickedListener(contentElement, params);
        return contentElement;
    };
    MarkdownPreviewHandler.prototype.addLinkClickedListener = function (contentElement, params) {
        var _this = this;
        contentElement.addEventListener('click', function (event) {
            var candidate = (event.target || event.srcElement);
            var link = _this.findLink(candidate, contentElement);
            if (link) {
                event.preventDefault();
                if (link.startsWith('#')) {
                    _this.revealFragment(contentElement, link);
                }
                else {
                    var preview = !(common_1.isOSX ? event.metaKey : event.ctrlKey);
                    var uri = _this.resolveUri(link, params.originUri, preview);
                    _this.openLink(uri, params.originUri);
                }
            }
        });
    };
    MarkdownPreviewHandler.prototype.findLink = function (element, container) {
        var candidate = element;
        while (candidate.tagName !== 'A') {
            if (candidate === container) {
                return;
            }
            candidate = candidate.parentElement;
            if (!candidate) {
                return;
            }
        }
        return candidate.getAttribute('href') || undefined;
    };
    MarkdownPreviewHandler.prototype.openLink = function (uri, originUri) {
        return __awaiter(this, void 0, void 0, function () {
            var opener;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openerService.getOpener(uri)];
                    case 1:
                        opener = _a.sent();
                        opener.open(uri, { originUri: originUri });
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkdownPreviewHandler.prototype.resolveUri = function (link, uri, preview) {
        var linkURI = new uri_1.default(link);
        // URIs are always absolute, check link as a path whether it is relative
        if (!new path_1.Path(link).isAbsolute && linkURI.scheme === uri.scheme &&
            (!linkURI.authority || linkURI.authority === uri.authority)) {
            // get a relative path from URI by trimming leading `/`
            var relativePath = linkURI.path.toString().substring(1);
            var resolvedUri = uri.parent.resolve(relativePath).withFragment(linkURI.fragment).withQuery(linkURI.query);
            return preview ? preview_uri_1.PreviewUri.encode(resolvedUri) : resolvedUri;
        }
        return linkURI;
    };
    MarkdownPreviewHandler.prototype.revealFragment = function (contentElement, fragment) {
        var elementToReveal = this.findElementForFragment(contentElement, fragment);
        if (!elementToReveal) {
            return;
        }
        elementToReveal.scrollIntoView();
    };
    MarkdownPreviewHandler.prototype.findElementForFragment = function (content, link) {
        var fragment = link.startsWith('#') ? link.substring(1) : link;
        var filter = {
            acceptNode: function (node) {
                if (node instanceof HTMLHeadingElement) {
                    if (node.tagName.toLowerCase().startsWith('h') && node.id === fragment) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_SKIP;
                }
                return NodeFilter.FILTER_SKIP;
            }
        };
        var treeWalker = document.createTreeWalker(content, NodeFilter.SHOW_ELEMENT, filter, false);
        if (treeWalker.nextNode()) {
            var element = treeWalker.currentNode;
            return element;
        }
        return undefined;
    };
    MarkdownPreviewHandler.prototype.findElementForSourceLine = function (content, sourceLine) {
        var markedElements = content.getElementsByClassName('line');
        var matchedElement;
        for (var i = 0; i < markedElements.length; i++) {
            var element = markedElements[i];
            var line = Number.parseInt(element.getAttribute('data-line') || '0');
            if (line > sourceLine) {
                break;
            }
            matchedElement = element;
        }
        return matchedElement;
    };
    MarkdownPreviewHandler.prototype.getSourceLineForOffset = function (content, offset) {
        var lineElements = this.getLineElementsAtOffset(content, offset);
        if (lineElements.length < 1) {
            return undefined;
        }
        var firstLineNumber = this.getLineNumberFromAttribute(lineElements[0]);
        if (firstLineNumber === undefined) {
            return undefined;
        }
        if (lineElements.length === 1) {
            return firstLineNumber;
        }
        var secondLineNumber = this.getLineNumberFromAttribute(lineElements[1]);
        if (secondLineNumber === undefined) {
            return firstLineNumber;
        }
        var y1 = lineElements[0].offsetTop;
        var y2 = lineElements[1].offsetTop;
        var dY = (offset - y1) / (y2 - y1);
        var dL = (secondLineNumber - firstLineNumber) * dY;
        var line = firstLineNumber + Math.floor(dL);
        return line;
    };
    /**
     * returns two significant line elements for the given offset.
     */
    MarkdownPreviewHandler.prototype.getLineElementsAtOffset = function (content, offset) {
        var skipNext = false;
        var filter = {
            acceptNode: function (node) {
                if (node instanceof HTMLElement) {
                    if (node.classList.contains('line')) {
                        if (skipNext) {
                            return NodeFilter.FILTER_SKIP;
                        }
                        if (node.offsetTop > offset) {
                            skipNext = true;
                        }
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_SKIP;
                }
                return NodeFilter.FILTER_REJECT;
            }
        };
        var treeWalker = document.createTreeWalker(content, NodeFilter.SHOW_ELEMENT, filter, false);
        var lineElements = [];
        while (treeWalker.nextNode()) {
            var element = treeWalker.currentNode;
            lineElements.push(element);
        }
        return lineElements.slice(-2);
    };
    MarkdownPreviewHandler.prototype.getLineNumberFromAttribute = function (element) {
        var attribute = element.getAttribute('data-line');
        return attribute ? Number.parseInt(attribute) : undefined;
    };
    MarkdownPreviewHandler.prototype.getEngine = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        if (!this.engine) {
            var engine_1 = this.engine = markdownit({
                html: true,
                linkify: true,
                highlight: function (str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        try {
                            return '<pre class="hljs"><code><div>' + hljs.highlight(lang, str, true).value + '</div></code></pre>';
                        }
                        catch (_a) { }
                    }
                    return '<pre class="hljs"><code><div>' + engine_1.utils.escapeHtml(str) + '</div></code></pre>';
                }
            });
            var renderers = ['heading_open', 'paragraph_open', 'list_item_open', 'blockquote_open', 'code_block', 'image', 'fence'];
            var _loop_1 = function (renderer) {
                var originalRenderer = engine_1.renderer.rules[renderer];
                engine_1.renderer.rules[renderer] = function (tokens, index, options, env, self) {
                    var token = tokens[index];
                    if (token.map) {
                        var line = token.map[0];
                        token.attrJoin('class', 'line');
                        token.attrSet('data-line', line.toString());
                    }
                    return (originalRenderer)
                        // tslint:disable-next-line:no-void-expression
                        ? originalRenderer(tokens, index, options, env, self)
                        : self.renderToken(tokens, index, options);
                };
            };
            try {
                for (var renderers_1 = __values(renderers), renderers_1_1 = renderers_1.next(); !renderers_1_1.done; renderers_1_1 = renderers_1.next()) {
                    var renderer = renderers_1_1.value;
                    _loop_1(renderer);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (renderers_1_1 && !renderers_1_1.done && (_a = renderers_1.return)) _a.call(renderers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var originalImageRenderer_1 = engine_1.renderer.rules['image'];
            engine_1.renderer.rules['image'] = function (tokens, index, options, env, self) {
                if (preview_handler_1.RenderContentParams.is(env)) {
                    var documentUri = env.originUri;
                    var token = tokens[index];
                    if (token.attrs) {
                        var srcAttr = token.attrs.find(function (a) { return a[0] === 'src'; });
                        if (srcAttr) {
                            var href = srcAttr[1];
                            srcAttr[1] = _this.linkNormalizer.normalizeLink(documentUri, href);
                        }
                    }
                }
                // tslint:disable-next-line:no-void-expression
                return originalImageRenderer_1(tokens, index, options, env, self);
            };
            var domParser_1 = new DOMParser();
            var parseDOM_1 = function (html) {
                return domParser_1.parseFromString(html, 'text/html').getElementsByTagName('body')[0];
            };
            var modifyDOM_1 = function (body, tag, procedure) {
                var elements = body.getElementsByTagName(tag);
                for (var i = 0; i < elements.length; i++) {
                    var element = elements.item(i);
                    if (element) {
                        procedure(element);
                    }
                }
            };
            var normalizeAllImgSrcInHTML_1 = function (html, normalizeLink) {
                var body = parseDOM_1(html);
                modifyDOM_1(body, 'img', function (img) {
                    var src = img.getAttributeNode('src');
                    if (src) {
                        src.nodeValue = normalizeLink(src.nodeValue || '');
                    }
                });
                return body.innerHTML;
            };
            var _loop_2 = function (name_1) {
                var originalRenderer = engine_1.renderer.rules[name_1];
                engine_1.renderer.rules[name_1] = function (tokens, index, options, env, self) {
                    var currentToken = tokens[index];
                    var content = currentToken.content;
                    if (content.includes('<img') && preview_handler_1.RenderContentParams.is(env)) {
                        var documentUri_1 = env.originUri;
                        currentToken.content = normalizeAllImgSrcInHTML_1(content, function (link) { return _this.linkNormalizer.normalizeLink(documentUri_1, link); });
                    }
                    // tslint:disable-next-line:no-void-expression
                    return originalRenderer(tokens, index, options, env, self);
                };
            };
            try {
                for (var _c = __values(['html_block', 'html_inline']), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var name_1 = _d.value;
                    _loop_2(name_1);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            anchor(engine_1, {});
        }
        return this.engine;
    };
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], MarkdownPreviewHandler.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(preview_link_normalizer_1.PreviewLinkNormalizer),
        __metadata("design:type", preview_link_normalizer_1.PreviewLinkNormalizer)
    ], MarkdownPreviewHandler.prototype, "linkNormalizer", void 0);
    MarkdownPreviewHandler = __decorate([
        inversify_1.injectable()
    ], MarkdownPreviewHandler);
    return MarkdownPreviewHandler;
}());
exports.MarkdownPreviewHandler = MarkdownPreviewHandler;
//# sourceMappingURL=markdown-preview-handler.js.map