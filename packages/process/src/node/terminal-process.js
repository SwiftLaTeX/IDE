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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var process_1 = require("./process");
var process_manager_1 = require("./process-manager");
var node_pty_1 = require("@theia/node-pty");
var multi_ring_buffer_1 = require("./multi-ring-buffer");
var dev_null_stream_1 = require("./dev-null-stream");
var utils_1 = require("./utils");
var stream_1 = require("stream");
exports.ShellQuoting = {
    strong: "'",
    weak: '"',
    escaped: '\\',
    shouldBeEscaped: ['$', ' ', '<', '>', '|', '{', '}', '(', ')', '\'', '"', '`'],
};
/**
 * Map of `Runtime (string) -> ShellQuoting`, trying to cover the
 * different ways in which each runtime manages quoting and escaping.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.RuntimeQuotingMap = {
    'bash': exports.ShellQuoting,
    'sh': exports.ShellQuoting,
    'cmd.exe': {
        strong: '"',
        weak: '"',
        escaped: '^',
        shouldBeEscaped: ['%', '<', '>', '{', '}', '"'],
    }
};
exports.TerminalProcessOptions = Symbol('TerminalProcessOptions');
exports.TerminalProcessFactory = Symbol('TerminalProcessFactory');
var TerminalProcess = /** @class */ (function (_super) {
    __extends(TerminalProcess, _super);
    function TerminalProcess(// eslint-disable-next-line @typescript-eslint/indent
    options, processManager, ringBuffer, logger) {
        var _this = _super.call(this, processManager, logger, process_1.ProcessType.Terminal, TerminalProcess_1.resolveExecOptions(options)) || this;
        _this.ringBuffer = ringBuffer;
        _this.outputStream = _this.createOutputStream();
        _this.errorStream = new dev_null_stream_1.DevNullStream({ autoDestroy: true });
        if (_this.isForkOptions(_this.options)) {
            throw new Error('terminal processes cannot be forked as of today');
        }
        _this.logger.debug('Starting terminal process', JSON.stringify(options, undefined, 2));
        try {
            _this.terminal = node_pty_1.spawn(_this.options.command, _this.options.args || [], _this.options.options || {});
            _this.terminal.on('exec', function (reason) {
                if (reason === undefined) {
                    _this.emitOnStarted();
                }
                else {
                    var error = new Error(reason);
                    error.code = reason;
                    _this.emitOnError(error);
                }
            });
            // node-pty actually wait for the underlying streams to be closed before emitting exit.
            // We should emulate the `exit` and `close` sequence.
            _this.terminal.on('exit', function (code, signal) {
                // Make sure to only pass either code or signal as !undefined, not
                // both.
                //
                // node-pty quirk: On Linux/macOS, if the process exited through the
                // exit syscall (with an exit code), signal will be 0 (an invalid
                // signal value).  If it was terminated because of a signal, the
                // signal parameter will hold the signal number and code should
                // be ignored.
                if (signal === undefined || signal === 0) {
                    _this.emitOnExit(code, undefined);
                }
                else {
                    _this.emitOnExit(undefined, utils_1.signame(signal));
                }
                process.nextTick(function () {
                    if (signal === undefined || signal === 0) {
                        _this.emitOnClose(code, undefined);
                    }
                    else {
                        _this.emitOnClose(undefined, utils_1.signame(signal));
                    }
                });
            });
            _this.terminal.on('data', function (data) {
                ringBuffer.enq(data);
            });
            _this.inputStream = new stream_1.Writable({
                write: function (chunk) {
                    _this.write(chunk);
                },
            });
        }
        catch (error) {
            _this.inputStream = new dev_null_stream_1.DevNullStream({ autoDestroy: true });
            // Normalize the error to make it as close as possible as what
            // node's child_process.spawn would generate in the same
            // situation.
            var message = error.message;
            if (message.startsWith('File not found: ')) {
                error.errno = 'ENOENT';
                error.code = 'ENOENT';
                error.path = options.command;
            }
            // node-pty throws exceptions on Windows.
            // Call the client error handler, but first give them a chance to register it.
            _this.emitOnErrorAsync(error);
        }
        return _this;
    }
    TerminalProcess_1 = TerminalProcess;
    /**
     * Resolve the exec options based on type (shell/process).
     *
     * @param options
     */
    TerminalProcess.resolveExecOptions = function (options) {
        return options.options && options.options.shell ?
            this.createShellOptions(options) : this.normalizeProcessOptions(options);
    };
    /**
     * Terminal options accept a special argument format when executing in a shell:
     * Arguments can be of the form: { value: string, quoting: string }, specifying
     * how the arg should be quoted/escaped in the shell command.
     *
     * @param options
     */
    TerminalProcess.normalizeProcessOptions = function (options) {
        return __assign(__assign({}, options), { args: options.args && options.args.map(function (arg) { return typeof arg === 'string' ? arg : arg.value; }) });
    };
    /**
     * Build the shell execution options (`runtime ...exec-argv "command ...argv"`).
     *
     * @param options
     */
    TerminalProcess.createShellOptions = function (options) {
        var e_1, _a;
        var windows = process.platform === 'win32';
        var runtime;
        var execArgs;
        var command = options.command;
        // Extract user defined runtime, if any:
        if (options.options && typeof options.options.shell === 'object') {
            runtime = options.options.shell.executable;
            execArgs = options.options.shell.args;
        }
        // Apply fallback values in case no specific runtime was specified:
        runtime = runtime || windows ?
            process.env['COMSPEC'] || 'cmd.exe' :
            process.env['SHELL'] || 'sh';
        execArgs = execArgs || windows ?
            ['/c'] : ['-c'];
        // Quote function, based on the selected runtime:
        var quoteCharacters = exports.RuntimeQuotingMap[runtime] || exports.ShellQuoting;
        function quote(string, quoting) {
            var e_2, _a;
            if (quoting === 'escaped') {
                try {
                    // Escaping most characters (https://stackoverflow.com/a/17606289/7983255)
                    for (var _b = __values(quoteCharacters.shouldBeEscaped || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var reservedSymbol = _c.value;
                        string = string.split(reservedSymbol).join(quoteCharacters.escaped + reservedSymbol);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                // Add quotes around the argument
                var q = quoteCharacters[quoting];
                string = q + string + q;
            }
            return string;
        }
        function quoteIfWhitespace(string) {
            return /\s/.test(string) ?
                quote(string, 'strong') :
                string;
        }
        // See VS Code behavior: https://code.visualstudio.com/docs/editor/tasks#_custom-tasks
        // Basically, when `task.type === 'shell` && `task.args.length > 0`, `task.command`
        // is only the executable to run in a shell, followed by the correctly escaped `args`.
        // Else just run `task.command`.
        if (options.args) {
            command = quoteIfWhitespace(command);
            try {
                for (var _b = __values(options.args), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var arg = _c.value;
                    command += ' ' + (typeof arg === 'string' ?
                        quoteIfWhitespace(arg) : quote(arg.value, arg.quoting));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return __assign(__assign({}, options), { command: runtime, args: __spread(execArgs, [command]) });
    };
    TerminalProcess.prototype.createOutputStream = function () {
        return this.ringBuffer.getStream();
    };
    Object.defineProperty(TerminalProcess.prototype, "pid", {
        get: function () {
            this.checkTerminal();
            return this.terminal.pid;
        },
        enumerable: true,
        configurable: true
    });
    TerminalProcess.prototype.kill = function (signal) {
        if (this.terminal && this.killed === false) {
            this.terminal.kill(signal);
        }
    };
    TerminalProcess.prototype.resize = function (cols, rows) {
        this.checkTerminal();
        this.terminal.resize(cols, rows);
    };
    TerminalProcess.prototype.write = function (data) {
        this.checkTerminal();
        this.terminal.write(data);
    };
    TerminalProcess.prototype.checkTerminal = function () {
        if (!this.terminal) {
            throw new Error('pty process did not start correctly');
        }
    };
    var TerminalProcess_1;
    TerminalProcess = TerminalProcess_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(exports.TerminalProcessOptions)),
        __param(1, inversify_1.inject(process_manager_1.ProcessManager)),
        __param(2, inversify_1.inject(multi_ring_buffer_1.MultiRingBuffer)),
        __param(3, inversify_1.inject(common_1.ILogger)), __param(3, inversify_1.named('process')),
        __metadata("design:paramtypes", [Object, process_manager_1.ProcessManager,
            multi_ring_buffer_1.MultiRingBuffer, Object])
    ], TerminalProcess);
    return TerminalProcess;
}(process_1.Process));
exports.TerminalProcess = TerminalProcess;
//# sourceMappingURL=terminal-process.js.map