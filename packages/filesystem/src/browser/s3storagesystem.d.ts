/**
 * Configuration options for file system.
 */
export declare class S3StorageSystemOptions {
    bucket: string;
    prefix: string;
    apiKey: string;
    apiSecret: string;
    sessionToken: string;
    endpoint: string;
    expiry: number;
}
interface MetaDictionary<T> {
    [key: string]: T;
}
interface DirectoryInode {
    node_id: string;
    is_dir: boolean;
}
/**
 * FileStat
 */
export declare class S3Object {
    modifiedTime: Date;
    ETag: string;
    size: number;
    meta: MetaDictionary<string>;
    data: Uint8Array | string | undefined;
    key: string;
    uri: string;
    isDir: boolean;
}
/**
 * Configuration options for file system. All APIs do not accpet parameter ends with '/'
 */
export declare class S3StorageSystem {
    private s3;
    opts: S3StorageSystemOptions;
    private s3lock;
    private readonly fileSystemWatcherServer;
    constructor();
    private _init_fs;
    _resolvePath(p: string): Promise<DirectoryInode | undefined>;
    ensureDirExist(p: string): Promise<void>;
    stat(p: string): Promise<S3Object | undefined>;
    readdir(p: string): Promise<S3Object[]>;
    mkdir(p: string): Promise<void>;
    writeFile(p: string, data: string | Uint8Array): Promise<void>;
    delete(p: string): Promise<void>;
    zipDir(p: string): Promise<Uint8Array>;
    copyFile(p: string, newPath: string): Promise<void>;
    copyFolder(p: string, newPath: string): Promise<void>;
    private _walkdir;
    rename(p: string, newPath: string): Promise<void>;
    readFile(p: string): Promise<Uint8Array>;
    _headObject(key: string): Promise<S3Object | undefined>;
    _getObject(key: string): Promise<S3Object | undefined>;
    _putObject(key: string, obj: S3Object): Promise<void>;
    _copyObject(srcKey: string, dstKey: string): Promise<void>;
    private _lock;
    private _unlock;
    private _prepareLocked;
}
export {};
//# sourceMappingURL=s3storagesystem.d.ts.map