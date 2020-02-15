"use strict";
/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var process = require("process");
var request = require("requestretry");
var mkdirp = require("mkdirp");
var tar = require("tar");
var zlib = require("zlib");
var unzip = require('unzip-stream');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function downloadPlugins(_a) {
    var _b = (_a === void 0 ? {} : _a).packed, packed = _b === void 0 ? false : _b;
    console.log('Downloading plugins...');
    // Resolve the `package.json` at the current working directory.
    var pck = require(path.resolve(process.cwd(), 'package.json'));
    // Resolve the directory for which to download the plugins.
    var pluginsDir = pck.theiaPluginsDir || 'plugins';
    mkdirp(pluginsDir, function () { });
    var _loop_1 = function (plugin) {
        if (!plugin) {
            return "continue";
        }
        var pluginUrl = pck.theiaPlugins[plugin];
        var fileExt = '';
        if (pluginUrl.endsWith('tar.gz')) {
            fileExt = '.tar.gz';
        }
        else if (pluginUrl.endsWith('vsix')) {
            fileExt = '.vsix';
        }
        else {
            console.error('Error: Unsupported file type: ' + pluginUrl);
            return "continue";
        }
        var targetPath = path.join(process.cwd(), pluginsDir, "" + plugin + (packed === true ? fileExt : ''));
        // Skip plugins which have previously been downloaded.
        if (isDownloaded(targetPath)) {
            console.log('- ' + plugin + ': already downloaded - skipping');
            return "continue";
        }
        console.log(plugin + ': downloading from ' + pluginUrl);
        var download = request(__assign(__assign({}, pck.requestOptions), { url: pluginUrl, maxAttempts: 5, retryDelay: 2000, retryStrategy: request.RetryStrategies.HTTPOrNetworkError }), function (err, response) {
            if (err) {
                console.error(plugin + ': failed to download', err);
            }
            else {
                console.log('+ ' + plugin + ': downloaded successfully' + (response.attempts > 1 ? " after " + response.attempts + "  attempts" : ''));
            }
        });
        // unzip .tar.gz files
        if (fileExt === '.tar.gz') {
            mkdirp(targetPath, function () { });
            var gunzip = zlib.createGunzip({
                finishFlush: zlib.Z_SYNC_FLUSH,
                flush: zlib.Z_SYNC_FLUSH
            });
            var untar = tar.x({ cwd: targetPath });
            download.pipe(gunzip).pipe(untar);
        }
        else {
            if (packed === true) {
                var file = fs.createWriteStream(targetPath);
                download.pipe(file);
            }
            else {
                download.pipe(unzip.Extract({ path: targetPath }));
            }
        }
    };
    for (var plugin in pck.theiaPlugins) {
        _loop_1(plugin);
    }
}
exports.default = downloadPlugins;
/**
 * Determine if the resource for the given path is already downloaded.
 * @param filePath the resource path.
 *
 * @returns `true` if the resource is already downloaded, else `false`.
 */
function isDownloaded(filePath) {
    return fs.existsSync(filePath);
}
//# sourceMappingURL=download-plugins.js.map