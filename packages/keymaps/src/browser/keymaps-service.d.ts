/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
import { ResourceProvider, Resource } from '@theia/core/lib/common/resource';
import { OpenerService, Widget } from '@theia/core/lib/browser';
import { KeybindingRegistry } from '@theia/core/lib/browser/keybinding';
import { Keybinding } from '@theia/core/lib/common/keybinding';
import { Emitter } from '@theia/core/lib/common/event';
export declare class KeymapsService {
    protected readonly resourceProvider: ResourceProvider;
    protected readonly keyBindingRegistry: KeybindingRegistry;
    protected readonly opener: OpenerService;
    protected readonly changeKeymapEmitter: Emitter<void>;
    readonly onDidChangeKeymaps: import("@theia/core/src/common/event").Event<void>;
    protected resource: Resource;
    /**
     * Initialize the keybinding service.
     */
    protected init(): Promise<void>;
    /**
     * Reconcile all the keybindings, registering them to the registry.
     */
    protected reconcile(): Promise<void>;
    /**
     * Parsed the read keybindings.
     */
    protected parseKeybindings(): Promise<Keybinding[]>;
    /**
     * Open the keybindings widget.
     * @param ref the optional reference for opening the widget.
     */
    open(ref?: Widget): void;
    /**
     * Set the keybinding in the JSON.
     * @param newKeybinding the JSON keybindings.
     */
    setKeybinding(newKeybinding: Keybinding, oldKeybinding: string | undefined): Promise<void>;
    /**
     * Remove the given keybinding with the given command id from the JSON.
     * @param commandId the keybinding command id.
     */
    removeKeybinding(commandId: string): Promise<void>;
}
//# sourceMappingURL=keymaps-service.d.ts.map