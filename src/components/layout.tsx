import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import ee from "../components/ee";
import xstore from "../components/xstore";

// import detectEthereumProvider from "@metamask/detect-provider";
// import { isMobile } from "react-device-detect";
// import { ethers } from "ethers";
// import { getAddress, signTransaction } from "sats-connect";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import okxWeb3 from "@okwallet/extension";
// import axios from "axios";
// const { CHAINS } = okxWeb3;

import EdgeButton from "./ui/edgeButton";
import SelectOptions, { Option } from "./ui/SelectOption";
import Footer from "./layouts/footer";
import { getCookie, getEthereum, setCookie } from "./helper";
import { optionChains } from "./data";
import { isMobile } from "react-device-detect";

declare var window: any;

let lastMessageTimeout: any = null;

const Layout = (props: any) => {
  const [wallet, setWallet] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [chain, setChain] = useState<Option>(
    optionChains.find((item) => item.id == getCookie("chain")) ||
      optionChains[1]
  );

  useEffect(() => {
    setCookie("chain", chain.id, 365);
    ee.dispatch("chain-change", chain.id);
  }, [chain]);

  useEffect(() => {
    ee.dispatch("wallet-change", wallet);
  }, [wallet]);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    // console.error("params -> ", params);
    if (params.ref || params.reference) {
      let addr = params.ref || params.reference;
      console.error("ref addr -> ", addr);
      setCookie("refAddress", addr, 365);
    }
  }, []);

  const [message, setMessage] = useState<any>({
    text: "",
    type: "", //error,warning,success,info
    timeout: 1000,
  });

  const selfRef = useRef<{ accounts: string[] }>({
    accounts: [],
  });
  const self = selfRef.current;

  const handleAccountsChanged = (_accounts: string[]) => {
    if (self.accounts[0] === _accounts[0]) {
      // prevent from triggering twice
      return;
    }
    self.accounts = _accounts;
    if (_accounts.length > 0) {
      setWallet(_accounts[0]);
      setCookie("login", "true", 365);
    } else {
      setCookie("login", "false", 365);
    }
  };

  const showMessage = (text: any, type: any = "info", timeout: any = 5000) => {
    if (lastMessageTimeout) {
      clearTimeout(lastMessageTimeout);
    }
    setMessage({
      text,
      type,
      timeout,
    });
    lastMessageTimeout = setTimeout(() => {
      setMessage({
        text: "",
      });
      clearTimeout(lastMessageTimeout);
    }, timeout);
  };

  const pageLoadingChanged = (data: any) => {
    setLoading(data);
  };

  const pageMessageChanged = (data: any) => {
    showMessage(data?.text, data?.type, data?.timeout);
  };

  useEffect(() => {
    ee.on("page-loading", pageLoadingChanged);
    ee.on("page-message", pageMessageChanged);
    return () => {
      ee.remove("page-loading", pageLoadingChanged);
      ee.remove("page-message", pageMessageChanged);
    };
  }, []);

  const strip = (text: any) => {
    try {
      return (
        new DOMParser()?.parseFromString(text, "text/html")?.body
          ?.textContent || ""
      );
    } catch (e) {
      return "";
    }
  };

  const [isMenuMobile, setMenuMobile] = useState(false);

  useEffect(() => {
    if (getCookie("login") == "false") {
      return;
    }
    if (isMobile && getEthereum("isMetaMask")) {
      try {
        getEthereum("isMetaMask")
          .request({ method: "eth_accounts" })
          .then((accounts: any) => {
            handleAccountsChanged(accounts);
          });
      } catch (e) {}
    }

    try {
      getEthereum("isMetaMask")
        .request({ method: "eth_accounts" })
        .then((accounts: any) => {
          handleAccountsChanged(accounts);
        });
    } catch (e) {}
  }, []);

  const loginClickHandler = async (e: any) => {
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
      showMessage("Please install MetaMask first", "error");
    }
  };

  return (
    <>
      <Helmet>
        <title>{xstore?.title}</title>
        {xstore?.description && (
          <meta name="description" content={xstore?.description} />
        )}
        {!xstore?.description && (
          <meta name="description" content={xstore?.title} />
        )}
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href={xstore?.faviconUrl} />
        {xstore?.socialThumbUrl && (
          <meta property="og:image" content={xstore?.socialThumbUrl} />
        )}
        {!xstore?.socialThumbUrl && (
          <meta property="og:image" content={xstore?.faviconUrl} />
        )}
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href={xstore?.faviconUrl} />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: '${xstore?.fontFamily}';
                src: url(${xstore?.fontUrl});
                font-style: normal;
                font-display: swap;
              }

              @font-face {
                font-family: '${xstore?.fontHeading}';
                src: url(${xstore?.fontUrlHeading});
                font-style: normal;
                font-display: swap;
              }

              h1,h2,h3 {
                font-family: ${xstore?.fontHeading}, sans-serif;
                color: ${xstore?.headingColor};
                line-height: 1;
              }

              body {
                font-family: ${xstore?.fontFamily}, sans-serif;
              }

              .btn.bg-primary:hover,
              div .primary:hover{
                color: ${xstore?.primaryColor};
              }
            `,
          }}
        />
      </Helmet>
      <div className="relative bg-bg">
        <header className="header fixed bg-black pb-4 w-full z-20 pt-[34px]">
          <div className="container">
            <div className="flex items-center justify-between">
              <a href={"/"}>
                {xstore.faviconUrl && (
                  <div className="flex items-center gap-x-[8px]">
                    <img
                      className="sm:h-10 h-8"
                      src={xstore.page.header?.logo?.imageUrl}
                      alt={strip(xstore.page.header?.logo?.title) || ""}
                    />
                    <span className="text-white text-[22px] font-semibold">
                      {xstore.page.header?.logo?.title}
                    </span>
                  </div>
                )}
              </a>
              <div
                className={`${
                  isMenuMobile ? "xl:!-left-full !left-0 mt-8" : "!left-[-100%]"
                }
               xl:px-0 px-4 py-5 xl:py-0 xl:flex duration-75 items-center text-[14px] fixed xl:static z-[2] xl:h-auto 
                h-[calc(100vh_-_58px)] top-[58px] list-none -left-full xl:left-0 xl:bg-transparent xl:w-auto w-[280px] bg-bg overflow-y-auto !pt-[10px]
              `}
              >
                {xstore?.page.header.menuItem.map((item: any, index: any) => {
                  if (item.url) {
                    return (
                      <NavLink
                        to={{
                          pathname: item.url,
                        }}
                        key={item.id}
                        className="flex items-center group lg:px-4 px-4 py-[10px] cursor-pointer mb-4 lg:mb-0 text-[14px] font-semibold relative"
                      >
                        {item.isHot && (
                          <div className="bg-gradient absolute px-1 text-white rounded -top-2 right-0">
                            HOT
                          </div>
                        )}
                        {item.title}
                      </NavLink>
                    );
                  } else {
                    return (
                      <div
                        key={item.id}
                        className="flex items-center group lg:px-4 px-4 py-[10px] cursor-pointer mb-4 lg:mb-0 text-[14px] font-semibold relative text-white/40"
                      >
                        {item.isComingSoon && (
                          <div className="absolute px-1 text-white/40 text-[11px] -top-2 right-0 font-normal">
                            SOON
                          </div>
                        )}
                        {item.title}
                      </div>
                    );
                  }
                })}
                <div className="block sm:hidden">
                  <div className="mt-3">
                    {wallet && (
                      <>
                        <EdgeButton color="gradient" widthSvg="100%" id={1}>
                          <div className="flex items-center gap-x-[8px] justify-center">
                            <img src="/images/common/wallet.svg" alt="wallet" />
                            <span>
                              {wallet.substr(0, 5)}...
                              {wallet.substr(wallet.length - 5, wallet.length)}
                            </span>
                          </div>
                        </EdgeButton>
                      </>
                    )}{" "}
                    {!wallet && (
                      <EdgeButton
                        color="gradient"
                        widthSvg="100%"
                        id={2}
                        onClick={loginClickHandler}
                      >
                        <div className="flex items-center gap-x-[8px] justify-center">
                          <img src="/images/common/wallet.svg" alt="wallet" />
                          <span>Connect EVM</span>
                        </div>
                      </EdgeButton>
                    )}
                  </div>
                  <SelectOptions
                    options={optionChains}
                    setValue={setChain}
                    value={chain}
                    className="w-full mt-3"
                    onChangeOption={(value) => {
                      setChain(value);
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-x-3 relative z-50">
                <div className="hidden sm:flex items-center gap-x-3">
                  <SelectOptions
                    options={optionChains}
                    setValue={setChain}
                    value={chain}
                    className="w-[170px]"
                    onChangeOption={(value) => {
                      setChain(value);
                    }}
                  />
                  {wallet && (
                    <>
                      <EdgeButton color="gradient" widthSvg="100%" id={3}>
                        <div className="flex items-center gap-x-[8px] justify-center">
                          <img src="/images/common/wallet.svg" alt="wallet" />
                          <span>
                            {wallet.substr(0, 5)}...
                            {wallet.substr(wallet.length - 5, wallet.length)}
                          </span>
                        </div>
                      </EdgeButton>
                    </>
                  )}{" "}
                  {!wallet && (
                    <EdgeButton
                      color="gradient"
                      widthSvg="100%"
                      id={4}
                      onClick={loginClickHandler}
                    >
                      <div className="flex items-center gap-x-[8px] justify-center">
                        <img src="/images/common/wallet.svg" alt="wallet" />
                        <span>Connect EVM</span>
                      </div>
                    </EdgeButton>
                  )}
                </div>
                <div
                  onClick={() => {
                    setMenuMobile((prev) => !prev);
                  }}
                  className="xl:hidden block"
                >
                  <img
                    src="/images/icon/menu.svg"
                    alt="menu"
                    className="hover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <div className=" absolute h-full w-full top-0 left-0 bg-center"></div> */}
        <div className="min-h-screen pt-28">
          <Outlet />
        </div>
        <Footer />
      </div>
      {message?.text && (
        <div className="fixed bottom-[15px] left-[15px] z-[1000] p-[8px_5px_5px_5px] text-white bg-black text-[85%] px-[12px] rounded-[5px]">
          <span className={message.type === "error" ? "error" : ""}>
            &nbsp;
            {message.text}
          </span>
        </div>
      )}
    </>
  );
};

export default Layout;
