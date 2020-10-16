import * as path from "path";

export enum protoFiles {
    "budget" = "budget.proto",
}

export const getServiceProtoFile = (serviceName: protoFiles) => {
    return path.join(__dirname, "../protos/", serviceName);
};
