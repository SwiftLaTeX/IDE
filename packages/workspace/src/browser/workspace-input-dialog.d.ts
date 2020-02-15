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
import URI from '@theia/core/lib/common/uri';
import { SingleTextInputDialog, SingleTextInputDialogProps, LabelProvider } from '@theia/core/lib/browser';
export declare class WorkspaceInputDialogProps extends SingleTextInputDialogProps {
    /**
     * The parent `URI` for the selection present in the explorer.
     * Used to display the path in which the file/folder is created at.
     */
    parentUri: URI;
}
export declare class WorkspaceInputDialog extends SingleTextInputDialog {
    protected readonly props: WorkspaceInputDialogProps;
    protected readonly labelProvider: LabelProvider;
    constructor(props: WorkspaceInputDialogProps, labelProvider: LabelProvider);
    /**
     * Append the human-readable parent `path` to the dialog.
     * When possible, display the relative path, else display the full path (ex: workspace root).
     */
    protected appendParentPath(): void;
}
//# sourceMappingURL=workspace-input-dialog.d.ts.map