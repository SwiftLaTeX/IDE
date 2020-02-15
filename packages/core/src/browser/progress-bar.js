"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var ProgressBar = /** @class */ (function () {
    function ProgressBar(options, onProgress) {
        var _this = this;
        this.options = options;
        this.toDispose = new common_1.DisposableCollection();
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'theia-progress-bar';
        this.progressBar.style.display = 'none';
        var progressBarContainer = document.createElement('div');
        progressBarContainer.className = 'theia-progress-bar-container';
        progressBarContainer.append(this.progressBar);
        var _a = this.options, container = _a.container, insertMode = _a.insertMode;
        if (insertMode === 'prepend') {
            container.prepend(progressBarContainer);
        }
        else {
            container.append(progressBarContainer);
        }
        this.toDispose.pushAll([
            common_1.Disposable.create(function () { return progressBarContainer.remove(); }),
            onProgress(function (event) { return _this.onProgress(event); })
        ]);
    }
    ProgressBar.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    ProgressBar.prototype.onProgress = function (event) {
        if (this.toDispose.disposed) {
            return;
        }
        this.setVisible(event.show);
    };
    ProgressBar.prototype.setVisible = function (visible) {
        this.progressBar.style.display = visible ? 'block' : 'none';
    };
    return ProgressBar;
}());
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=progress-bar.js.map