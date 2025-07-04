import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsRequest } from "./types/cosmos/gov/v1/query";
import { QueryVotesResponse } from "./types/cosmos/gov/v1/query";
import { QueryDepositsResponse } from "./types/cosmos/gov/v1/query";
import { QueryTallyResultRequest } from "./types/cosmos/gov/v1/query";
import { QueryTallyResultResponse } from "./types/cosmos/gov/v1/query";
import { Deposit } from "./types/cosmos/gov/v1/gov";
import { MsgVoteWeightedResponse } from "./types/cosmos/gov/v1/tx";
import { WeightedVoteOption } from "./types/cosmos/gov/v1/gov";
import { Proposal } from "./types/cosmos/gov/v1/gov";
import { MsgSubmitProposalResponse } from "./types/cosmos/gov/v1/tx";
import { MsgVoteEncrypted } from "./types/cosmos/gov/v1/tx";
import { QueryConstitutionRequest } from "./types/cosmos/gov/v1/query";
import { QueryVoteResponse } from "./types/cosmos/gov/v1/query";
import { DecryptedVoteOption } from "./types/cosmos/gov/v1/gov";
import { MsgDepositResponse } from "./types/cosmos/gov/v1/tx";
import { TallyParams } from "./types/cosmos/gov/v1/gov";
import { Params } from "./types/cosmos/gov/v1/gov";
import { MsgVoteEncryptedResponse } from "./types/cosmos/gov/v1/tx";
import { QueryProposalsRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositRequest } from "./types/cosmos/gov/v1/query";
import { MsgVote } from "./types/cosmos/gov/v1/tx";
import { QueryVoteRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositResponse } from "./types/cosmos/gov/v1/query";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1/tx";
import { MsgExecLegacyContent } from "./types/cosmos/gov/v1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/gov/v1/tx";
import { GenesisState } from "./types/cosmos/gov/v1/genesis";
import { QueryProposalsResponse } from "./types/cosmos/gov/v1/query";
import { QueryParamsResponse } from "./types/cosmos/gov/v1/query";
import { VotingParams } from "./types/cosmos/gov/v1/gov";
import { MsgDeposit } from "./types/cosmos/gov/v1/tx";
import { MsgUpdateParams } from "./types/cosmos/gov/v1/tx";
import { Vote } from "./types/cosmos/gov/v1/gov";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1/tx";
import { TallyResult } from "./types/cosmos/gov/v1/gov";
import { MsgCancelProposalResponse } from "./types/cosmos/gov/v1/tx";
import { QueryProposalRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositsRequest } from "./types/cosmos/gov/v1/query";
import { DepositParams } from "./types/cosmos/gov/v1/gov";
import { MsgVoteResponse } from "./types/cosmos/gov/v1/tx";
import { QueryConstitutionResponse } from "./types/cosmos/gov/v1/query";
import { QueryProposalResponse } from "./types/cosmos/gov/v1/query";
import { QueryVotesRequest } from "./types/cosmos/gov/v1/query";
import { MsgExecLegacyContentResponse } from "./types/cosmos/gov/v1/tx";
import { MsgCancelProposal } from "./types/cosmos/gov/v1/tx";
import { TrustedCounterParty } from "./types/cosmos/gov/v1/gov";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.gov.v1.QueryParamsRequest", QueryParamsRequest],
    ["/cosmos.gov.v1.QueryVotesResponse", QueryVotesResponse],
    ["/cosmos.gov.v1.QueryDepositsResponse", QueryDepositsResponse],
    ["/cosmos.gov.v1.QueryTallyResultRequest", QueryTallyResultRequest],
    ["/cosmos.gov.v1.QueryTallyResultResponse", QueryTallyResultResponse],
    ["/cosmos.gov.v1.Deposit", Deposit],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.WeightedVoteOption", WeightedVoteOption],
    ["/cosmos.gov.v1.Proposal", Proposal],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.MsgVoteEncrypted", MsgVoteEncrypted],
    ["/cosmos.gov.v1.QueryConstitutionRequest", QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryVoteResponse", QueryVoteResponse],
    ["/cosmos.gov.v1.DecryptedVoteOption", DecryptedVoteOption],
    ["/cosmos.gov.v1.MsgDepositResponse", MsgDepositResponse],
    ["/cosmos.gov.v1.TallyParams", TallyParams],
    ["/cosmos.gov.v1.Params", Params],
    ["/cosmos.gov.v1.MsgVoteEncryptedResponse", MsgVoteEncryptedResponse],
    ["/cosmos.gov.v1.QueryProposalsRequest", QueryProposalsRequest],
    ["/cosmos.gov.v1.QueryDepositRequest", QueryDepositRequest],
    ["/cosmos.gov.v1.MsgVote", MsgVote],
    ["/cosmos.gov.v1.QueryVoteRequest", QueryVoteRequest],
    ["/cosmos.gov.v1.QueryDepositResponse", QueryDepositResponse],
    ["/cosmos.gov.v1.MsgSubmitProposal", MsgSubmitProposal],
    ["/cosmos.gov.v1.MsgExecLegacyContent", MsgExecLegacyContent],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.GenesisState", GenesisState],
    ["/cosmos.gov.v1.QueryProposalsResponse", QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryParamsResponse", QueryParamsResponse],
    ["/cosmos.gov.v1.VotingParams", VotingParams],
    ["/cosmos.gov.v1.MsgDeposit", MsgDeposit],
    ["/cosmos.gov.v1.MsgUpdateParams", MsgUpdateParams],
    ["/cosmos.gov.v1.Vote", Vote],
    ["/cosmos.gov.v1.MsgVoteWeighted", MsgVoteWeighted],
    ["/cosmos.gov.v1.TallyResult", TallyResult],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", MsgCancelProposalResponse],
    ["/cosmos.gov.v1.QueryProposalRequest", QueryProposalRequest],
    ["/cosmos.gov.v1.QueryDepositsRequest", QueryDepositsRequest],
    ["/cosmos.gov.v1.DepositParams", DepositParams],
    ["/cosmos.gov.v1.MsgVoteResponse", MsgVoteResponse],
    ["/cosmos.gov.v1.QueryConstitutionResponse", QueryConstitutionResponse],
    ["/cosmos.gov.v1.QueryProposalResponse", QueryProposalResponse],
    ["/cosmos.gov.v1.QueryVotesRequest", QueryVotesRequest],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgCancelProposal", MsgCancelProposal],
    ["/cosmos.gov.v1.TrustedCounterParty", TrustedCounterParty],
    
];

export { msgTypes }