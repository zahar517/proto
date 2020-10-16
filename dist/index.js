"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServiceProtoFile = exports.protoFiles = void 0;
const path = require("path");
var protoFiles;
(function (protoFiles) {
    protoFiles["budget"] = "budget.proto";
})(protoFiles = exports.protoFiles || (exports.protoFiles = {}));
exports.getServiceProtoFile = (serviceName) => {
    return path.join(__dirname, "../protos/", serviceName);
};
//# sourceMappingURL=index.js.map