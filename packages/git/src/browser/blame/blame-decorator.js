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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
var browser_1 = require("@theia/editor/lib/browser");
var core_1 = require("@theia/core");
var moment = require("moment");
var browser_2 = require("@theia/languages/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var BlameDecorator = /** @class */ (function () {
    function BlameDecorator() {
        this.emptyHover = { contents: '' };
        this.appliedDecorations = new Map();
        this.now = moment();
    }
    BlameDecorator_1 = BlameDecorator;
    BlameDecorator.prototype.registerHoverProvider = function (uri) {
        if (this.languages.registerHoverProvider) {
            return this.languages.registerHoverProvider([{ pattern: new uri_1.default(uri).path.toString() }], this);
        }
        return core_1.Disposable.NULL;
    };
    BlameDecorator.prototype.provideHover = function (params, token) {
        return __awaiter(this, void 0, void 0, function () {
            var line, uri, applications, blame, commitLine, sha, commit, date, commitMessage, message, hover;
            return __generator(this, function (_a) {
                line = params.position.line;
                uri = params.textDocument.uri;
                applications = this.appliedDecorations.get(uri);
                if (!applications) {
                    return [2 /*return*/, this.emptyHover];
                }
                blame = applications.blame;
                if (!blame) {
                    return [2 /*return*/, this.emptyHover];
                }
                commitLine = blame.lines.find(function (l) { return l.line === line; });
                if (!commitLine) {
                    return [2 /*return*/, this.emptyHover];
                }
                sha = commitLine.sha;
                commit = blame.commits.find(function (c) { return c.sha === sha; });
                date = new Date(commit.author.timestamp);
                commitMessage = commit.summary + '\n' + (commit.body || '');
                commitMessage = commitMessage.replace(/[`\>\#\*\_\-\+]/g, '\\$&').replace(/\n/g, '  \n');
                message = commit.sha + "\n \n " + commit.author.name + ", " + date.toString() + "\n \n> " + commitMessage;
                hover = {
                    contents: [message],
                    range: browser_1.Range.create(browser_1.Position.create(line, 0), browser_1.Position.create(line, 10 ^ 10))
                };
                return [2 /*return*/, hover];
            });
        });
    };
    BlameDecorator.prototype.decorate = function (blame, editor, highlightLine) {
        var _a;
        var _this = this;
        var uri = editor.uri.toString();
        var applications = this.appliedDecorations.get(uri);
        if (!applications) {
            var that_1 = applications = new AppliedBlameDecorations();
            this.appliedDecorations.set(uri, applications);
            applications.toDispose.push(this.registerHoverProvider(uri));
            applications.toDispose.push(core_1.Disposable.create(function () {
                _this.appliedDecorations.delete(uri);
            }));
            applications.toDispose.push(core_1.Disposable.create(function () {
                editor.deltaDecorations({ oldDecorations: that_1.previousDecorations, newDecorations: [] });
            }));
        }
        if (applications.highlightedSha) {
            var sha = this.getShaForLine(blame, highlightLine);
            if (applications.highlightedSha === sha) {
                return applications;
            }
            applications.highlightedSha = sha;
        }
        var blameDecorations = this.toDecorations(blame, highlightLine);
        applications.previousStyles.dispose();
        applications.previousStyles.pushAll(blameDecorations.styles);
        var newDecorations = blameDecorations.editorDecorations;
        var oldDecorations = applications.previousDecorations;
        var appliedDecorations = editor.deltaDecorations({ oldDecorations: oldDecorations, newDecorations: newDecorations });
        applications.previousDecorations.length = 0;
        (_a = applications.previousDecorations).push.apply(_a, __spread(appliedDecorations));
        applications.blame = blame;
        return applications;
    };
    BlameDecorator.prototype.getShaForLine = function (blame, line) {
        var commitLines = blame.lines;
        var commitLine = commitLines.find(function (c) { return c.line === line; });
        return commitLine ? commitLine.sha : undefined;
    };
    BlameDecorator.prototype.toDecorations = function (blame, highlightLine) {
        var e_1, _a, e_2, _b;
        var beforeContentStyles = new Map();
        var commits = blame.commits;
        var _loop_1 = function (commit) {
            var sha = commit.sha;
            var commitTime = moment(commit.author.timestamp);
            var heat = this_1.getHeatColor(commitTime);
            var content = this_1.formatContentLine(commit, commitTime);
            var short = sha.substr(0, 7);
            var selector = 'git-' + short + '::before';
            beforeContentStyles.set(sha, new browser_1.EditorDecorationStyle(selector, function (style) {
                browser_1.EditorDecorationStyle.copyStyle(BlameDecorator_1.defaultGutterStyles, style);
                style.content = "'" + content + "'";
                style.borderColor = heat;
            }));
        };
        var this_1 = this;
        try {
            for (var commits_1 = __values(commits), commits_1_1 = commits_1.next(); !commits_1_1.done; commits_1_1 = commits_1.next()) {
                var commit = commits_1_1.value;
                _loop_1(commit);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (commits_1_1 && !commits_1_1.done && (_a = commits_1.return)) _a.call(commits_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var commitLines = blame.lines;
        var highlightedSha = this.getShaForLine(blame, highlightLine) || '';
        var previousLineSha = '';
        var editorDecorations = [];
        try {
            for (var commitLines_1 = __values(commitLines), commitLines_1_1 = commitLines_1.next(); !commitLines_1_1.done; commitLines_1_1 = commitLines_1.next()) {
                var commitLine = commitLines_1_1.value;
                var line = commitLine.line, sha = commitLine.sha;
                var beforeContentClassName = beforeContentStyles.get(sha).className;
                var options = {
                    beforeContentClassName: beforeContentClassName,
                };
                if (sha === highlightedSha) {
                    options.beforeContentClassName += ' ' + BlameDecorator_1.highlightStyle.className;
                }
                if (sha === previousLineSha) {
                    options.beforeContentClassName += ' ' + BlameDecorator_1.continuationStyle.className;
                }
                previousLineSha = sha;
                var range = browser_1.Range.create(browser_1.Position.create(line, 0), browser_1.Position.create(line, 0));
                editorDecorations.push({ range: range, options: options });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (commitLines_1_1 && !commitLines_1_1.done && (_b = commitLines_1.return)) _b.call(commitLines_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var styles = __spread(beforeContentStyles.values());
        return { editorDecorations: editorDecorations, styles: styles };
    };
    BlameDecorator.prototype.formatContentLine = function (commit, commitTime) {
        var when = commitTime.fromNow();
        var contentWidth = BlameDecorator_1.maxWidth - when.length - 2;
        var content = commit.summary.substring(0, contentWidth + 1);
        content = content.replace('\n', '↩︎').replace(/'/g, "\\'");
        if (content.length > contentWidth) {
            var cropAt = content.lastIndexOf(' ', contentWidth - 4);
            if (cropAt < contentWidth / 2) {
                cropAt = contentWidth - 3;
            }
            content = content.substring(0, cropAt) + '...';
        }
        if (content.length < contentWidth) {
            content = content + '\u2007'.repeat(contentWidth - content.length); // fill up with blanks
        }
        return content + " " + when;
    };
    BlameDecorator.prototype.getHeatColor = function (commitTime) {
        var daysFromNow = this.now.diff(commitTime, 'days');
        if (daysFromNow <= 2) {
            return 'var(--md-orange-50)';
        }
        if (daysFromNow <= 5) {
            return 'var(--md-orange-100)';
        }
        if (daysFromNow <= 10) {
            return 'var(--md-orange-200)';
        }
        if (daysFromNow <= 15) {
            return 'var(--md-orange-300)';
        }
        if (daysFromNow <= 60) {
            return 'var(--md-orange-400)';
        }
        if (daysFromNow <= 180) {
            return 'var(--md-deep-orange-600)';
        }
        if (daysFromNow <= 365) {
            return 'var(--md-deep-orange-700)';
        }
        if (daysFromNow <= 720) {
            return 'var(--md-deep-orange-800)';
        }
        return 'var(--md-deep-orange-900)';
    };
    var BlameDecorator_1;
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], BlameDecorator.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.Languages),
        __metadata("design:type", Object)
    ], BlameDecorator.prototype, "languages", void 0);
    BlameDecorator = BlameDecorator_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], BlameDecorator);
    return BlameDecorator;
}());
exports.BlameDecorator = BlameDecorator;
(function (BlameDecorator) {
    BlameDecorator.maxWidth = 50; // character
    BlameDecorator.defaultGutterStyles = {
        width: BlameDecorator.maxWidth + "ch",
        color: 'var(--theia-gitlens-gutterForegroundColor)',
        backgroundColor: 'var(--theia-gitlens-gutterBackgroundColor)',
        height: '100%',
        margin: '0 26px -1px 0',
        display: 'inline-block',
        borderRight: '2px solid',
    };
    BlameDecorator.continuationStyle = new browser_1.EditorDecorationStyle('git-blame-continuation-line::before', function (style) {
        style.content = "'\u2007'"; // blank
    });
    BlameDecorator.highlightStyle = new browser_1.EditorDecorationStyle('git-blame-highlight::before', function (style) {
        style.backgroundColor = 'var(--theia-gitlens-lineHighlightBackgroundColor)';
    });
})(BlameDecorator = exports.BlameDecorator || (exports.BlameDecorator = {}));
exports.BlameDecorator = BlameDecorator;
var AppliedBlameDecorations = /** @class */ (function () {
    function AppliedBlameDecorations() {
        this.toDispose = new core_1.DisposableCollection();
        this.previousStyles = new core_1.DisposableCollection();
        this.previousDecorations = [];
    }
    AppliedBlameDecorations.prototype.dispose = function () {
        this.previousStyles.dispose();
        this.toDispose.dispose();
        this.blame = undefined;
    };
    return AppliedBlameDecorations;
}());
exports.AppliedBlameDecorations = AppliedBlameDecorations;
//# sourceMappingURL=blame-decorator.js.map