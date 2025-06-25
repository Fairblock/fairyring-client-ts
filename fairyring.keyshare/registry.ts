import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateAuthorizedAddressResponse } from "./types/fairyring/keyshare/tx";
import { MsgDeleteAuthorizedAddressResponse } from "./types/fairyring/keyshare/tx";
import { MsgSubmitEncryptedKeyshareResponse } from "./types/fairyring/keyshare/tx";
import { RequestDecryptionKeyPacketAck } from "./types/fairyring/keyshare/packet";
import { CurrentKeysPacketAck } from "./types/fairyring/keyshare/packet";
import { MsgDeleteAuthorizedAddress } from "./types/fairyring/keyshare/tx";
import { MsgSendKeyshareResponse } from "./types/fairyring/keyshare/tx";
import { QueryKeyshareAllResponse } from "./types/fairyring/keyshare/query";
import { QueryDecryptionKeyRequest } from "./types/fairyring/keyshare/query";
import { IBCInfo } from "./types/fairyring/keyshare/requested_decryption_key";
import { MsgCreateLatestPubkeyResponse } from "./types/fairyring/keyshare/tx";
import { MsgSubmitGeneralKeyshare } from "./types/fairyring/keyshare/tx";
import { GetDecryptionKeyPacketAck } from "./types/fairyring/keyshare/packet";
import { QueryValidatorSetAllRequest } from "./types/fairyring/keyshare/query";
import { QueryKeyshareRequest } from "./types/fairyring/keyshare/query";
import { MsgRegisterValidator } from "./types/fairyring/keyshare/tx";
import { RequestDecryptionKeyPacketData } from "./types/fairyring/keyshare/packet";
import { Commitments } from "./types/fairyring/keyshare/commitments";
import { DecryptionKeyDataPacketData } from "./types/fairyring/keyshare/packet";
import { DecryptionKeyRequest } from "./types/fairyring/keyshare/requested_decryption_key";
import { MsgCreateAuthorizedAddressResponse } from "./types/fairyring/keyshare/tx";
import { ValidatorSet } from "./types/fairyring/keyshare/validator_set";
import { RequestPrivateDecryptionKeyPacketAck } from "./types/fairyring/keyshare/packet";
import { QueryValidatorSetResponse } from "./types/fairyring/keyshare/query";
import { GetPrivateDecryptionKeyPacketData } from "./types/fairyring/keyshare/packet";
import { MsgDeRegisterValidator } from "./types/fairyring/keyshare/tx";
import { MsgOverrideLatestPubkeyResponse } from "./types/fairyring/keyshare/tx";
import { NoData } from "./types/fairyring/keyshare/packet";
import { QueryVerifiableRandomnessResponse } from "./types/fairyring/keyshare/query";
import { QueryPubkeyRequest } from "./types/fairyring/keyshare/query";
import { GenesisState } from "./types/fairyring/keyshare/genesis";
import { MsgCreateAuthorizedAddress } from "./types/fairyring/keyshare/tx";
import { QueryAuthorizedAddressResponse } from "./types/fairyring/keyshare/query";
import { MsgUpdateParamsResponse } from "./types/fairyring/keyshare/tx";
import { MsgDeRegisterValidatorResponse } from "./types/fairyring/keyshare/tx";
import { Keyshare } from "./types/fairyring/keyshare/keyshare";
import { QueryValidatorSetAllResponse } from "./types/fairyring/keyshare/query";
import { QueryAuthorizedAddressAllResponse } from "./types/fairyring/keyshare/query";
import { MsgUpdateAuthorizedAddress } from "./types/fairyring/keyshare/tx";
import { AuthorizedAddress } from "./types/fairyring/keyshare/authorized_address";
import { PrivateDecryptionKeyPacketAck } from "./types/fairyring/keyshare/packet";
import { QueryCommitmentsResponse } from "./types/fairyring/keyshare/query";
import { QueryPubkeyResponse } from "./types/fairyring/keyshare/query";
import { CurrentKeysPacketData } from "./types/fairyring/keyshare/packet";
import { EncryptedKeyshare } from "./types/fairyring/keyshare/pubkey";
import { MsgOverrideLatestPubkey } from "./types/fairyring/keyshare/tx";
import { ActivePubkey } from "./types/fairyring/keyshare/pubkey";
import { QueryVerifiableRandomnessRequest } from "./types/fairyring/keyshare/query";
import { QueryAuthorizedAddressAllRequest } from "./types/fairyring/keyshare/query";
import { QueryGeneralKeyshareAllResponse } from "./types/fairyring/keyshare/query";
import { RequestPrivateDecryptionKeyPacketData } from "./types/fairyring/keyshare/packet";
import { MsgSubmitEncryptedKeyshare } from "./types/fairyring/keyshare/tx";
import { QueuedPubkey } from "./types/fairyring/keyshare/pubkey";
import { DecryptionKeyPacketAck } from "./types/fairyring/keyshare/packet";
import { QueryGeneralKeyshareResponse } from "./types/fairyring/keyshare/query";
import { PrivateDecryptionKeyDataPacketData } from "./types/fairyring/keyshare/packet";
import { MsgUpdateParams } from "./types/fairyring/keyshare/tx";
import { QueryGeneralKeyshareRequest } from "./types/fairyring/keyshare/query";
import { QueryDecryptionKeyAllRequest } from "./types/fairyring/keyshare/query";
import { QueryAuthorizedAddressRequest } from "./types/fairyring/keyshare/query";
import { DecryptionKey } from "./types/fairyring/keyshare/decryption_key";
import { QueryValidatorSetRequest } from "./types/fairyring/keyshare/query";
import { QueryDecryptionKeyAllResponse } from "./types/fairyring/keyshare/query";
import { QueryGeneralKeyshareAllRequest } from "./types/fairyring/keyshare/query";
import { CounterPartyIBCInfo } from "./types/fairyring/keyshare/requested_decryption_key";
import { MsgSendKeyshare } from "./types/fairyring/keyshare/tx";
import { QueryDecryptionKeyResponse } from "./types/fairyring/keyshare/query";
import { Params } from "./types/fairyring/keyshare/params";
import { PrivateDecryptionKeyRequest } from "./types/fairyring/keyshare/requested_decryption_key";
import { QueryCommitmentsRequest } from "./types/fairyring/keyshare/query";
import { QueryKeyshareAllRequest } from "./types/fairyring/keyshare/query";
import { GetDecryptionKeyPacketData } from "./types/fairyring/keyshare/packet";
import { MsgSubmitGeneralKeyshareResponse } from "./types/fairyring/keyshare/tx";
import { GeneralKeyshare } from "./types/fairyring/keyshare/keyshare";
import { QueryParamsRequest } from "./types/fairyring/keyshare/query";
import { QueryParamsResponse } from "./types/fairyring/keyshare/query";
import { QueryKeyshareResponse } from "./types/fairyring/keyshare/query";
import { MsgRegisterValidatorResponse } from "./types/fairyring/keyshare/tx";
import { MsgCreateLatestPubkey } from "./types/fairyring/keyshare/tx";
import { GetPrivateDecryptionKeyPacketAck } from "./types/fairyring/keyshare/packet";
import { ValidatorEncryptedKeyshare } from "./types/fairyring/keyshare/keyshare";
import { KeysharePacketData } from "./types/fairyring/keyshare/packet";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/fairyring.keyshare.MsgUpdateAuthorizedAddressResponse", MsgUpdateAuthorizedAddressResponse],
    ["/fairyring.keyshare.MsgDeleteAuthorizedAddressResponse", MsgDeleteAuthorizedAddressResponse],
    ["/fairyring.keyshare.MsgSubmitEncryptedKeyshareResponse", MsgSubmitEncryptedKeyshareResponse],
    ["/fairyring.keyshare.RequestDecryptionKeyPacketAck", RequestDecryptionKeyPacketAck],
    ["/fairyring.keyshare.CurrentKeysPacketAck", CurrentKeysPacketAck],
    ["/fairyring.keyshare.MsgDeleteAuthorizedAddress", MsgDeleteAuthorizedAddress],
    ["/fairyring.keyshare.MsgSendKeyshareResponse", MsgSendKeyshareResponse],
    ["/fairyring.keyshare.QueryKeyshareAllResponse", QueryKeyshareAllResponse],
    ["/fairyring.keyshare.QueryDecryptionKeyRequest", QueryDecryptionKeyRequest],
    ["/fairyring.keyshare.IBCInfo", IBCInfo],
    ["/fairyring.keyshare.MsgCreateLatestPubkeyResponse", MsgCreateLatestPubkeyResponse],
    ["/fairyring.keyshare.MsgSubmitGeneralKeyshare", MsgSubmitGeneralKeyshare],
    ["/fairyring.keyshare.GetDecryptionKeyPacketAck", GetDecryptionKeyPacketAck],
    ["/fairyring.keyshare.QueryValidatorSetAllRequest", QueryValidatorSetAllRequest],
    ["/fairyring.keyshare.QueryKeyshareRequest", QueryKeyshareRequest],
    ["/fairyring.keyshare.MsgRegisterValidator", MsgRegisterValidator],
    ["/fairyring.keyshare.RequestDecryptionKeyPacketData", RequestDecryptionKeyPacketData],
    ["/fairyring.keyshare.Commitments", Commitments],
    ["/fairyring.keyshare.DecryptionKeyDataPacketData", DecryptionKeyDataPacketData],
    ["/fairyring.keyshare.DecryptionKeyRequest", DecryptionKeyRequest],
    ["/fairyring.keyshare.MsgCreateAuthorizedAddressResponse", MsgCreateAuthorizedAddressResponse],
    ["/fairyring.keyshare.ValidatorSet", ValidatorSet],
    ["/fairyring.keyshare.RequestPrivateDecryptionKeyPacketAck", RequestPrivateDecryptionKeyPacketAck],
    ["/fairyring.keyshare.QueryValidatorSetResponse", QueryValidatorSetResponse],
    ["/fairyring.keyshare.GetPrivateDecryptionKeyPacketData", GetPrivateDecryptionKeyPacketData],
    ["/fairyring.keyshare.MsgDeRegisterValidator", MsgDeRegisterValidator],
    ["/fairyring.keyshare.MsgOverrideLatestPubkeyResponse", MsgOverrideLatestPubkeyResponse],
    ["/fairyring.keyshare.NoData", NoData],
    ["/fairyring.keyshare.QueryVerifiableRandomnessResponse", QueryVerifiableRandomnessResponse],
    ["/fairyring.keyshare.QueryPubkeyRequest", QueryPubkeyRequest],
    ["/fairyring.keyshare.GenesisState", GenesisState],
    ["/fairyring.keyshare.MsgCreateAuthorizedAddress", MsgCreateAuthorizedAddress],
    ["/fairyring.keyshare.QueryAuthorizedAddressResponse", QueryAuthorizedAddressResponse],
    ["/fairyring.keyshare.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/fairyring.keyshare.MsgDeRegisterValidatorResponse", MsgDeRegisterValidatorResponse],
    ["/fairyring.keyshare.Keyshare", Keyshare],
    ["/fairyring.keyshare.QueryValidatorSetAllResponse", QueryValidatorSetAllResponse],
    ["/fairyring.keyshare.QueryAuthorizedAddressAllResponse", QueryAuthorizedAddressAllResponse],
    ["/fairyring.keyshare.MsgUpdateAuthorizedAddress", MsgUpdateAuthorizedAddress],
    ["/fairyring.keyshare.AuthorizedAddress", AuthorizedAddress],
    ["/fairyring.keyshare.PrivateDecryptionKeyPacketAck", PrivateDecryptionKeyPacketAck],
    ["/fairyring.keyshare.QueryCommitmentsResponse", QueryCommitmentsResponse],
    ["/fairyring.keyshare.QueryPubkeyResponse", QueryPubkeyResponse],
    ["/fairyring.keyshare.CurrentKeysPacketData", CurrentKeysPacketData],
    ["/fairyring.keyshare.EncryptedKeyshare", EncryptedKeyshare],
    ["/fairyring.keyshare.MsgOverrideLatestPubkey", MsgOverrideLatestPubkey],
    ["/fairyring.keyshare.ActivePubkey", ActivePubkey],
    ["/fairyring.keyshare.QueryVerifiableRandomnessRequest", QueryVerifiableRandomnessRequest],
    ["/fairyring.keyshare.QueryAuthorizedAddressAllRequest", QueryAuthorizedAddressAllRequest],
    ["/fairyring.keyshare.QueryGeneralKeyshareAllResponse", QueryGeneralKeyshareAllResponse],
    ["/fairyring.keyshare.RequestPrivateDecryptionKeyPacketData", RequestPrivateDecryptionKeyPacketData],
    ["/fairyring.keyshare.MsgSubmitEncryptedKeyshare", MsgSubmitEncryptedKeyshare],
    ["/fairyring.keyshare.QueuedPubkey", QueuedPubkey],
    ["/fairyring.keyshare.DecryptionKeyPacketAck", DecryptionKeyPacketAck],
    ["/fairyring.keyshare.QueryGeneralKeyshareResponse", QueryGeneralKeyshareResponse],
    ["/fairyring.keyshare.PrivateDecryptionKeyDataPacketData", PrivateDecryptionKeyDataPacketData],
    ["/fairyring.keyshare.MsgUpdateParams", MsgUpdateParams],
    ["/fairyring.keyshare.QueryGeneralKeyshareRequest", QueryGeneralKeyshareRequest],
    ["/fairyring.keyshare.QueryDecryptionKeyAllRequest", QueryDecryptionKeyAllRequest],
    ["/fairyring.keyshare.QueryAuthorizedAddressRequest", QueryAuthorizedAddressRequest],
    ["/fairyring.keyshare.DecryptionKey", DecryptionKey],
    ["/fairyring.keyshare.QueryValidatorSetRequest", QueryValidatorSetRequest],
    ["/fairyring.keyshare.QueryDecryptionKeyAllResponse", QueryDecryptionKeyAllResponse],
    ["/fairyring.keyshare.QueryGeneralKeyshareAllRequest", QueryGeneralKeyshareAllRequest],
    ["/fairyring.keyshare.CounterPartyIBCInfo", CounterPartyIBCInfo],
    ["/fairyring.keyshare.MsgSendKeyshare", MsgSendKeyshare],
    ["/fairyring.keyshare.QueryDecryptionKeyResponse", QueryDecryptionKeyResponse],
    ["/fairyring.keyshare.Params", Params],
    ["/fairyring.keyshare.PrivateDecryptionKeyRequest", PrivateDecryptionKeyRequest],
    ["/fairyring.keyshare.QueryCommitmentsRequest", QueryCommitmentsRequest],
    ["/fairyring.keyshare.QueryKeyshareAllRequest", QueryKeyshareAllRequest],
    ["/fairyring.keyshare.GetDecryptionKeyPacketData", GetDecryptionKeyPacketData],
    ["/fairyring.keyshare.MsgSubmitGeneralKeyshareResponse", MsgSubmitGeneralKeyshareResponse],
    ["/fairyring.keyshare.GeneralKeyshare", GeneralKeyshare],
    ["/fairyring.keyshare.QueryParamsRequest", QueryParamsRequest],
    ["/fairyring.keyshare.QueryParamsResponse", QueryParamsResponse],
    ["/fairyring.keyshare.QueryKeyshareResponse", QueryKeyshareResponse],
    ["/fairyring.keyshare.MsgRegisterValidatorResponse", MsgRegisterValidatorResponse],
    ["/fairyring.keyshare.MsgCreateLatestPubkey", MsgCreateLatestPubkey],
    ["/fairyring.keyshare.GetPrivateDecryptionKeyPacketAck", GetPrivateDecryptionKeyPacketAck],
    ["/fairyring.keyshare.ValidatorEncryptedKeyshare", ValidatorEncryptedKeyshare],
    ["/fairyring.keyshare.KeysharePacketData", KeysharePacketData],
    
];

export { msgTypes }