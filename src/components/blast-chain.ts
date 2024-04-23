declare var window: any;

export const BLAST_MAINNET_PARAMS = {
  chainId: 81457,
  chainName: "Blast",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.blast.io"],
  blockExplorerUrls: ["https://blastscan.io/"],
};

export const BLAST_TESTNET_PARAMS = {
  chainId: 168587773,
  chainName: "Blast Sepolia",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://sepolia.blast.io"],
  blockExplorerUrls: ["https://testnet.blastscan.io"],
};

export const BLAST_PARAMS: any = {
  test: BLAST_TESTNET_PARAMS,
  main: BLAST_MAINNET_PARAMS,
};

export const BLAST_NETWORK =
  BLAST_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN}`] ||
  BLAST_MAINNET_PARAMS;

export const BLAST_CONTRACT = process.env.REACT_APP_BLAST_NFT_CONTRACT_ADDRESS;

export const BLAST_RPC =
  BLAST_NETWORK.rpcUrls[
    Math.floor(Math.random() * BLAST_NETWORK.rpcUrls.length)
  ];

export const BLAST_USD_PARAMS: any = {
  main: {
    USDT: `0x4300000000000000000000000000000000000003`,
    USDC: `0x4300000000000000000000000000000000000003`,
  },
  test: {
    USDT: ``,
    USDC: ``,
  },
};

export const BLAST_USD: any =
  BLAST_USD_PARAMS[`${process.env.REACT_APP_NETWORK_CHAIN || "main"}`];
