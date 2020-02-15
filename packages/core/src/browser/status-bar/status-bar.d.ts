/********************************************************************************
 * Copyright (C) 2017-2018 TypeFox and others.
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
/// <reference types="react" />
import { CommandService } from '../../common';
import { ReactWidget } from '../widgets/react-widget';
import { FrontendApplicationStateService } from '../frontend-application-state';
import { LabelParser } from '../label-parser';
export interface StatusBarEntry {
    /**
     * For icons we use octicons and fontawesome icons. octicons take precedence over fontawesome. Get more information and the class names
     * here: http://fontawesome.io/icons/
     * To set a text with icon use the following pattern in text string:
     * $(fontawesomeClassName)
     * To use animated icons use the following pattern:
     * $(fontawesomeClassName~typeOfAnimation)
     * Type of animation can be either spin or pulse.
     * Look here for more information to animated icons:
     * http://fontawesome.io/examples/#animated
     */
    text: string;
    alignment: StatusBarAlignment;
    color?: string;
    className?: string;
    tooltip?: string;
    command?: string;
    arguments?: any[];
    priority?: number;
    onclick?: (e: MouseEvent) => void;
}
export declare enum StatusBarAlignment {
    LEFT = 0,
    RIGHT = 1
}
export interface StatusBarEntryAttributes {
    className?: string;
    title?: string;
    style?: object;
    onClick?: (e: MouseEvent) => void;
}
export declare const STATUSBAR_WIDGET_FACTORY_ID = "statusBar";
export declare const StatusBar: unique symbol;
export interface StatusBar {
    setBackgroundColor(color?: string): Promise<void>;
    setColor(color?: string): Promise<void>;
    setElement(id: string, entry: StatusBarEntry): Promise<void>;
    removeElement(id: string): Promise<void>;
}
export declare class StatusBarImpl extends ReactWidget implements StatusBar {
    protected readonly commands: CommandService;
    protected readonly entryService: LabelParser;
    protected readonly applicationStateService: FrontendApplicationStateService;
    protected backgroundColor: string | undefined;
    protected color: string | undefined;
    protected entries: Map<string, StatusBarEntry>;
    constructor(commands: CommandService, entryService: LabelParser, applicationStateService: FrontendApplicationStateService);
    protected get ready(): Promise<void>;
    setElement(id: string, entry: StatusBarEntry): Promise<void>;
    removeElement(id: string): Promise<void>;
    setBackgroundColor(color?: string): Promise<void>;
    protected internalSetBackgroundColor(color?: string): void;
    setColor(color?: string): Promise<void>;
    protected internalSetColor(color?: string): void;
    protected render(): JSX.Element;
    protected onclick(entry: StatusBarEntry): () => void;
    protected createAttributes(entry: StatusBarEntry): StatusBarEntryAttributes;
    protected renderElement(id: string, entry: StatusBarEntry): JSX.Element;
}
//# sourceMappingURL=status-bar.d.ts.map