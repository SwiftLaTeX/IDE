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
import { TreeImpl, CompositeTreeNode, TreeNode, SelectableTreeNode, ExpandableTreeNode } from '@theia/core/lib/browser';
import { MarkerManager } from './marker-manager';
import { Marker } from '../common/marker';
import { UriSelection } from '@theia/core/lib/common/selection';
import URI from '@theia/core/lib/common/uri';
import { ProblemSelection } from './problem/problem-selection';
export declare const MarkerOptions: unique symbol;
export interface MarkerOptions {
    readonly kind: string;
}
export declare abstract class MarkerTree<T extends object> extends TreeImpl {
    protected readonly markerManager: MarkerManager<T>;
    protected readonly markerOptions: MarkerOptions;
    constructor(markerManager: MarkerManager<T>, markerOptions: MarkerOptions);
    protected refreshMarkerInfo(uri: URI): Promise<void>;
    protected resolveChildren(parent: CompositeTreeNode): Promise<TreeNode[]>;
    protected createMarkerInfo(id: string, uri: URI): MarkerInfoNode;
    protected getMarkerNodes(parent: MarkerInfoNode, markers: Marker<T>[]): MarkerNode[];
    protected createMarkerNode(marker: Marker<T>, index: number, parent: MarkerInfoNode): MarkerNode;
}
export interface MarkerNode extends UriSelection, SelectableTreeNode, ProblemSelection {
    marker: Marker<object>;
}
export declare namespace MarkerNode {
    function is(node: TreeNode | undefined): node is MarkerNode;
}
export interface MarkerInfoNode extends UriSelection, SelectableTreeNode, ExpandableTreeNode {
    parent: MarkerRootNode;
    numberOfMarkers: number;
}
export declare namespace MarkerInfoNode {
    function is(node: Object | undefined): node is MarkerInfoNode;
}
export interface MarkerRootNode extends CompositeTreeNode {
    kind: string;
}
export declare namespace MarkerRootNode {
    function is(node: TreeNode | undefined): node is MarkerRootNode;
}
//# sourceMappingURL=marker-tree.d.ts.map