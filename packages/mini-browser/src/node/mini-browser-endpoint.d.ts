/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import { Application, Request, Response } from 'express';
import { ILogger } from '@theia/core/lib/common/logger';
import { MaybePromise } from '@theia/core/lib/common/types';
import { FileSystem, FileStat } from '@theia/filesystem/lib/common';
import { ContributionProvider } from '@theia/core/lib/common/contribution-provider';
import { BackendApplicationContribution } from '@theia/core/lib/node/backend-application';
import { MiniBrowserService } from '../common/mini-browser-service';
/**
 * The return type of the `FileSystem#resolveContent` method.
 */
export interface FileStatWithContent {
    /**
     * The file stat.
     */
    readonly stat: FileStat;
    /**
     * The content of the file as a UTF-8 encoded string.
     */
    readonly content: string;
}
/**
 * Endpoint handler contribution for the `MiniBrowserEndpoint`.
 */
export declare const MiniBrowserEndpointHandler: unique symbol;
export interface MiniBrowserEndpointHandler {
    /**
     * Returns with or resolves to the file extensions supported by the current `mini-browser` endpoint handler.
     * The file extension must not start with the leading `.` (dot). For instance; `'html'` or `['jpg', 'jpeg']`.
     * The file extensions are case insensitive.
     */
    supportedExtensions(): MaybePromise<string | string[]>;
    /**
     * Returns a number representing the priority between all the available handlers for the same file extension.
     */
    priority(): number;
    /**
     * Responds back to the sender.
     */
    respond(statWithContent: FileStatWithContent, response: Response): MaybePromise<Response>;
}
export declare class MiniBrowserEndpoint implements BackendApplicationContribution, MiniBrowserService {
    /**
     * Endpoint path to handle the request for the given resource.
     */
    static HANDLE_PATH: string;
    protected readonly logger: ILogger;
    protected readonly fileSystem: FileSystem;
    protected readonly contributions: ContributionProvider<MiniBrowserEndpointHandler>;
    protected readonly handlers: Map<string, MiniBrowserEndpointHandler>;
    configure(app: Application): void;
    onStart(): Promise<void>;
    supportedFileExtensions(): Promise<Readonly<{
        extension: string;
        priority: number;
    }>[]>;
    protected response(uri: string, response: Response): Promise<Response>;
    protected getContributions(): MiniBrowserEndpointHandler[];
    protected getUri(request: Request): MaybePromise<string>;
    protected readContent(uri: string): Promise<FileStatWithContent>;
    protected errorHandler(): (error: any, uri: string, response: Response) => MaybePromise<Response>;
    protected missingResourceHandler(): (uri: string, response: Response) => MaybePromise<Response>;
    protected defaultHandler(): (statWithContent: FileStatWithContent, response: Response) => MaybePromise<Response>;
}
/**
 * Endpoint handler contribution for HTML files.
 */
export declare class HtmlHandler implements MiniBrowserEndpointHandler {
    supportedExtensions(): string[];
    priority(): number;
    respond(statWithContent: FileStatWithContent, response: Response): MaybePromise<Response>;
}
/**
 * Handler for JPG resources.
 */
export declare class ImageHandler implements MiniBrowserEndpointHandler {
    supportedExtensions(): string[];
    priority(): number;
    respond(statWithContent: FileStatWithContent, response: Response): MaybePromise<Response>;
}
/**
 * PDF endpoint handler.
 */
export declare class PdfHandler implements MiniBrowserEndpointHandler {
    supportedExtensions(): string;
    priority(): number;
    respond(statWithContent: FileStatWithContent, response: Response): MaybePromise<Response>;
}
/**
 * Endpoint contribution for SVG resources.
 */
export declare class SvgHandler implements MiniBrowserEndpointHandler {
    supportedExtensions(): string;
    priority(): number;
    respond(statWithContent: FileStatWithContent, response: Response): MaybePromise<Response>;
}
//# sourceMappingURL=mini-browser-endpoint.d.ts.map