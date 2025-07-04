/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ActivePublicKey, QueuedPublicKey } from "../common/shared_types";
import { DecryptionKey } from "./decryption_key";
import { EncryptedTxArray } from "./encrypted_tx";
import { Params } from "./params";
import { PepNonce } from "./pep_nonce";
import { RequestId } from "./request_id";

export const protobufPackage = "fairyring.pep";

/** GenesisState defines the pep module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params | undefined;
  portId: string;
  encryptedTxArray: EncryptedTxArray[];
  pepNonceList: PepNonce[];
  decryptionKeyList: DecryptionKey[];
  activePubkey: ActivePublicKey | undefined;
  queuedPubkey: QueuedPublicKey | undefined;
  requestCount: number;
  requestIdList: RequestId[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: "",
    encryptedTxArray: [],
    pepNonceList: [],
    decryptionKeyList: [],
    activePubkey: undefined,
    queuedPubkey: undefined,
    requestCount: 0,
    requestIdList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.encryptedTxArray) {
      EncryptedTxArray.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.pepNonceList) {
      PepNonce.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.decryptionKeyList) {
      DecryptionKey.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.activePubkey !== undefined) {
      ActivePublicKey.encode(message.activePubkey, writer.uint32(58).fork()).ldelim();
    }
    if (message.queuedPubkey !== undefined) {
      QueuedPublicKey.encode(message.queuedPubkey, writer.uint32(66).fork()).ldelim();
    }
    if (message.requestCount !== 0) {
      writer.uint32(72).uint64(message.requestCount);
    }
    for (const v of message.requestIdList) {
      RequestId.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.portId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.encryptedTxArray.push(EncryptedTxArray.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pepNonceList.push(PepNonce.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.decryptionKeyList.push(DecryptionKey.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.activePubkey = ActivePublicKey.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.queuedPubkey = QueuedPublicKey.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.requestCount = longToNumber(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.requestIdList.push(RequestId.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      encryptedTxArray: Array.isArray(object?.encryptedTxArray)
        ? object.encryptedTxArray.map((e: any) => EncryptedTxArray.fromJSON(e))
        : [],
      pepNonceList: Array.isArray(object?.pepNonceList)
        ? object.pepNonceList.map((e: any) => PepNonce.fromJSON(e))
        : [],
      decryptionKeyList: Array.isArray(object?.decryptionKeyList)
        ? object.decryptionKeyList.map((e: any) => DecryptionKey.fromJSON(e))
        : [],
      activePubkey: isSet(object.activePubkey) ? ActivePublicKey.fromJSON(object.activePubkey) : undefined,
      queuedPubkey: isSet(object.queuedPubkey) ? QueuedPublicKey.fromJSON(object.queuedPubkey) : undefined,
      requestCount: isSet(object.requestCount) ? Number(object.requestCount) : 0,
      requestIdList: Array.isArray(object?.requestIdList)
        ? object.requestIdList.map((e: any) => RequestId.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.encryptedTxArray?.length) {
      obj.encryptedTxArray = message.encryptedTxArray.map((e) => EncryptedTxArray.toJSON(e));
    }
    if (message.pepNonceList?.length) {
      obj.pepNonceList = message.pepNonceList.map((e) => PepNonce.toJSON(e));
    }
    if (message.decryptionKeyList?.length) {
      obj.decryptionKeyList = message.decryptionKeyList.map((e) => DecryptionKey.toJSON(e));
    }
    if (message.activePubkey !== undefined) {
      obj.activePubkey = ActivePublicKey.toJSON(message.activePubkey);
    }
    if (message.queuedPubkey !== undefined) {
      obj.queuedPubkey = QueuedPublicKey.toJSON(message.queuedPubkey);
    }
    if (message.requestCount !== 0) {
      obj.requestCount = Math.round(message.requestCount);
    }
    if (message.requestIdList?.length) {
      obj.requestIdList = message.requestIdList.map((e) => RequestId.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.portId = object.portId ?? "";
    message.encryptedTxArray = object.encryptedTxArray?.map((e) => EncryptedTxArray.fromPartial(e)) || [];
    message.pepNonceList = object.pepNonceList?.map((e) => PepNonce.fromPartial(e)) || [];
    message.decryptionKeyList = object.decryptionKeyList?.map((e) => DecryptionKey.fromPartial(e)) || [];
    message.activePubkey = (object.activePubkey !== undefined && object.activePubkey !== null)
      ? ActivePublicKey.fromPartial(object.activePubkey)
      : undefined;
    message.queuedPubkey = (object.queuedPubkey !== undefined && object.queuedPubkey !== null)
      ? QueuedPublicKey.fromPartial(object.queuedPubkey)
      : undefined;
    message.requestCount = object.requestCount ?? 0;
    message.requestIdList = object.requestIdList?.map((e) => RequestId.fromPartial(e)) || [];
    return message;
  },
};

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
