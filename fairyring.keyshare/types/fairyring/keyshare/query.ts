/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { AuthorizedAddress } from "./authorized_address";
import { Commitments } from "./commitments";
import { DecryptionKey } from "./decryption_key";
import { GeneralKeyshare, Keyshare } from "./keyshare";
import { Params } from "./params";
import { ActivePubkey, QueuedPubkey } from "./pubkey";
import { ValidatorSet } from "./validator_set";

export const protobufPackage = "fairyring.keyshare";

/**
 * QueryVerifiableRandomnessRequest is the request type for
 * the Query/VerifiableRandomness  method
 */
export interface QueryVerifiableRandomnessRequest {
}

/**
 * QueryVerifiableRandomnessResponse is the response type for
 * the Query/VerifiableRandomness  method
 */
export interface QueryVerifiableRandomnessResponse {
  randomness: string;
  round: number;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

/** QueryCommitmentsRequest is request type for the Query/Commitments RPC method. */
export interface QueryCommitmentsRequest {
}

/** QueryCommitmentsResponse is response type for the Query/Commitments RPC method */
export interface QueryCommitmentsResponse {
  activeCommitments: Commitments | undefined;
  queuedCommitments: Commitments | undefined;
}

/** QueryValidatorSetRequest is request type for the Query/ValidatorSet RPC method. */
export interface QueryValidatorSetRequest {
  index: string;
}

/** QueryValidatorSetResponse is response type for the Query/ValidatorSet RPC method. */
export interface QueryValidatorSetResponse {
  validatorSet: ValidatorSet | undefined;
}

/** QueryValidatorSetAllRequest is request type for the Query/ValidatorSetAll RPC method. */
export interface QueryValidatorSetAllRequest {
  pagination: PageRequest | undefined;
}

/** QueryValidatorSetAllResponse is response type for the Query/ValidatorSetAll RPC method. */
export interface QueryValidatorSetAllResponse {
  validatorSet: ValidatorSet[];
  pagination: PageResponse | undefined;
}

/** QueryKeyshareRequest is request type for the Query/Keyshare RPC method. */
export interface QueryKeyshareRequest {
  validator: string;
  blockHeight: number;
}

/** QueryKeyshareResponse is response type for the Query/Keyshare RPC method. */
export interface QueryKeyshareResponse {
  keyshare: Keyshare | undefined;
}

/** QueryKeyshareAllRequest is request type for the Query/KeyshareAll RPC method. */
export interface QueryKeyshareAllRequest {
  pagination: PageRequest | undefined;
}

/** QueryKeyshareAllResponse is response type for the Query/KeyshareAll RPC method. */
export interface QueryKeyshareAllResponse {
  keyshare: Keyshare[];
  pagination: PageResponse | undefined;
}

/** QueryDecryptionKeyRequest is request type for the Query/DecryptionKey RPC method. */
export interface QueryDecryptionKeyRequest {
  height: number;
}

/** QueryDecryptionKeyResponse is response type for the Query/DecryptionKey RPC method. */
export interface QueryDecryptionKeyResponse {
  decryptionKey: DecryptionKey | undefined;
}

/** QueryDecryptionKeyAllRequest is request type for the Query/DecryptionKeyAll RPC method. */
export interface QueryDecryptionKeyAllRequest {
  pagination: PageRequest | undefined;
}

/** QueryDecryptionKeyAllResponse is response type for the Query/DecryptionKeyAll RPC method. */
export interface QueryDecryptionKeyAllResponse {
  decryptionKeys: DecryptionKey[];
  pagination: PageResponse | undefined;
}

/** QueryPubkeyRequest is request type for the Query/Pubkey RPC method. */
export interface QueryPubkeyRequest {
}

/** QueryPubkeyResponse is response type for the Query/Pubkey RPC method. */
export interface QueryPubkeyResponse {
  activePubkey: ActivePubkey | undefined;
  queuedPubkey: QueuedPubkey | undefined;
}

/** QueryAuthorizedAddressRequest is request type for the Query/AuthorizedAddress RPC method. */
export interface QueryAuthorizedAddressRequest {
  target: string;
}

/** QueryAuthorizedAddressResponse is response type for the Query/AuthorizedAddress RPC method. */
export interface QueryAuthorizedAddressResponse {
  authorizedAddress: AuthorizedAddress | undefined;
}

/** QueryAuthorizedAddressAllRequest is request type for the Query/AuthorizedAddressAll RPC method. */
export interface QueryAuthorizedAddressAllRequest {
  pagination: PageRequest | undefined;
}

/** QueryAuthorizedAddressAllResponse is response type for the Query/AuthorizedAddressAll RPC method. */
export interface QueryAuthorizedAddressAllResponse {
  authorizedAddress: AuthorizedAddress[];
  pagination: PageResponse | undefined;
}

/** QueryGeneralKeyshareRequest is request type for the Query/GeneralKeyshare RPC method. */
export interface QueryGeneralKeyshareRequest {
  validator: string;
  idType: string;
  idValue: string;
}

/** QueryGeneralKeyshareResponse is response type for the Query/GeneralKeyshare RPC method. */
export interface QueryGeneralKeyshareResponse {
  generalKeyshare: GeneralKeyshare | undefined;
}

/** QueryGeneralKeyshareAllRequest is request type for the Query/GeneralKeyshareAll RPC method. */
export interface QueryGeneralKeyshareAllRequest {
  pagination: PageRequest | undefined;
}

/** QueryGeneralKeyshareAllResponse is response type for the Query/GeneralKeyshareAll RPC method. */
export interface QueryGeneralKeyshareAllResponse {
  generalKeyshare: GeneralKeyshare[];
  pagination: PageResponse | undefined;
}

function createBaseQueryVerifiableRandomnessRequest(): QueryVerifiableRandomnessRequest {
  return {};
}

export const QueryVerifiableRandomnessRequest = {
  encode(_: QueryVerifiableRandomnessRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifiableRandomnessRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifiableRandomnessRequest();
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

  fromJSON(_: any): QueryVerifiableRandomnessRequest {
    return {};
  },

  toJSON(_: QueryVerifiableRandomnessRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryVerifiableRandomnessRequest>, I>>(
    base?: I,
  ): QueryVerifiableRandomnessRequest {
    return QueryVerifiableRandomnessRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryVerifiableRandomnessRequest>, I>>(
    _: I,
  ): QueryVerifiableRandomnessRequest {
    const message = createBaseQueryVerifiableRandomnessRequest();
    return message;
  },
};

function createBaseQueryVerifiableRandomnessResponse(): QueryVerifiableRandomnessResponse {
  return { randomness: "", round: 0 };
}

export const QueryVerifiableRandomnessResponse = {
  encode(message: QueryVerifiableRandomnessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.randomness !== "") {
      writer.uint32(10).string(message.randomness);
    }
    if (message.round !== 0) {
      writer.uint32(16).uint64(message.round);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifiableRandomnessResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifiableRandomnessResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.randomness = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.round = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryVerifiableRandomnessResponse {
    return {
      randomness: isSet(object.randomness) ? String(object.randomness) : "",
      round: isSet(object.round) ? Number(object.round) : 0,
    };
  },

  toJSON(message: QueryVerifiableRandomnessResponse): unknown {
    const obj: any = {};
    if (message.randomness !== "") {
      obj.randomness = message.randomness;
    }
    if (message.round !== 0) {
      obj.round = Math.round(message.round);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryVerifiableRandomnessResponse>, I>>(
    base?: I,
  ): QueryVerifiableRandomnessResponse {
    return QueryVerifiableRandomnessResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryVerifiableRandomnessResponse>, I>>(
    object: I,
  ): QueryVerifiableRandomnessResponse {
    const message = createBaseQueryVerifiableRandomnessResponse();
    message.randomness = object.randomness ?? "";
    message.round = object.round ?? 0;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryCommitmentsRequest(): QueryCommitmentsRequest {
  return {};
}

export const QueryCommitmentsRequest = {
  encode(_: QueryCommitmentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitmentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentsRequest();
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

  fromJSON(_: any): QueryCommitmentsRequest {
    return {};
  },

  toJSON(_: QueryCommitmentsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCommitmentsRequest>, I>>(base?: I): QueryCommitmentsRequest {
    return QueryCommitmentsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCommitmentsRequest>, I>>(_: I): QueryCommitmentsRequest {
    const message = createBaseQueryCommitmentsRequest();
    return message;
  },
};

function createBaseQueryCommitmentsResponse(): QueryCommitmentsResponse {
  return { activeCommitments: undefined, queuedCommitments: undefined };
}

export const QueryCommitmentsResponse = {
  encode(message: QueryCommitmentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activeCommitments !== undefined) {
      Commitments.encode(message.activeCommitments, writer.uint32(10).fork()).ldelim();
    }
    if (message.queuedCommitments !== undefined) {
      Commitments.encode(message.queuedCommitments, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitmentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activeCommitments = Commitments.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.queuedCommitments = Commitments.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCommitmentsResponse {
    return {
      activeCommitments: isSet(object.activeCommitments) ? Commitments.fromJSON(object.activeCommitments) : undefined,
      queuedCommitments: isSet(object.queuedCommitments) ? Commitments.fromJSON(object.queuedCommitments) : undefined,
    };
  },

  toJSON(message: QueryCommitmentsResponse): unknown {
    const obj: any = {};
    if (message.activeCommitments !== undefined) {
      obj.activeCommitments = Commitments.toJSON(message.activeCommitments);
    }
    if (message.queuedCommitments !== undefined) {
      obj.queuedCommitments = Commitments.toJSON(message.queuedCommitments);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCommitmentsResponse>, I>>(base?: I): QueryCommitmentsResponse {
    return QueryCommitmentsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCommitmentsResponse>, I>>(object: I): QueryCommitmentsResponse {
    const message = createBaseQueryCommitmentsResponse();
    message.activeCommitments = (object.activeCommitments !== undefined && object.activeCommitments !== null)
      ? Commitments.fromPartial(object.activeCommitments)
      : undefined;
    message.queuedCommitments = (object.queuedCommitments !== undefined && object.queuedCommitments !== null)
      ? Commitments.fromPartial(object.queuedCommitments)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorSetRequest(): QueryValidatorSetRequest {
  return { index: "" };
}

export const QueryValidatorSetRequest = {
  encode(message: QueryValidatorSetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.index = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorSetRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryValidatorSetRequest): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorSetRequest>, I>>(base?: I): QueryValidatorSetRequest {
    return QueryValidatorSetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorSetRequest>, I>>(object: I): QueryValidatorSetRequest {
    const message = createBaseQueryValidatorSetRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryValidatorSetResponse(): QueryValidatorSetResponse {
  return { validatorSet: undefined };
}

export const QueryValidatorSetResponse = {
  encode(message: QueryValidatorSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorSetResponse {
    return { validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined };
  },

  toJSON(message: QueryValidatorSetResponse): unknown {
    const obj: any = {};
    if (message.validatorSet !== undefined) {
      obj.validatorSet = ValidatorSet.toJSON(message.validatorSet);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorSetResponse>, I>>(base?: I): QueryValidatorSetResponse {
    return QueryValidatorSetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorSetResponse>, I>>(object: I): QueryValidatorSetResponse {
    const message = createBaseQueryValidatorSetResponse();
    message.validatorSet = (object.validatorSet !== undefined && object.validatorSet !== null)
      ? ValidatorSet.fromPartial(object.validatorSet)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorSetAllRequest(): QueryValidatorSetAllRequest {
  return { pagination: undefined };
}

export const QueryValidatorSetAllRequest = {
  encode(message: QueryValidatorSetAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSetAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSetAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorSetAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryValidatorSetAllRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorSetAllRequest>, I>>(base?: I): QueryValidatorSetAllRequest {
    return QueryValidatorSetAllRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorSetAllRequest>, I>>(object: I): QueryValidatorSetAllRequest {
    const message = createBaseQueryValidatorSetAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorSetAllResponse(): QueryValidatorSetAllResponse {
  return { validatorSet: [], pagination: undefined };
}

export const QueryValidatorSetAllResponse = {
  encode(message: QueryValidatorSetAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validatorSet) {
      ValidatorSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSetAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSetAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorSet.push(ValidatorSet.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorSetAllResponse {
    return {
      validatorSet: Array.isArray(object?.validatorSet)
        ? object.validatorSet.map((e: any) => ValidatorSet.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorSetAllResponse): unknown {
    const obj: any = {};
    if (message.validatorSet?.length) {
      obj.validatorSet = message.validatorSet.map((e) => ValidatorSet.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorSetAllResponse>, I>>(base?: I): QueryValidatorSetAllResponse {
    return QueryValidatorSetAllResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorSetAllResponse>, I>>(object: I): QueryValidatorSetAllResponse {
    const message = createBaseQueryValidatorSetAllResponse();
    message.validatorSet = object.validatorSet?.map((e) => ValidatorSet.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryKeyshareRequest(): QueryKeyshareRequest {
  return { validator: "", blockHeight: 0 };
}

export const QueryKeyshareRequest = {
  encode(message: QueryKeyshareRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryKeyshareRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKeyshareRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.blockHeight = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryKeyshareRequest {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
    };
  },

  toJSON(message: QueryKeyshareRequest): unknown {
    const obj: any = {};
    if (message.validator !== "") {
      obj.validator = message.validator;
    }
    if (message.blockHeight !== 0) {
      obj.blockHeight = Math.round(message.blockHeight);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryKeyshareRequest>, I>>(base?: I): QueryKeyshareRequest {
    return QueryKeyshareRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryKeyshareRequest>, I>>(object: I): QueryKeyshareRequest {
    const message = createBaseQueryKeyshareRequest();
    message.validator = object.validator ?? "";
    message.blockHeight = object.blockHeight ?? 0;
    return message;
  },
};

function createBaseQueryKeyshareResponse(): QueryKeyshareResponse {
  return { keyshare: undefined };
}

export const QueryKeyshareResponse = {
  encode(message: QueryKeyshareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyshare !== undefined) {
      Keyshare.encode(message.keyshare, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryKeyshareResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKeyshareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyshare = Keyshare.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryKeyshareResponse {
    return { keyshare: isSet(object.keyshare) ? Keyshare.fromJSON(object.keyshare) : undefined };
  },

  toJSON(message: QueryKeyshareResponse): unknown {
    const obj: any = {};
    if (message.keyshare !== undefined) {
      obj.keyshare = Keyshare.toJSON(message.keyshare);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryKeyshareResponse>, I>>(base?: I): QueryKeyshareResponse {
    return QueryKeyshareResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryKeyshareResponse>, I>>(object: I): QueryKeyshareResponse {
    const message = createBaseQueryKeyshareResponse();
    message.keyshare = (object.keyshare !== undefined && object.keyshare !== null)
      ? Keyshare.fromPartial(object.keyshare)
      : undefined;
    return message;
  },
};

function createBaseQueryKeyshareAllRequest(): QueryKeyshareAllRequest {
  return { pagination: undefined };
}

export const QueryKeyshareAllRequest = {
  encode(message: QueryKeyshareAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryKeyshareAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKeyshareAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryKeyshareAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryKeyshareAllRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryKeyshareAllRequest>, I>>(base?: I): QueryKeyshareAllRequest {
    return QueryKeyshareAllRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryKeyshareAllRequest>, I>>(object: I): QueryKeyshareAllRequest {
    const message = createBaseQueryKeyshareAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryKeyshareAllResponse(): QueryKeyshareAllResponse {
  return { keyshare: [], pagination: undefined };
}

export const QueryKeyshareAllResponse = {
  encode(message: QueryKeyshareAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keyshare) {
      Keyshare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryKeyshareAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKeyshareAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyshare.push(Keyshare.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryKeyshareAllResponse {
    return {
      keyshare: Array.isArray(object?.keyshare) ? object.keyshare.map((e: any) => Keyshare.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryKeyshareAllResponse): unknown {
    const obj: any = {};
    if (message.keyshare?.length) {
      obj.keyshare = message.keyshare.map((e) => Keyshare.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryKeyshareAllResponse>, I>>(base?: I): QueryKeyshareAllResponse {
    return QueryKeyshareAllResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryKeyshareAllResponse>, I>>(object: I): QueryKeyshareAllResponse {
    const message = createBaseQueryKeyshareAllResponse();
    message.keyshare = object.keyshare?.map((e) => Keyshare.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDecryptionKeyRequest(): QueryDecryptionKeyRequest {
  return { height: 0 };
}

export const QueryDecryptionKeyRequest = {
  encode(message: QueryDecryptionKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDecryptionKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDecryptionKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDecryptionKeyRequest {
    return { height: isSet(object.height) ? Number(object.height) : 0 };
  },

  toJSON(message: QueryDecryptionKeyRequest): unknown {
    const obj: any = {};
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDecryptionKeyRequest>, I>>(base?: I): QueryDecryptionKeyRequest {
    return QueryDecryptionKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDecryptionKeyRequest>, I>>(object: I): QueryDecryptionKeyRequest {
    const message = createBaseQueryDecryptionKeyRequest();
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseQueryDecryptionKeyResponse(): QueryDecryptionKeyResponse {
  return { decryptionKey: undefined };
}

export const QueryDecryptionKeyResponse = {
  encode(message: QueryDecryptionKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.decryptionKey !== undefined) {
      DecryptionKey.encode(message.decryptionKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDecryptionKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDecryptionKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.decryptionKey = DecryptionKey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDecryptionKeyResponse {
    return { decryptionKey: isSet(object.decryptionKey) ? DecryptionKey.fromJSON(object.decryptionKey) : undefined };
  },

  toJSON(message: QueryDecryptionKeyResponse): unknown {
    const obj: any = {};
    if (message.decryptionKey !== undefined) {
      obj.decryptionKey = DecryptionKey.toJSON(message.decryptionKey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDecryptionKeyResponse>, I>>(base?: I): QueryDecryptionKeyResponse {
    return QueryDecryptionKeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDecryptionKeyResponse>, I>>(object: I): QueryDecryptionKeyResponse {
    const message = createBaseQueryDecryptionKeyResponse();
    message.decryptionKey = (object.decryptionKey !== undefined && object.decryptionKey !== null)
      ? DecryptionKey.fromPartial(object.decryptionKey)
      : undefined;
    return message;
  },
};

function createBaseQueryDecryptionKeyAllRequest(): QueryDecryptionKeyAllRequest {
  return { pagination: undefined };
}

export const QueryDecryptionKeyAllRequest = {
  encode(message: QueryDecryptionKeyAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDecryptionKeyAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDecryptionKeyAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDecryptionKeyAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryDecryptionKeyAllRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDecryptionKeyAllRequest>, I>>(base?: I): QueryDecryptionKeyAllRequest {
    return QueryDecryptionKeyAllRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDecryptionKeyAllRequest>, I>>(object: I): QueryDecryptionKeyAllRequest {
    const message = createBaseQueryDecryptionKeyAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDecryptionKeyAllResponse(): QueryDecryptionKeyAllResponse {
  return { decryptionKeys: [], pagination: undefined };
}

export const QueryDecryptionKeyAllResponse = {
  encode(message: QueryDecryptionKeyAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.decryptionKeys) {
      DecryptionKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDecryptionKeyAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDecryptionKeyAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.decryptionKeys.push(DecryptionKey.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDecryptionKeyAllResponse {
    return {
      decryptionKeys: Array.isArray(object?.decryptionKeys)
        ? object.decryptionKeys.map((e: any) => DecryptionKey.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDecryptionKeyAllResponse): unknown {
    const obj: any = {};
    if (message.decryptionKeys?.length) {
      obj.decryptionKeys = message.decryptionKeys.map((e) => DecryptionKey.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDecryptionKeyAllResponse>, I>>(base?: I): QueryDecryptionKeyAllResponse {
    return QueryDecryptionKeyAllResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDecryptionKeyAllResponse>, I>>(
    object: I,
  ): QueryDecryptionKeyAllResponse {
    const message = createBaseQueryDecryptionKeyAllResponse();
    message.decryptionKeys = object.decryptionKeys?.map((e) => DecryptionKey.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPubkeyRequest(): QueryPubkeyRequest {
  return {};
}

export const QueryPubkeyRequest = {
  encode(_: QueryPubkeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPubkeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPubkeyRequest();
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

  fromJSON(_: any): QueryPubkeyRequest {
    return {};
  },

  toJSON(_: QueryPubkeyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPubkeyRequest>, I>>(base?: I): QueryPubkeyRequest {
    return QueryPubkeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPubkeyRequest>, I>>(_: I): QueryPubkeyRequest {
    const message = createBaseQueryPubkeyRequest();
    return message;
  },
};

function createBaseQueryPubkeyResponse(): QueryPubkeyResponse {
  return { activePubkey: undefined, queuedPubkey: undefined };
}

export const QueryPubkeyResponse = {
  encode(message: QueryPubkeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activePubkey !== undefined) {
      ActivePubkey.encode(message.activePubkey, writer.uint32(10).fork()).ldelim();
    }
    if (message.queuedPubkey !== undefined) {
      QueuedPubkey.encode(message.queuedPubkey, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPubkeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPubkeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activePubkey = ActivePubkey.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.queuedPubkey = QueuedPubkey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPubkeyResponse {
    return {
      activePubkey: isSet(object.activePubkey) ? ActivePubkey.fromJSON(object.activePubkey) : undefined,
      queuedPubkey: isSet(object.queuedPubkey) ? QueuedPubkey.fromJSON(object.queuedPubkey) : undefined,
    };
  },

  toJSON(message: QueryPubkeyResponse): unknown {
    const obj: any = {};
    if (message.activePubkey !== undefined) {
      obj.activePubkey = ActivePubkey.toJSON(message.activePubkey);
    }
    if (message.queuedPubkey !== undefined) {
      obj.queuedPubkey = QueuedPubkey.toJSON(message.queuedPubkey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPubkeyResponse>, I>>(base?: I): QueryPubkeyResponse {
    return QueryPubkeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPubkeyResponse>, I>>(object: I): QueryPubkeyResponse {
    const message = createBaseQueryPubkeyResponse();
    message.activePubkey = (object.activePubkey !== undefined && object.activePubkey !== null)
      ? ActivePubkey.fromPartial(object.activePubkey)
      : undefined;
    message.queuedPubkey = (object.queuedPubkey !== undefined && object.queuedPubkey !== null)
      ? QueuedPubkey.fromPartial(object.queuedPubkey)
      : undefined;
    return message;
  },
};

function createBaseQueryAuthorizedAddressRequest(): QueryAuthorizedAddressRequest {
  return { target: "" };
}

export const QueryAuthorizedAddressRequest = {
  encode(message: QueryAuthorizedAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== "") {
      writer.uint32(10).string(message.target);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorizedAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorizedAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.target = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAuthorizedAddressRequest {
    return { target: isSet(object.target) ? String(object.target) : "" };
  },

  toJSON(message: QueryAuthorizedAddressRequest): unknown {
    const obj: any = {};
    if (message.target !== "") {
      obj.target = message.target;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAuthorizedAddressRequest>, I>>(base?: I): QueryAuthorizedAddressRequest {
    return QueryAuthorizedAddressRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuthorizedAddressRequest>, I>>(
    object: I,
  ): QueryAuthorizedAddressRequest {
    const message = createBaseQueryAuthorizedAddressRequest();
    message.target = object.target ?? "";
    return message;
  },
};

function createBaseQueryAuthorizedAddressResponse(): QueryAuthorizedAddressResponse {
  return { authorizedAddress: undefined };
}

export const QueryAuthorizedAddressResponse = {
  encode(message: QueryAuthorizedAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorizedAddress !== undefined) {
      AuthorizedAddress.encode(message.authorizedAddress, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorizedAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorizedAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authorizedAddress = AuthorizedAddress.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAuthorizedAddressResponse {
    return {
      authorizedAddress: isSet(object.authorizedAddress)
        ? AuthorizedAddress.fromJSON(object.authorizedAddress)
        : undefined,
    };
  },

  toJSON(message: QueryAuthorizedAddressResponse): unknown {
    const obj: any = {};
    if (message.authorizedAddress !== undefined) {
      obj.authorizedAddress = AuthorizedAddress.toJSON(message.authorizedAddress);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAuthorizedAddressResponse>, I>>(base?: I): QueryAuthorizedAddressResponse {
    return QueryAuthorizedAddressResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuthorizedAddressResponse>, I>>(
    object: I,
  ): QueryAuthorizedAddressResponse {
    const message = createBaseQueryAuthorizedAddressResponse();
    message.authorizedAddress = (object.authorizedAddress !== undefined && object.authorizedAddress !== null)
      ? AuthorizedAddress.fromPartial(object.authorizedAddress)
      : undefined;
    return message;
  },
};

function createBaseQueryAuthorizedAddressAllRequest(): QueryAuthorizedAddressAllRequest {
  return { pagination: undefined };
}

export const QueryAuthorizedAddressAllRequest = {
  encode(message: QueryAuthorizedAddressAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorizedAddressAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorizedAddressAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAuthorizedAddressAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAuthorizedAddressAllRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAuthorizedAddressAllRequest>, I>>(
    base?: I,
  ): QueryAuthorizedAddressAllRequest {
    return QueryAuthorizedAddressAllRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuthorizedAddressAllRequest>, I>>(
    object: I,
  ): QueryAuthorizedAddressAllRequest {
    const message = createBaseQueryAuthorizedAddressAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAuthorizedAddressAllResponse(): QueryAuthorizedAddressAllResponse {
  return { authorizedAddress: [], pagination: undefined };
}

export const QueryAuthorizedAddressAllResponse = {
  encode(message: QueryAuthorizedAddressAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.authorizedAddress) {
      AuthorizedAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorizedAddressAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorizedAddressAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authorizedAddress.push(AuthorizedAddress.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAuthorizedAddressAllResponse {
    return {
      authorizedAddress: Array.isArray(object?.authorizedAddress)
        ? object.authorizedAddress.map((e: any) => AuthorizedAddress.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAuthorizedAddressAllResponse): unknown {
    const obj: any = {};
    if (message.authorizedAddress?.length) {
      obj.authorizedAddress = message.authorizedAddress.map((e) => AuthorizedAddress.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAuthorizedAddressAllResponse>, I>>(
    base?: I,
  ): QueryAuthorizedAddressAllResponse {
    return QueryAuthorizedAddressAllResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuthorizedAddressAllResponse>, I>>(
    object: I,
  ): QueryAuthorizedAddressAllResponse {
    const message = createBaseQueryAuthorizedAddressAllResponse();
    message.authorizedAddress = object.authorizedAddress?.map((e) => AuthorizedAddress.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGeneralKeyshareRequest(): QueryGeneralKeyshareRequest {
  return { validator: "", idType: "", idValue: "" };
}

export const QueryGeneralKeyshareRequest = {
  encode(message: QueryGeneralKeyshareRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.idType !== "") {
      writer.uint32(18).string(message.idType);
    }
    if (message.idValue !== "") {
      writer.uint32(26).string(message.idValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGeneralKeyshareRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGeneralKeyshareRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.idType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.idValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGeneralKeyshareRequest {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      idType: isSet(object.idType) ? String(object.idType) : "",
      idValue: isSet(object.idValue) ? String(object.idValue) : "",
    };
  },

  toJSON(message: QueryGeneralKeyshareRequest): unknown {
    const obj: any = {};
    if (message.validator !== "") {
      obj.validator = message.validator;
    }
    if (message.idType !== "") {
      obj.idType = message.idType;
    }
    if (message.idValue !== "") {
      obj.idValue = message.idValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGeneralKeyshareRequest>, I>>(base?: I): QueryGeneralKeyshareRequest {
    return QueryGeneralKeyshareRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGeneralKeyshareRequest>, I>>(object: I): QueryGeneralKeyshareRequest {
    const message = createBaseQueryGeneralKeyshareRequest();
    message.validator = object.validator ?? "";
    message.idType = object.idType ?? "";
    message.idValue = object.idValue ?? "";
    return message;
  },
};

function createBaseQueryGeneralKeyshareResponse(): QueryGeneralKeyshareResponse {
  return { generalKeyshare: undefined };
}

export const QueryGeneralKeyshareResponse = {
  encode(message: QueryGeneralKeyshareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.generalKeyshare !== undefined) {
      GeneralKeyshare.encode(message.generalKeyshare, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGeneralKeyshareResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGeneralKeyshareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.generalKeyshare = GeneralKeyshare.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGeneralKeyshareResponse {
    return {
      generalKeyshare: isSet(object.generalKeyshare) ? GeneralKeyshare.fromJSON(object.generalKeyshare) : undefined,
    };
  },

  toJSON(message: QueryGeneralKeyshareResponse): unknown {
    const obj: any = {};
    if (message.generalKeyshare !== undefined) {
      obj.generalKeyshare = GeneralKeyshare.toJSON(message.generalKeyshare);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGeneralKeyshareResponse>, I>>(base?: I): QueryGeneralKeyshareResponse {
    return QueryGeneralKeyshareResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGeneralKeyshareResponse>, I>>(object: I): QueryGeneralKeyshareResponse {
    const message = createBaseQueryGeneralKeyshareResponse();
    message.generalKeyshare = (object.generalKeyshare !== undefined && object.generalKeyshare !== null)
      ? GeneralKeyshare.fromPartial(object.generalKeyshare)
      : undefined;
    return message;
  },
};

function createBaseQueryGeneralKeyshareAllRequest(): QueryGeneralKeyshareAllRequest {
  return { pagination: undefined };
}

export const QueryGeneralKeyshareAllRequest = {
  encode(message: QueryGeneralKeyshareAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGeneralKeyshareAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGeneralKeyshareAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGeneralKeyshareAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryGeneralKeyshareAllRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGeneralKeyshareAllRequest>, I>>(base?: I): QueryGeneralKeyshareAllRequest {
    return QueryGeneralKeyshareAllRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGeneralKeyshareAllRequest>, I>>(
    object: I,
  ): QueryGeneralKeyshareAllRequest {
    const message = createBaseQueryGeneralKeyshareAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGeneralKeyshareAllResponse(): QueryGeneralKeyshareAllResponse {
  return { generalKeyshare: [], pagination: undefined };
}

export const QueryGeneralKeyshareAllResponse = {
  encode(message: QueryGeneralKeyshareAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.generalKeyshare) {
      GeneralKeyshare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGeneralKeyshareAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGeneralKeyshareAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.generalKeyshare.push(GeneralKeyshare.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGeneralKeyshareAllResponse {
    return {
      generalKeyshare: Array.isArray(object?.generalKeyshare)
        ? object.generalKeyshare.map((e: any) => GeneralKeyshare.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGeneralKeyshareAllResponse): unknown {
    const obj: any = {};
    if (message.generalKeyshare?.length) {
      obj.generalKeyshare = message.generalKeyshare.map((e) => GeneralKeyshare.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGeneralKeyshareAllResponse>, I>>(base?: I): QueryGeneralKeyshareAllResponse {
    return QueryGeneralKeyshareAllResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGeneralKeyshareAllResponse>, I>>(
    object: I,
  ): QueryGeneralKeyshareAllResponse {
    const message = createBaseQueryGeneralKeyshareAllResponse();
    message.generalKeyshare = object.generalKeyshare?.map((e) => GeneralKeyshare.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Commitments queries the lists of active and queued commitments */
  Commitments(request: QueryCommitmentsRequest): Promise<QueryCommitmentsResponse>;
  /** Queries a ValidatorSet by index. */
  ValidatorSet(request: QueryValidatorSetRequest): Promise<QueryValidatorSetResponse>;
  /** Queries a list of ValidatorSet items. */
  ValidatorSetAll(request: QueryValidatorSetAllRequest): Promise<QueryValidatorSetAllResponse>;
  /** Queries a Keyshare by index. */
  Keyshare(request: QueryKeyshareRequest): Promise<QueryKeyshareResponse>;
  /** Queries a list of Keyshare items. */
  KeyshareAll(request: QueryKeyshareAllRequest): Promise<QueryKeyshareAllResponse>;
  /** DecryptionKey queries a DecryptionKey item by height. */
  DecryptionKey(request: QueryDecryptionKeyRequest): Promise<QueryDecryptionKeyResponse>;
  /** DecryptionKeyAll Queries a list of DecryptionKey items. */
  DecryptionKeyAll(request: QueryDecryptionKeyAllRequest): Promise<QueryDecryptionKeyAllResponse>;
  /** Queries the public keys */
  Pubkey(request: QueryPubkeyRequest): Promise<QueryPubkeyResponse>;
  /** Queries a AuthorizedAddress item by target. */
  AuthorizedAddress(request: QueryAuthorizedAddressRequest): Promise<QueryAuthorizedAddressResponse>;
  /** Queries a list of AuthorizedAddress items */
  AuthorizedAddressAll(request: QueryAuthorizedAddressAllRequest): Promise<QueryAuthorizedAddressAllResponse>;
  /** Queries a GeneralKeyshare item by validator address and identity. */
  GeneralKeyshare(request: QueryGeneralKeyshareRequest): Promise<QueryGeneralKeyshareResponse>;
  /** Queries a list of GeneralKeyshare items */
  GeneralKeyshareAll(request: QueryGeneralKeyshareAllRequest): Promise<QueryGeneralKeyshareAllResponse>;
  /** Queries verifiable randomness */
  VerifiableRandomness(request: QueryVerifiableRandomnessRequest): Promise<QueryVerifiableRandomnessResponse>;
}

export const QueryServiceName = "fairyring.keyshare.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Commitments = this.Commitments.bind(this);
    this.ValidatorSet = this.ValidatorSet.bind(this);
    this.ValidatorSetAll = this.ValidatorSetAll.bind(this);
    this.Keyshare = this.Keyshare.bind(this);
    this.KeyshareAll = this.KeyshareAll.bind(this);
    this.DecryptionKey = this.DecryptionKey.bind(this);
    this.DecryptionKeyAll = this.DecryptionKeyAll.bind(this);
    this.Pubkey = this.Pubkey.bind(this);
    this.AuthorizedAddress = this.AuthorizedAddress.bind(this);
    this.AuthorizedAddressAll = this.AuthorizedAddressAll.bind(this);
    this.GeneralKeyshare = this.GeneralKeyshare.bind(this);
    this.GeneralKeyshareAll = this.GeneralKeyshareAll.bind(this);
    this.VerifiableRandomness = this.VerifiableRandomness.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Commitments(request: QueryCommitmentsRequest): Promise<QueryCommitmentsResponse> {
    const data = QueryCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Commitments", data);
    return promise.then((data) => QueryCommitmentsResponse.decode(_m0.Reader.create(data)));
  }

  ValidatorSet(request: QueryValidatorSetRequest): Promise<QueryValidatorSetResponse> {
    const data = QueryValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidatorSet", data);
    return promise.then((data) => QueryValidatorSetResponse.decode(_m0.Reader.create(data)));
  }

  ValidatorSetAll(request: QueryValidatorSetAllRequest): Promise<QueryValidatorSetAllResponse> {
    const data = QueryValidatorSetAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidatorSetAll", data);
    return promise.then((data) => QueryValidatorSetAllResponse.decode(_m0.Reader.create(data)));
  }

  Keyshare(request: QueryKeyshareRequest): Promise<QueryKeyshareResponse> {
    const data = QueryKeyshareRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Keyshare", data);
    return promise.then((data) => QueryKeyshareResponse.decode(_m0.Reader.create(data)));
  }

  KeyshareAll(request: QueryKeyshareAllRequest): Promise<QueryKeyshareAllResponse> {
    const data = QueryKeyshareAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "KeyshareAll", data);
    return promise.then((data) => QueryKeyshareAllResponse.decode(_m0.Reader.create(data)));
  }

  DecryptionKey(request: QueryDecryptionKeyRequest): Promise<QueryDecryptionKeyResponse> {
    const data = QueryDecryptionKeyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DecryptionKey", data);
    return promise.then((data) => QueryDecryptionKeyResponse.decode(_m0.Reader.create(data)));
  }

  DecryptionKeyAll(request: QueryDecryptionKeyAllRequest): Promise<QueryDecryptionKeyAllResponse> {
    const data = QueryDecryptionKeyAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DecryptionKeyAll", data);
    return promise.then((data) => QueryDecryptionKeyAllResponse.decode(_m0.Reader.create(data)));
  }

  Pubkey(request: QueryPubkeyRequest): Promise<QueryPubkeyResponse> {
    const data = QueryPubkeyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Pubkey", data);
    return promise.then((data) => QueryPubkeyResponse.decode(_m0.Reader.create(data)));
  }

  AuthorizedAddress(request: QueryAuthorizedAddressRequest): Promise<QueryAuthorizedAddressResponse> {
    const data = QueryAuthorizedAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AuthorizedAddress", data);
    return promise.then((data) => QueryAuthorizedAddressResponse.decode(_m0.Reader.create(data)));
  }

  AuthorizedAddressAll(request: QueryAuthorizedAddressAllRequest): Promise<QueryAuthorizedAddressAllResponse> {
    const data = QueryAuthorizedAddressAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AuthorizedAddressAll", data);
    return promise.then((data) => QueryAuthorizedAddressAllResponse.decode(_m0.Reader.create(data)));
  }

  GeneralKeyshare(request: QueryGeneralKeyshareRequest): Promise<QueryGeneralKeyshareResponse> {
    const data = QueryGeneralKeyshareRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GeneralKeyshare", data);
    return promise.then((data) => QueryGeneralKeyshareResponse.decode(_m0.Reader.create(data)));
  }

  GeneralKeyshareAll(request: QueryGeneralKeyshareAllRequest): Promise<QueryGeneralKeyshareAllResponse> {
    const data = QueryGeneralKeyshareAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GeneralKeyshareAll", data);
    return promise.then((data) => QueryGeneralKeyshareAllResponse.decode(_m0.Reader.create(data)));
  }

  VerifiableRandomness(request: QueryVerifiableRandomnessRequest): Promise<QueryVerifiableRandomnessResponse> {
    const data = QueryVerifiableRandomnessRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "VerifiableRandomness", data);
    return promise.then((data) => QueryVerifiableRandomnessResponse.decode(_m0.Reader.create(data)));
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
