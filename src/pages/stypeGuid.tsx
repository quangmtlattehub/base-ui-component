import React, { useState } from "react";
import EdgeButton from "../components/ui/edgeButton";
import InputAmount from "../components/ui/inputAmount";
import SelectOptions, { Option } from "../components/ui/SelectOption";

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
          className="mt-3"
          options={options}
          setValue={setValueOption}
          value={valueOption}
        />
      </div>
    </div>
  );
}

export default StyleGuid;
