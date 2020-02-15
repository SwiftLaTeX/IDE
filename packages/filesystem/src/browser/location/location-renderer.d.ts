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
import URI from '@theia/core/lib/common/uri';
import { LocationService } from './location-service';
import { ReactRenderer } from '@theia/core/lib/browser/widgets/react-renderer';
import * as React from 'react';
export declare class LocationListRenderer extends ReactRenderer {
    protected readonly service: LocationService;
    protected _drives: URI[] | undefined;
    constructor(service: LocationService, host?: HTMLElement);
    render(): void;
    protected readonly handleLocationChanged: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    protected doRender(): React.ReactNode;
    /**
     * Collects the available locations based on the currently selected, and appends the available drives to it.
     */
    protected collectLocations(): LocationListRenderer.Location[];
    /**
     * Asynchronously loads the drives (if not yet available) and triggers a UI update on success with the new values.
     */
    protected doLoadDrives(): void;
    protected renderLocation(location: LocationListRenderer.Location): React.ReactNode;
    protected onLocationChanged(e: React.ChangeEvent<HTMLSelectElement>): void;
    get locationList(): HTMLSelectElement | undefined;
}
export declare namespace LocationListRenderer {
    namespace Styles {
        const LOCATION_LIST_CLASS = "theia-LocationList";
    }
    interface Location {
        uri: URI;
        isDrive?: boolean;
    }
}
//# sourceMappingURL=location-renderer.d.ts.map