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
import { Message } from '@theia/core/lib/browser';
import { OutputChannelManager, OutputChannel } from '../common/output-channel';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import * as React from 'react';
import '../../src/browser/style/output.css';
export declare const OUTPUT_WIDGET_KIND = "outputView";
export declare class OutputWidget extends ReactWidget {
    protected readonly outputChannelManager: OutputChannelManager;
    constructor();
    protected init(): void;
    protected onActivateRequest(msg: Message): void;
    protected registerListener(outputChannel: OutputChannel): void;
    protected render(): React.ReactNode;
    clear(): void;
    protected renderChannelContents(): React.ReactNode;
    protected renderLines(): React.ReactNode[];
    protected onUpdateRequest(msg: Message): void;
}
export declare namespace OutputWidget {
    namespace IDs {
        const CONTENTS = "outputContents";
        const CHANNEL_LIST = "outputChannelList";
    }
}
//# sourceMappingURL=output-widget.d.ts.map