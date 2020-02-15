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
import { Disposable } from '@theia/core';
export declare class EditorDecorationStyle implements Disposable {
    readonly selector: string;
    constructor(selector: string, styleProvider: (style: CSSStyleDeclaration) => void);
    get className(): string;
    dispose(): void;
}
export declare namespace EditorDecorationStyle {
    function copyStyle(from: CSSStyleDeclaration, to: CSSStyleDeclaration): void;
    function createStyleSheet(container?: HTMLElement): CSSStyleSheet | undefined;
    function createRule(selector: string, styleProvider: (style: CSSStyleDeclaration) => void, styleSheet?: CSSStyleSheet | undefined): void;
    function deleteRule(selector: string, styleSheet?: CSSStyleSheet | undefined): void;
}
//# sourceMappingURL=editor-decoration-style.d.ts.map