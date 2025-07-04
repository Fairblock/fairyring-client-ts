// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgSendTx } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryInterchainAccountRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { QueryParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgRegisterInterchainAccount } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgRegisterInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgSendTxResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryParamsRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { Params } from "./types/ibc/applications/interchain_accounts/controller/v1/controller";
import { MsgUpdateParams } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";


export { MsgSendTx, QueryInterchainAccountRequest, QueryParamsResponse, MsgRegisterInterchainAccount, QueryInterchainAccountResponse, MsgRegisterInterchainAccountResponse, MsgSendTxResponse, QueryParamsRequest, MsgUpdateParamsResponse, Params, MsgUpdateParams };

type sendMsgSendTxParams = {
  value: MsgSendTx,
  fee?: StdFee,
  memo?: string
};

type sendQueryInterchainAccountRequestParams = {
  value: QueryInterchainAccountRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgRegisterInterchainAccountParams = {
  value: MsgRegisterInterchainAccount,
  fee?: StdFee,
  memo?: string
};

type sendQueryInterchainAccountResponseParams = {
  value: QueryInterchainAccountResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgRegisterInterchainAccountResponseParams = {
  value: MsgRegisterInterchainAccountResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgSendTxResponseParams = {
  value: MsgSendTxResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendParamsParams = {
  value: Params,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};


type msgSendTxParams = {
  value: MsgSendTx,
};

type queryInterchainAccountRequestParams = {
  value: QueryInterchainAccountRequest,
};

type queryParamsResponseParams = {
  value: QueryParamsResponse,
};

type msgRegisterInterchainAccountParams = {
  value: MsgRegisterInterchainAccount,
};

type queryInterchainAccountResponseParams = {
  value: QueryInterchainAccountResponse,
};

type msgRegisterInterchainAccountResponseParams = {
  value: MsgRegisterInterchainAccountResponse,
};

type msgSendTxResponseParams = {
  value: MsgSendTxResponse,
};

type queryParamsRequestParams = {
  value: QueryParamsRequest,
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
};

type paramsParams = {
  value: Params,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgSendTx({ value, fee, memo }: sendMsgSendTxParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSendTx: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgSendTx({ value: MsgSendTx.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSendTx: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryInterchainAccountRequest({ value, fee, memo }: sendQueryInterchainAccountRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryInterchainAccountRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryInterchainAccountRequest({ value: QueryInterchainAccountRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryInterchainAccountRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRegisterInterchainAccount({ value, fee, memo }: sendMsgRegisterInterchainAccountParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRegisterInterchainAccount: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgRegisterInterchainAccount({ value: MsgRegisterInterchainAccount.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRegisterInterchainAccount: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryInterchainAccountResponse({ value, fee, memo }: sendQueryInterchainAccountResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryInterchainAccountResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryInterchainAccountResponse({ value: QueryInterchainAccountResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryInterchainAccountResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRegisterInterchainAccountResponse({ value, fee, memo }: sendMsgRegisterInterchainAccountResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRegisterInterchainAccountResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgRegisterInterchainAccountResponse({ value: MsgRegisterInterchainAccountResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRegisterInterchainAccountResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSendTxResponse({ value, fee, memo }: sendMsgSendTxResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSendTxResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgSendTxResponse({ value: MsgSendTxResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSendTxResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.params({ value: Params.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgSendTx({ value }: msgSendTxParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", value: MsgSendTx.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSendTx: Could not create message: ' + e.message)
			}
		},
		
		queryInterchainAccountRequest({ value }: queryInterchainAccountRequestParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest", value: QueryInterchainAccountRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryInterchainAccountRequest: Could not create message: ' + e.message)
			}
		},
		
		queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse", value: QueryParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		msgRegisterInterchainAccount({ value }: msgRegisterInterchainAccountParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount", value: MsgRegisterInterchainAccount.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRegisterInterchainAccount: Could not create message: ' + e.message)
			}
		},
		
		queryInterchainAccountResponse({ value }: queryInterchainAccountResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse", value: QueryInterchainAccountResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryInterchainAccountResponse: Could not create message: ' + e.message)
			}
		},
		
		msgRegisterInterchainAccountResponse({ value }: msgRegisterInterchainAccountResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse", value: MsgRegisterInterchainAccountResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRegisterInterchainAccountResponse: Could not create message: ' + e.message)
			}
		},
		
		msgSendTxResponse({ value }: msgSendTxResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse", value: MsgSendTxResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSendTxResponse: Could not create message: ' + e.message)
			}
		},
		
		queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest", value: QueryParamsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		params({ value }: paramsParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params", value: Params.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Params: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const IgntModule = (test: IgniteClient) => {
	return {
		module: {
			IbcApplicationsInterchainAccountsControllerV1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;