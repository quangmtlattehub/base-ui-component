import clsx from "clsx";
import { ReactNode } from "react";
interface FloatInputLabelProps {
  label?: string;
  classNameLabel?: string;
  classNameInput?: string;
  suffixEle?: ReactNode;
  value: any;
  setValue: (value: any) => void;
}
function FloatInputLabel(props: FloatInputLabelProps) {
  const { label, classNameLabel, classNameInput, suffixEle, value, setValue } =
    props;
  return (
    <div className="relative">
      <input
        type="text"
        id="floating_outlined"
        className={clsx([
          "block px-2.5 pb-2.5 pt-4 w-full bg-transparent !rounded border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer text-base font-normal text-white",
          classNameInput && classNameInput,
        ])}
        placeholder=" "
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {label && (
        <label
          htmlFor="floating_outlined"
          className={clsx([
            "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ml-2 bg-black",
            classNameLabel && classNameLabel,
          ])}
        >
          {label}
        </label>
      )}

      {suffixEle && (
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          {suffixEle}
        </div>
      )}
    </div>
  );
}

export default FloatInputLabel;
