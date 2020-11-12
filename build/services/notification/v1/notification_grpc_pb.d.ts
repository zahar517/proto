// package: services.notification.v1
// file: services/notification/v1/notification.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as services_notification_v1_notification_pb from "../../../services/notification/v1/notification_pb";

interface INotificationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendMail: INotificationServiceService_ISendMail;
}

interface INotificationServiceService_ISendMail extends grpc.MethodDefinition<services_notification_v1_notification_pb.SendMailRequest, services_notification_v1_notification_pb.SendMailResponse> {
    path: "/services.notification.v1.NotificationService/SendMail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_notification_v1_notification_pb.SendMailRequest>;
    requestDeserialize: grpc.deserialize<services_notification_v1_notification_pb.SendMailRequest>;
    responseSerialize: grpc.serialize<services_notification_v1_notification_pb.SendMailResponse>;
    responseDeserialize: grpc.deserialize<services_notification_v1_notification_pb.SendMailResponse>;
}

export const NotificationServiceService: INotificationServiceService;

export interface INotificationServiceServer {
    sendMail: grpc.handleUnaryCall<services_notification_v1_notification_pb.SendMailRequest, services_notification_v1_notification_pb.SendMailResponse>;
}

export interface INotificationServiceClient {
    sendMail(request: services_notification_v1_notification_pb.SendMailRequest, callback: (error: grpc.ServiceError | null, response: services_notification_v1_notification_pb.SendMailResponse) => void): grpc.ClientUnaryCall;
    sendMail(request: services_notification_v1_notification_pb.SendMailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_notification_v1_notification_pb.SendMailResponse) => void): grpc.ClientUnaryCall;
    sendMail(request: services_notification_v1_notification_pb.SendMailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_notification_v1_notification_pb.SendMailResponse) => void): grpc.ClientUnaryCall;
}

export class NotificationServiceClient extends grpc.Client implements INotificationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendMail(request: services_notification_v1_notification_pb.SendMailRequest, callback: (error: grpc.ServiceError | null, response: services_notification_v1_notification_pb.SendMailResponse) => void): grpc.ClientUnaryCall;
    public sendMail(request: services_notification_v1_notification_pb.SendMailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_notification_v1_notification_pb.SendMailResponse) => void): grpc.ClientUnaryCall;
    public sendMail(request: services_notification_v1_notification_pb.SendMailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_notification_v1_notification_pb.SendMailResponse) => void): grpc.ClientUnaryCall;
}
