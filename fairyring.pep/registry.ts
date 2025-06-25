import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryLatestHeightRequest } from "./types/fairyring/pep/query";
import { QueryPepNonceAllRequest } from "./types/fairyring/pep/query";
import { RequestId } from "./types/fairyring/pep/request_id";
import { MsgRequestPrivateDecryptionKeyResponse } from "./types/fairyring/pep/tx";
import { QueryGeneralIdentityResponse } from "./types/fairyring/pep/query";
import { QueryGeneralIdentityAllResponse } from "./types/fairyring/pep/query";
import { QueryDecryptDataResponse } from "./types/fairyring/pep/query";
import { EncryptedTxArray } from "./types/fairyring/pep/encrypted_tx";
import { IdentityExecutionEntry } from "./types/fairyring/pep/encrypted_tx";
import { QueryPubkeyRequest } from "./types/fairyring/pep/query";
import { QueryPepNonceAllResponse } from "./types/fairyring/pep/query";
import { ContractDetails } from "./types/fairyring/pep/request_id";
import { MsgUnregisterContract } from "./types/fairyring/pep/tx";
import { MsgRequestPrivateDecryptionKey } from "./types/fairyring/pep/tx";
import { QueryGeneralIdentityAllRequest } from "./types/fairyring/pep/query";
import { QueryEncryptedTxResponse } from "./types/fairyring/pep/query";
import { QueryPubkeyResponse } from "./types/fairyring/pep/query";
import { TrustedCounterParty } from "./types/fairyring/pep/params";
import { MsgRequestGeneralDecryptionKeyResponse } from "./types/fairyring/pep/tx";
import { MsgRegisterContractResponse } from "./types/fairyring/pep/tx";
import { EncryptedTx } from "./types/fairyring/pep/encrypted_tx";
import { MsgSubmitGeneralEncryptedTx } from "./types/fairyring/pep/tx";
import { DecryptionKey } from "./types/fairyring/pep/decryption_key";
import { MsgRequestPrivateIdentityResponse } from "./types/fairyring/pep/tx";
import { MsgRegisterContract } from "./types/fairyring/pep/tx";
import { GeneralEncryptedTxArray } from "./types/fairyring/pep/encrypted_tx";
import { QueryGeneralIdentityRequest } from "./types/fairyring/pep/query";
import { MsgSubmitGeneralEncryptedTxResponse } from "./types/fairyring/pep/tx";
import { MsgSubmitDecryptionKeyResponse } from "./types/fairyring/pep/tx";
import { MsgRequestGeneralIdentity } from "./types/fairyring/pep/tx";
import { MsgUpdateParamsResponse } from "./types/fairyring/pep/tx";
import { Params } from "./types/fairyring/pep/params";
import { QueryDecryptDataRequest } from "./types/fairyring/pep/query";
import { QueryPepNonceRequest } from "./types/fairyring/pep/query";
import { PrivateRequest } from "./types/fairyring/pep/request_id";
import { QueryPrivateIdentityResponse } from "./types/fairyring/pep/query";
import { GenesisState } from "./types/fairyring/pep/genesis";
import { MsgSubmitEncryptedTxResponse } from "./types/fairyring/pep/tx";
import { QueryEncryptedTxAllFromHeightResponse } from "./types/fairyring/pep/query";
import { MsgUpdateParams } from "./types/fairyring/pep/tx";
import { QueryEncryptedTxAllFromHeightRequest } from "./types/fairyring/pep/query";
import { RegisteredContract } from "./types/fairyring/pep/request_id";
import { QueryParamsResponse } from "./types/fairyring/pep/query";
import { QueryEncryptedTxRequest } from "./types/fairyring/pep/query";
import { QueryEncryptedTxAllResponse } from "./types/fairyring/pep/query";
import { MsgRequestGeneralDecryptionKey } from "./types/fairyring/pep/tx";
import { PepNonce } from "./types/fairyring/pep/pep_nonce";
import { QueryParamsRequest } from "./types/fairyring/pep/query";
import { MsgRequestPrivateIdentity } from "./types/fairyring/pep/tx";
import { QueryLatestHeightResponse } from "./types/fairyring/pep/query";
import { QueryPrivateIdentityRequest } from "./types/fairyring/pep/query";
import { MsgSubmitDecryptionKey } from "./types/fairyring/pep/tx";
import { MsgUnregisterContractResponse } from "./types/fairyring/pep/tx";
import { QueryEncryptedTxAllRequest } from "./types/fairyring/pep/query";
import { GeneralEncryptedTx } from "./types/fairyring/pep/encrypted_tx";
import { QueryPepNonceResponse } from "./types/fairyring/pep/query";
import { ExecuteContractMsg } from "./types/fairyring/pep/request_id";
import { MsgSubmitEncryptedTx } from "./types/fairyring/pep/tx";
import { MsgRequestGeneralIdentityResponse } from "./types/fairyring/pep/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/fairyring.pep.QueryLatestHeightRequest", QueryLatestHeightRequest],
    ["/fairyring.pep.QueryPepNonceAllRequest", QueryPepNonceAllRequest],
    ["/fairyring.pep.RequestId", RequestId],
    ["/fairyring.pep.MsgRequestPrivateDecryptionKeyResponse", MsgRequestPrivateDecryptionKeyResponse],
    ["/fairyring.pep.QueryGeneralIdentityResponse", QueryGeneralIdentityResponse],
    ["/fairyring.pep.QueryGeneralIdentityAllResponse", QueryGeneralIdentityAllResponse],
    ["/fairyring.pep.QueryDecryptDataResponse", QueryDecryptDataResponse],
    ["/fairyring.pep.EncryptedTxArray", EncryptedTxArray],
    ["/fairyring.pep.IdentityExecutionEntry", IdentityExecutionEntry],
    ["/fairyring.pep.QueryPubkeyRequest", QueryPubkeyRequest],
    ["/fairyring.pep.QueryPepNonceAllResponse", QueryPepNonceAllResponse],
    ["/fairyring.pep.ContractDetails", ContractDetails],
    ["/fairyring.pep.MsgUnregisterContract", MsgUnregisterContract],
    ["/fairyring.pep.MsgRequestPrivateDecryptionKey", MsgRequestPrivateDecryptionKey],
    ["/fairyring.pep.QueryGeneralIdentityAllRequest", QueryGeneralIdentityAllRequest],
    ["/fairyring.pep.QueryEncryptedTxResponse", QueryEncryptedTxResponse],
    ["/fairyring.pep.QueryPubkeyResponse", QueryPubkeyResponse],
    ["/fairyring.pep.TrustedCounterParty", TrustedCounterParty],
    ["/fairyring.pep.MsgRequestGeneralDecryptionKeyResponse", MsgRequestGeneralDecryptionKeyResponse],
    ["/fairyring.pep.MsgRegisterContractResponse", MsgRegisterContractResponse],
    ["/fairyring.pep.EncryptedTx", EncryptedTx],
    ["/fairyring.pep.MsgSubmitGeneralEncryptedTx", MsgSubmitGeneralEncryptedTx],
    ["/fairyring.pep.DecryptionKey", DecryptionKey],
    ["/fairyring.pep.MsgRequestPrivateIdentityResponse", MsgRequestPrivateIdentityResponse],
    ["/fairyring.pep.MsgRegisterContract", MsgRegisterContract],
    ["/fairyring.pep.GeneralEncryptedTxArray", GeneralEncryptedTxArray],
    ["/fairyring.pep.QueryGeneralIdentityRequest", QueryGeneralIdentityRequest],
    ["/fairyring.pep.MsgSubmitGeneralEncryptedTxResponse", MsgSubmitGeneralEncryptedTxResponse],
    ["/fairyring.pep.MsgSubmitDecryptionKeyResponse", MsgSubmitDecryptionKeyResponse],
    ["/fairyring.pep.MsgRequestGeneralIdentity", MsgRequestGeneralIdentity],
    ["/fairyring.pep.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/fairyring.pep.Params", Params],
    ["/fairyring.pep.QueryDecryptDataRequest", QueryDecryptDataRequest],
    ["/fairyring.pep.QueryPepNonceRequest", QueryPepNonceRequest],
    ["/fairyring.pep.PrivateRequest", PrivateRequest],
    ["/fairyring.pep.QueryPrivateIdentityResponse", QueryPrivateIdentityResponse],
    ["/fairyring.pep.GenesisState", GenesisState],
    ["/fairyring.pep.MsgSubmitEncryptedTxResponse", MsgSubmitEncryptedTxResponse],
    ["/fairyring.pep.QueryEncryptedTxAllFromHeightResponse", QueryEncryptedTxAllFromHeightResponse],
    ["/fairyring.pep.MsgUpdateParams", MsgUpdateParams],
    ["/fairyring.pep.QueryEncryptedTxAllFromHeightRequest", QueryEncryptedTxAllFromHeightRequest],
    ["/fairyring.pep.RegisteredContract", RegisteredContract],
    ["/fairyring.pep.QueryParamsResponse", QueryParamsResponse],
    ["/fairyring.pep.QueryEncryptedTxRequest", QueryEncryptedTxRequest],
    ["/fairyring.pep.QueryEncryptedTxAllResponse", QueryEncryptedTxAllResponse],
    ["/fairyring.pep.MsgRequestGeneralDecryptionKey", MsgRequestGeneralDecryptionKey],
    ["/fairyring.pep.PepNonce", PepNonce],
    ["/fairyring.pep.QueryParamsRequest", QueryParamsRequest],
    ["/fairyring.pep.MsgRequestPrivateIdentity", MsgRequestPrivateIdentity],
    ["/fairyring.pep.QueryLatestHeightResponse", QueryLatestHeightResponse],
    ["/fairyring.pep.QueryPrivateIdentityRequest", QueryPrivateIdentityRequest],
    ["/fairyring.pep.MsgSubmitDecryptionKey", MsgSubmitDecryptionKey],
    ["/fairyring.pep.MsgUnregisterContractResponse", MsgUnregisterContractResponse],
    ["/fairyring.pep.QueryEncryptedTxAllRequest", QueryEncryptedTxAllRequest],
    ["/fairyring.pep.GeneralEncryptedTx", GeneralEncryptedTx],
    ["/fairyring.pep.QueryPepNonceResponse", QueryPepNonceResponse],
    ["/fairyring.pep.ExecuteContractMsg", ExecuteContractMsg],
    ["/fairyring.pep.MsgSubmitEncryptedTx", MsgSubmitEncryptedTx],
    ["/fairyring.pep.MsgRequestGeneralIdentityResponse", MsgRequestGeneralIdentityResponse],
    
];

export { msgTypes }