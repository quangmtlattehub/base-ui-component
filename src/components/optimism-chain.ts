declare var window: any;

export const OPT_MAINNET_PARAMS = {
  chainId: 10,
  chainName: "OP Mainnet",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [
    "https://opt-mainnet.g.alchemy.com/v2/7O9JCg2d8mmF3qRJy8fOzSTEArN168tR",
  ],
  blockExplorerUrls: ["https://optimistic.etherscan.io/"],
};

export const OPT_TESTNET_PARAMS = {
  chainId: 11155420,
  chainName: "OP Sepolia",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://sepolia.optimism.io"],
  blockExplorerUrls: ["https://sepolia-optimism.etherscan.io"],
};

export const OPT_PARAMS: any = {
  test: OPT_TESTNET_PARAMS,
  main: OPT_MAINNET_PARAMS,
};

export const OPT_NETWORK =
  OPT_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN}`] || OPT_MAINNET_PARAMS;

export const OPT_CONTRACT = process.env.REACT_APP_OPT_NFT_CONTRACT_ADDRESS;

export const OPT_RPC =
  OPT_NETWORK.rpcUrls[Math.floor(Math.random() * OPT_NETWORK.rpcUrls.length)];

export const OPT_USD_PARAMS: any = {
  main: {
    USDT: `0x94b008aA00579c1307B0EF2c499aD98a8ce58e58`,
    USDC: `0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85`,
  },
  test: {
    USDT: ``,
    USDC: ``,
  },
};

export const OPT_USD: any =
  OPT_USD_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN || "main"}`];
