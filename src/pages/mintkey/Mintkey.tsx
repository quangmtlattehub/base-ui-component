import React, { useEffect, useState } from "react";
import InputAmount from "../../components/ui/inputAmount";
import SelectOptions, { Option } from "../../components/ui/SelectOption";
import FloatInputLabel from "../../components/ui/FloatInputLabel";
import { optionChains } from "../../components/data";
import {
  getCookie,
  getEthereum,
  getTargetChain,
  setCookie,
} from "../../components/helper";
import ee from "../../components/ee";
import { ethers } from "ethers";
import axios from "axios";
import { nft_abi, token_abi } from "../../components/abi";
import { isMobile } from "react-device-detect";
declare var window: any;

function Mintkey() {
  const [wallet, setWallet] = useState<any>(null);
  const [selling, setSelling] = useState(false);
  const [contractState, setContractState] = useState<any>(null);
  const [ref, setRef] = useState<any>(getCookie("refAddress") || "");
  const [refAddress, setRefAddress] = useState<any>(ethers.ZeroAddress);
  const [discountPercent, setDiscountPercent] = useState<any>(0);
  const [staker, setStaker] = useState<any>(null);

  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState("");
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option>(); // alaways usdc last
  const [chain, setChain] = useState(getCookie("chain") || "arbitrum");
  useEffect(() => {
    let _options: any = (
      optionChains.find((item) => item.id == getCookie("chain")) ||
      optionChains[1]
    ).listExtrasOptions;

    setOptions(_options);
    setSelectedOption(_options[_options.length - 1]);
  }, [1]);
  const onChangeOption = (option: Option) => {
    setSelectedOption(option);
  };

  const chainChanged = (chainId: string) => {
    let _options: any = (
      optionChains.find((item) => item.id == chainId) || optionChains[1]
    ).listExtrasOptions;
    setOptions(_options);
    setSelectedOption(_options[_options.length - 1]);
    setChain(chainId);
  };

  const walletChanged = (newWallet: any) => {
    setWallet(newWallet);
  };

  useEffect(() => {
    ee.on("chain-change", chainChanged);
    return () => {
      ee.remove("chain-change", chainChanged);
    };
  }, [options, selectedOption]);

  useEffect(() => {
    ee.on("wallet-change", walletChanged);
    return () => {
      ee.remove("wallet-change", walletChanged);
    };
  }, [wallet]);

  useEffect(() => {
    if (!ref) {
      setRef(getCookie("refAddress") || "");
    }
  }, []);

  useEffect(() => {
    if (ref) {
      (async () => {
        let res = await axios.get(`/api/satochain/stakers/${ref}`);
        console.log("walletAddress -> ", res.data?.staker?.walletAddress);
        setRefAddress(res.data?.staker?.walletAddress || ethers.ZeroAddress);
      })();
    } else {
      setRefAddress(ethers.ZeroAddress);
    }
  }, [ref]);

  useEffect(() => {
    getContractState();
    checkDiscount();
  }, [chain]);

  const checkDiscount = async () => {
    try {
      if (discountCode) {
        let { targetContract, targetRpc } = getTargetChain(chain);
        let contract = new ethers.Contract(
          ethers.getAddress(ethers.getAddress(targetContract as any)),
          nft_abi,
          ethers.getDefaultProvider(targetRpc)
        );
        let discount = await contract.discounts(discountCode);
        console.log("discount -> ", discount);
        if (
          discount &&
          Number(discount.amount.toString()) > 0 &&
          Number(discount.percent.toString()) > 0
        ) {
          setDiscountPercent(Number(discount.percent.toString()));
        } else {
          ee.dispatch("page-message", {
            text: "Invalid discount code on this chain",
            type: "info",
            timeout: 10 * 1000,
          });
          setDiscountPercent(0);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!ref) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      // console.error("params -> ", params);
      if (params.ref || params.reference) {
        let addr = params.ref || params.reference;
        setRef(addr);
        // setTempRef(addr);
      }
    }
  }, []);

  useEffect(() => {
    if (!ref) {
      // get ref address
      getRefAddress(ref);
    }
  }, [ref]);

  const initalPage = async (_usr: any) => {
    setWallet(_usr);
    setCookie("login", "true", 1);
    setCookie("user", _usr, 1);
    if (_usr) {
      getStaker(_usr);
    }
  };

  const getRefAddress = async (_ref: any) => {
    try {
      let res = await axios.get(`/api/satochain/stakers/${_ref}`);
      if (res.data && (res.status == 200 || res.status == 201)) {
        setRefAddress(res.data?.staker?.walletAddress);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getStaker = async (_wallet: any) => {
    try {
      let res = await axios.post(`/api/satochain/stakers`, {
        walletAddress: _wallet,
      });
      if (res.data && (res.status == 200 || res.status == 201)) {
        setStaker(res.data?.staker);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const countKeyByChain = async (
    _wallet: any,
    targetContract: any,
    targetRpc: any
  ) => {
    if (!_wallet || !targetContract || !targetRpc) return 0;
    try {
      let contract = new ethers.Contract(
        ethers.getAddress(targetContract),
        nft_abi,
        ethers.getDefaultProvider(targetRpc)
      );
      let res = await contract.balanceOf(_wallet);
      return Number(res);
    } catch (e) {
      console.error(e);
    }
  };

  const applyDiscountClickHandler = async (e: any) => {
    if (!discountCode) {
      ee.dispatch("page-message", "Please enter a valid discount code");
      return;
    }
    try {
      let { targetContract, targetRpc } = getTargetChain(chain);
      let contract = new ethers.Contract(
        ethers.getAddress(ethers.getAddress(targetContract as any)),
        nft_abi,
        ethers.getDefaultProvider(targetRpc)
      );
      let discount = await contract.discounts(discountCode);
      console.log("discount -> ", discount);
      if (
        discount &&
        Number(discount.amount.toString()) > 0 &&
        Number(discount.percent.toString()) > 0
      ) {
        // setCouponPercent(discount);
        setDiscountPercent(Number(discount.percent.toString()));
        ee.dispatch("page-message", {
          text: `Discount code applied successfully. You will get ${Number(
            discount.percent.toString()
          )}% discount`,
          type: "info",
          timeout: 10 * 1000,
        });
      } else {
        ee.dispatch("page-message", {
          text: "Invalid discount code",
          type: "info",
          timeout: 10 * 1000,
        });
        setDiscountPercent(0);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const setMetamaskListener = (ethereum: any) => {
    ethereum?.on("accountsChanged", reloadPage);
    // ethereum?.on("chainChanged", reloadPage);
    // ethereum?.on("disconnect", reloadPage);
  };

  const reloadPage = () => {
    setCookie("user", "", 0);
    window.location.reload();
  };

  const detectMetamask = async () => {
    if (window.ethereum) {
      const provider: any = getEthereum("isMetaMask");
      if (provider) {
        // let chainId = await provider.request({ method: "eth_chainId" });
        let accounts = await provider.request({ method: "eth_accounts" });
        if (accounts && accounts.length > 0) {
          initalPage(accounts[0]);
          setMetamaskListener(provider);
        } else {
          if (isMobile) {
            provider
              .request({ method: "eth_requestAccounts" })
              .then((accounts: any) => {
                if (accounts && accounts.length > 0) {
                  initalPage(accounts[0]);
                  setMetamaskListener(provider);
                } else {
                  (async () => {
                    try {
                      if (provider) {
                        setMetamaskListener(provider);
                      }
                    } catch (e) {
                      console.error(e);
                    }
                  })();
                }
              });
          } else {
            (async () => {
              try {
                if (provider) {
                  setMetamaskListener(provider);
                }
              } catch (e) {
                console.error(e);
              }
            })();
          }
        }
      }
    }
  };

  useEffect(() => {
    if (getCookie("login") == "false") {
      return;
    }
    detectMetamask();
  }, []);

  const newWalletHandler = (newWallet: any) => {
    console.log("newWallet -> ", newWallet);
    setWallet(newWallet);
  };

  useEffect(() => {
    ee.on("wallet-changed", newWalletHandler);
    return () => {
      ee.remove("wallet-changed", newWalletHandler);
    };
  }, [wallet]);

  useEffect(() => {
    (async () => {
      loadState();
    })();
  }, [wallet]);

  const loadState = async () => {
    getContractState();
  };

  const getContractState = async () => {
    const { targetRpc, targetContract } = getTargetChain(chain);
    let contract = new ethers.Contract(
      ethers.getAddress(targetContract as any),
      nft_abi,
      ethers.getDefaultProvider(targetRpc)
    );
    let tokenPrice = await contract.tokenPrice();
    setContractState({ tokenPrice: tokenPrice?.toString() });
  };

  const handleAccountsChanged = (_accounts: string[]) => {
    if (_accounts.length > 0) {
      setWallet(_accounts[0]);
      setCookie("login", "true", 365);
    } else {
      setCookie("login", "false", 365);
    }
  };

  const loginClickHandler = async (e: any) => {
    try {
      ee.dispatch("show-wallet-connect", null);
      let provider = await getEthereum("isMetaMask");
      if (!provider && isMobile) {
        window.location.href = `https://metamask.app.link/dapp/${window.location.host}`;
        return;
      } else if (provider) {
        try {
          const accounts = await getEthereum("isMetaMask").request({
            method: "eth_requestAccounts",
          });
          handleAccountsChanged(accounts);
        } catch (e) {}
      } else {
        ee.dispatch("page-message", "Please install Metamask to continue");
      }
    } catch (e) {}
  };

  const isEthereumChain = (currentChainId: any, targetChainId: any) => {
    return currentChainId == targetChainId;
  };

  const switchToEthereumChain = async (chain: any) => {
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

  const approveUsd = async (
    payment: any,
    targetUsd: any,
    targetContract: any,
    amount: any
  ) => {
    try {
      let usdAddress = payment == 2 ? targetUsd.USDT : targetUsd.USDC;
      let usdContract = new ethers.Contract(
        ethers.getAddress(usdAddress),
        token_abi,
        await new ethers.BrowserProvider(getEthereum("isMetaMask")).getSigner()
      );

      let balanceOf = await usdContract.balanceOf(wallet);
      if (Number(balanceOf.toString()) < Number(amount)) {
        ee.dispatch("page-message", {
          text: "You do not have enough usd to complete this transaction",
          type: "info",
          timeout: 10 * 1000,
        });
        return false;
      }

      let allowance = await usdContract.allowance(wallet, targetContract);
      if (Number(allowance.toString()) >= Number(amount)) {
        return true;
      }

      let tx = await usdContract.approve(
        ethers.getAddress(targetContract),
        amount
      );
      if (tx) {
        await tx.wait();
      }
      return true;
    } catch (e: any) {
      console.error(e);
      if (
        e.code == -32603 ||
        e.data?.code == -32000 ||
        e.info?.error?.code == -32603
      ) {
        ee.dispatch("page-message", {
          text: "Sorry. You do not have enough usd/bnb/ether to complete this transaction",
          type: "info",
          timeout: 10 * 1000,
        });
      } else {
        ee.dispatch("page-message", {
          text: e.reason || e.data?.message || e.error?.message || e.message,
          type: "info",
          timeout: 10 * 1000,
        });
      }
      return false;
    }
  };

  const buyClickHandler = async (e: any) => {
    try {
      setSelling(true);
      if (!wallet) {
        ee.dispatch("page-message", "Please connect your wallet first");
        return;
      }
      let provider: any = getEthereum("isMetaMask");
      if (!provider) {
        ee.dispatch("page-message", "Please connect your wallet first");
        return;
      }
      ee.dispatch("page-message", {
        text: "Processing your request. Please wait...",
        type: "info",
        timeout: 60 * 10 * 1000,
      });
      let currentChainId = await provider.request({ method: "eth_chainId" });
      let {
        targetChainId,
        targetChainName,
        targetContract,
        targetRpc,
        targetChain,
        targetUsd,
      } = getTargetChain(chain);
      if (!isEthereumChain(currentChainId, targetChainId)) {
        ee.dispatch("page-message", {
          text: "Please switch your wallet to " + targetChainName,
          type: "info",
          timeout: 5 * 1000,
        });

        await switchToEthereumChain(targetChain);
      }
      if (
        ref &&
        (refAddress == null ||
          refAddress == "" ||
          refAddress == ethers.ZeroAddress)
      ) {
        try {
          let res = await axios.get(`/api/satochain/stakers/${ref}`);
          setRefAddress(res.data?.staker?.walletAddress || ethers.ZeroAddress);
        } catch (e) {}
      }

      let signRes = await axios.post(`/api/satochain/mint/sign`, {
        walletAddress: wallet,
        chain: chain,
        refLvl1: refAddress || ethers.ZeroAddress,
        refLvl2: ethers.ZeroAddress,
        discountCode: discountCode || "",
        numberMint: quantity,
        payment: selectedOption?.id,
      });

      if (signRes.status == 200) {
        let params: any = signRes.data.params;
        console.log("params -> ", params);

        if (selectedOption?.id == 2 || selectedOption?.id == 3) {
          // usdt or usdc
          ee.dispatch("page-message", {
            text: "Please approve to spend your usd token.",
            type: "info",
            timeout: 60 * 10 * 1000,
          });
          await approveUsd(
            selectedOption?.id,
            targetUsd,
            targetContract,
            signRes.data.amount?.toString()
          );
        }

        ee.dispatch("page-message", {
          text: "Please approve to mint your Rune.",
          type: "info",
          timeout: 60 * 10 * 1000,
        });

        let contract = new ethers.Contract(
          ethers.getAddress(targetContract as any),
          nft_abi,
          await new ethers.BrowserProvider(
            getEthereum("isMetaMask")
          ).getSigner()
        );

        let txInfo = {
          value:
            selectedOption?.id == 1 ? signRes.data.amount?.toString() : "0",
        };

        await contract.mintX.estimateGas(...params, txInfo);

        let tx = await contract.mintX(...params, txInfo);

        console.log("tx -> ", tx);
        if (tx) {
          ee.dispatch("page-message", {
            text: "Your transaction has been submitted. Please wait for confirmation.", //"Transaction sent successfully. Please wait for confirmation."
            type: "info",
            timeout: 20 * 1000,
          });

          try {
            let refPercent = 0;
            try {
              refPercent =
                refAddress != ethers.ZeroAddress
                  ? await contract.specialRefs(refAddress)
                  : 0;
            } catch (e) {}
            axios.post(`/api/satochain/activities`, {
              walletAddress: wallet,
              action: "PURCHASE",
              source: "WEB",
              txParams: {
                hash: tx,
                ref: ref || "",
                refAddress: refAddress || ethers.ZeroAddress,
                chain: chain,
                quantity,
                refPercent: Number(refPercent.toString()),
              },
              changed:
                Math.round(
                  1000000 *
                    (((100 - Number(discountPercent || 0)) *
                      quantity *
                      Number(contractState?.tokenPrice?.toString() || "0")) /
                      100)
                ) / 1000000,
            });
          } catch (e) {}

          setTimeout(() => {
            loadState();
          }, 20 * 1000);

          await tx.wait();

          ee.dispatch("page-message", {
            text: "Transaction confirmed successfully.",
            type: "info",
            timeout: 10 * 1000,
          });
        }
      }
    } catch (e: any) {
      console.error(e);
      if (
        e.code == -32603 ||
        e.data?.code == -32000 ||
        e.info?.error?.code == -32603
      ) {
        ee.dispatch("page-message", {
          text: "Sorry. You do not have enough usd/bnb/ether to complete this transaction",
          type: "info",
          timeout: 10 * 1000,
        });
      } else {
        ee.dispatch("page-message", {
          text: e.reason || e.data?.message || e.error?.message || e.message,
          type: "info",
          timeout: 10 * 1000,
        });
      }
    } finally {
      setSelling(false);
    }
  };

  return (
    <div className="relative">
      <img
        src="/images/mintkey/light1.png"
        alt="light-1"
        className="absolute left-0"
      />
      <img
        src="/images/mintkey/light2.png"
        alt="light-2"
        className="absolute right-0"
      />
      <div className="container pt-[80px] relative z-10">
        <div className="flex xl:flex-row flex-col gap-x-[32px] gap-y-5 xl:gap-y-0 items-stretch">
          <img
            src="/images/mintkey/diamond.png"
            alt="diamond"
            className="object-contain xl:w-auto w-[800px] mx-auto"
          />
          <div className="border border-border flex-1">
            <div className="bg-gradient py-[15px] px-[32px]">
              <h4>Mint Your Rune</h4>
            </div>
            <div className="py-6 px-8 flex items-center border-b border-border justify-between">
              <div className="flex items-center gap-x-2">
                <span className="text-xl font-medium">Rune NFTs</span>
                <img
                  src="/images/icon/exclamation-mark.svg"
                  alt="mark"
                  className="w-4 object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-x-2 mb-2">
                  <span className="text-sm font-normal text-white/70">
                    QUANTITY
                  </span>
                  <img
                    src="/images/icon/exclamation-mark.svg"
                    alt="mark"
                    className="w-4 object-contain"
                  />
                </div>
                <InputAmount value={quantity} setValue={setQuantity} />
              </div>
            </div>
            <div className="py-6 px-8 border-border border-b">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-xl">1 x Rune NFT</div>
                  <div className="mt-2 text-white/70 text-xs font-normal">
                    {contractState?.tokenPrice?.toString() || "0"} USD per NFT
                  </div>
                </div>
                <SelectOptions
                  options={options}
                  setValue={setSelectedOption}
                  value={selectedOption}
                  onChangeOption={onChangeOption}
                  classNameOptionList="w-[200px]"
                  classNameContainer="min-w-[150px]"
                />
              </div>
              <div className="flex items-center justify-between text-[20px] font-medium mt-[20px]">
                <span>Pay</span>
                <span>
                  {" "}
                  {Math.round(
                    1000000 *
                      (((100 - Number(discountPercent || 0)) *
                        quantity *
                        Number(contractState?.tokenPrice?.toString() || "0")) /
                        100)
                  ) / 1000000}{" "}
                  USD
                </span>
              </div>
            </div>
            <div className="py-[48px] px-[32px] border-b border-border">
              <FloatInputLabel
                label="Discount Code"
                classNameLabel="!bg-black ml-2"
                suffixEle={
                  <div
                    onClick={applyDiscountClickHandler}
                    className="hover px-3 py-[10px] font-semibold text-sm text-[#FFB597]"
                  >
                    Apply
                  </div>
                }
                value={discountCode}
                setValue={setDiscountCode}
              />
            </div>
            <div className="p-6">
              {wallet && (
                <button
                  onClick={buyClickHandler}
                  disabled={selling}
                  className="w-full"
                >
                  Confirm
                </button>
              )}
              {!wallet && (
                <button onClick={loginClickHandler} className="w-full">
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-[56px] flex md:flex-row flex-col md:items-stretch gap-x-8 mb-[140px]">
          {[
            {
              id: 1,
              title: "RUNE NFTs AVAILABLE",
              value: "40,000",
            },
            {
              id: 2,
              title: "CURRENT PRICE",
              value: `${contractState?.tokenPrice?.toString() || "0"} USD`,
            },
            {
              id: 3,
              title: "PRICE INCREASE / 200 RUNE",
              description: "FROM 10,000 NFTs",
              value: "+20 USD",
            },
          ].map((data) => (
            <div
              key={data.id}
              className="border border-border flex-1 py-6 px-8"
            >
              <div className="text-base font-bold">{data.title}</div>
              {data.description && (
                <div className="mt-3 font-normal text-white/40 text-base">
                  FROM 10,000 NFTs
                </div>
              )}

              <div className="mt-4 text-gradient font-black text-[40px]">
                {data.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mintkey;
