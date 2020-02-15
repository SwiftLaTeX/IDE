import { MiniBrowserService } from '../common/mini-browser-service';
export declare class MiniBrowserDummyServer implements MiniBrowserService {
    supportedFileExtensions(): Promise<Readonly<{
        extension: string;
        priority: number;
    }>[]>;
}
//# sourceMappingURL=mini-browser-dummy-server.d.ts.map