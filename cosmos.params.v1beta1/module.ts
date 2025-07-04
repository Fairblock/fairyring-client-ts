// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { Subspace } from "./types/cosmos/params/v1beta1/query";
import { ParameterChangeProposal } from "./types/cosmos/params/v1beta1/params";
import { QueryParamsResponse } from "./types/cosmos/params/v1beta1/query";
import { QuerySubspacesRequest } from "./types/cosmos/params/v1beta1/query";
import { QuerySubspacesResponse } from "./types/cosmos/params/v1beta1/query";
import { ParamChange } from "./types/cosmos/params/v1beta1/params";
import { QueryParamsRequest } from "./types/cosmos/params/v1beta1/query";


export { Subspace, ParameterChangeProposal, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse, ParamChange, QueryParamsRequest };

type sendSubspaceParams = {
  value: Subspace,
  fee?: StdFee,
  memo?: string
};

type sendParameterChangeProposalParams = {
  value: ParameterChangeProposal,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendQuerySubspacesRequestParams = {
  value: QuerySubspacesRequest,
  fee?: StdFee,
  memo?: string
};

type sendQuerySubspacesResponseParams = {
  value: QuerySubspacesResponse,
  fee?: StdFee,
  memo?: string
};

type sendParamChangeParams = {
  value: ParamChange,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest,
  fee?: StdFee,
  memo?: string
};


type subspaceParams = {
  value: Subspace,
};

type parameterChangeProposalParams = {
  value: ParameterChangeProposal,
};

type queryParamsResponseParams = {
  value: QueryParamsResponse,
};

type querySubspacesRequestParams = {
  value: QuerySubspacesRequest,
};

type querySubspacesResponseParams = {
  value: QuerySubspacesResponse,
};

type paramChangeParams = {
  value: ParamChange,
};

type queryParamsRequestParams = {
  value: QueryParamsRequest,
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
		
		async sendSubspace({ value, fee, memo }: sendSubspaceParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendSubspace: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.subspace({ value: Subspace.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendSubspace: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendParameterChangeProposal({ value, fee, memo }: sendParameterChangeProposalParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendParameterChangeProposal: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.parameterChangeProposal({ value: ParameterChangeProposal.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendParameterChangeProposal: Could not broadcast Tx: '+ e.message)
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
		
		async sendQuerySubspacesRequest({ value, fee, memo }: sendQuerySubspacesRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQuerySubspacesRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.querySubspacesRequest({ value: QuerySubspacesRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQuerySubspacesRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQuerySubspacesResponse({ value, fee, memo }: sendQuerySubspacesResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQuerySubspacesResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.querySubspacesResponse({ value: QuerySubspacesResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQuerySubspacesResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendParamChange({ value, fee, memo }: sendParamChangeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendParamChange: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.paramChange({ value: ParamChange.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendParamChange: Could not broadcast Tx: '+ e.message)
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
		
		
		subspace({ value }: subspaceParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.params.v1beta1.Subspace", value: Subspace.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Subspace: Could not create message: ' + e.message)
			}
		},
		
		parameterChangeProposal({ value }: parameterChangeProposalParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal", value: ParameterChangeProposal.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:ParameterChangeProposal: Could not create message: ' + e.message)
			}
		},
		
		queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse", value: QueryParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		querySubspacesRequest({ value }: querySubspacesRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest", value: QuerySubspacesRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QuerySubspacesRequest: Could not create message: ' + e.message)
			}
		},
		
		querySubspacesResponse({ value }: querySubspacesResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse", value: QuerySubspacesResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QuerySubspacesResponse: Could not create message: ' + e.message)
			}
		},
		
		paramChange({ value }: paramChangeParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.params.v1beta1.ParamChange", value: ParamChange.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:ParamChange: Could not create message: ' + e.message)
			}
		},
		
		queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest", value: QueryParamsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message)
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
			CosmosParamsV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;