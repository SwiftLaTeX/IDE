"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var WorkspaceDummyServer = /** @class */ (function () {
    function WorkspaceDummyServer() {
    }
    WorkspaceDummyServer.prototype.getMostRecentlyUsedWorkspace = function () {
        return new Promise(function (resolve, reject) {
            resolve('/');
        });
    };
    /**
     * Sets the desired string representation of the URI as the most recently used workspace folder.
     */
    WorkspaceDummyServer.prototype.setMostRecentlyUsedWorkspace = function (uri) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Returns list of recently opened workspaces as an array.
     */
    WorkspaceDummyServer.prototype.getRecentWorkspaces = function () {
        return new Promise(function (resolve, reject) {
            resolve(['/']);
        });
    };
    WorkspaceDummyServer = __decorate([
        inversify_1.injectable()
    ], WorkspaceDummyServer);
    return WorkspaceDummyServer;
}());
exports.WorkspaceDummyServer = WorkspaceDummyServer;
//# sourceMappingURL=workspace-dummy-server.js.map