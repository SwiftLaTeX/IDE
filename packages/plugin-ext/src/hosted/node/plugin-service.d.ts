import { HostedPluginServer, HostedPluginClient, GetDeployedPluginsParams, DeployedPlugin } from '../../common/plugin-protocol';
import { HostedPluginSupport } from './hosted-plugin';
import { ILogger, Disposable } from '@theia/core';
import { ContributionProvider } from '@theia/core';
import { ExtPluginApiProvider, ExtPluginApi } from '../../common/plugin-ext-api-contribution';
import { HostedPluginDeployerHandler } from './hosted-plugin-deployer-handler';
import { PluginDeployerImpl } from '../../main/node/plugin-deployer-impl';
export declare class HostedPluginServerImpl implements HostedPluginServer {
    private readonly hostedPlugin;
    protected readonly logger: ILogger;
    protected readonly deployerHandler: HostedPluginDeployerHandler;
    protected readonly pluginDeployer: PluginDeployerImpl;
    protected readonly extPluginAPIContributions: ContributionProvider<ExtPluginApiProvider>;
    protected client: HostedPluginClient | undefined;
    protected deployedListener: Disposable;
    constructor(hostedPlugin: HostedPluginSupport);
    protected init(): void;
    dispose(): void;
    setClient(client: HostedPluginClient): void;
    getDeployedPluginIds(): Promise<string[]>;
    getDeployedPlugins({ pluginIds }: GetDeployedPluginsParams): Promise<DeployedPlugin[]>;
    onMessage(message: string): Promise<void>;
    getExtPluginAPI(): Promise<ExtPluginApi[]>;
}
//# sourceMappingURL=plugin-service.d.ts.map