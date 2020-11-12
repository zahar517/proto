// package: services.budget.v1
// file: services/budget/v1/budget.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DictionaryUsageRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DictionaryUsageRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DictionaryUsageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DictionaryUsageRequest): DictionaryUsageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DictionaryUsageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DictionaryUsageRequest;
    static deserializeBinaryFromReader(message: DictionaryUsageRequest, reader: jspb.BinaryReader): DictionaryUsageRequest;
}

export namespace DictionaryUsageRequest {
    export type AsObject = {
        id: string,
    }
}

export class DictionaryUsageResponse extends jspb.Message { 
    getUsage(): boolean;
    setUsage(value: boolean): DictionaryUsageResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DictionaryUsageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DictionaryUsageResponse): DictionaryUsageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DictionaryUsageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DictionaryUsageResponse;
    static deserializeBinaryFromReader(message: DictionaryUsageResponse, reader: jspb.BinaryReader): DictionaryUsageResponse;
}

export namespace DictionaryUsageResponse {
    export type AsObject = {
        usage: boolean,
    }
}
