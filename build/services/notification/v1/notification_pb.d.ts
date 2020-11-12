// package: services.notification.v1
// file: services/notification/v1/notification.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SendMailRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SendMailRequest;

    getType(): MailType;
    setType(value: MailType): SendMailRequest;

    getFrom(): string;
    setFrom(value: string): SendMailRequest;

    clearToList(): void;
    getToList(): Array<string>;
    setToList(value: Array<string>): SendMailRequest;
    addTo(value: string, index?: number): string;

    clearCcList(): void;
    getCcList(): Array<string>;
    setCcList(value: Array<string>): SendMailRequest;
    addCc(value: string, index?: number): string;

    clearBccList(): void;
    getBccList(): Array<string>;
    setBccList(value: Array<string>): SendMailRequest;
    addBcc(value: string, index?: number): string;

    getSubject(): string;
    setSubject(value: string): SendMailRequest;

    getPayload(): string;
    setPayload(value: string): SendMailRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendMailRequest): SendMailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMailRequest;
    static deserializeBinaryFromReader(message: SendMailRequest, reader: jspb.BinaryReader): SendMailRequest;
}

export namespace SendMailRequest {
    export type AsObject = {
        id: string,
        type: MailType,
        from: string,
        toList: Array<string>,
        ccList: Array<string>,
        bccList: Array<string>,
        subject: string,
        payload: string,
    }
}

export class SendMailResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): SendMailResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendMailResponse): SendMailResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMailResponse;
    static deserializeBinaryFromReader(message: SendMailResponse, reader: jspb.BinaryReader): SendMailResponse;
}

export namespace SendMailResponse {
    export type AsObject = {
        success: boolean,
    }
}

export enum MailType {
    MAIL_TYPE_UNKNOWN_UNSPECIFIED = 0,
    MAIL_TYPE_CORRECTION_CREATED = 1,
    MAIL_TYPE_CORRECTION_APPROVED = 2,
    MAIL_TYPE_CORRECTION_REJECTED = 3,
}
