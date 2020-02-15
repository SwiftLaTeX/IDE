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
import { Endpoint } from '@theia/core/lib/browser';
import { MaybePromise } from '@theia/core/lib/common/types';
import { ContributionProvider } from '@theia/core/lib/common/contribution-provider';
import { S3StorageSystem } from '@theia/filesystem/lib/browser/s3storagesystem';
/**
 * Contribution for the `LocationMapperService`.
 */
export declare const LocationMapper: unique symbol;
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
export declare class LocationMapperService {
    protected readonly contributions: ContributionProvider<LocationMapper>;
    map(location: string): Promise<string>;
    protected defaultMapper(): (location: string) => MaybePromise<string>;
    protected prioritize(location: string): Promise<LocationMapper[]>;
    protected getContributions(): LocationMapper[];
}
/**
 * HTTP location mapper.
 */
export declare class HttpLocationMapper implements LocationMapper {
    canHandle(location: string): MaybePromise<number>;
    map(location: string): MaybePromise<string>;
}
export declare class HttpsLocationMapper implements LocationMapper {
    canHandle(location: string): MaybePromise<number>;
    map(location: string): MaybePromise<string>;
}
/**
 * Location mapper for locations without a scheme.
 */
export declare class LocationWithoutSchemeMapper implements LocationMapper {
    canHandle(location: string): MaybePromise<number>;
    map(location: string): MaybePromise<string>;
}
/**
 * `file` URI location mapper.
 */
export declare class FileLocationMapper implements LocationMapper {
    protected readonly _s3fs: S3StorageSystem;
    canHandle(location: string): MaybePromise<number>;
    map(location: string): MaybePromise<string>;
    protected guessContentType(path: string): string;
}
export declare class MiniBrowserEndpoint extends Endpoint {
    constructor();
}
//# sourceMappingURL=location-mapper-service.d.ts.map