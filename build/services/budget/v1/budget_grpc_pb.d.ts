// package: services.budget.v1
// file: services/budget/v1/budget.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as services_budget_v1_budget_pb from "../../../services/budget/v1/budget_pb";

interface IBudgetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    dictionaryUsage: IBudgetServiceService_IDictionaryUsage;
}

interface IBudgetServiceService_IDictionaryUsage extends grpc.MethodDefinition<services_budget_v1_budget_pb.DictionaryUsageRequest, services_budget_v1_budget_pb.DictionaryUsageResponse> {
    path: "/services.budget.v1.BudgetService/DictionaryUsage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_budget_v1_budget_pb.DictionaryUsageRequest>;
    requestDeserialize: grpc.deserialize<services_budget_v1_budget_pb.DictionaryUsageRequest>;
    responseSerialize: grpc.serialize<services_budget_v1_budget_pb.DictionaryUsageResponse>;
    responseDeserialize: grpc.deserialize<services_budget_v1_budget_pb.DictionaryUsageResponse>;
}

export const BudgetServiceService: IBudgetServiceService;

export interface IBudgetServiceServer {
    dictionaryUsage: grpc.handleUnaryCall<services_budget_v1_budget_pb.DictionaryUsageRequest, services_budget_v1_budget_pb.DictionaryUsageResponse>;
}

export interface IBudgetServiceClient {
    dictionaryUsage(request: services_budget_v1_budget_pb.DictionaryUsageRequest, callback: (error: grpc.ServiceError | null, response: services_budget_v1_budget_pb.DictionaryUsageResponse) => void): grpc.ClientUnaryCall;
    dictionaryUsage(request: services_budget_v1_budget_pb.DictionaryUsageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_budget_v1_budget_pb.DictionaryUsageResponse) => void): grpc.ClientUnaryCall;
    dictionaryUsage(request: services_budget_v1_budget_pb.DictionaryUsageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_budget_v1_budget_pb.DictionaryUsageResponse) => void): grpc.ClientUnaryCall;
}

export class BudgetServiceClient extends grpc.Client implements IBudgetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public dictionaryUsage(request: services_budget_v1_budget_pb.DictionaryUsageRequest, callback: (error: grpc.ServiceError | null, response: services_budget_v1_budget_pb.DictionaryUsageResponse) => void): grpc.ClientUnaryCall;
    public dictionaryUsage(request: services_budget_v1_budget_pb.DictionaryUsageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_budget_v1_budget_pb.DictionaryUsageResponse) => void): grpc.ClientUnaryCall;
    public dictionaryUsage(request: services_budget_v1_budget_pb.DictionaryUsageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_budget_v1_budget_pb.DictionaryUsageResponse) => void): grpc.ClientUnaryCall;
}
