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
import { ILogger } from '@theia/core/lib/common/logger';
import { OpenerService, OpenerOptions } from '@theia/core/lib/browser/opener-service';
import { NavigationLocationUpdater } from './navigation-location-updater';
import { NavigationLocationSimilarity } from './navigation-location-similarity';
import { NavigationLocation, ContentChangeLocation } from './navigation-location';
/**
 * The navigation location service. Also, stores and manages navigation locations.
 */
export declare class NavigationLocationService {
    private static MAX_STACK_ITEMS;
    protected readonly logger: ILogger;
    protected readonly openerService: OpenerService;
    protected readonly updater: NavigationLocationUpdater;
    protected readonly similarity: NavigationLocationSimilarity;
    protected pointer: number;
    protected stack: NavigationLocation[];
    protected canRegister: boolean;
    protected _lastEditLocation: ContentChangeLocation | undefined;
    /**
     * Registers the give locations into the service.
     */
    register(...locations: NavigationLocation[]): void;
    /**
     * Navigates one back. Returns with the previous location, or `undefined` if it could not navigate back.
     */
    back(): Promise<NavigationLocation | undefined>;
    /**
     * Navigates one forward. Returns with the next location, or `undefined` if it could not go forward.
     */
    forward(): Promise<NavigationLocation | undefined>;
    /**
     * Checks whether the service can go [`back`](#back).
     */
    canGoBack(): boolean;
    /**
     * Checks whether the service can go [`forward`](#forward).
     */
    canGoForward(): boolean;
    /**
     * Returns with all known navigation locations in chronological order.
     */
    locations(): ReadonlyArray<NavigationLocation>;
    /**
     * Returns with the current location.
     */
    currentLocation(): NavigationLocation | undefined;
    /**
     * Returns with the location of the most recent edition if any. If there were no modifications,
     * returns `undefined`.
     */
    lastEditLocation(): NavigationLocation | undefined;
    /**
     * Clears the navigation history.
     */
    clearHistory(): void;
    /**
     * Reveals the location argument. If not given, reveals the `current location`. Does nothing, if the argument is `undefined`.
     */
    reveal(location?: NavigationLocation | undefined): Promise<void>;
    /**
     * `true` if the two locations are similar.
     */
    protected isSimilar(left: NavigationLocation | undefined, right: NavigationLocation | undefined): boolean;
    /**
     * Returns with the number of navigation locations that the application can handle and manage.
     * When the number of locations exceeds this number, old locations will be erased.
     */
    protected maxStackItems(): number;
    /**
     * Returns with the opener option for the location argument.
     */
    protected toOpenerOptions(location: NavigationLocation): OpenerOptions;
    private debug;
    private get stackDump();
}
//# sourceMappingURL=navigation-location-service.d.ts.map