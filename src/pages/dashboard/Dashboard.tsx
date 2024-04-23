import React, { useState } from "react";
import EdgeButton from "../../components/ui/edgeButton";
import FloatInputLabel from "../../components/ui/FloatInputLabel";
import Pagination from "../../components/ui/Pagination";

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refferalCode, setRefferalCode] = useState("");
  const [isHasNft, setIsHasNft] = useState(true);
  const [page, setPage] = useState(1);
  const total = 10;
  const balancesTotal = [
    {
      id: 1,
      title: "Total usdt rewards",
      value: "1,000 USDT",
    },
    {
      id: 2,
      title: "Total usdC rewards",
      value: "1,000 USDC",
    },
    {
      id: 3,
      title: "Total ETH rewards",
      value: "100 ETH",
    },
  ];
  const dataTable = [
    {
      id: 1,
      time: "99/99/2024",
      userWallet: "0x1231231da.....ddsd1sd",
      runePrice: {
        img: "/images/chain/usdt.svg",
        price: "USDT",
        value: 2.4,
      },
    },
    {
      id: 2,
      time: "99/99/2024",
      userWallet: "0x1231231da.....ddsd1sd",
      runePrice: {
        img: "/images/chain/usdt.svg",
        price: "USDT",
        value: 2.4,
      },
    },
    {
      id: 3,
      time: "99/99/2024",
      userWallet: "0x1231231da.....ddsd1sd",
      runePrice: {
        img: "/images/chain/usdt.svg",
        price: "USDT",
        value: 2.4,
      },
    },
    {
      id: 4,
      time: "99/99/2024",
      userWallet: "0x1231231da.....ddsd1sd",
      runePrice: {
        img: "/images/chain/usdt.svg",
        price: "USDT",
        value: 2.4,
      },
    },
    {
      id: 5,
      time: "99/99/2024",
      userWallet: "0x1231231da.....ddsd1sd",
      runePrice: {
        img: "/images/chain/usdt.svg",
        price: "USDT",
        value: 2.4,
      },
    },
    {
      id: 6,
      time: "99/99/2024",
      userWallet: "0x1231231da.....ddsd1sd",
      runePrice: {
        img: "/images/chain/usdt.svg",
        price: "USDT",
        value: 2.4,
      },
    },
    {
      id: 7,
      time: "99/99/2024",
      userWallet: "0x1231231da.....ddsd1sd",
      runePrice: {
        img: "/images/chain/usdt.svg",
        price: "USDT",
        value: 2.4,
      },
    },
  ];
  const onChangePage = (page: number) => {
    setPage(page);
  };
  return (
    <div className="relative mb-[140px]">
      <img
        src="/images/dashboard/light1.png"
        alt="light1"
        className="absolute left-0 "
      />
      <img
        src="/images/dashboard/light2.png"
        alt="light2"
        className="absolute right-0 -top-28 z-0"
      />
      <img
        src="/images/dashboard/light3.png"
        alt="light3"
        className="absolute right-0 bottom-0 z-0"
      />
      {!isLoggedIn && (
        <div className="container pt-[50px] md:pt-[80px]">
          <h4>Dashboard</h4>
          <div className="mt-[40px] bg-dashboardPattern bg-center bg-no-repeat h-[776px] bg-contain flex items-center justify-center">
            <EdgeButton
              onClick={() => {
                setIsLoggedIn(true);
              }}
              color="gradient"
              text="Log In"
              id={7}
            />
          </div>
        </div>
      )}
      {isLoggedIn && (
        <div className="container pt-[80px]">
          <h4>Dashboard</h4>
          <div className="mt-[68px] px-[40px] bg-gradient rounded-md xl:rounded-none xl:bg-dashboardEdgeSection bg-cover bg-no-repeat items-center py-5 xl:py-0 h-fit lg:h-[367px] flex relative md:flex-row flex-col gap-x-4 xl:gap-y-0 gap-y-5">
            <img
              src="/images/dashboard/key.png"
              alt="key"
              className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-auto w-[300px] object-contain"
            />
            {isHasNft && (
              <div className="lg:ml-[450px] my-auto items-center justify-between gap-x-[80px] flex-1">
                <div className="font-normal text-[24px] sm:text-[32px] tracking-[0.4px]">
                  My referral code
                </div>
                <div className="mt-[20px]">
                  <FloatInputLabel
                    value={refferalCode}
                    setValue={setRefferalCode}
                    classNameInput="!border-white w-full !text-white"
                    suffixEle={
                      <img
                        src={"/images/icon/copy.svg"}
                        alt="copy"
                        className="hover"
                      />
                    }
                  />
                  <div className="text-[14px] font-normal tracking-[0.4px] mt-2 pl-4">
                    Share your referral code to others and start to earn USDT
                    and more points
                  </div>
                </div>
              </div>
            )}
            {!isHasNft && (
              <div className="lg:ml-[450px] my-auto rounded-[10px] bg-black/20 p-[24px] flex lg:flex-row flex-col lg:gap-y-0 gap-y-3 items-center justify-between gap-x-[80px]">
                <div className="text-[18px] sm:text-[24px] font-normal tracking-[0.4px] max-w-[477px]">
                  You need to have a Rune NFT to receive your referral code
                </div>
                <EdgeButton color="gradient" id={8} text="Buy Now" />
              </div>
            )}
          </div>
          <div className="mt-[40px] p-[32px] bg-white/10 backdrop-blur-0 rounded-[10px]">
            <div className="text-[24px] sm:text-[32px] font-bold">
              My Balance
            </div>
            <div className="mt-[24px] flex items-center gap-x-[24px] flex-wrap gap-y-5">
              <div className="border border-white/10 p-[24px] rounded-[10px] lg:flex-row flex-col gap-y-3 lg:gap-y-0 flex items-center justify-between flex-1">
                <div>
                  <div className="font-normal text-[14px] uppercase">
                    Holding rune nft
                  </div>
                  <div className="mt-4 font-bold text-[24px] sm:text-[32px]">
                    1,000 NFT
                  </div>
                </div>
                <EdgeButton color="gradient" text="Buy More" id={9} />
              </div>
              <div className="border border-white/10 p-[24px] rounded-[10px] flex lg:flex-row flex-col gap-y-3 lg:gap-y-0 items-center justify-between flex-1">
                <div>
                  <div className="font-normal text-[14px] uppercase">
                    sato token
                  </div>
                  <div className="mt-4 font-bold text-[24px] sm:text-[32px]">
                    100 SATO
                  </div>
                </div>
                <EdgeButton color="gradient" text="Stake now" id={10} />
              </div>
            </div>
            <div className="mt-[24px] flex flex-wrap gap-y-5 gap-x-[24px] items-stretch">
              {balancesTotal.map((item) => (
                <div
                  key={item.id}
                  className="p-[24px] border rounded-[10px] border-white/10 flex-1"
                >
                  <div className="text-[14px] font-normal uppercase h-[60px] sm:h-auto">
                    {item.title}
                  </div>
                  <div className="mt-4 font-bold text-[24px] sm:text-[32px]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[40px]">
            <div className=" overflow-x-auto">
              <table className="w-[1000px] md:w-full">
                <thead>
                  <th>Time</th>
                  <th>User wallet</th>
                  <th>Rune Price</th>
                </thead>
                <tbody className="w-full">
                  {dataTable.map((row) => (
                    <tr key={row.id}>
                      <td>{row.time}</td>
                      <td>{row.userWallet}</td>
                      <td>
                        <div className="flex items-center gap-x-2 text-[16px] font-normal">
                          <img
                            src={row.runePrice.img}
                            alt={row.runePrice.price}
                          />
                          <div>{row.runePrice.value}</div>
                          <div>{row.runePrice.price}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-[32px]">
              <Pagination
                total={total}
                pageCurrent={page}
                onChangePage={onChangePage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
