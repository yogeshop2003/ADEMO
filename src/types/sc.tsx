type ReadContractFunctionName =
  | "MAX_SUPPLY"
  | "balanceOf"
  | "endTime"
  | "getApproved"
  | "isApprovedForAll"
  | "mintCounter"
  | "name"
  | "nftOfUser"
  | "owner"
  | "ownerOf"
  | "price"
  | "startTime"
  | "supportsInterface"
  | "symbol"
  | "toggle"
  | "tokenByIndex"
  | "tokenOfOwnerByIndex"
  | "tokenURI"
  | "totalSupply"
  | "walletAddress"
  | "whitelistedAddresses";

type ReadContractFunctionArgs = {
  MAX_SUPPLY: [];
  balanceOf: [address: string];
  endTime: [];
  getApproved: [tokenId: number];
  isApprovedForAll: [owner: string, operator: string];
  mintCounter: [address: string];
  name: [];
};  

type WriteContractFunctionName =
  | "approve"
  | "mint"
  | "ownerMint"
  | "preMint"
  | "renounceOwnership"
  | "safeTransferFrom"
  | "setApprovalForAll"
  | "setEssentials"
  | "setToggle"
  | "setWhitelistingAddress"
  | "transferFrom"
  | "transferOwnership"
  | "updateURI"
  | "updateWalletAddress";

type EvenProps =
  | "Approval"
  | "Transfer"
  | "OwnershipTransferred"
  | "ApprovalForAll";
