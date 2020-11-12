// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_budget_v1_budget_pb = require('../../../services/budget/v1/budget_pb.js');

function serialize_services_budget_v1_DictionaryUsageRequest(arg) {
  if (!(arg instanceof services_budget_v1_budget_pb.DictionaryUsageRequest)) {
    throw new Error('Expected argument of type services.budget.v1.DictionaryUsageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_budget_v1_DictionaryUsageRequest(buffer_arg) {
  return services_budget_v1_budget_pb.DictionaryUsageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_budget_v1_DictionaryUsageResponse(arg) {
  if (!(arg instanceof services_budget_v1_budget_pb.DictionaryUsageResponse)) {
    throw new Error('Expected argument of type services.budget.v1.DictionaryUsageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_budget_v1_DictionaryUsageResponse(buffer_arg) {
  return services_budget_v1_budget_pb.DictionaryUsageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BudgetServiceService = exports.BudgetServiceService = {
  dictionaryUsage: {
    path: '/services.budget.v1.BudgetService/DictionaryUsage',
    requestStream: false,
    responseStream: false,
    requestType: services_budget_v1_budget_pb.DictionaryUsageRequest,
    responseType: services_budget_v1_budget_pb.DictionaryUsageResponse,
    requestSerialize: serialize_services_budget_v1_DictionaryUsageRequest,
    requestDeserialize: deserialize_services_budget_v1_DictionaryUsageRequest,
    responseSerialize: serialize_services_budget_v1_DictionaryUsageResponse,
    responseDeserialize: deserialize_services_budget_v1_DictionaryUsageResponse,
  },
};

exports.BudgetServiceClient = grpc.makeGenericClientConstructor(BudgetServiceService);
