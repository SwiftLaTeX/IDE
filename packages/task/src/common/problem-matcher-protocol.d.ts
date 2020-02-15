/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { Severity } from '@theia/core/lib/common/severity';
import { Diagnostic } from 'vscode-languageserver-types';
import vscodeURI from 'vscode-uri/lib/umd';
import { ProblemPatternContribution, WatchingMatcherContribution } from './task-protocol';
export declare enum ApplyToKind {
    allDocuments = 0,
    openDocuments = 1,
    closedDocuments = 2
}
export declare namespace ApplyToKind {
    function fromString(value: string | undefined): ApplyToKind | undefined;
}
export declare enum FileLocationKind {
    Auto = 0,
    Relative = 1,
    Absolute = 2
}
export declare namespace FileLocationKind {
    function fromString(value: string): FileLocationKind | undefined;
}
export interface WatchingPattern {
    regexp: string;
    file?: number;
}
export interface WatchingMatcher {
    activeOnStart: boolean;
    beginsPattern: WatchingPattern;
    endsPattern: WatchingPattern;
}
export declare namespace WatchingMatcher {
    function fromWatchingMatcherContribution(value: WatchingMatcherContribution | undefined): WatchingMatcher | undefined;
}
export declare enum ProblemLocationKind {
    File = 0,
    Location = 1
}
export declare namespace ProblemLocationKind {
    function fromString(value: string): ProblemLocationKind | undefined;
}
export interface ProblemMatcher {
    deprecated?: boolean;
    owner: string;
    source?: string;
    applyTo: ApplyToKind;
    fileLocation: FileLocationKind;
    filePrefix?: string;
    pattern: ProblemPattern | ProblemPattern[];
    severity?: Severity;
    watching?: WatchingMatcher;
    uriProvider?: (path: string) => vscodeURI;
}
export interface NamedProblemMatcher extends ProblemMatcher {
    name: string;
    label: string;
}
export declare namespace ProblemMatcher {
    function isWatchModeWatcher(matcher: ProblemMatcher): boolean;
}
export interface ProblemPattern {
    name?: string;
    regexp: string;
    kind?: ProblemLocationKind;
    file?: number;
    message?: number;
    location?: number;
    line?: number;
    character?: number;
    endLine?: number;
    endCharacter?: number;
    code?: number;
    severity?: number;
    loop?: boolean;
}
export interface NamedProblemPattern extends ProblemPattern {
    name: string;
}
export declare namespace ProblemPattern {
    function fromProblemPatternContribution(value: ProblemPatternContribution): ProblemPattern;
}
export interface ProblemMatch {
    resource?: vscodeURI;
    description: ProblemMatcher;
}
export interface ProblemMatchData extends ProblemMatch {
    marker: Diagnostic;
}
export declare namespace ProblemMatchData {
    function is(data: ProblemMatch): data is ProblemMatchData;
}
//# sourceMappingURL=problem-matcher-protocol.d.ts.map