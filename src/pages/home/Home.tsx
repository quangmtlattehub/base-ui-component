import React from "react";
import EdgeButton from "../../components/ui/edgeButton";

function Home() {
  const listFeatures = [
    {
      image: "/images/home/smart-contract.png",
      title: "Smart Contract",
      description:
        "The consensus mechanism linking Satochain with Bitcoin, enabling dApp to utilize Bitcoin's security",
    },
    {
      image: "/images/home/bitcoin-defi.png",
      title: "Bitcoin DeFi",
      description:
        "Satochain brings DeFi to Bitcoin, unlocking over $300 billion in capital and setting the stage for activation of the Bitcoin economy",
    },
    {
      image: "/images/home/bitcoin-nft.png",
      title: "Bitcoin NFTs",
      description:
        "Satochain launches DeFi on Bitcoin, releasing over $300 billion in funds and catalyzing the Bitcoin economy's growth",
    },
  ];
  const unLockingList = [
    "Trust-minimized",
    "Decentralized",
    "Censorship resistant",
  ];
  return (
    <div className="-mt-40 relative mb-[131px]">
      <img
        src="/images/home/build-for-bitcoin.svg"
        alt="main"
        className="w-full absolute z-[1]"
      />
      <img
        src="/images/home/light1.png"
        alt="light1"
        className="absolute right-0 top-[700px] z-[1]"
      />
      <img
        src="/images/home/light2.png"
        alt="light1"
        className="absolute left-0 top-[1100px] z-[1]"
      />
      <img
        src="/images/home/light3.png"
        alt="light3"
        className="absolute right-0 top-[1409px]"
      />
      <img
        src="/images/home/light4.png"
        alt="light4"
        className="absolute left-0 top-[calc(100%_-_500px)] 3xl:top-[3340px]"
      />
      <img
        src="/images/home/light5.png"
        alt="light5"
        className="absolute right-0 top-[calc(100%_-_500px)] 3xl:top-[3561px]"
      />
      <img
        src="/images/home/skeleton1.png"
        alt="skeleton1"
        className="absolute left-1/2 -translate-x-1/2 top-[900px] 2xl:top-[1000px] 3xl:top-[1150px] w-[calc(100vw_-_160px)] z-0 2xl:block hidden"
      />
      <img
        src="/images/home/skeleton2.png"
        alt="skeleton2"
        className="absolute left-1/2 -translate-x-1/2 top-[2100px] 3xl:top-[2400px] z-0 w-[calc(100vw_-_160px)] 2xl:block hidden"
      />
      <div className="container relative z-[1] pt-40 w-full">
        <div className="text-center mt-[241px]">
          <h1>Build for Bitcoin</h1>
          <div className="text-center font-bold text-[24px] mt-[32px]">
            Enhance Bitcoin's economy using secure
            <br /> Bitcoin-based apps and smart contracts
          </div>
          <div className="mt-[56px] w-fit mx-auto">
            <a href="/mint-key">
              <EdgeButton
                color="white"
                text="Mint Rune now"
                classText="text-gradient"
                id={11}
              />
            </a>
          </div>
        </div>
        <div className="ml-[30px] mt-[200px] xl:mt-[430px] 2xl:mt-[550px] 3xl:mt-[800px]">
          <h2>Features</h2>
          <div className="mt-[100px] 2xl:mt-[300px] flex items-center flex-wrap gap-x-[32px] gap-y-6">
            {listFeatures.map((feature, idx) => (
              <div key={idx} className="relative mx-auto w-[380px] h-[524px]">
                <div className="absolute z-10 inset-0">
                  <img
                    src={feature.image}
                    alt="smart-contract"
                    className="mx-auto"
                  />
                  <div className="mt-6 mx-auto w-[290px] text-center">
                    <div className="text-[32px] font-bold">{feature.title}</div>
                    <div className="text-base font-light text-white/80 mt-[24px]">
                      {feature.description}
                    </div>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="381"
                  height="526"
                  viewBox="0 0 381 526"
                  fill="none"
                  className="absolute inset-0"
                >
                  <path
                    d="M369.676 1H56L1 56V515C1 520.523 5.47715 525 11 525H325L379.676 470V11C379.676 5.47715 375.199 1 369.676 1Z"
                    fill="black"
                    stroke="white"
                    stroke-opacity="0.14"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            ))}
          </div>
          <div className="mt-[60px] 3xl:mt-[120px] flex lg:flex-row flex-col-reverse lg:gap-y-0 gap-y-10 items-center justify-between">
            <div>
              <h2>sBTC: Unlocking Bitcoin by Satochain</h2>
              <div className="flex flex-col gap-y-[24px] mt-[40px]">
                {unLockingList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-x-3">
                    <div className="w-[10px] h-[10px] bg-gradient"></div>
                    <div className="text-[18px] text-white/90 tracking-[2px] font-light">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/images/home/sbtc.png"
              alt="sbtc"
              className="object-contain xl:w-auto w-auto lg:w-[300px]"
            />
          </div>
          <div className="mt-[100px] 2xl:mt-[250px] 3xl:mt-[400px] flex lg:flex-row flex-col gap-y-10 lg:gap-y-0 items-center justify-between w-full 2xl:gap-x-[135px] gap-x-[50px]">
            <img
              src="/images/home/earn-btc.png"
              alt="earn-btc"
              className="xl:w-auto w-auto lg:w-[300px] object-contain"
            />
            <div>
              <h2>Earn BTC by participating as validators</h2>
              <div className="font-thin text-white/80 text-base">
                Hold and temporarily secure BTC, Satochain's native currency, to
                bolster the network's security and consensus. Over 2000 $BTC
                have been allocated as consensus rewards
              </div>
              <EdgeButton
                color="gradient"
                text="Mint your Rune now"
                id={12}
                className="mt-[40px]"
              />
            </div>
          </div>
          <div
            className="mt-[100px] 2xl:mt-[400px] 3xl:mt-[550px]  flex 
          lg:flex-row-reverse flex-col gap-y-10  2xl:flex-col items-center 2xl:gap-x-0 gap-x-14"
          >
            <img
              src="/images/home/built.png"
              alt="built"
              className="2xl:w-auto xl:w-[500px] w-auto lg:w-[300px] object-contain"
            />
            <div className="flex flex-col 2xl:items-center flex-1">
              <h2 className="mt-[56px] max-w-[690px] 2xl:text-center">
                Build powerful apps, secured by Bitcoin
              </h2>
              <EdgeButton
                color="gradient"
                id={13}
                text="Start Building"
                className="mt-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
