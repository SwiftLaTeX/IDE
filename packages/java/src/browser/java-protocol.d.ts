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
import { RequestType, NotificationType, TextDocumentIdentifier, Command, MessageType, ExecuteCommandParams } from '@theia/languages/lib/browser';
export interface StatusReport {
    message: string;
    type: string;
}
export declare namespace StatusNotification {
    const type: NotificationType<StatusReport, void>;
}
export interface ActionableMessage {
    severity: MessageType;
    message: string;
    data?: any;
    commands?: Command[];
}
export declare namespace ClassFileContentsRequest {
    const type: RequestType<TextDocumentIdentifier, string | undefined, void, void>;
}
export declare namespace ActionableNotification {
    const type: NotificationType<ActionableMessage, void>;
}
export declare enum CompileWorkspaceStatus {
    FAILED = 0,
    SUCCEED = 1,
    WITHERROR = 2,
    CANCELLED = 3
}
export declare namespace CompileWorkspaceRequest {
    const type: RequestType<boolean, CompileWorkspaceStatus, void, void>;
}
export declare namespace ExecuteClientCommand {
    const type: RequestType<ExecuteCommandParams, undefined, void, void>;
}
//# sourceMappingURL=java-protocol.d.ts.map