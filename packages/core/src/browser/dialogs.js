"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("../common");
var keys_1 = require("./keyboard/keys");
var widgets_1 = require("./widgets");
var DialogProps = /** @class */ (function () {
    function DialogProps() {
    }
    DialogProps = __decorate([
        inversify_1.injectable()
    ], DialogProps);
    return DialogProps;
}());
exports.DialogProps = DialogProps;
var DialogError;
(function (DialogError) {
    function getResult(error) {
        if (typeof error === 'string') {
            return !error.length;
        }
        if (typeof error === 'boolean') {
            return error;
        }
        return error.result;
    }
    DialogError.getResult = getResult;
    function getMessage(error) {
        if (typeof error === 'string') {
            return error;
        }
        if (typeof error === 'boolean') {
            return '';
        }
        return error.message;
    }
    DialogError.getMessage = getMessage;
})(DialogError = exports.DialogError || (exports.DialogError = {}));
var DialogOverlayService = /** @class */ (function () {
    function DialogOverlayService() {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.dialogs = [];
        widgets_1.addKeyListener(document.body, keys_1.Key.ENTER, function (e) { return _this.handleEnter(e); });
        widgets_1.addKeyListener(document.body, keys_1.Key.ESCAPE, function (e) { return _this.handleEscape(e); });
    }
    DialogOverlayService_1 = DialogOverlayService;
    DialogOverlayService.get = function () {
        return DialogOverlayService_1.INSTANCE;
    };
    DialogOverlayService.prototype.initialize = function () {
        DialogOverlayService_1.INSTANCE = this;
    };
    Object.defineProperty(DialogOverlayService.prototype, "currentDialog", {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get: function () {
            return this.dialogs[0];
        },
        enumerable: true,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    DialogOverlayService.prototype.push = function (dialog) {
        var _this = this;
        this.dialogs.unshift(dialog);
        return common_1.Disposable.create(function () {
            var index = _this.dialogs.indexOf(dialog);
            if (index > -1) {
                _this.dialogs.splice(index, 1);
            }
        });
    };
    DialogOverlayService.prototype.handleEscape = function (event) {
        var dialog = this.currentDialog;
        if (dialog) {
            return dialog['handleEscape'](event);
        }
        return false;
    };
    DialogOverlayService.prototype.handleEnter = function (event) {
        var dialog = this.currentDialog;
        if (dialog) {
            return dialog['handleEnter'](event);
        }
        return false;
    };
    var DialogOverlayService_1;
    DialogOverlayService = DialogOverlayService_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DialogOverlayService);
    return DialogOverlayService;
}());
exports.DialogOverlayService = DialogOverlayService;
var AbstractDialog = /** @class */ (function (_super) {
    __extends(AbstractDialog, _super);
    function AbstractDialog(props) {
        var _this = _super.call(this) || this;
        _this.props = props;
        _this.validateCancellationSource = new common_1.CancellationTokenSource();
        _this.acceptCancellationSource = new common_1.CancellationTokenSource();
        _this.id = 'theia-dialog-shell';
        _this.addClass('dialogOverlay');
        _this.toDispose.push(common_1.Disposable.create(function () {
            if (_this.reject) {
                widgets_1.Widget.detach(_this);
            }
        }));
        var container = document.createElement('div');
        container.classList.add('dialogBlock');
        _this.node.appendChild(container);
        var titleContentNode = document.createElement('div');
        titleContentNode.classList.add('dialogTitle');
        container.appendChild(titleContentNode);
        _this.titleNode = document.createElement('div');
        _this.titleNode.textContent = props.title;
        titleContentNode.appendChild(_this.titleNode);
        _this.closeCrossNode = document.createElement('i');
        _this.closeCrossNode.classList.add('fa');
        _this.closeCrossNode.classList.add('fa-times');
        _this.closeCrossNode.classList.add('closeButton');
        titleContentNode.appendChild(_this.closeCrossNode);
        _this.contentNode = document.createElement('div');
        _this.contentNode.classList.add('dialogContent');
        container.appendChild(_this.contentNode);
        _this.controlPanel = document.createElement('div');
        _this.controlPanel.classList.add('dialogControl');
        container.appendChild(_this.controlPanel);
        _this.errorMessageNode = document.createElement('div');
        _this.errorMessageNode.classList.add('error');
        _this.errorMessageNode.setAttribute('style', 'flex: 2');
        _this.controlPanel.appendChild(_this.errorMessageNode);
        _this.update();
        return _this;
    }
    AbstractDialog.prototype.appendCloseButton = function (text) {
        if (text === void 0) { text = 'Cancel'; }
        this.closeButton = this.createButton(text);
        this.controlPanel.appendChild(this.closeButton);
        this.closeButton.classList.add('secondary');
        return this.closeButton;
    };
    AbstractDialog.prototype.appendAcceptButton = function (text) {
        if (text === void 0) { text = 'OK'; }
        this.acceptButton = this.createButton(text);
        this.controlPanel.appendChild(this.acceptButton);
        this.acceptButton.classList.add('main');
        return this.acceptButton;
    };
    AbstractDialog.prototype.createButton = function (text) {
        var button = document.createElement('button');
        button.classList.add('theia-button');
        button.textContent = text;
        return button;
    };
    AbstractDialog.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        if (this.closeButton) {
            this.addCloseAction(this.closeButton, 'click');
        }
        if (this.acceptButton) {
            this.addAcceptAction(this.acceptButton, 'click');
        }
        this.addCloseAction(this.closeCrossNode, 'click');
        // TODO: use DI always to create dialog instances
        this.toDisposeOnDetach.push(DialogOverlayService.get().push(this));
    };
    AbstractDialog.prototype.handleEscape = function (event) {
        this.close();
    };
    AbstractDialog.prototype.handleEnter = function (event) {
        if (event.target instanceof HTMLTextAreaElement) {
            return false;
        }
        this.accept();
    };
    AbstractDialog.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.acceptButton) {
            this.acceptButton.focus();
        }
    };
    AbstractDialog.prototype.open = function () {
        var _this = this;
        if (this.resolve) {
            return Promise.reject(new Error('The dialog is already opened.'));
        }
        this.activeElement = window.document.activeElement;
        return new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
            _this.toDisposeOnDetach.push(common_1.Disposable.create(function () {
                _this.resolve = undefined;
                _this.reject = undefined;
            }));
            widgets_1.Widget.attach(_this, document.body);
            _this.activate();
        });
    };
    AbstractDialog.prototype.close = function () {
        if (this.resolve) {
            if (this.activeElement) {
                this.activeElement.focus({ preventScroll: true });
            }
            this.resolve(undefined);
        }
        this.activeElement = undefined;
        _super.prototype.close.call(this);
    };
    AbstractDialog.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        this.validate();
    };
    AbstractDialog.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, value, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.resolve) {
                            return [2 /*return*/];
                        }
                        this.validateCancellationSource.cancel();
                        this.validateCancellationSource = new common_1.CancellationTokenSource();
                        token = this.validateCancellationSource.token;
                        value = this.value;
                        return [4 /*yield*/, this.isValid(value, 'preview')];
                    case 1:
                        error = _a.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        this.setErrorMessage(error);
                        return [2 /*return*/];
                }
            });
        });
    };
    AbstractDialog.prototype.accept = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, value, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.resolve) {
                            return [2 /*return*/];
                        }
                        this.acceptCancellationSource.cancel();
                        this.acceptCancellationSource = new common_1.CancellationTokenSource();
                        token = this.acceptCancellationSource.token;
                        value = this.value;
                        return [4 /*yield*/, this.isValid(value, 'open')];
                    case 1:
                        error = _a.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        if (!DialogError.getResult(error)) {
                            this.setErrorMessage(error);
                        }
                        else {
                            this.resolve(value);
                            widgets_1.Widget.detach(this);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Return a string of zero-length or true if valid.
     */
    AbstractDialog.prototype.isValid = function (value, mode) {
        return '';
    };
    AbstractDialog.prototype.setErrorMessage = function (error) {
        if (this.acceptButton) {
            this.acceptButton.disabled = !DialogError.getResult(error);
        }
        this.errorMessageNode.innerText = DialogError.getMessage(error);
    };
    AbstractDialog.prototype.addCloseAction = function (element) {
        var _this = this;
        var additionalEventTypes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additionalEventTypes[_i - 1] = arguments[_i];
        }
        this.addKeyListener.apply(this, __spread([element, keys_1.Key.ENTER, function () { return _this.close(); }], additionalEventTypes));
    };
    AbstractDialog.prototype.addAcceptAction = function (element) {
        var _this = this;
        var additionalEventTypes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additionalEventTypes[_i - 1] = arguments[_i];
        }
        this.addKeyListener.apply(this, __spread([element, keys_1.Key.ENTER, function () { return _this.accept(); }], additionalEventTypes));
    };
    AbstractDialog = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(DialogProps)),
        __metadata("design:paramtypes", [DialogProps])
    ], AbstractDialog);
    return AbstractDialog;
}(widgets_1.BaseWidget));
exports.AbstractDialog = AbstractDialog;
var ConfirmDialogProps = /** @class */ (function (_super) {
    __extends(ConfirmDialogProps, _super);
    function ConfirmDialogProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmDialogProps = __decorate([
        inversify_1.injectable()
    ], ConfirmDialogProps);
    return ConfirmDialogProps;
}(DialogProps));
exports.ConfirmDialogProps = ConfirmDialogProps;
var ConfirmDialog = /** @class */ (function (_super) {
    __extends(ConfirmDialog, _super);
    function ConfirmDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        _this.confirmed = true;
        _this.contentNode.appendChild(_this.createMessageNode(_this.props.msg));
        _this.appendCloseButton(props.cancel);
        _this.appendAcceptButton(props.ok);
        return _this;
    }
    ConfirmDialog.prototype.onCloseRequest = function (msg) {
        _super.prototype.onCloseRequest.call(this, msg);
        this.confirmed = false;
        this.accept();
    };
    Object.defineProperty(ConfirmDialog.prototype, "value", {
        get: function () {
            return this.confirmed;
        },
        enumerable: true,
        configurable: true
    });
    ConfirmDialog.prototype.createMessageNode = function (msg) {
        if (typeof msg === 'string') {
            var messageNode = document.createElement('div');
            messageNode.textContent = msg;
            return messageNode;
        }
        return msg;
    };
    ConfirmDialog = __decorate([
        __param(0, inversify_1.inject(ConfirmDialogProps)),
        __metadata("design:paramtypes", [ConfirmDialogProps])
    ], ConfirmDialog);
    return ConfirmDialog;
}(AbstractDialog));
exports.ConfirmDialog = ConfirmDialog;
var SingleTextInputDialogProps = /** @class */ (function (_super) {
    __extends(SingleTextInputDialogProps, _super);
    function SingleTextInputDialogProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleTextInputDialogProps = __decorate([
        inversify_1.injectable()
    ], SingleTextInputDialogProps);
    return SingleTextInputDialogProps;
}(DialogProps));
exports.SingleTextInputDialogProps = SingleTextInputDialogProps;
var SingleTextInputDialog = /** @class */ (function (_super) {
    __extends(SingleTextInputDialog, _super);
    function SingleTextInputDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        _this.inputField = document.createElement('input');
        _this.inputField.type = 'text';
        _this.inputField.className = 'theia-input';
        _this.inputField.setAttribute('style', 'flex: 0;');
        _this.inputField.value = props.initialValue || '';
        if (props.initialSelectionRange) {
            _this.inputField.setSelectionRange(props.initialSelectionRange.start, props.initialSelectionRange.end, props.initialSelectionRange.direction);
        }
        else {
            _this.inputField.select();
        }
        _this.contentNode.appendChild(_this.inputField);
        _this.appendAcceptButton(props.confirmButtonLabel);
        return _this;
    }
    Object.defineProperty(SingleTextInputDialog.prototype, "value", {
        get: function () {
            return this.inputField.value;
        },
        enumerable: true,
        configurable: true
    });
    SingleTextInputDialog.prototype.isValid = function (value, mode) {
        if (this.props.validate) {
            return this.props.validate(value, mode);
        }
        return _super.prototype.isValid.call(this, value, mode);
    };
    SingleTextInputDialog.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        this.addUpdateListener(this.inputField, 'input');
    };
    SingleTextInputDialog.prototype.onActivateRequest = function (msg) {
        this.inputField.focus();
    };
    SingleTextInputDialog.prototype.handleEnter = function (event) {
        if (event.target instanceof HTMLInputElement) {
            return _super.prototype.handleEnter.call(this, event);
        }
        return false;
    };
    SingleTextInputDialog = __decorate([
        __param(0, inversify_1.inject(SingleTextInputDialogProps)),
        __metadata("design:paramtypes", [SingleTextInputDialogProps])
    ], SingleTextInputDialog);
    return SingleTextInputDialog;
}(AbstractDialog));
exports.SingleTextInputDialog = SingleTextInputDialog;
//# sourceMappingURL=dialogs.js.map