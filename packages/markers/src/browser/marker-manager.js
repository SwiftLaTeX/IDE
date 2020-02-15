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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var MarkerCollection = /** @class */ (function () {
    function MarkerCollection(uri, kind) {
        this.uri = uri;
        this.kind = kind;
        this.owner2Markers = new Map();
    }
    Object.defineProperty(MarkerCollection.prototype, "empty", {
        get: function () {
            return !this.owner2Markers.size;
        },
        enumerable: true,
        configurable: true
    });
    MarkerCollection.prototype.getOwners = function () {
        return Array.from(this.owner2Markers.keys());
    };
    MarkerCollection.prototype.getMarkers = function (owner) {
        return this.owner2Markers.get(owner) || [];
    };
    MarkerCollection.prototype.setMarkers = function (owner, markerData) {
        var _this = this;
        var before = this.owner2Markers.get(owner);
        if (markerData.length > 0) {
            this.owner2Markers.set(owner, markerData.map(function (data) { return _this.createMarker(owner, data); }));
        }
        else {
            this.owner2Markers.delete(owner);
        }
        return before || [];
    };
    MarkerCollection.prototype.createMarker = function (owner, data) {
        return Object.freeze({
            uri: this.uri.toString(),
            kind: this.kind,
            owner: owner,
            data: data
        });
    };
    MarkerCollection.prototype.findMarkers = function (filter) {
        var e_1, _a;
        if (filter.owner) {
            if (this.owner2Markers.has(filter.owner)) {
                return this.filterMarkers(filter, this.owner2Markers.get(filter.owner));
            }
            return [];
        }
        else {
            var result = [];
            try {
                for (var _b = __values(this.owner2Markers.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var markers = _c.value;
                    result.push.apply(result, __spread(this.filterMarkers(filter, markers)));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        }
    };
    MarkerCollection.prototype.filterMarkers = function (filter, toFilter) {
        if (!toFilter) {
            return [];
        }
        if (filter.dataFilter) {
            return toFilter.filter(function (d) { return filter.dataFilter(d.data); });
        }
        else {
            return toFilter;
        }
    };
    return MarkerCollection;
}());
exports.MarkerCollection = MarkerCollection;
var MarkerManager = /** @class */ (function () {
    function MarkerManager() {
        this.uri2MarkerCollection = new Map();
        this.onDidChangeMarkersEmitter = new common_1.Emitter();
    }
    MarkerManager.prototype.init = function () {
        var _this = this;
        this.fileWatcher.onFilesChanged(function (event) {
            var relevantEvent = event.filter(function (_a) {
                var type = _a.type;
                return type === filesystem_watcher_1.FileChangeType.DELETED;
            });
            if (relevantEvent.length) {
                _this.cleanMarkers(relevantEvent);
            }
        });
    };
    MarkerManager.prototype.cleanMarkers = function (event) {
        var e_2, _a;
        try {
            for (var _b = __values(this.uri2MarkerCollection.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var uriString = _c.value;
                var uri = new uri_1.default(uriString);
                if (filesystem_watcher_1.FileChangeEvent.isDeleted(event, uri)) {
                    this.cleanAllMarkers(uri);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(MarkerManager.prototype, "onDidChangeMarkers", {
        get: function () {
            return this.onDidChangeMarkersEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MarkerManager.prototype.fireOnDidChangeMarkers = function (uri) {
        this.onDidChangeMarkersEmitter.fire(uri);
    };
    /*
     * replaces the current markers for the given uri and owner with the given data.
     */
    MarkerManager.prototype.setMarkers = function (uri, owner, data) {
        var uriString = uri.toString();
        var collection = this.uri2MarkerCollection.get(uriString) || new MarkerCollection(uri, this.getKind());
        var oldMarkers = collection.setMarkers(owner, data);
        if (collection.empty) {
            this.uri2MarkerCollection.delete(uri.toString());
        }
        else {
            this.uri2MarkerCollection.set(uriString, collection);
        }
        this.fireOnDidChangeMarkers(uri);
        return oldMarkers;
    };
    /*
     * returns all markers that satisfy the given filter.
     */
    MarkerManager.prototype.findMarkers = function (filter) {
        var e_3, _a;
        if (filter === void 0) { filter = {}; }
        if (filter.uri) {
            var collection = this.uri2MarkerCollection.get(filter.uri.toString());
            return collection ? collection.findMarkers(filter) : [];
        }
        var result = [];
        try {
            for (var _b = __values(this.getUris()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var uri = _c.value;
                result.push.apply(result, __spread(this.uri2MarkerCollection.get(uri).findMarkers(filter)));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    MarkerManager.prototype.getUris = function () {
        return this.uri2MarkerCollection.keys();
    };
    MarkerManager.prototype.cleanAllMarkers = function (uri) {
        var e_4, _a;
        if (uri) {
            this.doCleanAllMarkers(uri);
        }
        else {
            try {
                for (var _b = __values(this.getUris()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var uriString = _c.value;
                    this.doCleanAllMarkers(new uri_1.default(uriString));
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
    };
    MarkerManager.prototype.doCleanAllMarkers = function (uri) {
        var uriString = uri.toString();
        var collection = this.uri2MarkerCollection.get(uriString);
        if (collection !== undefined) {
            this.uri2MarkerCollection.delete(uriString);
            this.fireOnDidChangeMarkers(uri);
        }
    };
    __decorate([
        inversify_1.inject(filesystem_watcher_1.FileSystemWatcher),
        __metadata("design:type", filesystem_watcher_1.FileSystemWatcher)
    ], MarkerManager.prototype, "fileWatcher", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MarkerManager.prototype, "init", null);
    MarkerManager = __decorate([
        inversify_1.injectable()
    ], MarkerManager);
    return MarkerManager;
}());
exports.MarkerManager = MarkerManager;
//# sourceMappingURL=marker-manager.js.map