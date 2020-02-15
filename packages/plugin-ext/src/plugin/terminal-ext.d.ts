import { Terminal, TerminalOptions } from '@theia/plugin';
import { TerminalServiceExt, TerminalServiceMain } from '../common/plugin-api-rpc';
import { RPCProtocol } from '../common/rpc-protocol';
import { Deferred } from '@theia/core/lib/common/promise-util';
import * as theia from '@theia/plugin';
/**
 * Provides high level terminal plugin api to use in the Theia plugins.
 * This service allow(with help proxy) create and use terminal emulator.
 */
export declare class TerminalServiceExtImpl implements TerminalServiceExt {
    private readonly proxy;
    private readonly _terminals;
    private readonly onDidCloseTerminalEmitter;
    readonly onDidCloseTerminal: theia.Event<Terminal>;
    private readonly onDidOpenTerminalEmitter;
    readonly onDidOpenTerminal: theia.Event<Terminal>;
    private readonly onDidChangeActiveTerminalEmitter;
    readonly onDidChangeActiveTerminal: theia.Event<Terminal | undefined>;
    constructor(rpc: RPCProtocol);
    get terminals(): TerminalExtImpl[];
    createTerminal(nameOrOptions: TerminalOptions | (string | undefined), shellPath?: string, shellArgs?: string[]): Terminal;
    protected obtainTerminal(id: string, name: string): TerminalExtImpl;
    $terminalCreated(id: string, name: string): void;
    $terminalNameChanged(id: string, name: string): void;
    $terminalOpened(id: string, processId: number): void;
    $terminalClosed(id: string): void;
    private activeTerminalId;
    get activeTerminal(): TerminalExtImpl | undefined;
    $currentTerminalChanged(id: string | undefined): void;
}
export declare class TerminalExtImpl implements Terminal {
    private readonly proxy;
    name: string;
    readonly id: Deferred<string>;
    deferredProcessId: Deferred<number>;
    get processId(): Thenable<number>;
    constructor(proxy: TerminalServiceMain);
    sendText(text: string, addNewLine?: boolean): void;
    show(preserveFocus?: boolean): void;
    hide(): void;
    dispose(): void;
}
//# sourceMappingURL=terminal-ext.d.ts.map