"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskNode = /** @class */ (function () {
    function TaskNode(taskId, childTasks, parentsID) {
        this.taskId = taskId;
        this.childTasks = childTasks;
        this.parentsID = parentsID;
    }
    TaskNode.prototype.addChildDependency = function (node) {
        this.childTasks.push(node);
    };
    TaskNode.prototype.addParentDependency = function (parentId) {
        this.parentsID.push(parentId);
    };
    return TaskNode;
}());
exports.TaskNode = TaskNode;
//# sourceMappingURL=task-node.js.map