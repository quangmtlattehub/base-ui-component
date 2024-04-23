declare var window: any;

export const ARBITRUM_MAINNET_PARAMS = {
  chainId: 42161,
  chainName: "Arbitrum One Mainnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://arb1.arbitrum.io/rpc"],
  blockExplorerUrls: ["https://arbiscan.io/"],
};

export const ARBITRUM_TESTNET_PARAMS = {
  chainId: 421614,
  chainName: "Arbitrum Sepolia Testnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://sepolia-rollup.arbitrum.io/rpc"],
  blockExplorerUrls: ["https://sepolia.arbiscan.io/"],
};

export const ARBITRUM_PARAMS: any = {
  test: ARBITRUM_TESTNET_PARAMS,
  main: ARBITRUM_MAINNET_PARAMS,
};

export const ARBITRUM_NETWORK =
  ARBITRUM_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN}`] ||
  ARBITRUM_MAINNET_PARAMS;

export const ARBITRUM_CONTRACT =
  process.env.REACT_APP_ARBITRUM_NFT_CONTRACT_ADDRESS;

export const ARBITRUM_RPC =
  ARBITRUM_NETWORK.rpcUrls[
    Math.floor(Math.random() * ARBITRUM_NETWORK.rpcUrls.length)
  ];

export function validEthChainId(chainId: string): boolean {
  return chainId === ARBITRUM_NETWORK.chainId.toString();
}

export const ARBITRUM_USD_PARAMS: any = {
  main: {
    USDT: `0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9`,
    USDC: `0xaf88d065e77c8cC2239327C5EDb3A432268e5831`,
  },
  test: {
    USDT: `0x0B86C6a1c19772eB1085CFc0728FDc744CaA60DF`,
    USDC: `0xD85Dc22BD23a28b99c6b701a2d8a9E24dA37f27E`,
  },
};

export const ARBITRUM_USD: any =
  ARBITRUM_USD_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN || "main"}`];
