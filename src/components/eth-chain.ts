declare var window: any;

export const ETH_MAINNET_PARAMS = {
  chainId: 1,
  chainName: "Ethereum Mainnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [
    "https://eth-mainnet.g.alchemy.com/v2/mjGyHDFBIgXQn61kjMgJbSydm0u5Bt0o",
  ],
  blockExplorerUrls: ["https://etherscan.io/"],
};

export const ETH_TESTNET_PARAMS = {
  chainId: 11155111,
  chainName: "Ethereum Sepolia",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://eth-sepolia.public.blastapi.io"],
  blockExplorerUrls: ["https://sepolia.etherscan.io/"],
};

export const ETH_PARAMS: any = {
  test: ETH_TESTNET_PARAMS,
  main: ETH_MAINNET_PARAMS,
};

export const ETH_NETWORK =
  ETH_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN}`] || ETH_MAINNET_PARAMS;

export const ETH_CONTRACT = process.env.REACT_APP_ETH_NFT_CONTRACT_ADDRESS;

export const ETH_RPC =
  ETH_NETWORK.rpcUrls[Math.floor(Math.random() * ETH_NETWORK.rpcUrls.length)];

export const ETH_USD_PARAMS: any = {
  main: {
    USDT: `0xdAC17F958D2ee523a2206206994597C13D831ec7`,
    USDC: `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`,
  },
  test: {
    USDT: ``,
    USDC: ``,
  },
};

export const ETH_USD: any =
  ETH_USD_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN || "main"}`];
