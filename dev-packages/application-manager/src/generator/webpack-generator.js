"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var paths = require("path");
var fs = require("fs-extra");
var abstract_generator_1 = require("./abstract-generator");
var WebpackGenerator = /** @class */ (function (_super) {
    __extends(WebpackGenerator, _super);
    function WebpackGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebpackGenerator.prototype.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.write(this.genConfigPath, this.compileWebpackConfig())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.shouldGenerateUserWebpackConfig()];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.write(this.configPath, this.compileUserWebpackConfig())];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WebpackGenerator.prototype.shouldGenerateUserWebpackConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.pathExists(this.configPath)];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, fs.readFile(this.configPath, 'utf8')];
                    case 2:
                        content = _a.sent();
                        return [2 /*return*/, content.indexOf('gen-webpack') === -1];
                }
            });
        });
    };
    Object.defineProperty(WebpackGenerator.prototype, "configPath", {
        get: function () {
            return this.pck.path('webpack.config.js');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebpackGenerator.prototype, "genConfigPath", {
        get: function () {
            return this.pck.path('gen-webpack.config.js');
        },
        enumerable: true,
        configurable: true
    });
    WebpackGenerator.prototype.resolve = function (moduleName, path) {
        return this.pck.resolveModulePath(moduleName, path).split(paths.sep).join('/');
    };
    WebpackGenerator.prototype.compileWebpackConfig = function () {
        var _this = this;
        return "/**\n * Don't touch this file. It will be renerated by theia build.\n * To customize webpack configuration change " + this.configPath + "\n */\n// @ts-check\nconst path = require('path');\nconst webpack = require('webpack');\nconst yargs = require('yargs');\nconst CopyWebpackPlugin = require('copy-webpack-plugin');\nconst CircularDependencyPlugin = require('circular-dependency-plugin');\nconst CompressionPlugin = require('@theia/compression-webpack-plugin')\n\nconst outputPath = path.resolve(__dirname, 'lib');\nconst { mode, staticCompression }  = yargs.option('mode', {\n    description: \"Mode to use\",\n    choices: [\"development\", \"production\"],\n    default: \"production\"\n}).option('static-compression', {\n    description: 'Controls whether to enable compression of static artifacts.',\n    type: 'boolean',\n    default: true\n}).argv;\nconst development = mode === 'development';" + this.ifMonaco(function () { return "\n\nconst monacoEditorCorePath = development ? '" + _this.resolve('@typefox/monaco-editor-core', 'dev/vs') + "' : '" + _this.resolve('@typefox/monaco-editor-core', 'min/vs') + "';\nconst monacoCssLanguagePath = '" + _this.resolve('monaco-css', 'release/min') + "';\nconst monacoHtmlLanguagePath = '" + _this.resolve('monaco-html', 'release/min') + "';"; }) + "\n\nconst plugins = [new CopyWebpackPlugin([" + this.ifMonaco(function () { return "\n    {\n        from: monacoEditorCorePath,\n        to: 'vs'\n    },\n    {\n        from: monacoCssLanguagePath,\n        to: 'vs/language/css'\n    },\n    {\n        from: monacoHtmlLanguagePath,\n        to: 'vs/language/html'\n    }"; }) + "\n])];\n// it should go after copy-plugin in order to compress monaco as well\nif (staticCompression) {\n    plugins.push(new CompressionPlugin({\n        // enable reuse of compressed artifacts for incremental development\n        cache: development\n    }));\n}\nplugins.push(new CircularDependencyPlugin({\n    exclude: /(node_modules|examples)[\\\\|/]./,\n    failOnError: false // https://github.com/nodejs/readable-stream/issues/280#issuecomment-297076462\n}));\n\nmodule.exports = {\n    entry: path.resolve(__dirname, 'src-gen/frontend/index.js'),\n    output: {\n        filename: 'bundle.js',\n        path: outputPath\n    },\n    target: '" + this.ifBrowser('web', 'electron-renderer') + "',\n    mode,\n    node: {" + this.ifElectron("\n        __dirname: false,\n        __filename: false", "\n        fs: 'empty',\n        child_process: 'empty',\n        net: 'empty',\n        crypto: 'empty'") + "\n    },\n    module: {\n        rules: [\n            {\n                test: /worker-main\\.js$/,\n                loader: 'worker-loader',\n                options: {\n                    name: 'worker-ext.[hash].js'\n                }\n            },\n            {\n                test: /\\.css$/,\n                exclude: /materialcolors\\.css$|\\.useable\\.css$/,\n                loader: 'style-loader!css-loader'\n            },\n            {\n                test: /materialcolors\\.css$|\\.useable\\.css$/,\n                use: [\n                  {\n                    loader: 'style-loader/useable',\n                    options: {\n                      singleton: true,\n                      attrs: { id: 'theia-theme' },\n                    }\n                  },\n                  'css-loader'\n                ]\n            },\n            {\n                test: /\\.(ttf|eot|svg)(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'\n            },\n            {\n                test: /\\.(jpg|png|gif)$/,\n                loader: 'file-loader',\n                options: {\n                    name: '[hash].[ext]',\n                }\n            },\n            {\n                // see https://github.com/eclipse-theia/theia/issues/556\n                test: /source-map-support/,\n                loader: 'ignore-loader'\n            },\n            {\n                test: /\\.js$/,\n                enforce: 'pre',\n                loader: 'source-map-loader',\n                exclude: /jsonc-parser|fast-plist|onigasm|(monaco-editor.*)/\n            },\n            {\n                test: /\\.woff(2)?(\\?v=[0-9]\\.[0-9]\\.[0-9])?$/,\n                loader: \"url-loader?limit=10000&mimetype=application/font-woff\"\n            },\n            {\n                test: /node_modules[\\\\|/](vscode-languageserver-types|vscode-uri|jsonc-parser)/,\n                use: { loader: 'umd-compat-loader' }\n            },\n            {\n                test: /\\.wasm$/,\n                loader: \"file-loader\",\n                type: \"javascript/auto\",\n            },\n            {\n                test: /\\.plist$/,\n                loader: \"file-loader\",\n            },\n            {\n                test: /\\.js$/,\n                // include only es6 dependencies to transpile them to es5 classes\n                include: /monaco-languageclient|vscode-ws-jsonrpc|vscode-jsonrpc|vscode-languageserver-protocol|vscode-languageserver-types|vscode-languageclient/,\n                use: {\n                    loader: 'babel-loader',\n                    options: {\n                        presets: ['@babel/preset-env'],\n                        plugins: [\n                            // reuse runtime babel lib instead of generating it in each js file\n                            '@babel/plugin-transform-runtime',\n                            // ensure that classes are transpiled\n                            '@babel/plugin-transform-classes'\n                        ],\n                        // see https://github.com/babel/babel/issues/8900#issuecomment-431240426\n                        sourceType: 'unambiguous',\n                        cacheDirectory: true\n                    }\n                }\n            }\n        ]\n    },\n    resolve: {\n        extensions: ['.js']" + this.ifMonaco(function () { return ",\n        alias: {\n            'vs': path.resolve(outputPath, monacoEditorCorePath),\n            'vscode': require.resolve('monaco-languageclient/lib/vscode-compatibility')\n        }"; }) + "\n    },\n    devtool: 'source-map',\n    plugins,\n    stats: {\n        warnings: true\n    }\n};";
    };
    WebpackGenerator.prototype.compileUserWebpackConfig = function () {
        return "/**\n * This file can be edited to customize webpack configuration.\n * To reset delete this file and rerun theia build again.\n */\n// @ts-check\nconst config = require('./" + paths.basename(this.genConfigPath) + "');\n\n/**\n * Expose bundled modules on window.theia.moduleName namespace, e.g.\n * window['theia']['@theia/core/lib/common/uri'].\n * Such syntax can be used by external code, for instance, for testing.\nconfig.module.rules.push({\n    test: /\\.js$/,\n    loader: require.resolve('@theia/application-manager/lib/expose-loader')\n}); */\n\nmodule.exports = config;";
    };
    return WebpackGenerator;
}(abstract_generator_1.AbstractGenerator));
exports.WebpackGenerator = WebpackGenerator;
//# sourceMappingURL=webpack-generator.js.map