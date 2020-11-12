// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_notification_v1_notification_pb = require('../../../services/notification/v1/notification_pb.js');

function serialize_services_notification_v1_SendMailRequest(arg) {
  if (!(arg instanceof services_notification_v1_notification_pb.SendMailRequest)) {
    throw new Error('Expected argument of type services.notification.v1.SendMailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_notification_v1_SendMailRequest(buffer_arg) {
  return services_notification_v1_notification_pb.SendMailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_notification_v1_SendMailResponse(arg) {
  if (!(arg instanceof services_notification_v1_notification_pb.SendMailResponse)) {
    throw new Error('Expected argument of type services.notification.v1.SendMailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_notification_v1_SendMailResponse(buffer_arg) {
  return services_notification_v1_notification_pb.SendMailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NotificationServiceService = exports.NotificationServiceService = {
  sendMail: {
    path: '/services.notification.v1.NotificationService/SendMail',
    requestStream: false,
    responseStream: false,
    requestType: services_notification_v1_notification_pb.SendMailRequest,
    responseType: services_notification_v1_notification_pb.SendMailResponse,
    requestSerialize: serialize_services_notification_v1_SendMailRequest,
    requestDeserialize: deserialize_services_notification_v1_SendMailRequest,
    responseSerialize: serialize_services_notification_v1_SendMailResponse,
    responseDeserialize: deserialize_services_notification_v1_SendMailResponse,
  },
};

exports.NotificationServiceClient = grpc.makeGenericClientConstructor(NotificationServiceService);
