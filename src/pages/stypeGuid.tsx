import React, { useState } from "react";
import EdgeButton from "../components/ui/edgeButton";
import InputAmount from "../components/ui/inputAmount";
import SelectOptions, { Option } from "../components/ui/SelectOption";
import FloatInputLabel from "../components/ui/FloatInputLabel";
import Modal from "../components/ui/Modal";
import clsx from "clsx";
import xstore from "../components/xstore";

function StyleGuid() {
  const [valueInput, setValueInput] = useState(0);
  const options: Option[] = [
    {
      id: 1,
      name: "option 1",
      value: 1,
      image: "/images/chain/ethereum.svg",
    },
  ];
  const [valueOption, setValueOption] = useState<Option>();
  const [valueInputFloatLabel, setValueInputFloatLabel] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="pt-28 container flex flex-col gap-y-4">
      <h1>H1 heading</h1>
      <h2>H2 heading</h2>
      <h3>H3 heading</h3>
      <h4>H4 heading</h4>
      <div>
        <div className="mb-2">Button</div>
        <div className="flex items-center gap-x-3">
          <button>Default button</button>
          <button disabled>Default button disabled</button>
          <EdgeButton text="Edge Button 1" color="gradient" id={5} />
          <EdgeButton
            text="Edge Button white"
            color="white"
            classText="text-gradient"
            id={6}
          />
        </div>
      </div>
      <div>
        <div className="mb-2">Gradient color</div>
        <div className="flex gap-x-4 items-center">
          <div className="bg-gradient w-fit p-2">Bg gradient</div>
          <div className="text-gradient">Text gradient</div>
        </div>
      </div>
      <div>
        <div className="mb-2">Input, Select</div>
        <div className="flex gap-x-4 items-center"></div>
        <InputAmount setValue={setValueInput} value={valueInput} />
        <SelectOptions
          onChangeOption={(value) => {
            setValueOption(value);
          }}
          className="my-3"
          options={options}
          setValue={setValueOption}
          value={valueOption}
        />
        <FloatInputLabel
          value={valueInputFloatLabel}
          setValue={setValueInputFloatLabel}
          label="Test"
          classNameInput="!w-[300px]"
        />
      </div>
      <div>
        <div className="mb-2">Modal</div>
        <button
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          Open modal
        </button>
        <Modal
          isOpen={isOpenModal}
          onClose={() => {
            setIsOpenModal(false);
          }}
        >
          <div>
            <div className="py-[26px] px-[14px] flex justify-between border-b border-white/70">
              <span>
                Available Wallets ({xstore.page.connectWallet.length})
              </span>
              <img
                onClick={() => {
                  setIsOpenModal(false);
                }}
                className="cursor-pointer hover:opacity-70"
                src="/images/icon/close.svg"
                alt="close"
              />
            </div>
            <div className="py-3 px-4 grid grid-cols-2 gap-y-[10px] gap-x-[6px]">
              {xstore.page.connectWallet.map((wallet) => (
                <div
                  key={wallet.id}
                  className="flex items-center gap-x-[13px] px-[13px] py-[10px] bg-[#141414] rounded-2xl hover:bg-white/10 cursor-pointer"
                >
                  <img
                    src={wallet.imageUrl}
                    className={clsx([
                      "w-[50px] h-[50px] object-contain rounded-xl",
                      wallet.className,
                    ])}
                    alt={wallet.name}
                  />
                  <span>{wallet.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default StyleGuid;
