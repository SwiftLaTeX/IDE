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
import { Emitter, Event } from '@theia/core';
import { OutputPreferences } from './output-preferences';
import { Disposable, DisposableCollection } from 'vscode-ws-jsonrpc';
export declare class OutputChannelManager implements Disposable {
    protected readonly channels: Map<string, OutputChannel>;
    protected selectedChannelValue: OutputChannel | undefined;
    protected readonly channelDeleteEmitter: Emitter<{
        channelName: string;
    }>;
    protected readonly channelAddedEmitter: Emitter<OutputChannel>;
    protected readonly selectedChannelEmitter: Emitter<void>;
    protected readonly listOrSelectionEmitter: Emitter<void>;
    readonly onChannelDelete: Event<{
        channelName: string;
    }>;
    readonly onChannelAdded: Event<OutputChannel>;
    readonly onSelectedChannelChange: Event<void>;
    readonly onListOrSelectionChange: Event<void>;
    protected toDispose: DisposableCollection;
    protected readonly preferences: OutputPreferences;
    protected init(): void;
    protected registerListener(outputChannel: OutputChannel): void;
    getChannel(name: string): OutputChannel;
    deleteChannel(name: string): void;
    getChannels(): OutputChannel[];
    getVisibleChannels(): OutputChannel[];
    dispose(): void;
    get selectedChannel(): OutputChannel | undefined;
    set selectedChannel(channel: OutputChannel | undefined);
}
export declare class OutputChannel {
    readonly name: string;
    readonly preferences: OutputPreferences;
    private readonly visibilityChangeEmitter;
    private readonly contentChangeEmitter;
    private lines;
    private currentLine;
    private visible;
    readonly onVisibilityChange: Event<{
        visible: boolean;
    }>;
    readonly onContentChange: Event<OutputChannel>;
    constructor(name: string, preferences: OutputPreferences);
    append(value: string): void;
    appendLine(line: string): void;
    clear(): void;
    setVisibility(visible: boolean): void;
    getLines(): string[];
    get isVisible(): boolean;
}
//# sourceMappingURL=output-channel.d.ts.map