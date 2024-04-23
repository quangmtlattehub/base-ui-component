declare var window: any;

export const BASE_MAINNET_PARAMS = {
  chainId: 8453,
  chainName: "Base Mainnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://mainnet.base.org"],
  blockExplorerUrls: ["https://base.blockscout.com"],
};

export const BASE_TESTNET_PARAMS = {
  chainId: 84532,
  chainName: "Base Sepolia Testnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://sepolia.base.org"],
  blockExplorerUrls: ["https://sepolia.basescan.org"],
};

export const BASE_PARAMS: any = {
  test: BASE_TESTNET_PARAMS,
  main: BASE_MAINNET_PARAMS,
};

export const BASE_NETWORK =
  BASE_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN}`] || BASE_MAINNET_PARAMS;

export const BASE_CONTRACT = process.env.REACT_APP_BASE_NFT_CONTRACT_ADDRESS;

export const BASE_RPC =
  BASE_NETWORK.rpcUrls[Math.floor(Math.random() * BASE_NETWORK.rpcUrls.length)];

export const BASE_USD_PARAMS: any = {
  main: {
    USDT: `0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA`,
    USDC: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`,
  },
  test: {
    USDT: ``,
    USDC: ``,
  },
};

export const BASE_USD: any =
  BASE_USD_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN || "main"}`];
