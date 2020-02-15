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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var chai = require("chai");
var chai_1 = require("chai");
var uri_1 = require("@theia/core/lib/common/uri");
var markdown_preview_handler_1 = require("./markdown-preview-handler");
disableJSDOM();
chai.use(require('chai-string'));
var previewHandler;
before(function () {
    previewHandler = new markdown_preview_handler_1.MarkdownPreviewHandler();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    previewHandler.linkNormalizer = {
        normalizeLink: function (documentUri, link) {
            return 'endpoint/' + documentUri.parent.resolve(link).path.toString().substr(1);
        }
    };
});
describe('markdown-preview-handler', function () {
    before(function () {
        disableJSDOM = jsdom_1.enableJSDOM();
    });
    after(function () {
        disableJSDOM();
    });
    it('renders html with line information', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, assertRenderedContent(exampleMarkdown1, exampleHtml1)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('renders images', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, assertRenderedContent(exampleMarkdown2, exampleHtml2)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('renders HTML image as block', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, assertRenderedContent(exampleMarkdown3, exampleHtml3)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('renders HTML images inlined', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, assertRenderedContent(exampleMarkdown4, exampleHtml4)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('renders multiple HTML images in a html block', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, assertRenderedContent(exampleMarkdown5, exampleHtml5)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('finds element for source line', function () {
        document.body.innerHTML = exampleHtml1;
        var element = previewHandler.findElementForSourceLine(document.body, 4);
        chai_1.expect(element).not.to.be.equal(undefined);
        chai_1.expect(element.tagName).to.be.equal('H2');
        chai_1.expect(element.textContent).to.be.equal('License');
    });
    it('finds previous element for empty source line', function () {
        document.body.innerHTML = exampleHtml1;
        var element = previewHandler.findElementForSourceLine(document.body, 3);
        chai_1.expect(element).not.to.be.equal(undefined);
        chai_1.expect(element.tagName).to.be.equal('P');
        chai_1.expect(element.textContent).that.startWith('Shows a preview of supported resources.');
    });
    it('finds source line for offset in html', function () {
        var e_1, _a;
        mockOffsetProperties();
        document.body.innerHTML = exampleHtml1;
        try {
            for (var _b = __values([0, 1, 4, 5]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var expectedLine = _c.value;
                var line = previewHandler.getSourceLineForOffset(document.body, offsetForLine(expectedLine));
                chai_1.expect(line).to.be.equal(expectedLine);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    it('interpolates source lines for offset in html', function () {
        mockOffsetProperties();
        document.body.innerHTML = exampleHtml1;
        var expectedLines = [1, 2, 3, 4];
        var offsets = expectedLines.map(function (l) { return offsetForLine(l); });
        for (var i = 0; i < expectedLines.length; i++) {
            var expectedLine = expectedLines[i];
            var offset = offsets[i];
            var line = previewHandler.getSourceLineForOffset(document.body, offset);
            chai_1.expect(line).to.be.equal(expectedLine);
        }
    });
});
function assertRenderedContent(source, expectation) {
    return __awaiter(this, void 0, void 0, function () {
        var contentElement;
        return __generator(this, function (_a) {
            contentElement = previewHandler.renderContent({ content: source, originUri: new uri_1.default('file:///workspace/DEMO.md') });
            chai_1.expect(contentElement.innerHTML).equals(expectation);
            return [2 /*return*/];
        });
    });
}
var exampleMarkdown1 = //
 "# Theia - Preview Extension\nShows a preview of supported resources.\nSee [here](https://github.com/eclipse-theia/theia).\n\n## License\n[Apache-2.0](https://github.com/eclipse-theia/theia/blob/master/LICENSE)\n";
var exampleHtml1 = //
 "<h1 id=\"theia---preview-extension\" class=\"line\" data-line=\"0\">Theia - Preview Extension</h1>\n<p class=\"line\" data-line=\"1\">Shows a preview of supported resources.\nSee <a href=\"https://github.com/eclipse-theia/theia\">here</a>.</p>\n<h2 id=\"license\" class=\"line\" data-line=\"4\">License</h2>\n<p class=\"line\" data-line=\"5\"><a href=\"https://github.com/eclipse-theia/theia/blob/master/LICENSE\">Apache-2.0</a></p>\n";
var exampleMarkdown2 = //
 "# Heading\n![alternativetext](subfolder/image.png)\n";
var exampleHtml2 = //
 "<h1 id=\"heading\" class=\"line\" data-line=\"0\">Heading</h1>\n<p class=\"line\" data-line=\"1\"><img src=\"endpoint/workspace/subfolder/image.png\" alt=\"alternativetext\"></p>\n";
var exampleMarkdown3 = //
 "# Block HTML Image\n<img src=\"subfolder/image1.png\" alt=\"tada\"/>\n\n# Block HTML Image\n <img src=\"subfolder/image3.png\" alt=\"tada\"/>\n";
var exampleHtml3 = //
 "<h1 id=\"block-html-image\" class=\"line\" data-line=\"0\">Block HTML Image</h1>\n<img src=\"endpoint/workspace/subfolder/image1.png\" alt=\"tada\">\n<h1 id=\"block-html-image-2\" class=\"line\" data-line=\"3\">Block HTML Image</h1>\n<img src=\"endpoint/workspace/subfolder/image3.png\" alt=\"tada\">\n";
var exampleMarkdown4 = //
 "# Inlined HTML Image\ntext in paragraph <img src=\"subfolder/image2.png\" alt=\"tada\"/>\n";
var exampleHtml4 = //
 "<h1 id=\"inlined-html-image\" class=\"line\" data-line=\"0\">Inlined HTML Image</h1>\n<p class=\"line\" data-line=\"1\">text in paragraph <img src=\"endpoint/workspace/subfolder/image2.png\" alt=\"tada\"></p>\n";
var exampleMarkdown5 = //
 "# Multiple HTML Images nested in blocks\nword  <p>\n<img src=\"subfolder/image2.png\" alt=\"tada\"/>\n</p>\n\n<p>\n<img src=\"subfolder/image2.png\" alt=\"tada\"/>\n</p>\n";
var exampleHtml5 = //
 "<h1 id=\"multiple-html-images-nested-in-blocks\" class=\"line\" data-line=\"0\">Multiple HTML Images nested in blocks</h1>\n<p class=\"line\" data-line=\"1\">word  </p><p>\n<img src=\"endpoint/workspace/subfolder/image2.png\" alt=\"tada\"></p>\n<p></p>\n<p>\n<img src=\"endpoint/workspace/subfolder/image2.png\" alt=\"tada\">\n</p>\n";
/**
 * `offsetTop` of elements to be `sourceLine` number times `20`.
 */
function mockOffsetProperties() {
    Object.defineProperties(HTMLElement.prototype, {
        offsetLeft: {
            get: function () { return 0; }
        },
        offsetTop: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get: function () {
                var element = this;
                var line = Number.parseInt(element.getAttribute('data-line') || '0');
                return offsetForLine(line);
            }
        },
        offsetHeight: {
            get: function () { return 0; }
        },
        offsetWidth: {
            get: function () { return 0; }
        }
    });
}
function offsetForLine(line) {
    return line * 20;
}
//# sourceMappingURL=markdown-preview-handler.spec.js.map