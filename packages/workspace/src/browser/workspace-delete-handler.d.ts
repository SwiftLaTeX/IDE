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
import { ApplicationShell } from '@theia/core/lib/browser';
import { FileSystem } from '@theia/filesystem/lib/common';
import { UriCommandHandler } from '@theia/core/lib/common/uri-command-handler';
import { WorkspaceService } from './workspace-service';
import { WorkspaceUtils } from './workspace-utils';
export declare class WorkspaceDeleteHandler implements UriCommandHandler<URI[]> {
    protected readonly fileSystem: FileSystem;
    protected readonly shell: ApplicationShell;
    protected readonly workspaceUtils: WorkspaceUtils;
    protected readonly workspaceService: WorkspaceService;
    /**
     * Determine if the command is visible.
     *
     * @param uris URIs of selected resources.
     * @returns `true` if the command is visible.
     */
    isVisible(uris: URI[]): boolean;
    /**
     * Determine if the command is enabled.
     *
     * @param uris URIs of selected resources.
     * @returns `true` if the command is enabled.
     */
    isEnabled(uris: URI[]): boolean;
    /**
     * Execute the command.
     *
     * @param uris URIs of selected resources.
     */
    execute(uris: URI[]): Promise<void>;
    /**
     * Display dialog to confirm deletion.
     *
     * @param uris URIs of selected resources.
     */
    protected confirm(uris: URI[]): Promise<boolean | undefined>;
    /**
     * Get the dialog confirmation message for deletion.
     *
     * @param uris URIs of selected resources.
     */
    protected getConfirmMessage(uris: URI[]): string | HTMLElement;
    /**
     * Get which URI are presently dirty.
     *
     * @param uris URIs of selected resources.
     * @returns An array of dirty URI.
     */
    protected getDirty(uris: URI[]): URI[];
    /**
     * Perform deletion of a given URI.
     *
     * @param uris URIs of selected resources.
     */
    protected delete(uri: URI): Promise<void>;
    /**
     * Close widget without saving changes.
     *
     * @param uri URI of a selected resource.
     */
    protected closeWithoutSaving(uri: URI): Promise<void>;
}
//# sourceMappingURL=workspace-delete-handler.d.ts.map