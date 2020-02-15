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
import * as React from 'react';
import { DisposableCollection } from '@theia/core';
import { NotificationManager, NotificationUpdateEvent } from './notifications-manager';
export interface NotificationToastsComponentProps {
    readonly manager: NotificationManager;
}
declare type NotificationToastsComponentState = Pick<NotificationUpdateEvent, Exclude<keyof NotificationUpdateEvent, 'notifications'>>;
export declare class NotificationToastsComponent extends React.Component<NotificationToastsComponentProps, NotificationToastsComponentState> {
    constructor(props: NotificationToastsComponentProps);
    protected readonly toDisposeOnUnmount: DisposableCollection;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export {};
//# sourceMappingURL=notification-toasts-component.d.ts.map