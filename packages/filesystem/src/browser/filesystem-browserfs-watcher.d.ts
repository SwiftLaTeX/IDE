import { FileSystemWatcherServer, WatchOptions, FileSystemWatcherClient } from '../common/filesystem-watcher-protocol';
export declare class WorkspaceBrowserFileSystemWatcher implements FileSystemWatcherServer {
    /**
     * Start file watching for the given param.
     * Resolve when watching is started.
     * Return a watcher id.
     */
    private files2Watch;
    watchFileChanges(uri: string, options?: WatchOptions): Promise<number>;
    /**
     * Stop file watching for the given id.
     * Resolve when watching is stopped.
     */
    unwatchFileChanges(watcher: number): Promise<void>;
    kernel_notify(path: string, changeType?: number): Promise<void>;
    protected client: FileSystemWatcherClient | undefined;
    setClient(client: FileSystemWatcherClient | undefined): void;
    dispose(): void;
}
//# sourceMappingURL=filesystem-browserfs-watcher.d.ts.map