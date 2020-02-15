import { MetricsContribution } from './metrics-contribution';
import { ApplicationPackage } from '@theia/application-package';
export declare class ExtensionMetricsContribution implements MetricsContribution {
    private metrics;
    protected readonly applicationPackage: ApplicationPackage;
    getMetrics(): string;
    startCollecting(): void;
}
//# sourceMappingURL=extensions-metrics-contribution.d.ts.map