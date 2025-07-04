// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgSubmitEvidenceResponse } from "./types/cosmos/evidence/v1beta1/tx";
import { GenesisState } from "./types/cosmos/evidence/v1beta1/genesis";
import { QueryAllEvidenceRequest } from "./types/cosmos/evidence/v1beta1/query";
import { QueryAllEvidenceResponse } from "./types/cosmos/evidence/v1beta1/query";
import { Equivocation } from "./types/cosmos/evidence/v1beta1/evidence";
import { QueryEvidenceResponse } from "./types/cosmos/evidence/v1beta1/query";
import { MsgSubmitEvidence } from "./types/cosmos/evidence/v1beta1/tx";
import { QueryEvidenceRequest } from "./types/cosmos/evidence/v1beta1/query";


export { MsgSubmitEvidenceResponse, GenesisState, QueryAllEvidenceRequest, QueryAllEvidenceResponse, Equivocation, QueryEvidenceResponse, MsgSubmitEvidence, QueryEvidenceRequest };

type sendMsgSubmitEvidenceResponseParams = {
  value: MsgSubmitEvidenceResponse,
  fee?: StdFee,
  memo?: string
};

type sendGenesisStateParams = {
  value: GenesisState,
  fee?: StdFee,
  memo?: string
};

type sendQueryAllEvidenceRequestParams = {
  value: QueryAllEvidenceRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryAllEvidenceResponseParams = {
  value: QueryAllEvidenceResponse,
  fee?: StdFee,
  memo?: string
};

type sendEquivocationParams = {
  value: Equivocation,
  fee?: StdFee,
  memo?: string
};

type sendQueryEvidenceResponseParams = {
  value: QueryEvidenceResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgSubmitEvidenceParams = {
  value: MsgSubmitEvidence,
  fee?: StdFee,
  memo?: string
};

type sendQueryEvidenceRequestParams = {
  value: QueryEvidenceRequest,
  fee?: StdFee,
  memo?: string
};


type msgSubmitEvidenceResponseParams = {
  value: MsgSubmitEvidenceResponse,
};

type genesisStateParams = {
  value: GenesisState,
};

type queryAllEvidenceRequestParams = {
  value: QueryAllEvidenceRequest,
};

type queryAllEvidenceResponseParams = {
  value: QueryAllEvidenceResponse,
};

type equivocationParams = {
  value: Equivocation,
};

type queryEvidenceResponseParams = {
  value: QueryEvidenceResponse,
};

type msgSubmitEvidenceParams = {
  value: MsgSubmitEvidence,
};

type queryEvidenceRequestParams = {
  value: QueryEvidenceRequest,
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
		
		async sendMsgSubmitEvidenceResponse({ value, fee, memo }: sendMsgSubmitEvidenceResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSubmitEvidenceResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgSubmitEvidenceResponse({ value: MsgSubmitEvidenceResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSubmitEvidenceResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.genesisState({ value: GenesisState.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAllEvidenceRequest({ value, fee, memo }: sendQueryAllEvidenceRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAllEvidenceRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAllEvidenceRequest({ value: QueryAllEvidenceRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAllEvidenceRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAllEvidenceResponse({ value, fee, memo }: sendQueryAllEvidenceResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAllEvidenceResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAllEvidenceResponse({ value: QueryAllEvidenceResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAllEvidenceResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendEquivocation({ value, fee, memo }: sendEquivocationParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendEquivocation: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.equivocation({ value: Equivocation.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendEquivocation: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryEvidenceResponse({ value, fee, memo }: sendQueryEvidenceResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryEvidenceResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryEvidenceResponse({ value: QueryEvidenceResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryEvidenceResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSubmitEvidence({ value, fee, memo }: sendMsgSubmitEvidenceParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSubmitEvidence: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgSubmitEvidence({ value: MsgSubmitEvidence.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSubmitEvidence: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryEvidenceRequest({ value, fee, memo }: sendQueryEvidenceRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryEvidenceRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryEvidenceRequest({ value: QueryEvidenceRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryEvidenceRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgSubmitEvidenceResponse({ value }: msgSubmitEvidenceResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse", value: MsgSubmitEvidenceResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSubmitEvidenceResponse: Could not create message: ' + e.message)
			}
		},
		
		genesisState({ value }: genesisStateParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.evidence.v1beta1.GenesisState", value: GenesisState.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GenesisState: Could not create message: ' + e.message)
			}
		},
		
		queryAllEvidenceRequest({ value }: queryAllEvidenceRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest", value: QueryAllEvidenceRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAllEvidenceRequest: Could not create message: ' + e.message)
			}
		},
		
		queryAllEvidenceResponse({ value }: queryAllEvidenceResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse", value: QueryAllEvidenceResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAllEvidenceResponse: Could not create message: ' + e.message)
			}
		},
		
		equivocation({ value }: equivocationParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.evidence.v1beta1.Equivocation", value: Equivocation.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Equivocation: Could not create message: ' + e.message)
			}
		},
		
		queryEvidenceResponse({ value }: queryEvidenceResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse", value: QueryEvidenceResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryEvidenceResponse: Could not create message: ' + e.message)
			}
		},
		
		msgSubmitEvidence({ value }: msgSubmitEvidenceParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence", value: MsgSubmitEvidence.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSubmitEvidence: Could not create message: ' + e.message)
			}
		},
		
		queryEvidenceRequest({ value }: queryEvidenceRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest", value: QueryEvidenceRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryEvidenceRequest: Could not create message: ' + e.message)
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
			CosmosEvidenceV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;