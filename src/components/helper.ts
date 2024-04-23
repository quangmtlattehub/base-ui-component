import { ethers } from "ethers";
import {
  ARBITRUM_CONTRACT,
  ARBITRUM_NETWORK,
  ARBITRUM_RPC,
  ARBITRUM_USD,
} from "./arbitrum-chain";
import { ETH_CONTRACT, ETH_NETWORK, ETH_RPC, ETH_USD } from "./eth-chain";
import { OPT_CONTRACT, OPT_NETWORK, OPT_RPC, OPT_USD } from "./optimism-chain";
import { BASE_CONTRACT, BASE_NETWORK, BASE_RPC, BASE_USD } from "./base-chain";
import { BNB_CONTRACT, BNB_NETWORK, BNB_RPC, BNB_USD } from "./bnb-chain";
import {
  BLAST_CONTRACT,
  BLAST_NETWORK,
  BLAST_RPC,
  BLAST_USD,
} from "./blast-chain";

declare var window: any;

export const setCookie = (cname: any, cvalue: any, exdays: any) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const getCookie = (cname: any) => {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const getTargetChain = (_chain: any) => {
  switch (_chain) {
    default:
    case "eth":
      return {
        targetChainId: ETH_NETWORK.chainId,
        targetChainName: ETH_NETWORK.chainName,
        targetContract: ETH_CONTRACT,
        targetRpc: ETH_RPC,
        targetChain: ETH_NETWORK,
        targetUsd: ETH_USD,
      };
    case "arbitrum":
      return {
        targetChainId: ARBITRUM_NETWORK.chainId,
        targetChainName: ARBITRUM_NETWORK.chainName,
        targetContract: ARBITRUM_CONTRACT,
        targetRpc: ARBITRUM_RPC,
        targetChain: ARBITRUM_NETWORK,
        targetUsd: ARBITRUM_USD,
      };
    case "base":
      return {
        targetChainId: BASE_NETWORK.chainId,
        targetChainName: BASE_NETWORK.chainName,
        targetContract: BASE_CONTRACT,
        targetRpc: BASE_RPC,
        targetChain: BASE_NETWORK,
        targetUsd: BASE_USD,
      };
    case "optimism":
      return {
        targetChainId: OPT_NETWORK.chainId,
        targetChainName: OPT_NETWORK.chainName,
        targetContract: OPT_CONTRACT,
        targetRpc: OPT_RPC,
        targetChain: OPT_NETWORK,
        targetUsd: OPT_USD,
      };
    case "bnb": {
      return {
        targetChainId: BNB_NETWORK.chainId,
        targetChainName: BNB_NETWORK.chainName,
        targetContract: BNB_CONTRACT,
        targetRpc: BNB_RPC,
        targetChain: BNB_NETWORK,
        targetUsd: BNB_USD,
      };
    }
    case "blast": {
      return {
        targetChainId: BLAST_NETWORK.chainId,
        targetChainName: BLAST_NETWORK.chainName,
        targetContract: BLAST_CONTRACT,
        targetRpc: BLAST_RPC,
        targetChain: BLAST_NETWORK,
        targetUsd: BLAST_USD,
      };
    }
  }
};

export const getEthereum = (walletType: any) => {
  return Array.isArray(window.ethereum?.providers)
    ? window.ethereum?.providers.find((provider: any) => provider[walletType])
    : window.ethereum;
};

export async function getTransactionCount(provider: any, address: any) {
  return provider.getTransactionCount(address, "latest");
}

export const isEthereumChain = (currentChainId: any, targetChainId: any) => {
  return currentChainId == targetChainId;
};

export const switchToEthereumChain = async (chain: any) => {
  // Request to switch to the selected Ethereum network
  try {
    await getEthereum("isMetaMask").request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: "" + ethers.toQuantity(chain.chainId),
        },
      ],
    });
  } catch (switchError) {
    await getEthereum("isMetaMask").request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...chain,
          chainId: "" + ethers.toQuantity(chain.chainId),
        },
      ],
    });
  }
};
