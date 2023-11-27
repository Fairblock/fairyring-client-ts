/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fairyring.conditionalenc";

export interface MsgRegisterValidator {
  creator: string;
}

export interface MsgRegisterValidatorResponse {
  creator: string;
}

export interface MsgSendConditionalenc {
  creator: string;
  message: string;
  keyShareIndex: number;
  blockHeight: number;
}

export interface MsgSendConditionalencResponse {
  creator: string;
  conditionalenc: string;
  conditionalencIndex: number;
  blockHeight: number;
  receivedBlockHeight: number;
  success: boolean;
  errorMessage: string;
}

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateLatestPubKey {
  creator: string;
  publicKey: string;
  commitments: string[];
}

export interface MsgCreateLatestPubKeyResponse {
}

export interface MsgCreateAuthorizedAddress {
  target: string;
  creator: string;
}

export interface MsgCreateAuthorizedAddressResponse {
}

export interface MsgUpdateAuthorizedAddress {
  target: string;
  isAuthorized: boolean;
  creator: string;
}

export interface MsgUpdateAuthorizedAddressResponse {
}

export interface MsgDeleteAuthorizedAddress {
  target: string;
  creator: string;
}

export interface MsgDeleteAuthorizedAddressResponse {
}

function createBaseMsgRegisterValidator(): MsgRegisterValidator {
  return { creator: "" };
}

export const MsgRegisterValidator = {
  encode(message: MsgRegisterValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterValidator {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgRegisterValidator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterValidator>, I>>(object: I): MsgRegisterValidator {
    const message = createBaseMsgRegisterValidator();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgRegisterValidatorResponse(): MsgRegisterValidatorResponse {
  return { creator: "" };
}

export const MsgRegisterValidatorResponse = {
  encode(message: MsgRegisterValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterValidatorResponse {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgRegisterValidatorResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterValidatorResponse>, I>>(object: I): MsgRegisterValidatorResponse {
    const message = createBaseMsgRegisterValidatorResponse();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgSendConditionalenc(): MsgSendConditionalenc {
  return { creator: "", message: "", keyShareIndex: 0, blockHeight: 0 };
}

export const MsgSendConditionalenc = {
  encode(message: MsgSendConditionalenc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.keyShareIndex !== 0) {
      writer.uint32(24).uint64(message.keyShareIndex);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(32).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendConditionalenc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendConditionalenc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.keyShareIndex = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendConditionalenc {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      message: isSet(object.message) ? String(object.message) : "",
      keyShareIndex: isSet(object.keyShareIndex) ? Number(object.keyShareIndex) : 0,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
    };
  },

  toJSON(message: MsgSendConditionalenc): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.message !== undefined && (obj.message = message.message);
    message.keyShareIndex !== undefined && (obj.keyShareIndex = Math.round(message.keyShareIndex));
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendConditionalenc>, I>>(object: I): MsgSendConditionalenc {
    const message = createBaseMsgSendConditionalenc();
    message.creator = object.creator ?? "";
    message.message = object.message ?? "";
    message.keyShareIndex = object.keyShareIndex ?? 0;
    message.blockHeight = object.blockHeight ?? 0;
    return message;
  },
};

function createBaseMsgSendConditionalencResponse(): MsgSendConditionalencResponse {
  return {
    creator: "",
    conditionalenc: "",
    conditionalencIndex: 0,
    blockHeight: 0,
    receivedBlockHeight: 0,
    success: false,
    errorMessage: "",
  };
}

export const MsgSendConditionalencResponse = {
  encode(message: MsgSendConditionalencResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.conditionalenc !== "") {
      writer.uint32(18).string(message.conditionalenc);
    }
    if (message.conditionalencIndex !== 0) {
      writer.uint32(24).uint64(message.conditionalencIndex);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(32).uint64(message.blockHeight);
    }
    if (message.receivedBlockHeight !== 0) {
      writer.uint32(40).uint64(message.receivedBlockHeight);
    }
    if (message.success === true) {
      writer.uint32(48).bool(message.success);
    }
    if (message.errorMessage !== "") {
      writer.uint32(58).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendConditionalencResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendConditionalencResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.conditionalenc = reader.string();
          break;
        case 3:
          message.conditionalencIndex = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.receivedBlockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.success = reader.bool();
          break;
        case 7:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendConditionalencResponse {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      conditionalenc: isSet(object.conditionalenc) ? String(object.conditionalenc) : "",
      conditionalencIndex: isSet(object.conditionalencIndex) ? Number(object.conditionalencIndex) : 0,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      receivedBlockHeight: isSet(object.receivedBlockHeight) ? Number(object.receivedBlockHeight) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: MsgSendConditionalencResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.conditionalenc !== undefined && (obj.conditionalenc = message.conditionalenc);
    message.conditionalencIndex !== undefined && (obj.conditionalencIndex = Math.round(message.conditionalencIndex));
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    message.receivedBlockHeight !== undefined && (obj.receivedBlockHeight = Math.round(message.receivedBlockHeight));
    message.success !== undefined && (obj.success = message.success);
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendConditionalencResponse>, I>>(object: I): MsgSendConditionalencResponse {
    const message = createBaseMsgSendConditionalencResponse();
    message.creator = object.creator ?? "";
    message.conditionalenc = object.conditionalenc ?? "";
    message.conditionalencIndex = object.conditionalencIndex ?? 0;
    message.blockHeight = object.blockHeight ?? 0;
    message.receivedBlockHeight = object.receivedBlockHeight ?? 0;
    message.success = object.success ?? false;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

function createBaseMsgCreateLatestPubKey(): MsgCreateLatestPubKey {
  return { creator: "", publicKey: "", commitments: [] };
}

export const MsgCreateLatestPubKey = {
  encode(message: MsgCreateLatestPubKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.publicKey !== "") {
      writer.uint32(18).string(message.publicKey);
    }
    for (const v of message.commitments) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLatestPubKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLatestPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.publicKey = reader.string();
          break;
        case 3:
          message.commitments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLatestPubKey {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : "",
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgCreateLatestPubKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => e);
    } else {
      obj.commitments = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLatestPubKey>, I>>(object: I): MsgCreateLatestPubKey {
    const message = createBaseMsgCreateLatestPubKey();
    message.creator = object.creator ?? "";
    message.publicKey = object.publicKey ?? "";
    message.commitments = object.commitments?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgCreateLatestPubKeyResponse(): MsgCreateLatestPubKeyResponse {
  return {};
}

export const MsgCreateLatestPubKeyResponse = {
  encode(_: MsgCreateLatestPubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLatestPubKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLatestPubKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateLatestPubKeyResponse {
    return {};
  },

  toJSON(_: MsgCreateLatestPubKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLatestPubKeyResponse>, I>>(_: I): MsgCreateLatestPubKeyResponse {
    const message = createBaseMsgCreateLatestPubKeyResponse();
    return message;
  },
};

function createBaseMsgCreateAuthorizedAddress(): MsgCreateAuthorizedAddress {
  return { target: "", creator: "" };
}

export const MsgCreateAuthorizedAddress = {
  encode(message: MsgCreateAuthorizedAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== "") {
      writer.uint32(10).string(message.target);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAuthorizedAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuthorizedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuthorizedAddress {
    return {
      target: isSet(object.target) ? String(object.target) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgCreateAuthorizedAddress): unknown {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAuthorizedAddress>, I>>(object: I): MsgCreateAuthorizedAddress {
    const message = createBaseMsgCreateAuthorizedAddress();
    message.target = object.target ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgCreateAuthorizedAddressResponse(): MsgCreateAuthorizedAddressResponse {
  return {};
}

export const MsgCreateAuthorizedAddressResponse = {
  encode(_: MsgCreateAuthorizedAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAuthorizedAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuthorizedAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateAuthorizedAddressResponse {
    return {};
  },

  toJSON(_: MsgCreateAuthorizedAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAuthorizedAddressResponse>, I>>(
    _: I,
  ): MsgCreateAuthorizedAddressResponse {
    const message = createBaseMsgCreateAuthorizedAddressResponse();
    return message;
  },
};

function createBaseMsgUpdateAuthorizedAddress(): MsgUpdateAuthorizedAddress {
  return { target: "", isAuthorized: false, creator: "" };
}

export const MsgUpdateAuthorizedAddress = {
  encode(message: MsgUpdateAuthorizedAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== "") {
      writer.uint32(10).string(message.target);
    }
    if (message.isAuthorized === true) {
      writer.uint32(16).bool(message.isAuthorized);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAuthorizedAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAuthorizedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = reader.string();
          break;
        case 2:
          message.isAuthorized = reader.bool();
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAuthorizedAddress {
    return {
      target: isSet(object.target) ? String(object.target) : "",
      isAuthorized: isSet(object.isAuthorized) ? Boolean(object.isAuthorized) : false,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgUpdateAuthorizedAddress): unknown {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target);
    message.isAuthorized !== undefined && (obj.isAuthorized = message.isAuthorized);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAuthorizedAddress>, I>>(object: I): MsgUpdateAuthorizedAddress {
    const message = createBaseMsgUpdateAuthorizedAddress();
    message.target = object.target ?? "";
    message.isAuthorized = object.isAuthorized ?? false;
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgUpdateAuthorizedAddressResponse(): MsgUpdateAuthorizedAddressResponse {
  return {};
}

export const MsgUpdateAuthorizedAddressResponse = {
  encode(_: MsgUpdateAuthorizedAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAuthorizedAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAuthorizedAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateAuthorizedAddressResponse {
    return {};
  },

  toJSON(_: MsgUpdateAuthorizedAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAuthorizedAddressResponse>, I>>(
    _: I,
  ): MsgUpdateAuthorizedAddressResponse {
    const message = createBaseMsgUpdateAuthorizedAddressResponse();
    return message;
  },
};

function createBaseMsgDeleteAuthorizedAddress(): MsgDeleteAuthorizedAddress {
  return { target: "", creator: "" };
}

export const MsgDeleteAuthorizedAddress = {
  encode(message: MsgDeleteAuthorizedAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== "") {
      writer.uint32(10).string(message.target);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAuthorizedAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAuthorizedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAuthorizedAddress {
    return {
      target: isSet(object.target) ? String(object.target) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgDeleteAuthorizedAddress): unknown {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAuthorizedAddress>, I>>(object: I): MsgDeleteAuthorizedAddress {
    const message = createBaseMsgDeleteAuthorizedAddress();
    message.target = object.target ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgDeleteAuthorizedAddressResponse(): MsgDeleteAuthorizedAddressResponse {
  return {};
}

export const MsgDeleteAuthorizedAddressResponse = {
  encode(_: MsgDeleteAuthorizedAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAuthorizedAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAuthorizedAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteAuthorizedAddressResponse {
    return {};
  },

  toJSON(_: MsgDeleteAuthorizedAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAuthorizedAddressResponse>, I>>(
    _: I,
  ): MsgDeleteAuthorizedAddressResponse {
    const message = createBaseMsgDeleteAuthorizedAddressResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RegisterValidator(request: MsgRegisterValidator): Promise<MsgRegisterValidatorResponse>;
  SendConditionalenc(request: MsgSendConditionalenc): Promise<MsgSendConditionalencResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateLatestPubKey(request: MsgCreateLatestPubKey): Promise<MsgCreateLatestPubKeyResponse>;
  CreateAuthorizedAddress(request: MsgCreateAuthorizedAddress): Promise<MsgCreateAuthorizedAddressResponse>;
  UpdateAuthorizedAddress(request: MsgUpdateAuthorizedAddress): Promise<MsgUpdateAuthorizedAddressResponse>;
  DeleteAuthorizedAddress(request: MsgDeleteAuthorizedAddress): Promise<MsgDeleteAuthorizedAddressResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterValidator = this.RegisterValidator.bind(this);
    this.SendConditionalenc = this.SendConditionalenc.bind(this);
    this.CreateLatestPubKey = this.CreateLatestPubKey.bind(this);
    this.CreateAuthorizedAddress = this.CreateAuthorizedAddress.bind(this);
    this.UpdateAuthorizedAddress = this.UpdateAuthorizedAddress.bind(this);
    this.DeleteAuthorizedAddress = this.DeleteAuthorizedAddress.bind(this);
  }
  RegisterValidator(request: MsgRegisterValidator): Promise<MsgRegisterValidatorResponse> {
    const data = MsgRegisterValidator.encode(request).finish();
    const promise = this.rpc.request("fairyring.conditionalenc.Msg", "RegisterValidator", data);
    return promise.then((data) => MsgRegisterValidatorResponse.decode(new _m0.Reader(data)));
  }

  SendConditionalenc(request: MsgSendConditionalenc): Promise<MsgSendConditionalencResponse> {
    const data = MsgSendConditionalenc.encode(request).finish();
    const promise = this.rpc.request("fairyring.conditionalenc.Msg", "SendConditionalenc", data);
    return promise.then((data) => MsgSendConditionalencResponse.decode(new _m0.Reader(data)));
  }

  CreateLatestPubKey(request: MsgCreateLatestPubKey): Promise<MsgCreateLatestPubKeyResponse> {
    const data = MsgCreateLatestPubKey.encode(request).finish();
    const promise = this.rpc.request("fairyring.conditionalenc.Msg", "CreateLatestPubKey", data);
    return promise.then((data) => MsgCreateLatestPubKeyResponse.decode(new _m0.Reader(data)));
  }

  CreateAuthorizedAddress(request: MsgCreateAuthorizedAddress): Promise<MsgCreateAuthorizedAddressResponse> {
    const data = MsgCreateAuthorizedAddress.encode(request).finish();
    const promise = this.rpc.request("fairyring.conditionalenc.Msg", "CreateAuthorizedAddress", data);
    return promise.then((data) => MsgCreateAuthorizedAddressResponse.decode(new _m0.Reader(data)));
  }

  UpdateAuthorizedAddress(request: MsgUpdateAuthorizedAddress): Promise<MsgUpdateAuthorizedAddressResponse> {
    const data = MsgUpdateAuthorizedAddress.encode(request).finish();
    const promise = this.rpc.request("fairyring.conditionalenc.Msg", "UpdateAuthorizedAddress", data);
    return promise.then((data) => MsgUpdateAuthorizedAddressResponse.decode(new _m0.Reader(data)));
  }

  DeleteAuthorizedAddress(request: MsgDeleteAuthorizedAddress): Promise<MsgDeleteAuthorizedAddressResponse> {
    const data = MsgDeleteAuthorizedAddress.encode(request).finish();
    const promise = this.rpc.request("fairyring.conditionalenc.Msg", "DeleteAuthorizedAddress", data);
    return promise.then((data) => MsgDeleteAuthorizedAddressResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
