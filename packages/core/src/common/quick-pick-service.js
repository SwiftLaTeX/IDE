"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuickPickSeparator;
(function (QuickPickSeparator) {
    function is(item) {
        return typeof item === 'object' && 'type' in item && item['type'] === 'separator';
    }
    QuickPickSeparator.is = is;
})(QuickPickSeparator = exports.QuickPickSeparator || (exports.QuickPickSeparator = {}));
exports.quickPickServicePath = '/services/quickPick';
exports.QuickPickService = Symbol('QuickPickService');
//# sourceMappingURL=quick-pick-service.js.map