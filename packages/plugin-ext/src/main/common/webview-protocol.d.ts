/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
/**
 * Each webview should be deployed on a unique origin (https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
 * to ensure isolation from browser shared state as cookies, local storage and so on.
 *
 * Use `THEIA_WEBVIEW_EXTERNAL_ENDPOINT` to customize the hostname pattern of a origin.
 * By default is `{{uuid}}.webview.{{hostname}}`. Where `{{uuid}}` is a placeholder for a webview global id.
 */
export declare namespace WebviewExternalEndpoint {
    const pattern = "THEIA_WEBVIEW_EXTERNAL_ENDPOINT";
    const defaultPattern = "{{uuid}}.webview.{{hostname}}";
}
export interface LoadWebviewResourceParams {
    uri: string;
    eTag?: string;
}
export interface LoadWebviewResourceResult {
    buffer: number[];
    eTag: string;
}
export declare const WebviewResourceLoader: unique symbol;
export interface WebviewResourceLoader {
    /**
     * Loads initial webview resource data.
     * Returns `undefined` if a resource has not beed modified.
     * Throws if a resource cannot be loaded.
     */
    load(params: LoadWebviewResourceParams): Promise<LoadWebviewResourceResult | undefined>;
}
export declare const WebviewResourceLoaderPath = "/services/webview-resource-loader";
//# sourceMappingURL=webview-protocol.d.ts.map