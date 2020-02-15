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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
// import { ConnectionHandler, JsonRpcConnectionHandler, ILogger  } from '@theia/core/lib/common';
var node_filesystem_1 = require("./node-filesystem");
var common_1 = require("../common");
// import { FileSystemWatcherServer, FileSystemWatcherClient, fileSystemWatcherPath } from '../common/filesystem-watcher-protocol';
// import { FileSystemWatcherServerClient } from './filesystem-watcher-client';
// import { NsfwFileSystemWatcherServer } from './nsfw-watcher/nsfw-filesystem-watcher';
// import { MessagingService } from '@theia/core/lib/node/messaging/messaging-service';
// import { NodeFileUploadService } from './node-file-upload-service';
// const SINGLE_THREADED = process.argv.indexOf('--no-cluster') !== -1;
function bindFileSystem(bind, props) {
    bind(node_filesystem_1.FileSystemNode).toSelf().inSingletonScope().onActivation(function (context, fs) {
        if (props && props.onFileSystemActivation) {
            props.onFileSystemActivation(context, fs);
        }
        return fs;
    });
    bind(common_1.FileSystem).toService(node_filesystem_1.FileSystemNode);
}
exports.bindFileSystem = bindFileSystem;
// export function bindFileSystemWatcherServer(bind: interfaces.Bind, { singleThreaded }: { singleThreaded: boolean } = { singleThreaded: SINGLE_THREADED }): void {
//     if (singleThreaded) {
//         bind(FileSystemWatcherServer).toDynamicValue(ctx => {
//             const logger = ctx.container.get<ILogger>(ILogger);
//             return new NsfwFileSystemWatcherServer({
//                 info: (message, ...args) => logger.info(message, ...args),
//                 error: (message, ...args) => logger.error(message, ...args)
//             });
//         });
//     } else {
//         bind(FileSystemWatcherServerClient).toSelf();
//         bind(FileSystemWatcherServer).toService(FileSystemWatcherServerClient);
//     }
// }
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(common_1.DispatchingFileSystemClient).toSelf().inSingletonScope();
    bindFileSystem(bind, {
        onFileSystemActivation: function (_a, fs) {
            var container = _a.container;
            fs.setClient(container.get(common_1.DispatchingFileSystemClient));
            fs.setClient = function () {
                throw new Error('use DispatchingFileSystemClient');
            };
        }
    });
    // bind(ConnectionHandler).toDynamicValue(({ container }) =>
    //     new JsonRpcConnectionHandler<FileSystemClient>(fileSystemPath, client => {
    //         const dispatching = container.get(DispatchingFileSystemClient);
    //         dispatching.clients.add(client);
    //         client.onDidCloseConnection(() => dispatching.clients.delete(client));
    //         return container.get(FileSystem);
    //     })
    // ).inSingletonScope();
    // bindFileSystemWatcherServer(bind);
    // bind(ConnectionHandler).toDynamicValue(ctx =>
    //     new JsonRpcConnectionHandler<FileSystemWatcherClient>(fileSystemWatcherPath, client => {
    //         const server = ctx.container.get<FileSystemWatcherServer>(FileSystemWatcherServer);
    //         server.setClient(client);
    //         client.onDidCloseConnection(() => server.dispose());
    //         return server;
    //     })
    // ).inSingletonScope();
    // bind(NodeFileUploadService).toSelf().inSingletonScope();
    // bind(MessagingService.Contribution).toService(NodeFileUploadService);
});
//# sourceMappingURL=filesystem-backend-module.js.map