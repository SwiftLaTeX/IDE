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
import { Tree, TreeNode } from './tree';
import { Event, Emitter, Disposable, DisposableCollection, MaybePromise } from '../../common';
import { WidgetDecoration } from '../widget-decoration';
/**
 * Tree decorator that can change the look and the style of the tree items within a widget.
 */
export interface TreeDecorator {
    /**
     * The unique identifier of the decorator. Ought to be unique in the application.
     */
    readonly id: string;
    /**
     * Fired when this decorator has calculated all the decoration data for the tree nodes. Keys are the unique identifier of the tree nodes.
     */
    readonly onDidChangeDecorations: Event<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    /**
     * Returns with the current decoration data for the tree argument.
     *
     * @param tree the tree to decorate.
     */
    decorations(tree: Tree): MaybePromise<Map<string, TreeDecoration.Data>>;
}
/**
 * Decorator service which emits events from all known tree decorators.
 * Keys are the unique tree node IDs and the values
 * are the decoration data collected from all the decorators known by this service.
 */
export declare const TreeDecoratorService: unique symbol;
export interface TreeDecoratorService extends Disposable {
    /**
     * Fired when any of the available tree decorators has changes.
     */
    readonly onDidChangeDecorations: Event<void>;
    /**
     * Returns with the decorators for the tree based on the actual state of this decorator service.
     */
    getDecorations(tree: Tree): MaybePromise<Map<string, TreeDecoration.Data[]>>;
    /**
     * Transforms the decorators argument into an object, so that it can be safely serialized into JSON.
     */
    deflateDecorators(decorations: Map<string, TreeDecoration.Data[]>): object;
    /**
     * Counterpart of the [deflateDecorators](#deflateDecorators) method. Restores the argument into a Map
     * of tree node IDs and the corresponding decorations data array.
     */
    inflateDecorators(state: any): Map<string, TreeDecoration.Data[]>;
}
/**
 * The default tree decorator service. Does nothing at all. One has to rebind to a concrete implementation
 * if decorators have to be supported in the tree widget.
 */
export declare class NoopTreeDecoratorService implements TreeDecoratorService {
    protected readonly emitter: Emitter<void>;
    readonly onDidChangeDecorations: Event<void>;
    dispose(): void;
    getDecorations(): Map<any, any>;
    deflateDecorators(): object;
    inflateDecorators(): Map<string, TreeDecoration.Data[]>;
}
/**
 * Abstract decorator service implementation which emits events from all known tree decorators and caches the current state.
 */
export declare abstract class AbstractTreeDecoratorService implements TreeDecoratorService {
    protected readonly decorators: ReadonlyArray<TreeDecorator>;
    protected readonly onDidChangeDecorationsEmitter: Emitter<void>;
    readonly onDidChangeDecorations: Event<void>;
    protected readonly toDispose: DisposableCollection;
    constructor(decorators: ReadonlyArray<TreeDecorator>);
    dispose(): void;
    getDecorations(tree: Tree): Promise<Map<string, TreeDecoration.Data[]>>;
    deflateDecorators(decorations: Map<string, TreeDecoration.Data[]>): object;
    inflateDecorators(state: any): Map<string, TreeDecoration.Data[]>;
}
/**
 * @deprecated import from `@theia/core/lib/browser/widget-decoration` instead.
 */
export import TreeDecoration = WidgetDecoration;
export interface DecoratedTreeNode extends TreeNode {
    /**
     * The additional tree decoration data attached to the tree node itself.
     */
    readonly decorationData: TreeDecoration.Data;
}
export declare namespace DecoratedTreeNode {
    /**
     * Type-guard for decorated tree nodes.
     */
    function is(node: TreeNode | undefined): node is DecoratedTreeNode;
}
//# sourceMappingURL=tree-decorator.d.ts.map