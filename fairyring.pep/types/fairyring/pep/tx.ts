/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Params } from "./params";

export const protobufPackage = "fairyring.pep";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

/** MsgSubmitEncryptedTx is the Msg/SubmitEncryptedTx request type. */
export interface MsgSubmitEncryptedTx {
  creator: string;
  data: string;
  targetBlockHeight: number;
}

/**
 * MsgSubmitEncryptedTxResponse defines the response structure for executing a
 * MsgSubmitEncryptedTx message.
 */
export interface MsgSubmitEncryptedTxResponse {
}

/** MsgSubmitGeneralEncryptedTx is the Msg/SubmitGeneralEncryptedTx request type. */
export interface MsgSubmitGeneralEncryptedTx {
  creator: string;
  data: string;
  reqId: string;
}

/**
 * MsgSubmitGeneralEncryptedTxResponse defines the response structure for executing a
 * MsgSubmitGeneralEncryptedTx message.
 */
export interface MsgSubmitGeneralEncryptedTxResponse {
}

/** MsgSubmitDecryptionKey is the Msg/SubmitDecryptionKey request type. */
export interface MsgSubmitDecryptionKey {
  creator: string;
  height: number;
  data: string;
}

/**
 * MsgSubmitDecryptionKeyResponse defines the response structure for executing a
 * MsgSubmitDecryptionKey message.
 */
export interface MsgSubmitDecryptionKeyResponse {
}

/** MsgRequestGeneralIdentity is the Msg/RequestGeneralIdentity request type. */
export interface MsgRequestGeneralIdentity {
  creator: string;
  estimatedDelay: Duration | undefined;
  reqId: string;
}

/**
 * MsgRequestGeneralIdentityResponse defines the response structure for executing a
 * MsgRequestGeneralIdentity message.
 */
export interface MsgRequestGeneralIdentityResponse {
  identity: string;
}

/** MsgRequestGeneralDecryptionKey is the Msg/RequestGeneralDecryptionKey request type. */
export interface MsgRequestGeneralDecryptionKey {
  creator: string;
  identity: string;
}

/**
 * MsgRequestGeneralDecryptionKeyResponse defines the response structure for executing a
 * MsgRequestGeneralDecryptionKey message.
 */
export interface MsgRequestGeneralDecryptionKeyResponse {
}

/** MsgRequestPrivateIdentity is the Msg/RequestPrivateIdentity request type. */
export interface MsgRequestPrivateIdentity {
  creator: string;
  reqId: string;
}

/**
 * MsgRequestPrivateIdentityResponse defines the response structure for executing a
 * MsgRequestPrivateIdentity message.
 */
export interface MsgRequestPrivateIdentityResponse {
  identity: string;
}

/** MsgRequestPrivateDecryptionKey is the Msg/RequestPrivateDecryptionKey request type. */
export interface MsgRequestPrivateDecryptionKey {
  creator: string;
  identity: string;
  secpPubkey: string;
}

/**
 * MsgRequestPrivateDecryptionKeyResponse defines the response structure for executing a
 * MsgRequestPrivateDecryptionKey message.
 */
export interface MsgRequestPrivateDecryptionKeyResponse {
}

/** MsgRegisterContract is the Msg/RegisterContract request type. */
export interface MsgRegisterContract {
  creator: string;
  contractAddress: string;
  identity: string;
}

/**
 * MsgRegisterContractResponse defines the response structure for executing a
 * MsgRegisterContract message.
 */
export interface MsgRegisterContractResponse {
}

/** MsgUnregisterContract is the Msg/UnregisterContract request type. */
export interface MsgUnregisterContract {
  creator: string;
  contractAddress: string;
  identity: string;
}

/**
 * MsgUnregisterContractResponse defines the response structure for executing a
 * MsgUnregisterContract message.
 */
export interface MsgUnregisterContractResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgSubmitEncryptedTx(): MsgSubmitEncryptedTx {
  return { creator: "", data: "", targetBlockHeight: 0 };
}

export const MsgSubmitEncryptedTx = {
  encode(message: MsgSubmitEncryptedTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    if (message.targetBlockHeight !== 0) {
      writer.uint32(24).uint64(message.targetBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEncryptedTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEncryptedTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.targetBlockHeight = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitEncryptedTx {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      data: isSet(object.data) ? String(object.data) : "",
      targetBlockHeight: isSet(object.targetBlockHeight) ? Number(object.targetBlockHeight) : 0,
    };
  },

  toJSON(message: MsgSubmitEncryptedTx): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    if (message.targetBlockHeight !== 0) {
      obj.targetBlockHeight = Math.round(message.targetBlockHeight);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitEncryptedTx>, I>>(base?: I): MsgSubmitEncryptedTx {
    return MsgSubmitEncryptedTx.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitEncryptedTx>, I>>(object: I): MsgSubmitEncryptedTx {
    const message = createBaseMsgSubmitEncryptedTx();
    message.creator = object.creator ?? "";
    message.data = object.data ?? "";
    message.targetBlockHeight = object.targetBlockHeight ?? 0;
    return message;
  },
};

function createBaseMsgSubmitEncryptedTxResponse(): MsgSubmitEncryptedTxResponse {
  return {};
}

export const MsgSubmitEncryptedTxResponse = {
  encode(_: MsgSubmitEncryptedTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEncryptedTxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEncryptedTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitEncryptedTxResponse {
    return {};
  },

  toJSON(_: MsgSubmitEncryptedTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitEncryptedTxResponse>, I>>(base?: I): MsgSubmitEncryptedTxResponse {
    return MsgSubmitEncryptedTxResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitEncryptedTxResponse>, I>>(_: I): MsgSubmitEncryptedTxResponse {
    const message = createBaseMsgSubmitEncryptedTxResponse();
    return message;
  },
};

function createBaseMsgSubmitGeneralEncryptedTx(): MsgSubmitGeneralEncryptedTx {
  return { creator: "", data: "", reqId: "" };
}

export const MsgSubmitGeneralEncryptedTx = {
  encode(message: MsgSubmitGeneralEncryptedTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    if (message.reqId !== "") {
      writer.uint32(26).string(message.reqId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitGeneralEncryptedTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitGeneralEncryptedTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reqId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitGeneralEncryptedTx {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      data: isSet(object.data) ? String(object.data) : "",
      reqId: isSet(object.reqId) ? String(object.reqId) : "",
    };
  },

  toJSON(message: MsgSubmitGeneralEncryptedTx): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    if (message.reqId !== "") {
      obj.reqId = message.reqId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitGeneralEncryptedTx>, I>>(base?: I): MsgSubmitGeneralEncryptedTx {
    return MsgSubmitGeneralEncryptedTx.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitGeneralEncryptedTx>, I>>(object: I): MsgSubmitGeneralEncryptedTx {
    const message = createBaseMsgSubmitGeneralEncryptedTx();
    message.creator = object.creator ?? "";
    message.data = object.data ?? "";
    message.reqId = object.reqId ?? "";
    return message;
  },
};

function createBaseMsgSubmitGeneralEncryptedTxResponse(): MsgSubmitGeneralEncryptedTxResponse {
  return {};
}

export const MsgSubmitGeneralEncryptedTxResponse = {
  encode(_: MsgSubmitGeneralEncryptedTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitGeneralEncryptedTxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitGeneralEncryptedTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitGeneralEncryptedTxResponse {
    return {};
  },

  toJSON(_: MsgSubmitGeneralEncryptedTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitGeneralEncryptedTxResponse>, I>>(
    base?: I,
  ): MsgSubmitGeneralEncryptedTxResponse {
    return MsgSubmitGeneralEncryptedTxResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitGeneralEncryptedTxResponse>, I>>(
    _: I,
  ): MsgSubmitGeneralEncryptedTxResponse {
    const message = createBaseMsgSubmitGeneralEncryptedTxResponse();
    return message;
  },
};

function createBaseMsgSubmitDecryptionKey(): MsgSubmitDecryptionKey {
  return { creator: "", height: 0, data: "" };
}

export const MsgSubmitDecryptionKey = {
  encode(message: MsgSubmitDecryptionKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitDecryptionKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitDecryptionKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitDecryptionKey {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      height: isSet(object.height) ? Number(object.height) : 0,
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: MsgSubmitDecryptionKey): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitDecryptionKey>, I>>(base?: I): MsgSubmitDecryptionKey {
    return MsgSubmitDecryptionKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitDecryptionKey>, I>>(object: I): MsgSubmitDecryptionKey {
    const message = createBaseMsgSubmitDecryptionKey();
    message.creator = object.creator ?? "";
    message.height = object.height ?? 0;
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseMsgSubmitDecryptionKeyResponse(): MsgSubmitDecryptionKeyResponse {
  return {};
}

export const MsgSubmitDecryptionKeyResponse = {
  encode(_: MsgSubmitDecryptionKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitDecryptionKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitDecryptionKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitDecryptionKeyResponse {
    return {};
  },

  toJSON(_: MsgSubmitDecryptionKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitDecryptionKeyResponse>, I>>(base?: I): MsgSubmitDecryptionKeyResponse {
    return MsgSubmitDecryptionKeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitDecryptionKeyResponse>, I>>(_: I): MsgSubmitDecryptionKeyResponse {
    const message = createBaseMsgSubmitDecryptionKeyResponse();
    return message;
  },
};

function createBaseMsgRequestGeneralIdentity(): MsgRequestGeneralIdentity {
  return { creator: "", estimatedDelay: undefined, reqId: "" };
}

export const MsgRequestGeneralIdentity = {
  encode(message: MsgRequestGeneralIdentity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.estimatedDelay !== undefined) {
      Duration.encode(message.estimatedDelay, writer.uint32(18).fork()).ldelim();
    }
    if (message.reqId !== "") {
      writer.uint32(26).string(message.reqId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestGeneralIdentity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestGeneralIdentity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.estimatedDelay = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reqId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRequestGeneralIdentity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      estimatedDelay: isSet(object.estimatedDelay) ? Duration.fromJSON(object.estimatedDelay) : undefined,
      reqId: isSet(object.reqId) ? String(object.reqId) : "",
    };
  },

  toJSON(message: MsgRequestGeneralIdentity): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.estimatedDelay !== undefined) {
      obj.estimatedDelay = Duration.toJSON(message.estimatedDelay);
    }
    if (message.reqId !== "") {
      obj.reqId = message.reqId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestGeneralIdentity>, I>>(base?: I): MsgRequestGeneralIdentity {
    return MsgRequestGeneralIdentity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestGeneralIdentity>, I>>(object: I): MsgRequestGeneralIdentity {
    const message = createBaseMsgRequestGeneralIdentity();
    message.creator = object.creator ?? "";
    message.estimatedDelay = (object.estimatedDelay !== undefined && object.estimatedDelay !== null)
      ? Duration.fromPartial(object.estimatedDelay)
      : undefined;
    message.reqId = object.reqId ?? "";
    return message;
  },
};

function createBaseMsgRequestGeneralIdentityResponse(): MsgRequestGeneralIdentityResponse {
  return { identity: "" };
}

export const MsgRequestGeneralIdentityResponse = {
  encode(message: MsgRequestGeneralIdentityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identity !== "") {
      writer.uint32(10).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestGeneralIdentityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestGeneralIdentityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identity = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRequestGeneralIdentityResponse {
    return { identity: isSet(object.identity) ? String(object.identity) : "" };
  },

  toJSON(message: MsgRequestGeneralIdentityResponse): unknown {
    const obj: any = {};
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestGeneralIdentityResponse>, I>>(
    base?: I,
  ): MsgRequestGeneralIdentityResponse {
    return MsgRequestGeneralIdentityResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestGeneralIdentityResponse>, I>>(
    object: I,
  ): MsgRequestGeneralIdentityResponse {
    const message = createBaseMsgRequestGeneralIdentityResponse();
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseMsgRequestGeneralDecryptionKey(): MsgRequestGeneralDecryptionKey {
  return { creator: "", identity: "" };
}

export const MsgRequestGeneralDecryptionKey = {
  encode(message: MsgRequestGeneralDecryptionKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestGeneralDecryptionKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestGeneralDecryptionKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.identity = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRequestGeneralDecryptionKey {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
    };
  },

  toJSON(message: MsgRequestGeneralDecryptionKey): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestGeneralDecryptionKey>, I>>(base?: I): MsgRequestGeneralDecryptionKey {
    return MsgRequestGeneralDecryptionKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestGeneralDecryptionKey>, I>>(
    object: I,
  ): MsgRequestGeneralDecryptionKey {
    const message = createBaseMsgRequestGeneralDecryptionKey();
    message.creator = object.creator ?? "";
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseMsgRequestGeneralDecryptionKeyResponse(): MsgRequestGeneralDecryptionKeyResponse {
  return {};
}

export const MsgRequestGeneralDecryptionKeyResponse = {
  encode(_: MsgRequestGeneralDecryptionKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestGeneralDecryptionKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestGeneralDecryptionKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRequestGeneralDecryptionKeyResponse {
    return {};
  },

  toJSON(_: MsgRequestGeneralDecryptionKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestGeneralDecryptionKeyResponse>, I>>(
    base?: I,
  ): MsgRequestGeneralDecryptionKeyResponse {
    return MsgRequestGeneralDecryptionKeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestGeneralDecryptionKeyResponse>, I>>(
    _: I,
  ): MsgRequestGeneralDecryptionKeyResponse {
    const message = createBaseMsgRequestGeneralDecryptionKeyResponse();
    return message;
  },
};

function createBaseMsgRequestPrivateIdentity(): MsgRequestPrivateIdentity {
  return { creator: "", reqId: "" };
}

export const MsgRequestPrivateIdentity = {
  encode(message: MsgRequestPrivateIdentity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reqId !== "") {
      writer.uint32(18).string(message.reqId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestPrivateIdentity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestPrivateIdentity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reqId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRequestPrivateIdentity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      reqId: isSet(object.reqId) ? String(object.reqId) : "",
    };
  },

  toJSON(message: MsgRequestPrivateIdentity): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.reqId !== "") {
      obj.reqId = message.reqId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestPrivateIdentity>, I>>(base?: I): MsgRequestPrivateIdentity {
    return MsgRequestPrivateIdentity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestPrivateIdentity>, I>>(object: I): MsgRequestPrivateIdentity {
    const message = createBaseMsgRequestPrivateIdentity();
    message.creator = object.creator ?? "";
    message.reqId = object.reqId ?? "";
    return message;
  },
};

function createBaseMsgRequestPrivateIdentityResponse(): MsgRequestPrivateIdentityResponse {
  return { identity: "" };
}

export const MsgRequestPrivateIdentityResponse = {
  encode(message: MsgRequestPrivateIdentityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identity !== "") {
      writer.uint32(10).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestPrivateIdentityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestPrivateIdentityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identity = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRequestPrivateIdentityResponse {
    return { identity: isSet(object.identity) ? String(object.identity) : "" };
  },

  toJSON(message: MsgRequestPrivateIdentityResponse): unknown {
    const obj: any = {};
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestPrivateIdentityResponse>, I>>(
    base?: I,
  ): MsgRequestPrivateIdentityResponse {
    return MsgRequestPrivateIdentityResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestPrivateIdentityResponse>, I>>(
    object: I,
  ): MsgRequestPrivateIdentityResponse {
    const message = createBaseMsgRequestPrivateIdentityResponse();
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseMsgRequestPrivateDecryptionKey(): MsgRequestPrivateDecryptionKey {
  return { creator: "", identity: "", secpPubkey: "" };
}

export const MsgRequestPrivateDecryptionKey = {
  encode(message: MsgRequestPrivateDecryptionKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.secpPubkey !== "") {
      writer.uint32(26).string(message.secpPubkey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestPrivateDecryptionKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestPrivateDecryptionKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.identity = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secpPubkey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRequestPrivateDecryptionKey {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      secpPubkey: isSet(object.secpPubkey) ? String(object.secpPubkey) : "",
    };
  },

  toJSON(message: MsgRequestPrivateDecryptionKey): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.secpPubkey !== "") {
      obj.secpPubkey = message.secpPubkey;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestPrivateDecryptionKey>, I>>(base?: I): MsgRequestPrivateDecryptionKey {
    return MsgRequestPrivateDecryptionKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestPrivateDecryptionKey>, I>>(
    object: I,
  ): MsgRequestPrivateDecryptionKey {
    const message = createBaseMsgRequestPrivateDecryptionKey();
    message.creator = object.creator ?? "";
    message.identity = object.identity ?? "";
    message.secpPubkey = object.secpPubkey ?? "";
    return message;
  },
};

function createBaseMsgRequestPrivateDecryptionKeyResponse(): MsgRequestPrivateDecryptionKeyResponse {
  return {};
}

export const MsgRequestPrivateDecryptionKeyResponse = {
  encode(_: MsgRequestPrivateDecryptionKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestPrivateDecryptionKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestPrivateDecryptionKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRequestPrivateDecryptionKeyResponse {
    return {};
  },

  toJSON(_: MsgRequestPrivateDecryptionKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestPrivateDecryptionKeyResponse>, I>>(
    base?: I,
  ): MsgRequestPrivateDecryptionKeyResponse {
    return MsgRequestPrivateDecryptionKeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestPrivateDecryptionKeyResponse>, I>>(
    _: I,
  ): MsgRequestPrivateDecryptionKeyResponse {
    const message = createBaseMsgRequestPrivateDecryptionKeyResponse();
    return message;
  },
};

function createBaseMsgRegisterContract(): MsgRegisterContract {
  return { creator: "", contractAddress: "", identity: "" };
}

export const MsgRegisterContract = {
  encode(message: MsgRegisterContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identity = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
    };
  },

  toJSON(message: MsgRegisterContract): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.contractAddress !== "") {
      obj.contractAddress = message.contractAddress;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterContract>, I>>(base?: I): MsgRegisterContract {
    return MsgRegisterContract.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterContract>, I>>(object: I): MsgRegisterContract {
    const message = createBaseMsgRegisterContract();
    message.creator = object.creator ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseMsgRegisterContractResponse(): MsgRegisterContractResponse {
  return {};
}

export const MsgRegisterContractResponse = {
  encode(_: MsgRegisterContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterContractResponse {
    return {};
  },

  toJSON(_: MsgRegisterContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterContractResponse>, I>>(base?: I): MsgRegisterContractResponse {
    return MsgRegisterContractResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterContractResponse>, I>>(_: I): MsgRegisterContractResponse {
    const message = createBaseMsgRegisterContractResponse();
    return message;
  },
};

function createBaseMsgUnregisterContract(): MsgUnregisterContract {
  return { creator: "", contractAddress: "", identity: "" };
}

export const MsgUnregisterContract = {
  encode(message: MsgUnregisterContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnregisterContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identity = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUnregisterContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
    };
  },

  toJSON(message: MsgUnregisterContract): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.contractAddress !== "") {
      obj.contractAddress = message.contractAddress;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUnregisterContract>, I>>(base?: I): MsgUnregisterContract {
    return MsgUnregisterContract.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnregisterContract>, I>>(object: I): MsgUnregisterContract {
    const message = createBaseMsgUnregisterContract();
    message.creator = object.creator ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseMsgUnregisterContractResponse(): MsgUnregisterContractResponse {
  return {};
}

export const MsgUnregisterContractResponse = {
  encode(_: MsgUnregisterContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnregisterContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUnregisterContractResponse {
    return {};
  },

  toJSON(_: MsgUnregisterContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUnregisterContractResponse>, I>>(base?: I): MsgUnregisterContractResponse {
    return MsgUnregisterContractResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnregisterContractResponse>, I>>(_: I): MsgUnregisterContractResponse {
    const message = createBaseMsgUnregisterContractResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * SubmitEncryptedTx defines an operation to submit an
   * encrypted transaction for a particular target block height
   */
  SubmitEncryptedTx(request: MsgSubmitEncryptedTx): Promise<MsgSubmitEncryptedTxResponse>;
  /**
   * SubmitGeneralEncryptedTx defines an operation to submit an
   * encrypted transaction for a particular identity
   */
  SubmitGeneralEncryptedTx(request: MsgSubmitGeneralEncryptedTx): Promise<MsgSubmitGeneralEncryptedTxResponse>;
  /**
   * SubmitDecryptionKey defines an operation to submit a
   * decryption to a destination chain
   */
  SubmitDecryptionKey(request: MsgSubmitDecryptionKey): Promise<MsgSubmitDecryptionKeyResponse>;
  /**
   * RequestGeneralIdentity defines an operation to request the
   * creation of a new identity to which validators will be required
   * to submit keyshares
   */
  RequestGeneralIdentity(request: MsgRequestGeneralIdentity): Promise<MsgRequestGeneralIdentityResponse>;
  /**
   * RequestGeneralDecryptionKey defines an operation to signal validators to start
   * submitting keyshares for a particular identity
   */
  RequestGeneralDecryptionKey(request: MsgRequestGeneralDecryptionKey): Promise<MsgRequestGeneralDecryptionKeyResponse>;
  /**
   * RequestPrivateIdentity defines an operation to request the
   * creation of a new identity to which validators will be required
   * to submit encrypted keyshares
   */
  RequestPrivateIdentity(request: MsgRequestPrivateIdentity): Promise<MsgRequestPrivateIdentityResponse>;
  /**
   * RequestPrivateDecryptionKey defines an operation to signal validators to start
   * submitting encrypted keyshares for a particular identity
   */
  RequestPrivateDecryptionKey(request: MsgRequestPrivateDecryptionKey): Promise<MsgRequestPrivateDecryptionKeyResponse>;
  /**
   * RegisterContract defines an operation to make an instantiated
   * contract eligible to be automatically executed when a particular
   * identity has decryption key available for it
   */
  RegisterContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
  /**
   * UnregisterContract defines an operation to remove a registered contract
   * from the list of contracts set to be automatically executed when
   * decryption key is available for a particular identity
   */
  UnregisterContract(request: MsgUnregisterContract): Promise<MsgUnregisterContractResponse>;
}

export const MsgServiceName = "fairyring.pep.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.SubmitEncryptedTx = this.SubmitEncryptedTx.bind(this);
    this.SubmitGeneralEncryptedTx = this.SubmitGeneralEncryptedTx.bind(this);
    this.SubmitDecryptionKey = this.SubmitDecryptionKey.bind(this);
    this.RequestGeneralIdentity = this.RequestGeneralIdentity.bind(this);
    this.RequestGeneralDecryptionKey = this.RequestGeneralDecryptionKey.bind(this);
    this.RequestPrivateIdentity = this.RequestPrivateIdentity.bind(this);
    this.RequestPrivateDecryptionKey = this.RequestPrivateDecryptionKey.bind(this);
    this.RegisterContract = this.RegisterContract.bind(this);
    this.UnregisterContract = this.UnregisterContract.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  SubmitEncryptedTx(request: MsgSubmitEncryptedTx): Promise<MsgSubmitEncryptedTxResponse> {
    const data = MsgSubmitEncryptedTx.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitEncryptedTx", data);
    return promise.then((data) => MsgSubmitEncryptedTxResponse.decode(_m0.Reader.create(data)));
  }

  SubmitGeneralEncryptedTx(request: MsgSubmitGeneralEncryptedTx): Promise<MsgSubmitGeneralEncryptedTxResponse> {
    const data = MsgSubmitGeneralEncryptedTx.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitGeneralEncryptedTx", data);
    return promise.then((data) => MsgSubmitGeneralEncryptedTxResponse.decode(_m0.Reader.create(data)));
  }

  SubmitDecryptionKey(request: MsgSubmitDecryptionKey): Promise<MsgSubmitDecryptionKeyResponse> {
    const data = MsgSubmitDecryptionKey.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitDecryptionKey", data);
    return promise.then((data) => MsgSubmitDecryptionKeyResponse.decode(_m0.Reader.create(data)));
  }

  RequestGeneralIdentity(request: MsgRequestGeneralIdentity): Promise<MsgRequestGeneralIdentityResponse> {
    const data = MsgRequestGeneralIdentity.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestGeneralIdentity", data);
    return promise.then((data) => MsgRequestGeneralIdentityResponse.decode(_m0.Reader.create(data)));
  }

  RequestGeneralDecryptionKey(
    request: MsgRequestGeneralDecryptionKey,
  ): Promise<MsgRequestGeneralDecryptionKeyResponse> {
    const data = MsgRequestGeneralDecryptionKey.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestGeneralDecryptionKey", data);
    return promise.then((data) => MsgRequestGeneralDecryptionKeyResponse.decode(_m0.Reader.create(data)));
  }

  RequestPrivateIdentity(request: MsgRequestPrivateIdentity): Promise<MsgRequestPrivateIdentityResponse> {
    const data = MsgRequestPrivateIdentity.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestPrivateIdentity", data);
    return promise.then((data) => MsgRequestPrivateIdentityResponse.decode(_m0.Reader.create(data)));
  }

  RequestPrivateDecryptionKey(
    request: MsgRequestPrivateDecryptionKey,
  ): Promise<MsgRequestPrivateDecryptionKeyResponse> {
    const data = MsgRequestPrivateDecryptionKey.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestPrivateDecryptionKey", data);
    return promise.then((data) => MsgRequestPrivateDecryptionKeyResponse.decode(_m0.Reader.create(data)));
  }

  RegisterContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse> {
    const data = MsgRegisterContract.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterContract", data);
    return promise.then((data) => MsgRegisterContractResponse.decode(_m0.Reader.create(data)));
  }

  UnregisterContract(request: MsgUnregisterContract): Promise<MsgUnregisterContractResponse> {
    const data = MsgUnregisterContract.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnregisterContract", data);
    return promise.then((data) => MsgUnregisterContractResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
