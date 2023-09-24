import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x5879146421bb4d21d0f6b1bdba2d6ebcb0d6b6db"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/u3ESZL5eKe3uuk8LsHppyqIhkjYiFoDZ",
  },
};