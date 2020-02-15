import { TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import URI from '@theia/core/lib/common/uri';
import { FileStat, FileSystem, FileSystemClient, FileMoveOptions, FileDeleteOptions } from '../common/filesystem';
import { S3StorageSystem, S3Object } from './s3storagesystem';
export declare class FileSystemBrowserOptions {
    encoding: string;
    recursive: boolean;
    overwrite: boolean;
    moveToTrash: boolean;
    static DEFAULT: FileSystemBrowserOptions;
}
export declare namespace FileUriLite {
    function create(fsPath_: string): URI;
    function fsPath(uri: URI | string): string;
}
export declare class BrowserFileSystem implements FileSystem {
    protected readonly options: FileSystemBrowserOptions;
    protected readonly _s3fs: S3StorageSystem;
    constructor(options: FileSystemBrowserOptions, _s3fs: S3StorageSystem);
    protected client: FileSystemClient | undefined;
    setClient(client: FileSystemClient | undefined): void;
    getFileStat(uri: string): Promise<FileStat | undefined>;
    exists(uri: string): Promise<boolean>;
    resolveContent(uri: string, options?: {
        encoding?: string;
    }): Promise<{
        stat: FileStat;
        content: string;
    }>;
    setContent(file: FileStat, content: string, options?: {
        encoding?: string;
    }): Promise<FileStat>;
    updateContent(file: FileStat, contentChanges: TextDocumentContentChangeEvent[], options?: {
        encoding?: string;
        overwriteEncoding?: string;
    }): Promise<FileStat>;
    protected applyContentChanges(content: string, contentChanges: TextDocumentContentChangeEvent[]): string;
    move(sourceUri: string, targetUri: string, options?: FileMoveOptions): Promise<FileStat>;
    protected doMove(sourceUri: string, targetUri: string, options?: FileMoveOptions): Promise<FileStat>;
    copy(sourceUri: string, targetUri: string, options?: {
        overwrite?: boolean;
        recursive?: boolean;
    }): Promise<FileStat>;
    createFile(uri: string, options?: {
        content?: string;
        encoding?: string;
    }): Promise<FileStat>;
    createFolder(uri: string): Promise<FileStat>;
    touchFile(uri: string): Promise<FileStat>;
    delete(uri: string, options?: FileDeleteOptions): Promise<void>;
    getEncoding(uri: string): Promise<string>;
    guessEncoding(uri: string): Promise<string | undefined>;
    getRoots(): Promise<FileStat[]>;
    getCurrentUserHome(): Promise<FileStat | undefined>;
    getDrives(): Promise<string[]>;
    dispose(): void;
    access(uri: string, mode?: number): Promise<boolean>;
    getFsPath(uri: string): Promise<string | undefined>;
    protected doGetStat(uri: URI, depth: number): Promise<FileStat | undefined>;
    protected doCreateFileStat(uri: URI, stat: S3Object): FileStat;
    protected doCreateDirectoryStat(uri: URI, stat: S3Object, depth: number): Promise<FileStat>;
    protected doGetChildren(uri: URI, depth: number): Promise<FileStat[]>;
    protected doGetEncoding(option?: {
        encoding?: string;
    }): string;
    protected doGetOverwrite(option?: {
        overwrite?: boolean;
    }): boolean;
    protected doGetRecursive(option?: {
        recursive?: boolean;
    }): boolean;
    protected doGetContent(option?: {
        content?: string;
    }): string;
}
//# sourceMappingURL=filesystem-browserfs.d.ts.map