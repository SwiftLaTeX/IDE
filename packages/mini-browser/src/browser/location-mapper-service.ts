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

import { inject, injectable, named } from 'inversify';
import URI from '@theia/core/lib/common/uri';
import { Endpoint } from '@theia/core/lib/browser';
import { MaybePromise, Prioritizeable } from '@theia/core/lib/common/types';
import { ContributionProvider } from '@theia/core/lib/common/contribution-provider';
import { S3StorageSystem } from '@theia/filesystem/lib/browser/s3storagesystem';
/**
 * Contribution for the `LocationMapperService`.
 */
export const LocationMapper = Symbol('LocationMapper');
export interface LocationMapper {

    /**
     * Should return with a positive number if the current contribution can handle the given location.
     * The number indicates the priority of the location mapper. If it is not a positive number, it means, the
     * contribution cannot handle the location.
     */
    canHandle(location: string): MaybePromise<number>;

    /**
     * Maps the given location.
     */
    map(location: string): MaybePromise<string>;

}

/**
 * Location mapper service.
 */
@injectable()
export class LocationMapperService {

    @inject(ContributionProvider)
    @named(LocationMapper)
    protected readonly contributions: ContributionProvider<LocationMapper>;

    async map(location: string): Promise<string> {
        const contributions = await this.prioritize(location);
        if (contributions.length === 0) {
            return this.defaultMapper()(location);
        }
        return contributions[0].map(location);
    }

    protected defaultMapper(): (location: string) => MaybePromise<string> {
        return location => `${new Endpoint().httpScheme}//${location}`;
    }

    protected async prioritize(location: string): Promise<LocationMapper[]> {
        const prioritized = await Prioritizeable.prioritizeAll(this.getContributions(), contribution => contribution.canHandle(location));
        return prioritized.map(p => p.value);
    }

    protected getContributions(): LocationMapper[] {
        return this.contributions.getContributions();
    }

}

/**
 * HTTP location mapper.
 */
@injectable()
export class HttpLocationMapper implements LocationMapper {

    canHandle(location: string): MaybePromise<number> {
        return location.startsWith('http://') ? 1 : 0;
    }

    map(location: string): MaybePromise<string> {
        return location;
    }

}

// /**
//  * HTTPS location mapper.
//  */
@injectable()
export class HttpsLocationMapper implements LocationMapper {

    canHandle(location: string): MaybePromise<number> {
        return location.startsWith('https://') ? 1 : 0;
    }

    map(location: string): MaybePromise<string> {
        return location;
    }

}

/**
 * Location mapper for locations without a scheme.
 */
@injectable()
export class LocationWithoutSchemeMapper implements LocationMapper {

    canHandle(location: string): MaybePromise<number> {
        return new URI(location).scheme === '' ? 1 : 0;
    }

    map(location: string): MaybePromise<string> {
        return `http://${location}`;
    }

}

/**
 * `file` URI location mapper.
 */
@injectable()
export class FileLocationMapper implements LocationMapper {
    @inject(S3StorageSystem) protected readonly _s3fs: S3StorageSystem;

    canHandle(location: string): MaybePromise<number> {
        return location.startsWith('file://') ? 1 : 0;
    }

    map(location: string): MaybePromise<string> {
        const uri = new URI(location);
        if (uri.scheme !== 'file') {
            throw new Error(`Only URIs with 'file' scheme can be mapped to an URL. URI was: ${uri}.`);
        }
        const dstPath = location.substr(7);

        return new Promise((resolve, reject) => {
            this._s3fs._resolvePath(dstPath).then(node => {
                if (!node) {
                    reject(new Error(`Failed to resolve. URI was: ${uri}.`));
                }
                const contentType = this.guessContentType(location);
                resolve(`${this._s3fs.opts.endpoint}/${this._s3fs.opts.bucket}/${this._s3fs.opts.prefix}${node!.node_id}?response-content-type=${contentType}`);
            });
        });
        // let rawLocation = uri.path.toString();
        // if (rawLocation.charAt(0) === '/') {
        //     rawLocation = rawLocation.substr(1);
        // }
        // return new MiniBrowserEndpoint().getRestUrl().resolve(rawLocation).toString();
    }

    protected guessContentType(path: string): string {
        if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
            return 'image/jpeg';
        }

        if (path.endsWith('.bmp')) {
            return 'image/bmp';
        }

        if (path.endsWith('.png')) {
            return 'image/png';
        }

        if (path.endsWith('.gif')) {
            return 'image/gif';
        }

        if (path.endsWith('.svg')) {
            return 'image/svg+xml';
        }

        if (path.endsWith('.pdf')) {
            return 'application/pdf';
        }

        if (path.endsWith('.html')) {
            return 'text/html';
        }

        return 'application/octet-stream';
    }

}

export class MiniBrowserEndpoint extends Endpoint {
    constructor() {
        super({ path: 'mini-browser' });
    }
}
