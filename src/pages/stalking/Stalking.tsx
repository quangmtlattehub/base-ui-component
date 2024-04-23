import React, { useState } from "react";
import FloatInputLabel from "../../components/ui/FloatInputLabel";
import SelectOptions, { Option } from "../../components/ui/SelectOption";
import EdgeButton from "../../components/ui/edgeButton";

function Stalking() {
  const [stakeValue, setStakeValue] = useState();
  const options = [
    { value: 1, name: "6 month", id: 1 },
    { value: 2, name: "12 month", id: 2 },
  ];
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const onChangeOption = (option: Option) => {
    setSelectedOption(option);
  };
  return (
    <div className="container">
      <h2 className="text-[46px]">Staking</h2>
      <div className="flex mt-8 gap-8 lg:flex-row flex-col">
        <div className="flex-[4]">
          <div className="md:p-8 p-4 rounded-[10px] bg-bgBlock">
            <p className="md:text-[32px] text-2xl font-bold">Staking Pool</p>
            <div className="flex mt-6 gap-4 min-h-[180px]">
              <div className="md:p-6 p-4 rounded-[10px] bg-bgBlock2 flex-[1] flex flex-col justify-center">
                <div className="">
                  <p className="text-sm uppercase mb-4">Total SATO Locked</p>
                  <p className="md:text-2xl text-xl font-bold text-gradient">
                    1,010,761.24 SATO
                  </p>
                </div>
              </div>
              <div className="md:p-6 p-4 rounded-[10px] bg-bgBlock2 flex-[1] flex flex-col justify-center">
                <div className="">
                  <p className="text-sm uppercase mb-4">Avg $SATO APR</p>
                  <p className="md:text-2xl text-xl font-bold text-gradient">
                    32.4%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:p-8 p-4 rounded-[10px] bg-bgBlock mt-4">
            <p className="md:text-[32px] text-2xl font-bold">My Staking(s)</p>
            <div className="flex mt-6 gap-4 min-h-[180px]">
              <div className="md:p-6 p-4 rounded-[10px] bg-bgBlock2 flex-[1] flex flex-col justify-center">
                <div className="">
                  <p className="text-sm uppercase mb-4">Total SATO Locked</p>
                  <p className="md:text-2xl text-xl font-bold text-gradient">
                    1,010,761.24 SATO
                  </p>
                </div>
              </div>
              <div className="md:p-6 p-4 rounded-[10px] bg-bgBlock2 flex-[1] flex flex-col justify-center">
                <div className="">
                  <p className="text-sm uppercase mb-4">TOTAL SATO EARN</p>
                  <p className="md:text-2xl text-xl font-bold text-gradient">
                    100 SATO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[3] p-6 pb-8 bg-bgBlock rounded-[10px] flex flex-col justify-between min-h-[640px]">
          <p className="md:text-[32px] text-2xl font-bold">My Staking(s)</p>
          <div className="">
            <FloatInputLabel
              label="Referral Code"
              classNameLabel="!bg-[#1a1a1a] ml-2"
              suffixEle={
                <div className="px-3 py-[10px] font-semibold text-sm ">
                  SATO
                </div>
              }
              value={stakeValue}
              setValue={setStakeValue}
            />
            <p className="text-xs text-[#D8C2BA] mt-1 px-4 ">
              Available: <span className="text-white">200</span> SATO
            </p>
          </div>
          <div className="">
            <SelectOptions
              options={options}
              value={selectedOption}
              onChangeOption={onChangeOption}
              setValue={setSelectedOption}
              label="Stake Period"
              isShowImgOption={false}
              className="border-border h-[50px]"
              classNameOptionList="w-full !top-auto"
              classNameLabel="absolute -top-2 bg-[#1a1a1a] text-xs font-normal z-[1] left-2 px-1 !text-textOpacity"
            />
          </div>
          <div className="bg-bgTable p-3 rounded-[10px]">
            <p className="uppercase text-sm mb-4">Notes</p>
            <ul className="text-xs text-textOpacity">
              <li>
                The $SATO you stake will be locked up during the staking period.
                You will be able to withdraw them along with the staking rewards
                at the end of the staking period
              </li>
              <li>
                Every $SATO can only be added to one stake position at the same
                time
              </li>
              <li>
                The stake rewards will be boosted and all $SATO from the Rune
                NFT will be compounded automatically in the stake
              </li>
              <li>
                By clicking 'Stake', you acknowledge that you fully understand
                the staking mechanism, and all risks associated with this
                behavior
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">
              Est APR: <span className="text-gradient">32.4%</span>
            </p>
            <img src="/images/home/btn-stake.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stalking;
