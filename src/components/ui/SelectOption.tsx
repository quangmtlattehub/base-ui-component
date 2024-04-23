import clsx from "clsx";
import React, { useState } from "react";

// export type OptionImage = {
//   image?: string;
//   value: number;
//   title: string;
// };
export interface Option {
  id: any;
  shortName?: string;
  value: any;
  name: string;
  image?: string;
  price?: number;
  listExtrasOptions?: {
    name?: string;
    image?: string;
    price?: number;
    id: any;
    value?: any;
  }[];
}
interface SelectOptionsProps {
  options: Option[];
  value?: Option;
  onChangeOption: (option: Option) => void;
  setValue: Function;
  label?: string;
  className?: string;
  icon?: React.ReactNode;
  classNameOptionSelected?: string;
  classNameOptionList?: string;
  innerItem?: React.ReactNode;
  isShowImgOption?: boolean;
  classNameContainer?: string;
  classNameLabel?: string;
}
function SelectOptions(props: SelectOptionsProps) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const { isShowImgOption = true, classNameContainer, onChangeOption } = props;

  return (
    <form
      className={clsx(
        "relative z-30 select",
        classNameContainer && classNameContainer
      )}
    >
      {props?.label && (
        <label
          htmlFor="countries"
          className={clsx([
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            props.classNameLabel && props.classNameLabel,
          ])}
        >
          {props.label}
        </label>
      )}
      <div
        onClick={() => {
          setIsOpenSelect((prev) => !prev);
        }}
        className={clsx([
          " cursor-pointer flex items-center gap-x-2 border border-bgButton py-[11px] px-4 rounded-md justify-between hover:opacity-70 text-sm h-10",
          props.className && props.className,
        ])}
      >
        {props?.innerItem ? (
          props.innerItem
        ) : (
          <div className="flex items-center gap-x-2 text-base font-normal">
            {props.value?.image && (
              <img
                src={props.value?.image}
                alt={props.value?.name}
                className="w-[22px] h-[22px]"
              />
            )}
            <span className={props.classNameOptionSelected}>
              {props.value?.name}
            </span>
            {props.value?.price && <span>${props.value?.price}</span>}
          </div>
        )}

        {props?.icon ? (
          props?.icon
        ) : (
          <img src="/images/icon/arrow-down.svg" alt="arrow-down" />
        )}
      </div>
      {isOpenSelect && (
        <ul
          style={{ height: `calc(${props.options.length * 40}px)` }}
          className={clsx([
            "bg-[#222222] text-sm absolute w-[240px] z-10 pl-0 top-16 rounded-md overflow-hidden shadow-md flex flex-col",
            props.classNameOptionList && props.classNameOptionList,
          ])}
        >
          {props.options.map((option) => (
            <li
              className={`list-none !py-[8px] px-[16px] cursor-pointer hover:bg-primary flex items-center gap-x-3 text-base font-normal h-[40px] ${
                props.value?.value === option.value && "text-gradient"
              }`}
              key={option.id}
              onClick={() => {
                onChangeOption(option);
                setIsOpenSelect(false);
              }}
            >
              {isShowImgOption && (
                <img
                  src={option.image}
                  alt={option.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              )}
              <span>{option.name}</span>
              {option?.price && <span>${option.price}</span>}
              {props.value?.value === option.value && (
                <img
                  className="ml-auto"
                  src="/images/icon/check.svg"
                  alt="check"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SelectOptions;
