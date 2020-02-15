"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var logger_protocol_1 = require("../common/logger-protocol");
var logger_1 = require("../common/logger");
var logger_watcher_1 = require("../common/logger-watcher");
// import { WebSocketConnectionProvider } from './messaging';
var frontend_application_1 = require("./frontend-application");
var logger_dummy_server_1 = require("./logger-dummy-server");
exports.loggerFrontendModule = new inversify_1.ContainerModule(function (bind) {
    bind(frontend_application_1.FrontendApplicationContribution).toDynamicValue(function (ctx) { return ({
        initialize: function () {
            logger_1.setRootLogger(ctx.container.get(logger_1.ILogger));
        }
    }); });
    bind(logger_1.LoggerName).toConstantValue(logger_1.rootLoggerName);
    bind(logger_1.ILogger).to(logger_1.Logger).inSingletonScope().whenTargetIsDefault();
    bind(logger_watcher_1.LoggerWatcher).toSelf().inSingletonScope();
    // bind(ILoggerServer).toDynamicValue(ctx => {
    //     const loggerWatcher = ctx.container.get(LoggerWatcher);
    //     const connection = ctx.container.get(WebSocketConnectionProvider);
    //     const target = connection.createProxy<ILoggerServer>(loggerPath, loggerWatcher.getLoggerClient());
    //     function get<K extends keyof ILoggerServer>(_: ILoggerServer, property: K): ILoggerServer[K] | ILoggerServer['log'] {
    //         if (property === 'log') {
    //             return (name, logLevel, message, params) => {
    //                 ConsoleLogger.log(name, logLevel, message, params);
    //                 return target.log(name, logLevel, message, params);
    //             };
    //         }
    //         return target[property];
    //     }
    //     return new Proxy(target, { get });
    // }).inSingletonScope();
    bind(logger_protocol_1.ILoggerServer).to(logger_dummy_server_1.LoggerDummyServer).inSingletonScope();
    bind(logger_1.LoggerFactory).toFactory(function (ctx) {
        return function (name) {
            var child = new inversify_1.Container({ defaultScope: 'Singleton' });
            child.parent = ctx.container;
            child.bind(logger_1.ILogger).to(logger_1.Logger).inTransientScope();
            child.bind(logger_1.LoggerName).toConstantValue(name);
            return child.get(logger_1.ILogger);
        };
    });
});
//# sourceMappingURL=logger-frontend-module.js.map