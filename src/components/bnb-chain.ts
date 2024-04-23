declare var window: any;

export const BNB_MAINNET_PARAMS = {
  chainId: 56,
  chainName: "BSC Mainnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: ["https://bsc-dataseed.bnbchain.org"],
  blockExplorerUrls: ["https://bscscan.com/"],
};

export const BNB_TESTNET_PARAMS = {
  chainId: 97,
  chainName: "BSC Testnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: ["https://bsc-testnet-dataseed.bnbchain.org"],
  blockExplorerUrls: ["https://testnet.bscscan.com/"],
};

export const BNB_PARAMS: any = {
  test: BNB_TESTNET_PARAMS,
  main: BNB_MAINNET_PARAMS,
};

export const BNB_NETWORK =
  BNB_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN}`] || BNB_MAINNET_PARAMS;

export const BNB_CONTRACT = process.env.REACT_APP_BNB_NFT_CONTRACT_ADDRESS;

export const BNB_RPC =
  BNB_NETWORK.rpcUrls[Math.floor(Math.random() * BNB_NETWORK.rpcUrls.length)];

export const BNB_USD_PARAMS: any = {
  main: {
    USDT: `0x55d398326f99059fF775485246999027B3197955`,
    USDC: `0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d`,
  },
  test: {
    USDT: ``,
    USDC: ``,
  },
};

export const BNB_USD: any =
  BNB_USD_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN || "main"}`];
