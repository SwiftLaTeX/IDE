/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { DialogProps } from './dialogs';
import { ReactDialog } from './dialogs/react-dialog';
import { ApplicationServer, ApplicationInfo, ExtensionInfo } from '../common/application-protocol';
export declare const ABOUT_CONTENT_CLASS = "theia-aboutDialog";
export declare const ABOUT_EXTENSIONS_CLASS = "theia-aboutExtensions";
export declare class AboutDialogProps extends DialogProps {
}
export declare class AboutDialog extends ReactDialog<void> {
    protected readonly props: AboutDialogProps;
    protected applicationInfo: ApplicationInfo | undefined;
    protected extensionsInfos: ExtensionInfo[];
    protected readonly okButton: HTMLButtonElement;
    protected readonly appServer: ApplicationServer;
    constructor(props: AboutDialogProps);
    protected init(): Promise<void>;
    protected renderHeader(): React.ReactNode;
    protected renderExtensions(): React.ReactNode;
    protected render(): React.ReactNode;
    get value(): undefined;
}
//# sourceMappingURL=about-dialog.d.ts.map