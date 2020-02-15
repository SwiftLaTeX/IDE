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
/// <reference types="lodash" />
import { InMemoryResources } from '../common/resource';
import { Disposable } from '../common/disposable';
import { Emitter } from '../common/event';
import URI from '../common/uri';
export interface JsonSchemaConfiguration {
    url: string;
    fileMatch: string[];
}
export declare class JsonSchemaStore {
    protected readonly inMemoryResources: InMemoryResources;
    private readonly schemas;
    protected readonly onSchemasChangedEmitter: Emitter<void>;
    readonly onSchemasChanged: import("../common/event").Event<void>;
    protected readonly onDidChangeSchemaEmitter: Emitter<URI>;
    readonly onDidChangeSchema: import("../common/event").Event<URI>;
    protected notifyChanged: (() => void) & import("lodash").Cancelable;
    registerSchema(config: JsonSchemaConfiguration): Disposable;
    getJsonSchemaConfigurations(): JsonSchemaConfiguration[];
}
//# sourceMappingURL=json-schema-store.d.ts.map