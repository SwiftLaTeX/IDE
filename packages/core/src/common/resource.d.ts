/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import URI from '../common/uri';
import { ContributionProvider } from './contribution-provider';
import { Event, Emitter } from './event';
import { Disposable } from './disposable';
import { MaybePromise } from './types';
import { CancellationToken } from './cancellation';
import { ApplicationError } from './application-error';
export interface Resource extends Disposable {
    readonly uri: URI;
    readContents(options?: {
        encoding?: string;
    }): Promise<string>;
    saveContents?(content: string, options?: {
        encoding?: string;
    }): Promise<void>;
    saveContentChanges?(changes: TextDocumentContentChangeEvent[], options?: {
        encoding?: string;
    }): Promise<void>;
    readonly onDidChangeContents?: Event<void>;
    guessEncoding?(): Promise<string | undefined>;
}
export declare namespace Resource {
    interface SaveContext {
        content: string;
        changes?: TextDocumentContentChangeEvent[];
        options?: {
            encoding?: string;
            overwriteEncoding?: string;
        };
    }
    function save(resource: Resource, context: SaveContext, token?: CancellationToken): Promise<void>;
    function trySaveContentChanges(resource: Resource, context: SaveContext): Promise<boolean>;
    function shouldSaveContent({ content, changes }: SaveContext): boolean;
}
export declare namespace ResourceError {
    const NotFound: ApplicationError.Constructor<-40000, {
        uri: URI;
    }>;
}
export declare const ResourceResolver: unique symbol;
export interface ResourceResolver {
    /**
     * Reject if a resource cannot be provided.
     */
    resolve(uri: URI): MaybePromise<Resource>;
}
export declare const ResourceProvider: unique symbol;
export declare type ResourceProvider = (uri: URI) => Promise<Resource>;
export declare class DefaultResourceProvider {
    protected readonly resolversProvider: ContributionProvider<ResourceResolver>;
    constructor(resolversProvider: ContributionProvider<ResourceResolver>);
    /**
     * Reject if a resource cannot be provided.
     */
    get(uri: URI): Promise<Resource>;
}
export declare class MutableResource implements Resource {
    readonly uri: URI;
    readonly dispose: () => void;
    private contents;
    constructor(uri: URI, contents: string, dispose: () => void);
    readContents(): Promise<string>;
    saveContents(contents: string): Promise<void>;
    protected readonly onDidChangeContentsEmitter: Emitter<void>;
    onDidChangeContents: Event<void>;
    protected fireDidChangeContents(): void;
}
export declare class InMemoryResources implements ResourceResolver {
    private resources;
    add(uri: URI, contents: string): Resource;
    update(uri: URI, contents: string): Resource;
    resolve(uri: URI): Resource;
}
//# sourceMappingURL=resource.d.ts.map