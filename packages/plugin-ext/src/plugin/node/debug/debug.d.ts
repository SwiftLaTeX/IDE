import { CommunicationProvider } from '@theia/debug/lib/common/debug-model';
import * as theia from '@theia/plugin';
import { Breakpoint } from '../../../common/plugin-api-rpc-model';
import { DebugExt, TerminalOptionsExt } from '../../../common/plugin-api-rpc';
import { PluginPackageDebuggersContribution } from '../../../common/plugin-protocol';
import { RPCProtocol } from '../../../common/rpc-protocol';
import { CommandRegistryImpl } from '../../command-registry';
import { ConnectionExtImpl } from '../../connection-ext';
import { Disposable, Breakpoint as BreakpointExt } from '../../types-impl';
/**
 * It is supposed to work at node only.
 */
export declare class DebugExtImpl implements DebugExt {
    private sessions;
    private configurationProviders;
    /**
     * Only use internally, don't send it to the frontend. It's expensive!
     * It's already there as a part of the plugin metadata.
     */
    private debuggersContributions;
    private descriptorFactories;
    private trackerFactories;
    private contributionPaths;
    private connectionExt;
    private commandRegistryExt;
    private proxy;
    private readonly onDidChangeBreakpointsEmitter;
    private readonly onDidChangeActiveDebugSessionEmitter;
    private readonly onDidTerminateDebugSessionEmitter;
    private readonly onDidStartDebugSessionEmitter;
    private readonly onDidReceiveDebugSessionCustomEmitter;
    activeDebugSession: theia.DebugSession | undefined;
    activeDebugConsole: theia.DebugConsole;
    private readonly _breakpoints;
    get breakpoints(): theia.Breakpoint[];
    constructor(rpc: RPCProtocol);
    /**
     * Sets dependencies.
     */
    assistedInject(connectionExt: ConnectionExtImpl, commandRegistryExt: CommandRegistryImpl): void;
    /**
     * Registers contributions.
     * @param pluginFolder plugin folder path
     * @param contributions available debuggers contributions
     */
    registerDebuggersContributions(pluginFolder: string, contributions: PluginPackageDebuggersContribution[]): void;
    get onDidReceiveDebugSessionCustomEvent(): theia.Event<theia.DebugSessionCustomEvent>;
    get onDidChangeActiveDebugSession(): theia.Event<theia.DebugSession | undefined>;
    get onDidTerminateDebugSession(): theia.Event<theia.DebugSession>;
    get onDidStartDebugSession(): theia.Event<theia.DebugSession>;
    get onDidChangeBreakpoints(): theia.Event<theia.BreakpointsChangeEvent>;
    addBreakpoints(breakpoints: theia.Breakpoint[]): void;
    removeBreakpoints(breakpoints: theia.Breakpoint[]): void;
    startDebugging(folder: theia.WorkspaceFolder | undefined, nameOrConfiguration: string | theia.DebugConfiguration): PromiseLike<boolean>;
    registerDebugAdapterDescriptorFactory(debugType: string, factory: theia.DebugAdapterDescriptorFactory): Disposable;
    registerDebugAdapterTrackerFactory(debugType: string, factory: theia.DebugAdapterTrackerFactory): Disposable;
    registerDebugConfigurationProvider(debugType: string, provider: theia.DebugConfigurationProvider): Disposable;
    $onSessionCustomEvent(sessionId: string, event: string, body?: any): Promise<void>;
    $sessionDidCreate(sessionId: string): Promise<void>;
    $sessionDidDestroy(sessionId: string): Promise<void>;
    $sessionDidChange(sessionId: string | undefined): Promise<void>;
    $breakpointsDidChange(added: Breakpoint[], removed: string[], changed: Breakpoint[]): Promise<void>;
    protected toBreakpointExt({ functionName, location, enabled, condition, hitCondition, logMessage }: Breakpoint): BreakpointExt | undefined;
    $createDebugSession(debugConfiguration: theia.DebugConfiguration): Promise<string>;
    $terminateDebugSession(sessionId: string): Promise<void>;
    $getTerminalCreationOptions(debugType: string): Promise<TerminalOptionsExt | undefined>;
    doGetTerminalCreationOptions(debugType: string): Promise<TerminalOptionsExt | undefined>;
    $provideDebugConfigurations(debugType: string, workspaceFolderUri: string | undefined): Promise<theia.DebugConfiguration[]>;
    $resolveDebugConfigurations(debugConfiguration: theia.DebugConfiguration, workspaceFolderUri: string | undefined): Promise<theia.DebugConfiguration | undefined>;
    protected createDebugAdapterTracker(session: theia.DebugSession): Promise<theia.DebugAdapterTracker>;
    protected createCommunicationProvider(session: theia.DebugSession, debugConfiguration: theia.DebugConfiguration): Promise<CommunicationProvider>;
    protected resolveDebugAdapterExecutable(debugConfiguration: theia.DebugConfiguration): Promise<theia.DebugAdapterExecutable | undefined>;
    private toWorkspaceFolder;
}
//# sourceMappingURL=debug.d.ts.map